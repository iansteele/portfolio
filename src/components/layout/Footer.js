import React from "react";
import "../../App.css";
import Social from "./../Social";
import Button from "./../Button";

function Footer(props) {
  return (
    <footer className="flex flex-col items-center justify-between w-full pt-10 pb-12 space-y-10 text-white text-gray-900 sm:py-24 sm:px-6 max-w-screen-2xl sm:space-y-0 sm:flex-row sm:mt-0">
      <div className="flex flex-col items-center gap-6 sm:gap-2 sm:items-start ">
        <h2 className="text-3xl text-center sm:text-left font-display">
          Don't be a stranger!
        </h2>
        <Button link="mailto:steeledesignco@gmail.com" label="Email me" />
      </div>
      <Social />
    </footer>
  );
}

export default Footer;
