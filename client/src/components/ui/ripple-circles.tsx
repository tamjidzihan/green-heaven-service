"use client";

import * as React from "react";

export interface RippleCirclesProps {
  children?: React.ReactNode;
  className?: string;
}

export const RippleCircles: React.FC<RippleCirclesProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`relative flex aspect-square h-[220px] items-center justify-center ${className}`.trim()}
    >
      {/* Soft radial glow behind the rings */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(143,180,217,0.18),transparent_70%)]" />

      {/* Concentric rings — each one ripples with a staggered delay */}
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          aria-hidden
          className="absolute rounded-full border border-[#8fb4d9]/25"
          style={{
            inset: `${i * 11}%`,
            animation: `ripplePulse 2.4s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.3}s infinite`,
          }}
        />
      ))}

      {/* Innermost solid ring that holds the content */}
      <span className="absolute inset-[38%] rounded-full border border-[#8fb4d9]/40 bg-[#04060a]/40 backdrop-blur-sm" />

      {children && (
        <div className="relative z-10 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};