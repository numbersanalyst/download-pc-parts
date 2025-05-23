"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export const triggerConfetti = () => {
  const end = Date.now() + 1000;
  const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

  const frame = () => {
    if (Date.now() > end) return;

    confetti({
      particleCount: 5,
      angle: 60,
      spread: 75,
      startVelocity: 60,
      origin: { x: 0, y: 0.6 },
      colors: colors,
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 75,
      startVelocity: 60,
      origin: { x: 1, y: 0.6 },
      colors: colors,
    });

    requestAnimationFrame(frame);
  };

  frame();
};

export const ConfettiSideCannons = () => {
  useEffect(() => {
    triggerConfetti();
  }, []);

  return null;
}
