import React from "react";
import {
  ProjectWrapper,
  ProjectHeading,
  SectionHeading,
} from "../../components/ComponentIndex";

function VirtualFest(props) {
  return (
    <ProjectWrapper>
      <ProjectHeading
        client="Untappd for Business"
        title="Virtual Fest website & illustration"
        roles={["Illustration", "Website design"]}
      />
      <div className="mt-10 -mx-6 sm:mx-0">
        <img
          className="w-full h-auto"
          src={process.env.PUBLIC_URL + "/img/ut/v-fest/hero.jpg"}
          alt="Redesigned reports page"
        />
      </div>
      <div className="mt-10 max-w-prose">
        <SectionHeading>The Challenge</SectionHeading>
        <p className="mt-4 ">
          {" "}
          During the middle of the COVID-19 pandemic, Untappd cancelled the 2nd
          Annual Beer Festival. Given that the service industry had been hit so
          hard, Untappd pivoted to host our first Virtual Beer Festival in order
          to raise money for the
          <a
            className="button--text"
            href="https://www.restaurantstrong.org/index.html"
          >
            Restaurant Strong Fund
          </a>
          .
        </p>
        <p className="mt-4 ">
          {" "}
          Myself and my fellow designer were tasked with creating a marketing
          site for the virtual festival. Due to our tight deadline, I focused on
          the graphics of the page, while Rob tackled the typography and
          development. Together we explored the organization of page content.
        </p>
      </div>
      <div className="flex flex-col mt-10 sm:flex-row">
        <img
          className="w-full h-auto sm:w-1/3"
          src={process.env.PUBLIC_URL + "/img/ut/v-fest/purchase.jpg"}
          alt="Redesigned reports page"
        />
        <img
          className="w-full h-auto sm:w-1/3"
          src={process.env.PUBLIC_URL + "/img/ut/v-fest/receive.jpg"}
          alt="Redesigned reports page"
        />
        <img
          className="w-full h-auto sm:w-1/3"
          src={process.env.PUBLIC_URL + "/img/ut/v-fest/enjoy.jpg"}
          alt="Redesigned reports page"
        />
      </div>
      <div className="mt-10 section">
        <div className="max-w-prose">
          <SectionHeading>The Outcome</SectionHeading>
          <p className="mt-4 ">
            The Untappd Virtual fest was conceptualized, negotiated, put on
            sale, developed, curated, rehearsed, and executed in 50 days. It
            took a ton of effort and communication across teams, but together we
            were able to accomplish the following:
          </p>
        </div>
        <div className="flex mt-10">
          <div className="flex flex-col items-center flex-grow ">
            <h2>$12,000+</h2>
            <p className="text-gray">Donated to RSF</p>
          </div>
          <div className="flex flex-col items-center justify-center flex-grow">
            <h2>2,050</h2>
            <p className="text-gray">Tickets sold</p>
          </div>
          <div className="flex flex-col items-center justify-center flex-grow">
            <h2>15,000+</h2>
            <p className="text-gray">Chat messages</p>
          </div>
        </div>
        <img
          className="mt-20"
          src={process.env.PUBLIC_URL + "/img/ut/v-fest/fullpage.png"}
          alt="Redesigned reports page"
        />
      </div>
    </ProjectWrapper>
  );
}

export default VirtualFest;
