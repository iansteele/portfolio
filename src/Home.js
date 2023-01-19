import React from "react";
import "./App.css";
import Projects from "./components/Projects.js";

function Home(props) {
  return (
    <React.Fragment>
      <div className="relative max-w-screen-xl flex flex-col-reverse items-center justify-center w-full md:justify-start flex-grow gap-6 px-6 py-24 mt-0 text-brand-tertiary min-h-[50vh] md:gap-10 md:flex-row rounded-xl ">
        <div className="flex flex-col w-full gap-4 max-w-prose">
          <h2 className="text-6xl font-bold tracking-tight md:text-7xl ">
            Hi, I'm Ian
          </h2>
          <p className="text-2xl font-bold text-brand-secondary">
            A product designer & illustrator
          </p>
          <p className="text-lg md:font-regular">
            I am building a digital k-12 curriculum platform with the amazing
            folks at Imagine Learning Classroom
          </p>
        </div>
      </div>
      <Projects />
    </React.Fragment>
  );
}

export default Home;
