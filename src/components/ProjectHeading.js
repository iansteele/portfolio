import React from "react";
import "../App.css";

function ProjectHeading(props) {
  return (
    <div class="col-span-2">
      <h2 className="text-5xl tracking-tight text-white font-display">
        {props.title}
      </h2>
      <p className="mt-2 font-semibold tracking-wide text-brand-secondary">
        {props.client}
      </p>
      <ul className="flex mt-2 space-x-4 text-xs text-white opacity-60">
        <li>User research</li>
        <li>Design Thinking</li>
        <li>Prototyping</li>
      </ul>
    </div>
  );
}

export default Projects;
