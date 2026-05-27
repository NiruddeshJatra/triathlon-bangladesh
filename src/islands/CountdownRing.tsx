import { useState, useEffect, useMemo, useRef } from 'react';

interface Props { dateISO: string }

function useCountdown(targetISO: string) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [t, setT] = useState(() => Math.max(0, target - Date.now()));
  const reducedMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  useEffect(() => {
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

function ShipWheel({ size = 88, rotation = 0 }: { size?: number; rotation?: number }) {
  const cx = size / 2;
  const r = size / 2 - 6;
  const spokes = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }} aria-hidden="true">
      <g style={{ transformOrigin: 'center', transform: `rotate(${rotation}deg)` }}>
        {spokes.map((a, i) => (
          <g key={i} transform={`rotate(${a} ${cx} ${cx})`}>
            <rect x={cx - 3} y={size / 2 - r - 9} width={6} height={11} rx={2.6} fill="var(--gold)" opacity="0.9" />
            <circle cx={cx} cy={size / 2 - r - 7} r={4} fill="var(--gold)" />
          </g>
        ))}
        <circle cx={cx} cy={cx} r={r} fill="none" stroke="var(--gold)" strokeWidth="2.6" />
        <circle cx={cx} cy={cx} r={r - 8} fill="none" stroke="var(--gold)" strokeWidth="0.9" strokeDasharray="3 3" opacity="0.7" />
        {spokes.map((a, i) => (
          <line key={i} x1={cx} y1={cx} x2={cx} y2={cx - r + 10} stroke="var(--gold)" strokeWidth="2" opacity="0.55" transform={`rotate(${a} ${cx} ${cx})`} />
        ))}
        <circle cx={cx} cy={cx} r={Math.max(7, size * 0.075)} fill="var(--green-deep)" stroke="var(--gold)" strokeWidth="2" />
        <circle cx={cx} cy={cx} r={Math.max(2, size * 0.022)} fill="var(--gold)" />
      </g>
    </svg>
  );
}

export default function CountdownRing({ dateISO }: Props) {
  const { days, hours, mins, secs, totalMs } = useCountdown(dateISO);
  const win = 365 * 86400 * 1000;
  const p = 1 - Math.min(1, totalMs / win);
  const D = 128;
  const cx = D / 2;
  const r = D / 2 - 5;
  const circumf = 2 * Math.PI * r;

  return (
    <div className="cmhm-ring">
      <div className="cmhm-ring-wheel" aria-hidden="true">
        <svg className="cmhm-ring-progress" viewBox={`0 0 ${D} ${D}`}>
          <circle cx={cx} cy={cx} r={r} fill="none" stroke="rgba(212,175,55,.18)" strokeWidth="2.5" />
          <circle cx={cx} cy={cx} r={r} fill="none" stroke="var(--gold)" strokeWidth="3"
            strokeDasharray={`${p * circumf} ${circumf}`}
            transform={`rotate(-90 ${cx} ${cx})`} strokeLinecap="round" />
          <circle cx={cx} cy={cx - r} r="3.5" fill="var(--gold)"
            transform={`rotate(${p * 360} ${cx} ${cx})`} />
        </svg>
        <div className="cmhm-ring-inner">
          <ShipWheel size={88} rotation={p * 360} />
        </div>
      </div>
      <div className="cmhm-ring-num">
        <div className="lr">
          <div className="d">{String(days).padStart(3, '0')}</div>
          <div className="unit">DAYS</div>
        </div>
        <div className="l">{String(hours).padStart(2, '0')}h {String(mins).padStart(2, '0')}m {String(secs).padStart(2, '0')}s · to flag-off</div>
      </div>
    </div>
  );
}
