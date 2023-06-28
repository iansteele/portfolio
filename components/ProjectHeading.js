import React from "react";

function ProjectHeading({ project }) {
  const hasRoles = project.roles;
  function RoleList() {
    if (hasRoles) {
      return (
        <ul className="flex gap-4 pl-0 mt-2 space-y-0 list-none opacity-60 text-brand-tertiary">
          {project.roles.map(function (role, index) {
            return (
              <li className="text-xs" key={index}>
                {role}
              </li>
            );
          })}
        </ul>
      );
    }
    return null;
  }

  return (
    <>
      <div className="col-span-2">
        <p className="text-sm tracking-widest uppercase text-brand-secondary">
          {project.client}
        </p>
        <h1 className="mt-2 font-bold tracking-tight font-display">
          {project.title}
        </h1>
        <p className="opacity-100 text-brand-tertiary max-w-prose">
          {project.description}
        </p>
        <RoleList />
      </div>
    </>
  );
}

export default ProjectHeading;
