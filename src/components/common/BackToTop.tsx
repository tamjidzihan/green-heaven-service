import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 500);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
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
