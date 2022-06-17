import React from 'react';
import { motion } from 'framer-motion';

import MenuHandler from '../../../../../interfaces/MenuHandler';

const $menuContainer = `
  w-screen 
  h-screen 
  flex 
  flex-col 
  justify-center 
  items-center 
  absolute 
  top-0 
  left-0 
  text-customWhite 
  bg-customBlack
`;

const $menuList = `
  flex
  flex-col
  items-center
`;

const $menuItem = `
  w-screen
  p-4
  flex
  justify-center
  font-bold
`;

function NavigationMenu(props: MenuHandler) {
  const { isOpen, toggleOpen } = props;

  return (
    <motion.div
      className={$menuContainer}
      initial={false}
      animate={isOpen ? { x: 0 } : { x: '-100vw' }}
      transition={{ ease: 'easeOut', duration: 0.3 }}
    >
      <ul className={$menuList}>
        <a href="#home" onClick={toggleOpen}>
          <li className={$menuItem}>Home</li>
        </a>
        <a href="#about" onClick={toggleOpen}>
          <li className={$menuItem}>About</li>
        </a>
        <a href="#projects" onClick={toggleOpen}>
          <li className={$menuItem}>Projects</li>
        </a>
        <a href="#blog" onClick={toggleOpen}>
          <li className={$menuItem}>Blog</li>
        </a>
        <a href="#contact" onClick={toggleOpen}>
          <li className={$menuItem}>Contact</li>
        </a>
      </ul>
    </motion.div>
  );
}

export default NavigationMenu;
