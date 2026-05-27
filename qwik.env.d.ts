/**
 * This file is part of feature-today.
 * Copyright (C) 2026 feature-today contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/// <reference types="vite/client" />
/// <reference types="@qwik.dev/core" />

declare module "@qwik-router-config" {
  const config: import("@qwik.dev/router").QwikRouterConfig;
  export default config;
}
