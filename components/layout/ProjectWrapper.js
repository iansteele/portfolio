import React, { useState, useEffect } from "react";
import { ProjectSwitcher, Gatekeeper } from "../../components/ComponentIndex";
import { useRouter } from "next/router";

function ProjectWrapper({ reqAuth, children, projectSlug }) {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Default to false initially
  const correctPassword = "test";
  const router = useRouter();

  // Check localStorage only on the client side
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(storedAuth === "true");
  }, []);

  const handleLogin = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true"); // Persist the state
      router.push(`/projects/${projectSlug}`); // Redirect to the project page
    } else {
      alert("Incorrect password");
    }
  };

  // Conditionally render based on authentication state
  useEffect(() => {
    const isUnlocked =
      localStorage.getItem("unlockedProject") === router.asPath;
    setIsAuthenticated(isUnlocked);
  }, [router.asPath]);

  {
    reqAuth && !isAuthenticated && (
      <Gatekeeper
        onSuccess={() => {
          localStorage.setItem("unlockedProject", router.asPath);
          setIsAuthenticated(true);
        }}
      />
    );
  }

  // Render the authenticated or non-authenticated content
  return (
    <div>
      {children}
      <ProjectSwitcher className="mt-10" />
    </div>
  );
}

export default ProjectWrapper;
