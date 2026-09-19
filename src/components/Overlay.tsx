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
  const opacity2 = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4, 0.5],
    [0, 1, 1, 0]
  );

  // Section 3 (60% - 80%)
  const y3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [100, 0, -100]);
  const opacity3 = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7, 0.8],
    [0, 1, 1, 0]
  );

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-center items-center h-screen w-full z-10">
      {/* Section 1 — Hero */}
      <motion.div
        style={{ y: y1, opacity: opacity1 }}
        className="absolute w-full flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-2xl">
          Muslim Shah.
        </h1>
        <p className="mt-4 text-2xl md:text-3xl font-semibold text-zinc-200 drop-shadow-md">
          Technical Performance Marketer
        </p>
        <p className="mt-3 mb-10 text-base md:text-lg text-zinc-400 font-medium tracking-wide drop-shadow-md max-w-xl">
          Paid acquisition, e-commerce measurement, and funnel diagnostics for
          Shopify brands.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
          <a
            href="https://github.com/muslim-rashdi-ecom"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-bold text-lg transition-all shadow-[0_0_30px_-5px_rgba(52,211,153,0.4)] hover:shadow-[0_0_40px_-5px_rgba(52,211,153,0.6)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label="View GitHub Projects — opens in a new tab"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View GitHub Projects
          </a>
          <a
            href="https://wa.me/923083607968"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-zinc-600 bg-zinc-900/60 text-white font-bold text-lg hover:border-emerald-500/60 hover:bg-zinc-800/60 transition-all hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Request an E-commerce Audit via WhatsApp — opens in a new tab"
          >
            Request an E-commerce Audit
          </a>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ y: y2, opacity: opacity2 }}
        className="absolute w-full flex flex-col items-start justify-center px-8 md:px-24"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl max-w-3xl leading-tight">
          Scaling brands through structured{" "}
          <span className="text-blue-400">creative testing.</span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ y: y3, opacity: opacity3 }}
        className="absolute w-full flex flex-col items-end justify-center px-8 md:px-24 text-right"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl max-w-3xl leading-tight">
          Building the measurement layer before{" "}
          <span className="text-emerald-400">scaling spend.</span>
        </h2>
      </motion.div>
    </div>
  );
}
