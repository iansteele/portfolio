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
          <SectionHeading>The Challenge</SectionHeading>
          <p>
            {" "}
            When I began working at Imagine Learning Classroom, our teachers
            regularly voiced concerns about how painfully slow grading was on
            our platform. Teachers would skip grading entirely which led to
            inaccurate data their districts, decreasing our perceived value.
          </p>
        </SectionWrapper>

        <SectionWrapper>
          <SectionHeading>User insights</SectionHeading>
          <p>
            {" "}
            On average, teachers spent 12 hours each week on non-compensated
            school-related activities such as grading papers, bus duty, and club
            advising.{" "}
            <span className="text--credit">
              - National Education Association
            </span>
          </p>
          <p>
            We needed a way to quickly let see teachers how their classes are
            doing, while allowing them to easily see which questions required
            their attention.
          </p>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeading>Concerns</SectionHeading>
          <div className="mt-4">
            <p className="mt-8">
              Reports listed all classes together. This made it difficult for
              teachers to distinguish how their individual classrooms were
              performing, and prevented teachers from knowing which class each
              student belonged to.
            </p>
            <p className="mt-4">
              Assignment questions can now be multi-part. How do we display
              completion, scoring, and need for manual grading?
            </p>
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeading>Ideation</SectionHeading>
          <p className="mt-8">
            I began sketching ways to funnel teachers to the reports page when
            an assignment required their attention. Concepts included the use of
            notifications, visual cues in the site nav, or allowing for the
            creation of due-dates when assigning. However, a restriction of our
            third party integration limited us to only being able to pull 50
            student reports at a time. Once there, a system of colors and shapes
            provided a quick reference to student performance instead of
            misleading scores. Allowing teachers to toggle grading by question
            instead of by student saved teachers time, allowing them to focus
            additional learning where necessary
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
          <SectionHeading>The Outcome</SectionHeading>
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
