import React from "react";
import "../App.css";

function Hero(props) {
  return (
    <div className="relative flex flex-col items-center flex-grow gap-10 px-6 py-10 mt-0 text-white md:gap-12 xl:py-20 md:flex-row rounded-xl ">
      <div className="flex flex-col w-8/12 ">
        <h1 className="font-bold text-7xl md:text-7xl font-display">
          Hey there,
        </h1>
        <p className="mt-6 text-lg max-w-prose">
          My name is Ian Steele. I'm a multidisciplinary designer passionate
          about ethical, supportive, and playful products.
        </p>
        <p className="mt-4 text-lg max-w-prose">
          For the past 2 years, I've been crafting a K-12 curriculum platform
          with the amazing folks @{" "}
          <a
            className="font-semibold transition-colors text-brand-secondary hover:text-white"
            href="https://www.ilclassroom.com"
          >
            IL Classroom
          </a>
        </p>
        <p className="mt-4 tet-lg">
          Previously designing for businesses
          <a
            className="ml-1.5 font-semibold transition-colors text-brand-secondary hover:text-white"
            href="https://www.untappd.com"
          >
            Untappd
          </a>
        </p>
      </div>
      <div className="relative w-4/12 h-auto p-4 flex-srhink-0">
        <img
          className="w-9/12 h-auto mx-auto rounded-full"
          src={process.env.PUBLIC_URL + "/img/ian.png"}
          alt="A headshot photo of what I look like in person"
        />
      </div>
    </div>
  );
}

export default Hero;
