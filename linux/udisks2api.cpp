/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2020 Raspberry Pi (Trading) Limited
 */

#include "udisks2api.h"
#include <unistd.h>
#include <fcntl.h>
#include <QDBusInterface>
#include <QDBusReply>
#include <QDBusUnixFileDescriptor>
#include <QDebug>
#include <QThread>

UDisks2Api::UDisks2Api(QObject *parent)
    : QObject(parent)
{
}

auto UDisks2Api::authOpen(const QString &device, const QString &mode) -> int
{
    QString devpath = _resolveDevice(device);
    if (devpath.isEmpty())
    {
        return -1;
    }

    QDBusInterface blockdevice("org.freedesktop.UDisks2", devpath,
                               "org.freedesktop.UDisks2.Block", QDBusConnection::systemBus());
    QString drive = blockdevice.property("Drive").value<QDBusObjectPath>().path();
    if (!drive.isEmpty() && drive != "/")
    {
        _unmountDrive(drive);
    }

    // User may need to enter password in authentication dialog so set long timeout
    blockdevice.setTimeout(3600 * 1000);
    QVariantMap options = {{"flags", O_EXCL}};
    QDBusReply<QDBusUnixFileDescriptor> dbusfd = blockdevice.call("OpenDevice", mode, options);

    if (!blockdevice.isValid() || !dbusfd.isValid() || !dbusfd.value().isValid())
    {
        return -1;
    }

    int fd = ::dup(dbusfd.value().fileDescriptor());

    return fd;
}

auto UDisks2Api::_resolveDevice(const QString &device) -> QString
{
    QDBusInterface manager("org.freedesktop.UDisks2", "/org/freedesktop/UDisks2/Manager",
                           "org.freedesktop.UDisks2.Manager", QDBusConnection::systemBus());
    QVariantMap devspec = {{"path", device}};
    QVariantMap options;

    QDBusReply<QList<QDBusObjectPath>> list = manager.call("ResolveDevice", devspec, options);

    if (!manager.isValid() || !list.isValid() || list.value().isEmpty())
    {
        return QString();
    }

    return list.value().constFirst().path();
}

void UDisks2Api::_unmountDrive(const QString &driveDbusPath)
{
    //qDebug() << "Drive:" << driveDbusPath;

    QDBusInterface manager("org.freedesktop.UDisks2", "/org/freedesktop/UDisks2/Manager",
                           "org.freedesktop.UDisks2.Manager", QDBusConnection::systemBus());
    QVariantMap options;
    QDBusReply<QList<QDBusObjectPath>> list = manager.call("GetBlockDevices", options);

    if (!manager.isValid() || !list.isValid())
    {
        return;
    }

    for (const auto &devpath : list.value())
    {
        QString devpathStr = devpath.path();

        QDBusInterface blockdevice("org.freedesktop.UDisks2", devpathStr,
                                   "org.freedesktop.UDisks2.Block", QDBusConnection::systemBus());
        QString driveOfDev = blockdevice.property("Drive").value<QDBusObjectPath>().path();
        if (driveOfDev != driveDbusPath)
        {
            continue;
        }

        //qDebug() << "Device:" << devpathStr << "belongs to same drive";
        QDBusInterface filesystem("org.freedesktop.UDisks2", devpathStr,
                                  "org.freedesktop.UDisks2.Filesystem", QDBusConnection::systemBus());

        QDBusReply<void> reply = filesystem.call("Unmount", options);
        if (reply.isValid())
        {
            qDebug() << "Unmounted" << devpathStr << "successfully";
        }
    }
}

