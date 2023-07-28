import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-start w-full gap-8 px-8 pt-16 md:gap-16 md:px-16 md:pt-24 md:flex-row bg-brand-muted ">
      <div className="relative flex flex-shrink-0 w-40 overflow-hidden rounded-full aspect-square md:w-1/4 ring-8 ring-brand-muted min-w-max bg-brand-tertiary dark:bg-brand-primary">
        <Image
          src="/img/ian-splatters-2.png"
          alt="A low-fidelity sketch of early grading layouts"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="flex flex-col flex-grow pb-20 md:pt-0 max-w-prose">
        <h1 className="mx-automd:mx-0 "> About Me</h1>

        <p className="mt-10 ">Hey there, friend 👋 </p>
        <p className="">
          I am a principal product designer with 10+ years of experience based
          in southern Illinois. Currently, I am on the{" "}
          <span className="font-bold">Classroom</span> team at{" "}
          <span className="font-bold">Imagine Learning</span>. We are focused on
          providing classrooms across the country with a high quality curriculum
          platform that helps teachers and students facilitate learning through
          planning, teaching, assigning, grading and more.
        </p>

        <p className="font-bold ">
          I'm a life-long learner who enjoys tinkering, problem-solving, and not
          taking myself too seriously.
        </p>
        <p>Want to know anything else? Feel free to reach out!</p>
      </div>
      {/* <Image
        src="/img/hero.png"
        alt="A low-fidelity sketch of early grading layouts"
        width={200}
        height={200}
        className="w-full mx-auto rounded-lg md:w-auto"
      /> */}
    </div>
  );
}
