import React from 'react';
import { motion } from 'framer-motion';

const tierStyles = {
  Common: 'border-gray-400',
  Rare: 'border-blue-400 shadow-[0_0_10px_2px_rgba(59,130,246,0.7)]',
  Epic: 'border-purple-400 shadow-[0_0_15px_3px_rgba(139,92,246,0.8)]',
  Legend: 'border-yellow-400 shadow-[0_0_20px_4px_rgba(250,204,21,0.9)]',
};

export default function Card({ card, isFlipped }) {
  return (
    <motion.div
      className={`bg-white bg-opacity-20 rounded-lg p-4 flex flex-col items-center border-4 glass ${tierStyles[card.tier]}`}
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: isFlipped ? 0 : 90, opacity: isFlipped ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      style={{ perspective: 1000 }}
    >
      {isFlipped ? (
        <>
          <img
            src={card.photo}
            alt={card.name}
            className="w-20 h-20 rounded-full mb-2 object-cover"
          />
          <h3 className="font-bold">{card.name}</h3>
          <p>{card.role} - {card.team}</p>
          <p>Rating: {card.rating}</p>
        </>
      ) : (
        <div className="w-20 h-28 bg-gray-600 rounded-md" />
      )}
    </motion.div>
  );
}
