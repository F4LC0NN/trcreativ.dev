// Technologies
import html from '../assets/images/main/projects/technologies/html5.svg';
import css from '../assets/images/main/projects/technologies/css3.svg';
import javascript from '../assets/images/main/projects/technologies/javascript.svg';
import react from '../assets/images/main/projects/technologies/react.svg';
import typescript from '../assets/images/main/projects/technologies/typescript.svg';
import framerMotion from '../assets/images/main/projects/technologies/framerMotion.svg';
import sass from '../assets/images/main/projects/technologies/sass.svg';
import tailwindcss from '../assets/images/main/projects/technologies/tailwindcss.svg';
import figma from '../assets/images/main/projects/technologies/figma.svg';
import firebase from '../assets/images/main/projects/technologies/firebase.svg';

// Presentation images
import castDotIo from '../assets/images/main/projects/presented/castDotIo.png';
import trCreativDotDev from '../assets/images/main/projects/presented/trCreativDotDev.png';
import websiteCv from '../assets/images/main/projects/presented/websiteCv.png';
import studify from '../assets/images/main/projects/presented/studify.png';
import simpleCalc from '../assets/images/main/projects/presented/simpleCalc.png';
import etchASketch from '../assets/images/main/projects/presented/etchASketch.png';
import trCreativDotCom from '../assets/images/main/projects/presented/trCreativDotCom.png';

