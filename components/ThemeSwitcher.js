import React, { useState } from "react"; // Import the Component component from React

function ThemeSwitcher(props) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const toggleDarkMode = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.toggle("light");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "dark");
      document.body.classList.toggle("light");
    }
  };

  return (
    <button
      className="fixed bottom-0 right-0 z-50 p-4 rounded-tl-lg cursor-pointer bg-brand-tertiary drop-shadow-md group"
      onClick={toggleDarkMode}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-5 h-5 transition-colors dark:text-brand-primary text-brand-primary group "
      >
        {theme === "light" ? (
          <path
            className="transition-all group-active:fill-current group-hover:fill-current "
            strokeLinecap="round"
            strokeLinejoin="round"
            fillOpacity=".5"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        ) : (
          <path
            className="transition-all group-active:fill-current group-hover:fill-current "
            strokeLinecap="round"
            strokeLinejoin="round"
            fillOpacity=".5"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        )}
      </svg>
    </button>
  );
}
export default ThemeSwitcher;