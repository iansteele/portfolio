import React from "react";

import Projects from "../components/Projects.js";

function Home(props) {
  return (
    <React.Fragment>
      <div className="relative flex flex-col-reverse items-start justify-center flex-grow w-full max-w-screen-xl gap-8 px-6 pb-8 overflow-hidden md:items-center md:py-10 md:rounded-2xl md:justify-start text-brand-tertiary md:flex-row ">
        <div className="relative flex flex-col flex-grow min-w-0 gap-4 md:w-2/3 ">
          <h1 className="text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl ">
            Hi, I'm Ian
          </h1>
          <p className="text-2xl font-bold text-brand-secondary">
            A product designer, front-end dev & illustrator
          </p>
          <p className="max-w-lg ">
            I am building a digital core curriculum platform for K-12 schools
            with the amazing folks at Imagine Learning Classroom
          </p>
        </div>
        <div className="flex-grow w-full max-w-sm mx-auto overflow-hidden md:max-w-full md:w-1/2 ">
          <img
            className="flex-shrink-0 w-full mx-auto drop-shadow-lg aspect-square"
            src={"../img/hero.png"}
            alt="Redesigned reports page"
          />
        </div>
      </div>
      <Projects />
    </React.Fragment>
  );
}

export default Home;
