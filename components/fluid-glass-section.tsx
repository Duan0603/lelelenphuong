"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Dynamic import — Three.js/R3F requires browser
const FluidGlass = dynamic(
  () => import("@/components/FluidGlass"),
  { ssr: false }
);

export function GlobalFluidGlass() {
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] opacity-60">
      {/* 
        This global wrapper spans the whole screen. 
        Because it's pointer-events-none, you can still click the website underneath.
      */}
      <FluidGlass mode="lens" />
    </div>
  );
}
