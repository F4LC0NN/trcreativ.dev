import React from 'react';

import blueStar from '../../../../../assets/images/main/contact/blueStar.svg';

const $contactFormContainer = `
  h-fit
  px-6
  md:px-48
  lg:px-16
  xl:px-32
`;

const $contactFormTitle = `
  px-2
  text-lg
  font-bold
`;

const $contactFormSubtitle = `
  block
  px-2
`;

const $blueStar = `
  inline-block
  relative
  bottom-0.5
`;

const $form = `
  block
`;

const $personalInfo = `
  block
  lg:grid
  grid-cols-2
  gap-8
`;

const $credential = `
  my-4
`;

const $formLabel = `
  block
  p-2
  font-bold
`;

const $formInput = `
  w-full
  p-2
  border-2
  border-customBlack
`;

const $message = `
  block
`;

const $messageTextArea = `
  w-full
  h-60
  p-2
  border-2
  border-customBlack
`;

const $buttonContainer = `
  py-4
  relative
`;

const $formSubmitButton = `
  w-full
  p-3
  font-bold
  text-customWhite
  border-none
  bg-customBlack
  cursor-pointer
`;

const $buttonDecoration = `
  w-full
  h-12
  absolute
  top-5
  left-1
  border-2
  border-customBlack
  bg-transparent
  pointer-events-none
`;

const $hiddenInputs = `
  none
`;

function ContactForm() {
  return (
    <div className={$contactFormContainer} id="contactForm">
      <h1 className={$contactFormTitle}>Let&apos;s start working together!</h1>
      <h2 className={$contactFormSubtitle}>
        The required fields are indicated with a
        {' '}
        <img src={blueStar} alt="Required field indication" className={$blueStar} />
        {' '}
        blue star.
      </h2>
      <form
        action="https://formsubmit.co/thomasruben25@gmail.com"
        method="POST"
        className={$form}
      >
        <div className={$personalInfo}>
          <p className={$credential}>
            <label htmlFor="username" className={$formLabel}>
              What is your name?
              {' '}
              <img src={blueStar} alt="Required field indication" className={$blueStar} />
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Full name"
              className={$formInput}
              required
            />
          </p>
          <p className={$credential}>
            <label htmlFor="companyName" className={$formLabel}>
              Your company name?
              {' '}
              <img src={blueStar} alt="Required field indication" className={$blueStar} />
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Company name"
              className={$formInput}
              required
            />
          </p>
          <p className={$credential}>
            <label htmlFor="email" className={$formLabel}>
              Your email address?
              {' '}
              <img src={blueStar} alt="Required field indication" className={$blueStar} />
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              className={$formInput}
              required
            />
          </p>
          <p className={$credential}>
            <label htmlFor="phone" className={$formLabel}>
              And, your phone number?
            </label>
            <input
              type="tel"
              id="phone"
              name="phoneNumber"
              placeholder="Phone number"
              className={$formInput}
            />
          </p>
        </div>
        <div className={$message}>
          <label htmlFor="message" className={$formLabel}>
            What do you wish to tell me?
            {' '}
            <img src={blueStar} alt="Required field indication" className={$blueStar} />
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            className={$messageTextArea}
            required
          />
        </div>
        <div className={$buttonContainer}>
          <button type="submit" className={$formSubmitButton}>Send your message</button>
          <div className={$buttonDecoration} />
        </div>
        <div className={$hiddenInputs}>
          <input type="hidden" name="_subject" value="TRCREATIV.DEV: New Email!" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for your message. I will reply under 48 hours."
          />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
