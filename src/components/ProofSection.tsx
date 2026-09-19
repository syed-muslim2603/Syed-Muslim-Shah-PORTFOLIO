"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProofSection() {
  const proofs = [
    {
      image: "/proofs/proof1.jpeg",
      caption: "AED 0.0734 CPC and 7.04% CTR during a documented Meta Ads test.",
      alt: "Meta Ads Manager dashboard showing AED 0.0734 CPC and 7.04% CTR metrics from a UAE campaign test",
    },
    {
      image: "/proofs/proof2.jpeg",
      caption: "Shopify and browser/server-side measurement diagnostics.",
      alt: "Shopify event diagnostics dashboard showing browser pixel and server-side CAPI event comparison",
    },
    {
      image: "/proofs/proof3.jpeg",
      caption:
        "Pinterest content distribution workflow with 4.3K+ weekly impressions during the measured period.",
      alt: "Pinterest analytics dashboard showing 4.3K+ weekly impressions from an organic content distribution workflow",
    },
  ];

  const [selectedProof, setSelectedProof] = useState<
    (typeof proofs)[0] | null
  >(null);

  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    if (selectedProof) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProof]);

  return (
    <>
      <section
        id="proof-section"
        className="relative z-20 bg-[#121212] pt-12 pb-24 px-4 md:px-8 text-zinc-100 border-t border-zinc-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
              Evidence from Documented Tests
            </h3>
            <p className="text-xl text-zinc-400 font-medium">
              Screenshots directly from the dashboard. Each result is shown with
              its available context.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {proofs.map((proof, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.01 }}
                onClick={() => setSelectedProof(proof)}
                className="group flex flex-col p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md hover:bg-zinc-800/60 hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.15)] hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`View enlarged: ${proof.caption}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedProof(proof);
                }}
              >
                <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden mb-5 bg-zinc-950/50 border border-zinc-800/50 shadow-inner group-hover:shadow-[0_0_20px_-5px_rgba(52,211,153,0.2)] transition-shadow duration-500">
                  <Image
                    src={proof.image}
                    alt={proof.alt}
                    fill
                    priority={true}
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-grow flex items-center justify-center text-center px-2">
                  <p className="text-zinc-300 font-medium leading-snug">
                    {proof.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="mt-12 text-center text-sm text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Metrics are presented with their available context and should not be
            interpreted as guaranteed future performance.
          </p>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProof && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedProof(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-sm cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProof(null)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 p-3 text-zinc-400 hover:text-white bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800/80 rounded-full transition-colors z-[110] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              aria-label="Close image preview"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-w-5xl flex flex-col items-center justify-center cursor-default"
            >
              <div className="relative w-full h-[85vh] sm:h-[80vh]">
                <Image
                  src={selectedProof.image}
                  alt={selectedProof.alt}
                  fill
                  quality={100}
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <p className="mt-4 sm:mt-6 text-zinc-200 font-semibold text-lg sm:text-xl text-center w-full max-w-2xl px-4 drop-shadow-md">
                {selectedProof.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
