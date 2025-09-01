import React from "react";
import { useStore } from "../store/useStore";
import Card from "./Card";

export default function SummaryModal({ isOpen, onClose }) {
  const { openedCards, duplicates, clearDuplicates } = useStore();

  if (!isOpen) return null;

  const newCards = openedCards.filter(
    (card) => !duplicates.find((dup) => dup.id === card.id)
  );

  const handleClose = () => {
    clearDuplicates();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg p-6 max-w-3xl w-full text-white">
        <h2 className="text-2xl font-bold mb-4">Pack Opening Summary</h2>

        <div>
          <h3 className="font-semibold mb-2">New Cards</h3>
          {newCards.length === 0 ? (
            <p>No new cards this time.</p>
          ) : (
            <div className="grid grid-cols-5 gap-4 mb-4">
              {newCards.map((card) => (
                <Card key={card.id} card={card} isFlipped={true} />
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="font-semibold mb-2">Duplicates Upgraded</h3>
          {duplicates.length === 0 ? (
            <p>No duplicates upgraded.</p>
          ) : (
            <div className="grid grid-cols-5 gap-4">
              {duplicates.map((card) => (
                <Card key={card.id} card={card} isFlipped={true} />
              ))}
            </div>
          )}
        </div>

        <button
          onClick={handleClose}
          className="mt-6 bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500"
        >
          Close
        </button>
      </div>
    </div>
  );
}

