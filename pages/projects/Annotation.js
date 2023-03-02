import React from "react";
import {
  PageWrapper,
  ProjectWrapper,
  ProjectHeading,
  SectionHeading,
} from "../../components/ComponentIndex";

function Annotation(props) {
  return (
    <PageWrapper>
      <ProjectWrapper>
        <ProjectHeading
          client="Imagine Learning Classroom"
          title="Annotation tools"
          description="Promoting dialogue during classroom discussion"
          roles={["UX", "Research", "UI", "HTML", "CSS", "Vue"]}
        />
        <div className="-mx-6 sm:mx-0">
          <img
            className="w-full h-auto sm:rounded-xl"
            src={"../img/annotation/hero.jpg"}
            alt="Redesigned reports page"
          />
        </div>
        <div className="mx-auto space-y-8 max-w-prose">
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
            <span className="font-bold">
              required substantial effort to expand on concepts or demonstrate
              student understanding
            </span>{" "}
            mid-lesson.
          </p>
        </div>

        <div className="mx-auto space-y-4 max-w-prose">
          <SectionHeading>My role</SectionHeading>
          <p>
            {" "}
            Our team consisted of myself as lead designer, a product manager, an
            engineer, a supporting designer, director of product marketing, and
            a customer success manager.
          </p>
          <h3 className="text-lg font-bold">My responsibilities include:</h3>
          <ul className="pl-5 list-disc">
            <li>
              Conducting surveys and moderated user interviews with customers
            </li>
            <li>Competitive research & analysis</li>
            <li>Led brainstorming workshops</li>
            <li>Prototyping & testing</li>
            <li>Collaborating and writing production code</li>
          </ul>
        </div>

        <div className="mx-auto max-w-prose">
          <SectionHeading>Our Process</SectionHeading>
          <div className="flex flex-col p-4 mt-16 text-black bg-white rounded-lg max-w-max">
            <p className="text-xl font-bold leading-6">Define</p>
            <p className="text-sm">Understand what we think we're solving</p>
          </div>
        </div>

        <div className="mx-auto space-y-8 max-w-prose">
          <SectionHeading>Empathize & Define</SectionHeading>
          <p>
            Leveraging fullstory recordings, feedback from customer support, and
            customer-interviews, our team built an understanding of the
            classroom set up post COVID, how and when devices are used in the
            classroom. Through affinity mapping we grouped customer feedback.
            After brainstorming potential solutions to these groups, we
            leveraged a Value/Effort matrix to determine what we would deliver.
          </p>

          <div>
            <h3 className="mt-16">What we learned</h3>
            <p className="mt-8">
              Teachers were using a variety of methods to annotate on top of our
              content. This ranged from smartboards, to whiteboards, to overhead
              projectors. To promote classroom participation and classroom
              management, students did not have access to devices but instead
              followed along with the teacher.
            </p>
            <img
              className="sm:rounded-xl mt-8 -mx-6 sm:mx-0 max-w-prose"
              src={"../img/annotation/in-class.jpg"}
              alt="A teacher presenting a lesson to their classroom in an third-party app with screenshots of the ILClassroom course material."
            />
          </div>
          <div className="space-y-4"></div>
          <div>
            <h3 className="mt-16">Key insights</h3>
            <div className=" mt-8 space-y-2">
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
        </div>

        <div className="mx-auto max-w-prose">
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

          <div className="grid items-start gap-2 mt-16 sm:grid-cols-2 sm:flex-row">
            <img
              className=" rounded-lg aspect-auto"
              src={"../img/annotation/sketches1.jpg"}
              alt="Redesigned reports page"
            />
            <img
              className=" rounded-lg aspect-auto"
              src={"../img/annotation/Style exploration.jpg"}
              alt="Redesigned reports page"
            />
            <img
              className=" rounded-lg aspect-auto"
              src={"../img/annotation/Style exploration2.jpg"}
              alt="Redesigned reports page"
            />
            <img
              className=" rounded-lg aspect-auto"
              src={"../img/annotation/text-highlighting.jpg"}
              alt="Redesigned reports page"
            />
          </div>
          <div className="flex items-center mt-2 flex-grow h-full p-4 bg-[#EFF2FB] rounded-lg">
            <img
              className="shadow-lg rounded-xl"
              src={"../img/annotation/Annotation_mvp.gif"}
              alt="Redesigned reports page"
            />
          </div>

          <h3 className="w-auto mt-16 font-bold">Testing takeaways</h3>
          <ul className="pl-5 mt-8 space-y-4 list-disc ">
            <li>Annotations quickly fell apart with responsive content</li>
            <li>Prioritzation and understanding of tools</li>
            <li>Location to initiate annotation mode</li>
          </ul>
        </div>

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
            src={"../img/annotation/colorselector.mp4"}
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
            src={
              process.env.PUBLIC_URL + "/img/annotation/inclass-annotations.jpg"
            }
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
        <div className="flex items-center justify-center w-full px-16 py-40 text-2xl font-bold text-center bg-brand-secondary text-brand-primary rounded-2xl">
          Soon to be last screenshot of the feature!
        </div>
      </ProjectWrapper>
    </PageWrapper>
  );
}

export default Annotation;
