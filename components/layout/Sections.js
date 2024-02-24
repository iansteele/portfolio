import React from "react";

/* Wraps and centers a section of text with appropriate reading width */

function SectionWrapper(props) {
  return (
    <section className="mx-auto mt-8 max-w-prose">{props.children}</section>
  );
}

function SectionHeading(props) {
  return <h2 className="inline-flex max-w-prose">{props.children}</h2>;
}

function KeyMetrics(props) {
  const { metrics = [] } = props;

  console.log("Metrics:", metrics);

  return (
    <SectionWrapper>
      <SectionHeading>Key metrics</SectionHeading>
      <ul className="grid w-full gap-2 pl-0 list-none md:grid-cols-3">
        {metrics.map((metric, index) => (
          <li key={index} className="flex flex-col m-0">
            <span className="opacity-50 text-brand-tertiary">
              {metric.label}
            </span>
            <span className="text-5xl font-bold leading-none">
              {metric.metric}
            </span>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}

export { SectionWrapper, SectionHeading, KeyMetrics };
