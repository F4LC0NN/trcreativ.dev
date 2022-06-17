import React from 'react';
import { motion, useCycle } from 'framer-motion';

import NavigationMenu from './NavigationMenu';

import BurgerButton from '../../../../widgets/BurgerButton';

import logoBlue from '../../../../../assets/images/header/logoBlueIcon.svg';

const $logoBlockStyle = `
  w-7
  h-7
`;

const $logoImageStyle = `
  w-fit
  h-fit
`;

function BurgerMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.div animate={isOpen ? 'open' : 'closed'}>
      <div className={$logoBlockStyle}>
        <img
          src={logoBlue}
          alt="TRCreativ.dev logo"
          className={$logoImageStyle}
        />
      </div>
      <NavigationMenu isOpen={isOpen} toggleOpen={() => toggleOpen()} />
      <BurgerButton toggleOpen={() => toggleOpen()} />
    </motion.div>
  );
}

export default BurgerMenu;
