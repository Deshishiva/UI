"use client";

import Navbar from "../../components/Navbar";
import Link from "next/link";

const lessons = [
  {
    id: 1,
    title: "Basics of Conversation",
    thumbnail: "/stories/story1.jpg",
    duration: "5 min"
  },
  {
    id: 2,
    title: "Pronunciation Practice",
    thumbnail: "/stories/story2.jpg",
    duration: "8 min"
  },
  {
    id: 3,
    title: "Confidence Boost",
    thumbnail: "/stories/story3.jpg",
    duration: "6 min"
  }
];

export default function Learn() {
  return (
    <div className="max-w-[380px] mx-auto p-4 pb-24">
      <h1 className="text-xl font-bold mb-4">Learning Videos</h1>

      <div className="flex flex-col gap-4">
        {lessons.map((l) => (
          <Link key={l.id} href={`/now-playing?id=${l.id}`}>
            <div className="bg-white rounded-xl shadow p-3 flex gap-3 items-center cursor-pointer">
              <img
                src={l.thumbnail}
                className="w-28 h-20 rounded-lg object-cover"
                alt={l.title}
              />
              <div>
                <p className="font-semibold text-sm">{l.title}</p>
                <p className="text-xs mt-1 text-gray-500">{l.duration}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Navbar />
    </div>
  );
}
