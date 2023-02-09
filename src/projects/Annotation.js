import React from "react";
import {
  ContentWrapper,
  ProjectHeading,
  SectionHeading,
} from "../components/Index";

function Annotation(props) {
  return (
    <ContentWrapper>
      <ProjectHeading
        client="Imagine Learning Classroom"
        title="Annotation tools"
        roles={["UX", "Research", "UI", "HTML", "CSS", "Vue"]}
      />
      <div className="mt-10 -mx-6 sm:mx-0 ">
        <img
          className="w-full h-auto"
          src={process.env.PUBLIC_URL + "/img/annotation/in-app.jpg"}
          alt="Redesigned reports page"
        />
      </div>
      <div className="py-24 mx-auto space-y-8 max-w-prose">
        <SectionHeading>How might we</SectionHeading>

        <p className="text-5xl font-light leading-tight tracking-tight">
          <span className="font-bold">Elaborate on ideas</span> and{" "}
          <span className="font-bold">demonstrate understanding</span>
        </p>
        <p>
          {" "}
          IL Classroom empowers teachers to spend more time meeting student need
          and less time building student-facing materials from scratch. Our
          digital and print products offered solutions for pre-planned lessons,
          but required substantial effort to expand on ideas or demonstrate
          student understanding in the moment.
        </p>
      </div>

      <div className="mx-auto max-w-prose">
        <img
          src={process.env.PUBLIC_URL + "/img/annotation/in-class.jpg"}
          alt="Redesigned reports page"
        />
        <span className="mt-8 text-xs text-brand-tertiary">
          Teacher using third party software to present our lesson content
        </span>
      </div>
      <div className="mx-auto mt-20 max-w-prose">
        <SectionHeading>User insights</SectionHeading>
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
      <div className="mx-auto mt-20 max-w-prose">
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
      </div>
      <div className="mx-auto mt-20 max-w-prose">
        <SectionHeading>Ideation</SectionHeading>
        <p className="mt-8">
          Something about the steps we took for prototyping ideas
        </p>
        <img
          src={process.env.PUBLIC_URL + "/img/annotation/annotations_mvp.png"}
          alt="Redesigned reports page"
          className="mt-8"
        />
      </div>

      <div className="flex flex-wrap mt-20">
        <img
          className="flex-1 min-w-0 aspect-square"
          src={
            process.env.PUBLIC_URL + "/img/annotation/inclass-annotations.png"
          }
          alt="Redesigned reports page"
        />
        <img
          className="flex-1 min-w-0 aspect-square"
          src={
            process.env.PUBLIC_URL + "/img/annotation/inclass-annotations2.jpg"
          }
          alt="Redesigned reports page"
        />
        <img
          className="flex-1 min-w-0 aspect-square"
          src={process.env.PUBLIC_URL + "/img/annotation/colorpicker.jpg"}
          alt="Redesigned reports page"
        />
      </div>
      <div className="mx-auto mt-20 max-w-prose">
        <SectionHeading>The Outcome</SectionHeading>
        <p className="mt-8">
          A breakdown of what we delivered, what our next plans are, and any
          metrics I can share. Maybe the image below is a bunch of screens of
          annotated content.
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
