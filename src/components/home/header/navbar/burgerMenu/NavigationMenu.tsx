import React from 'react';
import { motion } from 'framer-motion';

import MenuHandler from '../../../../../interfaces/MenuHandler';

const $menuContainerStyle = `
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

const $menuListStyle = `
  flex
  flex-col
  items-center
`;

const $menuItemStyle = `
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
      className={$menuContainerStyle}
      initial={false}
      animate={isOpen ? { x: 0 } : { x: '-100vw' }}
      transition={{ ease: 'easeOut', duration: 0.3 }}
    >
      <ul className={$menuListStyle}>
        <a href="#home" onClick={toggleOpen}>
          <li className={$menuItemStyle}>Home</li>
        </a>
        <a href="#about" onClick={toggleOpen}>
          <li className={$menuItemStyle}>About</li>
        </a>
        <a href="#projects" onClick={toggleOpen}>
          <li className={$menuItemStyle}>Projects</li>
        </a>
        <a href="#blog" onClick={toggleOpen}>
          <li className={$menuItemStyle}>Blog</li>
        </a>
        <a href="#contact" onClick={toggleOpen}>
          <li className={$menuItemStyle}>Contact</li>
        </a>
      </ul>
    </motion.div>
  );
}

export default NavigationMenu;
