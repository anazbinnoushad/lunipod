"use client";

import type React from "react";
import { useRef } from "react";
import { gsap } from "gsap";

interface LiquidGlassButtonProps {
  icon?: React.ReactElement;
  text: string;
  subText?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const LiquidGlassButton = ({
  icon,
  text,
  subText,
  onClick,
}: LiquidGlassButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      ease: "power2.out",
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      ease: "power3.out",
      duration: 0.4,
    });
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group relative flex items-center gap-4 px-6 py-4 rounded-full backdrop-blur-xl bg-white/15 border border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.1),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:bg-white/20 hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.15),inset_0_1px_0_0_rgba(255,255,255,0.3)] transition-all duration-300 ease-out"
    >
      {icon && (
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-[0_4px_16px_0_rgba(255,255,255,0.2)] flex items-center justify-center group-hover:bg-white/95 transition-all duration-300">
          {icon}
        </div>
      )}

      <div className="flex flex-col items-start text-left">
        <span className="text-white font-semibold text-lg leading-tight">
          {text}
        </span>
        <span className="text-white/70 text-sm font-medium">{subText}</span>
      </div>

      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <div className="absolute -bottom-1 left-4 right-4 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent blur-sm"></div>
    </button>
  );
};

export default LiquidGlassButton;
