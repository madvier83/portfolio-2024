import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ApdocCard from "../components/cards/ApdocCard";
import IndopalmCard from "../components/cards/IndopalmCard";
import SejatiLifeCard from "../components/cards/SejatiLifeCard";
import MalViewerCard from "../components/cards/MalViewerCard";
import RecyThingCard from "../components/cards/RecyThingCard";
import GithubCard from "../components/cards/GithubCard";

import Timeline from "../about/Timeline";
import React from "react";
import Link from "next/link";
import { faSpaceAwesome } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col min-h-screen px-8 overflow-y-hidden">
      <div className="z-20 mt-[20vh] text-center">
        <h1 className="opacity-50 text-xl font-mono">
          Welcome to My Portfolio!
        </h1>
        <p className="text-3xl md:text-6xl font-bold my-8 leading-tight">
          Fullstack Web Developer From Bandung, Indonesia
        </p>
        <div className="text-4xl flex items-center justify-center">
          <FontAwesomeIcon
            className="ml-4 animate-bounce w-4"
            icon={faCaretDown}
          />
        </div>
      </div>

      <h1 className="opacity-50 text-xl mt-[25vh] text-center font-mono">
        Technical Proficiencies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-16">
        <img src="https://svgl-badge.vercel.app/api/Language/HTML5?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Language/CSS?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Language/JavaScript?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Language/TypeScript?theme=dark" />

        <img src="https://svgl-badge.vercel.app/api/Library/React?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Library/Redux?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Framework/Next.js?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Framework/Bootstrap?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Framework/Laravel?theme=dark" />
        {/* <img src="https://svgl-badge.vercel.app/api/Language/Php?theme=dark" /> */}

        <img src="https://svgl-badge.vercel.app/api/Database/MySQL?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Database/SQLite?theme=dark" />

        <img src="https://svgl-badge.vercel.app/api/Language/Dart?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Framework/Flutter?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Hosting/Firebase?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Software/Visual%20Studio%20Code?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Software/Git?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Software/Postman?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Design/Figma?theme=dark" />
      </div>
      <div className="backdrop-blur-sm mt-8 flex items-center justify-center">
        <img
          className="hidden lg:block"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=madvier83&locale=en&layout=compact&theme=dark&hide_border=true&bg_color=00000000&card_width=800"
          alt="madvier83"
        />

        <img
          className="block lg:hidden"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=madvier83&locale=en&layout=compact&theme=dark&hide_border=true&bg_color=00000000&card_width=400"
          alt="madvier83"
        />
      </div>

      <h1 className="opacity-50 text-xl mt-[30vh] text-center font-mono">
        Selected Projects
      </h1>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <ApdocCard></ApdocCard>
        <RecyThingCard></RecyThingCard>
        <IndopalmCard></IndopalmCard>
        <SejatiLifeCard></SejatiLifeCard>
        <MalViewerCard></MalViewerCard>
        <GithubCard></GithubCard>
      </div>

      <h1 className="opacity-50 text-xl mt-[30vh] text-center font-mono">
        Professional Career
      </h1>
      <div className="flex items-center mt-16 lg:mx-4">
        <Timeline></Timeline>
      </div>

      <h1 className="opacity-50 text-xl mt-[30vh] text-center font-mono">
        Contact Information
      </h1>

      <div className="grid md:grid-cols-2 gap-4 mt-16 flex-col">
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=082376932445"
          className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-teal-400 bg-opacity-20 backdrop-blur-sm  hover:border-emerald-500 border border-gray-800 text-lg cursor-pointer flex justify-between items-center"
        >
          <p>Whatsapp</p>
          <p className="text-sm opacity-50">0823 7693 2445</p>
        </a>
        <a
          // target="_blank"
          href="mailto:madvier83@gmail.com"
          className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-sky-400 bg-opacity-20 backdrop-blur-sm hover:border-sky-500 border border-gray-800 text-lg cursor-pointer flex justify-between items-center"
        >
          <p>Email</p>
          <p className="text-sm opacity-50">madvier83@gmail.com</p>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/muhammad-advie-rifaldy-a9790b251/"
          className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-blue-400 bg-opacity-20 backdrop-blur-sm   hover:border-blue-500 border border-gray-800 text-lg cursor-pointer flex justify-between items-center"
        >
          <p>LinkedIn</p>
          <p className="text-sm opacity-50">/advierifaldy</p>
        </a>
        <a
          target="_blank"
          href="https://github.com/madvier83"
          className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-violet-400 bg-opacity-20 backdrop-blur-sm   hover:border-violet-500 border border-gray-800 text-lg cursor-pointer flex justify-between items-center"
        >
          <p>GitHub</p>
          <p className="text-sm opacity-50">/madvier83</p>
        </a>
      </div>

      <a
        href="https://drive.google.com/file/d/19UiCksWII06ICktvRgPQQLtlb-xlcBry/view?usp=sharing"
        target="_blank"
      >
        <div className="flex justify-center mt-4">
          <button className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-rose-400 bg-opacity-20 backdrop-blur-sm   hover:border-rose-500 border border-gray-800 text-lg cursor-pointer flex items-center justify-between min-w-80 w-full">
            <p>Download CV</p>
            <p className="text-sm opacity-50">Updated May 2024</p>
          </button>
        </div>
      </a>

      <div className="py-[47vh] flex items-center justify-center text-6xl">
        <div
          className="cursor-pointer pb-4 transition-all duration-200 hover:animate-pulse hover:text-cyan-300 active:text-orange-500"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faSpaceAwesome} />
        </div>
      </div>
    </div>
  );
}
