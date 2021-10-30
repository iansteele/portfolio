import React from 'react';

function UntappdTrial(props) {
  return (
    <div className="max-w-screen-lg px-6 mx-auto mt-16 space-y-10 text-white md:px-0 px-6r">
      <div>
        <h2 className="text-4xl text-white font-display">Product-led growth</h2>
        <p className="font-bold text-brand-secondary">Untappd for Business</p>
        <ul className="flex mt-2 space-x-4 text-xs text-gray">
          <li>UX</li>
          <li>Web Design</li>
        </ul>
      </div>
      <h3 className="py-10 text-6xl text-center text-white max-w-prose font-display">Empowering businesses to connect with their customers</h3>
      <div className="py-10 max-w-prose">
          <h3 className="text-4xl text-brand-secondary font-display">The Problem</h3>
          <p className="mt-4 leading-6 ">Untappd for Business is looking to move towards a Product Led Growth (PLG) model. In order to do this, we needed to lower the barrier of entry for potential customers to use our platform and quickly understand the value provided. 
          Currently, users must go through an incredibly painstaking journey to become Untappd for Business customers. 
          This can often times near a month from initial interest to getting into the app to manage their menus.
          </p>
          <p className="mt-4 leading-6 ">From Untappd's perspective, this barrier to entry led to negative customer experiences and high customer aquisition costs.
          </p>
        </div>
  
      <div className="max-w-prose">
        <h3 className="text-3xl text-brand-secondary font-display">The Solution</h3>
        <p className="mt-4 leading-6 "> Simplify the journey to becoming an Untappd for Business customer. Showcase value early and often. Teach potential customers how to be succesful within the product.
        </p>
      </div>
      <iframe class="w-full h-96	" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FEbIf4bM47L1rb1kwcGBVjG%2FSelf-SIgn-Up%3Fpage-id%3D602%253A4716%26node-id%3D683%253A12926%26viewport%3D343%252C48%252C0.02%26scaling%3Dcontain%26starting-point-node-id%3D683%253A12926" allowfullscreen></iframe>
      <div class="bg-brand-tertiary rounded-lg p-2">
        <img className="flex-shrink-0 w-full h-auto" src={process.env.PUBLIC_URL + "/img/ut/trial/self-signup.jpg"} alt="Redesigned reports page"/>
      </div>
      <div className="max-w-prose">
        <h3 className="text-3xl text-brand-secondary font-display">The Challenge</h3>
        <p className="mt-4 leading-6 "> While business owners look to reduce their distance from customers, Untappd for Businesses was furthering the gap with a 
        high barrier of entry. As a business owner looking to manage my venue on the Untappd platform, I would have to go through a sales funnel that averaged ~1 month from start to finish.
        </p>
      </div>
      
      <img  src={process.env.PUBLIC_URL + "/img/ut/v-fest/howitworks.jpg"} alt="Redesigned reports page"/>
      <div className=" section">
        <div className="space-y-4 max-w-prose">
          <h3 className="text-3xl text-brand-secondary font-display">Empathizing with our customers</h3>
          <p className="text-sm leading-6 ">Something here 
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
          <p className="text-sm leading-6 ">I set out to get a lay of the land in our code base to understand the largest problems our team faced. These included but were not limited to:
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

export default UntappdTrial;
