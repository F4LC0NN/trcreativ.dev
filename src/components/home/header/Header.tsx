import React from 'react';

import Navbar from './navbar/Navbar';

const $headerStyle = `
  w-screen
  min-h-screen
`;

function Header() {
  return (
    <header className={$headerStyle}>
      <Navbar />
    </header>
  );
}

export default Header;
