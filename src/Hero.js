import React from 'react';
import './App.css';

function Hero(props) {
  return (
    <div className="max-w-screen-2xl flex flex-col text-center items-center text-white mx-auto py-24 px-4">
      <img className="w-28 h-28 md:w-40 md:h-40 rounded-full" src={process.env.PUBLIC_URL + "/img/ian2.png"} alt=""/>
      <h1 className="text-5xl md:text-7xl font-display font-bold mt-8 tracking-wide">Hi, I'm Ian!</h1>
      <p className="text-xl mt-6 ">I'm a team-oriented product designer at <a className="text-brand-secondary font-semibold hover:text-white" href="https://www.learnzillion.com">LearnZillion</a>.</p>
      <p className=" text-gray mt-2">Previously @  <a className="text-brand-secondary font-semibold hover:text-white" href="https://www.untappd.com">Untappd</a>.</p>
    </div>
  )
}

export default Hero;
