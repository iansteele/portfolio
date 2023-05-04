import React from "react";

/* Wraps and centers a section of text with appropriate reading width */

function SectionWrapper(props) {
  return (
    <div className="mx-auto my-24 space-y-12 max-w-prose">{props.children}</div>
  );
}

function SectionHeading(props) {
  return <h2 className="inline-flex max-w-prose">{props.children}</h2>;
}

export { SectionWrapper, SectionHeading };
