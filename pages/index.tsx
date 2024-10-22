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
        <div className="relative z-0 grid items-center w-full grid-cols-1 gap-4 pt-10 lg;pt-20 md:grid-cols-3 backdrop-filter lg:gap-16 max-w-screen-2xl h-fit text-brand-tertiary">
          <div
            style={{ animation: "1.5s ease 0s 1 slideInFromBottom" }}
            className="relative z-20 flex flex-col justify-center flex-grow w-full min-w-0 col-span-2 mr-auto overflow-hidden "
          >
            <h1 className="text-4xl text-brand-tertiary lg:text-7xl">
              Minding the gap between design & dev
            </h1>

            <p className="mt-4 mb-0 font-normal leading-7 md:text-xl">
              Hey there, I'm Ian. I'm a multi-disciplinary designer building
              upon 12+ years of experience crafting B2B software.
            </p>
            <p className="mt-4 md:text-xl text-brand-tertiary-muted max-w-prose">
              I geek out about{" "}
              <a
                href="/projects/BackpackUI"
                className="relative py-1 font-semibold group hover:text-brand-tertiary focus-visible:text-brand-tertiary"
              >
                design systems
                <span className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 ease-in-out rounded-full bg-brand-secondary group-hover:w-full"></span>
              </a>
              ,{" "}
              <a
                href="https://www.github.com/iansteele"
                className="relative py-1 font-semibold whitespace-nowrap group hover:text-brand-tertiary focus-visible:text-brand-tertiary"
              >
                <span className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 ease-in-out rounded-full bg-brand-secondary group-hover:w-full"></span>
                front-end development
              </a>{" "}
              and{" "}
              <a
                href="/projects/Illustration"
                className="relative py-1 font-semibold group hover:text-brand-tertiary focus-visible:text-brand-tertiary"
              >
                illustration
                <span className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 ease-in-out rounded-full bg-brand-secondary group-hover:w-full"></span>
              </a>
              .
            </p>
            <a href="#projects" className="flex mt-4 text-brand-tertiary">
              <p>Check out my work</p>
              <span className="flex items-center justify-center flex-shrink-0 p-2 mt-4 origin-top rounded-full max-w-max shadow-zinc-900 animate-bounce text-brand-secondary ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" />
                </svg>
              </span>
            </a>
          </div>
          <div
            className="relative w-full"
            style={{ animation: "2s ease 0s 1 fadeIn" }}
          >
            <span className="absolute w-1/3 h-auto transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-75 animate-pulse aspect-square -z-10 left-1/2 top-1/2 bg-brand-secondary blur-3xl" />
            <Image
              className="z-10 hidden w-full mx-auto dark:block"
              src={"/img/hero3.png"}
              alt="A teacher presenting a lesson to their classroom in an third-party app with screenshots of the ILClassroom course material."
              width={600}
              height={600}
            />
            <Image
              className="z-10 block w-full mx-auto dark:hidden"
              src={"/img/hero4.png"}
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
