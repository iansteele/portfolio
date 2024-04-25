import React from "react";
import Image from "next/image";
import { PageWrapper } from "../components/ComponentIndex";

function App() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center flex-shrink-0 gap-20 px-0 py-8 max-w-7xl md:items-start">
        <div className="flex flex-col px-6 max-w-prose">
          <h1 className="w-full mx-auto mt-16 md:mx-0"> About Me</h1>
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
          <h2 className="mt-20">Working together</h2>
          <p>
            I believe{" "}
            <span className="font-bold">teamwork makes the dream work</span>. I
            value teams without egos. Who play to their strengths, work to
            improve their weaknesses, and spread their knowledge with others so
            we can all grow together.
          </p>
          <h2 className="mt-20">But like... what about NON-work stuff? </h2>
          <p>
            I am a husband, father of 3, lover of the outdoors, huge fan of all
            things spooky, and a blue belt in Brazillian Jiu Jitsu. If I could
            only eat 🌮 for the rest of my life, I'd be perfectly ok with it.
          </p>
          <p className="mt-10">
            Want to know anything else?{" "}
            <a href="mailto:steeledesignco@gmail.com">
              Feel free to reach out!
            </a>
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full gap-4 px-4 pb-4 mt-20 overflow-x-scroll scroll-smooth">
        <div className="flex flex-row gap-4 justify-self-center ">
          <Image
            src="/img/About/beach.jpeg"
            alt="Me and my family at the beach"
            width={400}
            height={400}
            className="flex-shrink-0 w-1/2 rounded-lg shadow-lg lg:w-1/4 aspect-sqaure lg:max-w-xl"
          />
          <Image
            src="/img/About/bjj.jpeg"
            alt="Receiving my bluebelt in brazilian jiu jitsu"
            width={400}
            height={400}
            className="flex-shrink-0 w-1/2 rounded-lg shadow-lg lg:w-1/4 aspect-sqaure lg:max-w-xl"
          />
          <Image
            src="/img/About/draplin.jpeg"
            alt="Ian's family in front of the Hulk at Universal Studios Orlando"
            width={400}
            height={400}
            className="flex-shrink-0 w-1/2 rounded-lg shadow-lg lg:w-1/4 aspect-sqaure lg:max-w-xl"
          />
          <Image
            src="/img/About/soccer.jpeg"
            alt="Me doing my best to wrangle kids as a pre-k soccer coach"
            width={400}
            height={400}
            className="flex-shrink-0 w-1/2 rounded-lg shadow-lg lg:w-1/4 aspect-sqaure lg:max-w-xl"
          />
          <Image
            src="/img/About/rollercoaster.jpeg"
            alt="Ian's family in front of the Hulk at Universal Studios Orlando"
            width={400}
            height={400}
            className="flex-shrink-0 w-1/2 rounded-lg shadow-lg lg:w-1/4 aspect-sqaure lg:max-w-xl"
          />
          <Image
            src="/img/About/tm.jpeg"
            alt="Ian's family in front of the Hulk at Universal Studios Orlando"
            width={400}
            height={400}
            className="flex-shrink-0 w-1/2 rounded-lg shadow-lg lg:w-1/4 aspect-sqaure lg:max-w-xl"
          />
        </div>
      </div>
    </PageWrapper>
  );
}

export default App;
