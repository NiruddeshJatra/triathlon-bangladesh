import { useState, useEffect, useRef } from 'react';
import { medals } from '../data/event';
import { prefersReducedMotion } from './prefersReducedMotion';

const slides = medals;

export default function MedalCarousel() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(prefersReducedMotion());

  const next = () => setIdx((i) => (i + 1) % slides.length);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused || reducedMotion.current) return;
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
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
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
        <button
          type="button"
          className="medal-cx-pause"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
          aria-pressed={paused}
        >
          {paused ? '▶' : '⏸'}
        </button>
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
