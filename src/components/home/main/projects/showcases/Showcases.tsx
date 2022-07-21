import React from 'react';

import projectsList from '../../../../../utils/projectsList';
import dotsImage from '../../../../../assets/images/main/projects/presented/dotGrid2.svg';

const $showcasesContainer = `
  px-6
  md:px-48
  lg:px-16
  xl:px-32
  lg:my-8
`;

const $showcasesList = `
  block
  lg:grid
  lg:grid-cols-2
  lg:justify-center
  lg:items-center
  lg:gap-8
`;

const $showcasesItem = `
  mb-6
`;

const $imageContainer = `
  relative
  mb-8
  sm:mb-8
  md:mb-8
  lg:mb-8
`;

const $cardImageDecoration = `
  absolute
  top-3
  left-3
  -z-10
`;

const $cardTextContainer = `
  grid
  gap-4
  mb-4
`;

const $cardTitle = `
  font-bold
`;

const $cardDescription = `
  lg:h-16
`;

const $cardTechnoList = `
  flex
  items-center
  gap-2
`;

const $cardTechnoImage = `
  w-4
  lg:w-5
`;

const $cardButtonContainer = `
  grid
  gap-2
`;

const $projectButtonContainer = `
  w-full
  h-fit
  relative
`;

const $projectButtonDecoration = `
  w-full
  h-10
  absolute
  top-1
  left-1
  border-2
  border-customBlack
  -z-10
`;

const $projectButtonLink = `
  cursor-pointer
`;

function Showcases() {
  return (
    <div className={$showcasesContainer}>
      <ul className={$showcasesList}>
        {
          projectsList.map((item) => (
            <li key={item.id} className={$showcasesItem}>
              <div className={`${item.$imageContainer}, ${$imageContainer}`}>
                <img
                  src={dotsImage}
                  alt="Dots decorations"
                  className={$cardImageDecoration}
                />
                <img src={item.imageSrc} alt={item.imageAlt} />
              </div>
              <div className={$cardTextContainer}>
                <h1 className={$cardTitle}>{item.title}</h1>
                <p className={$cardDescription}>{item.description}</p>
                <ul className={$cardTechnoList}>
                  {
                    item.technologies.map((techno) => (
                      <li key={Math.random()}>
                        <img src={techno.imageSrc} alt={techno.imageAlt} className={$cardTechnoImage} />
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className={$cardButtonContainer}>
                <div className={$projectButtonContainer}>
                  <a href={item.buttonLink} target="_blank" rel="noreferrer" className={$projectButtonLink}>
                    <button type="button" className={item.$projectButton}>View project</button>
                  </a>
                  <div className={$projectButtonDecoration} />
                </div>
                <a href={item.codeLink} target="_blank" rel="noreferrer" className={$projectButtonLink}>
                  <button type="button" className={item.$codeButton}>View code</button>
                </a>
              </div>
            </li>
          ))
}
      </ul>
    </div>
  );
}

export default Showcases;
