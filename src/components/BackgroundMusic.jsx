import { useEffect } from "react";
import { useStore } from "../store/useStore";

export default function BackgroundMusic() {
  const { soundOn, playBackground, stopBackground } = useStore();

  useEffect(() => {
    if (soundOn) {
      const startMusic = () => {
        playBackground("/sounds/background.mp3");
        window.removeEventListener("click", startMusic);
      };
      window.addEventListener("click", startMusic);
    } else {
      stopBackground();
    }
  }, [soundOn, playBackground, stopBackground]);

  return null;
}
