"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FallingTags() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pills = gsap.utils.toArray<HTMLDivElement>(".pill");

    pills.forEach((pill, i) => {
      gsap.fromTo(
        pill,
        {
          y: -200, // start off-screen above
          x: gsap.utils.random(-50, 50), // small horizontal shift
          rotation: gsap.utils.random(-25, 25),
          opacity: 0,
        },
        {
          y: gsap.utils.random(120, 220), // fall to random depth
          x: gsap.utils.random(-40, 40),
          rotation: gsap.utils.random(-10, 10),
          opacity: 1,
          duration: 1.5,
          ease: "bounce.out",
          delay: i * 0.15, // staggered fall
        }
      );
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[300px] h-[300px] rounded-2xl bg-violet-100 overflow-hidden flex items-center justify-center"
    >
      {/* Pills - must be absolute so they can move freely */}
      <div className="pill absolute px-4 py-2 rounded-full bg-slate-800 text-white">Optimize</div>
      <div className="pill absolute px-4 py-2 rounded-full bg-blue-600 text-white">Targeted Prospect</div>
      <div className="pill absolute px-4 py-2 rounded-full bg-gray-200 text-black">Personalize</div>
      <div className="pill absolute px-4 py-2 rounded-full bg-slate-800 text-white">Engage</div>
      <div className="pill absolute px-4 py-2 rounded-full bg-blue-600 text-white">Follow-Up</div>
      <div className="pill absolute px-4 py-2 rounded-full bg-gray-200 text-black">Relationship</div>
      <div className="pill absolute px-4 py-2 rounded-full bg-gray-200 text-black">Strategic</div>
      <div className="pill absolute px-4 py-2 rounded-full bg-slate-800 text-white">Propose</div>
      <div className="pill absolute px-4 py-2 rounded-full bg-gray-200 text-black">Details report</div>
    </div>
  );
}
