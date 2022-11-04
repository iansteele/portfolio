import React from "react"; // Import the Component component from React
import { Link } from "react-router-dom"; // Import the Link component
import "../App.css";

function Thumbnail(props) {
  return (
    <Link
      className="relative w-full h-auto overflow-hidden transition-transform duration-500 rounded-xl aspect-auto basis-full md:basis-1/2 lg:basis-1/4 transform-gpu focus:outline-none focus:ring focus:ring-brand-secondary hover:scale-101 hover:ring-offset-2 group"
      to={props.link}
    >
      <img
        src={process.env.PUBLIC_URL + "/" + props.image}
        alt={props.altLabel}
      />
      <div className="absolute transition-transform duration-500 translate-y-10 -bottom-0.5 right-4 group-hover:translate-y-0">
        <div className="px-4 pt-2 pb-1 font-semibold text-white rounded-tr-xl rounded-tl-xl bg-brand-primary project-title">
          {props.title}
        </div>
        <div className="">{props.category}</div>
      </div>
    </Link>
  );
}

export default Thumbnail;
