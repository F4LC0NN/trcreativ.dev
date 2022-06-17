import React from 'react';

import Navbar from './header/navbar/Navbar';

const $homeStyle = `
  w-screen
  h-screen
`;

function Home() {
  return (
    <div className={$homeStyle}>
      <Navbar />
    </div>
  );
}

export default Home;
