import { ArrowLeft, ArrowRight } from "lucide-react";
import { useId, useRef, useState, type PointerEvent } from "react";
import { ServiceCard } from "./ServiceCard";
import type { Service } from "../../data/services";
import { useScrollReveal } from "../../hooks/useScrollReveal";

type ServiceGridProps = {
  services: Service[];
  className?: string;
  horizontal?: boolean;
};

export function ServiceGrid({
  services,
  className = "",
  horizontal = false,
}: ServiceGridProps) {
  const [containerRef, isRevealed] = useScrollReveal<HTMLDivElement>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const pointerStart = useRef<{ id: number; x: number; scrollLeft: number } | null>(null);
  const movedPointer = useRef(false);
  const suppressClick = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const scroll = (direction: -1 | 1) => {
    const element = scrollRef.current;
    if (!element) return;
    element.scrollBy({
      left: direction * element.clientWidth * 0.8,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    pointerStart.current = {
      id: event.pointerId,
      x: event.clientX,
      scrollLeft: event.currentTarget.scrollLeft,
    };
    movedPointer.current = false;
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const start = pointerStart.current;
    if (!start || start.id !== event.pointerId) return;
    const delta = event.clientX - start.x;
    if (!movedPointer.current && Math.abs(delta) < 6) return;
    movedPointer.current = true;
    setIsDragging(true);
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    event.currentTarget.scrollLeft = start.scrollLeft - delta;
  };

  const finishPointer = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current?.id !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (movedPointer.current) {
      suppressClick.current = true;
      window.setTimeout(() => {
        suppressClick.current = false;
      }, 0);
    }
    pointerStart.current = null;
    movedPointer.current = false;
    setIsDragging(false);
  };

  const grid = (
    <div
      aria-label={horizontal ? "Browse services horizontally" : undefined}
      className={`service-grid gh-reveal-group${isRevealed ? " is-revealed" : ""}${horizontal ? " service-grid--horizontal" : ""}${isDragging ? " is-dragging" : ""} ${className}`.trim()}
      id={horizontal ? id : undefined}
      onClickCapture={(event) => {
        if (!suppressClick.current) return;
        event.preventDefault();
        event.stopPropagation();
      }}
      onPointerCancel={horizontal ? finishPointer : undefined}
      onPointerDown={horizontal ? handlePointerDown : undefined}
      onPointerMove={horizontal ? handlePointerMove : undefined}
      onPointerUp={horizontal ? finishPointer : undefined}
      ref={horizontal ? scrollRef : containerRef}
    >
      {services.map((service, index) => (
        <ServiceCard key={service.slug} service={service} staggerIndex={index} />
      ))}
    </div>
  );

  if (!horizontal) return grid;

  return (
    <div className="service-carousel" ref={containerRef}>
      {grid}
      <div className="service-carousel__controls">
        <p>Drag or scroll to explore all services</p>
        <div>
          <button
            aria-label="Scroll services left"
            className="service-carousel__button"
            onClick={() => scroll(-1)}
            type="button"
          >
            <ArrowLeft aria-hidden="true" size={18} />
          </button>
          <button
            aria-label="Scroll services right"
            className="service-carousel__button"
            onClick={() => scroll(1)}
            type="button"
          >
            <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
