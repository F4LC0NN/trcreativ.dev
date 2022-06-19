import { motion } from 'framer-motion';
import React from 'react';

import Portrait from './Portrait';
import Description from './description/Description';

import aboutMe from '../../../../assets/images/main/about/aboutMe.svg';

const $aboutStyle = `
  w-full
  h-fit
  lg:h-[100vh]
  px-6
  xs:px-16
  sm:px-32
  md:px-48
  lg:px-72
  lg:px-6
  lg:flex
  lg:flex-col
  lg:relative
`;

const $aboutTitleStyle = `
  hidden
`;

const $aboutTitleImageContainerStyle = `
  w-full
  h-[10vh]
  lg:h-[20vh]
  flex
  justify-center
  items-center
  lg:bg-aboutBgImage
  lg:bg-no-repeat
  lg:bg-right
`;

const $aboutTitleImageStyle = `
  w-32
  h-fit
`;

const $aboutTextContainer = `
  lg:flex
`;

function About() {
  return (
    <motion.article
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 0.7 }}
      className={$aboutStyle}
      id="about"
    >
      <h2 className={$aboutTitleStyle}>About Me</h2>
      <div className={$aboutTitleImageContainerStyle}>
        <img
          src={aboutMe}
          alt="About Me"
          className={$aboutTitleImageStyle}
        />
      </div>
      <div className={$aboutTextContainer}>
        <Portrait />
        <Description />
      </div>
    </motion.article>
  );
}

export default About;
