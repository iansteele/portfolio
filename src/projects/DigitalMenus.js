import React from "react";
import {
  ContentWrapper,
  ProjectHeading,
  SectionHeading,
} from "../components/Index";

function DigitalMenus(props) {
  return (
    <ContentWrapper>
      <ProjectHeading
        client="Untappd for Business"
        title="Digital Menu Boards"
        roles={["UX", "UI"]}
      />
      <div className="mt-10 -mx-6 sm:mx-0">
        <img
          className="w-full h-auto"
          src={process.env.PUBLIC_URL + "/img/firetv/fireTV-collage.jpg"}
          alt="Untappd Digital Board display board entry screen"
        />
      </div>
      <div className="mt-20 max-w-prose">
        <SectionHeading>The Challenge</SectionHeading>
        <p className="mt-8 ">
          {" "}
          At Untappd for Business, one of our core offerings is the ability to
          display digital menu boards in your business. These menus used
          Chromebits to feature ads, announcements, patron check-ins,
          customizable templates, and the ability to display single pages or
          rotate through mutiple pages. Untappd maintained an inventory of
          Chromebit devices and logitech keyboards that we sold at cost. When
          Chromebits were discontinued, this left us with a stock of soon to be
          obsolete devices and at risk of losing one of our core value adds.
        </p>
      </div>
      <div className="mt-20 max-w-prose">
        <SectionHeading>Goals</SectionHeading>
        <ul className="mt-8">
          <li>
            <p>
              - No longer require Untappd to manage Chromebit/keyboard inventory
            </p>
          </li>
          <li>
            <p>- Decrease barrier to entry for Digital Menus</p>
          </li>
          <li>
            <p>- Limit technical support from our small team</p>
          </li>
          <li>
            <p>- Reduce setup time for customers</p>
          </li>
          <li>
            <p>- Maintain existing functionality for chromebit devices</p>
          </li>
        </ul>
      </div>
      <div className="mt-20 max-w-prose">
        <SectionHeading>Customer Pain Points</SectionHeading>
        <p className="mt-8 ">
          {" "}
          Customers were required to purchase our Digital Board Kits at
          $129/screen and follow a complicated setup process. Due to the way
          chromebits rendered on TVs, this setup often had an array of issues
          such as off-centered images, overscan, or pixelated images.
        </p>
      </div>
    </ContentWrapper>
  );
}

export default DigitalMenus;
