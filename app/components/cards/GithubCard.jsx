import Image from "next/image";
import React from "react";

export default function SejatiLifeCard() {
  return (
    <div className="card cursor-pointer flex flex-col gap-4 p-4 group">
      <div className="card-img transition-all duration-500">
        <img
          className="brightness-50"
          src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
          width={1000}
          height={700}
        />
      </div>
      <div className="h-full py-8 px-4">
        <h1 className="text-2xl font-bold mb-4">More On Github</h1>
        <p className="opacity-50">
          Dive into my GitHub repository to discover a diverse array of projects
          that highlight my skills and passion for coding.
        </p>
      </div>

      <div className="mb-4 flex flex-col gap-2">
        <a
          href="https://github.com/madvier83"
          target="_blank"
          className="card-link"
        >
          <p>GitHub</p>
          <p className="text-teal-400">https://github.com/madvier83</p>
        </a>
      </div>
    </div>
  );
}
