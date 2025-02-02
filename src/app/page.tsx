"use client";

import LeftPanel from "./components/leftPanel";
import RightPanel from "./components/rightPanel";
import Social from "./components/social";

export default function Home() {
  return (
    <div className="justify-center mx-auto text-[#9db2bf] text-lg w-[90%] lg:text-base">
      <LeftPanel />
      <RightPanel />
      <Social />
    </div>
  );
}
