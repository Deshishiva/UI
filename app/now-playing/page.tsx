"use client";

import { useSearchParams } from "next/navigation";
import { stories } from "../../lib/mockData";
import Navbar from "../../components/Navbar";
import { useState } from "react";

export default function NowPlaying() {
  const params = useSearchParams();
  const id = Number(params.get("id")) || 1;

  const story = stories.find((s) => s.id === id) || stories[0];
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="max-w-[380px] mx-auto p-4 pb-24 text-center">
      <h1 className="text-xl font-bold">Now Playing</h1>
      <p className="text-gray-600">{story.title}</p>

      {/* Story Image */}
      <div className="mt-6 bg-white rounded-xl shadow p-3">
        <img
          src={story.image}
          alt={story.title}
          className="rounded-lg w-full h-64 object-cover"
        />
      </div>

      {/* Progress */}
      <div className="mt-6">
        <div className="flex justify-between text-xs text-gray-600 mb-1">
          <span>1:12</span>
          <span>3:20</span>
        </div>

        <div className="w-full h-2 bg-gray-300 rounded-full">
          <div className="h-2 bg-green-500 rounded-full w-1/3"></div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-10 mt-8">
        <button className="text-4xl text-gray-500">⏮️</button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-16 h-16 rounded-full bg-green-500 text-white text-3xl flex items-center justify-center shadow-lg"
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>

        <button className="text-4xl text-gray-500">⏭️</button>
      </div>

      <Navbar />
    </div>
  );
}
