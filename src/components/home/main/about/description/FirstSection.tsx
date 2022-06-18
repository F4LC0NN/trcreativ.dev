import React from 'react';

const $firstSection = `
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

function FirstSection() {
  return (
    <section className={$firstSection}>
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
            What I like the most is
            {' '}
            <span className={$sectionSpanBlue}>mobile app development</span>
          </p>
          <p>
            because I can express my
            {' '}
            <span className={$sectionSpanOrange}>creativity</span>
            {' '}
            better.
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

export default FirstSection;
