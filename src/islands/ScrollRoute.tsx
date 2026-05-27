import { useState, useEffect, useRef } from 'react';

const PATH = "M 60 30 C 30 200 90 320 50 480 C 18 620 78 780 40 940 C 16 1080 76 1200 50 1400 C 25 1560 80 1700 45 1880 C 18 2020 70 2160 55 2300";

const PINS = [
  { y: 0.06, label: "00", sub: "Karnaphuli · Pre-dawn" },
  { y: 0.16, label: "START", sub: "Bāstuhārā · Kṣetrochar" },
  { y: 0.32, label: "RACE", sub: "Three distances" },
  { y: 0.46, label: "FLAG-OFF", sub: "05:00 BST" },
  { y: 0.58, label: "MID", sub: "Jame Mosque · Madrasa" },
  { y: 0.70, label: "MEDAL", sub: "Ship's wheel · 21.1K" },
  { y: 0.84, label: "TURN", sub: "Maritime University" },
  { y: 0.96, label: "FINISH", sub: "Cross the line" },
];

export default function ScrollRoute() {
  const [progress, setProgress] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLen, setPathLen] = useState(2000);
  const rafRef = useRef<number>(0);
  const markerRef = useRef<SVGCircleElement>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (pathRef.current) {
      setPathLen(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    if (reducedMotion.current) {
      setProgress(1);
      return;
    }

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafRef.current = requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const p = h > 0 ? Math.max(0, Math.min(1, window.scrollY / h)) : 0;
        setProgress(p);
        if (markerRef.current && pathRef.current) {
          const len = pathRef.current.getTotalLength();
          const pt = pathRef.current.getPointAtLength(p * len);
          markerRef.current.setAttribute('cx', String(pt.x));
          markerRef.current.setAttribute('cy', String(pt.y));
        }
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="cmhm-scrollroute" aria-hidden="true" style={{ willChange: 'contents' }}>
      <svg viewBox="0 0 120 2400" preserveAspectRatio="xMinYMin meet">
        <defs>
          <linearGradient id="srg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--gold)" />
            <stop offset=".4" stopColor="var(--gold-soft)" />
            <stop offset=".8" stopColor="var(--green-bright)" />
            <stop offset="1" stopColor="var(--green-bright)" />
          </linearGradient>
          <filter id="srgl"><feGaussianBlur stdDeviation="2" /></filter>
        </defs>
        {/* dim base path */}
        <path d={PATH} fill="none" stroke="rgba(212,175,55,.10)" strokeWidth="2.5" strokeLinecap="round" />
        {/* glow behind drawn portion */}
        <path d={PATH} fill="none" stroke="url(#srg)" strokeWidth="6" strokeLinecap="round"
          opacity={0.18} filter="url(#srgl)"
          strokeDasharray={pathLen} strokeDashoffset={pathLen * (1 - progress)}
          style={{ willChange: 'stroke-dashoffset' }} />
        {/* drawn line */}
        <path ref={pathRef} d={PATH} fill="none" stroke="url(#srg)" strokeWidth="2.6" strokeLinecap="round"
          strokeDasharray={pathLen} strokeDashoffset={pathLen * (1 - progress)}
          style={{ willChange: 'stroke-dashoffset' }} />
        {/* dashed unwalked remainder */}
        <path d={PATH} fill="none" stroke="rgba(212,175,55,.18)" strokeWidth="1" strokeLinecap="round"
          strokeDasharray="4 6"
          style={{ clipPath: `inset(${progress * 100}% 0 0 0)` }} />
        {/* leading edge marker — driven via ref for 60fps */}
        <circle ref={markerRef} r="4.2" fill="var(--gold)"
          style={{ filter: 'drop-shadow(0 0 6px var(--gold))' }} />
        {/* pins */}
        {PINS.map((pin, i) => {
          const passed = progress >= pin.y - 0.02;
          const pinY = pin.y * 2300 + 30;
          const xLookup = [60, 50, 78, 40, 16, 76, 50, 25, 80, 45, 18, 70, 55];
          const idx = Math.round(pin.y * (xLookup.length - 1));
          const pinX = xLookup[idx] ?? 55;
          return (
            <g key={i} className={`srp${passed ? ' passed' : ''}`}>
              <line x1={pinX - 30} y1={pinY} x2={pinX - 6} y2={pinY}
                stroke={passed ? 'var(--gold)' : 'rgba(212,175,55,.3)'} strokeWidth="1" />
              <circle cx={pinX} cy={pinY} r="4"
                fill={passed ? 'var(--gold)' : 'rgba(212,175,55,.25)'}
                stroke="var(--bg-base)" strokeWidth="1.5" />
              <text x={pinX - 36} y={pinY - 2} textAnchor="end" className="srp-l">{pin.label}</text>
              <text x={pinX - 36} y={pinY + 9} textAnchor="end" className="srp-s">{pin.sub}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
