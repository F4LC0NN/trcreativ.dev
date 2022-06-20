import React from 'react';

import projectsList from '../../../../../utils/projectsList';

import dotGrid2 from '../../../../../assets/images/main/projects/presented/dotGrid2.svg';

const $carouselContainer = `
  w-full
  h-fit
  flex
  justify-center
  items-center
`;

const $slider = `
  w-full
  h-fit
  p-6
  flex
  flex-col
  gap-8
`;

const $slide = `
  w-fit
  h-fit
`;

const $imageSrc = `
  w-fit
  h-fit
  drop-shadow-md
`;

const $dotGrid2 = `
  absolute
  top-3
  left-3
  -z-10
`;

const $slideTitle = `
  w-full
  h-fit
  pt-8
  pb-4
  flex
  items-center
  font-bold
`;

const $slideDescription = `
  w-fit
  h-fit
`;

const $techList = `
  w-fit
  h-fit
  py-4
  flex
  gap-3
`;

const $techItem = `
  w-fit
  h-fit
`;

const $techImage = `
  w-7
  h-7
`;

const $buttonList = `
  w-fit
  h-fit
`;

const $buttonItem = `
  py-2
`;

const $buttonContainer = `
  w-40
  h-fit
  relative
`;

const $buttonGraphic = `
  w-full
  h-full
  absolute
  top-1
  left-1
  border-2
  border-customBlack
  -z-10
`;

const $techListHidden = `
  hidden
`;

function ProjectsCarousel() {
  return (
    <div className={$carouselContainer}>
      <ul className={$slider}>
        {
          projectsList.map((item) => (
            <li key={item.key} className={$slide}>
              <div className={item.$imageContainer}>
                <img src={dotGrid2} alt="A grid of dots" className={$dotGrid2} />
                <img src={item.imageSrc} alt={item.imageAlt} className={$imageSrc} />
              </div>
              <h3 className={$slideTitle}>{item.title}</h3>
              <p className={$slideDescription}>{item.description}</p>
              <ul className={$techList}>
                {
                  item.technologies.map((tech) => (
                    <li key={(Math.random() * Date.now())} className={$techItem}>
                      <img src={tech.imageSrc} alt={tech.imageAlt} className={$techImage} />
                    </li>
                  ))
                }
              </ul>
              <ul className={$buttonList}>
                <li className={$buttonItem}>
                  <div className={$buttonContainer}>
                    <div className={$buttonGraphic} />
                    <a
                      href={item.buttonLink}
                      type="button"
                      className={item.$projectButton}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View project
                    </a>
                  </div>
                </li>
                <li className={$buttonItem}>
                  <a
                    href={item.codeLink}
                    type="button"
                    className={item.$codeButton}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View code
                  </a>
                </li>
              </ul>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ProjectsCarousel;
