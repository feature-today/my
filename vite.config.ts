/**
 * This file is part of feature-today.
 * Copyright (C) 2026 feature-today contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { defineConfig } from "vite";
import { qwikVite } from "@qwik.dev/core/optimizer";
import { qwikRouter } from "@qwik.dev/router/vite";

export default defineConfig(() => {
  return {
    plugins: [qwikRouter(), qwikVite()],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    server: {
      headers: {
        "Cache-Control": "public, max-age=0",
      },
    },
    resolve: {
      alias: {
        "~": new URL("./src/", import.meta.url).pathname,
      },
    },
  };
});
