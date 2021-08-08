import React from 'react';
import './App.css';

function Hero(props) {
  return (
    <div className="max-w-screen-2xl flex flex-col text-center items-center text-white mx-auto py-24 px-4">
      <img className="w-40 h-40 rounded-full" src={process.env.PUBLIC_URL + "/img/ian2.png"} alt=""/>
      <h1 className="text-5xl font-display font-bold mt-8 tracking-wide">Hi, I'm Ian!</h1>
      <p className="text-2xl mt-4 ">I'm a team-oriented product designer at <a className="text-underline tracking-wide underline hover:text-brand-secondary" href="www.learnzillion.com">LearnZillion</a>.</p>
      <p className="text-lg text-gray mt-2">Previously at  <a className="text-underline  tracking-wide underline hover:text-brand-secondary" href="www.untappd.com">Untappd</a>.</p>
    </div>
  )
}

export default Hero;
