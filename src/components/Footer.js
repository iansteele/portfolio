import React from 'react';
import '../App.css';
import Social from './Social.js';
import Button from './Button.js';

function Footer(props) {
  return (
    <footer className="flex flex-col items-center justify-between w-full px-6 py-10 mt-8 space-y-10 text-white text-gray-900 sm:space-y-0 sm:flex-row sm:mt-0">
      <div className="flex flex-col items-center space-y-4 sm:items-start ">
        <p className="text-sm">Want to work together?</p>
        <Button className="bg-brand-secondary text-brand-primary"
          link="mailto:steeledesignco@gmail.com"
          label="Contact me"
        />
      </div>
      <Social/>
    </footer>
  )
}

export default Footer;
