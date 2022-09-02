import React from 'react';
import ContentWrapper from '../components/ContentWrapper.js';

function DigitalMenus(props) {
  return (
    <ContentWrapper>
        <h2 className="text-5xl text-white font-display">Digital Menus</h2>
        <p className="mt-2 font-bold text-brand-secondary">Untappd for Business</p>
        <ul className="flex mt-2 space-x-4 text-xs text-gray">
          <li>UX/UI</li>
          <li></li>
        </ul>
        <img className="mt-20" src={process.env.PUBLIC_URL + "/img/firetv/fireTV-collage.jpg"} alt="Untappd Digital Board display board entry screen"/>
        <div className="mt-10 max-w-prose">
          <h3 className="text-3xl text-brand-secondary font-display">The Challenge</h3>
          <p className="mt-4 leading-relaxed "> At Untappd for Business, one of our core offerings is the ability to
              display digital menu boards in your business. These menus used Chromebits
              to feature ads, announcements, patron check-ins, customizable templates,
              and the ability to display single pages or rotate through mutiple pages.
              Untappd maintained an inventory of Chromebit devices and logitech keyboards
              that we sold at cost. When Chromebits were discontinued, this left us with
              a stock of soon to be obsolete devices and at risk of losing one of our
              core value adds.
          </p>
        </div>
        <div className="mt-10 max-w-prose">
          <h3 className="text-3xl text-brand-secondary font-display">Goals</h3>
          <ul className="mt-4">
            <li><p>- No longer require Untappd to manage Chromebit/keyboard inventory</p></li>
            <li><p>- Decrease barrier to entry for Digital Menus</p></li>
            <li><p>- Limit technical support from our small team</p></li>
            <li><p>- Reduce setup time for customers</p></li>
            <li><p>- Maintain existing functionality for chromebit devices</p></li>
          </ul>
        </div>
        <div className="mt-10 max-w-prose">
          <h3 className="text-3xl text-brand-secondary font-display">Customer Pain Points</h3>
          <p className="mt-4 leading-relaxed "> Customers were required to purchase our Digital Board Kits at $129/screen
              and follow a complicated setup process. Due to the way chromebits rendered
              on TVs, this setup often had an array of issues such as off-centered images,
              overscan, or pixelated images.
          </p>
        </div>
    </ContentWrapper>
  );
}

export default DigitalMenus;
