import React from 'react';

import logoBlue from '../../../../../assets/images/header/logoBlueIcon.svg';

const $menuContainerStyle = `
  flex
  items-center
  gap-8
`;

const $logoBlockStyle = `
  w-7
  h-7
  absolute
  left-32
`;

const $logoImageStyle = `
  w-fit
  h-fit
`;

const $menuListStyle = `
  flex
  grow
`;

const $menuItemStyle = `
  w-24
  base:h-14
  xl:h-20
  flex
  justify-center
  items-center
  font-bold
  hover:text-customWhite
  hover:bg-customBlack
`;

function KebabMenu() {
  return (
    <div className={$menuContainerStyle}>
      <div className={$logoBlockStyle}>
        <a href="/">
          <img
            src={logoBlue}
            alt="TRCreativ.dev logo"
            className={$logoImageStyle}
          />
        </a>
      </div>
      <ul className={$menuListStyle}>
        <a href="#home">
          <li className={$menuItemStyle}>Home</li>
        </a>
        <a href="#about">
          <li className={$menuItemStyle}>About</li>
        </a>
        <a href="#projects">
          <li className={$menuItemStyle}>Projects</li>
        </a>
        <a href="#blog">
          <li className={$menuItemStyle}>Blog</li>
        </a>
        <a href="#contact">
          <li className={$menuItemStyle}>Contact</li>
        </a>
      </ul>
    </div>
  );
}

export default KebabMenu;
