import React from "react"; // Import the Component component from React
// import { Link } from "react-router-dom"; // Import the Link component

function Thumbnail(props) {
  return (
    <li>
      <Link
        className="relative flex w-full h-auto overflow-hidden transition-transform duration-500 rounded-xl aspect-auto transform-gpu focus:outline-none focus:ring focus:ring-brand-secondary hover:scale-101 hover:ring-offset-2 group hover:drop-shadow-xl"
        to={props.link}
      >
        <img
          src={process.env.PUBLIC_URL + "/" + props.image}
          alt={props.altLabel}
        />
        <div className="absolute transition-all opacity-0 group-hover:opacity-100 duration-700 -translate-y-16 -top-0.5 left-4 group-hover:translate-y-0">
          <div className="px-4 py-1 font-semibold text-brand-tertiary rounded-br-xl rounded-bl-xl bg-brand-primary project-title">
            {props.title}
          </div>
          <div className="">{props.category}</div>
        </div>
      </Link>
    </li>
  );
}

export default Thumbnail;
