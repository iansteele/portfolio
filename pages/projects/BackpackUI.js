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
          <span className="block text-4xl leading-tight text-brand-tertiary font-display">
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
            It was designed to mimic the existing production components, and
            provide guidance on best practices for future component nomenclature
            and structure
          </p>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeading>The Problem</SectionHeading>
          <p>
            IL Classroom went through a 2-year gap without designers on the
            team. During this period, many updates had been made to existing web
            components that were not documented.
          </p>
          <p>
            <span className="highlight">
              When designers were tasked with a challenge, they struggled
              knowing what components existed and how those components
              could/should be used.
            </span>
          </p>
          <p>
            To combat this, they were designing from scratch or using the
            inspector to stitch together screenshots to create designs.
            "Frankencomps" as we like to call them. This led to inconsistencies
            when building the product because there were no clear rules
            around... well anything really.
          </p>
          <p>
            I sought to build a Figma library that reduced this knowledge gap
            and empowered designers to understand how a component works and the
            properties that came with it.
          </p>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeading>Planning</SectionHeading>
          <h3>Getting a lay of the land</h3>
          <p>
            To understand the scope of the problem, I first mapped out the
            production components and their Vue properties. From this audit, I
            established a prioritized list of components that would serve as the
            core building blocks for all other features in the product.
          </p>
          <h3>Laying the foundation</h3>
          <p>
            Before diving into building components, I converted our production
            styles into Figma styles (like color, type, and elevation) into
            Backpack UI in a way that kept the most common styles at the top of
            the list.{" "}
          </p>
          <p>
            During this stage, I met with the rest of the design team to refine
            our production styles. I took this opportunity to establish naming
            conventions that made sense to designers, but also provided easy
            access to the tailwind classes that would generate the proper
            styles.
          </p>
          <Image
            src="/img/backpack/tokens-color.jpg"
            alt="A low-fidelity sketch of early grading layouts"
            width={1440}
            height={1024}
            className="mt-10 rounded-lg"
          />
          <Image
            src="/img/backpack/color-tokens.jpg"
            alt="A low-fidelity sketch of early grading layouts"
            width={1440}
            height={1024}
            className="mt-4 rounded-lg"
          />
          <Image
            src="/img/backpack/breakpoints.jpg"
            alt="A low-fidelity sketch of early grading layouts"
            width={1440}
            height={886}
            className="mt-4 rounded-lg"
          />
          <SectionWrapper>
            <SectionHeading>Atoms, molecules, and more</SectionHeading>
            <h3>Starting small</h3>
            <p>
              For the initial release, I created Figma components from our 50
              "Shared" vue components used in production. V1 consisted of the
              bare essentials such as buttons, inputs, checkboxes, radio
              buttons, labels, badges,
            </p>
            <p>
              This early phase allowed for designers to familiarize themselves
              with the component structure and their associated properties. The
              ui-kit consumers stress-tested these core components to identify
              any issues before moving on to more complex components.
            </p>
            <div className="mt-10 space-y-4">
              <Image
                src="/img/backpack/atom-Buttons.jpg"
                alt="A birds-eye view of the button variants in the Figma file"
                width={1440}
                height={480}
                className="rounded-lg"
              />
              <Image
                src="/img/backpack/atom-badges.jpg"
                alt="A low-fidelity sketch of early grading layouts"
                width={1440}
                height={480}
                className="rounded-lg"
              />
            </div>
            <h3 className="mt-16">Code parity</h3>
            <p>
              After fine-tuning the core components, I built out the next set of
              components that were most frequently used in our product and fall
              under the "Molecules" level of components.{" "}
            </p>
            <p>
              I worked closely with the development team to check consistency in
              naming conventions of components and their properties. They also
              tested the components in real-world scenarios to ensure that they
              functioned as expected.
            </p>
            <div className="mt-16 space-y-4">
              <Image
                src="/img/backpack/molecule-card.jpg"
                alt="An example of a card component using slots to provide flexible content"
                width={1440}
                height={480}
                className="rounded-lg"
              />
            </div>
          </SectionWrapper>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeading>The results</SectionHeading>
          <p>
            Backpack UI has been a huge success for the team. Designers now have
            a clear set of guidelines and standards to follow, which has reduced
            design time and improved consistency in design and development. It
            has helped to streamline the design process by clearly showcasing
            what components designers have available to them, increased
            consistency across the product, and drastically improved
            communication and collaboration between the design and development
            teams.
          </p>
          <p>
            The structure and functionality of Backpack UI has received praise
            from the larger Imagine Learning organization, influencing other
            design teams approach to maintaining their own component libraries.
          </p>
        </SectionWrapper>
        <div className="mt-10 space-y-4">
          <Image
            src="/img/backpack/components.jpg"
            alt="A low-fidelity sketch of early grading layouts"
            width={1440}
            height={1024}
            className="mt-10 rounded-lg"
          />
        </div>
      </ProjectWrapper>
    </PageWrapper>
  );
}

export default BackpackUI;
