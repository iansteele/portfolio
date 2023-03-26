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
          description="How we helped teachers spend less time grading"
          roles={["User research", "Design Thinking", "Prototyping"]}
        />
        <div className="mt-8 -mx-6 sm:mx-0">
          <img
            className="w-full h-auto"
            src={"../img/grading/Grading-main.jpg"}
            alt="Grading view for teachers displaying a sidebar, quick student switcher, and speed grader"
          />
        </div>
        <SectionWrapper>
          <SectionHeading>Overview</SectionHeading>
          <p>
            Imagine Learning Classroom is a digital K-12 curriculum platform
            that supports teachers from planning through grading and
            remediation. In 2022, the grading experience held several pain
            points that resulted in limited use or abandonment altogether.
          </p>

          <p>
            Abandonment in the grading phase negatively impacted data available
            to teachers and their districts. Data which informed teachers in
            planning and remediaton for their students.
          </p>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeading>My role</SectionHeading>
          <p>
            I worked with my PM and engineering partners to define and frame
            in-scope problems. My role within the team was to facilitate user
            workshops/interviews and as design lead.
          </p>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeading>The Challenge</SectionHeading>
          <p>
            In IL Classroom, teachers use assignments to gain an understanding
            of how their students are performing. For the 2021 school year, our
            data had shown that only 20% of teachers were grading student work.
          </p>
        </SectionWrapper>

        <SectionWrapper>
          <SectionHeading>User insights</SectionHeading>
          <p>
            I worked closely with our product manager on facilitating customer
            satisfaction interviews. During these conversations with teachers
            our goal was to build an understanding of what is and what wasn't
            working in the grading workflow.
          </p>
          <ul>
            <li>
              Teachers had to wait ~5 seconds for every student's scores to save
              before they could continue to the next student.
            </li>
            <li>It was unclear where one question ended and the next began</li>
            <li>
              Teachers could not switch between the same question for different
              students
            </li>
            <li>It was unclear where one question ended and the next began</li>
          </ul>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeading>Constraints</SectionHeading>
          <div className="mt-4">
            <p className="mt-8">
              Our assessment questions were build on a third-party authoring
              platform that placed restrictions on what was possible with
              student responses. A few examples include limiting the speed in
              which scores could save and the number of responses we could
              render on the page at a time.
            </p>
          </div>
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
            The final functionality of this feature included the ability to
            switch between grading by student, or by question. The ability to
            switch to grading by question allowed for teachers to quickly grade
            all items that required their attention. Giving them more time to
            prepare for subsequent lessons, or to help those students not at
            expectation. Following up with users after release we learned that
            teachers had no difficulty discerning which items required their
            manual review.
          </p>
        </SectionWrapper>
      </ProjectWrapper>
    </PageWrapper>
  );
}

export default Grading;
