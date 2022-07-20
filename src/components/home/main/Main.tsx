import React from 'react';

import About from './about/About';
import Contact from './contact/Contact';
import Projects from './projects/Projects';

const $mainStyle = `
  w-full
  h-fit
`;

function Main() {
  return (
    <main className={$mainStyle}>
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default Main;