const projectsList = [
  {
    key: (Math.random() * Date.now()),
    id: 'castDotIo',
    title: 'Cast.io',
    description: `
      Cast.io is a complete weather app.
      Get your current location's forecast
      wherever you are.
    `,
    technologies: [
      {
        imageSrc: react,
        imageAlt: 'React',
      },
      {
        imageSrc: typescript,
        imageAlt: 'Typescript',
      },
      {
        imageSrc: sass,
        imageAlt: 'Sass',
      },
      {
        imageSrc: javascript,
        imageAlt: 'Javascript',
      },
      {
        imageSrc: html,
        imageAlt: 'HTML5',
      },
    ],
    imageSrc: castDotIo,
    imageAlt: 'Screenshot of Cast.io',
    $imageContainer: `
      w-fit
      h-fit
      relative
      p-6
      border-2
      border-customBlack
      bg-customBlue
    `,
    $projectButton: `
      w-full
      h-fit
      p-2
      rounded-sm
      font-bold
      text-customWhite
      bg-customBlue
    `,
    $codeButton: `
      w-full
      h-fit
      px-2
      font-bold
      text-customBlue
    `,
    buttonLink: 'https://bit.ly/3O66QRf',
    codeLink: 'https://bit.ly/3y5Y3JO',
  },
  {
    key: (Math.random() * Date.now()),
    id: 'trCreativDotDev',
    title: 'TRCreativ.dev',
    description: `
      TRCreativ.dev is my front-end portfolio website.
      You can check my latest projects & articles there.
    `,
    technologies: [
      {
        imageSrc: react,
        imageAlt: 'React',
      },
      {
        imageSrc: typescript,
        imageAlt: 'Typescript',
      },
      {
        imageSrc: framerMotion,
        imageAlt: 'Framer Motion',
      },
      {
        imageSrc: tailwindcss,
        imageAlt: 'Tailwind CSS',
      },
      {
        imageSrc: firebase,
        imageAlt: 'Firebase',
      },
    ],
    imageSrc: trCreativDotDev,
    imageAlt: 'Screenshot of TRCreativ.dev',
    $imageContainer: `
      w-fit
      h-fit
      relative
      p-6
      border-2
      border-customBlack
      bg-customOrange
    `,
    $projectButton: `
      w-full
      h-fit
      p-2
      rounded-sm
      font-bold
      text-customWhite
      bg-customOrange
    `,
    $codeButton: `
      w-full
      h-fit
      px-2
      font-bold
      text-customOrange
    `,
    buttonLink: '/',
    codeLink: '/',
  },
  {
    key: (Math.random() * Date.now()),
    id: 'websiteCv',
    title: 'Curriculum Vitae',
    description: `
      This project is my CV turn into a website.
      Feel free to check my past work experiences.
    `,
    technologies: [
      {
        imageSrc: react,
        imageAlt: 'React',
      },
      {
        imageSrc: html,
        imageAlt: 'HTML5',
      },
      {
        imageSrc: css,
        imageAlt: 'CSS3',
      },
      {
        imageSrc: javascript,
        imageAlt: 'Javascript',
      },
    ],
    imageSrc: websiteCv,
    imageAlt: 'Screenshot of my CV turned into a website',
    $imageContainer: `
      w-fit
      h-fit
      relative
      p-6
      border-2
      border-customBlack
      bg-customGreen
    `,
    $projectButton: `
      w-full
      h-fit
      p-2
      rounded-sm
      font-bold
      text-customWhite
      bg-customGreen
    `,
    $codeButton: `
      w-full
      h-fit
      px-2
      font-bold
      text-customGreen
    `,
    buttonLink: 'https://bit.ly/3zOf8sK',
    codeLink: 'https://bit.ly/3HByfrS',
  },
  {
    key: (Math.random() * Date.now()),
    id: 'studify',
    title: 'Studify',
    description: `
      Studify is a form validation project.
      It uses different validation rules to help for the its completion.
    `,
    technologies: [
      {
        imageSrc: html,
        imageAlt: 'HTML5',
      },
      {
        imageSrc: css,
        imageAlt: 'CSS3',
      },
      {
        imageSrc: javascript,
        imageAlt: 'Javascript',
      },
    ],
    imageSrc: studify,
    imageAlt: 'Screenshot of Studify',
    $imageContainer: `
      w-fit
      h-fit
      relative
      p-6
      border-2
      border-customBlack
      bg-customBlack
    `,
    $projectButton: `
      w-full
      h-fit
      p-2
      rounded-sm
      font-bold
      text-customWhite
      bg-customBlack
    `,
    $codeButton: `
      w-full
      h-fit
      px-2
      font-bold
      text-customBlack
    `,
    buttonLink: 'https://bit.ly/3y2oOyH',
    codeLink: 'https://bit.ly/3y3KDhc',
  },
  {
    key: (Math.random() * Date.now()),
    id: 'simpleCalc',
    title: 'Simple Calc',
    description: `
      Simple Calc is a web calculator app.
      It behaves just like a real one. Enjoy!
    `,
    technologies: [
      {
        imageSrc: html,
        imageAlt: 'HTML5',
      },
      {
        imageSrc: css,
        imageAlt: 'CSS3',
      },
      {
        imageSrc: javascript,
        imageAlt: 'Javascript',
      },
    ],
    imageSrc: simpleCalc,
    imageAlt: 'Screenshot of Simple Calc',
    $imageContainer: `
      w-fit
      h-fit
      relative
      p-6
      border-2
      border-customBlack
      bg-customBlue
    `,
    $projectButton: `
      w-full
      h-fit
      p-2
      rounded-sm
      font-bold
      text-customWhite
      bg-customBlue
    `,
    $codeButton: `
      w-full
      h-fit
      px-2
      font-bold
      text-customBlue
    `,
    buttonLink: 'https://bit.ly/39BKmZw',
    codeLink: 'https://bit.ly/3bdW25k',
  },
  {
    key: (Math.random() * Date.now()),
    id: 'etchASketch',
    title: 'Etch A Sketch',
    description: `
      Etch A Sketch is an interesting project.
      You can make pixelized drawings with your mouse.
    `,
    technologies: [
      {
        imageSrc: html,
        imageAlt: 'HTML5',
      },
      {
        imageSrc: css,
        imageAlt: 'CSS3',
      },
      {
        imageSrc: javascript,
        imageAlt: 'Javascript',
      },
    ],
    imageSrc: etchASketch,
    imageAlt: 'Screenshot of Etch A Sketch',
    $imageContainer: `
      w-fit
      h-fit
      relative
      p-6
      border-2
      border-customBlack
      bg-customOrange
    `,
    $projectButton: `
      w-full
      h-fit
      p-2
      rounded-sm
      font-bold
      text-customWhite
      bg-customOrange
    `,
    $codeButton: `
      w-full
      h-fit
      px-2
      font-bold
      text-customOrange
    `,
    buttonLink: 'https://bit.ly/3y4ga2v',
    codeLink: 'https://bit.ly/3ObWUGe',
  },
  {
    key: (Math.random() * Date.now()),
    id: 'trCreativDotCom',
    title: 'TRCreativ.com',
    description: `
      TRCreativ.com is my graphic design portfolio website.
      You can find all of my projects since 2021.
    `,
    technologies: [],
    imageSrc: trCreativDotCom,
    imageAlt: 'Screenshot of trcreativ.com',
    $imageContainer: `
      w-fit
      h-fit
      relative
      p-6
      border-2
      border-customBlack
      bg-customGreen
    `,
    $projectButton: `
      w-full
      h-fit
      p-2
      rounded-sm
      font-bold
      text-customWhite
      bg-customGreen
    `,
    $codeButton: `
      hidden
    `,
    buttonLink: 'https://bit.ly/3OrbusV',
    codeLink: '/',
  },
];

export default projectsList;
