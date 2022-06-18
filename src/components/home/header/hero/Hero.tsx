import React from 'react';
import MobileHero from './mobileHero/MobileHero';

const $heroContainerStyle = `
  w-full
  h-[40vh]
`;

function Hero() {
  return (
    <div className={$heroContainerStyle}>
      <MobileHero />
    </div>
  );
}

export default Hero;
