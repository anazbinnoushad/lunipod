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
          duration: 1,
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
      <div style={{perspective: 500}}>
        <div
          className="font-bold"
          style={{
            fontSize: 80,
            WebkitTextStroke: 1,
            WebkitTextStrokeColor: "white",
            WebkitTextFillColor: "black",
            transform: "rotateY(40deg)",
            transformOrigin: "left center",
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
