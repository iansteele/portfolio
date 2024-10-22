import React from "react";
import { ProjectSwitcher } from "../../components/ComponentIndex";

function ProjectWrapper(props) {
  return (
    <div className="w-full mx-auto space-y-16 max-w-screen-2xl text-brand-tertiary">
      {props.children}
      <ProjectSwitcher className="mt-10" />
    </div>
  );
}

export default ProjectWrapper;
