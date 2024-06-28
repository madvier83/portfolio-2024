import Image from "next/image";
import React from "react";

export default function MalViewerCard() {
  return (
    <div className="card flex flex-col gap-4 p-4 group">
      <div className="card-img transition-all duration-500">
        <Image src="/mal.png" width={1000} height={700} alt="" />
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
      </div>
      <div className="mb-4 flex flex-col gap-2">
        <a
          href="https://appdistribution.firebase.google.com/testerapps/1:315255166207:android:4ca957ca113907379fe8ca/releases/2v37ue9unnrl8"
          target="_blank"
          className="card-link"
        >
          <p>FirebaseDist</p>
          <p className="text-teal-400">MAL Viewer</p>
        </a>
      </div>
    </div>
  );
}
