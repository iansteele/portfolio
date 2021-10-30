import React from 'react';

function LzDesignOps(props) {
  return (
    <div className="max-w-screen-lg mx-auto mt-16 text-white px-6r">
      <h2 className="text-5xl text-white font-display">Design Ops</h2>
      <p className="mt-2 font-bold text-brand-secondary">LearnZillion</p>
      <ul className="flex mt-2 space-x-4 text-xs text-gray">
        <li>Design Systems</li>
        <li>Team Processes</li>
      </ul>
      <div className="mt-10 max-w-prose">
        <h3 className="text-3xl text-brand-secondary font-display">The Challenge</h3>
        <p className="mt-4 leading-5 "> Previously, a lack of documented components led to designers or engineers writing/developing new components instead of leveraging existing ones. In order to reduce these inconsistencies, I wanted to better enable engineers and designers to speak the same language when discussing product work.
        </p>
      </div>
      <img className="mt-20" src={process.env.PUBLIC_URL + "/img/ut/v-fest/hero.jpg"} alt="Redesigned reports page"/>
      <img  src={process.env.PUBLIC_URL + "/img/ut/v-fest/howitworks.jpg"} alt="Redesigned reports page"/>
      <div className="mt-10 section">
        <div className="space-y-4 max-w-prose">
          <h3 className="text-3xl text-brand-secondary font-display">Discovery</h3>
          <p className="text-sm leading-5 ">I set out to get a lay of the land in our code base to understand the largest problems our team faced. These included but were not limited to:
          </p>
          <ul className="pl-4 space-y-2 list-disc">
            <li>Engineers and Product designers were unsure where the most recent design lived</li>
            <li>Engineers & designers needed a way to easily communicate existing components</li>
            <li>Without any designers for 2 years our lzui documentation had become stale making it difficult for designers and engineers alike to know which components were available.</li>
            <li>Each designer had different preferences in how they worked with engineers and how they documented their work.</li>
            <li>Our team was in the process of implementing tailwind to combat a tangled web of improperly used classes.</li>
          </ul>
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
      </div>
      <div className="mt-10 section">
        <div className="space-y-4 max-w-prose">
          <h3 className="text-3xl text-brand-secondary font-display">Goals</h3>
          <p className="text-sm leading-5 ">I set out to get a lay of the land in our code base to understand the largest problems our team faced. These included but were not limited to:
          </p>
          <ul className="pl-4 space-y-2 list-disc">
            <li>Engineers and Product designers were unsure where the most recent design lived</li>
            <li>Engineers & designers needed a way to easily communicate existing components</li>
            <li>Without any designers for 2 years our lzui documentation had become stale making it difficult for designers and engineers alike to know which components were available.</li>
            <li>Each designer had different preferences in how they worked with engineers and how they documented their work.</li>
            <li>Our team was in the process of implementing tailwind to combat a tangled web of improperly used classes.</li>
          </ul>
        </div>
      </div>
      <img className="mt-20" src={process.env.PUBLIC_URL + "/img/ut/v-fest/fullpage.png"} alt="Redesigned reports page"/>

    </div>
  )
}

export default LzDesignOps;
