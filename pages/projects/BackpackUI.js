import React from "react";
import {
  PageWrapper,
  ProjectWrapper,
  ProjectHeading,
  SectionHeading,
  Project,
  BlurImage,
} from "../../components/ComponentIndex";

function BackpackUI(props) {
  const project = Project.find((p) => p.title === "Backpack UI");
  return (
    <PageWrapper>
      <ProjectWrapper>
        <ProjectHeading project={project} />
        <div className="-mx-6 sm:mx-0 w-full overflow-hidden sm:rounded-xl aspect-[4/3]">
          <BlurImage
            className="w-full h-auto"
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
              Reduce inconsistencies between design and development
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
            <SectionHeading>Aligning the foundation</SectionHeading>
            <p>
              {" "}
              With the help of a UX researcher our product team + stakeholders
              journeymapped the end-to-end onboarding process from the
              perspective of potential customers and UTFB employees. This
              process helped us understand where the larger pain points that
              coorelated with customer churn.
            </p>
            <p>
              {" "}
              With the help of a UX researcher our product team + stakeholders
              journeymapped the end-to-end onboarding process from the
              perspective of potential customers and UTFB employees. This
              process helped us understand where the larger pain points that
              coorelated with customer churn.
            </p>
          </div>
        </div>
      </ProjectWrapper>
    </PageWrapper>
  );
}

export default BackpackUI;
