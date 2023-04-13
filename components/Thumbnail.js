import React, { useState } from "react"; // Import the Component component from React
import Link from "next/link"; // Import the Link component
import Image from "next/image";

function Thumbnail(props) {
  const [isLoading, setLoading] = useState(true);
  return (
    <li>
      <Link className="group" href={props.link}>
        <div className="relative flex flex-col w-full h-full p-2 space-y-4 transition duration-500 transform border group-hover:-translate-y-1 shadow-neutral-300 border-neutral-300 group-hover:border-opacity-90 group-active:translate-y-0 group-active:shadow-none group-hover:shadow-lg dark:border-slate-700 dark:shadow-slate-900 bg-gradient-to-b dark:from-slate-700 from-neutral-100 to-neutral-50 dark:to-brand-primary aspect-auto rounded-xl focus-base">
          <div className="w-full h-auto overflow-hidden rounded-md will-change-transform">
            <Image
              src={props.image}
              alt={props.alt}
              className={`overflow-hidden pointer-events-none ease-in-out transition-transform duration-500 transform-gpu group-hover:scale-101 group-focus-visible:scale-101
            ${
              isLoading
                ? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
            })`}
              onLoadingComplete={() => setLoading(false)}
              width={800}
              height={600}
            />
          </div>
          <div className="flex flex-col justify-center px-2 pb-2">
            <p className="text-lg font-semibold text-brand-tertiary">
              {props.title}
            </p>
            {props.description ? ( // Conditionally render the second paragraph
              <p className="text-sm opacity-60 text-brand-tertiary">
                {props.description}
              </p>
            ) : null}
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Thumbnail;
