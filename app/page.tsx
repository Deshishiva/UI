"use client";

import Header from "../components/Header";
import XPCard from "../components/XPCard";
import ActionIcons from "../components/ActionIcons";
import StoryCard from "../components/StoryCard";
import { stories } from "../lib/mockData";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="max-w-[380px] mx-auto p-4 pb-24">
      <Header />
      <XPCard />
      <ActionIcons />

      {/* Title + Show All */}
      <div className="mt-6 flex justify-between items-center">
        <h3 className="font-semibold">Audio Stories</h3>
        <Link href="/stories">
          <button className="text-green-600 text-xs font-semibold">
            Show all →
          </button>
        </Link>
      </div>

      {/* Horizontal Scroll Stories */}
      <div className="flex gap-4 overflow-x-scroll mt-3 pb-4">
        {stories.map((s) => (
          <Link key={s.id} href={`/now-playing?id=${s.id}`}>
            <StoryCard title={s.title} img={s.image} />
          </Link>
        ))}
      </div>

      <Navbar />
    </div>
  );
}
