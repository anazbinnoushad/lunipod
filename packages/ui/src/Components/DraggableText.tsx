"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  CSSProperties,
} from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

interface DraggableTextProps {
  text: string;
  direction?: "x" | "y" | "both";
  letterWidth?: number;
  spacing?: number;
  verticalCenter?: boolean;
  containerClassName?: string;
  containerStyle?: CSSProperties;
  letterClassName?: string;
  onDragStart?: (char: string, index: number) => void;
  onDragEnd?: (char: string, index: number) => void;
}

type LetterData = {
  char: string;
  top: number;
  left: number;
};

const DraggableText: React.FC<DraggableTextProps> = ({
  text,
  direction = "both",
  letterWidth = 64,
  spacing = 12,
  verticalCenter = true,
  containerClassName = "",
  containerStyle = {},
  letterClassName = "",
  onDragStart,
  onDragEnd,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [letters, setLetters] = useState<LetterData[]>([]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const totalWidth = text.length * (letterWidth + spacing) - spacing;
    const startX = (containerWidth - totalWidth) / 2;
    const top = verticalCenter
      ? containerRef.current.offsetHeight / 2 - 32
      : 100;

    const initialLetters = [...text].map((char, i) => ({
      char,
      top,
      left: startX + i * (letterWidth + spacing),
    }));

    setLetters(initialLetters);
  }, [text, letterWidth, spacing, verticalCenter]);

  useEffect(() => {
    if (!containerRef.current) return;
    const els = containerRef.current.querySelectorAll(".draggable-letter");

    els.forEach((el, i) => {
      Draggable.create(el, {
        bounds: containerRef.current!,
        inertia: true,
        type: direction === "both" ? "x,y" : direction,
        edgeResistance: 0.65,
        onPress: () => {
          const letter = letters[i];
          if (letter && onDragStart) onDragStart(letter.char, i);
        },
        onRelease: () => {
          const letter = letters[i];
          if (letter && onDragEnd) onDragEnd(letter.char, i);
        },
      });
    });
  }, [letters, direction, onDragStart, onDragEnd]);

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full overflow-hidden rounded-lg p-6 ${containerClassName}`}
      style={containerStyle}
    >
      {letters.map((item, idx) => (
        <div
          key={idx}
          className={`draggable-letter absolute cursor-move px-4 py-2 text-7xl font-bold text-white shadow-lg rounded-md ${letterClassName}`}
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
