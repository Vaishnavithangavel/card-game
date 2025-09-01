import React from "react";
import { useStore } from "../store/useStore";

export default function SoundToggle() {
  const { soundOn, toggleSound, playSound } = useStore();

  const handleToggle = () => {
    playSound("/sounds/click.mp3"); // feedback sound
    toggleSound();
  };

  return (
    <button
      onClick={handleToggle}
      className={`fixed top-4 right-4 p-3 rounded-full shadow-lg transition-colors duration-300 
        ${soundOn ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"} text-white`}
      title={soundOn ? "Mute Sounds" : "Unmute Sounds"}
    >
      {soundOn ? "🔊" : "🔇"}
    </button>
  );
}
