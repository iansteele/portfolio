import React from 'react';
import './App.css';
import Hero from './Hero.js';
import Projects from './Projects.js';

function Home(props) {
  return (
    <div>
      <Hero/>
      <Projects/>
    </div>
  )
}

export default Home;
