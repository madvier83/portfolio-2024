import Image from "next/image";
import React from "react";

export default function SejatiLifeCard() {
  return (
    <div className="card flex flex-col gap-4 p-4 group">
      <div className="card-img transition-all duration-500">
        <Image src="/sejatinew.png" width={1000} height={700} alt="" />
      </div>
      <div className="h-full py-8 px-4">
        <h1 className="text-2xl font-bold mb-4">Sejati Life</h1>
        <p className="text-slate-500">
          Church Learning Management System. The application includes features
          such as content customization, course completion, and daily quotes
          from pastor.
        </p>
        <div className="flex gap-2 mt-8">
          <img src="https://svgl-badge.vercel.app/api/Framework/Laravel?theme=dark" />
          <img src="https://svgl-badge.vercel.app/api/Framework/Bootstrap?theme=dark" />
        </div>
      </div>

      <div className="mb-4 flex flex-col gap-2">
        <a href="https://sejati.life/" target="_blank" className="card-link">
          <p>Website</p>
          <p className="text-teal-400">https://sejati.life/</p>
        </a>
      </div>
    </div>
  );
}
