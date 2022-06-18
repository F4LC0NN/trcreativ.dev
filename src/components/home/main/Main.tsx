import React from 'react';

import About from './about/About';

const $mainStyle = `
  w-full
  h-fit
`;

function Main() {
  return (
    <main className={$mainStyle}>
      <About />
    </main>
  );
}

export default Main;
