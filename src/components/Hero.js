import React from 'react';
import '../App.css';

function Hero(props) {
  return (
    <div className="relative flex flex-col flex-grow px-6 pt-12 pb-8 m-4 mt-0 text-white md:pt-16 md:items-center md:pb-16 md:pt-24 xl:pb-24 xl:pt-24 bg-gray bg-opacity-5 rounded-xl md:m-6 md:mt-0">
      {/* <img className="absolute top-0 left-0" src={process.env.PUBLIC_URL + "/img/Random.svg"}/> */}
      <img className="w-16 h-16 rounded-full md:w-32 md:h-32" src={process.env.PUBLIC_URL + "/img/ian2.png"} alt=""/>
      <h1 className="mt-8 text-5xl font-bold tracking-wide md:text-7xl font-display">Hi there,</h1>
      <p className="mt-4 md:text-lg max-w-prose">My name is Ian Steele. I'm a multidisciplinary designer passionate about ethical, supportive, and playful products.</p> 
      <p className="mt-4 md:text-lg max-w-prose">For the past 2 years, I've been crafting a K-12 curriculum platform with the amazing folks @ <a className="font-semibold transition-colors text-brand-secondary hover:text-white" href="https://www.ilclassroom.com">IL Classroom</a></p>
      <p className="mt-4 text-gray">Previously designing for businesses @  <a className="font-semibold transition-colors hover:text-white" href="https://www.untappd.com">Untappd</a></p>
    </div>
  )
}


export default Hero;
