"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Quiz() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleGenerate = () => {
    alert(
      `Quiz Generated!\n\nTopic: ${topic || "Not selected"}\nDifficulty: ${
        difficulty || "Not selected"
      }`
    );
  };

  return (
    <div className="max-w-[380px] mx-auto p-4 pb-24">
      <h1 className="text-xl font-bold mb-6">Craft a Custom Quiz</h1>

  
      <div className="mb-6">
        <label className="text-sm font-semibold">Choose a topic</label>
        <input
          type="text"
          placeholder="Daily Conversation"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full mt-2 p-3 border rounded-lg outline-none"
        />
      </div>

    
      <div className="mb-6">
        <label className="text-sm font-semibold block mb-3">
          Pick difficulty
        </label>

       
        <button
          onClick={() => setDifficulty("Easy")}
          className={`w-full mb-3 p-4 rounded-xl border text-left transition ${
            difficulty === "Easy"
              ? "border-green-500 bg-green-50"
              : "bg-white"
          }`}
        >
          <p className="font-bold text-sm">Easy</p>
          <p className="text-xs text-gray-500 mt-1">
            Simple questions for beginners to get started.
          </p>
        </button>

   
        <button
          onClick={() => setDifficulty("Medium")}
          className={`w-full mb-3 p-4 rounded-xl border text-left transition ${
            difficulty === "Medium"
              ? "border-green-500 bg-green-50"
              : "bg-white"
          }`}
        >
          <p className="font-bold text-sm">Medium</p>
          <p className="text-xs text-gray-500 mt-1">
            Practice confident everyday conversations.
          </p>
        </button>

        
        <button
          onClick={() => setDifficulty("Hard")}
          className={`w-full p-4 rounded-xl border text-left transition ${
            difficulty === "Hard"
              ? "border-green-500 bg-green-50"
              : "bg-white"
          }`}
        >
          <p className="font-bold text-sm">Hard</p>
          <p className="text-xs text-gray-500 mt-1">
            Challenging questions for fluent speakers.
          </p>
        </button>
      </div>

     
      <button
        onClick={handleGenerate}
        className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold"
      >
        Generate Quiz
      </button>

      <Navbar />
    </div>
  );
}
