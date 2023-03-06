import React from "react";
// import "../../App.css";
import Link from "next/link"; // Import the Link component

function Header(props) {
  return (
    <header className="sticky top-0 z-10 flex items-center w-full px-6 py-3 bg-brand-primary text-primary">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center flex-grow-0 gap-3 text-brand-tertiary"
        >
          <svg
            className="flex-shrink-0 w-8 h-8 fill-brand-tertiary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 180"
          >
            <path
              className="cls-1"
              d="M140 160h10l-20 20H50l20-20h20v-10h20v10zM30 100h50V80H40L30 70l10-10h130l20-20h-80V20h20l20-20H70L50 20h40v20H30L10 60 0 70l10 10zm160 0l-20-20h-50v20h40l10 10-10 10h-50V70H90v50H30l-20 20h160l20-20 10-10z"
              data-name="Layer 1"
            />
          </svg>
          <div className="hidden text-lg font-bold tracking-wider sm:block">
            IAN STEELE
            {/* <span className="relative ml-1 text-sm tracking-tight border-b-2 text-brand-secondary -top-1 ">
              co
            </span> */}
          </div>
        </Link>
        <nav className="flex items-center space-x-3 text-xs font-bold tracking-widest md:space-x-4 ">
          <a
            className="relative px-1 py-3 uppercase transition-all transform text-brand-secondary hover:text-brand-tertiary group active:scale-90"
            href="https://www.notion.so/Ian-Steele-ca6f009ed2204389be0a2d3a0ee99788"
          >
            Resume
            <span className="absolute rounded-full left-0 w-0 h-1 transition-all duration-500 ease-in-out bg-brand-secondary -bottom-0.5 group-hover:w-full"></span>
          </a>
          <a
            className="relative px-1 py-3 ml-2 uppercase transition-all transform text-brand-secondary hover:text-brand-tertiary group active:scale-90"
            href="mailto:steeledesignco@gmail.com?subject=Reaching out from
            Steele Design Co"
            target="_blank"
          >
            Contact
            <span className="absolute rounded-full left-0 w-0 h-1 transition-all duration-500 ease-in-out bg-brand-secondary -bottom-0.5 group-hover:w-full"></span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
