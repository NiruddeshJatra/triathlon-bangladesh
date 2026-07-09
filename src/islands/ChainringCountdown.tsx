import { useState, useEffect, useMemo, useRef } from 'react';
import { prefersReducedMotion } from './prefersReducedMotion';
import { getChainringGeometry } from '../lib/chainring';

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
  const g = getChainringGeometry(size);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block', overflow: 'visible' }} aria-hidden="true">
      <g style={{ transformOrigin: 'center', transform: `rotate(${rotation}deg)` }}>
        {g.teeth.map((t, i) => (
          <rect key={i} x={t.x} y={t.y} width={t.width} height={t.height}
            rx={t.rx} fill="var(--chart)" opacity="0.95" transform={`rotate(${t.rotate} ${g.cx} ${g.cy})`} />
        ))}
        <circle cx={g.cx} cy={g.cy} r={g.rimR} fill="none" stroke="var(--chart)" strokeWidth={g.rimStrokeWidth} />
        <circle cx={g.cx} cy={g.cy} r={g.innerR} fill="none" stroke="var(--chart)"
          strokeWidth={g.innerStrokeWidth} strokeDasharray={g.innerDash} opacity="0.7" />
        {g.arms.map((l, i) => (
          <line key={i} x1={g.cx} y1={g.cy} x2={l.x2} y2={l.y2}
            stroke="var(--chart)" strokeWidth={g.armStrokeWidth} opacity="0.55" />
        ))}
        {g.bolts.map((b, i) => (
          <circle key={'b' + i} cx={b.cx} cy={b.cy} r={b.r}
            fill="none" stroke="var(--chart)" strokeWidth={b.strokeWidth} opacity="0.8" />
        ))}
        <circle cx={g.cx} cy={g.cy} r={g.hubR} fill="var(--bg-base)" stroke="var(--chart)" strokeWidth={g.hubStrokeWidth} />
        <circle cx={g.cx} cy={g.cy} r={g.hubDotR} fill="var(--chart)" />
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
