import React, { useState } from "react";
import Image from "next/image";
import { Gatekeeper } from "../components/ComponentIndex";
import { useRouter } from "next/router";

function Thumbnail(props) {
  const router = useRouter();
  const isLocked = props.reqAuth ?? false;
  const [showPrompt, setShowPrompt] = useState(false);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent navigation

    if (isLocked) {
      setShowPrompt(true);
    } else {
      router.push(props.link);
    }
  };

  const handleUnlock = () => {
    localStorage.setItem("unlockedProject", props.link);
    setShowPrompt(false);
    router.push(props.link);
  };

  return (
    <>
      {showPrompt && (
        <Gatekeeper
          onSuccess={handleUnlock}
          onCancel={() => setShowPrompt(false)}
        />
      )}
      <li className="flex opacity-100">
        <a
          className="relative flex-grow outline-none group card"
          href={props.link}
          onClick={handleClick}
        >
          <div className="absolute overflow-hidden opacity-0 group-hover:opacity-100 flex flex-col w-full h-full p-2 transition-all duration-500 bg-white dark:border transform-gpu dark:bg-brand-muted border-neutral-200 group-hover:-translate-y-1 group-hover:border-opacity-90 group-active:translate-y-0 group-hover:scale-[102%] group-active:scale-100 dark:border-zinc-800 group-active:shadow-none dark:group-hover:shadow-lime-200/50 aspect-auto rounded-[1.25rem] group-active:opacity-0 focus-base">
            <span className="card-glow"></span>
          </div>
          <div className="absolute inset-0 flex flex-col w-full h-full overflow-hidden transition-all bg-brand-primary aspect-auto rounded-2xl group-active:shadow-none transform-gpu group-hover:-translate-y-1 group-hover:border-opacity-90 group-active:translate-y-0"></div>
          <div className="relative flex flex-col w-full h-full p-2 transition-all duration-500 bg-white border transform-gpu dark:bg-brand-muted border-neutral-200 group-hover:-translate-y-1 group-hover:shadow-slate-200 group-hover:border-opacity-90 group-active:translate-y-0 dark:border-zinc-800 group-active:shadow-none group-hover:shadow-lg dark:group-hover:shadow-lime-400/50 aspect-auto rounded-2xl focus-base">
            <div className="flex w-full h-auto overflow-hidden aspect-[4/3] rounded-xl min-h-max will-change-transform">
              <Image
                src={props.image}
                alt={props.alt}
                className="flex-shrink w-full overflow-hidden transition-transform duration-500 ease-in-out pointer-events-none aspect-auto min-h-max transform-gpu group-hover:scale-101 group-focus-visible:scale-101"
                width="400"
                height="300"
                priority
              />
            </div>
            <div className="flex flex-col justify-center flex-grow px-2 pt-5 pb-3">
              <span className="text-xl font-semibold leading-8 text-brand-tertiary">
                {isLocked && (
                  <span className="mr-2 text-2xl" title="Locked Project">
                    🔒
                  </span>
                )}
                {props.title}
              </span>
              {props.description && (
                <span className="text-base leading-6 opacity-75 text-brand-tertiary">
                  {props.description}
                </span>
              )}
            </div>
          </div>
        </a>
      </li>
    </>
  );
}

export default Thumbnail;
