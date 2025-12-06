"use client";

import Link from "next/link";
import { stories } from "../../lib/mockData";
import Navbar from "../../components/Navbar";

export default function StoriesPage() {
  return (
    <div className="max-w-[380px] mx-auto p-4 pb-24">
      <h1 className="text-xl font-bold mb-4">All Stories</h1>

      <div className="grid grid-cols-2 gap-4">
        {stories.map((story) => (
          <Link key={story.id} href={`/now-playing?id=${story.id}`}>
            <div className="bg-white p-2 rounded-xl shadow">
              <img
                src={story.image}
                className="rounded-lg w-full h-36 object-cover"
              />
              <p className="text-sm font-semibold mt-2">{story.title}</p>
            </div>
          </Link>
        ))}
      </div>

      <Navbar />
    </div>
  );
}
