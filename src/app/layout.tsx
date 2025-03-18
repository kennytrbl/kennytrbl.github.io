import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Kenny Zhang | Software Engineer",
  description:
    "Software Engineer with expertise in Full Stack Development, Mathematics, and Computer Science. View my portfolio, projects, and experience.",
  keywords: "Software Engineer, Full Stack Developer, Kenny Zhang, Web Development, UCSD",
  openGraph: {
    title: "Kenny Zhang | Software Engineer",
    description: "Software Engineer with expertise in Full Stack Development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://xysaswoufwhmmdoyufwh.supabase.co" />
      </head>
      <body className="min-h-screen">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
