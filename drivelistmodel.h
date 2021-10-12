#ifndef DRIVELISTMODEL_H
#define DRIVELISTMODEL_H

/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2020 Raspberry Pi (Trading) Limited
 */

#include <QAbstractItemModel>
#include <QMap>
#include <QHash>
#include "drivelistitem.h"
#include "drivelistmodelpollthread.h"

class DriveListModel : public QAbstractListModel
{
    Q_OBJECT
public:
    DriveListModel(QObject *parent = nullptr);
    auto rowCount(const QModelIndex & /*parent*/) const -> int override;
    auto roleNames() const -> QHash<int, QByteArray> override;
    auto data(const QModelIndex &index, int role) const -> QVariant override;
    void startPolling();
    void stopPolling();

    enum driveListRoles {
        deviceRole = Qt::UserRole + 1, descriptionRole, sizeRole, isUsbRole, isScsiRole, isReadOnlyRole, mountpointsRole
    };

public slots:
    void processDriveList(const std::vector<Drivelist::DeviceDescriptor>& l);

protected:
    QMap<QString,DriveListItem *> _drivelist;
    QHash<int, QByteArray> _rolenames;
    DriveListModelPollThread _thread;
};

#endif // DRIVELISTMODEL_H
