import { useEffect, useRef } from "react";

type ParallaxBackgroundProps = {
  src: string;
  className?: string;
};

export function ParallaxBackground({
  src,
  className = "",
}: ParallaxBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;

    const updatePosition = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const bounds = background.getBoundingClientRect();
        const centerOffset =
          window.innerHeight / 2 - (bounds.top + bounds.height / 2);
        const offset = reduceMotion.matches
          ? 0
          : Math.max(-22, Math.min(22, centerOffset * 0.035));
        background.style.setProperty("--parallax-offset", `${offset}px`);
      });
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);
    reduceMotion.addEventListener("change", updatePosition);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      reduceMotion.removeEventListener("change", updatePosition);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`hero-parallax ${className}`.trim()}
      ref={backgroundRef}
    >
      <img alt="" className="hero-parallax__image" src={src} />
    </div>
  );
}
