import { create } from "zustand";
import { upgradeCard } from "../utils/upgrade";

const LOCAL_STORAGE_KEY = "cricket_inventory";

export const useStore = create((set, get) => ({
  packType: "Bronze",
  setPackType: (type) => set({ packType: type }),

  openedCards: [],
  setOpenedCards: (cards) => set({ openedCards: cards }),

  inventory: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]"),
  addToInventory: (cards) =>
    set((state) => {
      let newInventory = [...state.inventory];
      const duplicates = [];

      cards.forEach((card) => {
        const idx = newInventory.findIndex((c) => c.id === card.id);
        if (idx === -1) {
          newInventory.push(card);
        } else {
          // Upgrade existing card
          const upgraded = upgradeCard(newInventory[idx]);
          newInventory[idx] = upgraded;
          duplicates.push(upgraded);
        }
      });

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newInventory));
      return { inventory: newInventory, duplicates };
    }),

  duplicates: [],
  clearDuplicates: () => set({ duplicates: [] }),

  // 🔊 Sound state
  soundOn: true,
  toggleSound: () => {
    const newValue = !get().soundOn;
    if (!newValue && get().backgroundAudio) {
      get().backgroundAudio.pause();
    } else if (newValue && get().backgroundAudio) {
      get().backgroundAudio.play().catch(() => {});
    }
    set({ soundOn: newValue });
  },

  // 🎵 Play one-shot sound effect
  playSound: (file) => {
    if (get().soundOn) {
      const audio = new Audio(file);
      audio.play().catch((err) => {
        console.warn("Sound play blocked until user interaction", err);
      });
    }
  },

  // 🎶 Background music controller
  backgroundAudio: null,
  playBackground: (file) => {
    if (!get().soundOn) return;
    if (!get().backgroundAudio) {
      const audio = new Audio(file);
      audio.loop = true;
      audio.volume = 0.5;
      audio.play().catch(() => {});
      set({ backgroundAudio: audio });
    } else {
      get().backgroundAudio.play().catch(() => {});
    }
  },
  stopBackground: () => {
    if (get().backgroundAudio) {
      get().backgroundAudio.pause();
      get().backgroundAudio.currentTime = 0;
    }
  },
}));
