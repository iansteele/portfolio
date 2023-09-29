import React from "react";
import {
  PageWrapper,
  ProjectWrapper,
  ProjectHeading,
  SectionHeading,
  SectionWrapper,
  Project,
  BlurImage,
} from "../../components/ComponentIndex";

function VirtualFest(props) {
  const project = Project.find((p) => p.title === "Untappd Virtual Fest");
  return (
    <PageWrapper>
      <ProjectWrapper>
        <ProjectHeading project={project} />
        <div className="-mx-6 sm:mx-0  overflow-hidden sm:rounded-xl aspect-[21/9]">
          <BlurImage
            className="w-full h-auto "
            src={"/img/ut/v-fest/hero.jpg"}
            alt="Primary illustration for Virtual Fest event marketing materials"
            width={1440}
            height={810}
            priority
          />
        </div>

        <SectionWrapper>
          <SectionHeading>The Challenge</SectionHeading>
          <p className="mt-4 ">
            {" "}
            During the middle of the COVID-19 pandemic, Untappd cancelled the
            2nd Annual Beer Festival. Given that the service industry had been
            hit so hard, Untappd pivoted to host our first Virtual Beer Festival
            in order to raise money to support restaurant owners and employees
            during Covid via the{" "}
            <a
              className="button--text"
              href="https://www.restaurantstrong.org/index.html"
            >
              Restaurant Strong Fund
            </a>
            .
          </p>
        </SectionWrapper>

        <SectionWrapper>
          <h3>Timeline</h3>
          <p>Back to school 2022</p>
          <h3>My role:</h3>
          <ul className="pl-5 space-y-4 list-disc">
            <li>Illustration design</li>
            <li>Assist lead designer with web layout + illustration use</li>
            <li>Printed cards</li>
          </ul>
        </SectionWrapper>

        <div className="flex flex-col mx-auto mt-10 sm:flex-row">
          <img
            className="w-full h-auto sm:w-1/3"
            src={"../img/ut/v-fest/purchase.jpg"}
            alt="Redesigned reports page"
          />
          <img
            className="w-full h-auto sm:w-1/3"
            src={"../img/ut/v-fest/receive.jpg"}
            alt="Redesigned reports page"
          />
          <img
            className="w-full h-auto sm:w-1/3"
            src={"../img/ut/v-fest/enjoy.jpg"}
            alt="Redesigned reports page"
          />
        </div>
        <SectionWrapper>
          <div className="mx-auto max-w-prose">
            <SectionHeading>The Outcome</SectionHeading>
            <p className="mt-4 ">
              The Untappd Virtual fest was conceptualized, negotiated, put on
              sale, developed, curated, rehearsed, and executed in 50 days. It
              took a ton of effort and communication across teams, but together
              we were able to accomplish the following:
            </p>
          </div>
          <div className="flex flex-col gap-8 mt-10 sm:flex-row">
            <div className="flex flex-col items-center flex-grow ">
              <span class="text-4xl text-brand-secondary">$12,000+</span>
              <p className="text-brand-tertiary">Donated to RSF</p>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow">
              <span class="text-4xl text-brand-secondary">2,050</span>
              <p className="text-brand-tertiary">Tickets sold</p>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow">
              <span class="text-4xl text-brand-secondary">15,000+</span>
              <p className="text-brand-tertiary">Chat messages</p>
            </div>
          </div>
          <img
            className="mt-20"
            src={"../img/ut/v-fest/fullpage.png"}
            alt="Redesigned reports page"
          />
        </SectionWrapper>
      </ProjectWrapper>
    </PageWrapper>
  );
}

export default VirtualFest;
