import { motion } from 'framer-motion';
import React from 'react';

import Portrait from './Portrait';
import Description from './description/Description';

import aboutMe from '../../../../assets/images/main/about/aboutMe.svg';
import useWindowWidth from '../../../../hooks/useWindowWidth';

const $aboutStyle = `
  w-full
  h-fit
  px-6
  sm:px-32
  md:px-48
  lg:px-72
  xl:px-6
`;

const $aboutTitleStyle = `
  hidden
`;

const $aboutTitleImageContainerStyle = `
  w-full
  h-[10vh]
  flex
  justify-center
  items-center
`;

const $aboutTitleImageStyle = `
  w-32
  h-fit
`;

const $aboutTextContainer = `
  xl:flex
`;

const $aboutPortraitContainer = `
  xl:w-full
  xl:h-auto
  xl:flex
  xl:items-center
`;

function About() {
  const { windowWidth } = useWindowWidth();

  return (
    <motion.article
      initial={{ x: 30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 0.7 }}
      className={$aboutStyle}
    >
      <h2 className={$aboutTitleStyle}>About Me</h2>
      <div className={$aboutTitleImageContainerStyle}>
        <img
          src={aboutMe}
          alt="About Me"
          id="about"
          className={$aboutTitleImageStyle}
        />
      </div>
      <div className={$aboutTextContainer}>
        {
          windowWidth <= 1024
            ? <Portrait />
            : (
              <div className={$aboutPortraitContainer}>
                <Portrait />
              </div>
            )

        }

        <Description />
      </div>
    </motion.article>
  );
}

export default About;
