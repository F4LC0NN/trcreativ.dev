import React from 'react';

import projectsList from '../../../../../utils/projectsList';

import dotGrid2 from '../../../../../assets/images/main/projects/presented/dotGrid2.svg';
import sliderButtonList from '../../../../../utils/sliderButtonList';

const $carouselContainer = `
  w-full
  h-fit
  flex
  lg:flex-col
  justify-center
  items-center
  lg:overflow-hidden
`;

const $slider = `
  scrollbar
  max-w-full
  h-fit
  p-6
  md:px-48
  lg:px-6
  flex
  flex-col
  lg:flex-row
  lg:overflow-x-auto
  lg:scroll-smooth
  lg:snap-x
  gap-8
  `;

const $slide = `
w-fit
  xl:w-full
  h-fit
  xl:px-48
  lg:flex
  lg:flex-row-reverse
  lg:justify-center
  xl:justify-between
  lg:items-center
  lg:gap-24
  lg:shrink-0
  xl:gap-0
`;

const $imageSrc = `
  w-fit
  h-fit
  drop-shadow-md
`;

const $dotGrid2 = `
  w-fit
  h-fit
  absolute
  top-3
  2xl:top-16
  left-3
  2xl:left-16
  -z-10
`;

const $slideText = `
  w-fit
  h-fit
  lg:w-[40%]
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
  w-full
  h-fit
`;

const $buttonItem = `
  w-full
  h-fit
  py-2
`;

const $buttonContainer = `
  w-full
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

const $sliderButtonContainer = `
  w-full
  h-[10vh]
  hidden
  lg:flex
  lg:justify-center
  lg:items-center
`;

const $sliderButtonGraphic = `
  w-10
  h-10
  p-2
  absolute
  -top-1
  -left-1
  border-2
  border-customBlack
  rounded-full
  pointer-events-none
`;

const $sliderButtonList = `
  w-full
  h-fit
  lg:flex
  justify-center
  items-center
  gap-4
`;

const $sliderButtonItem = `
  relative
`;

function ProjectsCarousel() {
  return (
    <div className={$carouselContainer}>
      <ul className={$slider}>
        {
          projectsList.map((item) => (
            <li key={item.key} className={$slide} id={item.id}>
              <div className={item.$imageContainer}>
                <img src={dotGrid2} alt="A grid of dots" className={$dotGrid2} />
                <img src={item.imageSrc} alt={item.imageAlt} className={$imageSrc} />
              </div>
              <div className={$slideText}>
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
              </div>
            </li>
          ))
        }
      </ul>
      <div className={$sliderButtonContainer}>
        <ul className={$sliderButtonList}>
          {
            sliderButtonList.map((button) => (
              <li key={Math.random() * Date.now()} className={$sliderButtonItem}>
                <div className={$sliderButtonGraphic} />
                <a href={button.id} type="button" className={button.$sliderButton}>
                  {button.number}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default ProjectsCarousel;
