/**
 * This file is part of feature-today.
 * Copyright (C) 2026 feature-today contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it } from "vitest";
import type { Project } from "@feature-today/common";
import { projects } from "./projects.data";

describe("projects.data", () => {
  it("exposes at least one project", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("each project has the required shape", () => {
    for (const p of projects as Project[]) {
      expect(typeof p.title).toBe("string");
      expect(typeof p.path).toBe("string");
      expect(typeof p.description).toBe("string");
      expect(p.path).not.toMatch(/^\//);
    }
  });
});
