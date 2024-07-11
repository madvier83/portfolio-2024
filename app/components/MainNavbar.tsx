"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCircle, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

export default function MainNavbar() {
  const [reachBottom, setReachBottom] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setReachBottom(true);
  };
  return (
    <div
      className=" flex justify-between items-center h-0 w-full py-8 px-4 lg:mx-4 backdrop-blur-sm bg-black bg-opacity-20 border-slate-900 rounded-full border-2 my-12 z-50 max-w-5xl"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div
        onClick={scrollToTop}
        className="text-white font-bold flex items-center justify-center cursor-pointer"
      >
        <div className="mr-4 border-2 border-slate-800 w-10 h-10 flex items-center justify-center rounded-full overflow-clip">
          <FontAwesomeIcon
            icon={faUserAstronaut}
            className="text-4xl mt-2 text-white"
          />
        </div>
        {/* <FontAwesomeIcon className="w-4 mr-4" icon={faCircle} /> */}
        <p className="text-2xl font-thin tracking-wider">
          Ad<span className="">vi</span>e.R
        </p>
      </div>
      <div className="flex gap-4 text-2xl">
        <a
          className="hover:bg-blue-500 transition-all duration-500 border-2 border-slate-800 w-10 h-10 flex items-center justify-center rounded-full"
          target="_blank"
          href="https://www.linkedin.com/in/advierifaldy/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="hover:bg-purple-500 transition-all duration-500 border-2 border-slate-800 w-10 h-10 flex items-center justify-center rounded-full"
          target="_blank"
          href="https://github.com/madvier83"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className="hover:bg-emerald-500 transition-all duration-500 border-2 border-slate-800 w-10 h-10 flex items-center justify-center rounded-full"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=082376932445"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </div>
  );
}
