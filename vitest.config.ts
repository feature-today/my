/**
 * This file is part of feature-today.
 * Copyright (C) 2026 feature-today contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { defineConfig } from "vitest/config";
import { qwikVite } from "@qwik.dev/core/optimizer";

export default defineConfig({
  plugins: [qwikVite()],
  test: {
    environment: "node",
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov", "html", "json-summary"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/**/*.{test,spec}.{ts,tsx}",
        "src/entry.*.tsx",
      ],
      thresholds: {
        lines: 70,
        functions: 70,
        branches: 70,
        statements: 70,
      },
    },
  },
});
