import { useState, useEffect, useRef } from 'react';

interface Props {
  end: number;
  dur?: number;
}

export default function CountUp({ end, dur = 1400 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((ent) => {
        if (ent.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / dur);
            setV(end * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [end, dur]);

  const isFloat = end % 1 !== 0;
  return <span ref={ref}>{isFloat ? v.toFixed(1) : Math.round(v)}</span>;
}
