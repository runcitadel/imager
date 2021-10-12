#ifndef DOWNLOADTHREAD_H
#define DOWNLOADTHREAD_H

/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2020 Raspberry Pi (Trading) Limited
 */

#include "acceleratedcryptographichash.h"
#include <QElapsedTimer>
#include <QFile>
#include <QString>
#include <QThread>
#include <atomic>
#include <ctime>
#include <curl/curl.h>
#include <fstream>

#ifdef Q_OS_WIN
#include "windows/winfile.h"
#endif
#ifdef Q_OS_DARWIN
#include "mac/macfile.h"
#endif


class DownloadThread : public QThread
{
    Q_OBJECT
public:
    /*
     * Constructor
     *
     * - url: URL to download
     * - localfilename: File name to save downloaded file as. If empty, store data in memory buffer
     */
    explicit DownloadThread(QByteArray url, QByteArray localfilename = "", QByteArray expectedHash = "", QObject *parent = nullptr);

    /*
     * Destructor
     *
     * Waits until download is complete
     * If this is not desired, call cancelDownload() first
     */
    ~DownloadThread() override;

    /*
     * Cancel download
     *
     * Async function. Returns immedeately, but can take a second before download actually stops
     */
    virtual void cancelDownload();

    /*
     * Set proxy server.
     * Specify a string like this: user:pass@proxyserver:8080/
     * Used globally, for all connections
     */
    static void setProxy(const QByteArray &proxy);

    /*
     * Returns proxy server used
     */
    static auto proxy() -> QByteArray;

    /*
     * Set user-agent header string
     */
    void setUserAgent(const QByteArray &ua);

    /*
     * Returns true if download has been successful
     */
    auto successfull() const -> bool;

    /*
     * Returns the downloaded data if saved to memory buffer instead of file
     */
    auto data() -> QByteArray;

    /*
     * Delete downloaded file
     */
    void deleteDownloadedFile();

    /*
     * Return last-modified date (if available) as unix timestamp
     * (seconds since 1970)
     */
    auto lastModified() const -> time_t;

    /*
     * Return current server time as unix timestamp
     */
    auto serverTime() const -> time_t;

    /*
     * Enable/disable verification
     */
    void setVerifyEnabled(bool verify);

    /*
     * Enable disk cache
     */
    void setCacheFile(const QString &filename, qint64 filesize = 0);

    /*
     * Set input buffer size
     */
    void setInputBufferSize(int len);

    /*
     * Enable image customization
     */
    void setImageCustomization(const QByteArray &config, const QByteArray &cmdline, const QByteArray &firstrun);

    /*
     * Thread safe download progress query functions
     */
    auto dlNow() -> uint64_t;
    auto dlTotal() -> uint64_t;
    auto verifyNow() -> uint64_t;
    auto verifyTotal() -> uint64_t;
    auto bytesWritten() -> uint64_t;

    virtual auto isImage() -> bool;
    auto _writeFile(const char *buf, size_t len) -> size_t;

signals:
    void success();
    void error(QString _t1);
    void cacheFileUpdated(QByteArray _t1);
    void finalizing();
    void preparationStatusUpdate(QString _t1);

protected:
    void run() override;
    virtual void _onDownloadSuccess();
    virtual void _onDownloadError(const QString &msg);

    void _hashData(const char *buf, size_t len);
    void _writeComplete();
    auto _verify() -> bool;
    auto _authopen(const QByteArray &filename) -> int;
    auto _openAndPrepareDevice() -> bool;
    void _writeCache(const char *buf, size_t len);
    auto _sectorsWritten() -> qint64;
    void _closeFiles();
    static auto _fileGetContentsTrimmed(const QString &filename) -> QByteArray;
    auto _customizeImage() -> bool;

    /*
     * libcurl callbacks
     */
    virtual auto _writeData(const char *buf, size_t len) -> size_t;
    auto _progress(curl_off_t dltotal, curl_off_t dlnow, curl_off_t ultotal, curl_off_t ulnow) -> bool;
    void _header(const std::string &header);

    static auto _curl_write_callback(char *ptr, size_t size, size_t nmemb, void *userdata) -> size_t;
    static auto _curl_xferinfo_callback(void *userdata, curl_off_t dltotal, curl_off_t dlnow, curl_off_t ultotal, curl_off_t ulnow) -> int;
    static auto _curl_header_callback( void *ptr, size_t size, size_t nmemb, void *userdata) -> size_t;

    CURL *_c;
    curl_off_t _startOffset;
    std::atomic<std::uint64_t> _lastDlTotal, _lastDlNow, _verifyTotal, _lastVerifyNow, _bytesWritten;
    qint64 _sectorsStart;
    QByteArray _url, _useragent, _buf, _filename, _lastError, _expectedHash, _config, _cmdline, _firstrun;
    char *_firstBlock;
    size_t _firstBlockSize;
    static QByteArray _proxy;
    static int _curlCount;
    bool _cancelled, _successful, _verifyEnabled, _cacheEnabled, _ejectEnabled;
    time_t _lastModified, _serverTime, _lastFailureTime;
    QElapsedTimer _timer;
    int _inputBufferSize;

#ifdef Q_OS_WIN
    WinFile _file, _volumeFile;
    QByteArray _nr;
#elif defined(Q_OS_DARWIN)
    MacFile _file;
#else
    QFile _file;
#endif
    QFile _cachefile;

    AcceleratedCryptographicHash _writehash, _verifyhash;
};

#endif // DOWNLOADTHREAD_H
