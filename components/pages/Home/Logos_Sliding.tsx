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

      <div className="py-12 mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">

        {/* Heading Section */}
        <div className="md:ms-20 md:w-[20%] text-center md:text-left max-md:container">
          <h2 className='font-ibm_plex text-2xl md:text-3xl capitalize'>
            Our <span className='font-dm_serif text-gradient-reverse'>"Staff"</span> Comes
            Fully Trained In
          </h2>
        </div>

        {/* Logos Marquee Section */}
        <div className="marquee-container flex-1">
          <div className="marquee-track">
            {[...logos, ...logos].map((src, i) => (
              <img
                key={i}
                src={src}
                className="h-[40px] md:h-[80px] mx-4 rounded-md"
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
