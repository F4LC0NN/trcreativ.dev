import React from 'react';
import { motion, SVGMotionProps, useCycle } from 'framer-motion';
import FabMenu from './FabMenu';

const $fabContainerStyle = `
  w-screen
  h-screen
  fixed
  z-50
  pointer-events-none
`;

const $fabStyle = `
  w-16
  h-16
  flex
  justify-center
  items-center
  absolute
  bottom-5
  right-2
  border-2
  lg:bottom-10
  lg:right-10
  border-customBlack
  rounded-full
  bg-customWhite
  scale-75
  lg:scale-100
  drop-shadow-2xl
  pointer-events-auto
`;

function Path(
  props: JSX.IntrinsicAttributes
  & SVGMotionProps<SVGPathElement>
  & React.RefAttributes<SVGPathElement>,
) {
  return (
    <motion.path
      stroke="#222222"
      strokeWidth={2.5}
      strokeLinecap="round"
      {...props}
    />
  );
}

function FloatingActionButton() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.div
      animate={isOpen ? 'open' : 'closed'}
      className={$fabContainerStyle}
    >
      <FabMenu />
      <button type="button" onClick={() => toggleOpen()} className={$fabStyle}>
        <motion.svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ ease: 'easeOut', duration: 0.3 }}
        >
          <Path
            variants={{
              open: { d: 'M 5 25 L 25 7' },
              closed: { d: 'M 5 7 L 25 7' },
            }}
          />
          <Path
            d="M 5 16 L 25 16"
            variants={{
              open: { scale: 0, opacity: 0 },
              closed: { scale: 1, opacity: 1 },
            }}
          />
          <Path
            variants={{
              open: { d: 'M 5 7 L 25 25' },
              closed: { d: 'M 5 25 L 25 25' },
            }}
          />
        </motion.svg>
      </button>
    </motion.div>
  );
}

export default FloatingActionButton;
