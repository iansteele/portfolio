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
          <h3>Timeline</h3>
          <p>Back to school 2022</p>
          <h3>My role:</h3>
          <ul className="pl-5 space-y-4 list-disc">
            <li>Conduct surveys and moderated user interviews</li>
            <li>Competitive research & analysis</li>
            <li>Led brainstorming workshops</li>
            <li>Prototyping & testing</li>
            <li>Front-end development of styling and toolbar interactions </li>
          </ul>
        </SectionWrapper>

        <SectionWrapper>
          <SectionHeading>Understanding the classroom</SectionHeading>
          <p>
            Our team sought to understand the classroom environment through
            teacher interviews, analaytics, and fullstory recordings. How have
            classrooms adjusted in a post-pandemic world? We sought to learn
            about what was happening outside of our product and when. How were
            teachers presenting content to students, what tools were they using
            to instruct? How were students sharing their thoughts?
          </p>

          <ol className="pl-5 space-y-4 list-disc">
            <li>
              Teachers use a variety of methods to annotate on top of our
              content. This ranged from smartboards, whiteboards, to overhead
              projectors and more.
            </li>
            <li>
              To promote classroom participation and classroom management,
              students did not have access to devices but instead followed along
              with the teacher.
            </li>
          </ol>
          <div className="space-y-8 transition-colors duration-500 ">
            <h3>Key insights</h3>
            <div className="grid items-stretch grid-cols-1 gap-2 mt-8 sm:grid-cols-2 auto-rows-max">
              {/* Comment */}
              <Quotation quote="Teachers struggled to keep students on task when students had their own device." />
              <Quotation quote="Teachers encouraged students to THINK, PAIR, SHARE." />
              <Quotation
                quote="I spend so much time recreating lesson slides because I can’t
                  draw on top of them when presenting to my classroom."
              />
              {/* Comment */}
              <Quotation
                quote="I know I can edit and save slides, but is there a way to write
                on them DURING the lesson as I present to my class?"
              />
              <Quotation
                quote="Is there a way that I can annotate over the lesson cards when
                presenting? Is there a tool in the platform for this?"
              />
              <Quotation
                quote="I use my smartboard to draw on slides, but when I scroll or
                move the page, my annotations do not move with the content."
              />
            </div>
          </div>
        </SectionWrapper>

        <Image
          className="w-full mt-16 sm:rounded-xl sm:mx-0"
          src={"/img/annotation/in-class.jpg"}
          alt="A teacher presenting a lesson to their classroom in an third-party app with screenshots of the ILClassroom course material."
          width={1440}
          height={480}
        />

        <SectionWrapper>
          <SectionHeading>Defining the problem</SectionHeading>
          <p>
            Our team sought to understand the classroom environment through
            teacher interviews, analaytics, and fullstory recordings. How have
            classrooms adjusted in a post-pandemic world? We sought to learn
            about what was happening outside of our product and when. How were
            teachers presenting content to students, what tools were they using
            to instruct? How were students sharing their thoughts?
          </p>
        </SectionWrapper>
        <Image
          className="w-full col-span-2 rounded-xl"
          src={"/img/annotation/DotVote.svg"}
          alt="Graphic illustration representing the dot voting exercise the team used to prioritize hypothesis statements"
          width="640"
          height="160"
          sizes="(min-width: 100%) 100vw"
        />

        <SectionWrapper>
          <SectionHeading>Ideation</SectionHeading>
          <p>
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
          <Image
            className="w-full h-auto col-span-2 mt-10 rounded-xl"
            src={"/img/annotation/userflow.png"}
            alt="Redesigned reports page"
            width="800"
            height="640"
            sizes="(min-width: 100%) 100vw"
          />
          <div className="grid items-start gap-2 mt-10 sm:grid-cols-2 sm:flex-row">
            <Image
              className="rounded-lg aspect-auto"
              src={"/img/annotation/sketches1.jpg"}
              alt="Redesigned reports page"
              width="400"
              height="400"
            />
            <Image
              className="rounded-lg aspect-auto"
              src={"/img/annotation/Style exploration.jpg"}
              alt="Redesigned reports page"
              width="400"
              height="400"
            />

            <Image
              className="rounded-lg aspect-auto"
              src={"/img/annotation/original-cards.jpg"}
              alt="Redesigned reports page"
              width="400"
              height="400"
            />
            <Image
              className="rounded-lg aspect-auto"
              src={"/img/annotation/Style exploration2.jpg"}
              alt="Redesigned reports page"
              width="400"
              height="400"
            />

            <Image
              className="rounded-lg aspect-auto"
              src={"/img/annotation/text-highlighting.jpg"}
              alt="Redesigned reports page"
              width="400"
              height="400"
            />
            <Image
              className="w-full col-span-2 shadow-lg rounded-xl"
              src={"/img/annotation/Annotation_mvp.gif"}
              alt="Redesigned reports page"
              width="640"
              height="800"
              sizes="(min-width: 100%) 100vw"
            />
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <SectionHeading>Testing our assumptions</SectionHeading>
          <ul className="pl-5 space-y-4 list-disc ">
            <li>
              When card content responded to the browser width, annotations
              would decouple from their intended place
            </li>
            <li>
              Prioritzation and understanding of the iconography and
              functionality of tools
            </li>
            <li>Where teachers and students expected to annotate</li>
            <li>Learn how long teachers expected annotations to be visible.</li>
          </ul>

          {/* <Image
            className="w-full mt-16 rounded-lg aspect-auto"
            src={"/img/annotation/responsive-break.jpg"}
            alt="Redesigned reports page"
            width="400"
            height="300"
          /> */}
        </SectionWrapper>

        <div className="mx-auto max-w-prose">
          <SectionHeading>What we delivered</SectionHeading>
          <p>
            Annotations v.1 was released to teachers for Back to School 2022.
            With the ability to customize card content, we chose to forego
            saving annotations to further promote the "in the moment"
            discussions.
          </p>
          <p>
            Teachers are able to annotate both in class settings as well as in
            the teacher-led Live Learn experience where teacher-created
            annotations appear on student devices in real-time.
          </p>
        </div>

        <div className="grid items-start grid-flow-row gap-4 grid-cols-auto md:grid-cols-3">
          <Image
            className="w-full col-span-3 rounded-lg aspect-auto"
            src={"/img/annotation/drawing-card.jpg"}
            width={720}
            height={450}
            alt="Annotations drawing tool on a lesson card"
          />
          <Image
            className="col-span-3 rounded-lg sm:col-span-1 aspect-square"
            src={"/img/annotation/tool-list.jpg"}
            width={1440}
            height={900}
            alt="Annotations drawing tool on a lesson card"
          />
          <video
            className="col-span-3 rounded-xl sm:col-span-1 aspect-square"
            src={"../img/annotation/colorpicker.mp4"}
            autoPlay
            muted
            loop
            playsInline
          ></video>
          <Image
            className="col-span-3 rounded-lg sm:col-span-1 aspect-auto"
            src={"/img/annotation/inclass-annotations.png"}
            width={1440}
            height={900}
            alt="Annotations drawing tool on a lesson card"
          />
          <Image
            className="w-full col-span-3 rounded-xl aspect-square"
            src={"/img/annotation/inclass-annotations.jpg"}
            alt="Redesigned reports page"
            width={720}
            height={450}
          />
        </div>
        <SectionWrapper>
          <SectionHeading>Outcomes</SectionHeading>
          <p>
            Annotations had been one of our most requested features leading up
            to this work. Our customer success reps were met with overwhelming
            excitement from districts and teachers looking forward to using the
            annotation tools.
          </p>
          <h3>Stories from our customers</h3>
          <div className="mt-8 space-y-4">
            <Quotation
              quote="This is fantastic on so many levels! I love how my annotations move with the page as I scroll."
              author="7th grade math teacher"
            />
            <Quotation
              quote="I really like annotations because it helps us learn better!"
              author="California elementary student"
            />
            <Quotation
              quote="Our teachers are able to spend far less time trying to work-around technical limitations in the classroom. The ability to quickly highlight key points or have students show their thinking has helped the classroom keep the focus on learning and not the tooling."
              author="Illinois public school admin"
            />
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeading>What's next</SectionHeading>
          <p>
            Over the course of 2023, we are monitoring annotation usage via
            FullStory and Mixpanel. We are also keeping an eye out for feedback
            from the customer support team.
          </p>
          <p>
            We'll be looking to spot unexpected uses and requests of the
            annotation tools. We have a hunch that teachers will want to
            leverage annotations when reviewing student work in order to mark up
            student responses.
          </p>
        </SectionWrapper>
      </ProjectWrapper>
      {/* <PrevNextProject project={Project} currentProject={project} /> */}
    </PageWrapper>
  );
}

export default Annotations;
