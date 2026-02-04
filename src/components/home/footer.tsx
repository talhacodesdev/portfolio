'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'motion/react';
import { useRef } from 'react';

export const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate percentage (-0.5 to 0.5)
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;

    // Move slightly opposite or towards mouse
    x.set(xPct * 50); // Move up to 50px
    y.set(yPct * 20); // Move up to 20px
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const transform = useMotionTemplate`translate(${springX}px, ${springY}px)`;

  return (
    <footer
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full py-20 relative overflow-hidden flex flex-col items-center justify-center min-h-[50vh]">
      {/* Fade Effect Mask - Top to Bottom */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Content */}
      <div className="relative z-0">
        <motion.h1
          style={{ transform }}
          className="text-[12vw] md:text-[17vw] font-black leading-none tracking-tighter text-center uppercase select-none text-foreground/10 whitespace-nowrap">
          TALHA CODES
        </motion.h1>
      </div>
    </footer>
  );
};
