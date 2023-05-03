import React from "react";
import {
  PageWrapper,
  ProjectWrapper,
  ProjectHeading,
  SectionWrapper,
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
        <SectionWrapper>
          <SectionHeading>Overview</SectionHeading>
          <span className="block mt-4 text-5xl text-brand-tertiary leading-12 lg:text-6xl font-display">
            Responsibly connect restaurants with customers
          </span>
          <p>
            Untappd for Business (UTFB) offers a single platform to manage menus
            across the Untappd consumer app, print, digital displays, and social
            media.{" "}
            <span className="highlight">
              Business owners looking to access the Untappd platform, had to
              trudge through a sales funnel that averaged ~1 month.
            </span>
          </p>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeading>The opportunity</SectionHeading>
          <p>
            {" "}
            Our team was tasked with opening our platform up to customers via a
            product-led growth approach. Myself, VP of Product, and our Product
            Manager worked closely with stakeholders from the Untappd for
            Business & Untappd consumer applications to protect the reputation
            Untappd had built as a detailed beer database.
          </p>
        </SectionWrapper>
        <SectionWrapper>
          {" "}
          <SectionHeading>The process</SectionHeading>
          <p>
            With the help of a UX researcher our product team + stakeholders
            journeymapped the end-to-end onboarding process from the perspective
            of potential customers and UTFB employees. This process helped us
            understand where the larger pain points that coorelated with
            customer churn.
          </p>
        </SectionWrapper>
        <img
          className="flex-shrink-0 w-full h-auto"
          src={"../img/ut/trial/journeymap.jpg"}
          alt="Redesigned reports page"
        />
        <SectionWrapper>
          <SectionHeading className="text-3xl text-brand-secondary font-display">
            Empathizing with businesses
          </SectionHeading>
          <p>
            UTFB is used by a wide variety of businesses ranging from
            small-medium breweries all the way to enterprise-level franchises.
          </p>
          {/* Describe persona's and how they differed/overlapped. what did we choose to solve for */}
          <div className="space-y-8">
            <h3>Persona overlap</h3>
            <ul className="pl-4 space-y-2 list-disc">
              <li>The primary user is not always the one paying</li>
              <li>Untappd & UTFB users often overlap.</li>
              <li>
                Customers who went through the sales funnel were instructed how
                to use the product, but by the time their account was setup they
                couldn't remember what to do.
              </li>
            </ul>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <SectionHeading className="text-3xl text-brand-secondary font-display">
            Business goals
          </SectionHeading>
          <ul className="pl-4 space-y-2 list-disc">
            <li>
              Highlight high-value features & set customers up for success once
              converted
            </li>
            <li>Provide more consistency between UTFB & Untappd experiences</li>
            <li>
              Allow trialers to experience the product without impacting the
              experience of existing UTFB customers
            </li>
            <li>Allow trialers to convert at any point during the trial</li>
          </ul>
        </SectionWrapper>

        <SectionWrapper>
          <div className="max-w-prose">
            <SectionHeading className="text-3xl text-brand-secondary font-display">
              What we delivered
            </SectionHeading>
          </div>
          <div className="space-y-8">
            <h3>A marketing site facelift</h3>
            <p>
              As the first part of our work, we worked closely with the
              marketing team to A/B test site layouts that simplified the steps
              required to start a trial.
            </p>
            <p className="highlight">
              The new design reduced the fields required to contact sales/start
              a trial from 12 down to 1.
            </p>
          </div>
        </SectionWrapper>
        <div className="aspect-[4/3] overflow-hidden rounded-lg">
          <BlurImage
            src={"/img/ut/trial/trial-homepage.jpg"}
            alt="Screenshots of the landing page for free trialers"
            width={1440}
            height={1024}
            priority
          />
        </div>
        <p className="mx-auto max-w-prose">
          A marketing site alone wouldn't cut it. We needed to set trialers up
          for success by showcasing value quickly and early and a smooth
          conversion.
        </p>
        <img
          className="flex-shrink-0 w-full h-auto col-span-2 rounded-lg"
          src={"../img/ut/trial/userflow-problem.jpg"}
          alt="Redesigned reports page"
        />
        <SectionWrapper>
          <div className="space-y-8">
            <h3>Guided walkthroughs</h3>
            <p>
              This landing paged highlighted crucial steps for success such as
              how to create your first menu and how it serves as the building
              block for other features.
            </p>
          </div>
        </SectionWrapper>

        <div className="aspect-[4/3] overflow-hidden rounded-lg">
          <BlurImage
            src={"/img/ut/trial/Freetrial-thumb.jpg"}
            alt="Screenshots of the landing page for free trialers"
            width={1440}
            height={1024}
            priority
          />
        </div>

        <SectionWrapper>
          <div className="space-y-8">
            <h3>Feature-gating</h3>
            <p>
              To protect Untappd consumer users & the beer data within, we
              needed a way to prevent incorrect data from getting into the
              consumer app.
            </p>
          </div>
        </SectionWrapper>
        <img
          className="flex-shrink-0 w-full h-auto col-span-2 rounded-lg"
          src={"../img/ut/trial/feature-gating.jpg"}
          alt="Redesigned reports page"
        />
      </ProjectWrapper>
    </PageWrapper>
  );
}

export default UntappdTrial;
