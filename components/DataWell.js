import React from "react";

function DataItem(props) {
  return (
    <div className="flex flex-col items-center flex-grow">
      <span className="text-4xl text-brand-secondary">{props.metric}</span>
      <p className="text-brand-tertiary">{props.description}</p>
    </div>
  );
}

function DataWell() {
  const data = [
    { metric: "Metric 1", description: "Description 1" },
    { metric: "Metric 2", description: "Description 2" },
    // Add more data as needed
  ];

  return (
    <div className="flex flex-col gap-8 mt-10 sm:flex-row">
      {data.map((item, index) => (
        <DataItem key={index} {...item} />
      ))}
    </div>
  );
}

export default DataWell;
