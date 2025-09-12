
import React, { useRef, useEffect } from 'react';

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle HiDPI for crisp rendering
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    let width = (canvas.width = Math.floor(window.innerWidth * dpr));
    let height = (canvas.height = Math.floor(window.innerHeight * dpr));
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(dpr, dpr);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      width = w;
      height = h;
    };
    window.addEventListener('resize', resize);

    const mouse = { x: width / 2, y: height / 2 };
    canvas.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    
    canvas.addEventListener('mouseleave', () => {
        mouse.x = width / 2;
        mouse.y = height / 2;
    })

    type ParticleType = 'dot' | 'star' | 'hex';

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      speedX: number;
      speedY: number;
      type: ParticleType;
      rot: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 1.2 + 0.6;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 1;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.type = (Math.random() < 0.75 ? 'dot' : (Math.random() < 0.5 ? 'star' : 'hex'));
        this.rot = Math.random() * Math.PI;
      }

      draw() {
        if(!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rot);
        const baseAlpha = 0.5;
        const distToMouse = Math.hypot(mouse.x - this.x, mouse.y - this.y);
        const proximityBoost = Math.max(0, 1 - distToMouse / 160);
        const alpha = baseAlpha * (0.6 + 0.8 * proximityBoost);
        const color = `rgba(234,234,234,${alpha})`;
        ctx.fillStyle = color;
        switch (this.type) {
          case 'dot':
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            break;
          case 'star': {
            const spikes = 5; const inner = this.size * 0.6; const outer = this.size * 1.6;
            ctx.beginPath();
            for (let i = 0; i < spikes * 2; i++) {
              const r = i % 2 === 0 ? outer : inner;
              const a = (i * Math.PI) / spikes;
              ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
            }
            ctx.closePath();
            ctx.fill();
            break; }
          case 'hex': {
            const r = this.size * 1.4;
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const a = (i / 6) * Math.PI * 2;
              ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
            }
            ctx.closePath();
            ctx.fill();
            break; }
        }
        ctx.restore();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width || this.x < 0) this.speedX *= -1;
        if (this.y > height || this.y < 0) this.speedY *= -1;

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = 100;
          let force = (maxDistance - distance) / maxDistance;
          let directionX = forceDirectionX * force * this.density * 0.2;
          let directionY = forceDirectionY * force * this.density * 0.2;

          this.x -= directionX;
          this.y -= directionY;
        }
        this.rot += 0.01 * (this.speedX + this.speedY);
      }
    }
    
    // Reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let particles: Particle[] = [];
    const baseCount = prefersReducedMotion ? 80 : 220;
    for (let i = 0; i < baseCount; i++) {
      particles.push(new Particle(Math.random() * width, Math.random() * height));
    }

    // Track scroll to modulate density and linking
    const scrollContainer = document.querySelector('.scroll-container');
    let scrollRatio = 0;
    const onScroll = () => {
      const el = (scrollContainer as HTMLElement) || document.documentElement;
      const max = (el.scrollHeight - (el.clientHeight || window.innerHeight)) || 1;
      const top = (el as HTMLElement).scrollTop ?? window.scrollY;
      scrollRatio = Math.max(0, Math.min(1, top / max));
    };
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', onScroll, { passive: true });
    } else {
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    // Collect attractor points from interactive elements (centers)
    type Point = { x: number; y: number };
    let attractors: Point[] = [];
    const refreshAttractors = () => {
      attractors = [];
      const els = document.querySelectorAll('.interactive');
      els.forEach((el) => {
        const r = (el as HTMLElement).getBoundingClientRect();
        attractors.push({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
      });
    };
    refreshAttractors();
    const attractorObserver = new ResizeObserver(() => refreshAttractors());
    attractorObserver.observe(document.body);

    // Mouse trail
    const trail: Point[] = [];
    let prevMouse = { x: mouse.x, y: mouse.y };
    canvas.addEventListener('mousemove', (e) => {
      trail.push({ x: e.clientX, y: e.clientY });
      if (trail.length > 16) trail.shift();
    });

    const connect = () => {
        if(!ctx) return;
        const baseDist = prefersReducedMotion ? 40 : 50;
        const connectDist = baseDist + 40 * scrollRatio; // more links when scrolled
        for (let a = 0; a < particles.length; a++) {
          for (let b = a + 1; b < particles.length; b++) {
            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;
            const distance = Math.hypot(dx, dy);
            if (distance > connectDist) continue;
            const opacityValue = 1 - distance / connectDist;

            // Color shift: stronger near attractors or mouse
            let influence = 0;
            const mx = (mouse.x + particles[a].x + particles[b].x) / 3;
            const my = (mouse.y + particles[a].y + particles[b].y) / 3;
            for (let i = 0; i < attractors.length; i++) {
              const ad = Math.hypot(mx - attractors[i].x, my - attractors[i].y);
              influence = Math.max(influence, Math.max(0, 1 - ad / 220));
            }
            const cyan = `rgba(0, 242, 255, ${0.15 + 0.5 * (opacityValue + influence)})`;
            const purple = `rgba(138, 43, 226, ${0.15 + 0.5 * (opacityValue + influence)})`;

            // Draw a subtle line with gradient
            const grad = ctx.createLinearGradient(particles[a].x, particles[a].y, particles[b].x, particles[b].y);
            grad.addColorStop(0, cyan);
            grad.addColorStop(1, purple);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
    };

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      // subtle vignette background layer based on scroll
      const vignette = Math.floor(10 + 20 * scrollRatio);
      const grd = ctx.createRadialGradient(width/2, height/2, Math.max(width, height) * 0.1, width/2, height/2, Math.max(width, height));
      grd.addColorStop(0, `rgba(10,10,10,0)`);
      grd.addColorStop(1, `rgba(10,10,10,${vignette/255})`);
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => { p.update(); p.draw(); });
      connect();

      // Mouse trail
      if (!prefersReducedMotion && trail.length > 1) {
        ctx.save();
        ctx.lineWidth = 1.2;
        for (let i = 1; i < trail.length; i++) {
          const t = i / (trail.length - 1);
          const a = 0.1 * (1 - t);
          const c1 = `rgba(0,242,255,${a})`;
          const c2 = `rgba(138,43,226,${a})`;
          const g = ctx.createLinearGradient(trail[i-1].x, trail[i-1].y, trail[i].x, trail[i].y);
          g.addColorStop(0, c1);
          g.addColorStop(1, c2);
          ctx.strokeStyle = g;
          ctx.beginPath();
          ctx.moveTo(trail[i-1].x, trail[i-1].y);
          ctx.lineTo(trail[i].x, trail[i].y);
          ctx.stroke();
        }
        ctx.restore();
      }

      prevMouse = { ...mouse };
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      if (scrollContainer) scrollContainer.removeEventListener('scroll', onScroll as EventListener);
      else window.removeEventListener('scroll', onScroll as EventListener);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};

export default BackgroundCanvas;
