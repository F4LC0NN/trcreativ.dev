import React from 'react';

import { footerMenuList, iconList } from '../../../utils/footerMenuList';

import arrowUp from '../../../assets/images/footer/arrowUp.svg';

const $footer = `
  w-screen
  min-h-[100vh]
  p-6
  grid
  items-center
  gap-8
  bg-customBlack
  text-customWhite
`;

const $menuSection = `
  grid
  sm:grid-cols-3
  sm:justify-items-center
  gap-4
`;

const $listContainer = `
  block
`;

const $listTitle = `
  font-bold
  text-lg
`;

const $menuList = `
  block
`;

const $menuListItem = `
  block
`;

const $menuListItemLink = `
  py-2
  block
`;

const $thanksSection = `
  block
`;

const $iconList = `
  grid
  grid-cols-2
  sm:flex
  sm:justify-center
  sm:gap-16
  items-center
`;

const $iconListItem = `
  block
`;

const $iconListItemLink = `
  py-4
  block
`;

const $iconListItemImage = `
  w-8
  lg:w-10
`;

const $thanksMessage = `
  h-[30vh]
  flex
  flex-col
  justify-center
  sm:items-center
  font-bold
  text-lg
`;

const $arrowContainer = `
  w-full
  h-fit
  flex
  justify-center
  
`;

const $arrowLink = `
  p-4
`;

const $arrowUp = `
  w-fit
  h-fit
`;

const $legalContainer = `
  block
  py-8
`;

const $legalText = `
  text-center
  italic
  opacity-50
`;

function Footer() {
  return (
    <footer className={$footer}>
      <section className={$menuSection}>
        {
          footerMenuList.map((item) => (
            <div className={$listContainer}>
              <h2 className={$listTitle}>{item.category}</h2>
              <ul className={$menuList}>
                {
                  item.list.map((listItem) => (
                    <li className={$menuListItem}>
                      <a href={listItem.link} className={$menuListItemLink}>
                        {listItem.title}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </section>
      <section className={$thanksSection}>
        <ul className={$iconList}>
          {
              iconList.map((item) => (
                <li key={Math.random()} className={$iconListItem}>
                  <a
                    href={item.src}
                    target="_blank"
                    rel="noreferrer"
                    className={$iconListItemLink}
                  >
                    <img src={item.icon} alt={item.alt} className={$iconListItemImage} />
                  </a>
                </li>
              ))
            }
        </ul>
        <div className={$thanksMessage}>
          <h3>Thank you for your visit!</h3>
          <h3>See you in your team!</h3>
        </div>
        <div className={$arrowContainer}>
          <a href="#home" className={$arrowLink}>
            <img
              src={arrowUp}
              alt="Go back to the top of the page"
              className={$arrowUp}
            />
          </a>
        </div>
        <div className={$legalContainer}>
          <p className={$legalText}>
            Copyright &copy; Ruben Thomas - 2022 - All Rights Reserved
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
