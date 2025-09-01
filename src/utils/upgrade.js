const tierOrder = ['Common', 'Rare', 'Epic', 'Legend'];

export function upgradeCard(card) {
  const currentIndex = tierOrder.indexOf(card.tier);
  if (currentIndex === -1) return card;

  if (currentIndex < tierOrder.length - 1) {
    const newTier = tierOrder[currentIndex + 1];
    return {
      ...card,
      tier: newTier,
      rating: Math.min(card.rating + 5, 99), // cap rating at 99
    };
  } else {
    // Already Legend, increase rating max 99
    return {
      ...card,
      rating: Math.min(card.rating + 3, 99),
    };
  }
}