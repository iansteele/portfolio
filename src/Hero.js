import React from 'react';
import './App.css';

function Hero(props) {
  return (
    <div className="flex-grow flex flex-col text-center items-center text-white pb-12 pt-16 md:pb-16 px-6 md:pt-24  xl:pb-24 xl:pt-24 bg-gray bg-opacity-5 rounded-xl m-4 md:m-6 mt-0">
      <img className="w-24 h-24 md:w-32 md:h-32 rounded-full" src={process.env.PUBLIC_URL + "/img/ian2.png"} alt=""/>
      <h1 className="text-5xl md:text-7xl font-display font-bold mt-4 tracking-wide">Hi, I'm Ian!</h1>
      <p className="text-lg mt-4 ">I'm crafting a K-12 curriculum platform with the amazing folks @ <a className="text-brand-secondary font-semibold hover:text-white" href="https://www.learnzillion.com">LearnZillion</a></p>
      <p className=" text-gray mt-8 ">Previously @  <a className="font-semibold hover:text-brand-secondary" href="https://www.untappd.com">Untappd</a></p>
    </div>
  )
}

export default Hero;
