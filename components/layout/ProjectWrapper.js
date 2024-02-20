import React from "react";
import { ProjectSwitcher } from "../../components/ComponentIndex";

function ProjectWrapper(props) {
  return (
    <div className="w-full max-w-screen-lg px-6 mx-auto space-y-16 text-brand-tertiary">
      {props.children}
      <ProjectSwitcher className="mt-10" />
    </div>
  );
}

export default ProjectWrapper;
