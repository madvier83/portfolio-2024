import React from "react";
import { Vortex } from "./VortexBackground";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import MainNavbar from "./MainNavbar";
import { TracingBeam } from "./TracingBeam";

export default function MainLayout({ children }) {
  return (
    <div className="overflow-x-hidden relative">
      <div className="fixed w-full h-screen opacity-60 -z-50">
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
    </div>
  );
}
