"use client";

import { RefObject, useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type ObserverInstance from "gsap/Observer";
// @ts-ignore
import horizontalLoop from "../helpers/horizontalLoop";

gsap.registerPlugin(Observer, ScrollTrigger);

let observer: ObserverInstance | null = null;

interface TextVelocityLoopProps {
  scrollContainerRef?: RefObject<HTMLDivElement | null>;
  items?: string[];
  repeatCount?: number;
  speed?: number;
  reversed?: boolean;
  fontSize?: number;
  className?: string;
  renderItem?: (item: string, index: number) => ReactNode;
}

export const TextVelocityLoop = ({
  scrollContainerRef,
  items = ["Lunipod UI"],
  repeatCount = 5,
  speed = 0.8,
  reversed = true,
  fontSize = 50,
  className = "",
  renderItem,
}: TextVelocityLoopProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const marqueeTimeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const children = railRef.current?.children;
    if (!children || typeof window === "undefined") return;

    const elements = gsap.utils.toArray(children) as HTMLElement[];

    ScrollTrigger.refresh();
    const scroller = scrollContainerRef?.current || window;

    const tl = horizontalLoop(elements, {
      repeat: -1,
      speed,
      reversed,
    });

    marqueeTimeline.current = tl;

    let speedTween: gsap.core.Timeline | null = null;

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      scroller,
      start: "center bottom+=50%",
      end: "bottom bottom-=40%",
      onEnter: startObserver,
      onEnterBack: startObserver,
      onLeave: stopObserver,
      onLeaveBack: stopObserver,
    });

    function startObserver() {
      if (observer) return;
      observer = Observer.create({
        target: scroller,
        type: "scroll",
        onUp: () => changeDirection(-1),
        onDown: () => changeDirection(1),
        tolerance: 10,
        preventDefault: false,
      });
    }

    function stopObserver() {
      if (observer) {
        observer.kill();
        observer = null;
      }
    }

    function changeDirection(direction: 1 | -1) {
      if (!marqueeTimeline.current) return;
      if (speedTween) speedTween.kill();

      speedTween = gsap.timeline();
      speedTween
        .to(marqueeTimeline.current, {
          timeScale: 3 * direction,
          duration: 0.25,
        })
        .to(
          marqueeTimeline.current,
          {
            timeScale: 1 * direction,
            duration: 1.5,
          },
          "+=0.5",
        );
    }

    return () => {
      scrollTrigger.kill();
      stopObserver();
      marqueeTimeline.current?.kill();
      marqueeTimeline.current = null;
      speedTween?.kill();
      speedTween = null;
    };
  }, [scrollContainerRef?.current, items, speed, reversed]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-fit flex items-center overflow-hidden scrolling-text ${className}`}
    >
      <div ref={railRef} className="flex gap-5">
        {Array(repeatCount)
          .fill(items)
          .flat()
          .map((item, idx) =>
            renderItem ? (
              renderItem(item, idx)
            ) : (
              <h4
                className="whitespace-nowrap text-white font-black"
                style={{ fontSize }}
                key={`title_${idx}`}
              >
                {item}
              </h4>
            ),
          )}
      </div>
    </div>
  );
};

export default TextVelocityLoop;
