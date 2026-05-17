import type { Metadata } from "next";
import { Inter, Montserrat, JetBrains_Mono } from "next/font/google";
import siteConfig from "@/config/site";
import { AppShell } from "@/components";
import "./globals.css";

/* ------------------------------------------------------------------ */
/*  Fonts                                                              */
/* ------------------------------------------------------------------ */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: `${siteConfig.name} - Link in Bio`,
  description: `All of ${siteConfig.name}'s links in one place.`,
};

/* ------------------------------------------------------------------ */
/*  Layout                                                             */
/* ------------------------------------------------------------------ */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${montserrat.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Material Symbols for the nav drawer icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#0e0e0e] relative pb-section-gap">
        {/* Electric Pulse Background */}
        <div className="bg-pulse-container">
          <div className="bg-pulse-1" />
          <div className="bg-pulse-2" />
          <div className="bg-pulse-3" />
        </div>

        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
