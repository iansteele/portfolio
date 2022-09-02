import React from 'react';
import ContentWrapper from '../components/ContentWrapper.js';

function UntappdTrial(props) {
  return (
    <ContentWrapper>
    <div className="grid grid-cols-2 gap-4 mx-auto space-y-10 text-white md:gap-10">
      <div class="col-span-2">
        <h2 className="text-4xl text-white font-display">Self Sign Up Experience</h2>
        <p className="mt-4 font-bold text-brand-secondary">Untappd for Business</p>
        <ul className="flex space-x-4 text-xs text-gray">
          <li>UX</li>
          <li>Product Design</li>
        </ul>
      </div>
      <h3 className="col-span-2 py-10 text-5xl leading-tight text-left text-white lg:text-center lg:py-20 lg:text-6xl max-w-prose font-display ">Lowering the barrier of entry for potential customers</h3>
    
      <div className="col-span-2 mx-auto mt-8 space-y-10 max-w-prose">
        <h3 className="text-4xl text-brand-secondary font-display">The problem</h3>
        <p className="leading-relaxed "> With COVID ravaging the service industry, 
        businesses were short staffed and looking to find ways to keep customers in the know. 
        Untappd for Business offered a one-stop location to manage menus across a variety of 
        platforms. However, as a business owner looking to access the Untappd platform, I would
         have to go through a sales funnel that averaged ~1 month from start to finish. This 
         funnel required a time commitment that many businesses did not have all before ever 
         trying the product out for themselves.</p>
         <p> Our team was tasked with opening our platform up to customers via a product-led growth approach. Myself, VP of Product, and our Product Manager led the front on deciding what this meant for Untappd for Business.</p>
        <hr class="mt-10 rounded-full text-brand-secondary"></hr>
        <img className="flex-shrink-0 w-full h-auto" src={process.env.PUBLIC_URL + "/img/ut/trial/emailcadence.png"} alt="Redesigned reports page"/>
        <img className="flex-shrink-0 w-full h-auto rounded-2xl" src={process.env.PUBLIC_URL + "/img/ut/trial/marketing-why utfb.jpg"} alt="Redesigned reports page"/>
      </div>

      <div className="col-span-2 mx-auto mt-8 space-y-10 max-w-prose">
        <h3 className="text-4xl text-brand-secondary font-display">The solution</h3>
         <p> Our team was tasked with opening our platform up to customers via a product-led growth approach. Myself, VP of Product, and our Product Manager led the front on deciding what this meant for Untappd for Business.</p>
        <hr class="mt-10 rounded-full text-brand-secondary"></hr>
        <h4 className="text-2xl text-brand-secondary font-display">A new marketing site</h4>
        <img className="flex-shrink-0 w-full h-auto rounded-2xl" src={process.env.PUBLIC_URL + "/img/ut/trial/marketing-why utfb.jpg"} alt="Redesigned reports page"/>
      </div>


      <img className="flex-shrink-0 w-full h-auto" src={process.env.PUBLIC_URL + "/img/ut/trial/emailcadence.png"} alt="Redesigned reports page"/>

      <div className="col-span-2 mx-auto space-y-4 max-w-prose">
        <h3 className="text-4xl text-brand-secondary font-display">The Process</h3>
        <p className="leading-relaxed "> With the help of a UX researcher our product team + stakeholders journeymapped the end-to-end onboarding process from the perspective of potential customers and UTFB employees. This process helped us understand where the larger pain points that coorelated with customer churn.
        </p>
        <img className="flex-shrink-0 w-full h-auto" src={process.env.PUBLIC_URL + "/img/ut/trial/Current State UTFB Customer Journey.pdf"} alt="Redesigned reports page"/>
        <img src="https://placekitten.com/480/375"/>
        <p className="leading-relaxed "> With the help of a UX researcher our product team + stakeholders journeymapped the end-to-end onboarding process from the perspective of potential customers and UTFB employees. This process helped us understand where the larger pain points that coorelated with customer churn.
        </p>
      </div>
      <div className="col-span-2 mx-auto">
        <div className="space-y-4 max-w-prose">
          <h3 className="text-3xl text-brand-secondary font-display">Business goals</h3>
          <ul className="pl-4 space-y-2 list-disc">
            <li>Allow customers to experience the product without impacting the experience of existing customers</li>
            <li>Educate trial customers on the most imoortant features of the Untappd for Business platform</li>
            <li>Allow trialers to convert at any point during the trial</li>
          </ul>
        </div>
      </div>
      <div className="col-span-2 mx-auto">
        <div className="space-y-4 max-w-prose">
          <h3 className="text-3xl text-brand-secondary font-display">Empathizing with our customers</h3>
          <ul className="pl-4 space-y-2 list-disc">
            <li>Customers who went through the sales funnel were instructed how to </li>
            <li>Engineers & designers needed a way to easily communicate existing components</li>
            <li>Without any designers for 2 years our lzui documentation had become stale making it difficult for designers and engineers alike to know which components were available.</li>
            <li>Each designer had different preferences in how they worked with engineers and how they documented their work.</li>
            <li>Our team was in the process of implementing tailwind to combat a tangled web of improperly used classes.</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col col-span-2 gap-6 mx-auto lg:col-span-1">
        <div className="space-y-4 max-w-prose">
          <h3 className="text-3xl text-brand-secondary font-display">Goals</h3>
          <p className="text-sm leading-relaxed ">I set out to get a lay of the land in our code base to understand the largest problems our team faced. These included but were not limited to:
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
      <div class="bg-brand-tertiary col-span-2 lg:col-span-1 rounded-lg p-2">
        <img className="flex-shrink-0 w-full h-auto" src={process.env.PUBLIC_URL + "/img/ut/trial/self-signup.jpg"} alt="Redesigned reports page"/>
      </div>
      <div class="col-span-2 flex gap-6 flex-col mx-auto lg:col-span-1">
        <div className="max-w-prose">
          <h3 className="text-4xl text-brand-secondary font-display">The Solution</h3>
          <p><a href="https://utfb.untappd.com/">A new website focusing on business offerings </a></p>
          <p className="mt-4 leading-relaxed "> Simplify the journey to becoming an Untappd for Business customer. Showcase value early and often. Teach potential customers how to be succesful within the product.
          </p>
        </div>
        <a class="bg-brand-tertiary flex-initial rounded text-black font-bold flex px-2 py-2" href="https://www.figma.com/proto/5hlw9Pa6VYR7cH3pj4olVu/UTFB_Self-SIgn-Up?node-id=683%3A12926&scaling=scale-down&page-id=602%3A4716&starting-point-node-id=683%3A12926">View the prototype</a>
        {/* Figma prototype
         <iframe class="w-full rounded-lg aspect-video" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F5hlw9Pa6VYR7cH3pj4olVu%2FUTFB_Self-SIgn-Up%3Fpage-id%3D602%253A4716%26node-id%3D683%253A12926%26viewport%3D343%252C48%252C0.04%26scaling%3Dscale-down-width%26starting-point-node-id%3D683%253A12926" allowfullscreen></iframe> */}
      </div>
    </div>
    </ContentWrapper>
  )
}

export default UntappdTrial;
