"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Hook to animate numbers counting up
 * Used for metrics and KPI displays
 */
export function useCountUp(
  end: number,
  duration: number = 2000,
  start: number = 0,
  shouldStart: boolean = true
) {
  const [count, setCount] = useState(start);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!shouldStart) {
      setCount(start);
      return;
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentCount = start + (end - start) * easeOutQuart;

      setCount(currentCount);

      if (percentage < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      startTimeRef.current = null;
    };
  }, [end, duration, start, shouldStart]);

  return Math.floor(count);
}
