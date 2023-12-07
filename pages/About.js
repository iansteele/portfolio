import React from "react";
import Image from "next/image";
import { PageWrapper } from "../components/ComponentIndex";

function App() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center px-6 py-8 md:items-start ">
        <Image
          src="/img/hero.png"
          alt="A low-fidelity sketch of early grading layouts"
          width={200}
          height={200}
          className="w-full mx-auto rounded-lg md:w-auto"
        />
        <div className="flex flex-col max-w-prose">
          <h1 className="mx-auto mt-10 md:mx-0"> About Me</h1>

          <p className="mt-10">Hey there, friend 👋 </p>
          <p>
            I am a principal product designer based in Illinois. Currently, I am
            on the <span className="font-bold">Classroom</span> team at{" "}
            <span className="font-bold whitespace-nowrap ">
              Imagine Learning
            </span>
            . We are focused on providing classrooms across the country with a
            high quality curriculum platform that helps teachers and students
            facilitate learning through planning, teaching, assigning, grading
            and more. I have a sweet-tooth for vector illustration and 3D
            renders.
          </p>

          <h2 className="mt-10">Working together</h2>
          <p>
            <span className="font-bold">Teamwork makes the dream work.</span> I
            value teams without egos. Who play to their strengths, work to
            improve their weaknesses, and spread their knowledge with the rest
            of the team so that we can all grow together.
          </p>

          <h2 className="mt-10">But like... what about NOT work stuff? </h2>
          <p>
            I am a husband, father of 3, lover of the outdoors, huge fan of all
            things spooky, and a 4-stripe white belt in Brazillian Jiu Jitsu. If
            I could only eat 🌮 for the rest of my life, I'd be perfectly ok
            with it. Currently cycling through Knocked Loose, Kendrick, and
            Brand New.
          </p>
          <p className="font-bold">
            I'm a life-long learner who enjoys tinkering, problem-solving, and
            not taking myself too seriously.
          </p>
          <p>Want to know anything else? Feel free to reach out!</p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default App;
