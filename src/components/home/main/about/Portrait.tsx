import React from 'react';
import { motion, useCycle } from 'framer-motion';

import dotGrid from '../../../../assets/images/main/about/dotGrid.svg';
import portraitDrawn from
  '../../../../assets/images/main/about/portraitPencil.png';
import portraitPhoto from
  '../../../../assets/images/main/about/portraitPhoto.png';
import camera from '../../../../assets/images/main/about/camera.svg';

const $portraitContainer = `
  w-full
  h-1/1
  mb-10
  flex
  justify-center
  items-center
  lg:scale-150
`;

const $portraitBg = `
  w-40
  h-40
  relative
  border-2
  border-customBlack
  bg-customWhite
`;

const $portraitBackFrame = `
  w-full
  h-full
  border-2
  border-customBlack
  absolute
  top-3
  left-3
  -z-10
`;

const $dotGridImage = `
  w-full
  h-full
  object-cover
`;

const $portraitDrawn = `
  w-full
  h-full
  object-cover
  absolute
  top-0
  left-0
`;

const $portraitButton = `
  w-14
  h-14
  p-3
  flex
  justify-center
  items-center
  absolute
  -bottom-6
  -right-6
  rounded-full
  border-2
  border-customBlack
  bg-customWhite
`;

const $cameraImage = `
  w-fit
  h-fit
`;

function Portrait() {
  const [isDrawn, toggleDrawn] = useCycle(true, false);

  return (
    <aside className={$portraitContainer}>
      <div className={$portraitBg}>
        <div className={$portraitBackFrame} />
        <img
          src={dotGrid}
          alt="A grid of dots"
          className={$dotGridImage}
        />
        <motion.img
          src={portraitDrawn}
          alt="My drawn portrait"
          animate={isDrawn ? { opacity: 1 } : { opacity: 0 }}
          className={$portraitDrawn}
        />
        <motion.img
          src={portraitPhoto}
          alt="My portrait in real"
          animate={isDrawn ? { opacity: 0 } : { opacity: 1 }}
          className={$portraitDrawn}
        />
        <button
          type="button"
          onClick={() => toggleDrawn()}
          className={$portraitButton}
        >
          <img
            src={camera}
            alt="Click here to switch between portraits"
            className={$cameraImage}
          />
        </button>
      </div>
    </aside>
  );
}

export default Portrait;
