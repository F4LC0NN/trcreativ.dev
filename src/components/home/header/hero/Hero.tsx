import React from 'react';
import { motion } from 'framer-motion';

import DesktopHero from './desktopHero/DesktopHero';
import MobileHero from './mobileHero/MobileHero';

import useWindowWidth from '../../../../hooks/useWindowWidth';

const $heroStyle = `
  w-full
  h-fit
`;

const $heroMobileContainerStyle = `
  w-full
  h-[40vh]
  p-6
`;

const $heroDesktopContainerStyle = `
  w-full
  h-[40vh]
  md:h-[60vh]
  lg:h-[80vh]
  xl:h-[100vh]
  p-6
`;

function Hero() {
  const { windowWidth } = useWindowWidth();

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 0.7 }}
      className={$heroStyle}
    >
      {
        windowWidth <= 499
          ? (
            <div className={$heroMobileContainerStyle}>
              <MobileHero windowWidth={windowWidth} />
            </div>
          )
          : (
            <div className={$heroDesktopContainerStyle}>
              <DesktopHero />
            </div>
          )
      }
    </motion.div>
  );
}

export default Hero;
