"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BeyondWay = () => {
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
        <h2 className="text-xl md:text-2xl text-center py-2 my-2 px-6 rounded-full bg-[#F3FBFE]">
        The <span className="font-dm_serif text-primary"> Beyond Hut</span> Way
      </h2>
      <div className="relative w-full min-w-[350px] md:min-w-[440px] max-w-md h-[480px] md:h-[500px] bg-[#F3FBFE] rounded-3xl shadow-none overflow-hidden flex items-center justify-center p-4 mx-auto">

        {/* Main card content */}
        <div
          ref={containerRef}
          className="relative max-sm:me-3 w-full h-full flex items-center justify-center"
        >
          {/* Buttons (unchanged positions) */}
          <button className="absolute bottom-[75%] left-[38%] rotate-[25deg] z-[7] bg-[#D1ECF5] text-gray-700 px-6 py-3 rounded-full shadow-sm text-base whitespace-nowrap">
            Faster Closures
          </button>

          <button className="absolute bottom-[60%] left-[25%] rotate-[-50deg] z-[6] bg-[#3F3F3F] text-white px-6 py-3 rounded-full shadow-sm text-base whitespace-nowrap">
            More Time
          </button>

          <button className="absolute bottom-[58%] left-[50%] z-[5] rotate-[10deg] bg-[#00BFFF] text-white px-6 py-3 rounded-full shadow-sm text-base whitespace-nowrap">
            Proven ROI
          </button>

          <button className="absolute bottom-[43%] left-[15%] rotate-[-15deg] z-[4] bg-[#D1ECF5] text-gray-700 px-6 py-3 rounded-full shadow-sm text-base whitespace-nowrap">
            No Long-Term Contract
          </button>

          <button className="absolute bottom-[34%] left-[50%] rotate-[15deg] z-[3] bg-[#3F3F3F] text-white px-6 py-3 rounded-full shadow-sm text-base whitespace-nowrap">
            Scalable
          </button>

          <button className="absolute bottom-[20%] left-[50%] rotate-[25deg] z-[2] bg-[#00BFFF] text-white px-6 py-3 rounded-full shadow-sm text-base whitespace-nowrap">
            Plug-and-Play
          </button>

          <button className="absolute bottom-[11%] left-[10%] rotate-[-20deg] z-[1] bg-[#3F3F3F] text-white px-6 py-3 rounded-full shadow-sm text-base whitespace-nowrap">
            Full Admin Support
          </button>

          <button className="absolute bottom-[2%] left-[35%] z-[0] bg-[#D1ECF5] text-gray-700 px-6 py-3 rounded-full shadow-sm text-base whitespace-nowrap">
            £10K-£20K/year
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BeyondWay;
