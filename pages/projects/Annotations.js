import React from "react";
import {
  PageWrapper,
  ProjectWrapper,
  ProjectHeading,
  PrevNextProject,
  SectionHeading,
  SectionWrapper,
  Project,
  BlurImage,
} from "../../components/ComponentIndex";

function Annotations(props) {
  const project = Project.find((p) => p.title === "Annotations");

  return (
    <PageWrapper>
      <ProjectWrapper>
        <ProjectHeading project={project} />
        <div className="-mx-6 sm:mx-0  overflow-hidden sm:rounded-xl aspect-[4/3]">
          <BlurImage
            className="w-full h-auto "
            src={"/img/annotation/hero.jpg"}
            alt="Redesigned reports page"
            width={1440}
            height={810}
            priority
          />
        </div>
        <SectionWrapper>
          <SectionHeading>Overview</SectionHeading>

          <p className="text-5xl font-light leading-tight tracking-tight">
            <span className="font-bold">Expand on ideas</span> and{" "}
            <span className="font-bold">demonstrate understanding</span>
          </p>
          <p>
            {" "}
            IL Classroom enables 1 million teachers to spend more time meeting
            student need and less time building student-facing materials from
            scratch. In 2021, our digital and print products offered solutions
            for pre-planned lessons, but{" "}
            <span className="highlight">
              required substantial effort to expand on concepts or demonstrate
              student understanding mid-lesson.
            </span>
          </p>
        </SectionWrapper>

        <SectionWrapper>
          <SectionHeading>My role</SectionHeading>
          <p>
            Our team consisted of myself as lead designer, a product manager, an
            engineer, a supporting designer, director of product marketing, and
            a customer success manager.
          </p>
          <h3>My responsibilities include:</h3>
          <ul className="pl-5 space-y-4 list-disc">
            <li>
              Conducting surveys and moderated user interviews with customers
            </li>
            <li>Competitive research & analysis</li>
            <li>Led brainstorming workshops</li>
            <li>Prototyping & testing</li>
            <li>Collaborating and writing production code</li>
          </ul>
        </SectionWrapper>

        {/* <div className="w-full mx-auto space-y-8 ">
          <SectionHeading>Our Process</SectionHeading>
          <div className="flex flex-wrap w-full gap-2">
            <div className="flex flex-col flex-1 w-full p-4 text-black border-2 rounded-lg border-brand-tertiary ">
              <p className="text-xl leading-6 text-brand-tertiary">
                (Re)Define
              </p>
              <p className="text-bold text-brand-secondary">
                Scope the problem
              </p>
            </div>
            <div className="flex flex-col flex-1 w-full p-4 text-black border-2 rounded-lg border-brand-tertiary ">
              <p className="text-xl leading-6 text-brand-tertiary ">
                (Re)Define
              </p>
              <p className="text-bold text-brand-secondary">
                Scope the problem
              </p>
            </div>
            <div className="flex flex-col flex-1 w-full p-4 text-black border-2 rounded-lg border-brand-tertiary ">
              <p className="text-xl leading-6 text-brand-tertiary ">
                (Re)Define
              </p>
              <p className="text-bold text-brand-secondary">
                Scope the problem
              </p>
            </div>
          </div>
        </div> */}

        <SectionWrapper>
          <SectionHeading>Understanding the classroom</SectionHeading>
          <p>
            Through customer interviews, fullstory recordings, and feedback from
            customer support, our team sought to understand the classroom
            environment post-COVID.
          </p>

          <div className="space-y-8">
            <h3>What we learned</h3>
            <ol className="pl-5 space-y-4 list-disc">
              <li>
                Teachers use a variety of methods to annotate on top of our
                content. This ranged from smartboards, whiteboards, to overhead
                projectors and more.
              </li>
              <li>
                To promote classroom participation and classroom management,
                students did not have access to devices but instead followed
                along with the teacher.
              </li>
            </ol>
            <img
              className="w-full mt-8 sm:rounded-xl sm:mx-0"
              src={"../img/annotation/in-class.jpg"}
              alt="A teacher presenting a lesson to their classroom in an third-party app with screenshots of the ILClassroom course material."
            />
          </div>
          <div className="space-y-8">
            <h3>Key insights</h3>
            <div className="mt-8 space-y-2 ">
              {/* Comment */}
              <div className="relative p-4 text-black bg-white rounded-md shadow-md">
                <p className="text-lg leading-6">
                  I spend so much time recreating lesson slides because I can’t
                  draw on top of them when presenting to my classroom.
                </p>
              </div>
              {/* Comment */}
              <div className="relative p-4 text-black bg-white rounded-md shadow-md">
                <p className="text-lg leading-6">
                  I know I can edit and save slides, but is there a way to write
                  on them DURING the lesson as I present to my class?
                </p>
              </div>
              {/* Comment */}
              <div className="relative p-4 text-black bg-white rounded-md shadow-md">
                <p className="text-lg leading-6">
                  Is there a way that I can annotate over the lesson cards when
                  presenting? Is there a tool in the platform for this?
                </p>
              </div>
              {/* Comment */}
              <div className="relative p-4 text-black bg-white rounded-md shadow-md">
                <p className="text-lg leading-6">
                  I use my smartboard to draw on your slides, but when I scroll
                  or move the page, my annotations do not move with the content.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <SectionHeading>Ideation</SectionHeading>
          <p className="mt-8">
            We wanted to stress-test what annotating on our lesson cards would
            look like. How would the annotations scale with content? Would they
            fall apart on responsive layouts? What tools are currently available
            in our product that have similar functionality? If there are any,
            can they fit our use case?
          </p>
          <p className="mt-8">
            We leveraged a third-party annotation tool to get us up and running
            quickly to test these hypothesis.
          </p>

          <div className="flex items-center mt-2 flex-grow h-full p-4 bg-[#EFF2FB] rounded-lg">
            <img
              className="shadow-lg rounded-xl"
              src={"../img/annotation/Annotation_mvp.gif"}
              alt="Redesigned reports page"
            />
          </div>
          <p>
            We leveraged a third-party annotation tool to get us up and running
            quickly to test these hypothesis.
          </p>
          <h3 className="w-auto font-bold">Testing takeaways</h3>
          <ul className="pl-5 space-y-4 list-disc ">
            <li>Annotations quickly fell apart with responsive content</li>
            <li>Prioritzation and understanding of tools</li>
            <li>Location to initiate annotation mode</li>
          </ul>
          <div className="grid items-start gap-2 sm:grid-cols-2 sm:flex-row">
            <img
              className="rounded-lg aspect-auto"
              src={"../img/annotation/Card break.jpg"}
              alt="Redesigned reports page"
            />
            <img
              className="rounded-lg aspect-auto"
              src={"../img/annotation/sketches1.jpg"}
              alt="Redesigned reports page"
            />
            <img
              className="rounded-lg aspect-auto"
              src={"../img/annotation/Style exploration.jpg"}
              alt="Redesigned reports page"
            />
            <img
              className="rounded-lg aspect-auto"
              src={"../img/annotation/Style exploration2.jpg"}
              alt="Redesigned reports page"
            />
            <img
              className="rounded-lg aspect-auto"
              src={"../img/annotation/text-highlighting.jpg"}
              alt="Redesigned reports page"
            />
          </div>
        </SectionWrapper>

        <div className="mx-auto max-w-prose">
          <SectionHeading>What we delivered</SectionHeading>
          <p className="mt-8">
            For the first release of Annotations, we released strictly to our
            teacher users.
          </p>
        </div>

        <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <video
            className=" rounded-xl aspect-square"
            src={"../img/annotation/colorpicker.mp4"}
            autoPlay
            muted
            loop
            playsInline
          ></video>
          <img
            className=" rounded-xl aspect-square"
            src={"../img/annotation/inclass-annotations.png"}
            alt="Redesigned reports page"
          />
          <img
            className=" rounded-xl aspect-square"
            src={"../img/annotation/inclass-annotations.jpg"}
            alt="Redesigned reports page"
          />
        </div>
        <div className="mx-auto max-w-prose">
          <SectionHeading>What's next</SectionHeading>
          <p className="mt-8">
            A breakdown of what we plan to improve/add in future updates to
            annotation tools.
          </p>
        </div>
      </ProjectWrapper>
      <PrevNextProject project={Project} currentProject={project} />
    </PageWrapper>
  );
}

export default Annotations;