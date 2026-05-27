/**
 * This file is part of feature-today.
 * Copyright (C) 2026 feature-today contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { component$ } from "@qwik.dev/core";
import type { Project } from "@feature-today/common";
import styles from "./project-selector.module.css";

interface ProjectSelectorProps {
  projects: Project[];
}

export default component$<ProjectSelectorProps>(({ projects }) => {
  return (
    <div class={styles.hero}>
      <div class={styles["card-group"]}>
        {projects.map((project) => (
          <article key={project.path} class={styles.card}>
            <a href={`/${project.path}/`}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <span>Open →</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
});
