import React, { useState } from "react";
import { useStore } from "../store/useStore";
import { openPack } from "../utils/rng";
import Card from "./Card";
import SummaryModal from "./SummaryModal"; // ✅ only once
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function PackOpening() {
  const { packType, setOpenedCards, openedCards, addToInventory, clearDuplicates } = useStore();
  const [isOpening, setIsOpening] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const handleOpenPack = () => {
    if (isOpening) return;
    setIsOpening(true);
    setFlippedCards([]);
    setOpenedCards([]);
    clearDuplicates();
    setShowConfetti(false);

    setTimeout(() => {
      const cards = openPack(packType);
      setOpenedCards(cards);

      cards.forEach((_, i) => {
        setTimeout(() => {
          setFlippedCards((prev) => [...prev, i]);

          if (i === cards.length - 1) {
            addToInventory(cards);
            if (cards.some((c) => ["Rare", "Epic", "Legend"].includes(c.tier))) {
              setShowConfetti(true);
              setTimeout(() => setShowConfetti(false), 5000);
            }
            setIsOpening(false);
            setShowSummary(true);
          }
        }, i * 700);
      });
    }, 2500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <button
        onClick={handleOpenPack}
        disabled={isOpening}
        className="bg-green-500 px-6 py-3 rounded font-semibold hover:bg-green-600 disabled:opacity-50 mb-8"
        aria-busy={isOpening}
      >
        {isOpening ? "Opening..." : `Open ${packType} Pack`}
      </button>

      <motion.div
        animate={
          isOpening
            ? { rotate: [0, 5, -5, 5, -5, 0], boxShadow: "0 0 20px 5px #facc15" }
            : { rotate: 0, boxShadow: "none" }
        }
        transition={{ repeat: isOpening ? Infinity : 0, duration: 0.6 }}
        className="flex justify-center space-x-4"
      >
        {openedCards.length === 0 && !isOpening && (
          <p className="text-center text-gray-300">No cards opened yet</p>
        )}

        {openedCards.map((card, i) => (
          <Card key={`${card.id}-${i}`} card={card} isFlipped={flippedCards.includes(i)} />
        ))}
      </motion.div>

      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}

      <SummaryModal isOpen={showSummary} onClose={() => setShowSummary(false)} />
    </div>
  );
}

