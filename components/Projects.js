import React from "react";
import Thumbnail from "./Thumbnail.js";
import { project } from "./Project.js";

export default function ProjectList() {
  const thumbnails = project.map((project, index) => {
    return (
      <Thumbnail
        title={project.title}
        link={project.link}
        image={project.image}
        alt={project.altLabel}
        // Pass other props as needed
      />
    );
  });

  return (
    <ul className="grid w-full max-w-screen-xl grid-cols-1 gap-4 px-4 py-10 space-y-0 list-none md:grid-cols-2 lg:grid-cols-3">
      {thumbnails}
    </ul>
  );
}
