import Image from "next/image";
import React from "react";

export default function RecyThingCard() {
  return (
    <div className="card cursor-pointer flex flex-col gap-4 p-4 group">
      <div className="card-img transition-all duration-500">
        <Image src="/recything2.png" width={1000} height={700} />
      </div>
      <div className="h-full py-8 px-4">
        <h1 className="text-2xl font-bold mb-4">RecyThing</h1>
        <p className="opacity-50">
          This innovative application is designed as a leading solution to
          overcome problems surrounding recycling waste and reporting piles and
          violations of waste disposal.
        </p>
        <div className="flex gap-2 mt-8">
          <img src="https://svgl-badge.vercel.app/api/Framework/Flutter?theme=dark" />
          <img src="https://svgl-badge.vercel.app/api/Language/Dart?theme=dark" />
        </div>

        {/* <button className="bg-teal-400 text-black px-4 py-2 rounded-md w-full mt-4 font-semibold">
          Read More
        </button> */}
      </div>
    </div>
  );
}
