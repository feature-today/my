/**
 * This file is part of feature-today.
 * Copyright (C) 2026 feature-today contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { component$ } from "@qwik.dev/core";
import type { DocumentHead } from "@qwik.dev/router";

import ProjectSelector from "~/components/select/project-selector/project-selector";
import { projects } from "./projects.data";

export default component$(() => {
  return <ProjectSelector projects={projects} />;
});

export const head: DocumentHead = {
  title: "feature-today — select a project",
  meta: [
    {
      name: "description",
      content: "Pick a feature-today project to get started.",
    },
  ],
};
