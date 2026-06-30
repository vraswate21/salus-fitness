"use client";

import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    // Disable Lenis on touch/mobile — native inertia scroll is better
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    let lenis: unknown;

    async function init() {
      const { default: Lenis } = await import("@studio-freight/lenis");
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        infinite: false,
      });

      function raf(time: number) {
        (lenis as { raf: (t: number) => void }).raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    init();

    return () => {
      if (lenis) (lenis as { destroy: () => void }).destroy();
    };
  }, []);
}
