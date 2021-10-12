#ifndef DOWNLOADEXTRACTTHREAD_H
#define DOWNLOADEXTRACTTHREAD_H

/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2020 Raspberry Pi (Trading) Limited
 */

#include "downloadthread.h"
#include <deque>
#include <condition_variable>
#include <QtConcurrent/QtConcurrent>

class _extractThreadClass;

class DownloadExtractThread : public DownloadThread
{
    Q_OBJECT
public:
    /*
     * Constructor
     *
     * - url: URL to download
     * - localfolder: Folder to extract archive to
     */
    explicit DownloadExtractThread(const QByteArray &url, const QByteArray &localfilename = "", const QByteArray &expectedHash = "", QObject *parent = nullptr);

    ~DownloadExtractThread() override;
    void cancelDownload() override;
    virtual void extractImageRun();
    virtual void extractMultiFileRun();
    auto isImage() -> bool override;
    virtual void enableMultipleFileExtraction();

protected:
    char *_abuf[2];
    size_t _abufsize;
    _extractThreadClass *_extractThread;
    std::deque<QByteArray> _queue;
    static const int MAX_QUEUE_SIZE;
    std::mutex _queueMutex;
    std::condition_variable _cv;
    bool _ethreadStarted, _isImage;
    AcceleratedCryptographicHash _inputHash;
    int _activeBuf;
    bool _writeThreadStarted;
    QFuture<size_t> _writeFuture;

    auto _popQueue() -> QByteArray;
    void _pushQueue(const char *data, size_t len);
    virtual void _cancelExtract();
    auto _writeData(const char *buf, size_t len) -> size_t override;
    void _onDownloadSuccess() override;
    void _onDownloadError(const QString &msg) override;

    virtual auto _on_read(struct archive *a, const void **buff) -> ssize_t;
    virtual auto _on_close(struct archive *a) -> int;

    static auto _archive_read(struct archive *a, void *client_data, const void **buff) -> ssize_t;
    static auto _archive_close(struct archive *a, void *client_data) -> int;
};

#endif // DOWNLOADEXTRACTTHREAD_H
