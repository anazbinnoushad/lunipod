import React, {useEffect, useState, useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

interface CountUpLoadingProps {
  onLoadingComplete: () => void;
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

  const containerRef = useRef<HTMLDivElement>(null);
  const textFillRef = useRef<SVGRectElement>(null);
  const textMaskRef = useRef<SVGTextElement>(null);

  useGSAP(
    () => {
      if (textFillRef.current) {
        gsap.to(textFillRef.current, {
          width: `${progress}%`,
          duration: 0.4,
          ease: "power1.out",
        });
      }
    },
    {dependencies: [progress]}
  );
  console.log(progress);

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
          if (next >= 100) {
            clearInterval(interval);
            const elapsed = Date.now() - startTime;
            const delay = Math.max(0, minimumDisplayTime - elapsed);
            setTimeout(() => setIsReady(true), delay);
            return 100;
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
      className=" w-full h-full z-50 flex items-center justify-center bg-background text-white"
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
          ref={textFillRef}
          x="0"
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
