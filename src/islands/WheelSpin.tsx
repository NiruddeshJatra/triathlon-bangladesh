import { useEffect } from 'react';

export default function WheelSpin() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const wheels = Array.from(
      document.querySelectorAll<SVGSVGElement>('.cmhm-wheel-divider svg')
    );
    if (!wheels.length) return;

    wheels.forEach(svg => { svg.style.willChange = 'transform'; });

    let pending = false;

    function tick() {
      pending = false;
      const vh = window.innerHeight;
      wheels.forEach(svg => {
        const rect = svg.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const progress = (vh / 2 - centerY) / vh;
        svg.style.transform = `rotate(${(progress * 360).toFixed(2)}deg)`;
      });
    }

    function onScroll() {
      if (!pending) {
        pending = true;
        requestAnimationFrame(tick);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    tick();

    return () => {
      window.removeEventListener('scroll', onScroll);
      wheels.forEach(svg => { svg.style.willChange = ''; svg.style.transform = ''; });
    };
  }, []);

  return null;
}
