const code = `
"use client";

import React, {useEffect, useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

interface CountUpLoadingProps {
  onLoadingComplete?: () => void;
  minimumDisplayTime?: number;
  fadeOut?: boolean;
}

const CountUpLoading: React.FC<CountUpLoadingProps> = ({
  onLoadingComplete,
  minimumDisplayTime = 3000,
  fadeOut = true,
}) => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [textWidth, setTextWidth] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const rectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const bbox = textRef.current.getBBox();
      setTextWidth(bbox.width);
    }
  }, [progress]);

  useGSAP(
    () => {
      if (rectRef.current) {
        gsap.to(rectRef.current, {
          width: (textWidth * progress) / 100,
          duration: 0.4,
          ease: "power1.out",
        });
      }
    },
    {dependencies: [progress, textWidth]}
  );

  useGSAP(
    () => {
      if (isReady && containerRef.current && fadeOut) {
        const tl = gsap.timeline({onComplete: onLoadingComplete});

        tl.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
        });
      }
    },
    {dependencies: [isReady]}
  );

  useEffect(() => {
    let startTime = Date.now();
    let interval: NodeJS.Timeout;

    const simulateProgress = () => {
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + (prev < 50 ? 1 : prev > 80 ? 0.5 : 1);
          if (next >= 99) {
            clearInterval(interval);
            const elapsed = Date.now() - startTime;
            const delay = Math.max(0, minimumDisplayTime - elapsed);
            setTimeout(() => setIsReady(true), delay);
            return 99;
          }
          return next;
        });
      }, 40);
    };

    simulateProgress();
    return () => clearInterval(interval);
  }, [minimumDisplayTime]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full z-50 flex items-center justify-center bg-background text-white"
    >
      <svg
        width="100%"
        viewBox="0 0 1000 300"
        className="max-w-3xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <mask id="fill-mask">
            <text
              ref={textRef}
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="250"
              fill="white"
              className="font-nohemi"
            >
              {Math.round(progress)}
            </text>
          </mask>
        </defs>

        <rect
          ref={rectRef}
          x={500 - textWidth / 2}
          y="0"
          height="100%"
          width="0"
          fill="white"
          mask="url(#fill-mask)"
        />

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="250"
          fill="transparent"
          stroke="white"
          strokeWidth="2"
          className="font-nohemi"
        >
          {Math.round(progress)}
        </text>
      </svg>
    </div>
  );
};

export default CountUpLoading;

`;

const propsData = [
  {
    property: "onLoadingComplete",
    type: "() => void",
    default: "undefined",
    description:
      "Callback function that fires once the count-up animation completes and the fade-out transition (if enabled) finishes.",
  },
  {
    property: "minimumDisplayTime",
    type: "number",
    default: "3000",
    description:
      "Minimum time in milliseconds the loading screen should remain visible, regardless of progress speed.",
  },
  {
    property: "fadeOut",
    type: "boolean",
    default: "true",
    description:
      "If true, the loading component will smoothly fade out once loading is complete.",
  },
];

export const countUpLoadingRaw = {
  installation: `npm i @gsap/react`,
  usage: `
<CountUpLoading />
  `,
  code: code,
  props: propsData,
};
