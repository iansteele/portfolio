import React from "react";
import "../App.css";

function Hero(props) {
  return (
    <div className="relative flex flex-col-reverse items-center flex-grow gap-8 px-6 py-10 mt-0 text-white md:gap-10 md:gap-12 md:py-28 md:flex-row rounded-xl ">
      <div className="flex flex-col md:w-8/12 ">
        <h1 className="text-6xl font-bold tracking-tight md:text-7xl font-display">
          Hey there,
        </h1>
        <p className="mt-10 max-w-prose">
          My name is Ian Steele. I'm a multidisciplinary designer passionate
          about ethical, supportive, and playful products.
        </p>
        <p className="mt-4 max-w-prose">
          For the past 2 years, I've been crafting a K-12 curriculum platform
          with the amazing folks @{" "}
          <a
            className="font-semibold transition-colors text-brand-secondary hover:text-white"
            href="https://www.ilclassroom.com"
          >
            IL Classroom
          </a>
        </p>
        <p className="mt-4">
          Previously designing for businesses at
          <a
            className="ml-1.5 font-semibold transition-colors text-brand-secondary hover:text-white"
            href="https://www.untappd.com"
          >
            Untappd
          </a>
        </p>
      </div>
      <div className="relative h-auto p-4 md:w-4/12 flex-srhink-0">
        <div className="w-48 h-auto p-2 mx-auto border border-4 rounded-full md:w-9/12 border-brand-secondary">
          <img
            className="rounded-full "
            src={process.env.PUBLIC_URL + "/img/ian.png"}
            alt="A headshot photo of what I look like in person"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
