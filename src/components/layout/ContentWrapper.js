import React from "react";
import "../../App.css";
import { Link } from "react-router-dom"; // Import the Link component

function ContentWrapper(props) {
  return (
    <div className="max-w-screen-lg px-6 mx-auto mt-16 text-brand-tertiary">
      {props.children}
    </div>
  );
}

export default ContentWrapper;
