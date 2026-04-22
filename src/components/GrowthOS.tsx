"use client";

import { motion } from "framer-motion";

export default function GrowthOS() {
  const principles = [
    {
      num: "01",
      title: "Code is the Ultimate Marketer.",
      body: "Marketers who can't read code are flying blind. I refuse to rely on basic pixel setups. I build the tracking infrastructure, audit the CAPI server events, and fix the funnel leaks before I spend a single dollar on ads."
    },
    {
      num: "02",
      title: "Creative Solves the CAC.",
      body: "Scaling isn't about tricking the algorithm with bidding hacks. It's about engineering pattern-interrupt visual hooks. A $0.02 CPC is the direct result of giving the platform exactly what the users want to see."
    },
    {
      num: "03",
      title: "The Market is the Only Judge.",
      body: "I do not rely on subjective opinions or marketing theory. The dashboard is the ultimate source of truth. If a 7.04% CTR proves an angle works, we scale it. If the data shows a bottleneck, I write the Python script to find out why. Speed of execution beats perfection."
    }
  ];

  return (
    <section className="relative z-20 bg-[#121212] pt-24 pb-20 px-4 md:px-8 border-t border-zinc-800/50 text-zinc-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white"
          >
            The Growth OS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zinc-400 font-medium max-w-3xl leading-relaxed"
          >
            I don't collect polished client quotes; I build independent ventures. Here are the core principles that drive my results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Subtle connecting line on desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          
          {principles.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative flex flex-col group"
            >
              {/* Large Accent Number */}
              <div className="mb-6 relative z-10 bg-[#121212] inline-block pr-6 w-fit">
                <span className="text-7xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800 group-hover:from-zinc-400 group-hover:to-zinc-600 transition-all duration-500 select-none">
                  {p.num}.
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                {p.title}
              </h3>
              
              <p className="text-zinc-400 leading-relaxed text-lg group-hover:text-zinc-300 transition-colors duration-300">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
