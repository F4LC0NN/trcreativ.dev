import React from 'react';

import myName from '../../../../../assets/images/header/myName.svg';

const $desktopHeroStyle = `
  w-full
  h-full
  flex
  bg-heroImageDesktop
  bg-contain
  bg-no-repeat
  bg-top
`;

const $desktopHeroBlockStyle = `
  w-full
  h-fit
  pt-8
  sm:pt-12
  lg:pt-20
  xl:pt-32
  2xl:pt-48
  pl-16
  md:pl-20
  lg:pl-28
  xl:pl-32
  2xl:pl-60
  flex
  flex-col
  gap-2
`;

const $desktopHeroTitleStyle = `
  text-2xl
  md:text-4xl
  2xl:text-6xl
  font-bold
`;

const $desktopHeroNameStyle = `
  hidden
`;

const $desktopHeroImageStyle = `
  w-1/3
  h-fit
`;

const $desktopHeroSubtitleStyle = `
  md:text-xl
  2xl:text-2xl
  font-bold
`;

function DesktopHero() {
  return (
    <section
      className={$desktopHeroStyle}
    >
      <div className={$desktopHeroBlockStyle}>
        <h1 className={$desktopHeroTitleStyle}>
          Hi,
          <br />
          {' '}
          I am
          {' '}
          <span className={$desktopHeroNameStyle}>Ruben</span>
        </h1>
        <img src={myName} alt="Ruben!" className={$desktopHeroImageStyle} />
        <h2 className={$desktopHeroSubtitleStyle}>
          Your future
          <br />
          {' '}
          front-end developer!
        </h2>
      </div>
    </section>
  );
}

export default DesktopHero;
