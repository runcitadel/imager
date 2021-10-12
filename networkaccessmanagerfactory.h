#ifndef NETWORKACCESSMANAGERFACTORY_H
#define NETWORKACCESSMANAGERFACTORY_H

/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2020 Raspberry Pi (Trading) Limited
 */

#include <QQmlNetworkAccessManagerFactory>

class QNetworkDiskCache;

class NetworkAccessManagerFactory : public QObject, public QQmlNetworkAccessManagerFactory
{
public:
    NetworkAccessManagerFactory();
    auto create(QObject *parent) -> QNetworkAccessManager * override;

protected:
    QNetworkDiskCache *_c;
};

#endif // NETWORKACCESSMANAGERFACTORY_H
