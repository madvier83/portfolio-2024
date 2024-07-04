import Image from "next/image";
import React from "react";

export default function ApdocCard() {
  return (
    <div className="card flex flex-col gap-4 p-4 group">
      <div className="card-img transition-all duration-500">
        <Image src="/apdoc2crop.png" width={1920} height={1080} alt="" />
      </div>
      <div className="h-full pt-8 px-4">
        <h1 className="text-2xl font-bold mb-4">APDOC Clinic System</h1>
        <p className="opacity-50">
          The Best Solution for Managing Your Electronic Medical Records APDOC
          Clinic System is here to enhance the efficiency and management of your
          clinic.
        </p>

        <div className="flex flex-wrap gap-2 mt-8">
          <img src="https://svgl-badge.vercel.app/api/Framework/Next.js?theme=dark" />
          <img src="https://svgl-badge.vercel.app/api/Library/React?theme=dark" />
          <img src="https://svgl-badge.vercel.app/api/Framework/Laravel?theme=dark" />
          <img src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=dark" />
        </div>
      </div>
      <div className="mb-4">
        <a href="http://apdoc.id/" target="_blank" className="card-link">
          <p>Website</p>
          <p className="text-teal-400">https://apdoc.id/</p>
        </a>
      </div>
    </div>
  );
}
