# 🏏 Cricket Card Pack–Opening Game

**Frontend-only React app** that simulates cinematic cricket player card pack openings (FIFA-style hype/reveal). Uses mock JSON data + RNG (no backend). Built for a fast, responsive, animated experience with collection persistence.

---

## 🔖 Assignment Summary
- **Goal:** Build a React app simulating cricket player card pack openings with cinematic animations and reveal pacing inspired by FIFA pack openings.
- **Stack:** React (Vite or Next.js), Tailwind CSS, Framer Motion / GSAP (animations). Optional: Three.js for advanced 3D.  
- **Persistence:** `localStorage` only (no backend).
- **Must-haves:** Bronze / Silver / Gold packs, pack opening flow (shake, glow, flip, slow-mo/confetti on rares), 4 card tiers, inventory with duplicate handling, sounds with mute toggle, odds tooltip, “My Collection” with filters, summary modal after open, state management (Context / Redux / Zustand).

---

## ⚙️ Tech Stack (recommended)
- React + Vite (or Next.js)
- Tailwind CSS
- Framer Motion or GSAP (choose one for animation)
- Zustand / React Context / Redux for state
- Howler.js or Web Audio API for sound
- Optional: Three.js for 3D pack or card effects

---

## 🃏 Packs & Odds

Each pack contains **~5 player cards**.

**Example odds (per card):**

| Pack   | Common | Rare | Epic  | Legend |
|--------|--------:|------:|------:|-------:|
| Bronze | 70%    | 25%  | 4.5%  | 0.5%   |
| Silver | 40%    | 45%  | 13%   | 2%     |
| Gold   | 20%    | 50%  | 25%   | 5%     |

Include an **odds tooltip** on each pack explaining these percentages.

---

## ✅ Features (Detailed)
- **Packs**
  - Bronze / Silver / Gold options with price display and odds tooltip.
  - Each pack opens ~5 players.
- **Opening Flow**
  - Pre-reveal: pack shakes and glows.
  - Reveal: card flip (staggered or reveal-all toggle).
  - Rare/Epic/Legend triggers: glow, brief slow-mo, particle confetti, unique sound.
  - Summary modal after open showing all pulled cards and actions (Add to collection / Save / Dismiss).
- **Cards**
  - 4 tiers: Common / Rare / Epic / Legend (distinct visual treatments: gradients, metallic borders, glassmorphism).
  - Shown data: `name`, `role` (BAT / BOWL / AR / WK), `team`, `rating`, `stats` (bat avg / strike or bowling econ / wickets etc.), `photo`.
- **Inventory / My Collection**
  - Persistent to `localStorage`.
  - Filter and sort by `tier`, `team`, `role`, `rating`.
  - Duplicate handling: auto-convert duplicate to in-game currency / upgrade progress OR fuse duplicates to upgrade same card (choice implemented in settings).
- **UI / UX**
  - 60 FPS animations, responsive layout, accessible buttons, keyboard-friendly where reasonable.
  - Sound effects: pack-open, flip, rare-hit; global mute toggle.
  - Clear CTAs (Buy Pack / Open / My Collection / Filters).
- **State management**
  - Use Context or a lightweight store (Zustand recommended for simplicity).
- **Deliverables**
  - Live demo (Vercel / Netlify)
  - GitHub repo
  - 30–60s demo video showing pack open flow and collection
  - README (this file) + asset credits


## 📁 Suggested Project Structure
