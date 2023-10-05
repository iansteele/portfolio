import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full bg-brand-muted ">
      <div className="grid w-full max-w-screen-xl grid-cols-1 gap-4 px-4 mx-auto space-y-0 list-none place-items-stretch auto-rows-max md:grid-cols-2 lg:grid-cols-3 ">
        <div className="grid w-full mt-24 place-self-start">
          <div className="relative flex flex-shrink-0 w-1/2 col-span-1 mx-auto overflow-hidden rounded-full md:w-2/3 aspect-square ring-8 ring-brand-muted min-w-max bg-brand-tertiary dark:bg-brand-primary">
            <Image
              src="/img/ian-splatters-2.png"
              alt="A low-fidelity sketch of early grading layouts"
              fill
            />
          </div>
        </div>

        <div className="flex flex-col flex-grow col-span-1 px-4 pt-10 pb-20 lg:col-span-2 md:pt-24 max-w-prose">
          <h1> About Me</h1>
          <p>
            I am a principal product designer with 10+ years of experience based
            in southern Illinois. I am currently working remotely on the{" "}
            <span className="font-bold">Classroom</span> team at{" "}
            <span className="font-bold">Imagine Learning</span>. We provide
            classrooms across the country with a high quality curriculum
            platform that facilitates learning through planning, teaching,
            assigning, grading and more.
          </p>

          <p className="font-bold ">
            I'm a life-long learner who enjoys understanding the inner-workings,
            learning the hot-keys, problem-solving, and pursuing challenges of
            all types.
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
    </div>
  );
}
