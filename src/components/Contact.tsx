"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

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
    aria-hidden="true"
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
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
            Need cleaner measurement before scaling spend?
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 mb-16 font-medium max-w-2xl mx-auto leading-relaxed">
            I help e-commerce teams investigate tracking gaps, reconcile
            performance signals, and turn messy data into clearer next actions.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Primary Button - GitHub */}
          <motion.a
            href="https://github.com/muslim-rashdi-ecom"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-black font-bold text-lg shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_0_60px_-10px_rgba(249,115,22,0.7)] transition-all w-full md:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            aria-label="View GitHub Projects — opens in a new tab"
          >
            <GithubIcon className="w-5 h-5" />
            View GitHub Projects
          </motion.a>

          {/* Secondary Button - WhatsApp Audit */}
          <motion.a
            href="https://wa.me/923083607968"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-3 px-8 py-4 rounded-full border border-zinc-700 bg-zinc-900/50 text-white font-semibold text-lg hover:border-green-500 hover:bg-green-500/10 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)] transition-all w-full md:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
            aria-label="Request an E-commerce Audit via WhatsApp — opens in a new tab"
          >
            <MessageCircle className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" aria-hidden="true" />
            Request an E-commerce Audit
          </motion.a>

          {/* Secondary Button - LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/syed-muhammad-muslim-shah-2a6345401/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-3 px-8 py-4 rounded-full border border-zinc-700 bg-zinc-900/50 text-white font-semibold text-lg hover:border-blue-500 hover:bg-blue-500/10 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)] transition-all w-full md:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Connect on LinkedIn — opens in a new tab"
          >
            <LinkedinIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
            Connect on LinkedIn
          </motion.a>
        </div>
      </div>
    </section>
  );
}
