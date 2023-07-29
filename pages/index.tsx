import Head from "next/head";
import Image from "next/image";
import { PageWrapper, About } from "../components/ComponentIndex";
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
        <div className="relative flex flex-col items-center flex-grow w-full max-w-screen-xl gap-10 px-6 py-10 h-fit min-h-[50vh] md:items-start md:justify-start text-brand-tertiary">
          <div className="relative flex flex-col justify-center flex-grow w-full min-w-0 max-w-prose">
            <h1 className="tracking-tight lg:text-8xl">Hi, I'm Ian</h1>
            <p className="lg:text-2xl text-brand-tertiary-muted max-w-prose">
              I'm product designer passionate about{" "}
              <span className="highlight">design systems</span>,{" "}
              <span className="highlight">front-end development</span> and{" "}
              <span className="highlight">illustration</span>.
            </p>
          </div>

          <div className="absolute self-center bottom-2">
            <div className="flex items-center justify-center flex-shrink-0 p-2 origin-top bg-opacity-50 rounded-full shadow-zinc-900 animate-bounce bg-brand-muted border-brand-primary text-brand-tertiary ">
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
        <Projects />
        <About />
      </PageWrapper>
    </>
  );
}
