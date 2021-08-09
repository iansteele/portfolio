import React from 'react'; // Import the Component component from React
import './App.css';

function Button(props) {
  return (
    <a className="px-4 py-2 rounded mt-2 align-center bg-brand-secondary text-brand-primary ring-current font-bold w-max" href={props.link}>
      {props.label}
    </a>
  );
}
export default Button;
