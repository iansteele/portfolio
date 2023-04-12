import Head from "next/head";
import Image from "next/image";
import { PageWrapper, ThemeButton } from "../components/ComponentIndex";
import Projects from "../components/Projects";
import HeroImg from "public/img/hero.png";
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
            content="An Illinois-based digital product designer & Illustrator with 10+ years of experience. Get in touch with me to know more."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <main>
          <div className="relative grid items-start justify-center flex-grow w-full max-w-screen-xl grid-cols-1 gap-8 px-6 py-8 overflow-hidden md:grid-cols-2 lg:grid-cols-2 md:items-center md:py-10 md:rounded-2xl md:justify-start text-brand-tertiary md:flex-row ">
            <div className="relative flex flex-col flex-grow min-w-0 col-span-1 space-y-4 ">
              <h1 className="text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl ">
                Hi, I'm Ian
              </h1>
              <p className="text-2xl text-brand-secondary">
                A product designer, developer & illustrator
              </p>
              <p className="max-w-lg text-lg md:font-regular">
                I am building a digital core curriculum platform for K-12
                schools with the amazing folks at Imagine Learning Classroom
              </p>
            </div>

            <Image
              className="flex-shrink-0 w-3/4 col-span-1 mx-auto drop-shadow-lg aspect-square"
              src={HeroImg}
              alt="Redesigned reports page"
              priority
            />
            <div className="absolute flex items-center p-2 mx-auto -mt-4 transform -translate-x-1/2 bg-opacity-50 rounded-full left-1/2 md:hidden shadow-zinc-900 bottom-2 animate-bounce bg-brand-primary border-brand-primary text-brand-tertiary">
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
          <Projects />
        </main>
      </PageWrapper>
      <ThemeButton />
    </>
  );
}
