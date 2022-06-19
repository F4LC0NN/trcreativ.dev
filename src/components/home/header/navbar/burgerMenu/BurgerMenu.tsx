import React from 'react';
import { motion, useCycle } from 'framer-motion';

import NavigationMenu from './NavigationMenu';

import BurgerButton from './BurgerButton';

import logoBlue from '../../../../../assets/images/header/logoBlueIcon.svg';
import FloatingActionButton from '../../../../widgets/FloatingActionButton';

const $burgerMenuContainerStyle = `
  flex
`;

const $buttonContainerStyle = `
  w-[20vw]
  h-full
  flex
  justify-center
  items-center
  absolute
  top-0
  left-0
  z-50
`;

const $logoBlockStyle = `
  w-auto
  h-fit
  flex
  justify-center
  grow
`;

const $logoImageStyle = `
  w-8
  h-8
`;

function BurgerMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.div
      animate={isOpen ? 'open' : 'closed'}
      className={$burgerMenuContainerStyle}
    >
      <NavigationMenu isOpen={isOpen} toggleOpen={() => toggleOpen()} />
      <div className={$buttonContainerStyle}>
        <BurgerButton toggleOpen={() => toggleOpen()} />
      </div>
      <div className={$logoBlockStyle}>
        <a href="/">
          <img
            src={logoBlue}
            alt="TRCreativ.dev logo"
            className={$logoImageStyle}
          />
        </a>
      </div>
    </motion.div>
  );
}

export default BurgerMenu;
