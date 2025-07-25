import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full bg-brand-muted ">
      <div className="grid w-full grid-cols-1 gap-10 px-4 mx-auto space-y-0 list-none lg:gap-20 lg:pt-20 max-w-screen-2xl place-items-stretch auto-rows-max md:grid-cols-2 lg:grid-cols-3 ">
        <div className="grid w-full mt-24 place-self-start">
          <div className="relative flex flex-shrink-0 w-full col-span-1 mx-auto aspect-square min-w-max">
            <Image
              className="w-full h-full aspect-square"
              src="/img/hero.png"
              alt="Ian Steele (That's me) trying to look hip and modern"
              fill
              sizes="(max-width: 480px) 100vw"
            />
          </div>
        </div>

        <div className="flex flex-col flex-grow col-span-1 pt-10 pb-20 lg:col-span-2 md:pt-24 max-w-prose">
          <h1> About Me</h1>
          <p>
            I am a principal product designer with 12+ years of experience based
            in Illinois. I am working remotely on the{" "}
            <span className="font-bold">Classroom</span> team at{" "}
            <span className="font-bold whitespace-nowrap ">
              Imagine Learning
            </span>
            . We provide classrooms across the country with a high quality
            curriculum platform that facilitates learning through planning,
            teaching, assigning, grading and more.
          </p>

          <p className="font-bold ">
            I am a life-long learner who enjoys understanding the
            inner-workings, learning the hot-keys, problem-solving, and pursuing
            challenges of all types.
          </p>
          <p>
            Want to know anything else? Feel free to{" "}
            <a href="steeledesignco@gmail.com">reach out</a>!
          </p>
        </div>
      </div>
    </div>
  );
}
