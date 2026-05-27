/**
 * This file is part of feature-today.
 * Copyright (C) 2026 feature-today contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * Entry point used by `vite preview` to serve a production-style bundle.
 */

import { createQwikRouter } from "@qwik.dev/router/middleware/node";
import render from "./entry.ssr";

export default createQwikRouter({ render });
