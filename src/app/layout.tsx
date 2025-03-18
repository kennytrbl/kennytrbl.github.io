import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ScrollReset from "./components/ScrollReset";

export const metadata: Metadata = {
  title: "Kenny Zhang",
  description:
    "Software Engineer specializing in Full Stack Development, with a strong foundation in Mathematics and Computer Science. Explore my portfolio to see innovative projects and industry experience.",
  keywords: "Software Engineer, Full Stack Developer, Kenny Zhang, Web Development, UCSD",
  openGraph: {
    title: "Kenny Zhang",
    description:
      "Experienced Software Engineer specializing in Full Stack Development, with expertise in Web Technologies and a passion for building scalable solutions.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
        <link rel="preconnect" href="https://xysaswoufwhmmdoyufwh.supabase.co" />
        <link rel="dns-prefetch" href="https://xysaswoufwhmmdoyufwh.supabase.co" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <ScrollReset />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
