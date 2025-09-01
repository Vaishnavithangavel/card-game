import React from "react";
import { useStore } from "../store/useStore";

export default function PackButton() {
  const { playSound } = useStore();

  const handleOpenPack = () => {
    playSound("/sounds/click.mp3"); // 🎵 play click sound
    console.log("Pack opened!");
  };

  return (
    <button
      onClick={handleOpenPack}
      className="bg-blue-600 px-6 py-3 rounded-lg text-white shadow-lg hover:bg-blue-700"
    >
      Open Pack
    </button>
  );
}
