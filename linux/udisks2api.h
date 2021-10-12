#ifndef UDISKS2API_H
#define UDISKS2API_H

/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2020 Raspberry Pi (Trading) Limited
 */

#include <QObject>
#include <QFile>

class UDisks2Api : public QObject
{
    Q_OBJECT
public:
    explicit UDisks2Api(QObject *parent = nullptr);
    static auto authOpen(const QString &device, const QString &mode = "rw") -> int;
    static auto formatDrive(const QString &device, bool mountAfterwards = true) -> bool;
    static auto mountDevice(const QString &device) -> QString;
    static void unmountDrive(const QString &device);

protected:
    static auto _resolveDevice(const QString &device) -> QString;
    static void _unmountDrive(const QString &driveDbusPath);

signals:

public slots:
};

#endif // UDISKS2API_H
