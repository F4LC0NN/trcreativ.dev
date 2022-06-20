import React from 'react';

import myProjects from '../../../../assets/images/main/projects/myProjects.svg';

const $projects = `
  w-full
  h-[100vh]
`;

const $projectsTitle = `
  hidden
`;

const $projectsTitleImageContainer = `
  w-full
  h-[10vh]
  lg:h-[20vh]
  flex
  justify-center
  items-center
  lg:bg-projectsBgImage
  lg:bg-no-repeat
  lg:bg-left
`;

const $projectsTitleImage = `
  w-40
  h-fit
`;

function Projects() {
  return (
    <section id="projects" className={$projects}>
      <h2 className={$projectsTitle}>My projects</h2>
      <div className={$projectsTitleImageContainer}>
        <img
          src={myProjects}
          alt="My projects"
          className={$projectsTitleImage}
        />
      </div>
    </section>
  );
}

export default Projects;
