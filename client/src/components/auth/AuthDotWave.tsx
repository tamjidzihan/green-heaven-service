import { useEffect, useRef } from "react";

interface AuthDotWaveProps {
  mouseX: number;
  mouseY: number;
  mouseActive: boolean;
}

export function AuthDotWave({ mouseX, mouseY, mouseActive }: AuthDotWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: mouseX, y: mouseY, active: mouseActive });

  // Keep mouseRef updated with latest coordinates without restarting animation loop
  useEffect(() => {
    mouseRef.current = { x: mouseX, y: mouseY, active: mouseActive };
  }, [mouseX, mouseY, mouseActive]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const resizeObserver = new ResizeObserver(() => resize());
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = mediaQuery.matches;
    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    const step = 28; // Grid spacing between dots
    const hoverRadius = 190; // Interaction radius around cursor

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const t = prefersReducedMotion ? 0 : time * 0.0016;
      const { x: curX, y: curY, active: isHovering } = mouseRef.current;

      // 1. Soft atmospheric cursor glow on the canvas
      if (isHovering && curX >= 0 && curY >= 0) {
        const aura = ctx.createRadialGradient(curX, curY, 0, curX, curY, hoverRadius);
        aura.addColorStop(0, "rgba(143, 180, 217, 0.14)");
        aura.addColorStop(0.45, "rgba(36, 74, 58, 0.07)");
        aura.addColorStop(1, "rgba(4, 6, 10, 0)");
        ctx.fillStyle = aura;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Compute and draw undulating dot matrix
      const cols = Math.ceil(width / step) + 2;
      const rows = Math.ceil(height / step) + 2;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const baseX = c * step;
          const baseY = r * step;

          // Continuous wave calculation
          const wave = prefersReducedMotion
            ? 0
            : Math.sin(baseX * 0.008 + t) * Math.cos(baseY * 0.007 + t * 0.8);

          // Dot position with wave height displacement
          const dotX = baseX;
          const dotY = baseY + wave * 7;

          // Mouse interaction calculation
          let hoverIntensity = 0;
          if (isHovering) {
            const dx = dotX - curX;
            const dy = dotY - curY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < hoverRadius) {
              // Smooth cosine decay for natural illumination
              hoverIntensity = Math.pow(1 - dist / hoverRadius, 1.8);
            }
          }

          // Dot size: Base 1.2px, swells with wave and cursor proximity
          const radius = 1.15 + (wave + 1) * 0.25 + hoverIntensity * 1.85;

          // Dot color & lighting
          if (hoverIntensity > 0.05) {
            // Illuminated by cursor: Frost blue glow
            const alpha = Math.min(0.95, 0.12 + hoverIntensity * 0.85);
            ctx.fillStyle = `rgba(143, 180, 217, ${alpha})`;

            // Soft bloom halo for dots directly under cursor
            if (hoverIntensity > 0.45) {
              ctx.beginPath();
              ctx.arc(dotX, dotY, radius * 2.2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(143, 180, 217, ${hoverIntensity * 0.18})`;
              ctx.fill();
              ctx.fillStyle = `rgba(185, 215, 239, ${alpha})`;
            }
          } else {
            // Ambient wave dot: Muted translucent ink/frost
            const baseAlpha = 0.055 + (wave + 1) * 0.035;
            ctx.fillStyle = `rgba(245, 247, 250, ${baseAlpha})`;
          }

          ctx.beginPath();
          ctx.arc(dotX, dotY, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return <canvas aria-hidden="true" className="auth-brand-dot-canvas" ref={canvasRef} />;
}
