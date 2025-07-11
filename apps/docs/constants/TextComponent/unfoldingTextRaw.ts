const code = `
"use client";

import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

interface UnfoldingTextProps {
  text: string;
  fontSize?: number;
  initialRotateY?: number;
  strokeColor?: string;
  fillColor?: string;
  className?: string;
}

const UnfoldingText = ({
  text,
  fontSize = 80,
  initialRotateY = 40,
  strokeColor = "white",
  fillColor = "transparent",
  className = "",
}: UnfoldingTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap
        .to(textRef.current, {
          rotateY: 0,
          duration: 1.5,
        })
        .then(() => {
          gsap.to(textRef.current, {
            WebkitTextStroke: 0,
            WebkitTextStrokeColor: strokeColor,
            WebkitTextFillColor: strokeColor,
          });
        });
    },
    {scope: textRef}
  );

  return (
    <div style={{perspective: 500}}>
      <div
        ref={textRef}
        className={\`font-bold \${className}\`}
        style={{
          fontSize,
          WebkitTextStroke: 0.4,
          WebkitTextStrokeColor: strokeColor,
          WebkitTextFillColor: fillColor,
          transform: \`rotateY(\${initialRotateY}deg)\`,
          transformOrigin: "left center",
          lineHeight: 1,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default UnfoldingText;

`;

const propsData = [
  {
    property: "text",
    type: "string",
    default: "–",
    description:
      "The text content to display and animate with the unfolding effect.",
  },
  {
    property: "fontSize",
    type: "number",
    default: "80",
    description:
      "Font size of the animated text, in pixels. This adjusts the overall size of the text.",
  },
  {
    property: "initialRotateY",
    type: "number",
    default: "40",
    description:
      "The initial Y-axis rotation (in degrees) from which the text unfolds.",
  },
  {
    property: "strokeColor",
    type: "string",
    default: '"white"',
    description:
      "The stroke color applied to the text initially and after the animation completes.",
  },
  {
    property: "fillColor",
    type: "string",
    default: '"transparent"',
    description:
      "The fill color of the text before the animation finishes. Used in combination with strokeColor.",
  },
  {
    property: "className",
    type: "string",
    default: '""',
    description:
      "Additional custom or Tailwind CSS class names to style the text element.",
  },
];

export const unfoldingTextRaw = {
  installation: `npm i @gsap/react`,
  usage: `
<UnfoldingText
    text="THE PROJECT"
    className={\`\${DrukWide.className}\`}
/>
    `,
  code: code,
  props: propsData,
};
