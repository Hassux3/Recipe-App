import React from "react";
import "primeicons/primeicons.css";

const NavBar = () => {
  return (
    <div className="z-100 flex flex-row justify-between items-center text-white fixed top-0 w-full bg-transparent backdrop-blur-md px-5 md:px-13 py-2 border-b-1 border-neutral-950">
      <h1 className="text-3xl md:text-4xl font-semibold cursor-pointer">
        Foodie Fix
      </h1>
      {/* <h1 className="text-sm md:text-lg [word-spacing:0.1rem] font-semibold cursor-pointer select-none text-stone-200 text-shadow-lg text-shadow-black">
        {"</> by HASSAN"}
      </h1> */}
    </div>
  );
};

export default NavBar;
