import React from 'react';

import FirstSection from './FirstSection';
import SecondSection from './SecondSection';

const $descriptionArticle = `
  w-full
  h-fit
`;

function Description() {
  return (
    <article className={$descriptionArticle}>
      <FirstSection />
      <SecondSection />
    </article>
  );
}

export default Description;
