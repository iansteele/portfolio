import React from "react";
import Image from "next/image";
import { PageWrapper } from "../components/ComponentIndex";

function App() {
  return (
    <PageWrapper>
      <div className="grid flex-grow w-full py-16 md:py-24 place-items-center">
        <span className="w-3/4 overflow-hidden transition-colors rounded-t-full rounded-b-lg md:w-1/2 lg:w-1/4 bg-brand-muted">
          <Image
            src="/img/404.svg"
            alt="A low-fidelity sketch of early grading layouts"
            width={200}
            height={200}
            className="w-full rounded-b-2xl"
          />
        </span>
        <h2 className="mt-4">Here lies that link you requested</h2>
      </div>
    </PageWrapper>
  );
}

export default App;
