import React from 'react';
import '../App.css';

function Hero(props) {
  return (
    <div className="flex flex-col items-center flex-grow px-6 pt-16 pb-12 m-4 mt-0 text-center text-white md:pb-16 md:pt-24 xl:pb-24 xl:pt-24 bg-gray bg-opacity-5 rounded-xl md:m-6 md:mt-0">
      <img className="w-24 h-24 rounded-full md:w-32 md:h-32" src={process.env.PUBLIC_URL + "/img/ian2.png"} alt=""/>
      <h1 className="mt-4 text-5xl font-bold tracking-wide md:text-7xl font-display">Hi, I'm Ian!</h1>
      <p className="mt-4 text-lg ">I'm crafting a K-12 curriculum platform with the amazing folks @ <a className="font-semibold text-brand-secondary hover:text-white" href="https://www.learnzillion.com">LearnZillion</a></p>
      <p className="mt-8 text-gray">Previously @  <a className="font-semibold hover:text-brand-secondary" href="https://www.untappd.com">Untappd</a></p>
    </div>
  )
}

export default Hero;
