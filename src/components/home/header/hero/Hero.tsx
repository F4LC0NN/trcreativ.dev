import React from 'react';

import DesktopHero from './desktopHero/DesktopHero';
import MobileHero from './mobileHero/MobileHero';

import useWindowWidth from '../../../../hooks/useWindowWidth';

const $heroMobileContainerStyle = `
  w-full
  h-[40vh]
`;

const $heroDesktopContainerStyle = `
  w-full
  h-[70vh]
  xl:h-[100vh]
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
