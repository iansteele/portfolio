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
            content="An Illinois-based digital product designer & Illustrator with 11+ years of experience. Get in touch with me to know more."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className="relative flex flex-col lg:flex-row-reverse justify-between backdrop-filter  gap-10 lg:gap-20 items-start lg:items-center px-6 md:px-8 pt-8 md:pt-16 pb-8 flex-grow w-full max-w-screen-2xl h-fit min-h-[50vh] text-brand-tertiary">
          <Image
            className="w-1/2 max-w-[160px] lg:max-w-xl rounded-full lg:rounded-lg mix-blend-multiply dark:mix-blend-luminosity lg:w-1/3"
            src={"/img/hero-photo.jpg"}
            alt="A teacher presenting a lesson to their classroom in an third-party app with screenshots of the ILClassroom course material."
            width={600}
            height={600}
          />
          {/* <div className="relative flex items-end self-stretch flex-shrink-0 w-full min-w-0 transition-colors h-96 md:absolute lg:pr-20 md:right-4 top-16 bottom-8 md:w-2/3 ">
            <span className="absolute border-brand-secondary rounded-l-3xl overflow-hidden border-r-[16px] flex items-end self-stretch flex-shrink-0 w-full min-w-0 transition-colors lg:pr-20 md:right-4 top-8 bottom-8 z-0 bg-brand-muted md:w-2/3 ">
              <span className="absolute inset-0 bg-cover mix-blend-luminosity bg-texture"></span>
            </span>
            <Image
              className="absolute bottom-0 z-10 w-auto mb-8 ml-auto -mt-16 right-8 lg:right-20 aspect-square"
              src={"/img/hero-photo-color.png"}
              alt="A teacher presenting a lesson to their classroom in an third-party app with screenshots of the ILClassroom course material."
              width={600}
              height={600}
            />
          </div> */}
          <div className="relative z-20 flex flex-col justify-center flex-grow w-full min-w-0 overflow-hidden lg:max-w-1/2 max-w-prose">
            <h1 className="text-5xl tracking-tight lg:text-7xl text-brand-tertiary">
              Hi, I'm Ian
            </h1>
            <p className="mt-4 mb-0 font-normal leading-7 md:text-2xl">
              I'm a multi-disciplinary product designer building upon 11+ years
              of experience crafting B2B software.
            </p>
            <p className="mt-4 md:text-2xl text-brand-tertiary-muted max-w-prose">
              I geek out about{" "}
              <span className="font-semibold ">design systems</span>,{" "}
              <span className="font-semibold whitespace-nowrap ">
                front-end development
              </span>{" "}
              and <span className="font-semibold ">illustration</span>.
            </p>
            <div className="flex gap-2 mt-4">
              <p>Check it out</p>
              <div className="flex items-center justify-center flex-shrink-0 p-2 mt-4 origin-top bg-opacity-50 rounded-full max-w-max shadow-zinc-900 animate-bounce bg-brand-muted border-brand-primary text-brand-tertiary ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <Projects />
        <About />
      </PageWrapper>
      <Analytics />
    </>
  );
}
