import { NextFetchEvent } from "next/server";
import React, { useState } from "react"; // Import the Component component from React
import Image from "next/image";

export default function BlurImage(props) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
      <Image
        alt={props.alt}
        src={props.src}
        layout="fill"
        objectFit="cover"
        className={`
                duration-700 ease-in-out group-hover:opacity-75
                ${
                  isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                })`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
