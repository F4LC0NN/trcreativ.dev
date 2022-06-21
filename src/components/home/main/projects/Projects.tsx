import React from 'react';
import { motion } from 'framer-motion';

import myProjects from '../../../../assets/images/main/projects/title/myProjects.svg';
import ProjectsCarousel from './projectsCarousel/ProjectsCarousel';

const $projects = `
  w-full
  h-fit
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
    <motion.section
      id="projects"
      className={$projects}
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 0.7 }}
    >
      <h2 className={$projectsTitle}>My projects</h2>
      <div className={$projectsTitleImageContainer}>
        <img
          src={myProjects}
          alt="My projects"
          className={$projectsTitleImage}
        />
      </div>
      <ProjectsCarousel />
    </motion.section>
  );
}

export default Projects;
