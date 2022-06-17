import React from 'react';

import BurgerMenu from './burgerMenu/BurgerMenu';

const $navbarStyle = `
  w-full 
  base:h-14
  xl:h-20
  flex
  justify-center
  items-center
  relative
  border-b-2 
  border-customBlack 
  bg-customWhite 
  shadow-md
`;

function Navbar() {
  return (
    <nav className={$navbarStyle}>
      <BurgerMenu />
    </nav>
  );
}

export default Navbar;
