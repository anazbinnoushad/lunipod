"use client";

import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

interface DraggableTextProps {
  text: string;
}

type LetterData = {
  char: string;
  top: number;
  left: number;
};

const DraggableText: React.FC<DraggableTextProps> = ({text}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [letters, setLetters] = useState<LetterData[]>([]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const letterWidth = 64; // Approximate letter box width (px)
    const spacing = 12;
    const totalWidth = text.length * (letterWidth + spacing) - spacing;

    const startX = (containerWidth - totalWidth) / 2;

    const initialLetters = [...text].map((char, i) => ({
      char,
      top: 100, // fixed y center
      left: startX + i * (letterWidth + spacing),
    }));

    setLetters(initialLetters);
  }, [text]);

  useEffect(() => {
    if (!containerRef.current) return;
    const els = containerRef.current.querySelectorAll(".draggable-letter");

    els.forEach((el) => {
      Draggable.create(el, {
        bounds: containerRef.current!,
        inertia: true,
        type: "x,y",
        edgeResistance: 0.65,
      });
    });
  }, [letters]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full rounded-lg p-6 overflow-hidden"
    >
      {letters.map((item, idx) => (
        <div
          key={idx}
          className="draggable-letter cursor-move text-white text-7xl font-bold px-4 py-2 rounded-md  shadow-lg absolute"
          style={{
            top: `${item.top}px`,
            left: `${item.left}px`,
          }}
        >
          {item.char}
        </div>
      ))}
    </div>
  );
};

export default DraggableText;
