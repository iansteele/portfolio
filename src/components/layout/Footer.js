import React from "react";
import "../../App.css";
import Social from "./../Social";
import Button from "./../Button";

function Footer(props) {
  return (
    <footer className="flex flex-col items-center w-full max-w-screen-xl gap-6 px-6 py-20 text-gray-900 text-brand-tertiary">
      <h2 className="text-2xl font-bold text-center ">Don't be a stranger</h2>

      <Social />
      <a
        href="mailto:steeledesignco@gmail.com"
        className="relative text-lg font-bold transition-colors cursor-pointer group text-brand-secondary hover:text-white"
      >
        steeledesignco@gmail.com
        <span className="absolute rounded-full left-0 w-0 h-1 transition-all duration-500 ease-in-out bg-brand-secondary -bottom-0.5 group-hover:w-full"></span>
      </a>
    </footer>
  );
}

export default Footer;
