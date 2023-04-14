import React from "react";
import Image from "next/image";

function PrevNextProject({ project, currentProject }) {
  // Get the index of the current project in the projects array
  const currentIndex = project.findIndex(
    (p) => p.title === currentProject.title
  );

  // Get the adjacent projects
  const prevProject =
    currentIndex > 0 ? project[currentIndex - 1] : project[project.length - 1];
  const nextProject =
    currentIndex < project.length - 1 ? project[currentIndex + 1] : null;

  // Render the thumbnails
  return (
    <div className="relative grid items-stretch grid-cols-2 gap-0 mt-16 h-60">
      {prevProject && (
        <div className="relative grid items-center justify-center overflow-hidden place-items-center group ">
          <Image
            className="absolute inset-0 top-0 z-0 w-full transition-all duration-500 transform -translate-y-1/4 aspect-square "
            src={prevProject.image}
            alt={prevProject.altLabel}
            width="800"
            height="600"
          />
          <span className="text-lg font-semibold text-brand-tertiary z-100">
            Previous Project
          </span>
        </div>
      )}
      {nextProject && (
        <div className="relative grid overflow-hidden place-items-center group">
          <Image
            className="absolute inset-0 top-0 z-0 w-full transition-all duration-500 transform -translate-y-1/4 aspect-square "
            src={nextProject.image}
            alt={nextProject.altLabel}
            width="800"
            height="600"
          />
          {/* <div className="absolute inset-0 transition-opacity duration-500 opacity-90 bg-brand-primary group-hover:opacity-0"></div> */}
          <span className="text-lg font-semibold text-brand-tertiary z-100">
            Next Project
          </span>
        </div>
      )}
    </div>
  );
}

export default PrevNextProject;
