import React from "react";
import Thumbnail from "./Thumbnail.js";
import Project from "./Project.js";

export default function ProjectList() {
  const thumbnails = Project.filter((Project) => !Project.draft).map(
    (Project, index) => (
      <Thumbnail
        title={Project.title}
        link={Project.link}
        image={Project.image}
        alt={Project.altLabel}
        description={Project.description}
        // Pass other props as needed
      />
    )
  );

  return (
    <ul className="grid w-full max-w-screen-xl grid-cols-1 gap-4 px-4 py-10 space-y-0 list-none md:grid-cols-2 lg:grid-cols-3">
      {thumbnails}
    </ul>
  );
}
