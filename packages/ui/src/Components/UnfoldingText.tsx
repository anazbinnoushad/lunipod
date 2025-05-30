"use client";

import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const UnfoldingText = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap
        .to(textRef.current, {
          transform: "rotateY(0)",
          duration: 1.5,
        })
        .then(() => {
          gsap.to(textRef.current, {
            WebkitTextStroke: 0,
            WebkitTextStrokeColor: "white",
            WebkitTextFillColor: "white",
          });
        });
    },
    {scope: textRef}
  );
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
      </style>

      <div style={{perspective: 500}}>
        <div
          className="font-bold "
          style={{
            fontSize: 80,
            WebkitTextStroke: 0.4,
            WebkitTextStrokeColor: "white",
            WebkitTextFillColor: "black",
            transform: "rotateY(40deg)",
            transformOrigin: "left center",
            fontFamily: "'Anton', sans-serif",
          }}
          ref={textRef}
        >
          SAMPLE TEXT
        </div>
      </div>
    </div>
  );
};

export default UnfoldingText;
