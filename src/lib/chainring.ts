// Shared geometry for the bike-chainring motif (duathlon page) — 22 teeth,
// rim, dashed chain-link inner ring, 5-arm spider with bolt holes, hub.
// Consumed by both Chainring.astro (static SVG) and ChainringCountdown.tsx
// (React island, rotates the same shape) so the artwork lives in one place.

export interface ChainringGeometry {
  cx: number;
  cy: number;
  rimR: number;
  rimStrokeWidth: number;
  teeth: { x: number; y: number; width: number; height: number; rx: number; rotate: number }[];
  innerR: number;
  innerStrokeWidth: number;
  innerDash: string;
  armStrokeWidth: number;
  arms: { x2: number; y2: number }[];
  bolts: { cx: number; cy: number; r: number; strokeWidth: number }[];
  hubR: number;
  hubStrokeWidth: number;
  hubDotR: number;
}

export function getChainringGeometry(size: number, teethCount = 22): ChainringGeometry {
  const cx = size / 2;
  const r = size / 2 - 8;
  const teethAngles = Array.from({ length: teethCount }, (_, i) => (i * 360) / teethCount);
  const armAngles = Array.from({ length: 5 }, (_, i) => i * 72 - 90);

  return {
    cx,
    cy: cx,
    rimR: r,
    rimStrokeWidth: size * 0.022,
    teeth: teethAngles.map((rotate) => ({
      x: cx - size * 0.018,
      y: cx - r - size * 0.055,
      width: size * 0.036,
      height: size * 0.062,
      rx: size * 0.012,
      rotate,
    })),
    innerR: r - size * 0.07,
    innerStrokeWidth: size * 0.009,
    innerDash: `${size * 0.026} ${size * 0.026}`,
    armStrokeWidth: size * 0.018,
    arms: armAngles.map((a) => ({
      x2: cx + (r - size * 0.09) * Math.cos((a * Math.PI) / 180),
      y2: cx + (r - size * 0.09) * Math.sin((a * Math.PI) / 180),
    })),
    bolts: armAngles.map((a) => ({
      cx: cx + r * 0.55 * Math.cos((a * Math.PI) / 180),
      cy: cx + r * 0.55 * Math.sin((a * Math.PI) / 180),
      r: size * 0.022,
      strokeWidth: size * 0.011,
    })),
    hubR: Math.max(6, size * 0.075),
    hubStrokeWidth: size * 0.018,
    hubDotR: Math.max(2, size * 0.022),
  };
}
