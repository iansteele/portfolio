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
    <div className="App font-body bg-brand-primary">
      <Header/>
      <Hero/>
      <Projects/>
      <Footer/>
    </div>
  </BrowserRouter>
  );
}

const Aboutpage = () => {
	return (
		<div>
				<Header/>
				<h1>Aboutpage</h1>
				<Link to='/'>Go to Aboutpage</Link>
		</div>
	)
};

export default App;
