import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function MainNavbar() {
  return (
    <div className="flex justify-between items-center h-0 w-full py-16 px-4 z-50">
      <Link
        href="/"
        className="text-white font-bold flex items-center justify-center"
      >
        <FontAwesomeIcon className="w-4 mr-4" icon={faCircle} />
        <p className="text-xl tracking-wider">
          Ad<span className="">vi</span>e Rifaldy
        </p>
      </Link>
      <div className="flex gap-8 text-2xl">
        <Link href="/about">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link href="/about">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href="/about">
          <FontAwesomeIcon icon={faWhatsapp} />
        </Link>
      </div>
    </div>
  );
}
