import { players } from '../data/players';
import { packs } from '../data/packs';

function weightedRandom(odds) {
  const sum = Object.values(odds).reduce((a, b) => a + b, 0);
  const rand = Math.random() * sum;
  let acc = 0;
  for (const tier in odds) {
    acc += odds[tier];
    if (rand <= acc) return tier;
  }
  return 'Common'; // fallback
}

export function openPack(packType) {
  const pack = packs[packType];
  const result = [];
  for (let i = 0; i < 5; i++) {
    const tier = weightedRandom(pack.odds);
    const tierPlayers = players.filter((p) => p.tier === tier);
    const player = tierPlayers[Math.floor(Math.random() * tierPlayers.length)];
    result.push(player);
  }
  return result;
}