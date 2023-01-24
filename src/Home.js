import React from "react";
import "./App.css";
import Projects from "./components/Projects.js";

function Home(props) {
  return (
    <React.Fragment>
      <div className="relative max-w-screen-xl flex flex-col-reverse items-center justify-center w-full md:justify-start flex-grow gap-6 px-6 pb-16 mt-0 text-brand-tertiary min-h-[50vh] md:gap-10 md:flex-row rounded-xl ">
        <div className="relative flex flex-col flex-grow min-w-0 gap-4 md:w-3/4 ">
          <h2 className="text-6xl font-bold tracking-tight md:text-7xl ">
            Hi, I'm Ian
          </h2>
          <p className="text-2xl font-bold text-brand-secondary">
            A product designer & illustrator
          </p>
          <p className="text-lg md:font-regular ">
            I am building a digital core curriculum platform with the amazing
            folks at Imagine Learning Classroom
          </p>
        </div>
        <div class="flex-grow lg:flex-shrink-0">
          <img
            className="bottom-0 mx-auto rounded-full right-4 w-80 md:w-96 aspect-square"
            src={process.env.PUBLIC_URL + "/img/ian-splatters.png"}
            alt="Redesigned reports page"
          />
        </div>
      </div>
      <Projects />
    </React.Fragment>
  );
}

export default Home;
