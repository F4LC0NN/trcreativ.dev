import React from 'react';

import logoBlue from '../../../../assets/images/header/logoBlueIcon.svg';

const $navbarStyle = `
  w-full 
  h-14
  flex
  justify-center
  items-center
  border-b-2 
  border-customBlack 
  bg-customWhite 
  shadow-md
`;

const $logoBlockStyle = `
  w-7
  h-7
`;

const $logoImageStyle = `
  w-fit
  h-fit
`;

function Navbar() {
  return (
    <nav className={$navbarStyle}>
      <div className={$logoBlockStyle}>
        <img
          src={logoBlue}
          alt="TRCreativ.dev logo"
          className={$logoImageStyle}
        />
      </div>
    </nav>
  );
}

export default Navbar;
