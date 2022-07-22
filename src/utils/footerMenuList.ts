import trDev from '../assets/images/footer/trDev.svg';
import github from '../assets/images/footer/github.svg';
import linkedIn from '../assets/images/footer/linkedIn.svg';
import trCom from '../assets/images/footer/trCom.svg';

const footerMenuList = [
  {
    id: '001',
    category: 'Menu',
    list: [
      {
        title: 'Home',
        link: '#home',
      },
      {
        title: 'About',
        link: '#about',
      },
      {
        title: 'Projects',
        link: '#projects',
      },
      {
        title: 'Contact',
        link: '#contact',
      },
    ],
  },
  {
    id: '002',
    category: 'Projects',
    list: [
      {
        title: 'Cast.io',
        link: '#castDotIo',
      },
      {
        title: 'TRCreativ.dev',
        link: '#trCreativDotDev',
      },
      {
        title: 'Curriculum Vitae',
        link: '#websiteCv',
      },
      {
        title: 'Studify',
        link: '#studify',
      },
      {
        title: 'Simple Calc',
        link: '#simpleCalc',
      },
      {
        title: 'Etch-A-Sketch',
        link: '#etchASketch',
      },
      {
        title: 'TRCreativ.com',
        link: '#trCreativDotCom',
      },
    ],
  },
  {
    id: '003',
    category: 'Contact',
    list: [
      {
        title: 'Click here ▲',
        link: '#contactForm',
      },
    ],
  },
];

const iconList = [
  {
    icon: trDev,
    alt: 'TRCreativ.dev, my dev portfolio',
    src: '/',
  },
  {
    icon: github,
    alt: 'My GitHub page',
    src: 'https://bit.ly/3zw3brr',
  },
  {
    icon: linkedIn,
    alt: 'Contact me through LinkedIn',
    src: 'https://bit.ly/3aRN1ik',
  },
  {
    icon: trCom,
    alt: 'Visit my graphic design portfolio & see my creations',
    src: 'https://bit.ly/3PNK9SB',
  },
];

export { footerMenuList, iconList };
