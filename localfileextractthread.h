#ifndef LOCALFILEEXTRACTTHREAD_H
#define LOCALFILEEXTRACTTHREAD_H

/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2020 Raspberry Pi (Trading) Limited
 */

#include "downloadextractthread.h"
#include <QFile>

class LocalFileExtractThread : public DownloadExtractThread
{
    Q_OBJECT
public:
    explicit LocalFileExtractThread(const QByteArray &url, const QByteArray &dst = "", const QByteArray &expectedHash = "", QObject *parent = nullptr);
    ~LocalFileExtractThread() override;

protected:
    void _cancelExtract() override;
    void run() override;
    auto _on_read(struct archive *a, const void **buff) -> ssize_t override;
    auto _on_close(struct archive *a) -> int override;
    QFile _inputfile;
    char *_inputBuf;
};

#endif // LOCALFILEEXTRACTTHREAD_H
