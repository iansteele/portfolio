import React from "react"; // Import the Component component from React
import Link from "next/link"; // Import the Link component
import Image from "next/image";

function Thumbnail(props) {
  return (
    <li>
      <Link className="outline-none group" href={props.link}>
        <div className="relative flex flex-col w-full h-full p-2 space-y-4 transition duration-500 transform border shadow-md group-hover:-translate-y-1 shadow-neutral-300 border-neutral-300 group-hover:border-opacity-90 group-active:translate-y-0 group-active:shadow-none group-hover:shadow-lg dark:border-slate-700 dark:shadow-black bg-gradient-to-b dark:from-slate-700 from-neutral-100 to-neutral-50 dark:to-brand-primary aspect-auto rounded-xl focus-base">
          <div className="w-full h-auto overflow-hidden rounded-md will-change-transform">
            <Image
              src={props.image}
              alt={props.alt}
              className={`overflow-hidden pointer-events-none ease-in-out transition-transform duration-500 transform-gpu group-hover:scale-101 group-focus-visible:scale-101`}
              width={800}
              height={600}
            />
          </div>
          <div className="flex flex-col justify-center px-2 pb-2">
            <span className="text-lg font-semibold leading-8 text-brand-tertiary">
              {props.title}
            </span>
            {props.description ? ( // Conditionally render the second paragraph
              <span className="text-sm leading-6 opacity-60 text-brand-tertiary">
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
