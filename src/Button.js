import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './App.css';

function Button(props) {
  return (
    <a className="px-4 py-2 mt-2 align-center bg-yellow-700 text-white font-bold w-max" href={props.link}>
      {props.label}
    </a>
  );
}
export default Button;
