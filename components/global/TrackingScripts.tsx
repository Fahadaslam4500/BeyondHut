"use client";

import Script from "next/script";

export default function TrackingScripts() {
  return (
    <>
      {/* Meta Pixel #1 */}
      <Script id="fb-pixel-1" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){
            n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

          fbq('init', '620853677086027'); // Existing Pixel
          fbq('track', 'PageView');
        `}
      </Script>

      {/* NoScript for Pixel #1 */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=620853677086027&ev=PageView&noscript=1"
          alt="Meta Pixel 1"
        />
      </noscript>

      {/* Meta Pixel #2 */}
      <Script id="fb-pixel-2" strategy="afterInteractive">
        {`
          fbq('init', '1236029764961692'); // New Pixel
          fbq('track', 'PageView');
        `}
      </Script>

      {/* NoScript for Pixel #2 */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1236029764961692&ev=PageView&noscript=1"
          alt="Meta Pixel 2"
        />
      </noscript>
    </>
  );
}
