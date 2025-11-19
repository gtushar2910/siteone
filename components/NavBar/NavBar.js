"use client";
import React from "react";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { menu_Items } from "./menu-Items";
import MyMenuComponent from "./MyMenuComponent";

const SiteNavBar = () => {
  return (
    <nav
      className="
        w-full 
        bg-[var(--menu-background-color)]
        text-[var(--menu-foreground-color)]
        shadow-md
        font-sans
      "
    >
      <div
        className="
          flex justify-center items-center
          gap-10
          py-3
        "
      >
        {menu_Items.map((menu, index) => (
          <div
            key={index}
            className="
              relative px-2 py-1
              hover:text-white
              cursor-pointer
              transition-all duration-200
              group
            "
          >
            {/* TEXT */}
            <div className="text-lg font-semibold tracking-wide">
              <MyMenuComponent items={menu} />
            </div>

            {/* UNDERLINE ANIMATION */}
            <span
              className="
                absolute bottom-0 left-1/2 transform -translate-x-1/2
                w-0 h-[3px]
                bg-[var(--accent-secondary)]
                rounded-full
                transition-all duration-300
                group-hover:w-full
              "
            ></span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default SiteNavBar;
