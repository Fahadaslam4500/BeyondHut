
// import React from 'react';

// function Logos_Sliding() {
//   const logos = [
//     '/assets/redesign/logos/logo1.png',
//     '/assets/redesign/logos/logo2.png',
//     '/assets/redesign/logos/logo3.png',
//     '/assets/redesign/logos/logo4.png',
//     '/assets/redesign/logos/logo5.png',
//     '/assets/redesign/logos/logo6.png',
//     '/assets/redesign/logos/logo7.png',
//     '/assets/redesign/logos/logo8.png',
//     '/assets/redesign/logos/logo9.png',
//     '/assets/redesign/logos/logo10.png',
//     '/assets/redesign/logos/logo11.png',
//     '/assets/redesign/logos/logo12.png',
//     '/assets/redesign/logos/logo13.png',
//     '/assets/redesign/logos/logo14.png',
//     '/assets/redesign/logos/logo15.png',
//     '/assets/redesign/logos/logo16.png',
    
//   ];

//   return (
//     <div className="md:mb-40 mb-4 bg-gradient-to-l from-[#D1ECF5] to-[#EFECFF] overflow-hidden">
//       <div className="md:py-12 py-8 flex flex-row items-center gap-8 overflow-hidden">
        
//         {/* Heading Section */}
//         <div className="md:ms-20 text-left shrink-0 max-sm:w-[40%]">
//           <h2 className="font-ibm_plex text-sm md:text-3xl capitalize container">
//             Our <span className="font-dm_serif text-gradient-reverse">"Staff"</span> Comes<br/>
//             Fully Trained In
//           </h2>
//         </div>

//          <div className="marquee-container overflow-hidden">
//         <div className="marquee-track ">
//           {[...logos, ...logos].map((src, i) => (
//             <img key={i} src={src} className="max-h-[50px] mx-1 md:mx-3 bg-white p-2 rounded-md" alt={`tool-${i}`} />
//           ))}
//         </div>
       
//       </div>
//       </div>
//     </div>
//   );
// }

// export default Logos_Sliding;








import React from 'react';

const logos = [
  '/assets/redesign/logos/logo1.png',
  '/assets/redesign/logos/logo2.png',
  '/assets/redesign/logos/logo3.png',
  '/assets/redesign/logos/logo4.png',
  '/assets/redesign/logos/logo5.png',
  '/assets/redesign/logos/logo6.png',
  '/assets/redesign/logos/logo7.png',
  '/assets/redesign/logos/logo8.png',
  '/assets/redesign/logos/logo9.png',
  '/assets/redesign/logos/logo10.png',
  '/assets/redesign/logos/logo11.png',
  '/assets/redesign/logos/logo12.png',
  '/assets/redesign/logos/logo13.png',
  '/assets/redesign/logos/logo14.png',
  '/assets/redesign/logos/logo15.png',
  '/assets/redesign/logos/logo16.png',
];

function LogosSliding() {
  return (
    <div className="md:mb-40 mb-4 bg-gradient-to-l from-[#D1ECF5] to-[#EFECFF] overflow-hidden">
      <style>
        {`
        .marquee-container {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          animation: scroll-left 15s linear infinite; /* Increased duration for smoother desktop scroll */
          width: fit-content; /* Ensure the track is wide enough to contain all content */
        }

        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            /* This is the key change. We animate to 50% of the duplicated content's width to create a seamless loop. */
            transform: translateX(-100%);
          }
        }

        /* Mobile override for a faster scroll */
        @media (max-width: 768px) {
          .marquee-track {
            animation-duration: 10s; 
          }
        }
        `}
      </style>
      <div className="md:py-12 py-8 flex flex-row items-center gap-2 md:gap-4 overflow-hidden">
        {/* Heading Section */}
        <div className="md:ms-20 text-left shrink-0 max-sm:w-[40%]">
          <h2 className="font-ibm_plex text-sm md:text-3xl capitalize container">
            Our <span className="font-dm_serif text-gradient-reverse">"Staff"</span> Comes<br />
            Fully Trained In
          </h2>
        </div>

        <div className="marquee-container">
          <div className="marquee-track">
            {/* We duplicate the logos array to ensure a smooth, continuous animation loop */}
            {[...logos, ...logos].map((src, i) => (
              <img key={i} src={src} className="max-h-[40px] md:max-h-[50px] mx-1 md:mx-3 bg-white p-2 rounded-md" alt={`tool-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogosSliding;
