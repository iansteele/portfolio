import React from 'react';

function VirtualFest(props) {
  return (
    <div className="max-w-screen-lg px-6 mx-auto mt-16 text-white">
      <h2 className="text-5xl text-white font-display">Virtual Fest</h2>
      <p className="mt-2 font-bold text-brand-secondary">Untappd</p>
      <ul className="flex mt-2 space-x-4 text-xs text-gray">
        <li>Illustration</li>
        <li>Web Design</li>
      </ul>
      <div className="mt-10 max-w-prose">
        <h3 className="text-3xl text-brand-secondary font-display">The Challenge</h3>
        <p className="mt-4 leading-5 "> During the middle of the COVID-19 pandemic, Untappd cancelled the 2nd Annual
          Beer Festival. Given that the service industry had been hit so hard, Untappd
          pivoted to host our first Virtual Beer Festival in order to raise money for
          the
          <a className="button--text" href="https://www.restaurantstrong.org/index.html">Restaurant Strong Fund</a>
          .
        </p>
        <p className="mt-4 leading-5 "> Myself and my fellow designer were tasked with creating a marketing site
          for the virtual festival. Due to our tight deadline, I focused on the graphics
          of the page, while Rob tackled the typography and development. Together we
          explored the organization of page content.
        </p>
      </div>
      <img className="mt-20" src={process.env.PUBLIC_URL + "/img/ut/v-fest/hero.jpg"} alt="Redesigned reports page"/>
      <img  src={process.env.PUBLIC_URL + "/img/ut/v-fest/howitworks.jpg"} alt="Redesigned reports page"/>
      <div className="mt-10 section">
        <div className="max-w-prose">
          <h3 className="text-3xl text-brand-secondary font-display">The Outcome</h3>
          <p className="mt-4 text-sm leading-5 ">The Untappd Virtual fest was conceptualized, negotiated, put on sale,
          developed, curated, rehearsed, and executed in 50 days. It took a ton of
          effort and communication across teams, but together we were able to accomplish
          the following:
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
        <img className="mt-20" src={process.env.PUBLIC_URL + "/img/ut/v-fest/fullpage.png"} alt="Redesigned reports page"/>
      </div>
    </div>
  )
}

export default VirtualFest;
