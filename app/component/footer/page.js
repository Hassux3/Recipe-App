import React from "react";
import "primeicons/primeicons.css";

const Footer = () => {
  return (
    <div className="- flex flex-col justify-center items-center gap-1 w-full border-t border-neutral-800 p-5 pt-7 bg-black text-white z-index: 9999">
      <div className="- flex flex-col justify-center items-center">
        <div className="- flex flex-col justify-center items-center">
          <h1 className="text-4xl font-semibold cursor-pointer">Foodie Fix</h1>
          <h2 className="self-center text-base md:text-base capialize">
            Created with {"</>"} and ☕︎.
          </h2>
        </div>
      </div>
      <div className="py-3 flex text-xl flex-row justify-start ">
        <a
          rel={"external"}
          href={"https://www.facebook.com/th3wh4ss4n"}
          target="_blank"
          className="hover:bg-neutral-900 rounded-full cursor-pointer py-1 px-2 m-auto duration-300 transition-all"
        >
          <i className="pi pi-facebook" />
        </a>
        <a
          rel={"external"}
          href={"https://github.com/Hassux3"}
          target="_blank"
          className="hover:bg-neutral-900 rounded-full cursor-pointer py-1 px-2 m-auto duration-300 transition-all"
        >
          <i className="pi pi-github" />
        </a>
      </div>
      <p className="- flex text-xs text-neutral-400 justify-around w-full">
        Copyright © 2025 FoodieFix. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
