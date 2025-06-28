const code = `
"use client";

import {useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
interface FlippingCardProps {
  frontFace: React.ReactNode;
  backFace: React.ReactNode;
}
const FlippingCard = ({frontFace, backFace}: FlippingCardProps) => {
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
        start: "top",
        end: "bottom center",
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="relative w-full max-w-sm h-[600px] [perspective:1000px]">
        <div
          ref={cardRef}
          className="relative w-full h-full transition-transform duration-100 [transform-style:preserve-3d]"
        >
          <div className="absolute inset-0 w-full h-[500px]  [backface-visibility:hidden]">
            {frontFace}
          </div>

          <div className="absolute inset-0 w-full h-[500px]  [backface-visibility:hidden] rotate-y-180">
            {backFace}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;

`;

const propsData = [
  {
    property: "frontFace",
    type: "React.ReactNode",
    default: "—",
    description: "Content to display on the front side of the flipping card.",
  },
  {
    property: "backFace",
    type: "React.ReactNode",
    default: "—",
    description: "Content to display on the back side of the flipping card.",
  },
];

export const flippingCardRaw = {
  installation: `npm i @gsap/react`,
  usage: `
<FlippingCard frontFace={<FrontFace />} backFace={<BackFace />} />
  `,
  code: code,
  props: propsData,
};
