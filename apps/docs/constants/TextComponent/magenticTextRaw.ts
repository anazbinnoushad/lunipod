const code = `
"use client";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Draggable} from "gsap/Draggable";
import {InertiaPlugin} from "gsap/InertiaPlugin";
import "../../dist/styles.css";

gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin);

interface MagneticTextProps {
  text: string;
  className?: string;
}

export default function MagneticText({
  text,
  className = "",
}: MagneticTextProps) {
  const containerRef = useRef(null);
  const letterRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    letterRefs.current.forEach((el) => {
      const xRand = gsap.utils.random(-500, 500);
      const yRand = gsap.utils.random(-400, 400);
      gsap.set(el, {x: xRand, y: yRand, opacity: 0});
    });

    gsap.to(letterRefs.current, {
      x: 0,
      y: 0,
      opacity: 1,
      stagger: 0.05,
      ease: "power4.out",
      duration: 1.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        toggleActions: "play none none none",
      },
      onComplete: () => {
        letterRefs.current.forEach((el) => {
          Draggable.create(el, {
            type: "x,y",
            edgeResistance: 0.7,
            inertia: true,
            onPress() {
              gsap.to(el, {scale: 1.2, duration: 0.2});
            },
            onRelease() {
              gsap.to(el, {
                x: 0,
                y: 0,
                scale: 1,
                ease: "elastic.out(1, 0.4)",
                duration: 1.2,
              });
            },
          });
        });
      },
    });
  }, [text]);

  return (
    <section
      ref={containerRef}
      className={\`h-fit flex items-center justify-center \${className}\`}
    >
      <div className="flex space-x-4 font-bold text-5xl text-white">
        {text.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) letterRefs.current[i] = el;
            }}
            className="inline-block cursor-pointer"
          >
            {char === " " ? "\\u00A0" : char}
          </span>
        ))}
      </div>
    </section>
  );
}
`;

const propsData = [
  {
    property: "text",
    type: "string",
    default: "–",
    description:
      "The text content to be split and animated with magnetic draggable effects applied to each character.",
  },
  {
    property: "className",
    type: "string",
    default: '""',
    description:
      "Optional Tailwind CSS or custom class names to style the container section.",
  },
];

export const magneticTextRaw = {
  installation: `npm i @gsap/react`,
  usage: `
 <MagneticText text="OKSUNFON" />
  `,
  code: code,
  props: propsData,
};
