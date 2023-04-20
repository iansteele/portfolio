import React from "react";
import {
  PageWrapper,
  ProjectWrapper,
  ProjectHeading,
  SectionHeading,
  Project,
  BlurImage,
} from "../../components/ComponentIndex";

function UntappdTrial(props) {
  const project = Project.find((p) => p.title === "Untappd for Business Trial");
  return (
    <PageWrapper>
      <ProjectWrapper>
        <ProjectHeading project={project} />
        <div className="-mx-6 sm:mx-0  overflow-hidden sm:rounded-xl aspect-[4/3]">
          <BlurImage
            className="w-full h-auto "
            src={"/img/ut/trial/hero.jpg"}
            alt="Screenshots of the landing page for free trialers"
            width={1440}
            height={810}
            priority
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mx-auto md:gap-8">
          <div className="col-span-2 py-8 mx-auto lg:py-20 max-w-prose lg:text-center">
            <SectionHeading>The goal</SectionHeading>
            <span className="block mt-4 text-5xl text-brand-tertiary leading-12 lg:text-6xl font-display">
              Responsibly connect businesses with their customers
            </span>
          </div>

          <div className="col-span-2 mx-auto">
            <div className="space-y-10 max-w-prose">
              <SectionHeading>The problem</SectionHeading>
              <p>
                Untappd for Business offers a single platform to manage menus
                across print, digital displays, social media, and the Untappd
                consumer app. Business owners looking to access the Untappd
                platform, would trudge through a{" "}
                <span className="font-bold">
                  sales funnel that averaged ~1 month
                </span>{" "}
                from start to finish.
              </p>
              <p>
                {" "}
                Our team was tasked with opening our platform up to customers
                via a product-led growth approach. Myself, VP of Product, and
                our Product Manager led the front on deciding what this meant
                for Untappd for Business.
              </p>
            </div>
          </div>

          <div className="col-span-2 mx-auto space-y-8 max-w-prose">
            <SectionHeading>The Process</SectionHeading>
            <p>
              {" "}
              With the help of a UX researcher our product team + stakeholders
              journeymapped the end-to-end onboarding process from the
              perspective of potential customers and UTFB employees. This
              process helped us understand where the larger pain points that
              coorelated with customer churn.
            </p>
            <img
              className="flex-shrink-0 w-full h-auto"
              src={"../img/ut/trial/journeymap.jpg"}
              alt="Redesigned reports page"
            />
            <p>
              {" "}
              With the help of a UX researcher our product team + stakeholders
              journeymapped the end-to-end onboarding process from the
              perspective of potential customers and UTFB employees. This
              process helped us understand where the larger pain points that
              coorelated with customer churn.
            </p>
          </div>
          <div className="col-span-2 mx-auto">
            <div className="space-y-4 max-w-prose">
              <SectionHeading className="text-3xl text-brand-secondary font-display">
                Business goals
              </SectionHeading>
              <ul className="pl-4 space-y-2 list-disc">
                <li>
                  Allow customers to experience the product without impacting
                  the experience of existing customers
                </li>
                <li>
                  Educate trial customers on the most imoortant features of the
                  Untappd for Business platform
                </li>
                <li>Allow trialers to convert at any point during the trial</li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 mx-auto">
            <div className="space-y-4 max-w-prose">
              <SectionHeading className="text-3xl text-brand-secondary font-display">
                Empathizing with our customers
              </SectionHeading>
              <ul className="pl-4 space-y-2 list-disc">
                <li>
                  Customers who went through the sales funnel were instructed
                  how to{" "}
                </li>
                <li>
                  Engineers & designers needed a way to easily communicate
                  existing components
                </li>
                <li>
                  Without any designers for 2 years our lzui documentation had
                  become stale making it difficult for designers and engineers
                  alike to know which components were available.
                </li>
                <li>
                  Each designer had different preferences in how they worked
                  with engineers and how they documented their work.
                </li>
                <li>
                  Our team was in the process of implementing tailwind to combat
                  a tangled web of improperly used classes.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center col-span-2 gap-6 mx-auto max-w-prose">
            <SectionHeading className="text-3xl text-brand-secondary font-display">
              Goals
            </SectionHeading>
            <p>
              I set out to get a lay of the land in our code base to understand
              the largest problems our team faced. These included but were not
              limited to:
            </p>
            <ul className="pl-4 space-y-2 list-disc">
              <li>
                Engineers and Product designers were unsure where the most
                recent design lived
              </li>
              <li>
                Engineers & designers needed a way to easily communicate
                existing components
              </li>
              <li>
                Without any designers for 2 years our lzui documentation had
                become stale making it difficult for designers and engineers
                alike to know which components were available.
              </li>
              <li>
                Each designer had different preferences in how they worked with
                engineers and how they documented their work.
              </li>
              <li>
                Our team was in the process of implementing tailwind to combat a
                tangled web of improperly used classes.
              </li>
            </ul>
          </div>
          <hr className="col-span-2 mt-10 text-white rounded-full opacity-10"></hr>
          <div className="flex flex-col items-center col-span-2 gap-6 mx-auto ">
            <div className="max-w-prose">
              <SectionHeading className="text-3xl text-brand-secondary font-display">
                The Solution
              </SectionHeading>
              <p className="mt-4 ">
                Simplify the journey to becoming an Untappd for Business
                customer. Showcase value early and often. Teach potential
                customers how to be succesful within the product.
              </p>
            </div>
            <img
              className="flex-shrink-0 w-full h-auto col-span-2 mt-10"
              src={"../img/ut/trial/trial-homepage.jpg"}
              alt="Redesigned reports page"
            />

            <img
              className="flex-shrink-0 w-full h-auto col-span-2"
              src={"../img/ut/trial/Onboarding.jpg"}
              alt="Redesigned reports page"
            />
            <a
              className="flex px-4 py-2 mt-10 text-sm font-bold text-black transition-colors rounded bg-brand-secondary hover:bg-brand-tertiary max-w-max"
              href="https://www.figma.com/proto/5hlw9Pa6VYR7cSectionHeadingpj4olVu/UTFB_Self-SIgn-Up?node-id=683%3A12926&scaling=scale-down&page-id=602%3A4716&starting-point-node-id=683%3A12926"
            >
              View the prototype
            </a>
          </div>
        </div>
      </ProjectWrapper>
    </PageWrapper>
  );
}

export default Backpack;
