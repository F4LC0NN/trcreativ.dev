import React from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

import MenuHandler from '../../interfaces/MenuHandler';

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

const $buttonStyle = `
  w-8 
  h-8 
  flex 
  justify-center 
  items-center 
  absolute 
  base:top-3 
  base:left-4
  xl: top-6
  xl: left-8
`;

function BurgerButton(props: MenuHandler) {
  const { toggleOpen } = props;

  return (
    <button type="button" onClick={toggleOpen} className={$buttonStyle}>
      <svg width="30" height="30" viewBox="0 0 30 30">
        <Path
          variants={{
            open: { d: 'M 7 21 L 21 7', stroke: '#EFEFEF' },
            closed: { d: 'M 7 7 L 21 7', stroke: '#222222' },
          }}
        />
        <Path
          d="M 7 14 L 15 14"
          variants={{
            open: { x: -21, stroke: '#EFEFEF' },
            closed: { x: 0, stroke: '#222222' },
          }}
        />
        <Path
          d="M 14 14 L 21 14"
          variants={{
            open: { x: 21, stroke: '#EFEFEF' },
            closed: { x: 0, stroke: '#222222' },
          }}
        />
        <Path
          variants={{
            open: { d: 'M 7 7 L 21 21', stroke: '#EFEFEF' },
            closed: { d: 'M 7 21 L 21 21', stroke: '#222222' },
          }}
        />
      </svg>
    </button>
  );
}

export default BurgerButton;
