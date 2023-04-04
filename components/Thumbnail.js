import React from "react"; // Import the Component component from React
import Link from "next/link"; // Import the Link component

function Thumbnail(props) {
  return (
    <li>
      <Link
        className="relative flex flex-col w-full h-auto overflow-hidden duration-500 aspect-auto rounded-xl focus-base hover:drop-shadow-xl"
        href={props.link}
      >
        <div className="w-full h-full overflow-hidden group rounded-xl">
          <img
            className="transition-transform transform-gpu group-hover:scale-105 group-focus-visible:scale-101"
            src={"../" + props.image}
            alt={props.altLabel}
          />
        </div>
        <p className="px-2 py-4 text-lg font-semibold text-brand-tertiary rounded-br-xl opacity-60 rounded-bl-xl bg-brand-primary">
          {props.title}
        </p>
        <div className="">{props.category}</div>
      </Link>
    </li>
  );
}

export default Thumbnail;
