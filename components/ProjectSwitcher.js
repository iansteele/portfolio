import { useRouter } from "next/router";
import project from "../components/ProjectData";
import Image from "next/image";

const ProjectSwitcher = () => {
  const router = useRouter();
  const nonDraftProjects = project.filter((project) => !project.draft);
  const currentProjectIndex = nonDraftProjects.findIndex(
    (project) => project.link === router.pathname
  );
  const hasProjects = nonDraftProjects.length > 0;

  const getProjectAtIndex = (index) => {
    return nonDraftProjects[index] || null;
  };

  const prevProject = getProjectAtIndex(currentProjectIndex - 1);
  const nextProject = getProjectAtIndex(currentProjectIndex + 1);

  const navigateToProject = (project) => {
    if (project) {
      router.push(project.link);
    }
  };

  return (
    <div className="grid w-full grid-cols-2 md:gap-4 place-items-stretch justify-items-stretch grid-auto-rows">
      {hasProjects && (
        <>
          {prevProject && (
            <a
              key={prevProject.link}
              className="relative flex flex-wrap items-center flex-grow w-full col-span-1 gap-4 p-4 cursor-pointer md:flex-row-reverse text-brand-tertiary basis-1/2 rounded-xl group"
              onClick={() => navigateToProject(prevProject)}
            >
              <div className="w-full overflow-hidden proj-switcher_img">
                <Image
                  className="object-cover object-center"
                  src={prevProject.image}
                  alt="Redesigned reports page"
                  height="800"
                  width="600"
                />
              </div>
              <div className="flex flex-col w-full ">
                <span className="text-sm opacity-75">Previous</span>
                <span className="font-bold">{prevProject.title}</span>
              </div>
            </a>
          )}
          {nextProject && (
            <a
              key={nextProject.link}
              className="relative flex flex-wrap items-center flex-grow w-full col-span-1 col-start-2 gap-4 p-4 cursor-pointer md:flex-row-reverse text-brand-tertiary basis-1/2 rounded-xl group"
              onClick={() => navigateToProject(nextProject)}
            >
              <div className="w-full overflow-hidden proj-switcher_img">
                <Image
                  className="object-cover object-center"
                  src={nextProject.image}
                  alt="Redesigned reports page"
                  height="800"
                  width="600"
                />
              </div>
              <div className="flex flex-col w-full ">
                <span className="text-sm opacity-75">Next</span>
                <span className="font-bold">{nextProject.title}</span>
              </div>
            </a>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectSwitcher;
