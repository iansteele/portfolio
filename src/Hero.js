import React from 'react';
import './App.css';

function Hero(props) {
  return (
    <div className="max-w-screen-2xl mx-auto py-24 px-4">
      <img className="w-20 h-auto rounded-full" src="../img/ian2.jpg" alt=""/>
      <h1 className="text-7xl font-display mt-6">Hi, I'm Ian!</h1>
      <p className="font-body text-lg mt-8">I'm a team-oriented product designer at <a className="text-underline  tracking-wide underline text-blue-800" href="www.learnzillion.com">LearnZillion</a>.</p>
      <p className="font-body text-lg mt-2">Previously <a className="text-underline  tracking-wide underline text-blue-800" href="www.untappd.com">Untappd</a>.</p>
    </div>
  )
}

export default Hero;
