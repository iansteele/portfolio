import { React, useState } from "react";
import { ProjectSwitcher } from "../../components/ComponentIndex";

function ProjectWrapper({ reqAuth, children }) {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = "test";

  const handleLogin = () => {
    console.log("Password entered:", password);
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (reqAuth && !isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center flex-grow w-full h-full max-w-screen-2xl text-brand-tertiary">
        <h2>What's the magic word?</h2>
        <div className="flex flex-col max-w-sm gap-6 mt-16">
          <input
            className="px-4 py-2 text-center rounded-lg focus-base text-7xl text-brand-primary h-11 bg-brand-tertiary"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="px-6 font-bold uppercase transition-colors rounded-lg bg-brand-secondary h-11 text-brand-primary focus-visible:text-brand-tertiary focus-base focus:bg-transparent"
            onClick={handleLogin}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {children}
      <ProjectSwitcher className="mt-10" />
    </div>
  );
}

export default ProjectWrapper;
