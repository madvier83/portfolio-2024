import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApdocCard from "../components/cards/ApdocCard";
import IndopalmCard from "../components/cards/IndopalmCard";
import SejatiLifeCard from "../components/cards/SejatiLifeCard";
import MalViewerCard from "../components/cards/MalViewerCard";
import RecyThingCard from "../components/cards/RecyThingCard";
import GithubCard from "../components/cards/GithubCard";
import VicallsCard from "../components/cards/VicallsCard";

import Timeline from "../about/Timeline";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  const audioRef = useRef(null);

  const [reachBottom, setReachBottom] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setReachBottom(true);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-y-hidden px-8">
      <div
        className="z-20 mt-[20vh] text-center"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <h1 className="text-slate-500 text-2xl font-mono">
          Welcome to My Portfolio!
        </h1>
        <p className="text-4xl md:text-7xl font-bold mt-8">
          Fullstack Developer
        </p>
        <p className="text-4xl md:text-7xl mb-8 mt-4 text-slate-500">
          From Bandung, Indonesia
        </p>
        <div className="text-4xl flex items-center justify-center mt-32">
          <FontAwesomeIcon className="animate-bounce w-4" icon={faCaretDown} />
          {/* <img src="/scroll.gif" alt="" className="w-32 opacity-" /> */}
        </div>
      </div>

      <h1
        className="opacity-90 mt-[40vh] font-mono flex flex-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-24 md:w-32">
          <img
            src="/code1.svg"
            alt=""
            className="text-white backdrop-blur-sm"
          />
        </div>
        <p className="text-4xl md:text-7xl font-bold mt-8">Skills</p>
        <p className="text-xl md:text-2xl mb-8 mt-4 text-slate-500">
          My technical expertise
        </p>
      </h1>
      <div
        className="flex flex-wrap items-center justify- gap-4 mt-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img src="https://svgl-badge.vercel.app/api/Language/HTML5?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Language/CSS?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Language/JavaScript?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Language/TypeScript?theme=dark" />

        <img src="https://svgl-badge.vercel.app/api/Library/React?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Library/Redux?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Framework/Next.js?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Library/shadcnui?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Framework/Bootstrap?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Framework/Laravel?theme=dark" />

        {/* <img src="https://svgl-badge.vercel.app/api/Language/Php?theme=dark" /> */}

        <img src="https://svgl-badge.vercel.app/api/Database/MySQL?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Database/SQLite?theme=dark" />

        <img src="https://svgl-badge.vercel.app/api/Language/Dart?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Framework/Flutter?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Hosting/Firebase?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Software/Git?theme=dark" />
        {/* <img src="https://svgl-badge.vercel.app/api/Software/Postman?theme=dark" /> */}
        <img src="https://svgl-badge.vercel.app/api/Design/Figma?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Hosting/Vercel?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Software/Stack%20Overflow?theme=dark" />
        {/* <img src="https://svgl-badge.vercel.app/api/Software/Visual%20Studio%20Code?theme=dark" /> */}
      </div>
      <div
        className=" mt-8 flex items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          className="hidden lg:block border border-stone-800 rounded-lg"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=madvier83&locale=en&layout=compact&theme=dark&hide_border=true&bg_color=171717&card_width=800"
          alt="madvier83"
        />
        <img
          className="block lg:hidden border border-stone-800 rounded-lg"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=madvier83&locale=en&layout=compact&theme=dark&hide_border=true&bg_color=171717&card_width=400"
          alt="madvier83"
        />
      </div>

      <h1
        className="opacity-90 mt-[40vh] font-mono flex flex-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-24 md:w-32">
          <img
            src="/planet2.svg"
            alt=""
            className="text-white backdrop-blur-sm"
          />
        </div>
        <p className="text-4xl md:text-7xl font-bold mt-8">Projects</p>
        <p className="text-xl md:text-2xl mb-8 mt-4 text-slate-500">
          Highlighted works
        </p>
      </h1>
      <div
        className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <ApdocCard></ApdocCard>
        <RecyThingCard></RecyThingCard>
        <VicallsCard></VicallsCard>
        <IndopalmCard></IndopalmCard>
        <SejatiLifeCard></SejatiLifeCard>
        <MalViewerCard></MalViewerCard>
        <GithubCard></GithubCard>
      </div>

      <h1
        className="opacity-90 mt-[40vh] font-mono flex flex-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-24 md:w-32">
          <img
            src="/telescope.svg"
            alt=""
            className="text-white backdrop-blur-sm"
          />
        </div>
        <p className="text-4xl md:text-7xl font-bold mt-8">Career</p>
        <p className="text-xl md:text-2xl mb-8 mt-4 text-slate-500">
          My professional path
        </p>
      </h1>
      <div
        className="flex items-center mt-16 lg:mx-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Timeline></Timeline>
      </div>

      <h1
        className="opacity-90 mt-[40vh] font-mono flex flex-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-24 md:w-32">
          <img src="/chat.svg" alt="" className="text-white backdrop-blur-sm" />
        </div>
        <p className="text-4xl md:text-7xl font-bold mt-8">Contact</p>
        <p className="text-xl md:text-2xl mb-8 mt-4 text-slate-500">
          Stay In Touch
        </p>
      </h1>

      <div className="" data-aos="fade-up" data-aos-duration="1000">
        <div className="grid md:grid-cols-2 gap-4 mt-10 flex-col">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=082376932445"
            className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-teal-400 bg-opacity-20 backdrop-blur-sm  hover:border-emerald-500 border border-slate-800 text-lg cursor-pointer flex justify-between items-center"
          >
            <p>Whatsapp</p>
            <p className="text-sm opacity-50">0823 7693 2445</p>
          </a>
          <a
            // target="_blank"
            href="mailto:madvier83@gmail.com"
            className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-sky-400 bg-opacity-20 backdrop-blur-sm hover:border-sky-500 border border-slate-800 text-lg cursor-pointer flex justify-between items-center"
          >
            <p>Email</p>
            <p className="text-sm opacity-50">madvier83@gmail.com</p>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/advierifaldy/"
            className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-blue-400 bg-opacity-20 backdrop-blur-sm   hover:border-blue-500 border border-slate-800 text-lg cursor-pointer flex justify-between items-center"
          >
            <p>LinkedIn</p>
            <p className="text-sm opacity-50">/advierifaldy</p>
          </a>
          <a
            target="_blank"
            href="https://github.com/madvier83"
            className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-violet-400 bg-opacity-20 backdrop-blur-sm   hover:border-violet-500 border border-slate-800 text-lg cursor-pointer flex justify-between items-center"
          >
            <p>GitHub</p>
            <p className="text-sm opacity-50">/madvier83</p>
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1NIvpwFupiRO0PWo4s0ey6hh44ChP4uNc/view?usp=sharing"
          target="_blank"
        >
          <div className="flex justify-center mt-4">
            <button className="hover:bg-opacity-25 transition-all duration-500 p-6 px-8 rounded-xl bg-rose-400 bg-opacity-20 backdrop-blur-sm   hover:border-rose-500 border border-slate-800 text-lg cursor-pointer flex items-center justify-between min-w-80 w-full">
              <p>Download CV</p>
              <p className="text-sm opacity-50">Updated Jan 2025</p>
            </button>
          </div>
        </a>
      </div>
      <div className="pt-[35vh]">
        {/* <p className="text-center opacity-20">
          Copyright &copy; 2024 by Advie Rifaldy
        </p> */}
      </div>

      {/* <div className="my-[25vh] flex items-center justify-center z-50">
        <div
          className="items-center justify-center flex flex-col cursor-pointer transition-all duration-200 hover:animate-pulse hover:brightness-125"
          onClick={scrollToTop}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="100"
        >
          <div className="w-24 z-50">
            <img src="/rocket2.svg" alt="" className="-rotate-45" />
          </div>

          <p className="text-center font-bold capitalize text-xl">
            Discover more below!
          </p>
        </div>
      </div> */}
    </div>
  );
}
