import { useEffect, useMemo, useRef, useState } from "react";

type ParallaxBackgroundProps = {
  src?: string;
  images?: string[];
  interval?: number;
  className?: string;
  activeIndex?: number;
  onIndexChange?: (index: number) => void;
};

export function ParallaxBackground({
  src,
  images,
  interval = 4000,
  className = "",
  activeIndex: controlledIndex,
  onIndexChange,
}: ParallaxBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const imageList = useMemo(
    () => (images && images.length > 0 ? images : src ? [src] : []),
    [images, src],
  );
  const [internalIndex, setInternalIndex] = useState(0);

  const isControlled = typeof controlledIndex === "number";
  const currentIndex = isControlled ? controlledIndex : internalIndex;

  // Preload images to prevent blank frames or transition flashes
  useEffect(() => {
    if (imageList.length <= 1) return;
    imageList.forEach((imgSrc) => {
      const img = new Image();
      img.src = imgSrc;
    });
  }, [imageList]);

  // Automatic smooth transition with interval (defaults to 3s / 3000ms)
  useEffect(() => {
    if (imageList.length <= 1) return;

    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % imageList.length;
      if (isControlled && onIndexChange) {
        onIndexChange(nextIndex);
      } else {
        setInternalIndex(nextIndex);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [imageList.length, interval, isControlled, onIndexChange, currentIndex]);

  // Parallax scroll position tracking
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
      {imageList.map((imgSrc, index) => {
        const isActive = index === currentIndex;
        return (
          <img
            key={imgSrc}
            alt=""
            className={`hero-parallax__image ${
              isActive
                ? "hero-parallax__image--active"
                : "hero-parallax__image--inactive"
            }`}
            src={imgSrc}
            loading={index === 0 ? "eager" : "lazy"}
          />
        );
      })}
    </div>
  );
}
