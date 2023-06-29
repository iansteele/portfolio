import React from "react";
import Image from "next/image";
import { PageWrapper } from "../components/ComponentIndex";

function App() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center px-6 py-8 md:items-start ">
        <Image
          src="/img/ian-styled.jpg"
          alt="A low-fidelity sketch of early grading layouts"
          width={200}
          height={200}
          className="w-full rounded-lg md:w-auto"
        />
        <div className="flex flex-col max-w-prose">
          <h1 className="mx-auto mt-10 md:mx-0"> About Me</h1>

          <p className="mt-10">Hey there, friend 👋 </p>
          <p>
            I am a principal product designer on the{" "}
            <span className="font-bold">
              Classroom team at Imagine Learning
            </span>
            . Our team focuses on providing classrooms across the country with a
            high quality curriculum platform that helps teachers and students
            facilitate learning through planning, teaching, assigning, grading
            and more. I have a sweet-tooth for vector illustration and 3D
            renders.
          </p>

          <h2 className="mt-10">But like... what about NOT work stuff? </h2>
          <p>
            I am a husband, father of 3, lover of the outdoors, and a 4-stripe
            white belt in Brazillian Jiu Jitsu. I'm a firm believer that Knocked
            Loose, Kendrick, and Brand New will get you through just about
            anything.
          </p>
          <p className="font-bold">
            In a nutshell, I am a lifelong learner having fun along the way.
          </p>
          <p>
            If you have any questions or want to chat, reach out on one of the
            platforms below.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default App;
