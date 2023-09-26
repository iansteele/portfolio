import React from "react";
import Image from "next/image";
import gradingFlowSketch from "public/img/gradingflow-sketch.png";
import gradingModalSketch from "public/img/gradingmodal-sketch.png";
import gradingIconSketch from "public/img/gradingicon-sketch.png";
import {
  PageWrapper,
  ProjectWrapper,
  ProjectHeading,
  SectionWrapper,
  SectionHeading,
  Project,
  BlurImage,
} from "../../components/ComponentIndex";

function Grading(props) {
  const project = Project.find((p) => p.title === "Grading Redux");

  return (
    <PageWrapper>
      <ProjectWrapper>
        <ProjectHeading project={project} />
        <div className="-mx-6 sm:mx-0  overflow-hidden sm:rounded-xl aspect-[4/3]">
          <BlurImage
            src={"/img/grading/Grading-main.jpg"}
            alt="Screenshot of the new grading UI"
            width={1440}
            height={810}
            priority
            className="rounded-xl"
          />
        </div>

        <SectionWrapper>
          <SectionHeading>The goal</SectionHeading>
          <span className="block text-4xl leading-tight text-brand-tertiary font-display">
            Less homework for teachers
          </span>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeading>Overview</SectionHeading>

          <p>
            Imagine Learning Classroom is a digital K-12 curriculum platform
            that supports teachers from planning through grading and
            remediation. In 2021, the grading experience held several pain
            points that resulted in limited use or abandonment altogether.
          </p>

          <p className="highlight">
            Abandonment in the grading phase negatively impacted data available
            to teachers and their districts. Data which informed teachers in
            planning and remediaton for their students.
          </p>
        </SectionWrapper>

        <SectionWrapper>
          <h3>Timeline</h3>
          <p>Back to school 2022</p>
          <h3>My role:</h3>
          <ul className="pl-5 space-y-4 list-disc">
            <li>Facilitate user interviews</li>
            <li>Competitive research & analysis</li>
            <li>Led brainstorming workshops</li>
            <li>Prototyping & testing</li>
            <li>Front-end development </li>
          </ul>
        </SectionWrapper>

        <SectionWrapper>
          <SectionHeading>The Challenge</SectionHeading>
          <p>
            Teachers assign work to students to gain check student comprehension
            and benchmark key milestones. For the 2021 school year, our data had
            shown that only 20% of teachers were grading student work.
          </p>
          <p className="highlight">
            By not grading student work, teachers and their districts could not
            use data to paint an accurate picture of overall student
            performance.
          </p>

          <h3>Constraints</h3>
          <p className="">
            Our assessments were built with a third-party authoring platform
            that placed restrictions on what was possible with student
            responses.{" "}
            <ul className="pl-5 space-y-4 list-disc">
              <li>
                Unable to show multiple student responses at the same time
              </li>
              <li>Delay in score calculation when grading a question</li>
              <li>Delay in score calculation when grading a question</li>
            </ul>
          </p>
        </SectionWrapper>

        <SectionWrapper>
          <SectionHeading>User insights</SectionHeading>
          <p>
            The product manager and I facilitating customer satisfaction
            interviews to learn about the frequency in which teachers assigned
            and graded student work. During these conversations with teachers
            our goal was to build an understanding of what is and what wasn't
            working in the grading workflow.
          </p>
          <p>
            Teachers were using a variety of methods to annotate on top of our
            content. This ranged from smartboards, to whiteboards, to overhead
            projectors. To promote classroom participation and classroom
            management, students did not have access to devices but instead
            followed along with the teacher.
          </p>

          <ul>
            <li>
              Teachers had to wait ~5 seconds for every student's scores to save
              before they could continue to the next student.
            </li>
            <li>It was unclear where one question ends and the next begins</li>
            <li>
              Viewing the same question for across all students helps to
              identify patterns
            </li>
          </ul>
        </SectionWrapper>

        {/* <SectionWrapper>
          <SectionHeading>Ideation</SectionHeading>
          <p>
            After speaking with teachers, it was clear that there were a lot of
            small victories to be had as well as major overhauls.
          </p>
        </SectionWrapper>
        <div className="grid grid-cols-1 gap-4 mt-16 md:grid-cols-3 md:flex-row">
          <Image
            src={gradingFlowSketch}
            alt="A low-fidelity sketch of early grading layouts"
          />
          <Image
            src={gradingModalSketch}
            alt="Original grading modal sketch "
          />
          <Image
            src={gradingIconSketch}
            alt="Examples of iconography portraying student score"
          />
        </div> */}
        <SectionWrapper>
          <SectionHeading>What we delivered</SectionHeading>
          <p>
            There were three main views that we chose to focus our attention on
            when it came to a teachers grading workflow.
          </p>
        </SectionWrapper>
        <SectionWrapper>
          <h3>Informative assignment cards</h3>
          <p>
            When viewing a class, teachers had to go into an assignment to see
            who has completed it, and how many students needed to be graded. By
            updating the assignment cards, teachers were able to quickly see
            student progress and whether it required their attention.
          </p>
        </SectionWrapper>
        <div className="w-full mt-8 text-center sm:p-2 ">
          <img
            className="flex-1 min-w-0 rounded-lg"
            src={"../img/grading/assignment-cards.jpg"}
            alt="Assignment list items portraying student activity"
          />
        </div>
        <SectionWrapper>
          <h3>A bird's-eye view</h3>
          <p className="mt-4">
            During interviews, we learned of several opportunities to improve
            this overhead view of assignments.
          </p>
        </SectionWrapper>
        <div className="w-full mt-8 text-center sm:p-2 ">
          <img
            className="flex-1 min-w-0 rounded-lg"
            src={"../img/grading/Student Submissions.jpg"}
            alt="The student submissions table displaying scores on an assignment."
          />
        </div>
        <SectionWrapper>
          <h3>An overhauled grading experience</h3>
          <p className="mt-4">
            We gave teachers the option to filter out students in several ways
            depending on their grading preferences. They can then grade by
            student or by question to more easily identify patterns in their
            students' thinking. Share responses with the class while keeping
            student names anonymous.
          </p>
        </SectionWrapper>
        <div className="w-full space-y-8 text-center sm:p-2 ">
          <video
            className=" rounded-xl"
            src={"../img/grading/Quick Grader.mp4"}
            autoPlay
            muted
            loop
            playsInline
          ></video>
          <Image
            src={"/img/grading/Grading.jpg"}
            alt="Redesigned reports page"
            width={1440}
            height={810}
            className="rounded-xl"
          />
          {/* <Image
            src={"/img/grading/Tips.png"}
            alt="Redesigned reports page"
            width={400}
            height={300}
          /> */}
          <Image
            src={"/img/grading/quickgrader.jpg"}
            alt="Overview of the response card component structure"
            width={1440}
            height={810}
            className="rounded-xl"
          />

          <Image
            src={"/img/grading/Tips.jpg"}
            alt="Screenshot of a modal showcasing keyboard shortcuts in the grading experience"
            width={1440}
            height={810}
            className="rounded-xl"
          />
        </div>
      </ProjectWrapper>
    </PageWrapper>
  );
}

export default Grading;
