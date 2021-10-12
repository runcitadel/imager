#ifndef NAN_H
#define NAN_H

/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2020 Raspberry Pi (Trading) Limited
 */

// Dummy Node.js macros for 3rd party dependencies
#define NAN_METHOD(x)

namespace v8 {
    class Object;
    template <class T> class Local;
}

// mountutils also expects some #include files to be there
#include <cstring>
#include <vector>

#endif // NAN_H
