import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Header(props) {
  return (
    // Render a Thumbnail component
    <header className="flex items-center justify-between max-w-screen-2xl	text-gray-900 mx-auto py-6 px-4">
      <Link to="/" className="inline-flex items-center flex-grow-0">
        <svg className="w-10 h-auto fill-current blue-6oo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 180">
          <path className="cls-1" d="M140 160h10l-20 20H50l20-20h20v-10h20v10zM30 100h50V80H40L30 70l10-10h130l20-20h-80V20h20l20-20H70L50 20h40v20H30L10 60 0 70l10 10zm160 0l-20-20h-50v20h40l10 10-10 10h-50V70H90v50H30l-20 20h160l20-20 10-10z" data-name="Layer 1"/>
        </svg>
        <h1 className="hidden sm:block font-bolt ml-2">Steele Design <span>co</span></h1>
      </Link>
      <nav className="flex font-bold">
        <a className="py-0.5 px-1" href="https://www.notion.so/Ian-Steele-ca6f009ed2204389be0a2d3a0ee99788">My Resume</a>
        <a className="ml-2 py-0.5 px-1" href="mailto:steeledesignco@gmail.com?subject=Reaching out from Steele Design Co" target="_blank">Contact</a>
      </nav>
    </header>
  )
}

export default Header;
