import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import Card from './Card';

const roles = ['BAT', 'BOWL', 'AR', 'WK'];
const tiers = ['Common', 'Rare', 'Epic', 'Legend'];

export default function Inventory() {
  const { inventory } = useStore();
  const [filterRole, setFilterRole] = useState('');
  const [filterTier, setFilterTier] = useState('');

  const filtered = inventory.filter((card) => {
    return (
      (filterRole ? card.role === filterRole : true) &&
      (filterTier ? card.tier === filterTier : true)
    );
  });

  return (
    <div className="mt-12 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Collection</h2>

      <div className="flex space-x-4 mb-6">
        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white"
        >
          <option value="">All Roles</option>
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

        <select
          value={filterTier}
          onChange={(e) => setFilterTier(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white"
        >
          <option value="">All Tiers</option>
          {tiers.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-400">No cards match the filter.</p>
      ) : (
        <div className="grid grid-cols-5 gap-4">
          {filtered.map((card) => (
            <Card key={card.id} card={card} isFlipped={true} />
          ))}
        </div>
      )}
    </div>
  );
}

