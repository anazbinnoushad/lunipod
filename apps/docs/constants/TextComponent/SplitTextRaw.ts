const code = `
"use client";

import React, {useRef, ReactNode, ReactElement, isValidElement} from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface SplitTextProps {
  children: ReactNode;
  type?: "lines" | "words" | "chars" | "lines,words,chars";
  animateOnScroll?: boolean;
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  triggerStart?: string;
  triggerEnd?: string;
  once?: boolean;
  className?: string;
}

interface SplitTextInstance {
  lines: Element[];
  words: Element[];
  chars: Element[];
  revert: () => void;
}

export default function RealSplitText({
  children,
  type = "lines",
  animateOnScroll = true,
  delay = 0,
  duration = 1,
  stagger = 0.1,
  ease = "power4.out",
  triggerStart = "top 75%",
  triggerEnd = "bottom top",
  once = true,
  className,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const elementRef = useRef<HTMLElement[]>([]);
  const splitRef = useRef<SplitTextInstance[]>([]);
  const elementsToAnimate = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRef.current = [];
      elementRef.current = [];
      elementsToAnimate.current = [];

      let elements: HTMLElement[] = [];

      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children) as HTMLElement[];
      } else {
        elements = [containerRef.current as HTMLElement];
      }

      elements.forEach((element) => {
        elementRef.current.push(element);

        const split = new SplitText(element, {
          type,
          linesClass: "line++",
        });

        splitRef.current.push(split);

        if (type.includes("lines")) {
          const computedStyle = window.getComputedStyle(element);
          const textIndent = computedStyle.textIndent;

          if (textIndent && textIndent !== "0px") {
            const firstLine = split.lines?.[0];
            if (firstLine instanceof HTMLElement) {
              firstLine.style.paddingLeft = textIndent;
            }
            element.style.textIndent = "0";
          }
        }

        if (type === "lines") {
          elementsToAnimate.current.push(
            ...split.lines.filter(
              (el): el is HTMLElement => el instanceof HTMLElement
            )
          );
        } else if (type === "words") {
          elementsToAnimate.current.push(
            ...split.words.filter(
              (el): el is HTMLElement => el instanceof HTMLElement
            )
          );
        } else if (type === "chars") {
          elementsToAnimate.current.push(
            ...split.chars.filter(
              (el): el is HTMLElement => el instanceof HTMLElement
            )
          );
        } else {
          elementsToAnimate.current.push(
            ...split.lines.filter(
              (el): el is HTMLElement => el instanceof HTMLElement
            ),
            ...split.words.filter(
              (el): el is HTMLElement => el instanceof HTMLElement
            ),
            ...split.chars.filter(
              (el): el is HTMLElement => el instanceof HTMLElement
            )
          );
        }
      });

      // Initial animation state
      gsap.set(elementsToAnimate.current, {
        y: "100%",
        opacity: 0,
        rotateX: 5,
        transformOrigin: "top center",
      });

      const animationProps = {
        y: "0%",
        opacity: 1,
        rotateX: 0,
        delay,
        duration,
        stagger,
        ease,
      };

      if (animateOnScroll) {
        gsap.to(elementsToAnimate.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: triggerStart,
            end: triggerEnd,
            once,
          },
        });
      } else {
        gsap.to(elementsToAnimate.current, animationProps);
      }

      return () => {
        splitRef.current.forEach((split) => split?.revert?.());
      };
    },
    {
      scope: containerRef,
      dependencies: [
        animateOnScroll,
        delay,
        duration,
        stagger,
        ease,
        triggerStart,
        triggerEnd,
        once,
        type,
      ],
    }
  );


  if (
    React.Children.count(children) === 1 &&
    isValidElement(children) &&
    typeof children.type === "string"
  ) {
    return React.cloneElement(children as ReactElement<any>, {
      ref: containerRef,
      className,
    });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true" className={className}>
      {typeof children === "string" || typeof children === "number" ? (
        <span>{children}</span>
      ) : (
        children
      )}
    </div>
  );
}

`;

export const propsData = [
  {
    property: "children",
    type: "ReactNode",
    default: "–",
    description:
      "Content to be split and animated. Can be a single text node or any valid React element.",
  },
  {
    property: "type",
    type: `"lines" | "words" | "chars" | "lines,words,chars"`,
    default: '"lines"',
    description:
      'Specifies how the text should be split. Can be any combination of "lines", "words", and "chars".',
  },
  {
    property: "animateOnScroll",
    type: "boolean",
    default: "true",
    description:
      "Controls whether the animation should be triggered on scroll. If false, animation starts immediately.",
  },
  {
    property: "delay",
    type: "number",
    default: "0",
    description: "Delay (in seconds) before the animation begins.",
  },
  {
    property: "duration",
    type: "number",
    default: "1",
    description: "Duration (in seconds) of the animation for each element.",
  },
  {
    property: "stagger",
    type: "number",
    default: "0.1",
    description:
      "Amount of delay (in seconds) between each element's animation start.",
  },
  {
    property: "ease",
    type: "string",
    default: '"power4.out"',
    description:
      "The easing function to use for the animation. Accepts any valid GSAP easing string.",
  },
  {
    property: "triggerStart",
    type: "string",
    default: '"top 75%"',
    description:
      "ScrollTrigger start value. Defines when the animation should start relative to the viewport.",
  },
  {
    property: "triggerEnd",
    type: "string",
    default: '"bottom top"',
    description:
      "ScrollTrigger end value. Defines when the animation should end relative to the viewport.",
  },
  {
    property: "once",
    type: "boolean",
    default: "true",
    description:
      "If true, the scroll-based animation will only occur once when the element enters the viewport.",
  },
  {
    property: "className",
    type: "string",
    default: '""',
    description: "CSS class for styling the wrapper or target element.",
  },
];

export const splitTextRaw = {
  installation: `npm i @gsap/react`,
  usage: `
<StaggeredParagraph>
  Developer who loves building fast, accessible web apps with
  smooth user experiences. I’m all about blending thoughtful
  design with clean code to bring cool
</StaggeredParagraph>
  `,
  code: code,
  props: propsData,
};
