import Image from "next/image";
import React from "react";

const VicallsCard = () => {
  return (
    <div className="card flex flex-col gap-4 p-4 group">
      <div className="card-img transition-all duration-500">
        <Image src="/vicalls.png" width={1920} height={1080} alt="" />
      </div>
      <div className="h-full pt-8 px-4">
        <h1 className="text-2xl font-bold mb-4">Vicalls - Meeting App</h1>
        <p className="text-slate-500">
          Vicalls is a progressive web app (PWA) meeting app that features video
          calls, record meeting, and screen sharing.
        </p>

        <div className="flex flex-wrap gap-2 mt-8">
          <img src="https://svgl-badge.vercel.app/api/Framework/Next.js?theme=dark" />
          <img src="https://svgl-badge.vercel.app/api/Language/TypeScript?theme=dark" />
          <img src="https://svgl-badge.vercel.app/api/Library/shadcnui?theme=dark" />
        </div>
      </div>
      <div className="mb-4">
        <a
          href="https://vicalls.vercel.app/"
          target="_blank"
          className="card-link"
        >
          <p>Website</p>
          <p className="text-teal-400">https://vicalls.vercel.app/</p>
        </a>
      </div>
    </div>
  );
};

export default VicallsCard;
