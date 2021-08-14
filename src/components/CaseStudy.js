import React from 'react'; // Import the Component component from React
import '../App.css';

function CaseStudy(props) {
  return (
  <div className="px-6 mx-auto mt-16 text-white max-w-prose">
    <h2 className="text-5xl text-white font-display">{props.title}</h2>
    <p className="mt-2 font-bold text-brand-secondary">{props.company}</p>
    <slot>

    </slot>
  </div>
  );
}

export default CaseStudy;
