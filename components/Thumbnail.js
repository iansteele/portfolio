import React, { useState } from "react"; // Import the Component component from React
import Link from "next/link"; // Import the Link component
import Image from "next/image";

function Thumbnail(props) {
  const [isLoading, setLoading] = useState(true);
  return (
    <li>
      <Link
        className="relative flex flex-col w-full h-full p-2 space-y-4 transition duration-500 transform border border-opacity-50 shadow-xl hover:border-opacity-90 active:translate-y-1 active:shadow-none hover:shadow-lg border-zinc-600 shadow-zinc-900 bg-gradient-to-b from-brand-muted to-brand-primary aspect-auto rounded-xl focus-base group "
        href={props.link}
      >
        <div className="w-full h-auto overflow-hidden rounded-md will-change-transform">
          <Image
            className="overflow-hidden transition-transform duration-500 transform-gpu group-hover:scale-101 group-focus-visible:scale-101"
            src={props.image}
            alt={props.alt}
            className={`duration-700 ease-in-out group-hover:scale-101
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
