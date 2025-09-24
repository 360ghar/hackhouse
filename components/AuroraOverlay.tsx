import React, { useEffect, useRef } from 'react';

const AuroraOverlay: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let tx = mx, ty = my;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      mx = t.clientX;
      my = t.clientY;
    };

    const tick = () => {
      // ease towards mouse / touch
      tx += (mx - tx) * 0.06;
      ty += (my - ty) * 0.06;
      root.style.setProperty('--mx', `${tx}px`);
      root.style.setProperty('--my', `${ty}px`);
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
    <div ref={rootRef} className="pointer-events-none fixed inset-0 z-5 aurora-root">
      {/* Soft aurora blobs */}
      <div className="aurora-blob aurora-a" />
      <div className="aurora-blob aurora-b" />
      <div className="aurora-blob aurora-c" />
      {/* Scanline and grain layers */}
      <div className="visual-noise" />
      <div className="scanlines" />
    </div>
  );
};

export default AuroraOverlay;