import React from 'react';

import Navbar from './navbar/Navbar';
import Hero from './hero/Hero';

const $headerStyle = `
  w-screen
  min-h-fit
`;

function Header() {
  return (
    <header className={$headerStyle}>
      <Navbar />
      <Hero />
    </header>
  );
}

export default Header;
