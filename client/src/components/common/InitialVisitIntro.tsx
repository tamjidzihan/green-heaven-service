import { useEffect, useState } from "react";
import { RippleCircles } from "@/components/ui/ripple-circles";

const STORAGE_KEY = "gh_initial_intro_completed";

export function InitialVisitIntro() {
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  useEffect(() => {
    const hasVisited = window.sessionStorage.getItem(STORAGE_KEY);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (hasVisited || prefersReducedMotion) return;

    setShouldShow(true);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const duration = 1800;
    const startTime = performance.now();
    let animationFrameId: number;

    const animateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const currentProgress = Math.min(
        100,
        Math.floor((elapsed / duration) * 100),
      );
      setProgress(currentProgress);

      if (currentProgress < 100) {
        animationFrameId = requestAnimationFrame(animateProgress);
      } else {
        window.setTimeout(() => {
          setIsFadingOut(true);
          window.sessionStorage.setItem(STORAGE_KEY, "true");
          window.setTimeout(() => {
            setShouldShow(false);
            document.body.style.overflow = originalOverflow;
          }, 450);
        }, 150);
      }
    };

    animationFrameId = requestAnimationFrame(animateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleSkip = () => {
    setIsFadingOut(true);
    window.sessionStorage.setItem(STORAGE_KEY, "true");
    window.setTimeout(() => {
      setShouldShow(false);
      document.body.style.overflow = "";
    }, 300);
  };

  if (!shouldShow) return null;

  return (
    <div
      aria-label="Site loading animation"
      aria-live="polite"
      role="status"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#04060a] text-[#f5f7fa] transition-opacity duration-500 ease-out ${isFadingOut ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
    >
      {/* Subtle vignette for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.55))]" />

      <div
        className="relative flex flex-col items-center justify-center"
        style={{ animation: "introFadeIn 600ms ease-out both" }}
      >
        <RippleCircles>
          <div className="flex flex-col items-center justify-center select-none">
            {/* Smaller, tabular numerals so the width doesn't jitter */}
            <span className="font-mono text-lg font-semibold tracking-tight text-[#f5f7fa] tabular-nums sm:text-2xl">
              {progress}
              <span className="ml-0.5 text-sm text-[#8fb4d9]">%</span>
            </span>
            <span className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#008a3c]/90">
              Green Heaven Service
            </span>
          </div>
        </RippleCircles>

        {/* Thin progress bar adds a second, quieter read of progress */}
        <div className="mt-7 h-px w-40 overflow-hidden rounded-full bg-[#8fb4d9]/15">
          <div
            className="h-full bg-gradient-to-r from-[#8fb4d9]/40 to-[#8fb4d9] transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#c3cad6]/70">
          Quality Service At Minimum Cost
        </p>

        <button
          type="button"
          onClick={handleSkip}
          className="mt-6 text-[10px] uppercase tracking-[0.2em] text-[#8fb4d9]/60 transition-colors hover:text-[#8fb4d9] focus-visible:outline-none focus-visible:underline"
        >
          Skip intro
        </button>
      </div>
    </div>
  );
}