import React from "react";
import Image from "next/image";
import { PageWrapper } from "../components/ComponentIndex";

export function Custom404() {
  return (
    <PageWrapper>
      <div className="grid flex-grow w-full px-12 py-16 sm:px-0 md:py-24 place-items-center">
        <span className="w-full max-w-xs overflow-hidden transition-colors rounded-t-full rounded-b-lg sm:w-72 bg-brand-muted">
          <Image
            src="/img/404.svg"
            alt="A low-fidelity sketch of early grading layouts"
            width={200}
            height={200}
            className="w-full rounded-b-2xl"
          />
        </span>
        <h2 className="mt-4 text-center whitespace-nowrap sm:whitespace-normal">
          Here lies the page you requested
        </h2>
      </div>
    </PageWrapper>
  );
}

export default Custom404;
