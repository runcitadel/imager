#ifndef DRIVELISTMODELPOLLTHREAD_H
#define DRIVELISTMODELPOLLTHREAD_H

/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2020 Raspberry Pi (Trading) Limited
 */

#include <QThread>
#include "dependencies/drivelist/src/drivelist.hpp"

class DriveListModelPollThread : public QThread
{
    Q_OBJECT
public:
    DriveListModelPollThread(QObject *parent = nullptr);
    ~DriveListModelPollThread() override;
    void start();
    void stop();

protected:
    bool _terminate{false};
    void run() override;

signals:
    void newDriveList(std::vector<Drivelist::DeviceDescriptor> _t1);
};

#endif // DRIVELISTMODELPOLLTHREAD_H
