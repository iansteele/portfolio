import React from "react"; // Import the Component component from React
import Link from "next/link"; // Import the Link component
import Image from "next/image";

function Thumbnail(props) {
  return (
    <li className="opacity-100">
      <Link className="outline-none group" href={props.link}>
        <div className="relative flex flex-col w-full h-full p-2 transition duration-500 transform bg-white border dark:bg-brand-muted border-neutral-200 group-hover:-translate-y-1 group-hover:shadow-slate-200 group-hover:border-opacity-90 group-active:translate-y-0 dark:border-zinc-800 group-active:shadow-none group-hover:shadow-lg dark:group-hover:shadow-slate-800 dark:group-hover:border-slate-700 aspect-auto rounded-xl focus-base">
          <div className="w-full h-auto overflow-hidden rounded-md will-change-transform">
            <Image
              src={props.image}
              alt={props.alt}
              className={`overflow-hidden pointer-events-none ease-in-out transition-transform duration-500 transform-gpu group-hover:scale-101 group-focus-visible:scale-101`}
              width={800}
              height={600}
            />
          </div>
          <div className="flex flex-col justify-center flex-grow px-2 pt-4 pb-2">
            <span className="text-lg font-semibold leading-8 text-brand-tertiary">
              {props.title}
            </span>
            {props.description ? ( // Conditionally render the second paragraph
              <span className="text-sm leading-6 text-brand-tertiary">
                {props.description}
              </span>
            ) : null}
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Thumbnail;
