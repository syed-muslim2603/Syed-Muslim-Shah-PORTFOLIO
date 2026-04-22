"use client";

import { motion } from "framer-motion";
import { Play, MessageCircle } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <section className="relative z-20 bg-[#121212] pt-16 pb-32 px-4 md:px-8 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
            Ready to Scale? Let's Talk.
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 mb-16 font-medium max-w-2xl mx-auto leading-relaxed">
            Fully optimized for PST hours. Ready to step in as your First Marketing Hire or Lead Growth Engineer.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Primary Button - Loom */}
          <motion.a
            href="https://www.loom.com/share/cc1e72ba20c84952809b094a146c5d0c"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-black font-bold text-lg shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_0_60px_-10px_rgba(249,115,22,0.7)] transition-all w-full md:w-auto justify-center"
          >
            <Play className="w-5 h-5 fill-black" />
            Watch My Audit (Loom)
          </motion.a>

          {/* Secondary Button - LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/syed-muhammad-muslim-shah-2a6345401?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-3 px-8 py-4 rounded-full border border-zinc-700 bg-zinc-900/50 text-white font-semibold text-lg hover:border-blue-500 hover:bg-blue-500/10 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)] transition-all w-full md:w-auto justify-center"
          >
            <LinkedinIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
            Connect on LinkedIn
          </motion.a>

          {/* Secondary Button - WhatsApp */}
          <motion.a
            href="https://wa.me/923083607968"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-3 px-8 py-4 rounded-full border border-zinc-700 bg-zinc-900/50 text-white font-semibold text-lg hover:border-green-500 hover:bg-green-500/10 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)] transition-all w-full md:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" />
            Chat on WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
}
