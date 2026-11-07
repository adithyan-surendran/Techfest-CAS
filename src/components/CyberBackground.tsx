import React, { useEffect, useRef } from 'react';

export const CyberBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = !document.hidden;

    // Detect mobile for particle scaling & optimization
    const isMobile = window.innerWidth < 768 || (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0);
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
      if (isVisible) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

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

      ctx.clearRect(0, 0, width, height);

      // Render connected lines & particle dots
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move particles
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce from boundaries
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw particle dot without expensive shadowBlur (which stalls WebKit CPU rasterizer)
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = p1.alpha;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = (1 - dist / maxDist) * 0.16;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Connect to desktop mouse pointer
        if (supportsHover && mouseX > 0 && mouseY > 0) {
          const mdx = p1.x - mouseX;
          const mdy = p1.y - mouseY;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < maxMouseDist) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = '#00f0ff';
            ctx.globalAlpha = (1 - mDist / maxMouseDist) * 0.25;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (supportsHover) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      clearTimeout(resizeTimer);
      cancelAnimationFrame(animationFrameId);
    };
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
