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
            src={"/img/data/thumb.jpg"}
            alt="Redesigned reports page"
            width={1440}
            height={810}
            priority
          />
        </div>
        <SectionWrapper>
          <SectionHeading>The goal</SectionHeading>

          <p className="text-5xl font-bold leading-tight tracking-tight opacity-100">
            Empower educators with flexible data reports
          </p>
        </SectionWrapper>

        <SectionWrapper>
          <h3>Timeline</h3>
          <p>6 months</p>
          <h3>My role:</h3>
          <ul className="pl-5 space-y-4 list-disc">
            <li>Conduct modereated user interviews</li>
            <li>Led brainstorming & retro workshops</li>
            <li>Design prototyping & testing</li>
            <li>Front-end development layout and styling</li>
          </ul>
        </SectionWrapper>

        <SectionWrapper>
          <SectionHeading>The problem</SectionHeading>
          <p>
            Districts, School Admin, and teachers rely on data to inform
            instruction and support. Our current data offerings were falling
            short and led our customers to question the efficacy of our
            curriculum.
          </p>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeading className="max-w-screen-lg mx-auto">
            Research
          </SectionHeading>
          <p>
            I worked closely with the product manager for this workstream to
            build a research plan comprised of gathering helpdesk tickets,
            moderated user interviews, and key stakeholder participation. We
            sought to break this plan into three following stages.{" "}
          </p>

          <div className="flex flex-col gap-6">
            <p>
              <span className="block font-bold ">Airing assumptions</span>
              Gathering key insights from past discussions, feature requests,
              and helpdesk tickets. This aligned the team on the problem we
              thought we were solving and what questions/assumption we needed to
              validate{" "}
            </p>

            <p>
              <span className="block font-bold">Definining the problem</span>
              Gathering key insights from past discussions, feature requests,
              and helpdesk tickets{" "}
            </p>
          </div>
          <div className="py-10">
            <h3>Key insights</h3>
            <div className="grid items-stretch grid-cols-1 gap-4 mt-4 sm:grid-cols-2 auto-rows-max">
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

          <h3 className="mt-10">Design principles</h3>
          <div className="flex flex-col gap-4 mt-4">
            <Image
              className="rounded-xl"
              src={"/img/data/Principle 1.jpg"}
              alt="A teacher presenting a lesson to their classroom in an third-party app with screenshots of the ILClassroom course material."
              width={1440}
              height={480}
            />
            <Image
              className="rounded-xl"
              src={"/img/data/Principle 2.jpg"}
              alt="A teacher presenting a lesson to their classroom in an third-party app with screenshots of the ILClassroom course material."
              width={1440}
              height={480}
            />
            <Image
              className="rounded-xl"
              src={"/img/data/Principle 3.jpg"}
              alt="A teacher presenting a lesson to their classroom in an third-party app with screenshots of the ILClassroom course material."
              width={1440}
              height={480}
            />
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <SectionHeading className="max-w-screen-lg mx-auto">
            Outcomes
          </SectionHeading>
          <p>Some text about how I began ideating</p>

          <h3>Feedback</h3>
          <p className="text-sm ">From our customers</p>
          <div className="grid items-stretch grid-cols-1 gap-4 mt-4 auto-rows-max">
            <Quotation
              quote="I love being able to look at multiple assignments at once across a variety of different levels. This is a massive improvement for our large district"
              author="ILC's largest school district"
            />
          </div>

          <p className="mt-10 text-sm ">From our team</p>
          <div className="grid items-stretch grid-cols-1 gap-4 mt-4 auto-rows-max">
            <Quotation
              quote="THANK YOU to Steele for the hours of brainstorming and collaboration - drawing me out of the maze of complexity and keeping the team focused on priorities"
              author="Lead PM"
            />
          </div>
        </SectionWrapper>

        <Image
          className="w-full mt-16 -mx-6 sm:rounded-xl sm:mx-0 "
          src={"/img/data/Thumb.jpg"}
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
