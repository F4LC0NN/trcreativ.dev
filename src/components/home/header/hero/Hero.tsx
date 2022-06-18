import React from 'react';

import DesktopHero from './desktopHero/DesktopHero';
import MobileHero from './mobileHero/MobileHero';

import useWindowWidth from '../../../../hooks/useWindowWidth';

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
    <div>
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
    </div>
  );
}

export default Hero;
