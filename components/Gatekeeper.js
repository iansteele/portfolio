import React, { useState } from "react";

export default function Gatekeeper({ onSuccess, onCancel }) {
  const [input, setInput] = useState("");
  const correctPassword = "test"; // Replace or pass via props for dynamic use

  const handleSubmit = () => {
    if (input === correctPassword) {
      onSuccess();
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary">
      <div className="flex flex-col items-center justify-center w-full max-w-sm p-6 rounded-lg shadow-lg bg-brand-primary text-brand-tertiary">
        <h2 className="mb-4 text-xl font-bold">What's the magic word?</h2>
        <input
          className="max-w-xs px-4 py-4 mb-4 text-center rounded-lg text-7xl text-brand-primary h-11 bg-brand-tertiary"
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex gap-8">
          {onCancel && (
            <button
              className="text-sm text-gray-500 hover:underline"
              onClick={onCancel}
            >
              Nevermind
            </button>
          )}
          <button
            className="px-6 font-bold uppercase rounded-lg bg-brand-secondary h-11 text-brand-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
