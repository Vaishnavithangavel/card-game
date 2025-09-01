import React from "react";
import PackSelector from "./components/PackSelector";
import PackOpening from "./components/PackOpening";
import Inventory from "./components/Inventory";
import SoundToggle from "./components/SoundToggle";
import BackgroundMusic from "./components/BackgroundMusic"; // ✅ add this

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 p-6 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Cricket Card Pack Opener</h1>

      {/* Background music runs globally */}
      <BackgroundMusic />

      {/* UI components */}
      <PackSelector />
      <PackOpening />
      <Inventory />

      {/* Mute/Unmute button */}
      <SoundToggle />
    </div>
  );
}
