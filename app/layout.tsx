import { DM_Serif_Display, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { metadata } from "./metadata";
import CookieBanner from "@/components/global/CookieBanner";
import TrackingScripts from "@/components/global/TrackingScripts";

// ✅ DM Serif Display
const dm_Serif_display = DM_Serif_Display({
  weight: ["400"], // DM Serif Display has only 400 (regular & italic)
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

// ✅ IBM Plex (use IBM Plex Sans as a base; also comes in Mono, Serif if needed)
const ibm_plex = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"], // all weights
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  display: "swap",
});




export { metadata };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="https://beyondhut.com/sitemap.xml"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
      </head>

      <body className="antialiased bg-white">
        <ClerkProvider>
          <Header />
          <Toaster />

          {/* ✅ All Pixels Here */}
          <TrackingScripts />

          {children}
          <CookieBanner />
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
