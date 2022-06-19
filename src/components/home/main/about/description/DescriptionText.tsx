import React from 'react';

const $DescriptionTextStyle = `
  w-fit
  h-fit
`;

const $sectionTitleStyle = `
  py-4
  text-lg
  font-bold
  text-center
  md:text-center
  lg:text-left
`;

const $sectionList = `
  w-fit
  h-fit
`;

const $sectionItem = `
  pb-4
`;

const $sectionSpanBlack = `
font-bold
text-customBlack
`;

const $sectionSpanBlue = `
font-bold
text-customBlue
`;

const $sectionSpanGreen = `
font-bold
text-customGreen
`;

const $sectionSpanOrange = `
font-bold
text-customOrange
`;

function DescriptionText() {
  return (
    <section className={$DescriptionTextStyle}>
      <ul className={$sectionList}>
        <li className={$sectionItem}>
          <h3 className={$sectionTitleStyle}>Who Am I?</h3>
        </li>
        <li className={$sectionItem}>
          <p>My name is Ruben.</p>
          <p>
            I am a
            {' '}
            <span className={$sectionSpanBlue}>Frontend Developer</span>
            .
          </p>
          <p>You may also know me as F4LC0NN.</p>
        </li>
        <li className={$sectionItem}>
          <p>
            I have
            {' '}
            <span className={$sectionSpanBlack}>one year of experience</span>
            {' '}
            in
          </p>
          <p>
            <span className={$sectionSpanBlue}>Frontend development</span>
            {' '}
            &
            {' '}
            <span className={$sectionSpanOrange}>graphic design</span>
            .
          </p>
        </li>
        <li className={$sectionItem}>
          <p>
            I work with
            {' '}
            <span className={$sectionSpanBlue}>React</span>
            {' '}
            &
            {' '}
            <span className={$sectionSpanBlue}>Typescript</span>
            {' '}
            to build my projects,
          </p>
          <p>
            as well as
            {' '}
            <span className={$sectionSpanOrange}>Sass</span>
            ,
            {' '}
            <span className={$sectionSpanOrange}>Tailwind CSS</span>
            {' '}
            &
            {' '}
            <span className={$sectionSpanOrange}>Framer Motion</span>
            {' '}
            for the design.
          </p>
        </li>
        <li className={$sectionItem}>
          <p>
            I also work with
            {' '}
            <span className={$sectionSpanGreen}>APIs</span>
            {' '}
            &
            {' '}
            <span className={$sectionSpanGreen}>databases</span>
            {' '}
            such as
            {' '}
            <span className={$sectionSpanGreen}>Firebase</span>
            .
          </p>
        </li>
        <li className={$sectionItem}>
          <p>
            In the near future, I want to
            {' '}
            <span className={$sectionSpanBlack}>create apps & services</span>
          </p>
          <p>
            that allow new business owners to
            {' '}
            <span className={$sectionSpanBlack}>start with zero budget</span>
            .
          </p>
        </li>
      </ul>
    </section>
  );
}

export default DescriptionText;
