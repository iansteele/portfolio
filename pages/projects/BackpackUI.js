import React from "react";
import Image from "next/image";
import {
  PageWrapper,
  ProjectWrapper,
  ProjectHeading,
  SectionHeading,
  SectionWrapper,
  Project,
  BlurImage,
} from "../../components/ComponentIndex";

function BackpackUI(props) {
  const project = Project.find((p) => p.title === "Backpack UI");
  return (
    <PageWrapper>
      <ProjectWrapper>
        <ProjectHeading project={project} />
        <div className="-mx-6 sm:mx-0  overflow-hidden sm:rounded-xl aspect-[4/3]">
          <BlurImage
            src={"/img/backpack/thumb.jpg"}
            alt="Screenshot of the new grading UI"
            width={1440}
            height={810}
            priority
            className="rounded-xl"
          />
        </div>
        <SectionWrapper>
          <SectionHeading>The goal</SectionHeading>
          <span className="block mt-4 text-5xl text-brand-tertiary leading-12 lg:text-6xl font-display">
            Reduce inconsistencies between design and development
          </span>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeading>Overview</SectionHeading>
          <p>
            Backpack UI is a Figma component library designed to solve IL
            Classroom's inconsistencies between design and development, which
            arose due to a lack of design guidelines and standards.
          </p>
          <p>
            The goal of Backpack UI is to streamline the design process, reduce
            design time, and provide clarity about how elements should be built.
            It is designed to mimic the production components Vue properties,
            and it allows designers to add content using slots just as an
            engineer would in production.
          </p>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeading>The Problem</SectionHeading>
          <p>
            IL Classroom went through a 2-year gap without designers on the
            team. During this period, many updates had been made to existing web
            components that were not documented. When designers joined the team,
            they found that they were designing from scratch every time, or
            stitching together screenshots for design work. "Frankencomps" as we
            like to call them.
          </p>
          <p className="highlight">
            This led to inconsistencies when building the product because there
            were no clear rules around... well anything really.
          </p>
          <p>
            The team needed a solution to build consistency between design and
            development and reduce design time.
          </p>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeading>The process</SectionHeading>
          <h3>Getting a lay of the land</h3>
          <p>
            To understand the scope of the problem, I first mapped out the
            production components and their Vue properties. From this audit, I
            established prioritized list of components that would serve as the
            core building blocks for all other features in the product. These
            were the things like our core text, color, grid, and shadow styles.
          </p>
          <h3>Laying the foundation</h3>
          <p>
            Before diving into building components, I converted our production
            styles into styles within Backpack UI. During this stage, I met with
            the rest of the design team to refine our production styles. I took
            this opportunity to establish naming conventions that made sense to
            designers, but also provided easy access to the tailwind classes
            that would generate the proper styles.
          </p>

          <Image
            src="/img/backpack/color-tokens.jpg"
            alt="A low-fidelity sketch of early grading layouts"
            width={1440}
            height={1024}
            className="mt-10 rounded-lg"
          />
          <Image
            src="/img/backpack/breakpoints.jpg"
            alt="A low-fidelity sketch of early grading layouts"
            width={1440}
            height={886}
            className="mt-4 rounded-lg"
          />
          <p className="mt-10">
            I then created component properties in Figma that mimicked those
            properties to ensure consistency between design and development.
            They also added slots to allow designers to add content just like an
            engineer would in production.
          </p>
          <div className="mt-10 space-y-4">
            <Image
              src="/img/backpack/templates.jpg"
              alt="A low-fidelity sketch of early grading layouts"
              width={1440}
              height={480}
            />
            <Image
              src="/img/backpack/accordion-spec.jpg"
              alt="A low-fidelity sketch of early grading layouts"
              width={1440}
              height={480}
            />
          </div>
          <p className="mt-10">
            I worked closely with the development team to ensure our Figma
            component properties mapped naming conventions to ensure Backpack
            components were compatible with the production components. They also
            tested the components in real-world scenarios to ensure that they
            functioned as expected.
          </p>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeading>The results</SectionHeading>
          <p>
            The Backpack library has been a huge success for the team. Designers
            now have a clear set of guidelines and standards to follow, which
            has reduced design time and improved consistency in design and
            development. The library has also helped to inform the team about
            why and how to use components in Figma.
          </p>
          <p>
            The Backpack library has also reduced the need for developers to
            create custom components, which has saved development time and
            increased productivity. The library has also improved communication
            between design and development teams, which has led to a better
            understanding of each other's workflows.
          </p>
        </SectionWrapper>
        <div>
          <Image
            src="/img/backpack/components.jpg"
            alt="A low-fidelity sketch of early grading layouts"
            width={1440}
            height={1024}
            className="mt-10 rounded-lg"
          />
        </div>
        <SectionWrapper>
          <SectionHeading>Conclusion</SectionHeading>
          <p>
            Backpack UI has been a huge time-saver for the IL Classroom team. It
            has helped to streamline the design process by clearly showcasing
            what components designers have available to them, increased
            consistency across the product, and drastically improved
            communication and collaboration between the design and development
            teams.
          </p>
          <p>
            The structure and functionality of Backpack UI has been well
            received from the larger Imagine Learning organization, influencing
            other design teams approach to maintaining their own component
            libraries.
          </p>
        </SectionWrapper>
      </ProjectWrapper>
    </PageWrapper>
  );
}

export default BackpackUI;
