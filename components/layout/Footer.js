import React from "react";
// import "../../App.css";
import Social from "../Social";
import Button from "../Button";

function Footer(props) {
  return (
    <footer className="flex flex-col items-center justify-center w-full px-6 py-16 text-center text-brand-tertiary">
      <p className="text-2xl font-bold ">Don't be a stranger</p>

      <Social />
      <a
        href="mailto:steeledesignco@gmail.com"
        className="relative p-1 mt-4 font-bold transition-colors rounded cursor-pointer focus-base group text-brand-secondary hover:text-brand-tertiary focus-visible:text-brand-tertiary"
      >
        Email me
        <span className="absolute rounded-full left-0 w-0 h-1 transition-all duration-500 ease-in-out bg-brand-secondary -bottom-0.5 group-hover:w-full"></span>
      </a>
    </footer>
  );
}

export default Footer;
