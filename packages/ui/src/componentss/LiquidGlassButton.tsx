"use client";

import type React from "react";

import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ArrowRight, Download, Play} from "lucide-react";
import "../styles.css";

interface LiquidGlassButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  icon?: "arrow" | "download" | "play";
  onClick?: () => void;
}

export default function LiquidGlassButton({
  children,
  variant = "primary",
  size = "md",
  icon,
  onClick,
}: LiquidGlassButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const gradient = gradientRef.current;
    const ripple = rippleRef.current;

    if (!button || !gradient || !ripple) return;

    // Initial animation
    gsap.fromTo(
      button,
      {
        opacity: 0,
        scale: 0.8,
        y: 20,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    );

    // Continuous gradient animation
    gsap.to(gradient, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "none",
    });

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(gradient, {
        scale: 1.2,
        duration: 0.3,
        ease: "power2.out",
      });

      // Shimmer effect
      gsap.fromTo(
        ripple,
        {x: "-100%", opacity: 0},
        {
          x: "100%",
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(gradient, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(ripple, {
        opacity: 0,
        duration: 0.2,
      });
    };

    const handleClick = (e: MouseEvent) => {
      // Click ripple effect
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const clickRipple = document.createElement("div");
      clickRipple.className =
        "absolute rounded-full bg-white/30 pointer-events-none";
      clickRipple.style.left = x + "px";
      clickRipple.style.top = y + "px";
      clickRipple.style.width = "0px";
      clickRipple.style.height = "0px";
      clickRipple.style.transform = "translate(-50%, -50%)";
      button.appendChild(clickRipple);

      gsap.to(clickRipple, {
        width: "200px",
        height: "200px",
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          clickRipple.remove();
        },
      });

      // Button press animation
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });

      if (onClick) onClick();
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      button.removeEventListener("click", handleClick);
    };
  }, [onClick]);

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-500/20 border-blue-400/30 text-white hover:bg-blue-400/30";
      case "secondary":
        return "bg-white/10 border-white/20 text-white hover:bg-white/20";
      case "accent":
        return "bg-purple-500/20 border-purple-400/30 text-white hover:bg-purple-400/30";
      default:
        return "bg-blue-500/20 border-blue-400/30 text-white hover:bg-blue-400/30";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "px-4 py-2 text-sm";
      case "md":
        return "px-6 py-3 text-base";
      case "lg":
        return "px-8 py-4 text-lg";
      default:
        return "px-6 py-3 text-base";
    }
  };

  const getGradientStyles = () => {
    switch (variant) {
      case "primary":
        return `
          radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.8) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.6) 0%, transparent 50%),
          linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(16, 185, 129, 0.4) 100%)
        `;
      case "secondary":
        return `
          radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(156, 163, 175, 0.3) 0%, transparent 50%),
          linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(156, 163, 175, 0.2) 100%)
        `;
      case "accent":
        return `
          radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.8) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.6) 0%, transparent 50%),
          linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.4) 100%)
        `;
      default:
        return `
          radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.8) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.6) 0%, transparent 50%),
          linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(16, 185, 129, 0.4) 100%)
        `;
    }
  };

  const renderIcon = () => {
    if (!icon) return null;

    const iconClass = "w-4 h-4 ml-2";
    switch (icon) {
      case "arrow":
        return <ArrowRight className={iconClass} />;
      case "download":
        return <Download className={iconClass} />;
      case "play":
        return <Play className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`
        relative overflow-hidden rounded-2xl font-medium
        backdrop-blur-xl border transition-all duration-300
        flex items-center justify-center
        ${getVariantStyles()}
        ${getSizeStyles()}
      `}
    >
      {/* Animated gradient background */}

      {/* Shimmer effect */}
      <div
        ref={rippleRef}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
        style={{
          transform: "skewX(-45deg)",
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center font-medium">
        {children}
        {renderIcon()}
      </span>

      {/* Inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/5 to-white/10 pointer-events-none" />
    </button>
  );
}
