"use client";

import React, { useRef, ReactNode, ReactElement, isValidElement } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
              (el): el is HTMLElement => el instanceof HTMLElement,
            ),
          );
        } else if (type === "words") {
          elementsToAnimate.current.push(
            ...split.words.filter(
              (el): el is HTMLElement => el instanceof HTMLElement,
            ),
          );
        } else if (type === "chars") {
          elementsToAnimate.current.push(
            ...split.chars.filter(
              (el): el is HTMLElement => el instanceof HTMLElement,
            ),
          );
        } else {
          elementsToAnimate.current.push(
            ...split.lines.filter(
              (el): el is HTMLElement => el instanceof HTMLElement,
            ),
            ...split.words.filter(
              (el): el is HTMLElement => el instanceof HTMLElement,
            ),
            ...split.chars.filter(
              (el): el is HTMLElement => el instanceof HTMLElement,
            ),
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
    },
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
