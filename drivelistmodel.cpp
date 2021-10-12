/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2020 Raspberry Pi (Trading) Limited
 */

#include "drivelistmodel.h"
#include "config.h"
#include "dependencies/drivelist/src/drivelist.hpp"
#include <QSet>
#include <QDebug>

DriveListModel::DriveListModel(QObject *parent)
    : QAbstractListModel(parent)
{
    _rolenames = {
        {deviceRole, "device"},
        {descriptionRole, "description"},
        {sizeRole, "size"},
        {isUsbRole, "isUsb"},
        {isScsiRole, "isScsi"},
        {isReadOnlyRole, "isReadOnly"},
        {mountpointsRole, "mountpoints"}};

    // Enumerate drives in seperate thread, but process results in UI thread
    connect(&_thread, SIGNAL(newDriveList(std::vector<Drivelist::DeviceDescriptor>)), SLOT(processDriveList(std::vector<Drivelist::DeviceDescriptor>)));
}

auto DriveListModel::rowCount(const QModelIndex & /*parent*/) const -> int
{
    return _drivelist.count();
}

auto DriveListModel::roleNames() const -> QHash<int, QByteArray>
{
    return _rolenames;
}

auto DriveListModel::data(const QModelIndex &index, int role) const -> QVariant
{
    int row = index.row();
    if (row < 0 || row >= _drivelist.count())
    {
        return QVariant();
    }

    QByteArray propertyName = _rolenames.value(role);
    if (propertyName.isEmpty())
    {
        return QVariant();
    }
    return _drivelist.values().at(row)->property(propertyName);
}

void DriveListModel::processDriveList(const std::vector<Drivelist::DeviceDescriptor> &l)
{
    bool changes = false;
    bool filterSystemDrives = DRIVELIST_FILTER_SYSTEM_DRIVES;
    QSet<QString> drivesInNewList;

    for (const auto &i : l)
    {
        // Convert STL vector<string> to Qt QStringList
        QStringList mountpoints;
        for (const auto &s : i.mountpoints)
        {
            mountpoints.append(QString::fromStdString(s));
        }

        if (filterSystemDrives)
        {
            if (i.isSystem)
            {
                continue;
            }
        }
        // Should already be caught by isSystem variable, but just in case...
        if (mountpoints.contains("/") || mountpoints.contains("C://"))
        {
            continue;
        }

        // Skip zero-sized devices
        if (i.size == 0)
        {
            continue;
        }

#ifdef Q_OS_DARWIN
        if (i.isVirtual)
            continue;
#endif

        QString deviceNamePlusSize = QString::fromStdString(i.device) + ":" + QString::number(i.size);
        if (i.isReadOnly)
        {
            deviceNamePlusSize += "ro";
        }
        drivesInNewList.insert(deviceNamePlusSize);

        if (!_drivelist.contains(deviceNamePlusSize))
        {
            // Found new drive
            if (!changes)
            {
                beginResetModel();
                changes = true;
            }

            _drivelist[deviceNamePlusSize] = new DriveListItem(QString::fromStdString(i.device), QString::fromStdString(i.description), i.size, i.isUSB, i.isSCSI, i.isReadOnly, mountpoints, this);
        }
    }

    // Look for drives removed
    QStringList drivesInOldList = _drivelist.keys();
    for (auto &device : drivesInOldList)
    {
        if (!drivesInNewList.contains(device))
        {
            if (!changes)
            {
                beginResetModel();
                changes = true;
            }

            _drivelist.value(device)->deleteLater();
            _drivelist.remove(device);
        }
    }

    if (changes)
    {
        endResetModel();
    }
}

void DriveListModel::startPolling()
{
    _thread.start();
}

void DriveListModel::stopPolling()
{
    _thread.stop();
}
