import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Header.js';
import Hero from './Hero.js';
import Projects from './Projects.js';
import About from './About.js';
import Footer from './Footer.js';
import "tailwindcss/tailwind.css";

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Header/>
      <Hero/>
      <Projects/>
      <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
