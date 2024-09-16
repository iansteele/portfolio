import React from "react";
import Image from "next/image";
import { PageWrapper } from "../components/ComponentIndex";

function App() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center flex-shrink-0 gap-20 px-0 mt-6 max-w-7xl md:items-start">
        <div className="flex flex-col max-w-prose">
          <span className="text-lg font-bold uppercase text-brand-secondary">
            About me
          </span>
          <h1 className="w-full mx-auto mt-6 md:mx-0">
            {" "}
            Principal Product Designer. Family-man. BJJ blue belt.
          </h1>
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
          <Image
            src="/img/hero-modern.jpg"
            alt="Me and my family at the beach"
            width={400}
            height={400}
            priority
            className="flex-shrink-0 w-full mt-10 rounded-lg shadow-lg"
          />

          <h2 className="mt-20">Working together</h2>
          <p>
            I believe{" "}
            <span className="font-bold">teamwork makes the dream work</span>. I
            value teams without egos. Who play to their strengths, work to
            improve their weaknesses, and spread their knowledge with others so
            we can all grow together.
          </p>
          <h2 className="mt-20">What about NON-work stuff? </h2>
          <p>
            I am a husband, father of 3, lover of the outdoors, huge fan of all
            things spooky, and a blue belt in Brazillian Jiu Jitsu. If I could
            only eat 🌮 for the rest of my life, I'd be perfectly ok with it.
          </p>
          <p className="flex flex-col mt-20">Want to know anything else?</p>
          <a
            className="relative py-1 font-semibold max-w-max group hover:text-brand-tertiary focus-visible:text-brand-tertiary"
            href="mailto:steeledesignco@gmail.com"
          >
            Reach out!
            <span className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 ease-in-out rounded-full bg-brand-secondary group-hover:w-full"></span>
          </a>
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
