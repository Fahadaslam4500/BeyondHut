import React from 'react';

function Logos_Sliding() {
  const logos = [
    '/assets/tool/tool1.png',
    '/assets/tool/tool2.png',
    '/assets/tool/tool3.png',
    '/assets/tool/tool4.png',
    '/assets/tool/tool5.png',
    '/assets/tool/tool6.png',
    '/assets/tool/tool7.png',
    '/assets/tool/tool8.png',
    '/assets/tool/tool9.png',
    '/assets/tool/tool10.png',
    '/assets/tool/tool11.png',
    '/assets/tool/tool12.png',
    '/assets/tool/tool13.png',
  ];

  return (
    <div className="md:mb-40 mb-4 bg-gradient-to-l from-[#D1ECF5] to-[#EFECFF]">
      <div className="md:py-12 py-8 mx-auto flex flex-row items-center gap-8 overflow-hidden">
        
        {/* Heading Section */}
        <div className="md:ms-20 text-left shrink-0 px-3">
          <h2 className="font-ibm_plex text-base md:text-3xl capitalize">
            Our <span className="font-dm_serif text-gradient-reverse">"Staff"</span> Comes<br/>
            Fully Trained In
          </h2>
        </div>

        {/* Logos Marquee Section */}
        <div className="marquee-container flex-1 overflow-hidden">
          <div className="marquee-track flex">
            {[...logos, ...logos].map((src, i) => (
              <img
                key={i}
                src={src}
                className="h-[40px] md:h-[80px] md:mx-4 ms-2 rounded-md flex-shrink-0"
                alt={`tool-${i}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logos_Sliding;
