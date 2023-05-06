import React from "react";

/* Wraps and centers a section of text with appropriate reading width */

function SectionWrapper(props) {
  return <div className="mx-auto mt-16 max-w-prose">{props.children}</div>;
}

function SectionHeading(props) {
  return (
    <h2 className="inline-flex mt-8 mb-4 max-w-prose">{props.children}</h2>
  );
}

export { SectionWrapper, SectionHeading };
