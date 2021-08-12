import React from 'react'; // Import the Component component from React
import '../App.css';

function Button(props) {
  return (
    <a className="px-4 py-2 mt-2 text-sm font-bold rounded align-center bg-brand-secondary text-brand-primary ring-current w-max" href={props.link}>
      {props.label}
    </a>
  );
}
export default Button;
