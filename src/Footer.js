import React from 'react';
import './App.css';
import Social from './Social.js';
import Button from './Button.js';

function Footer(props) {
  return (
    <footer className="flex flex-col space-y-10 xs:space-y-0 text-white  sm:flex-row items-center justify-between text-gray-900 mt-8 px-6 py-8">
      <div className="flex flex-col items-center sm:items-start space-y-4 ">
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
