import React from "react";
// import "../../App.css";

function SectionHeading(props) {
  return (
    <h2 className="inline-flex text-brand-secondary max-w-prose">
      <span className="text-3xl font-bold text-primary font-display">
        {props.children}
      </span>
    </h2>
  );
}

export default SectionHeading;
