"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const skills = [
  "Shopify", "DSers", "Klaviyo", "Zambeel", "Payment Gateways",
  "Shipping Management", "Dropshipping", "Meta Ads", "Facebook Pixel",
  "A/B Testing", "Audience Segmentation", "Pinterest SEO", "Keyword Research",
  "Content Strategy", "Canva", "Video Editing", "HTML/CSS", "Python",
  "JavaScript", "Google Analytics", "Email Automation", "SEO/SEM",
  "Product Photography", "Ad Creative Design", "Bilingual Copywriting (EN/AR)",
  "Klaviyo Email Automation", "Conversion Tracking", "Retargeting",
  "Blog Content Creation", "On-Page SEO", "UGC Style", "Visual Storytelling"
];

const colors = ["#f97316", "#3b82f6", "#e4e4e7", "#60a5fa", "#ea580c"];

export default function SkillsTornado() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tags = Array.from(container.children) as HTMLElement[];
    const radius = window.innerWidth < 768 ? 130 : 220; 
    
    const N = skills.length;
    const baseItems: { x: number; y: number; z: number; el: HTMLElement }[] = [];

    // Distribute tags in a 3D cylindrical / tornado formation
    for (let i = 0; i < N; i++) {
      const phi = Math.acos(-1 + (2 * i) / N);
      const theta = Math.sqrt(N * Math.PI) * phi;
      
      const y = Math.cos(phi); 
      // Make it slightly wider at the top (y=1) than the bottom (y=-1)
      const rFactor = (y + 1.8) / 2.8; 
      
      const x = Math.cos(theta) * Math.sin(phi) * rFactor;
      const z = Math.sin(theta) * Math.sin(phi) * rFactor;

      baseItems.push({ x, y, z, el: tags[i] });
    }

    let animationFrameId: number;
    let currentAngleY = 0;

    const update = () => {
      currentAngleY += 0.004; // Smooth continuous spin
      
      const tiltX = -0.2; // Look slightly from above to see the vortex depth
      const sinX = Math.sin(tiltX);
      const cosX = Math.cos(tiltX);

      const sinY = Math.sin(currentAngleY);
      const cosY = Math.cos(currentAngleY);

      for (let i = 0; i < N; i++) {
        const item = baseItems[i];

        // 1. Rotate around Y (Spin vortex)
        const x1 = item.x * cosY - item.z * sinY;
        const z1 = item.x * sinY + item.z * cosY;

        // 2. Rotate around X (Tilt view)
        const y1 = item.y * cosX - z1 * sinX;
        const z2 = item.y * sinX + z1 * cosX;

        const scale = 300 / (300 + z2 * radius); 
        const alpha = Math.max(0.1, (z2 + 1) / 2); 
        
        const px = x1 * radius * scale;
        // Increase height multiplier to stretch it into a tall tornado
        const py = y1 * (radius * 1.5) * scale; 

        const el = item.el;
        el.style.transform = `translate3d(${px}px, ${py}px, 0) scale(${scale})`;
        
        // Add subtle blur to items in the back for a cinematic depth-of-field / motion trail
        const blurAmount = Math.max(0, z2 * 3);
        el.style.filter = `blur(${blurAmount}px)`;
        el.style.opacity = alpha.toString();
        el.style.zIndex = Math.floor(scale * 100).toString();
      }

      animationFrameId = requestAnimationFrame(update);
    };

    update();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center mt-32 mb-16 relative">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h4 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-blue-500 mb-2">
          Skills in Motion
        </h4>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full mx-auto" />
      </motion.div>
      
      <div className="relative w-full max-w-[400px] h-[400px] md:h-[500px] flex items-center justify-center pointer-events-none">
        {/* Background ambient glow for the vortex */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[300px] bg-gradient-to-b from-orange-500/10 via-blue-900/20 to-transparent blur-3xl rounded-[100%]" />
        
        <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="absolute text-xs md:text-sm font-bold whitespace-nowrap px-3 py-1 rounded-full transition-colors duration-300 will-change-transform"
              style={{
                color: colors[i % colors.length],
                textShadow: `0 0 15px ${colors[i % colors.length]}80`,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
