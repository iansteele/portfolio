import React from "react"; // Import the Component component from React
import Link from "next/link"; // Import the Link component

function Thumbnail(props) {
  return (
    <li>
      <Link
        className="relative flex flex-col w-full h-auto aspect-auto rounded-xl focus-base hover:drop-shadow-xl"
        href={props.link}
      >
        <div className="w-full h-full overflow-hidden group rounded-xl">
          <img
            className="transition-transform duration-500 transform-gpu group-hover:scale-105 group-focus-visible:scale-101"
            src={"../" + props.image}
            alt={props.altLabel}
          />
        </div>
        <div className="px-2 py-4">
          <p className="text-lg font-semibold text-brand-tertiary rounded-br-xl rounded-bl-xl bg-brand-primary">
            {props.title}
          </p>
          <p className="mt-2 text-sm opacity-75 text-brand-tertiary">
            {props.description}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default Thumbnail;
