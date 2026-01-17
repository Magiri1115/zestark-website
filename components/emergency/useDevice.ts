"use client";
import { useEffect, useState } from "react";
export type Device = "pc" | "tablet" | "mobile";

export function useDevice(): Device | null {
  const [device, setDevice] = useState<Device | null>(null);

  useEffect(() => {
    const detect = () => {
      if (window.innerWidth >= 960) setDevice("pc");
      else if (window.innerWidth >= 768) setDevice("tablet");
      else setDevice("mobile");
    };

    detect();
    window.addEventListener("resize", detect);
    return () => window.removeEventListener("resize", detect);
  }, []);

  return device;
}
