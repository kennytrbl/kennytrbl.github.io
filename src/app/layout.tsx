import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenny Zhang",
  description: "A portfolio website for Kenny Zhang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mb-24">
      <body>{children}</body>
    </html>
  );
}
