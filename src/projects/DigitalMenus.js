import React from 'react';

function DigitalMenus(props) {
  return (
    <div className="max-w-screen-lg px-6 pb-24 mx-auto mt-16 text-white">
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
      {/* <source media="(max-width: 799px)" srcset={process.env.PUBLIC_URL + "img/firetv/display-menu-2.jpg"}/> */}
    </div>
      /*
          <h3>Goals</h3>
          <ul>
            <li><p>- No longer require Untappd to manage Chromebit/keyboard inventory</p></li>
            <li><p>- Decrease barrier to entry for Digital Menus</p></li>
            <li><p>- Limit technical support from our small team</p></li>
            <li><p>- Reduce setup time for customers</p></li>
            <li><p>- Maintain existing functionality for chromebit devices</p></li>
          </ul>
        </div>
        </div>
        <div class="section">
          <h3>Customer Pain Points</h3>
          <p>Customers were required to purchase our Digital Board Kits at $129/screen
            and follow a complicated setup process. Due to the way chromebits rendered
            on TVs, this setup often had an array of issues such as off-centered images,
            overscan, or pixelated images.
          </p>
          <div class="project-stats">
            <div class="stats-item">
              <h2>$129</h2>
              <p>Per Board</p>
            </div>
            <div class="stats-item">
              <h2>30+ min</h2>
              <p>Setup time</p>
            </div>
            <div class="stats-item">
              <h2>1 keyboard</h2>
              <p>required per board</p>
            </div>
          </div>
        </div>
        <picture>
          <source media="(max-width: 799px)" srcset={process.env.PUBLIC_URL + "img/firetv/display-menu-2.jpg">
          <source media="(min-width: 800px)" srcset={process.env.PUBLIC_URL + "img/firetv/display-menu-1.jpg">
          <img src={process.env.PUBLIC_URL + "img/firetv/display-menu-1.jpg" alt="Fire TV User Flow screens">
        </picture>
        <img src={process.env.PUBLIC_URL + "img/firetv/announcement-header.jpg alt="Redesigned reports page">
        <div class="section">
          <h3>The Outcome</h3>
          <p>By moving to FireTV devices, our team was able to drastically reduce the amount
            of support articles related to device setup from our previous chromebit solution.
            Keeping almost all functionality within the Untappd for Business platform, we
            were able to continue to support our chromebit customers all while limiting
            upkeep from our engineering team.
          </p>
          <p>While the benefits for Untappd were exciting to see, our customers received
            the largest gains. In addition to the ability to purchase a FireTV device at
            any big-box store, our customers now have:
          </p>
          <div class="project-stats">
            <div class="stats-item">
              <h2>75%</h2>
              <p>Cost Savings</p>
            </div>
            <div class="stats-item">
              <h2>50%</h2>
              <p>Faster Setup</p>
            </div>
            <div class="stats-item">
              <h2>Multi-Device</h2>
              <p>control with FireTV app</p>
            </div>
          </div>
        </div>
    </div> }*/

    // Stop Original

    // <div className="max-w-screen-lg px-6 mx-auto mt-16 text-white">
    //   <h2 className="text-5xl text-white font-display">Grading Assignments</h2>
    //   <p className="mt-2 font-bold text-brand-secondary">LearnZillion</p>
    //   <ul className="flex mt-2 space-x-4 text-xs text-gray">
    //     <li>UX/UI</li>
    //     <li></li>
    //   </ul>
    //   <img className="mt-10" src={process.env.PUBLIC_URL + "/img/manualgrading-bg.jpg"} alt="Redesigned reports page"/>
    //   <div className="mt-10 max-w-prose">
    //     <h3 className="text-3xl text-brand-secondary font-display">The Challenge</h3>
    //     <p className="mt-4 leading-relaxed"> When I began working at LearnZillion, our assessments allowed for single-part questions.
    //     </p>
    //     <p className="mt-8 leading-relaxed">
    //       After integrating a feature-rich assessment authoring platform, LearnZillion broke free from only being able to have one item per question. Instead, a single question could now have multiple parts which could be any combination of auto-graded and/or manually graded.</p>
    //     <p className="mt-8 leading-relaxed">We needed a way to quickly let see teachers how their classes are doing, while allowing them to easily see which questions required their attention.</p>
    //   </div>
    //   <div className="mt-16">
    //     <img src={process.env.PUBLIC_URL + "/img/grading-original.png"} alt="Redesigned reports page"/>
    //     <span className="mt-8 text-xs text-gray">Original Design</span>
    //   </div>
    //   <div className="mt-10 max-w-prose">
    //     <h3 className="text-3xl text-brand-secondary font-display">User insights</h3>
    //       <p className="mt-8"> On average, teachers spent 12 hours each week on non-compensated school-related activities such as grading papers, bus duty, and club advising. <span className="text--credit">- National Education Association</span></p>
    //       <p className="mt-4">We needed a way to quickly let see teachers how their classes are doing, while allowing them to easily see which questions required their attention.</p>
    //   </div>
    //   <div className="mt-10 max-w-prose">
    //     <h3 className="text-3xl text-brand-secondary font-display">Concerns</h3>
    //     <div className="mt-4">
    //       <p className="mt-8">Reports listed all classes together. This made it difficult
    //         for teachers to distinguish how their individual classrooms were
    //         performing, and prevented teachers from knowing which class each student belonged to.
    //       </p>
    //       <p className="mt-4">Assignment questions can now be multi-part. How do we display
    //         completion, scoring, and need for manual grading?
    //       </p>
    //     </div>
    //   </div>
    //   <div className="mt-10 max-w-prose">
    //     <h3 className="text-3xl text-brand-secondary font-display">Ideation</h3>
    //     <p className="mt-8">I began sketching ways to funnel teachers to the reports page when an assignment required their attention. Concepts included the use of notifications, visual cues in the site nav, or allowing for the creation of due-dates when assigning. However, a restriction of our third party integration limited us to only being able to pull 50 student reports at a time. Once there, a system of colors and shapes provided a quick reference to student performance instead of misleading scores. Allowing teachers to toggle grading by question instead of by student saved teachers time, allowing them to focus additional learning where necessary</p>
    //   </div>
    //   <div className="flex flex-wrap mt-10">
    //     <img src={process.env.PUBLIC_URL + "/img/gradingflow-sketch.png"} alt="Redesigned reports page"/>
    //     <img src={process.env.PUBLIC_URL + "/img/gradingmodal-sketch.png"} alt="Redesigned reports page"/>
    //     <img src={process.env.PUBLIC_URL + "/img/gradingicon-sketch.png"} alt="Redesigned reports page"/>
    //   </div>
    //   <div className="mt-10 max-w-prose">
    //     <h3 className="text-3xl text-brand-secondary font-display">The Outcome</h3>
    //     <p className="mt-8">The final functionality of this feature included the ability to switch between grading by student, or by question. The ability to switch to grading by question allowed for teachers to quickly grade all items that required their attention. Giving them more time to prepare for subsequent lessons, or to help those students not at expectation. Following up with users after release we learned that teachers had no difficulty discerning which items required their manual review.</p>
    //   </div>
    //   <div className="mt-10">
    //     <img className="w-full" src={process.env.PUBLIC_URL + "/img/grading_table-row.png"} alt="Redesigned reports page"/>
    //     <img className="w-full" src={process.env.PUBLIC_URL + "/img/grading-modal.png"} alt="Redesigned reports page"/>
    //   </div>
    // </div>
  )
}

export default DigitalMenus;
