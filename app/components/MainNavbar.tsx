import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCircle, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

export default function MainNavbar() {
  return (
    <div
      className="flex justify-between items-center h-0 w-full py-16 px-4 z-50"
      data-aos="fade"
      data-aos-duration="2000"
    >
      <Link
        href="/"
        className="text-white font-bold flex items-center justify-center"
      >
        <div className="text-2xl mr-4">
          <FontAwesomeIcon icon={faUserAstronaut} />
        </div>
        {/* <FontAwesomeIcon className="w-4 mr-4" icon={faCircle} /> */}
        <p className="text-xl tracking-wider">
          Ad<span className="">vi</span>e.R
        </p>
      </Link>
      <div className="flex gap-8 text-2xl">
        <a target="_blank" href="https://www.linkedin.com/in/advierifaldy/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a target="_blank" href="https://github.com/madvier83">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=082376932445"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </div>
  );
}
