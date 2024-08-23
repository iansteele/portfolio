import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import { PageWrapper, About } from "../components/ComponentIndex";
import Projects from "../components/Projects";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <PageWrapper>
        <Head>
          <title>Ian Steele - Digital product designer and Illustrator</title>
          <meta
            name="description"
            content="An Illinois-based digital product designer & Illustrator with 12+ years of experience. Get in touch with me to know more."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className="relative z-0 grid items-center w-full grid-cols-1 gap-4 pt-6 md:grid-cols-2 backdrop-filter lg:gap-16 max-w-screen-2xl h-fit text-brand-tertiary">
          <div
            style={{ animation: "1.5s ease 0s 1 slideInFromBottom" }}
            className="relative z-20 flex flex-col justify-center flex-grow w-full min-w-0 mr-auto overflow-hidden "
          >
            <h1 className="text-4xl leading-tight text-brand-tertiary lg:text-7xl lg:leading-tight">
              Minding the gap between design & dev
            </h1>

            <p className="mt-4 mb-0 font-normal leading-7 md:text-xl">
              Hey there, I'm Ian. I'm a multi-disciplinary designer building
              upon 12+ years of experience crafting B2B software.
            </p>
            <p className="mt-4 md:text-xl text-brand-tertiary-muted max-w-prose">
              I geek out about{" "}
              <a href="/projects/BackpackUI" className="font-semibold ">
                design systems
              </a>
              ,{" "}
              <a
                href="https://www.github.com/iansteele"
                className="font-semibold whitespace-nowrap "
              >
                front-end development
              </a>{" "}
              and{" "}
              <a href="/projects/Illustration" className="font-semibold ">
                illustration
              </a>
              .
            </p>
            <div className="flex gap-2 mt-4">
              <p>Check out my work</p>
              <a
                href="#projects"
                className="flex items-center justify-center flex-shrink-0 p-2 mt-4 origin-top rounded-full max-w-max shadow-zinc-900 animate-bounce text-brand-secondary "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative w-full ">
            <span className="absolute w-1/3 h-auto transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-75 animate-pulse aspect-square -z-10 left-1/2 top-1/2 bg-brand-secondary blur-3xl" />
            <Image
              style={{ animation: "2s ease 0s 1 fadeIn" }}
              className="z-10 w-3/4 mx-auto "
              src={"/img/hero2.png"}
              alt="A teacher presenting a lesson to their classroom in an third-party app with screenshots of the ILClassroom course material."
              width={600}
              height={600}
            />
          </div>
        </div>

        <Projects />
        {/* <About /> */}
      </PageWrapper>
      <Analytics />
    </>
  );
}
