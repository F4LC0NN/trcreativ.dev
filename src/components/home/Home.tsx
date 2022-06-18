import React from 'react';

import Header from './header/Header';
import Main from './main/Main';

const $homeStyle = `
  w-screen
  h-screen
`;

function Home() {
  return (
    <div className={$homeStyle}>
      <Header />
      <Main />
    </div>
  );
}

export default Home;
