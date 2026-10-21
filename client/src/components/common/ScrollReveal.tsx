import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { useScrollReveal, type ScrollRevealOptions } from "../../hooks/useScrollReveal";

export type ScrollRevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  threshold?: number;
  rootMargin?: string;
  style?: CSSProperties;
  id?: string;
  options?: ScrollRevealOptions;
};

export function ScrollReveal({
  as: Component = "div",
  children,
  className = "",
  delay,
  stagger = false,
  threshold,
  rootMargin,
  style,
  id,
  options,
}: ScrollRevealProps) {
  const [ref, isRevealed] = useScrollReveal<HTMLElement>({
    delay: delay ?? options?.delay,
    threshold: threshold ?? options?.threshold,
    rootMargin: rootMargin ?? options?.rootMargin,
    disabled: options?.disabled,
  });

  const baseClass = stagger ? "gh-reveal-group" : "gh-reveal";
  const revealedClass = isRevealed ? "is-revealed" : "";
  const combinedClassName = [baseClass, revealedClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      className={combinedClassName}
      id={id}
      ref={ref}
      style={style}
    >
      {children}
    </Component>
  );
}
