import { useState, useEffect, useMemo, useRef } from 'react';
import { prefersReducedMotion } from './prefersReducedMotion';

interface Props { dateISO: string; nowMs?: number }

function useCountdown(targetISO: string, nowMs?: number) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [t, setT] = useState(() => Math.max(0, target - (nowMs ?? Date.now())));
  const reducedMotion = useRef(prefersReducedMotion());
  useEffect(() => {
    setT(Math.max(0, target - Date.now()));
    if (reducedMotion.current) return;
    const id = setInterval(() => setT(Math.max(0, target - Date.now())), 1000);
    return () => clearInterval(id);
  }, [target]);
  const s = Math.floor(t / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor(s % 86400 / 3600),
    mins: Math.floor(s % 3600 / 60),
    secs: s % 60,
    totalMs: t,
  };
}

function Chainring({ size = 88, rotation = 0 }: { size?: number; rotation?: number }) {
  const cx = size / 2;
  const r = size / 2 - 8;
  const teeth = 22;
  const tArr = Array.from({ length: teeth }, (_, i) => (i * 360) / teeth);
  const arms = Array.from({ length: 5 }, (_, i) => i * 72 - 90);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block', overflow: 'visible' }} aria-hidden="true">
      <g style={{ transformOrigin: 'center', transform: `rotate(${rotation}deg)` }}>
        {tArr.map((a, i) => (
          <rect key={i} x={cx - size * 0.018} y={cx - r - size * 0.055} width={size * 0.036} height={size * 0.062}
            rx={size * 0.012} fill="var(--chart)" opacity="0.95" transform={`rotate(${a} ${cx} ${cx})`} />
        ))}
        <circle cx={cx} cy={cx} r={r} fill="none" stroke="var(--chart)" strokeWidth={size * 0.022} />
        <circle cx={cx} cy={cx} r={r - size * 0.07} fill="none" stroke="var(--chart)"
          strokeWidth={size * 0.009} strokeDasharray={`${size * 0.026} ${size * 0.026}`} opacity="0.7" />
        {arms.map((a, i) => (
          <line key={i} x1={cx} y1={cx}
            x2={cx + (r - size * 0.09) * Math.cos((a * Math.PI) / 180)}
            y2={cx + (r - size * 0.09) * Math.sin((a * Math.PI) / 180)}
            stroke="var(--chart)" strokeWidth={size * 0.018} opacity="0.55" />
        ))}
        {arms.map((a, i) => (
          <circle key={'b' + i}
            cx={cx + r * 0.55 * Math.cos((a * Math.PI) / 180)}
            cy={cx + r * 0.55 * Math.sin((a * Math.PI) / 180)}
            r={size * 0.022} fill="none" stroke="var(--chart)" strokeWidth={size * 0.011} opacity="0.8" />
        ))}
        <circle cx={cx} cy={cx} r={Math.max(6, size * 0.075)} fill="var(--bg-base)" stroke="var(--chart)" strokeWidth={size * 0.018} />
        <circle cx={cx} cy={cx} r={Math.max(2, size * 0.022)} fill="var(--chart)" />
      </g>
    </svg>
  );
}

export default function ChainringCountdown({ dateISO, nowMs }: Props) {
  const { days, hours, mins, secs, totalMs } = useCountdown(dateISO, nowMs);
  const win = 365 * 86400 * 1000;
  const p = 1 - Math.min(1, totalMs / win);
  const D = 128;
  const cx = D / 2;
  const r = D / 2 - 4;
  const circumf = 2 * Math.PI * r;

  return (
    <div className="dua-ring">
      <div className="dua-ring-wheel" aria-hidden="true">
        <svg className="dua-ring-progress" viewBox={`0 0 ${D} ${D}`}>
          <circle cx={cx} cy={cx} r={r} fill="none" stroke="rgba(198,245,63,.16)" strokeWidth="2.5" />
          <circle cx={cx} cy={cx} r={r} fill="none" stroke="var(--chart)" strokeWidth="3"
            strokeDasharray={`${p * circumf} ${circumf}`}
            transform={`rotate(-90 ${cx} ${cx})`} strokeLinecap="round" />
          <circle cx={cx} cy={cx - r} r="3.5" fill="var(--chart)" transform={`rotate(${p * 360} ${cx} ${cx})`} />
        </svg>
        <div className="dua-ring-inner">
          <Chainring size={86} rotation={p * 360} />
        </div>
      </div>
      <div className="dua-ring-num">
        <div className="lr">
          <div className="d">{String(days).padStart(3, '0')}</div>
          <div className="unit">DAYS</div>
        </div>
        <div className="l">{String(hours).padStart(2, '0')}h {String(mins).padStart(2, '0')}m {String(secs).padStart(2, '0')}s · to race day</div>
      </div>
    </div>
  );
}
