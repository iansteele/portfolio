import React from "react";
import "../App.css";

function ProjectHeading(props) {
  const hasRoles = props.roles;
  function RoleList() {
    if (hasRoles) {
      return (
        <ul className="flex mt-6 space-x-4 text-sm text-white opacity-75">
          {props.roles.map(function (role, index) {
            return <li key={index}>{role}</li>;
          })}
        </ul>
      );
    }
    return null;
  }

  return (
    <div className="col-span-2">
      <p className="mt-2 text-base font-semibold tracking-wide text-brand-secondary">
        {props.client}
      </p>
      <h2 className="mt-2 text-6xl font-bold tracking-tight md:text-7xl font-display">
        {props.title}
      </h2>
      <RoleList />
    </div>
  );
}

export default ProjectHeading;
