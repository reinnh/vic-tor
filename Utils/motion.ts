import { Variants, Transition } from "framer-motion";

// Allowed transition types for Framer Motion
type TransitionType = "tween" | "spring" | false;

// -----------------------
// Text variant
// -----------------------
export const textVariant = (delay = 0): Variants => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as TransitionType,
      duration: 1.25,
      delay,
    },
  },
});

// -----------------------
// Fade in variant
// -----------------------
export const fadeIn = (
  direction: "left" | "right" | "up" | "down" | "" = "",
  type: TransitionType = "spring",
  delay = 0,
  duration = 0.75
): Variants => {
  const x = direction === "left" ? 100 : direction === "right" ? -100 : 0;
  const y = direction === "up" ? 100 : direction === "down" ? -100 : 0;

  return {
    hidden: { x, y, opacity: 0 },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { type, delay, duration, ease: "easeOut" },
    },
  };
};

// -----------------------
// Zoom in variant
// -----------------------
export const zoomIn = (
  delay = 0,
  duration = 0.75,
  type: TransitionType = "tween"
): Variants => ({
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type, delay, duration, ease: "easeOut" },
  },
});

// -----------------------
// Slide in variant
// -----------------------
export const slideIn = (
  direction: "left" | "right" | "up" | "down" | "" = "",
  type: TransitionType = "tween",
  delay = 0,
  duration = 0.75
): Variants => {
  const x = direction === "left" ? "-100%" : direction === "right" ? "100%" : 0;
  const y = direction === "up" ? "100%" : direction === "down" ? "-100%" : 0;

  return {
    hidden: { x, y },
    show: {
      x: 0,
      y: 0,
      transition: { type, delay, duration, ease: "easeOut" },
    },
  };
};

// -----------------------
// Stagger container variant
// -----------------------
export const staggerContainer = (
  staggerChildren = 0.2,
  delayChildren = 0
): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});
