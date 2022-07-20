import React from 'react';
import { motion } from 'framer-motion';

import contactMe from '../../../../assets/images/main/contact/contactMe.svg';
import ContactForm from './contactForm/ContactForm';

const $contact = `
  w-full
  h-fit
`;

const $contactTitle = `
  hidden
`;

const $contactTitleImageContainer = `
  w-full
  h-[10vh]
  lg:h-[20vh]
  flex
  justify-center
  items-center
  lg:bg-contactBgImage
  lg:bg-no-repeat
  lg:bg-right
`;

const $contactTitleImage = `
  w-40
  h-fit
`;
function Contact() {
  return (
    <motion.section
      id="contact"
      className={$contact}
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 0.7 }}
    >
      <h1 className={$contactTitle}>Contact Me</h1>
      <div className={$contactTitleImageContainer}>
        <img
          src={contactMe}
          alt="Contact Me"
          className={$contactTitleImage}
        />
      </div>
      <ContactForm />
    </motion.section>
  );
}

export default Contact;
