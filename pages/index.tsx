import Head from "next/head";
import Image from "next/image";
import { PageWrapper } from "../components/ComponentIndex";
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
          <div className="relative grid items-start justify-center flex-grow w-full max-w-screen-xl grid-cols-1 gap-8 px-6 pb-8 overflow-hidden md:grid-cols-2 lg:grid-cols-3 md:items-center md:py-10 md:rounded-2xl md:justify-start text-brand-tertiary md:flex-row ">
            <div className="relative flex flex-col flex-grow min-w-0 col-span-1 space-y-4 lg:col-span-2 ">
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
              className="flex-shrink-0 w-full col-span-1 mx-auto drop-shadow-lg aspect-square"
              src={HeroImg}
              alt="Redesigned reports page"
              priority
            />
          </div>
          <Projects />
        </main>
      </PageWrapper>
    </>
  );
}
