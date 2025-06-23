"use client";

import {useRef, useState} from "react";
import {gsap} from "gsap";

const FlipCard = () => {
  const innerRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    if (!innerRef.current) return;

    gsap.to(innerRef.current, {
      rotateY: flipped ? 0 : 180,
      duration: 0.8,
      ease: "power2.inOut",
    });

    setFlipped(!flipped);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-80 h-52 [perspective:1000px]">
        <div
          ref={innerRef}
          className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
        >
          {/* Front Face */}
          <div className="absolute inset-0 bg-white border rounded-xl p-6 [backface-visibility:hidden] shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800">Front Side</h3>
              <p className="text-gray-500">Click below to flip</p>
            </div>
            <button
              onClick={handleFlip}
              className="mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Flip to Back
            </button>
          </div>

          {/* Back Face */}
          <div className="absolute inset-0 bg-gray-800 border rounded-xl p-6 [backface-visibility:hidden] rotate-y-180 shadow-md flex flex-col justify-between text-white">
            <div>
              <h3 className="text-xl font-bold">Back Side</h3>
              <p className="text-gray-300">Click below to flip back</p>
            </div>
            <button
              onClick={handleFlip}
              className="mt-4 py-2 px-4 bg-indigo-500 rounded hover:bg-indigo-600"
            >
              Flip to Front
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
