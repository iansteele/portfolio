import React from "react";
import "../../App.css";
import { Link } from "react-router-dom"; // Import the Link component

function ContentWrapper(props) {
  return (
    <main className="w-full max-w-screen-lg px-6 mx-auto space-y-16 text-brand-tertiary">
      {props.children}
    </main>
  );
}

export default ContentWrapper;
