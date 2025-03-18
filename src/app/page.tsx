"use client";

import LeftPanel from "./components/leftPanel";
import RightPanel from "./components/rightPanel";
import Social from "./components/social";

export default function Home() {
  return (
    <main className="justify-center mx-auto text-[#9db2bf] text-lg w-[95%] px-4 max-w-7xl lg:text-base min-h-screen py-8">
      <LeftPanel />
      <RightPanel />
      <Social />
    </main>
  );
}
