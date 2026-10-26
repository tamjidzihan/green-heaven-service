import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const hideTimeout = useRef<number | undefined>(undefined);

  useEffect(() => {
    const updateVisibility = () => {
      window.clearTimeout(hideTimeout.current);
      if (window.scrollY <= 500) {
        setIsVisible(false);
        return;
      }

      setIsVisible(true);
      hideTimeout.current = window.setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.clearTimeout(hideTimeout.current);
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <button
      aria-label="Back to top"
      className={`back-to-top${isVisible ? " back-to-top--visible" : ""}`}
      onClick={scrollToTop}
      tabIndex={isVisible ? 0 : -1}
      type="button"
    >
      <span>Back to top</span>
      <ArrowUp aria-hidden="true" size={17} />
    </button>
  );
}
