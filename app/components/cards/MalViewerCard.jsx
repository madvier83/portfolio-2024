import Image from "next/image";
import React from "react";

export default function MalViewerCard() {
  return (
    <div className="card cursor-pointer flex flex-col gap-4 p-4 group">
      <div className="card-img transition-all duration-500">
        <Image src="/mal.png" width={1000} height={700} />
      </div>
      <div className="h-full py-8 px-4">
        <h1 className="text-2xl font-bold mb-4">MAL Viewer</h1>
        <p className="opacity-50">
          MyAnimeList Viewer is a replica of the popular MyAnimeList website,
          used by anime and movie fans to search and manage their movie list.
        </p>
        <div className="flex flex-wrap gap-2 mt-8">
          <img src="https://svgl-badge.vercel.app/api/Hosting/Firebase?theme=dark" />
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
