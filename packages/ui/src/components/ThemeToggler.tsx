"use client";
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

const ThemeToggler = () => {
  const [isDark, setIsDark] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const raysRef = useRef<SVGCircleElement[]>([]);
  const starsRef = useRef<SVGCircleElement[]>([]);

  const sunPath = "M50,25A25,25 0 1,0 50,75A25,25 0 1,0 50,25Z";
  const moonPath = "M50,25A25,25 0 1,0 50,75A18,25 0 1,1 50,25Z";

  useEffect(() => {
    const tl = gsap.timeline({defaults: {duration: 0.6, ease: "power2.inOut"}});

    tl.to(pathRef.current, {
      morphSVG: isDark ? sunPath : moonPath,
      fill: isDark ? "#facc15" : "#93c5fd",
    });

    tl.fromTo(
      svgRef.current,
      {rotate: isDark ? 0 : 0},
      {rotate: isDark ? -180 : 180},
      0
    );

    raysRef.current.forEach((ray, i) => {
      tl.to(
        ray,
        {
          opacity: isDark ? 1 : 0,
          scale: isDark ? 1 : 0,
          duration: 0.3,
        },
        0.1 + i * 0.05
      );
    });

    starsRef.current.forEach((star, i) => {
      tl.to(
        star,
        {
          opacity: isDark ? 0 : 1,
          scale: isDark ? 0 : 1,
          duration: 0.3,
        },
        0.1 + i * 0.05
      );
    });

    document.documentElement.classList.toggle("dark", !isDark);
  }, [isDark]);

  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      onClick={handleToggle}
      className="w-20 h-20 rounded-full bg-gradient-to-br from-white/30 to-gray-200/10 dark:from-slate-900/30 dark:to-slate-800/10 backdrop-blur-xl shadow-lg flex items-center justify-center transition"
    >
      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        width={48}
        height={48}
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform"
      >
        {/* Main Shape */}
        <path ref={pathRef} d={sunPath} fill="#facc15" stroke="none" />

        {/* Sun Rays */}
        {[...Array(8)].map((_, i) => (
          <circle
            key={`ray-${i}`}
            ref={(el) => {
              raysRef.current[i] = el!;
            }}
            cx={50 + 35 * Math.cos((i * Math.PI) / 4)}
            cy={50 + 35 * Math.sin((i * Math.PI) / 4)}
            r="3"
            fill="#fcd34d"
            opacity={isDark ? 1 : 0}
          />
        ))}

        {/* Stars (strategically placed outside moon area) */}
        {[
          {x: 80, y: 80},
          {x: 0, y: 85},
          {x: 60, y: 20},
          {x: 70, y: 70},
          {x: 10, y: 10},
        ].map((pos, i) => (
          <circle
            key={`star-${i}`}
            ref={(el) => {
              starsRef.current[i] = el!;
            }}
            cx={pos.x}
            cy={pos.y}
            r="1.5"
            fill="#dbeafe"
            opacity={isDark ? 0 : 1}
          />
        ))}
      </svg>
    </button>
  );
};

export default ThemeToggler;
