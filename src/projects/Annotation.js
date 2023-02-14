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
        desciption="Promoting dialogue in the classroom"
        roles={["UX", "Research", "UI", "HTML", "CSS", "Vue"]}
      />
      <div className="mt-10 -mx-6 sm:mx-0 ">
        <img
          className="w-full h-auto sm:rounded-xl"
          src={process.env.PUBLIC_URL + "/img/annotation/hero.jpg"}
          alt="Redesigned reports page"
        />
      </div>
      <div className="pt-24 mx-auto space-y-8 max-w-prose">
        <SectionHeading>Overview</SectionHeading>

        <p className="text-5xl font-light leading-tight tracking-tight">
          <span className="font-bold">Elaborate on ideas</span> and{" "}
          <span className="font-bold">demonstrate understanding</span>
        </p>
        <p>
          {" "}
          IL Classroom enables 1 million teachers to spend more time meeting
          student need and less time building student-facing materials from
          scratch. In 2021, our digital and print products offered solutions for
          pre-planned lessons, but{" "}
          <span className="font-bold">
            required substantial effort to expand on concepts or demonstrate
            student understanding
          </span>{" "}
          mid-lesson.
        </p>
      </div>

      <div className="pt-24 mx-auto space-y-8 max-w-prose">
        <SectionHeading>My role</SectionHeading>
        <p> Lead design & researcher</p>
      </div>

      <div className="mx-auto mt-20 max-w-prose">
        <SectionHeading>Understanding the problem</SectionHeading>
        <p className="mt-8">
          {" "}
          Leveraging fullstory recordings, feedback from customer support, and
          customer-interviews, our team gathered as much information about the
          way classrooms were set up, how teachers understood X. We used
          affinity mapping to dial in what the most common problems our users
          faced when presenting to their classrooms.{" "}
        </p>
      </div>
      <div className="mx-auto mt-20 max-w-prose">
        <SectionHeading>Insights</SectionHeading>
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

      <div className="mx-auto mt-16 max-w-prose">
        <img
          src={process.env.PUBLIC_URL + "/img/annotation/in-class.jpg"}
          alt="Redesigned reports page"
        />
        <span className="mt-8 text-xs text-brand-tertiary">
          Teacher using third party software to present our lesson content
        </span>
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

      <div className="flex flex-wrap mt-20 ">
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
      <div className="flex items-center justify-center p-40 mt-20 text-2xl font-bold bg-brand-secondary text-brand-primary rounded-2xl">
        Soon to be last screenshot of the feature!
      </div>
    </ContentWrapper>
  );
}

export default Annotation;
