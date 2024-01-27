import React from "react";
import Image from "next/image";
import { PageWrapper } from "../components/ComponentIndex";

function App() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center px-6 py-8 md:items-start ">
        <Image
          src="/img/About/beach.jpeg"
          alt="Me and my family at the beach"
          width={200}
          height={200}
          className="w-full rounded-full md:w-auto"
        />
        <div className="flex flex-col max-w-prose">
          <h1 className="mx-auto mt-10 md:mx-0"> About Me</h1>
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
          <h2 className="mt-20">But like... what about NON-work stuff? </h2>I am
          a husband, father of 3, lover of the outdoors, huge fan of all things
          spooky, and a 4-stripe white belt in Brazillian Jiu Jitsu. If I could
          only eat 🌮 for the rest of my life, I'd be perfectly ok with it.
          <span className="mt-10">Currently listening to</span>
          <ul>
            <li>
              <a href="https://open.spotify.com/artist/4qrHkx5cgWIslciLXUMrYw?si=uIy8PpfORwGy-yyupG6TVA">
                Knocked Loose
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg?si=oenGujseQhGsu83o_La92Q">
                Kendrick
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/artist/1r1uxoy19fzMxunt3ONAkG?si=Ue1T5IHlTzmNc5IX-T1ggQ">
                Phoebe Bridgers
              </a>
            </li>
          </ul>
          <p className="mt-10 font-bold">
            I'm a life-long learner who enjoys tinkering, problem-solving, and
            not taking myself too seriously.
          </p>
          <p className="mt-10">
            Want to know anything else? Feel free to reach out!
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default App;
