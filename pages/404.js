import React from "react";
import Image from "next/image";
import { PageWrapper } from "../components/ComponentIndex";

export function Custom404() {
  return (
    <PageWrapper>
      <div className="flex flex-col justify-center flex-grow w-full h-full place-items-center">
        <span className="w-full max-w-xs overflow-hidden transition-colors rounded-t-full rounded-b-2xl sm:w-72 bg-[#001418]">
          <Image
            src="/img/404.svg"
            alt="A low-fidelity sketch of early grading layouts"
            width={200}
            height={200}
            className="w-full"
          />
        </span>
        <h2 className="mt-6 text-center">Here lies the page you requested</h2>
      </div>
    </PageWrapper>
  );
}

export default Custom404;
