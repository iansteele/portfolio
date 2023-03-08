import React from "react";
import { ProjectHeading } from "../../components/ComponentIndex";

function ProjectWrapper(props) {
  return (
    <div className="w-full max-w-screen-lg px-6 mx-auto space-y-16 text-brand-tertiary">
      {props.children}
    </div>
  );
}

export default ProjectWrapper;
