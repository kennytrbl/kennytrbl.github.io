"use client";

import { useEffect } from "react";

export default function ScrollReset() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.width = "100%";

      setTimeout(() => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
      }, 100);
    }
  }, []);

  return null;
}
