"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InHouseWay = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const buttons = containerRef.current.querySelectorAll("button");

    gsap.from(buttons, {
      y: -200,
      opacity: 0,
      duration: 1.2,
      ease: "bounce.out", // or "elastic.out(1, 0.5)"
      stagger: {
        each: 0.3,
        from: "end", // bottom button first
      },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%", // when top of container hits 50% of viewport
        toggleActions: "play none none none", // play only once
      },
    });
  }, []);

  return (
    <div className="">
      <div className="flex flex-col items-center"> 
        <h2 className="text-xl md:text-2xl text-center py-2 my-2 px-6 rounded-full">
            In-House Talent
      </h2>
      <div className="relative w-full min-w-[350px] md:min-w-[440px] max-w-md h-[480px] md:h-[500px] bg-[#F6F6F6] rounded-3xl shadow-none overflow-hidden flex items-center justify-center p-4 mx-auto">

        {/* Main card content */}
        <div
          ref={containerRef}
          className="relative max-sm:me-3 w-full h-full flex items-center justify-center"
        >
         

          <button className="absolute bottom-[42%] left-[35%] z-[5] rotate-[20deg] bg-[#E3E8EA] text-black px-6 py-3 rounded-full shadow-sm text-base whitespace-nowrap">
            Rigid Contract
          </button>

          <button className="absolute bottom-[23%] left-[45%] rotate-[15deg] z-[4] bg-[#A5A5A5] text-white px-6 py-3 rounded-full shadow-sm text-base whitespace-nowrap">
            NI & Training Costs
          </button>

          <button className="absolute bottom-[4%] left-[60%] rotate-[-25deg] z-[3] bg-[#5E5E5E] text-white px-6 py-3 rounded-full shadow-sm text-base whitespace-nowrap">
            High Risk
          </button>

          <button className="absolute bottom-[33%] left-[10%] rotate-[-12deg] z-[2] bg-[#E3E8EA] text-black px-6 py-3 rounded-full shadow-sm text-base whitespace-nowrap">
            Slow Scale
          </button>

          <button className="absolute bottom-[16%] left-[13%] rotate-[20deg] z-[1] bg-[#5E5E5E] text-white px-6 py-3 rounded-full shadow-sm text-base whitespace-nowrap">
            £35K–£55K/year
          </button>

          <button className="absolute bottom-[2%] left-[15%] z-[0] bg-[#E3E8EA] text-gray-700 px-6 py-3 rounded-full shadow-sm text-base whitespace-nowrap">
            OverHead
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default InHouseWay;
