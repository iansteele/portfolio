import React from "react";

function ProjectHeading(props) {
  const hasRoles = props.roles;
  function RoleList() {
    if (hasRoles) {
      return (
        <ul className="flex gap-4 pl-0 space-y-0 list-none opacity-75 text-brand-tertiary">
          {props.roles.map(function (role, index) {
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
    <div className="col-span-2 space-y-2">
      <p className="font-semibold tracking-wide text-brand-secondary">
        {props.client}
      </p>
      <h1 className="font-bold tracking-tight font-display">{props.title}</h1>
      <p className="opacity-100 text-brand-tertiary max-w-prose">
        {props.description}
      </p>
      <RoleList />
    </div>
  );
}

export default ProjectHeading;
