import React from 'react';
import './App.css';

function Hero(props) {
  return (
    <div className="max-w-screen-2xl flex flex-col text-center items-center text-white mx-auto pb-12 pt-8 md:pb-24 px-6 md:pt-16 md:max-w-prose xl:pb-40 xl:pt-24">
      <img className="w-24 h-24 md:w-32 md:h-32 rounded-full" src={process.env.PUBLIC_URL + "/img/ian2.png"} alt=""/>
      <h1 className="text-5xl md:text-7xl font-display font-bold mt-8 tracking-wide">Hi, I'm Ian!</h1>
      <p className="text-lg md:text-xl mt-6 ">I'm crafting the K-12 curriculum platform at <a className="text-brand-secondary font-semibold hover:text-white" href="https://www.learnzillion.com">LearnZillion</a></p>
      <p className=" text-gray mt-4 ">Previously @  <a className="font-semibold hover:text-brand-secondary" href="https://www.untappd.com">Untappd</a></p>
    </div>
  )
}

export default Hero;
