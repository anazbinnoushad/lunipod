
const code = `
"use client";

import {RefObject, useEffect, useRef, ReactNode} from "react";
import gsap from "gsap";
import {Observer} from "gsap/Observer";
import {ScrollTrigger} from "gsap/ScrollTrigger";
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
          "+=0.5"
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
      className={\`w-full h-fit flex items-center overflow-hidden scrolling-text \${className}\`}
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
                style={{fontSize}}
                key={\`title_\${idx}\`}
              >
                {item}
              </h4>
            )
          )}
      </div>
    </div>
  );
};

export default TextVelocityLoop;

`;

const horizontalLoopHelper = `
import gsap from "gsap";

export default function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: {ease: "none"},
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;
  gsap.set(items, {
    // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    },
  });
  gsap.set(items, {x: 0});
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}
`;

const propsData = [
  {
    property: "scrollContainerRef",
    type: "RefObject<HTMLDivElement>",
    default: "window",
    description:
      "Optional custom scroll container reference. Defaults to the global `window` object if not provided.",
  },
  {
    property: "items",
    type: "string[]",
    default: '["Lunipod UI"]',
    description:
      "An array of strings to be repeated and animated in the horizontal loop.",
  },
  {
    property: "repeatCount",
    type: "number",
    default: "5",
    description:
      "The number of times the `items` array should be repeated to form the scrolling loop.",
  },
  {
    property: "speed",
    type: "number",
    default: "0.8",
    description:
      "Base speed of the scrolling animation. Higher values make it faster.",
  },
  {
    property: "reversed",
    type: "boolean",
    default: "true",
    description:
      "Determines the initial direction of the scroll animation. If true, scrolls right to left.",
  },
  {
    property: "fontSize",
    type: "number",
    default: "50",
    description: "Font size for the default item renderer (in pixels).",
  },
  {
    property: "className",
    type: "string",
    default: '""',
    description:
      "Additional Tailwind or custom CSS classes to apply to the outer container.",
  },
  {
    property: "renderItem",
    type: "(item: string, index: number) => ReactNode",
    default: "undefined",
    description:
      "Optional custom render function for each item. If not provided, defaults to a white `h4` element.",
  },
];

export const textVelocityLoopRaw = {
  installation: `npm i @gsap/react`,
  usage: `
<TextVelocityLoop
    scrollContainerRef={scrollContainerRef}
/>
  `,
  code: code,
  props: propsData,
  helperCode: horizontalLoopHelper,
};
