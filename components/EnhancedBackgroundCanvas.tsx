import React, { useRef, useEffect } from 'react';

const EnhancedBackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Neural Network Nodes
    class NeuralNode {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      vx: number;
      vy: number;
      pulsePhase: number;
      type: 'primary' | 'secondary' | 'quantum';
      energy: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 2 + 1;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.pulsePhase = Math.random() * Math.PI * 2;
        const rand = Math.random();
        this.type = rand < 0.6 ? 'primary' : rand < 0.9 ? 'secondary' : 'quantum';
        this.energy = 0;
      }

      update(time: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x > width || this.x < 0) this.vx *= -1;
        if (this.y > height || this.y < 0) this.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          const force = (120 - distance) / 120;
          this.energy = Math.min(1, this.energy + force * 0.1);
          
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * force * 2;
          this.y += Math.sin(angle) * force * 2;
        } else {
          this.energy *= 0.95;
        }

        this.pulsePhase += 0.05;
      }

      draw(time: number) {
        if (!ctx) return;
        
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        const energyBoost = this.energy * 2;
        const finalSize = this.size * pulse * (1 + energyBoost);

        // Glow effect
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, finalSize * 4);
        
        switch (this.type) {
          case 'primary':
            gradient.addColorStop(0, `rgba(0, 242, 255, ${0.6 + this.energy})`);
            gradient.addColorStop(0.5, `rgba(0, 242, 255, ${0.2 + this.energy * 0.5})`);
            gradient.addColorStop(1, 'rgba(0, 242, 255, 0)');
            break;
          case 'secondary':
            gradient.addColorStop(0, `rgba(138, 43, 226, ${0.6 + this.energy})`);
            gradient.addColorStop(0.5, `rgba(138, 43, 226, ${0.2 + this.energy * 0.5})`);
            gradient.addColorStop(1, 'rgba(138, 43, 226, 0)');
            break;
          case 'quantum':
            gradient.addColorStop(0, `rgba(255, 0, 110, ${0.8 + this.energy})`);
            gradient.addColorStop(0.5, `rgba(255, 0, 110, ${0.3 + this.energy * 0.5})`);
            gradient.addColorStop(1, 'rgba(255, 0, 110, 0)');
            break;
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, finalSize * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = this.type === 'quantum' ? '#FF006E' : this.type === 'primary' ? '#00F2FF' : '#8A2BE2';
        ctx.beginPath();
        ctx.arc(this.x, this.y, finalSize, 0, Math.PI * 2);
        ctx.fill();

        // Energy ring for quantum nodes
        if (this.type === 'quantum' && this.energy > 0.3) {
          ctx.strokeStyle = `rgba(255, 0, 110, ${this.energy})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(this.x, this.y, finalSize * 6, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    }

    // Data Streams
    class DataStream {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      progress: number;
      speed: number;
      color: string;
      particles: Array<{ offset: number; size: number }>;

      constructor(x: number, y: number, targetX: number, targetY: number) {
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;
        this.progress = 0;
        this.speed = 0.01 + Math.random() * 0.02;
        this.color = Math.random() < 0.5 ? '#00F2FF' : '#8A2BE2';
        this.particles = [];
        
        for (let i = 0; i < 5; i++) {
          this.particles.push({
            offset: i * 0.2,
            size: Math.random() * 2 + 1
          });
        }
      }

      update() {
        this.progress += this.speed;
        return this.progress < 1;
      }

      draw() {
        if (!ctx) return;
        
        this.particles.forEach(particle => {
          const p = Math.min(1, this.progress + particle.offset);
          if (p > 1) return;
          
          const x = this.x + (this.targetX - this.x) * p;
          const y = this.y + (this.targetY - this.y) * p;
          
          const alpha = Math.sin(p * Math.PI) * 0.8;
          ctx.fillStyle = this.color.replace(')', `, ${alpha})`).replace('rgb', 'rgba');
          ctx.beginPath();
          ctx.arc(x, y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }

    const nodes: NeuralNode[] = [];
    const area = width * height;
    const nodeCount = Math.max(60, Math.min(150, Math.round(area / (prefersReducedMotion ? 20000 : 15000))));
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new NeuralNode(Math.random() * width, Math.random() * height));
    }

    let dataStreams: DataStream[] = [];
    let lastStreamTime = 0;

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

    const connectNodes = (time: number) => {
      if (!ctx) return;
      
      const connectDist = 80 + scrollRatio * 50;
      
      for (let a = 0; a < nodes.length; a++) {
        for (let b = a + 1; b < nodes.length; b++) {
          const dx = nodes[a].x - nodes[b].x;
          const dy = nodes[a].y - nodes[b].y;
          const distance = Math.hypot(dx, dy);
          
          if (distance > connectDist) continue;
          
          const opacity = (1 - distance / connectDist) * 0.4;
          const energyBoost = (nodes[a].energy + nodes[b].energy) / 2;
          
          // Determine line color based on node types
          let color1, color2;
          if (nodes[a].type === 'quantum' || nodes[b].type === 'quantum') {
            color1 = `rgba(255, 0, 110, ${opacity + energyBoost * 0.5})`;
            color2 = `rgba(138, 43, 226, ${opacity + energyBoost * 0.5})`;
          } else {
            color1 = `rgba(0, 242, 255, ${opacity + energyBoost * 0.5})`;
            color2 = `rgba(138, 43, 226, ${opacity + energyBoost * 0.5})`;
          }
          
          const gradient = ctx.createLinearGradient(nodes[a].x, nodes[a].y, nodes[b].x, nodes[b].y);
          gradient.addColorStop(0, color1);
          gradient.addColorStop(1, color2);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1 + energyBoost;
          ctx.beginPath();
          ctx.moveTo(nodes[a].x, nodes[a].y);
          ctx.lineTo(nodes[b].x, nodes[b].y);
          ctx.stroke();
          
          // Data stream particles
          if (energyBoost > 0.5 && Math.random() < 0.005) {
            dataStreams.push(new DataStream(nodes[a].x, nodes[a].y, nodes[b].x, nodes[b].y));
          }
        }
      }
    };

    let animationFrameId: number;
    let startTime = Date.now();
    
    const animate = () => {
      const currentTime = (Date.now() - startTime) / 1000;
      
      // Background with subtle vignette
      const vignette = 15 + scrollRatio * 25;
      const grd = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, Math.max(width, height));
      grd.addColorStop(0, 'rgba(10, 10, 10, 0)');
      grd.addColorStop(1, `rgba(10, 10, 10, ${vignette / 255})`);
      ctx.fillStyle = 'rgba(10, 10, 10, 0.4)';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);

      // Update and draw neural network
      connectNodes(currentTime);
      nodes.forEach(node => {
        node.update(currentTime);
        node.draw(currentTime);
      });

      // Update and draw data streams
      dataStreams = dataStreams.filter(stream => {
        const alive = stream.update();
        stream.draw();
        return alive;
      });

      // Grid overlay (subtle)
      if (!prefersReducedMotion) {
        ctx.strokeStyle = 'rgba(0, 242, 255, 0.03)';
        ctx.lineWidth = 1;
        const gridSize = 50;
        for (let x = 0; x < width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }

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

export default EnhancedBackgroundCanvas;
