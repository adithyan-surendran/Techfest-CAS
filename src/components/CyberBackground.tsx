import React, { useEffect, useRef } from 'react';

export const CyberBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    try {
      // Respect user's motion preferences
      const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) return;

    let animationFrameId: number;
    let isVisible = !document.hidden;

    // Detect mobile for particle scaling & optimization
    const isMobile = window.innerWidth < 768;
    // Cap devicePixelRatio to 2 max to prevent huge Retina memory allocations in WebKit
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    // Debounced resize listener
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeCanvas, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Pause canvas loop when browser tab is inactive to preserve battery & CPU
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      cancelAnimationFrame(animationFrameId);
      if (isVisible) {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // On iOS/mobile, pause canvas draws while scrolling so touch gestures get 100% frame rate
    let isScrolling = false;
    let scrollTimeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      if (!isMobile) return;
      isScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Particle nodes: reduced on mobile for iOS Safari smoothness
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }

    const colors = ['#00f0ff', '#ff007f', '#a855f7', '#38bdf8'];
    const particleCount = isMobile
      ? Math.min(Math.floor(width / 36), 22)
      : Math.min(Math.floor(width / 22), 60);

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.45),
        vy: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.45),
        radius: Math.random() * 1.6 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.25,
      });
    }

    // Mouse pointer interaction - only enabled on desktop pointer devices
    const supportsHover = window.matchMedia('(hover: hover)').matches;
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    if (supportsHover) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    const maxDist = isMobile ? 100 : 130;
    const maxMouseDist = 140;

    const render = () => {
      if (!isVisible) return;

      // On mobile devices, pause rendering during active scroll touches to leave 100% frame budget to the compositor
      if (isMobile && isScrolling) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Update particle positions
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      // 2. Batch render connected lines (1 single stroke call for entire frame)
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
      }
      ctx.strokeStyle = '#00f0ff';
      ctx.globalAlpha = 0.14;
      ctx.lineWidth = 0.75;
      ctx.stroke();

      // 3. Batch render pointer interaction (desktop only)
      if (supportsHover && mouseX > 0 && mouseY > 0) {
        ctx.beginPath();
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const mdx = p.x - mouseX;
          const mdy = p.y - mouseY;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < maxMouseDist) {
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseX, mouseY);
          }
        }
        ctx.strokeStyle = '#00f0ff';
        ctx.globalAlpha = 0.22;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // 4. Batch render particle dots
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (supportsHover) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      clearTimeout(resizeTimer);
      clearTimeout(scrollTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  } catch {
    // Graceful fallback if Brave Shields or strict privacy prevents canvas creation
  }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transform-gpu">
      {/* Background Gradient Mesh Orbs: optimized blur on mobile to protect WebKit compositor */}
      <div className="absolute -top-40 -left-40 w-80 sm:w-96 h-80 sm:h-96 bg-cyan-600/10 sm:bg-cyan-600/15 rounded-full blur-[60px] sm:blur-[120px] md:animate-pulse-slow" />
      <div className="absolute top-1/3 -right-40 w-72 sm:w-[30rem] h-72 sm:h-[30rem] bg-pink-600/10 rounded-full blur-[60px] sm:blur-[120px] md:animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-40 left-1/4 w-80 sm:w-[36rem] h-80 sm:h-[36rem] bg-purple-600/10 sm:bg-purple-600/15 rounded-full blur-[70px] sm:blur-[130px] md:animate-pulse-slow" style={{ animationDelay: '4s' }} />

      {/* Subtle Digital Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 sm:opacity-25" />

      {/* Interactive Particle Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
};
