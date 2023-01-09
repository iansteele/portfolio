import React from "react"; // Import the Component component from React
import "../App.css";

function Button(props) {
  return (
    <a
      className="px-4 py-2 mt-2 text-sm font-semibold uppercase transition-all rounded outline-none focus:bg-brand-tertiary focus:ring align-center bg-brand-secondary text-brand-primary ring-brand-secondary w-max hover:shadow-md hover:shadow-brand-secondary/40"
      href={props.link}
    >
      {props.label}
    </a>
  );
}
export default Button;
