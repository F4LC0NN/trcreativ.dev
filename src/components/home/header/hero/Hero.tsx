import React from 'react';

import DesktopHero from './desktopHero/DesktopHero';
import MobileHero from './mobileHero/MobileHero';

import useWindowWidth from '../../../../hooks/useWindowWidth';

const $heroContainerStyle = `
  w-full
  h-[40vh]
`;

function Hero() {
  const { windowWidth } = useWindowWidth();

  return (
    <div className={$heroContainerStyle}>
      <MobileHero windowWidth={windowWidth} />
      <DesktopHero />
    </div>
  );
}

export default Hero;
