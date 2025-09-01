import React from 'react';
import { packs } from '../data/packs';
import { useStore } from '../store/useStore';

export default function PackSelector() {
  const { packType, setPackType } = useStore();

  return (
    <div className="flex space-x-4 mb-6">
      {Object.keys(packs).map((type) => (
        <button
          key={type}
          onClick={() => setPackType(type)}
          className={`px-4 py-2 rounded font-semibold transition ${
            packType === type
              ? 'bg-yellow-400 text-black shadow-lg'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
          title={`Odds: ${Object.entries(packs[type].odds)
            .map(([tier, val]) => `${tier}: ${val}%`)
            .join(', ')}`}
        >
          {type} Pack - ${packs[type].price}
        </button>
      ))}
    </div>
  );
}