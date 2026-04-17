"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { RefObject } from "react";

interface OverlayProps {
  containerRef: RefObject<HTMLDivElement | null>;
}

export default function Overlay({ containerRef }: OverlayProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1 (0% - 20%)
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);

  // Section 2 (30% - 50%)
  const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.5], [100, 0, -100]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);

  // Section 3 (60% - 80%)
  const y3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [100, 0, -100]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-center items-center h-screen w-full z-10">
      {/* Section 1 */}
      <motion.div
        style={{ y: y1, opacity: opacity1 }}
        className="absolute w-full flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-2xl">
          Muslim Shah.
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-zinc-300 font-medium tracking-wide drop-shadow-md">
          E-Commerce Growth Specialist.
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ y: y2, opacity: opacity2 }}
        className="absolute w-full flex flex-col items-start justify-center px-8 md:px-24"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl max-w-3xl leading-tight">
          Scaling brands through high-velocity <span className="text-blue-400">creative testing.</span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ y: y3, opacity: opacity3 }}
        className="absolute w-full flex flex-col items-end justify-center px-8 md:px-24 text-right"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl max-w-3xl leading-tight">
          Engineering the bridge between raw data and <span className="text-emerald-400">closed deals.</span>
        </h2>
      </motion.div>
    </div>
  );
}
