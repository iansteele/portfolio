import React from "react";
import {
  PageWrapper,
  ProjectWrapper,
  ProjectHeading,
  SectionHeading,
  Project,
  BlurImage,
} from "../../components/ComponentIndex";

function BackpackUI(props) {
  const project = Project.find((p) => p.title === "Backpack UI");
  return (
    <PageWrapper>
      <ProjectWrapper>
        <ProjectHeading project={project} />
        <h2 className="text-center">Coming soon! </h2>
        <div className="-mx-6 sm:mx-0 w-full overflow-hidden sm:rounded-xl aspect-[4/3]">
          <img
            className="w-full h-auto"
            src="https://33.media.tumblr.com/101e239c57e392359d664ba8d9adaad7/tumblr_mhz6l8TO8s1rzb0xro1_250.gif"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mx-auto md:gap-8">
          <div className="col-span-2 py-8 mx-auto lg:py-20 max-w-prose lg:text-center">
            <SectionHeading>The goal</SectionHeading>
            <span className="block mt-4 text-5xl text-brand-tertiary leading-12 lg:text-6xl font-display">
              Reduce inconsistencies between design and development
            </span>
          </div>
        </div>
      </ProjectWrapper>
    </PageWrapper>
  );
}

export default BackpackUI;
