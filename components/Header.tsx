"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-4 rounded-xl flex items-center justify-between shadow">
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <Image
          src="/stories/story1.jpg"
          width={45}
          height={45}
          alt="avatar"
          className="rounded-full"
        />

        <div>
          <p className="text-xs">Good Evening</p>
          <p className="text-lg font-bold -mt-1">Lorenzo</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-semibold shadow">
          ⭐ 30
        </div>

        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">
          PRO
        </div>
      </div>
    </div>
  );
}
