import React from "react";
import { ContentWrapper, ProjectHeading } from "../components/Index";

function Annotation(props) {
  return (
    <ContentWrapper>
      <ProjectHeading
        client="Imagine Learning Classroom"
        title="Annotation tools"
        roles={["UX", "Research", "UI", "HTML", "CSS", "Vue"]}
      />

      <img
        className="mt-20"
        src={process.env.PUBLIC_URL + "/img/annotation/in-app.jpg"}
        alt="Redesigned reports page"
      />
      <div className="mt-20 max-w-prose">
        <h3 className="text-3xl text-brand-secondary font-display">
          The Challenge
        </h3>
        <p className="mt-4 leading-5">
          {" "}
          When I began working at LearnZillion, our assessments allowed for
          single-part questions. We switched to a 3rd-party assessment authoring
          platform which led to
        </p>
        <p className="mt-8 leading-5">
          After integrating a feature-rich assessment authoring platform,
          LearnZillion broke free from only being able to have one item per
          question. Instead, a single question could now have multiple parts
          which could be any combination of auto-graded and/or manually graded.
        </p>
        <p className="mt-8 leading-5">
          We needed a way to quickly let see teachers how their classes are
          doing, while allowing them to easily see which questions required
          their attention.
        </p>
      </div>
      <div className="mt-16">
        <img
          src={process.env.PUBLIC_URL + "/img/annotation/in-class.jpg"}
          alt="Redesigned reports page"
        />
        <span className="mt-8 text-xs text-gray">Original Design</span>
      </div>
      <div className="mt-20 max-w-prose">
        <h3 className="text-3xl text-brand-secondary font-display">
          User insights
        </h3>
        <p className="mt-8">
          {" "}
          On average, teachers spent 12 hours each week on non-compensated
          school-related activities such as grading papers, bus duty, and club
          advising.{" "}
          <span className="text--credit">- National Education Association</span>
        </p>
        <p className="mt-4">
          We needed a way to quickly let see teachers how their classes are
          doing, while allowing them to easily see which questions required
          their attention.
        </p>
      </div>
      <div className="mt-20 max-w-prose">
        <h3 className="text-3xl text-brand-secondary font-display">Concerns</h3>
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
      </div>
      <div className="mt-20 max-w-prose">
        <h3 className="text-3xl text-brand-secondary font-display">Ideation</h3>
        <p className="mt-8">
          I began sketching ways to funnel teachers to the reports page when an
          assignment required their attention. Concepts included the use of
          notifications, visual cues in the site nav, or allowing for the
          creation of due-dates when assigning. However, a restriction of our
          third party integration limited us to only being able to pull 50
          student reports at a time. Once there, a system of colors and shapes
          provided a quick reference to student performance instead of
          misleading scores. Allowing teachers to toggle grading by question
          instead of by student saved teachers time, allowing them to focus
          additional learning where necessary
        </p>
      </div>
      <div className="flex flex-wrap mt-20">
        <img
          src={process.env.PUBLIC_URL + "/img/gradingflow-sketch.png"}
          alt="Redesigned reports page"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/gradingmodal-sketch.png"}
          alt="Redesigned reports page"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/gradingicon-sketch.png"}
          alt="Redesigned reports page"
        />
      </div>
      <div className="mt-20 max-w-prose">
        <h3 className="text-3xl text-brand-secondary font-display">
          The Outcome
        </h3>
        <p className="mt-8">
          The final functionality of this feature included the ability to switch
          between grading by student, or by question. The ability to switch to
          grading by question allowed for teachers to quickly grade all items
          that required their attention. Giving them more time to prepare for
          subsequent lessons, or to help those students not at expectation.
          Following up with users after release we learned that teachers had no
          difficulty discerning which items required their manual review.
        </p>
      </div>
      <div className="mt-20">
        <img
          src={process.env.PUBLIC_URL + "/img/annotation/in-app.jpg"}
          alt="Redesigned reports page"
        />
      </div>
    </ContentWrapper>
  );
}

export default Annotation;