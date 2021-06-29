import React from 'react';
import './App.css';
import Social from './Social.js';
import Button from './Button.js';

function Footer(props) {
  return (
    <footer className="flex text-white items-center justify-between text-gray-900 mt-8 mx-auto px-6 py-8">
      <div class="flex flex-col ">
        <p className="text-ss">Want to work together?</p>
        <Button className="bg-brand-secondary"
          link="mailto:steeledesignco@gmail.com"
          label="Contact me"
        />
      </div>
      <Social/>
    </footer>
  )
}

export default Footer;
