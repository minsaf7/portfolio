import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 w-full">
    {/* Profile Picture */}
    <div className="col-span-1 row-span-2 rounded-2xl bg-gray-900 p-2 flex justify-center items-center">
      <Image
        src="/profile.jpg" // Replace with your image path
        alt="Profile"
        width={400}
        height={400}
        className="rounded-2xl object-cover h-full w-full"
      />
    </div>

    {/* Location + Time + Spotify */}
    <div className="col-span-1 sm:col-span-1 lg:col-span-2 rounded-2xl bg-gray-900 p-6 flex flex-col justify-between text-white">
      <div>
        <p className="text-lg">Kliplev, Denmark</p>
        <p className="text-sm opacity-70">01:59 PM ☀️</p>
      </div>
      <div className="mt-4 flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full w-fit">
        <Image src="/spotify.svg" alt="Spotify" width={20} height={20} />
        <p className="text-sm">
          <span className="font-semibold">Currently not</span> listening to music
        </p>
      </div>
    </div>

    {/* Favorite Tech Stack */}
    <div className="col-span-1 rounded-2xl bg-gray-900 p-4 relative text-white">
      <p className="absolute top-2 left-2 bg-black/40 text-xs px-2 py-1 rounded-full">Favourite tech</p>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {[
          '/nextjs.svg',
          '/docker.svg',
          '/dotnet.svg',
          '/react.svg',
          '/nodejs.svg',
          '/typescript.svg',
          '/aws.svg',
          '/js.svg',
          '/othertech.svg',
        ].map((src, i) => (
          <Image key={i} src={src} alt="tech" width={40} height={40} className="mx-auto" />
        ))}
      </div>
    </div>

    {/* LinkedIn Button */}
    <div className="col-span-1 rounded-2xl bg-blue-600 text-white flex items-center justify-center p-6 text-lg font-semibold">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
        LinkedIn
      </a>
    </div>

    {/* GitHub Button */}
    <div className="col-span-1 rounded-2xl bg-white text-black flex items-center justify-center p-6 text-lg font-semibold">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        <Image src="/github.svg" alt="GitHub" width={24} height={24} />
        GitHub
      </a>
    </div>

    {/* My Projects */}
    <div className="col-span-1 sm:col-span-2 rounded-2xl bg-gray-900 p-4 relative">
      <Image
        src="/project-preview.png" // Replace with your image
        alt="Projects"
        width={600}
        height={400}
        className="rounded-xl w-full h-full object-cover"
      />
      <p className="absolute bottom-4 left-4 bg-black/40 text-white px-4 py-2 rounded-full text-sm">My projects</p>
    </div>
  </div>
  );
};

export default Experience;
