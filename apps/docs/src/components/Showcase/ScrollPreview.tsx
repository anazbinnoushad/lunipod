"use client";
import {ReactNode, useRef} from "react";

interface ScrollPreviewProps {
  children: (
    scrollContainerRef: React.RefObject<HTMLDivElement | null>
  ) => ReactNode;
  className?: string;
}

const ScrollPreview = ({children, className = ""}: ScrollPreviewProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={scrollContainerRef}
      className={`h-full overflow-y-scroll ${className}`}
    >
      {children(scrollContainerRef)}
    </div>
  );
};

export default ScrollPreview;
