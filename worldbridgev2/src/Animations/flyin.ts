import type  { Variants }  from "framer-motion";

type Direction = "left" | "right" | "up" | "down";

export const flyIn = (
  direction: Direction = "left",
  delay = 0
): Variants => {
  const map = {
    left: { x: -120, y: 0 },
    right: { x: 120, y: 0 },
    up: { x: 0, y: -120 },
    down: { x: 0, y: 160 },
  };

  return {
    hidden: {
      ...map[direction],
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 18,
        delay,
      },
    },
  };
};
