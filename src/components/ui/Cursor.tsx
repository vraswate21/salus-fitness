"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 500, mass: 0.4 };
  const ringConfig  = { damping: 22, stiffness: 180, mass: 0.6 };

  const dotX  = useSpring(cursorX, springConfig);
  const dotY  = useSpring(cursorY, springConfig);
  const trailX = useSpring(ringX, ringConfig);
  const trailY = useSpring(ringY, ringConfig);

  const [hovered,  setHovered]  = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hidden,   setHidden]   = useState(true);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      setHidden(false);
    };

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        t.closest("a") ||
        t.closest("button") ||
        t.getAttribute("role") === "button" ||
        t.style.cursor === "pointer" ||
        getComputedStyle(t).cursor === "pointer"
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);
    const onLeave = () => setHidden(true);

    document.addEventListener("mousemove",  onMove,  { passive: true });
    document.addEventListener("mouseover",  onEnter, { passive: true });
    document.addEventListener("mousedown",  onDown);
    document.addEventListener("mouseup",    onUp);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseover",  onEnter);
      document.removeEventListener("mousedown",  onDown);
      document.removeEventListener("mouseup",    onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [cursorX, cursorY, ringX, ringY]);

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovered ? 48 : 36,
          height: hovered ? 48 : 36,
          border: `1px solid ${hovered ? "rgba(212,175,55,0.7)" : "rgba(212,175,55,0.35)"}`,
          background: hovered ? "rgba(212,175,55,0.06)" : "transparent",
          opacity: hidden ? 0 : 1,
          scale: clicking ? 0.85 : 1,
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background 0.25s ease, opacity 0.2s ease",
        }}
      />

      {/* Dot */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovered ? 6 : 5,
          height: hovered ? 6 : 5,
          background: "#D4AF37",
          opacity: hidden ? 0 : 1,
          boxShadow: "0 0 10px rgba(212,175,55,0.6)",
          scale: clicking ? 0.6 : 1,
          transition: "opacity 0.2s ease, width 0.2s ease, height 0.2s ease",
        }}
      />
    </>
  );
}
