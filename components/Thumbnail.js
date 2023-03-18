import React from "react"; // Import the Component component from React
import Link from "next/link"; // Import the Link component

function Thumbnail(props) {
  return (
    <li>
      <Link
        className="relative flex w-full h-auto overflow-hidden transition-transform duration-500 rounded-xl aspect-auto transform-gpu focus-base hover:scale-101 focus-visible:scale-101 group hover:drop-shadow-xl"
        href={props.link}
      >
        <img src={"../" + props.image} alt={props.altLabel} />
        <div className="absolute transition-all opacity-0 group-hover:opacity-100 duration-700 -translate-y-16 -top-0.5 left-4 group-hover:translate-y-0">
          <p className="px-4 py-1 text-sm font-semibold text-brand-tertiary rounded-br-xl rounded-bl-xl bg-brand-primary project-title">
            {props.title}
          </p>
          <div className="">{props.category}</div>
        </div>
      </Link>
    </li>
  );
}

export default Thumbnail;
