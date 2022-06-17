import React from 'react';
import useWindowWidth from '../../../../hooks/useWindowWidth';

import BurgerMenu from './burgerMenu/BurgerMenu';
import KebabMenu from './kebabMenu/KebabMenu';

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
  const { windowWidth } = useWindowWidth();

  return (
    <nav className={$navbarStyle}>
      {
        windowWidth < window.innerHeight
          ? <BurgerMenu />
          : <KebabMenu />
      }
    </nav>
  );
}

export default Navbar;
