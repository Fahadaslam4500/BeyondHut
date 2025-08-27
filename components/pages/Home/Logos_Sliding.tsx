'use client';
import React from 'react';

/**
 * Drop‑in marquee logos component for Next.js (TSX)
 * - No external deps
 * - Works with Tailwind or plain CSS
 * - Speed controlled via prop (seconds per loop)
 */

export type LogosSlidingProps = {
  /** Seconds per loop; lower = faster */
  speed?: number;
  /** Pause animation when hovering over the strip */
  pauseOnHover?: boolean;
  /** Optional wrapper className */
  className?: string;
  /** Optional custom logos array */
  logos?: string[];
};

// Extend inline style so TS accepts the custom CSS variable
type CSSVars = React.CSSProperties & { ['--marquee-speed']?: string };

export default function Logos_Sliding({
  speed = 12,
  pauseOnHover = true,
  className = '',
  logos: customLogos,
}: LogosSlidingProps) {
  const logos =
    customLogos ?? [
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

  const duration = Math.max(1, Number(speed) || 20);
  const marqueeStyle: CSSVars = { ['--marquee-speed']: `${duration}s` };

  return (
    <section
      className={`mb-40 bg-gradient-to-l from-[#D1ECF5] to-[#EFECFF] ${className}`}
      aria-label="Trusted tools and platforms"
    >
      {/* Component‑scoped CSS so you don't have to touch globals */}
      <style>{`
        .ls-marquee { position: relative; overflow: hidden; }
        .ls-track { display: flex; width: max-content; animation: ls-scroll var(--marquee-speed, 20s) linear infinite; }
        .ls-track > img { flex: 0 0 auto; }
        ${pauseOnHover ? `.ls-marquee:hover .ls-track { animation-play-state: paused; }` : ''}
        @keyframes ls-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .ls-track { animation: none; } }
      `}</style>

      <div className="py-12 mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Heading Section */}
        <div className="md:ms-20 md:w-[20%] text-center md:text-left max-md:container">
          <h2 className="font-ibm_plex text-2xl md:text-3xl capitalize">
            Our <span className="font-dm_serif text-gradient-reverse">"Staff"</span> Comes
            Fully Trained In
          </h2>
        </div>

        {/* Logos Marquee Section */}
        <div className="ls-marquee flex-1" style={marqueeStyle}>
          <div className="ls-track">
            {[...logos, ...logos].map((src, i) => (
              <img
                key={i}
                src={src}
                className="h-[40px] md:h-[60px] mx-4 rounded-md"
                alt={`tool-${i % logos.length}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Usage:
<Logos_Sliding speed={8} pauseOnHover className="your-classes" />
*/
