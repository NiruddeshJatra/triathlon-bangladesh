import { useState, useEffect } from 'react';

interface Slide {
  id: string;
  name: string;
  distance: string;
  finish: string;
  front: string;
  back: string;
  color: string;
  glow: string;
  blurb: string;
}

const slides: Slide[] = [
  {
    id: '21k',
    name: 'Half Marathon',
    distance: '21.1 KM',
    finish: 'GOLD',
    front: '/assets/medal-gold-front.jpg',
    back: '/assets/medal-gold-back.jpg',
    color: '#D4AF37',
    glow: 'rgba(212,175,55,.32)',
    blurb: 'The full Karnaphuli. Antique gold with high-relief enamel — Shah Amanat bridge, container terminal, the city clocktower, and the runner cresting the wave.',
  },
  {
    id: '10k',
    name: '10K Run',
    distance: '10 KM',
    finish: 'SILVER',
    front: '/assets/medal-silver-front.jpg',
    back: '/assets/medal-silver-back.jpg',
    color: '#C6CDD0',
    glow: 'rgba(198,205,208,.32)',
    blurb: 'Riverside loop. Antique silver with the same hand-painted enamel scene — half the distance, the full hardware.',
  },
  {
    id: '5k',
    name: 'Beginners Run',
    distance: '5 KM',
    finish: 'BRONZE',
    front: '/assets/medal-bronze-front.jpg',
    back: '/assets/medal-bronze-back.jpg',
    color: '#B5743A',
    glow: 'rgba(181,116,58,.32)',
    blurb: "Your first start line. Antique bronze — same ship's-wheel rim, same enamel river. Cross the finish, take the helm.",
  },
];

export default function MedalCarousel() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setIdx((i) => (i + 1) % slides.length);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, [paused]);

  const cur = slides[idx];

  return (
    <div
      className="medal-cx"
      style={{ '--m-glow': cur.glow, '--m-glow-solid': cur.color } as React.CSSProperties}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="medal-radial" />
      <div className="medal-cx-stage">
        {slides.map((s, i) => (
          <div key={s.id} className={`medal-slide${i === idx ? ' active' : ''}`}>
            <img src={s.front} alt={`${s.distance} ${s.finish} finisher medal`} loading="lazy" />
          </div>
        ))}
        <button className="medal-cx-nav prev" onClick={prev} aria-label="Previous medal">‹</button>
        <button className="medal-cx-nav next" onClick={next} aria-label="Next medal">›</button>
      </div>
      <div className="medal-cx-meta">
        <div>
          <div className="mcm-l">{cur.distance} · {cur.name}</div>
          <div className="mcm-s">{cur.blurb.split('.')[0]}</div>
        </div>
        <div className="mcm-finish">{cur.finish}</div>
      </div>
      <div className="medal-cx-tabs">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={`medal-cx-tab${i === idx ? ' active' : ''}`}
            style={{ '--tab-color': s.color } as React.CSSProperties}
            onClick={() => setIdx(i)}
            aria-label={`Show ${s.distance} medal`}
          >
            <div className="t-k">{s.distance}</div>
            <div className="t-s">{s.finish}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
