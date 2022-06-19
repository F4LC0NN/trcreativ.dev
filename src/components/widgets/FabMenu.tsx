import React from 'react';
import { motion } from 'framer-motion';

import MenuHandler from '../../interfaces/MenuHandler';

import homeIcon from '../../assets/images/fab/homeIcon.svg';
import aboutIcon from '../../assets/images/fab/aboutIcon.svg';
import projectIcon from '../../assets/images/fab/projectIcon.svg';
import blogIcon from '../../assets/images/fab/blogIcon.svg';
import contactIcon from '../../assets/images/fab/contactIcon.svg';

const $menuListStyle = `
  w-fit
  h-fit
  flex
  flex-col
  justify-center
  items-center
  absolute
  bottom-24
  right-6
  gap-4
`;

const $menuItemStyle = `
  w-8
  h-8
  p-2
  flex
  justify-center
  items-center
  border-none
  rounded-full
  border-2
  border-customWhite
  bg-customBlack
  drop-shadow-2xl
  pointer-events-auto
`;

function FabMenu() {
  return (
    <ul className={$menuListStyle}>
      <motion.a
        href="#home"
        variants={{
          open: { y: 0 },
          closed: { y: 255 },
        }}
        transition={{
          ease: 'easeOut',
          duration: 0.3,
        }}
      >
        <li className={$menuItemStyle}>
          <img src={homeIcon} alt="Home" />
        </li>
      </motion.a>
      <motion.a
        href="#about"
        variants={{
          open: { y: 0 },
          closed: { y: 205 },
        }}
        transition={{
          ease: 'easeOut',
          duration: 0.3,
        }}
      >
        <li className={$menuItemStyle}>
          <img src={aboutIcon} alt="About" />
        </li>
      </motion.a>
      <motion.a
        href="#projects"
        variants={{
          open: { y: 0 },
          closed: { y: 155 },
        }}
        transition={{
          ease: 'easeOut',
          duration: 0.3,
        }}
      >
        <li className={$menuItemStyle}>
          <img src={projectIcon} alt="Project" />
        </li>
      </motion.a>
      <motion.a
        href="#blog"
        variants={{
          open: { y: 0 },
          closed: { y: 105 },
        }}
        transition={{
          ease: 'easeOut',
          duration: 0.3,
        }}
      >
        <li className={$menuItemStyle}>
          <img src={blogIcon} alt="Blog" />
        </li>
      </motion.a>
      <motion.a
        href="#contact"
        variants={{
          open: { y: 0 },
          closed: { y: 55 },
        }}
        transition={{
          ease: 'easeOut',
          duration: 0.3,
        }}
      >
        <li className={$menuItemStyle}>
          <img src={contactIcon} alt="Contact" />
        </li>
      </motion.a>
    </ul>
  );
}

export default FabMenu;
