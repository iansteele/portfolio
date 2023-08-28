import React from "react"; // Import the Component component from React
import Link from "next/link"; // Import the Link component
import Image from "next/image";

function Thumbnail(props) {
  return (
    <li className="opacity-100">
      <Link className="relative outline-none group" href={props.link}>
        <div className="absolute overflow-hidden opacity-0 group-hover:opacity-100 flex flex-col w-full h-full p-2 transition-all duration-500 bg-white border transform-gpu group-hover:rotate-[0.5deg] dark:bg-brand-muted border-neutral-200 group-hover:-translate-y-1 group-hover:shadow-slate-200 group-hover:border-opacity-90 group-active:translate-y-0 group-active:rotate-0 scale-[102%] dark:border-zinc-800 group-active:shadow-none group-hover:shadow-lg dark:group-hover:shadow-emerald-400/50 aspect-auto  rounded-[.875rem] focus-base">
          <span className="duration-1000 animate-[spin_7s_ease_infinite]">
            <svg
              width="739"
              height="798"
              viewBox="0 0 739 798"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform scale-105 opacity-0 opacity-25 duration-800 text-brand-secondary dark:text-secondary blur-3xl dark:group-hover:opacity-100 "
            >
              <rect
                x="40"
                y="40"
                width="659"
                height="718"
                rx="32"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
        <div className="absolute inset-0 flex flex-col w-full h-full overflow-hidden bg-brand-primary aspect-auto rounded-xl transform-gpu group-hover:rotate-[0.5deg]   group-hover:-translate-y-1 group-hover:border-opacity-90 group-active:translate-y-0"></div>
        <div className="relative flex flex-col w-full h-full p-2 transition-all duration-500 bg-white border transform-gpu group-hover:rotate-[0.5deg] dark:bg-brand-muted border-neutral-200 group-hover:-translate-y-1 group-hover:shadow-slate-200 group-hover:border-opacity-90 group-active:translate-y-0 dark:border-zinc-800 group-active:shadow-none group-hover:shadow-lg dark:group-hover:shadow-emerald-400/50  aspect-auto rounded-xl focus-base">
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
