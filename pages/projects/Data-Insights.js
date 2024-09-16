import React from "react";
import Image from "next/image";
import {
  PageWrapper,
  ProjectWrapper,
  ProjectHeading,
  SectionHeading,
  SectionWrapper,
  Project,
  BlurImage,
  Quotation,
} from "../../components/ComponentIndex";

function DataInsights(props) {
  const project = Project.find((p) => p.title === "Data Insights");

  return (
    <PageWrapper>
      <ProjectWrapper>
        <ProjectHeading project={project} />
        <div className="-mx-6 sm:mx-0  overflow-hidden sm:rounded-xl aspect-[4/3]">
          <BlurImage
            className="w-full h-auto "
            src={"/img/data/Thumb.jpg"}
            alt="Redesigned reports page"
            width={1440}
            height={810}
            priority
          />
        </div>
        <SectionWrapper>
          <SectionHeading>The goal</SectionHeading>

          <p className="text-5xl font-light leading-tight tracking-tight">
            <span className="font-bold">
              Empowering educators with flexible data reports
            </span>
          </p>
          <p className="mt-4 text-brand-tertiary ">
            Designing a customizable reporting tool for district and school
            admins to analyze and improve student performance data.
          </p>
        </SectionWrapper>

        <SectionWrapper>
          <h3>Timeline</h3>
          <p>6 months</p>
          <h3>My role:</h3>
          <ul className="pl-5 space-y-4 list-disc">
            <li>Conduct surveys and moderated user interviews</li>
            <li>Led brainstorming workshops</li>
            <li>Prototyping & testing</li>
            <li>Front-end development layout and styling</li>
          </ul>
        </SectionWrapper>

        <SectionWrapper>
          <SectionHeading>THE PROBLEM</SectionHeading>
          <p>
            Districts, School Admin, and teachers rely on data to inform
            instruction and support. Our current data offerings were falling
            short and led our customers to question the efficacy of our
            curriculum.
          </p>

          <div className="space-y-8 transition-colors duration-500 ">
            <h3>Empathize</h3>
            <div className="grid items-stretch grid-cols-1 gap-2 mt-8 sm:grid-cols-2 auto-rows-max">
              {/* Comment */}
              <Quotation
                quote="It's so tedious to find the data I need to support my teachers"
                author="Elementary curriculum specialist"
              />
              <Quotation
                quote="I'm unable to compare performance across schools"
                author="District admin"
              />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <SectionHeading>Ideation</SectionHeading>
          <p>
            Districts, School Admin, and teachers rely on data to inform
            instruction and support. Our current data offerings were falling
            short and led our customers to question the efficacy of our
            curriculum.
          </p>

          <div className="space-y-8 transition-colors duration-500 ">
            <h3>Empathize</h3>
            <div className="grid items-stretch grid-cols-1 gap-2 mt-8 sm:grid-cols-2 auto-rows-max"></div>
          </div>
        </SectionWrapper>

        <Image
          className="w-full mt-16 sm:rounded-xl sm:mx-0 mix-blend-luminosity"
          src={"/img/fill-image.png"}
          alt="A teacher presenting a lesson to their classroom in an third-party app with screenshots of the ILClassroom course material."
          width={1440}
          height={480}
        />
      </ProjectWrapper>
      {/* <PrevNextProject project={Project} currentProject={project} /> */}
    </PageWrapper>
  );
}

export default DataInsights;
