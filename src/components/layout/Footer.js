import React from "react";
import "../../App.css";
import Social from "./../Social";
import Button from "./../Button";

function Footer(props) {
  return (
    <footer className="flex items-center justify-between w-full max-w-screen-xl py-12 text-white text-gray-900 sm:py-24">
      <div className="flex flex-col-reverse items-center w-full gap-10 mx-auto sm:flex-row">
        <div className="flex flex-col items-center flex-grow gap-6 sm:gap-2 sm:items-start ">
          <h2 className="text-3xl text-center sm:text-left font-display">
            Don't be a stranger!
          </h2>
          <Button link="mailto:steeledesignco@gmail.com" label="Email me" />
        </div>
        <Social />
      </div>
    </footer>
  );
}

export default Footer;
