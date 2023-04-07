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
        key={Project.id}
        description={Project.description}
        // Pass other props as needed
      />
    )
  );

  return (
    <ul className="grid w-full max-w-screen-xl grid-cols-1 gap-4 px-4 space-y-0 list-none auto-rows-max md:grid-cols-2 xl:grid-cols-3">
      {thumbnails}
    </ul>
  );
}
