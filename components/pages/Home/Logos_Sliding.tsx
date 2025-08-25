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
    <div className='mb-40 bg-gradient-to-l from-[#D1ECF5] to-[#EFECFF]'>

      <div className="py-32 mx-auto my-20 flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Heading Section */}
        <div className="md:ms-20 md:w-[20%] text-center md:text-left">
          <h2 className='font-dm_sans text-2xl md:text-3xl capitalize'>
            Our <span className='font-roca'>Talent/VA’s</span> come fully trained in
          </h2>
        </div>

        {/* Logos Marquee Section */}
        <div className="marquee-container flex-1">
          <div className="marquee-track">
            {[...logos, ...logos].map((src, i) => (
              <img 
                key={i} 
                src={src} 
                className="h-[40px] md:h-[80px] mx-4" 
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
