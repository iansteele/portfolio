import React from "react";
// import "../../App.css";

function SectionHeading(props) {
  return (
    <h2 className="inline-flex text-brand-secondary max-w-prose">
      {props.children}
    </h2>
  );
}

export default SectionHeading;
