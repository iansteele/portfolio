import React from "react";
import "./App.css";
import Hero from "./components/Hero.js";
import Projects from "./components/Projects.js";

function Home(props) {
  return (
    <div className="flex-grow">
      <Hero />
      <Projects />
    </div>
  );
}

export default Home;
