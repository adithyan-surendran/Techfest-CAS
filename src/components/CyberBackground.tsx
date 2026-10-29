import React, { useEffect, useRef } from 'react';

export const CyberBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes
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
    const particleCount = Math.min(Math.floor(width / 22), 65);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.25,
      });
    }

    // Mouse interactive coordinates
    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render connected lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move particles
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce from boundaries
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = p1.alpha;
        ctx.shadowColor = p1.color;
        ctx.shadowBlur = 8;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = (1 - dist / 130) * 0.18;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Connect to mouse pointer
        const mdx = p1.x - mouseX;
        const mdy = p1.y - mouseY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 160) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = '#00f0ff';
          ctx.globalAlpha = (1 - mDist / 160) * 0.28;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Gradient Mesh Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-[128px] animate-pulse-slow"></div>
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-pink-600/10 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-40 left-1/4 w-[36rem] h-[36rem] bg-purple-600/15 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      
      {/* Subtle Digital Grid */}
      <div className="absolute inset-0 cyber-grid opacity-25"></div>

      {/* Interactive Particle Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
