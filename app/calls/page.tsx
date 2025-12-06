"use client";

import Navbar from "../../components/Navbar";

const peers = [
  {
    id: 1,
    name: "Sophie",
    avatar: "https://picsum.photos/200?random=21",
    status: "Online"
  },
  {
    id: 2,
    name: "Rahul",
    avatar: "https://picsum.photos/200?random=22",
    status: "Learning"
  },
  {
    id: 3,
    name: "Mia",
    avatar: "https://picsum.photos/200?random=23",
    status: "Offline"
  }
];

export default function Calls() {
  return (
    <div className="max-w-[380px] mx-auto p-4 pb-20">
      <h1 className="text-xl font-bold mb-4">Peer Calls</h1>

      {/* Peer List */}
      <div className="flex flex-col gap-4">
        {peers.map(peer => (
          <div
            key={peer.id}
            className="bg-white p-4 rounded-xl shadow flex items-center gap-4"
          >
            {/* Avatar */}
            <img
              src={peer.avatar}
              className="w-14 h-14 rounded-full object-cover"
              alt={peer.name}
            />

            {/* Name + Status */}
            <div className="flex-1">
              <p className="font-semibold text-sm">{peer.name}</p>
              <p className="text-xs text-gray-500 mt-1">{peer.status}</p>
            </div>

            {/* Call Button */}
            <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm">
              Call
            </button>
          </div>
        ))}
      </div>

      {/* AI Call Section */}
      <h2 className="text-lg font-bold mt-8 mb-3">AI Practice Call</h2>

      <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-2xl">
          🤖
        </div>

        <div className="flex-1">
          <p className="font-semibold text-sm">AI Conversation</p>
          <p className="text-xs text-gray-500 mt-1">
            Practice speaking anytime
          </p>
        </div>

        <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm">
          Start
        </button>
      </div>

      <Navbar />
    </div>
  );
}
