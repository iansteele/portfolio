import React from "react";
import "../../App.css";

function SectionHeading(props) {
  return (
    <h3>
      <span className="text-3xl font-bold text-primary font-display">
        {props.children}
      </span>
    </h3>
  );
}

export default SectionHeading;
