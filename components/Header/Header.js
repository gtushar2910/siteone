import React from 'react';
import SiteNavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <>
      {/* 🔥 THEMED TOP HEADER */}
      <div
        className="
          bg-[var(--card-bg)]
          border-b border-[var(--card-border)]
          shadow-md
          font-sans
        "
      >
        <div
          className="
            container mx-auto
            flex items-center justify-between
            py-4 px-6
            gap-4
          "
        >
          {/* LEFT LOGO */}
          <a href="/" className="flex-shrink-0">
            <img
              src="/SCETLogo.jpg"
              width={85}
              className="drop-shadow-lg hover:scale-105 transition-all"
              alt="SCET Logo"
            />
          </a>

          {/* CENTER TEXT */}
          <div className="text-center flex flex-col items-center">
            <p
              className="
                text-xl md:text-3xl
                font-extrabold uppercase
                tracking-wide
                text-[var(--accent-primary)]
                drop-shadow-sm
              "
            >
              Sarvajanik College of Engineering & Technology
            </p>

            <p
              className="
                text-sm md:text-base
                font-semibold
                text-[var(--foreground-color)]
                opacity-80
              "
            >
              Sarvajanik University, Surat
            </p>
          </div>

          {/* RIGHT LOGO */}
          <a href="/" className="flex-shrink-0">
            <img
              src="/SULogo.jpg"
              width={85}
              className="drop-shadow-lg hover:scale-105 transition-all"
              alt="SU Logo"
            />
          </a>
        </div>
      </div>

      {/* 🔥 NAVIGATION BAR (Fully Synced) */}
      <div
        className="
          w-full font-sans
          bg-[var(--menu-background-color)]
          text-[var(--menu-foreground-color)]
          shadow-lg
        "
      >
        <SiteNavBar />
      </div>
    </>
  );
};

export default Header;
