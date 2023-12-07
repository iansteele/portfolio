import Image from "next/image";
import {
  PageWrapper,
  ProjectWrapper,
  ProjectHeading,
  SectionWrapper,
  SectionHeading,
  Project,
  BlurImage,
  ImgFullBleed,
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
          <SectionHeading>The goal</SectionHeading>
          <span className="block mt-4 text-5xl text-brand-tertiary leading-12 lg:text-6xl font-display">
            Connect business with customers
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
          <h3>Timeline</h3>
          <p>Fall 2021</p>
          <h3>My role:</h3>
          <ul className="pl-5 space-y-4 list-disc">
            <li>Competitive research & analysis</li>
            <li>Facilitate user interviews</li>
            <li>Wireframing</li>
            <li>Prototyping & testing</li>
          </ul>
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
        <SectionWrapper>
          <SectionHeading className="text-3xl text-brand-secondary font-display">
            Empathizing with businesses
          </SectionHeading>
          <p>
            UTFB is used by a wide variety of businesses ranging from
            small-medium breweries all the way to enterprise-level franchises.
            For v1 of the trial, our target audience were these small-med
            businesses who were crunched for time / personel resources looking
            for a one-stop location to manage their menus.
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
            <p className="highlight">Inputs 12 {" < "} 1 input</p>
          </div>
        </SectionWrapper>
        <ImgFullBleed>
          <Image
            src={"/img/ut/trial/trial-homepage.jpg"}
            alt="Screenshots of the landing page for free trialers"
            width={1440}
            height={1024}
            priority
          />
        </ImgFullBleed>
        <SectionWrapper>
          <div className="space-y-8">
            <h3>Value without impacting the Untappd community</h3>
            <p>
              To protect Untappd consumer users & the beer data within, we
              needed a way to prevent incorrect data from getting into the
              consumer app.
            </p>
          </div>
        </SectionWrapper>
        <ImgFullBleed>
          <img
            className="flex-shrink-0 w-full h-auto col-span-2 sm:rounded-lg"
            src={"../img/ut/trial/feature-gating.jpg"}
            alt="Redesigned reports page"
          />
        </ImgFullBleed>
        <ImgFullBleed>
          <Image
            className="flex-shrink-0 w-full h-auto col-span-2 dark:hidden "
            src={"/img/ut/trial/userflow-problem.png"}
            alt="Redesigned reports page"
            width={1440}
            height={1024}
          />
          <Image
            className="flex-shrink-0 hidden w-full h-auto col-span-2 dark:block "
            src={"/img/ut/trial/userflow-problem--light.png"}
            alt="Redesigned reports page"
            width={1440}
            height={1024}
          />
        </ImgFullBleed>
        <SectionWrapper>
          <div className="space-y-8">
            <h3>Building value through guided walkthroughs</h3>
            <p>
              A marketing site alone wouldn't cut it. Feedback from new
              customers informed us that users weren't quite sure what to do
              next once they had built their first menu.
            </p>
            <p>
              We sought to set trialers up for success by showcasing value
              quickly and early and a smooth conversion.
            </p>
            <p>
              We wanted anyone at a business trying out UTFB to have access to
              core feature walkthroughs. The free-trial landing page serves as a
              place for trialers to gain an understanding of what features are
              available, what they get with a UTFB subscription, and guided
              walkthroughs of core features.
            </p>
            <p>
              Most importantly, the trial landing page offered easy access to
              the conversion funnel with additional access to the funnel via
              gated features.
            </p>
          </div>
        </SectionWrapper>
        <div className="space-y-8">
          <ImgFullBleed>
            <img
              className="flex-shrink-0 w-full h-auto col-span-2 sm:rounded-lg"
              src={"../img/ut/trial/Freetrial-thumb.jpg"}
              alt="Redesigned reports page"
            />
          </ImgFullBleed>
          <ImgFullBleed>
            <img
              className="flex-shrink-0 w-full h-auto col-span-2 sm:rounded-lg"
              src={"../img/ut/trial/Walkthroughs.jpg"}
              alt="Redesigned reports page"
            />
          </ImgFullBleed>
        </div>
        <SectionWrapper>
          <SectionHeading>The outcome</SectionHeading>
          <p>
            We slowly released the free trial experience into different markets.
            Over the course of the 2021 UTFB{" "}
            <span className="highlight">
              converted 30% of sales from the free trial experience
            </span>
            . We were able to gain an additional 10% of customers from the
            qualified leads who had signed up, but not converted during the
            trial.
          </p>
        </SectionWrapper>
      </ProjectWrapper>
    </PageWrapper>
  );
}

export default UntappdTrial;
