import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Social from './Social.js';
import Button from './Button.js';

function Footer(props) {
  return (
    // Render a Thumbnail component
    <footer className="flex items-center justify-between max-w-screen-2xl	text-gray-900 mt-8 mx-auto py-6">
      <div class="flex flex-col flex-grow-0">
        <p className="text-xs">Want to work together?</p>
        <Button
          link="mailto:steeledesignco@gmail.com"
          label="Contact me"
        />
      </div>
      <Social/>
    </footer>
  )
}

export default Footer;
