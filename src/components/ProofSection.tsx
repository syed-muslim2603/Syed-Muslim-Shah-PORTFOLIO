"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProofSection() {
  const proofs = [
    {
      image: "/proofs/proof1.jpeg",
      caption: "Meta Ads: 7.04% CTR & $0.02 CPC",
      alt: "Meta Ads Dashboard"
    },
    {
      image: "/proofs/proof2.jpeg",
      caption: "Funnel Diagnostics: 6% View-to-ATC drop-off identified",
      alt: "Funnel Diagnostics Dashboard"
    },
    {
      image: "/proofs/proof3.jpeg",
      caption: "Organic Scale: 4.3K+ Visual Search Impressions",
      alt: "Pinterest Analytics Dashboard"
    }
  ];

  return (
    <section className="relative z-20 bg-[#121212] pt-12 pb-24 px-4 md:px-8 text-zinc-100 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
            Proof of Execution.
          </h3>
          <p className="text-xl text-zinc-400 font-medium">
            The raw data and analytics behind the case studies.
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
              className="group flex flex-col p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md hover:bg-zinc-800/60 hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.15)] hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden cursor-pointer"
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
      </div>
    </section>
  );
}
