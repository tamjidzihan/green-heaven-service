import { useEffect, useRef, useState, type RefObject } from "react";

export type ScrollRevealOptions = {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  disabled?: boolean;
};

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {},
): [RefObject<T>, boolean] {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -12% 0px",
    delay = 0,
    disabled = false,
  } = options;

  const elementRef = useRef<T>(null);

  const [isRevealed, setIsRevealed] = useState<boolean>(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return true;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return true;
    }
    return disabled;
  });

  useEffect(() => {
    if (isRevealed || disabled) return;

    if (!("IntersectionObserver" in window)) {
      setIsRevealed(true);
      return;
    }

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotionQuery.matches) {
      setIsRevealed(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    let timeoutId: number | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          if (delay > 0) {
            timeoutId = window.setTimeout(() => {
              setIsRevealed(true);
            }, delay);
          } else {
            setIsRevealed(true);
          }
          observer.unobserve(element);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      observer.disconnect();
    };
  }, [threshold, rootMargin, delay, disabled, isRevealed]);

  return [elementRef, isRevealed];
}
