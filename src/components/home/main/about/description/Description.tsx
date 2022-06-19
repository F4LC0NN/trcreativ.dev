import React from 'react';

import DescriptionText from './DescriptionText';

const $descriptionArticle = `
  w-full
  h-fit
  md:px-32
  lg:px-0
`;

function Description() {
  return (
    <article className={$descriptionArticle}>
      <DescriptionText />
    </article>
  );
}

export default Description;
