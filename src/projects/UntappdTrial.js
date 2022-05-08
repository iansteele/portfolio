import React from 'react';

function UntappdTrial(props) {
  return (
    <div className="grid grid-cols-2 gap-4 px-6 mx-auto mt-16 space-y-10 text-white md:gap-10">
      <div class="col-span-2">
        <h2 className="text-white md:text-4xl font-display">Free Trial</h2>
        <p className="font-bold text-brand-secondary">Untappd for Business</p>
        <ul className="flex mt-2 space-x-4 text-xs text-gray">
          <li>UX</li>
          <li>Product Design</li>
        </ul>
      </div>
      <h3 className="col-span-2 py-4 text-4xl text-center text-white lg:py-10 lg:text-6xl max-w-prose font-display ">Empowering businesses to connect with their customers</h3>
    
      <div className="col-span-2 mx-auto mt-8 max-w-prose">
        <h3 className="text-4xl text-brand-secondary font-display">The Problem</h3>
        <h4 className="mt-4 text-2xl leading-8 ">Lower the barrier of entry for potential customers to use the Untappd for Business platform.
        </h4>
        <hr class="mt-10 rounded-full text-brand-secondary"></hr>
        <p className="mt-10 leading-6 "> When I joined Untappd, businesses must go through an incredibly painstaking process involving numerous sales & support calls, and training before they were able to claim their business.
        On average, this process took an <span class="font-bold">entire month</span>  from initial interest to getting into the app to manage their menus.
        </p>
        <p className="mt-4 leading-6 ">This barrier to entry led to <span class="font-bold">high customer aquisition costs and negative customer experiences</span> before ever stepping foot on the Untappd for Business platform.
        </p>
      </div>

      <div className="col-span-2 mx-auto space-y-4 max-w-prose">
        <h3 className="text-4xl text-brand-secondary font-display">The Process</h3>
        <p className="mt-4 leading-6 "> With COVID ravaging the service industry, 
        businesses were short staffed and looking to find ways to keep customers in the know. 
        Untappd for Business offered a one-stop location to manage menus across a variety of 
        platforms. However, as a business owner looking to access the Untappd platform, I would
         have to go through a sales funnel that averaged ~1 month from start to finish. This 
         funnel required a time commitment that many businesses did not have all before ever 
         trying the product out for themselves.
        </p>
        <p> Our team was tasked with opening our platform up to customers via a product-led growth approach. Myself, VP of Product, and our Product Manager led the front on deciding what this meant for Untappd for Business.
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
      <div class="bg-brand-tertiary col-span-2 lg:col-span-1 rounded-lg p-2">
        <img className="flex-shrink-0 w-full h-auto" src={process.env.PUBLIC_URL + "/img/ut/trial/self-signup.jpg"} alt="Redesigned reports page"/>
      </div>
      <div class="col-span-2 flex gap-6 flex-col mx-auto lg:col-span-1">
        <div className="max-w-prose">
          <h3 className="text-4xl text-brand-secondary font-display">The Solution</h3>
          <p><a href="https://utfb.untappd.com/">A new website focusing on business offerings </a></p>
          <p className="mt-4 leading-6 "> Simplify the journey to becoming an Untappd for Business customer. Showcase value early and often. Teach potential customers how to be succesful within the product.
          </p>
        </div>
        <a class="bg-brand-tertiary flex-initial rounded text-black font-bold flex px-2 py-2" href="https://www.figma.com/proto/5hlw9Pa6VYR7cH3pj4olVu/UTFB_Self-SIgn-Up?node-id=683%3A12926&scaling=scale-down&page-id=602%3A4716&starting-point-node-id=683%3A12926">View the prototype</a>
        {/* Figma prototype
         <iframe class="w-full rounded-lg aspect-video" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F5hlw9Pa6VYR7cH3pj4olVu%2FUTFB_Self-SIgn-Up%3Fpage-id%3D602%253A4716%26node-id%3D683%253A12926%26viewport%3D343%252C48%252C0.04%26scaling%3Dscale-down-width%26starting-point-node-id%3D683%253A12926" allowfullscreen></iframe> */}
      </div>
    </div>
  )
}

export default UntappdTrial;
