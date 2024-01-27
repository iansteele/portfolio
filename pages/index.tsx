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
      <style>
        {`
    @keyframes slideInFromBottom {
      0% {
        transform: translateY(25%);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 100%:
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 100%:
      }
    }
  `}
      </style>
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
        <div className="relative flex flex-col lg:flex-row backdrop-filter gap-4 z-0 lg:gap-16 items-start lg:items-center px-6 md:px-16 pt-8 md:pt-16 flex-grow w-full max-w-screen-2xl h-fit min-h-[50vh] text-brand-tertiary">
          <Image
            style={{ animation: "2s ease 0s 1 fadeIn" }}
            className="w-1/2 max-w-[160px] shadow-lg lg:max-w-xl rounded-full lg:rounded-full border-8 lg:border-[16px] border-brand-muted mix-blend-multiply dark:mix-blend-luminosity lg:w-1/4"
            src={"/img/hero-modern.jpg"}
            alt="A teacher presenting a lesson to their classroom in an third-party app with screenshots of the ILClassroom course material."
            width={600}
            height={600}
          />
          <div
            style={{ animation: "1.5s ease 0s 1 slideInFromBottom" }}
            className="relative z-20 flex flex-col justify-center flex-grow w-full min-w-0 overflow-hidden lg:max-w-1/2 max-w-prose"
          >
            <p className="mb-0 font-bold leading-7 opacity-50 md:text-md">
              Hey there,
            </p>
            <h1 className="text-5xl leading-tight tracking-tight lg:text-7xl text-brand-tertiary">
              I'm Ian
            </h1>
            <p className="mt-4 mb-0 font-normal leading-7 md:text-xl">
              I'm a multi-disciplinary designer building upon 12+ years of
              experience crafting B2B software.
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
              <a href="/projects/Illustrations" className="font-semibold ">
                illustration
              </a>
              .
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <p>Check out my work</p>
              <a
                href="#projects"
                className="flex items-center justify-center flex-shrink-0 p-2 mt-4 origin-top bg-opacity-50 rounded-full max-w-max shadow-zinc-900 animate-bounce bg-brand-tertiary border-brand-primary text-brand-primary "
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
        </div>

        <Projects />
        {/* <About /> */}
      </PageWrapper>
      <Analytics />
    </>
  );
}
