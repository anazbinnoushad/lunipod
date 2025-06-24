"use client";

import {ReactElement, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
interface FlipCardProps {
  frontFace: React.ReactNode;
  backFace: React.ReactNode;
}
const FlipCard = ({frontFace, backFace}: FlipCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const card = cardRef.current;
    const container = containerRef.current;

    if (!card || !container) return;

    gsap.to(card, {
      rotationY: 180,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "bottom center",
        scrub: true,
        pin: true,
        markers: false, // Set to true for debugging
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="relative w-full max-w-sm h-[600px] perspective-1000">
        <div
          ref={cardRef}
          className="relative w-full h-full transition-transform duration-100 transform-style-preserve-3d"
        >
          {/* Front Side */}
          <div className="absolute inset-0 w-full h-[500px] backface-hidden">
            {frontFace}
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 w-full h-[500px] backface-hidden rotate-y-180">
            {backFace}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
