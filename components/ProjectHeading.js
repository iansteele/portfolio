import React from "react";

function ProjectHeading({ project }) {
  const hasRoles = project.roles;
  function RoleList() {
    if (hasRoles) {
      return (
        <ul className="flex gap-2 pl-0 mt-4 space-y-0 list-none opacity-100 text-brand-tertiary">
          {project.roles.map(function (role, index) {
            return (
              <li className="py-1 text-base font-semibold rounded opacity-50 text-brand-tertiary bg-brand-primary" key={index}>
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
      <div className="max-w-screen-xl col-span-2 mx-auto mt-16">
        <p className="text-base font-bold tracking-widest uppercase text-brand-secondary">
          {project.client}
        </p>
        <h1 className="mt-8 font-bold ">{project.title}</h1>
        <p className="mt-4 text-xl text-brand-tertiary max-w-prose opacity-80">
          {project.description}
        </p>
        {/* <RoleList /> */}
      </div>
    </>
  );
}

export default ProjectHeading;
