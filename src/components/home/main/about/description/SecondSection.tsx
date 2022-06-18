import React from 'react';

const $secondSection = `
  w-fit
  h-fit
`;

const $sectionTitleStyle = `
  py-4
  text-lg
  font-bold
  text-center
  xl:text-left
`;

const $sectionList = `
  w-fit
  h-fit
`;

const $sectionItem = `
  pb-4
`;

const $sectionSpanBlue = `
font-bold
text-customBlue
`;

const $sectionSpanOrange = `
font-bold
text-customOrange
`;

function SecondSection() {
  return (
    <section className={$secondSection}>
      <ul className={$sectionList}>
        <li className={$sectionItem}>
          <h3 className={$sectionTitleStyle}>What am I specialized in?</h3>
        </li>
        <li className={$sectionItem}>
          <p>I work with libraries & frameworks like</p>
          <p>
            <span className={$sectionSpanBlue}>React Native</span>
            {' '}
            &
            {' '}
            <span className={$sectionSpanBlue}>Typescript</span>
            .
          </p>
        </li>
        <li className={$sectionItem}>
          <p>
            I also use librairies such as
            {' '}
            <span className={$sectionSpanOrange}>Sass</span>
            {' '}
            and
            {' '}
            <span className={$sectionSpanOrange}>Tailwind CSS</span>
          </p>
          <p>to build modern visual designs.</p>
        </li>
        <li className={$sectionItem}>
          <p>
            During the design process, I create the visuals on
            {' '}
            <span className={$sectionSpanOrange}>Figma</span>
            ,
          </p>
          <p>
            & I integrate
            {' '}
            <span className={$sectionSpanOrange}>UX</span>
            {' '}
            &
            {' '}
            <span className={$sectionSpanOrange}>UI</span>
            {' '}
            as the
            {' '}
            <span className={$sectionSpanOrange}>core</span>
            .

          </p>
        </li>
      </ul>
    </section>
  );
}

export default SecondSection;
