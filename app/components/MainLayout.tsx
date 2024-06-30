import React from "react";
import { Vortex } from "./VortexBackground";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import MainNavbar from "./MainNavbar";
import { TracingBeam } from "./TracingBeam";

export default function MainLayout({ children }) {
  return (
    <div className="overflow-x-hidden overflow-y-hidden relative">
      <div className="fixed w-full h-screen opacity-50 -z-50">
        <Vortex />
      </div>
      <div className="fixed w-full h-screen opacity-20 -z-50">
        <BackgroundGradientAnimation />
      </div>

      <div className="flex items-center justify-center z-50">
        <div className="flex flex-col w-full max-w-5xl ">
          <MainNavbar></MainNavbar>
          {children}
        </div>
      </div>

      {/* <div className="absolute bottom-0 h-[570px] overflow-hidden -z-50 w-screen backdrop-blur-lg"></div> */}
      <div className="absolute bottom-0 w-full overflow-hidden pb-4 -z-40 hidden lg:block overflow-x-hidden">
        <div className="flex justify-center relative w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014] to-[#030014]"></div>
          <video
            src="/blackhole.webm"
            loop
            autoPlay
            muted
            className="blur-[4px] brightness-100 relative transform translate-y-1/2"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
