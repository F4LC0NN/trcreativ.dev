import React from 'react';
import { motion } from 'framer-motion';

import useWindowWidth from '../../../../../hooks/useWindowWidth';

import myName from '../../../../../assets/images/header/myName.svg';

const $mobileHeroSmallStyle = `
  w-full
  h-full
  p-6
  flex
  items-center
`;

const $mobileHeroMediumStyle = `
  w-full
  h-full
  p-6
  flex
  items-center
  bg-heroImage
  bg-no-repeat
  bg-right-top
`;

const $mobileHeroLargeStyle = `
  w-full
  h-full
  p-12
  flex
  items-center
  bg-heroImage
  bg-no-repeat
  bg-right-top
`;

const $mobileHeroBlockStyle = `
  flex
  flex-col
`;

const $mobileHeroTitleStyle = `
  text-3xl
  font-bold
`;

const $mobileHeroNameStyle = `
  hidden
`;

const $mobileHeroImageStyle = `
  w-48
  h-20
`;

const $mobileHeroSubtitleStyle = `
  text-lg
  font-bold
`;

function MobileHero() {
  const { windowWidth } = useWindowWidth();

  function changeHeroStyle() {
    switch (true) {
      case windowWidth <= 339:
        return $mobileHeroSmallStyle;
      case windowWidth <= 449:
        return $mobileHeroMediumStyle;
      default:
        return $mobileHeroLargeStyle;
    }
  }

  return (
    <motion.section
      initial={{ x: '-20vw', opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 0.7 }}
      className={changeHeroStyle()}
    >
      <div className={$mobileHeroBlockStyle}>
        <h1 className={$mobileHeroTitleStyle}>
          Hi,
          <br />
          {' '}
          I am
          {' '}
          <span className={$mobileHeroNameStyle}>Ruben</span>
        </h1>
        <img src={myName} alt="Ruben!" className={$mobileHeroImageStyle} />
        <h2 className={$mobileHeroSubtitleStyle}>
          Your future
          <br />
          {' '}
          front-end developer!
        </h2>
      </div>
    </motion.section>
  );
}

export default MobileHero;
