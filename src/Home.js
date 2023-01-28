import React from "react";
import "./App.css";
import Projects from "./components/Projects.js";

function Home(props) {
  return (
    <React.Fragment>
      <div className="relative max-w-screen-xl overflow-hidden md:rounded-2xl px-6  flex flex-col items-center md:items-center justify-center w-full  md:justify-start flex-grow gap-10  text-brand-tertiary min-h-[50vh] md:gap-10 md:flex-row ">
        <div className="flex-grow w-56 max-w-xs overflow-hidden rounded-full md:w-1/3 ">
          <img
            className="flex-shrink-0 w-full mx-auto aspect-square"
            src={process.env.PUBLIC_URL + "/img/ian-splatters-2.png"}
            alt="Redesigned reports page"
          />
        </div>
        <div className="relative flex flex-col flex-grow min-w-0 gap-4 md:w-2/3 ">
          <h2 className="text-6xl font-bold tracking-tight md:text-7xl ">
            Hi, I'm Ian
          </h2>
          <p className="text-2xl font-bold text-brand-secondary">
            A product designer & illustrator
          </p>
          <p className="max-w-lg text-lg md:font-regular">
            I am building a digital core curriculum platform for k-12 schools
            with the amazing folks at Imagine Learning Classroom
          </p>
        </div>
      </div>
      <Projects />
    </React.Fragment>
  );
}

export default Home;
