import React from "react";
import { ContentWrapper, ProjectHeading } from "../components/Index";

function DigitalMenus(props) {
  return (
    <ContentWrapper>
      <ProjectHeading
        client="Untappd for Business"
        title="Digital Menu Boards"
        roles={["UX", "UI"]}
      />
      <img
        className="mt-20"
        src={process.env.PUBLIC_URL + "/img/firetv/fireTV-collage.jpg"}
        alt="Untappd Digital Board display board entry screen"
      />
      <div className="mt-20 max-w-prose">
        <h3 className="text-3xl font-bold text-brand-secondary font-display">
          The Challenge
        </h3>
        <p className="mt-8 leading-relaxed ">
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
        <h3 className="text-3xl font-bold text-brand-secondary font-display">
          Goals
        </h3>
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
        <h3 className="text-3xl font-bold text-brand-secondary font-display">
          Customer Pain Points
        </h3>
        <p className="mt-8 leading-relaxed ">
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
