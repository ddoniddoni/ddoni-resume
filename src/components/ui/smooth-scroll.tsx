"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "./smooth-scroll.scss";

export function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let lenis: Lenis | null = null;

    const stopSmoothScroll = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      lenis?.destroy();
      lenis = null;
    };

    const startSmoothScroll = () => {
      if (reducedMotion.matches || lenis) {
        return;
      }

      lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
        syncTouch: false,
      });

      const updateScroll = (time: number) => {
        lenis?.raf(time);
        animationFrame = window.requestAnimationFrame(updateScroll);
      };

      animationFrame = window.requestAnimationFrame(updateScroll);
    };

    const handleMotionPreference = () => {
      stopSmoothScroll();
      startSmoothScroll();
    };

    startSmoothScroll();
    reducedMotion.addEventListener("change", handleMotionPreference);

    return () => {
      reducedMotion.removeEventListener("change", handleMotionPreference);
      stopSmoothScroll();
    };
  }, []);

  return null;
}
