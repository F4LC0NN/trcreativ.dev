import React, { useCallback } from 'react';
import { motion, useCycle } from 'framer-motion';

import logoBlue from '../../../../assets/images/header/logoBlueIcon.svg';
import BurgerButton from '../../../widgets/BurgerButton';

const $navbarStyle = `
  w-full 
  h-14
  flex
  justify-center
  items-center
  relative
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
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav className={$navbarStyle} animate={isOpen ? 'open' : 'closed'}>
      <div className={$logoBlockStyle}>
        <img
          src={logoBlue}
          alt="TRCreativ.dev logo"
          className={$logoImageStyle}
        />
      </div>
      <BurgerButton toggleOpen={() => toggleOpen()} />
    </motion.nav>
  );
}

export default Navbar;
