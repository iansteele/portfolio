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

          <p className="mt-10">Hey friend 👋. I'm Ian.</p>
          <p>
            I am a principal product designer on the{" "}
            <span class="highlight">Classroom team at Imagine Learning</span>.
            Our team focuses on providing classrooms across the country with a
            high quality curriculum platform that helps facilitate classroom
            learning through planning, teaching, assigning, grading and more.
          </p>
          <p>
            In addition to work, I am a husband and father of 3, lover of the
            outdoors, and a 4-stripe white belt in Brazillian Jiu Jitsu. I'm
            always seeking to learn and face new challenges.
          </p>

          <p>
            Thanks for taking a look at my work. If you have any questions,
            please don't hesitate to reach out!
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default App;
