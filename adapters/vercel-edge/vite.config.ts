/**
 * This file is part of feature-today.
 * Copyright (C) 2026 feature-today contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { vercelEdgeAdapter } from "@qwik.dev/router/adapters/vercel-edge/vite";
import { extendConfig } from "@qwik.dev/router/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["src/entry.vercel-edge.tsx", "@qwik-router-config"],
      },
      outDir: ".vercel/output/functions/_qwik-router.func",
    },
    plugins: [vercelEdgeAdapter()],
  };
});
