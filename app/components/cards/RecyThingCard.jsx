import Image from "next/image";
import React from "react";

export default function RecyThingCard() {
  return (
    <div className="card flex flex-col gap-4 p-4 group">
      <div className="card-img transition-all duration-500">
        <Image src="/recything2.png" width={1920} height={1080} alt="" />
      </div>
      <div className="h-full py-8 px-4">
        <h1 className="text-2xl font-bold mb-4">RecyThing</h1>
        <p className="text-slate-500">
          This innovative application is designed as a leading solution to
          overcome problems surrounding recycling waste and reporting piles and
          violations of waste disposal.
        </p>
        <div className="flex gap-2 mt-8">
          <img src="https://svgl-badge.vercel.app/api/Framework/Flutter?theme=dark" />
          <img src="https://svgl-badge.vercel.app/api/Language/Dart?theme=dark" />
        </div>
      </div>

      <div className="mb-4 flex flex-col gap-2">
        <a
          href="https://recything.my.id/"
          target="_blank"
          className="card-link"
        >
          <p>Website</p>
          <p className="text-teal-400">https://recything.my.id/</p>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.recy.recythinge"
          target="_blank"
          className="card-link"
        >
          <p>PlayStore</p>
          <p className="text-teal-400">RecyThing</p>
        </a>
      </div>
    </div>
  );
}
