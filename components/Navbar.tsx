"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const nav = [
    { label: "Home", icon: "🏠", path: "/" },
    { label: "Learn", icon: "📚", path: "/learn" },
    { label: "Calls", icon: "📞", path: "/calls" },
    { label: "Quiz", icon: "❓", path: "/quiz" },
    { label: "Profile", icon: "👤", path: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md py-2 z-50">
      <div className="max-w-[380px] mx-auto flex justify-around">
        {nav.map((item, index) => {
          const active = pathname === item.path;

          return (
            <Link href={item.path} key={index}>
              <div
                className={`flex flex-col items-center text-xs cursor-pointer ${
                  active ? "text-green-600 font-bold" : "text-gray-500"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {item.label}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
