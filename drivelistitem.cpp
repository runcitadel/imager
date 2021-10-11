/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2020 Raspberry Pi (Trading) Limited
 */

#include "drivelistitem.h"

#include <utility>

DriveListItem::DriveListItem(QString device, QString description, quint64 size, bool isUsb, bool isScsi, bool readOnly, QStringList mountpoints, QObject *parent)
    : QObject(parent), _device(std::move(device)), _description(std::move(description)), _mountpoints(std::move(mountpoints)), _size(size), _isUsb(isUsb), _isScsi(isScsi), _isReadOnly(readOnly)
{

}

int DriveListItem::sizeInGb()
{
    return _size / 1000000000;
}
