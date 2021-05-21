import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Social from './Social.js';
import Button from './Button.js';

function Footer(props) {
  return (
    // Render a Thumbnail component
    <footer className="flex text-white items-center justify-between max-w-screen-2xltext-gray-900 mt-8 mx-auto py-8 px-6">
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
