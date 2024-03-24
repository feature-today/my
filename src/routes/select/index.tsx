import { component$ } from '@builder.io/qwik';
import ProjectSelector from '~/components/select/project-selector/project-selector';

import projects from './projects.json';

export default component$(() => {
  return (
    <>
      <ProjectSelector projects={projects} />
    </>
  );
});