auto UDisks2Api::formatDrive(const QString &device, bool mountAfterwards) -> bool
{
    QString devpath = _resolveDevice(device);
    if (devpath.isEmpty())
    {
        return false;
    }

    QDBusInterface blockdevice("org.freedesktop.UDisks2", devpath,
                               "org.freedesktop.UDisks2.Block", QDBusConnection::systemBus());

    QString drive = blockdevice.property("Drive").value<QDBusObjectPath>().path();
    if (!drive.isEmpty() && drive != "/")
    {
        _unmountDrive(drive);
    }

    qDebug() << "Repartitioning drive";
    QVariantMap options;
    QDBusReply<void> reply = blockdevice.call("Format", "dos", options);
    if (!reply.isValid())
    {
        qDebug() << "Error repartitioning device:" << reply.error().message();
        return false;
    }

    QVariantMap partOptions;
    QVariantMap formatOptions;
    QDBusInterface partitiontable("org.freedesktop.UDisks2", devpath,
                                  "org.freedesktop.UDisks2.PartitionTable", QDBusConnection::systemBus());

    /* The all-in-one CreatePartitionAndFormat udisks2 method seems to not always
       work properly. Do seperate actions with sleep in between instead */
    qDebug() << "Adding partition";
    QDBusReply<QDBusObjectPath> newpartition = partitiontable.call("CreatePartition", QVariant((qulonglong)4 * 1024 * 1024), QVariant((qulonglong)0), "0x0e", "", partOptions);
    if (!newpartition.isValid())
    {
        qDebug() << "Error adding partition:" << newpartition.error().message();
        return false;
    }
    qDebug() << "New partition:" << newpartition.value().path();
    QThread::sleep(1);
    qDebug() << "Formatting drive as FAT32";
    QDBusInterface newblockdevice("org.freedesktop.UDisks2", newpartition.value().path(),
                                  "org.freedesktop.UDisks2.Block", QDBusConnection::systemBus());
    newblockdevice.setTimeout(120 * 1000);
    QDBusReply<void> fatformatreply = newblockdevice.call("Format", "vfat", formatOptions);
    if (!fatformatreply.isValid())
    {
        qDebug() << "Error from udisks2 while performing FAT32 format:" << fatformatreply.error().message()
                 << "(going to try to mount anyway, as errors are sometimes false positive)";
        /* udisks2 sometimes report
           "Error synchronizing after formatting with type `vfat': Timed out waiting for object"
           when there is nothing actually wrong with the format */
    }

    if (mountAfterwards)
    {
        QDBusInterface filesystem("org.freedesktop.UDisks2", newpartition.value().path(),
                                  "org.freedesktop.UDisks2.Filesystem", QDBusConnection::systemBus());
        QVariantMap mountOptions;

        for (int attempt = 0; attempt < 10; attempt++)
        {
            qDebug() << "Mounting partition";
            QDBusReply<QString> mp = filesystem.call("Mount", mountOptions);

            if (mp.isValid())
            {
                qDebug() << "Mounted new file system at:" << mp;
                return true;
            }

            QThread::sleep(1);
        }

        qDebug() << "Failed to mount new file system.";
        return false;
    }

    return true;
}

auto UDisks2Api::mountDevice(const QString &device) -> QString
{
    QString devpath = _resolveDevice(device);
    if (devpath.isEmpty())
    {
        return QString();
    }

    QDBusInterface filesystem("org.freedesktop.UDisks2", devpath,
                              "org.freedesktop.UDisks2.Filesystem", QDBusConnection::systemBus());
    QVariantMap mountOptions;

    for (int attempt = 0; attempt < 10; attempt++)
    {
        qDebug() << "Mounting partition";
        QDBusReply<QString> mp = filesystem.call("Mount", mountOptions);

        if (mp.isValid())
        {
            qDebug() << "Mounted file system at:" << mp;
            return mp;
        }

        QThread::sleep(1);
    }

    qDebug() << "Failed to mount file system.";
    return QString();
}

void UDisks2Api::unmountDrive(const QString &device)
{
    QString devpath = _resolveDevice(device);
    if (devpath.isEmpty())
    {
        return;
    }

    _unmountDrive(devpath);
}
