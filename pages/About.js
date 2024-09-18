import React from "react";
import Image from "next/image";
import { PageWrapper } from "../components/ComponentIndex";

function App() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center flex-shrink-0 w-full max-w-screen-lg gap-10 px-0 mx-auto mt-6 md:items-start">
        <div className="relative flex items-center w-full pb-10 border-b-4 md:pb-20 border-brand-muted">
          <div className="flex flex-col w-2/3 pr-4 max-w-prose">
            <span className="text-lg font-bold uppercase text-brand-secondary">
              About me
            </span>
            <h1 className="w-full mx-auto mt-6 md:mx-0">
              {" "}
              Principal Product Designer. Dad. BJJ blue belt.
            </h1>
          </div>
          <Image
            src="/img/hero-modern.jpg"
            alt="Me and my family at the beach"
            width={400}
            height={400}
            priority
            className="top-0 right-0 flex-shrink-0 w-1/3 h-auto mx-auto mt-10 rounded-full shadow-lg lg:w-1/4 lg:static aspect-square"
          />
        </div>
        <div className="w-full mx-auto max-w-prose">
          <h2>My current role</h2>
          <p className="mx-auto mt-6 rounded-lg shadow-lg">
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
          <h2>Working together</h2>
          <p>
            I believe{" "}
            <span className="font-bold">teamwork makes the dream work</span>. I
            value teams without egos. Who play to their strengths, work to
            improve their weaknesses, and spread their knowledge with others so
            we can all grow together.
          </p>
          <h2>Beyond design</h2>
          <p>
            I am a husband, father of 3, lover of the outdoors and making things
            by hand. I am a huge fan of all things spooky, and a blue belt in
            Brazillian Jiu Jitsu. I think tacos or BBQ are great... but BBQ
            tacos are perfect.
          </p>
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-4 mt-20 md:grid-cols-4 max-w-7xl place-content-stretch justify-self-center ">
        <Image
          src="/img/About/beach.jpeg"
          alt="Me and my family at the beach"
          width={400}
          height={400}
          className="flex-shrink-0 w-full rounded-lg shadow-lg aspect-square"
        />
        <Image
          src="/img/About/bjj.jpeg"
          alt="Receiving my bluebelt in brazilian jiu jitsu"
          width={400}
          height={400}
          className="flex-shrink-0 w-full rounded-lg shadow-lg aspect-square"
        />

        <Image
          src="/img/About/tm.jpeg"
          alt="Me running up the wall at a tough mudder"
          width={400}
          height={400}
          className="flex-shrink-0 w-full rounded-lg shadow-lg aspect-square"
        />
        <Image
          src="/img/About/rollercoaster.jpeg"
          alt="My family in front of the Hulk at Universal Studios Orlando"
          width={400}
          height={400}
          className="flex-shrink-0 w-full rounded-lg shadow-lg aspect-square"
        />
      </div>
    </PageWrapper>
  );
}

export default App;
