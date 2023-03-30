import React from "react";
import {
  PageWrapper,
  ProjectWrapper,
  ProjectHeading,
  SectionWrapper,
  SectionHeading,
} from "../../components/ComponentIndex";

function Grading(props) {
  return (
    <PageWrapper>
      <ProjectWrapper>
        <ProjectHeading
          client="Imagine Learning Classroom"
          title="Assignment grading"
          description="How we reminagined our grading experience to be faster and more flexible"
          roles={["User research", "Design Thinking", "Prototyping"]}
        />
        <div className="mt-8 -mx-6 sm:mx-0">
          <img
            className="w-full h-auto"
            src={"../img/grading/Grading-main.jpg"}
            alt="Grading view for teachers displaying a sidebar, quick student switcher, and speed grader"
          />
        </div>
        <div className="col-span-2 py-8 mx-auto text-center lg:py-20 max-w-prose">
          <SectionHeading>The goal</SectionHeading>
          <span className="block mt-4 text-5xl leading-tight text-white lg:text-6xl lg:leading-tight font-display">
            Less time grading, more time growing
          </span>
        </div>
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
          <SectionHeading>My role</SectionHeading>
          <p>
            I worked with my PM an engineer, and two customer success
            stakeholders to define and frame in-scope problems. My role within
            the team was to facilitate user workshops/interviews and serve as
            design lead from research to design handoff.
          </p>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeading>The Challenge</SectionHeading>
          <p>
            In IL Classroom, teachers use assignments to gain an understanding
            of how their students are performing. For the 2021 school year, our
            data had shown that only 20% of teachers were grading student work.
          </p>
          <p className="mt-8">
            Our assessments were built with a third-party authoring platform
            that placed restrictions on what was possible with student
            responses.{" "}
            <span className="highlight">
              This includes but is not limited to the speed in which scores
              saved and the number of responses we could display.
            </span>
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
          <h3>What we learned</h3>
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

        <SectionWrapper>
          <SectionHeading>Ideation</SectionHeading>
          <p className="mt-8">
            After speaking with teachers, it was clear that there were a lot of
            small victories to be had as well as major overhauls.
          </p>
        </SectionWrapper>
        <div className="flex flex-col flex-wrap gap-4 mt-16 md:flex-row">
          <img
            className="flex-1 min-w-0"
            src={"../img/gradingflow-sketch.png"}
            alt="Redesigned reports page"
          />
          <img
            className="flex-1 min-w-0"
            src={"../img/gradingmodal-sketch.png"}
            alt="Redesigned reports page"
          />
          <img
            className="flex-1 min-w-0"
            src={"../img/gradingicon-sketch.png"}
            alt="Redesigned reports page"
          />
        </div>
        <SectionWrapper>
          <SectionHeading>What we delivered</SectionHeading>
          <p className="mt-8">
            There were three main views that we chose to focus our attention on
            when it came to a teachers grading workflow.
          </p>
        </SectionWrapper>
        <SectionWrapper>
          <h3>Informative assignment cards</h3>
          <p className="mt-4">
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
            alt="Redesigned reports page"
          />
        </div>
        <SectionWrapper>
          <h3>Updates to the assignment overview</h3>
          <p className="mt-4">
            During interviews, we learned of several opportunities to improve
            this overhead view of assignments.
          </p>
        </SectionWrapper>
        <div className="w-full mt-8 text-center sm:p-2 ">
          <img
            className="flex-1 min-w-0 rounded-lg"
            src={"../img/grading/Student Submissions.jpg"}
            alt="Redesigned reports page"
          />
        </div>
        <SectionWrapper>
          <h3>Grading view</h3>
          <p className="mt-4">
            This view is where the granular grading and review work is
            completed. Teachers have the option to filter out students in
            several ways depending on what they are looking for. They can then
            grade by student or by question to more easily identify patterns in
            their students' thinking
          </p>
        </SectionWrapper>
        <div className="w-full mt-8 text-center sm:p-2 ">
          <img
            className="flex-1 min-w-0 rounded-lg"
            src={"../img/grading/Grading.jpg"}
            alt="Redesigned reports page"
          />
        </div>
      </ProjectWrapper>
    </PageWrapper>
  );
}

export default Grading;
