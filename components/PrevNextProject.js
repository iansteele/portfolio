import React from "react";

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
    <div className="grid items-stretch grid-cols-2 gap-0 mt-16 mix-blend-overlay h-60">
      {prevProject && (
        <div className="relative grid items-center justify-center overflow-hidden place-items-center group ">
          <img
            className="absolute inset-0 z-0 w-full transition-all duration-500 transform grayscale group-hover:grayscale-0"
            src={prevProject.image}
            alt={prevProject.altLabel}
          />
          {/* <span className="absolute inset-0 transition-opacity duration-500 opacity-90 bg-brand-primary group-hover:opacity-0"></span> */}
          <span className="absolute inset-0 text-lg font-semibold text-brand-tertiary z-100">
            Previous Project
          </span>
        </div>
      )}
      {nextProject && (
        <div className="relative grid overflow-hidden place-items-center mix-blend-overlay group">
          <img
            className="absolute inset-0 z-0 w-full transition-all duration-500 transform grayscale group-hover:grayscale-0"
            src={nextProject.image}
            alt={nextProject.altLabel}
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
