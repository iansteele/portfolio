import React from "react";
import "../../App.css";

function SectionHeading(props) {
  return (
    <h3>
      <span className="text-3xl text-primary lg:text-5xlfont-display">
        {props.children}
      </span>
    </h3>
  );
}

export default SectionHeading;
