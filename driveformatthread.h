#ifndef DRIVEFORMATTHREAD_H
#define DRIVEFORMATTHREAD_H

/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2020 Raspberry Pi (Trading) Limited
 */

#include <QThread>

class DriveFormatThread : public QThread
{
    Q_OBJECT
public:
    DriveFormatThread(QByteArray device, QObject *parent = nullptr);
    ~DriveFormatThread() override;
    void run() override;

signals:
    void success();
    void error(QString _t1);

protected:
    QByteArray _device;
};

#endif // DRIVEFORMATTHREAD_H
