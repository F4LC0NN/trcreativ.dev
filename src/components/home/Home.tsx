import React from 'react';
import Header from './header/Header';

const $homeStyle = `
  w-screen
  h-screen
`;

function Home() {
  return (
    <div className={$homeStyle}>
      <Header />
    </div>
  );
}

export default Home;
