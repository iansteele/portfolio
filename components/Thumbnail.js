import React from "react"; // Import the Component component from React
import Link from "next/link"; // Import the Link component
import Image from "next/image";

function Thumbnail(props) {
  return (
    <li>
      <Link
        className="relative flex flex-col w-full h-auto aspect-auto rounded-xl focus-base group "
        href={props.link}
      >
        <div className="w-full h-full overflow-hidden group-hover:drop-shadow-xl will-change-transform rounded-xl">
          <Image
            className="overflow-hidden transition-transform duration-500 transform-gpu group-hover:scale-105 group-focus-visible:scale-101"
            src={props.image}
            alt={props.alt}
            width={800}
            height={600}
          />
        </div>
        <div className="flex flex-col justify-center px-2 py-4">
          <p className="text-lg font-semibold text-brand-tertiary rounded-br-xl rounded-bl-xl bg-brand-primary">
            {props.title}
          </p>
          {props.description ? ( // Conditionally render the second paragraph
            <p className="mt-2 text-sm opacity-60 text-brand-tertiary">
              {props.description}
            </p>
          ) : null}
        </div>
      </Link>
    </li>
  );
}

export default Thumbnail;
