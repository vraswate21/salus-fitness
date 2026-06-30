"use client";

import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    let lenis: unknown;

    async function initLenis() {
      const { default: Lenis } = await import("@studio-freight/lenis");
      lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time: number) {
        (lenis as { raf: (t: number) => void }).raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    initLenis();

    return () => {
      if (lenis) (lenis as { destroy: () => void }).destroy();
    };
  }, []);
}
