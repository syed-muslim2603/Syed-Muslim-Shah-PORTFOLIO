import { ExternalLink, Target, LineChart, TrendingUp, Code, Palette, Zap } from "lucide-react";
import Image from "next/image";
import SkillsTornado from "./SkillsTornado";

export default function Projects() {
  const caseStudies = [
    {
      title: "High-Velocity Market Acquisition (UAE)",
      role: "Performance Scaling",
      description: "Engineered a creative testing sandbox for a competitive home goods venture. Achieved an ultra-low AED 0.07 ($0.02) CPC while maintaining a massive 7.04% CTR through pattern-interrupt visual strategies.",
      tech: ["Meta Ads", "Shopify", "A/B Testing", "Campaign Scaling"],
      icon: <Target className="w-6 h-6 text-blue-400" />,
      image: "/project1.jpg"
    },
    {
      title: "Full-Funnel Code Diagnostics (CRO)",
      role: "Technical Intervention",
      description: "Identified a silent 6% View-to-ATC drop-off causing revenue leakage. Bypassed standard UI limits by auditing and patching the custom Meta Pixel and CAPI event code, instantly recovering lost conversions.",
      tech: ["Pixel Tracking", "Funnel Analytics", "HTML/CSS", "Consumer Psychology"],
      icon: <LineChart className="w-6 h-6 text-emerald-400" />,
      image: "/project2.jpg"
    },
    {
      title: "Organic Search Automation Engine",
      role: "SEO & Systematization",
      description: "Built a multi-week content distribution algorithm for Pinterest. Scaled organic impressions to 4.3K+ weekly, capturing high-intent US buyer traffic with zero ad-spend dependency.",
      tech: ["Pinterest SEO", "Canva Pro", "Visual Storytelling", "Keyword Mapping"],
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      image: "/project3.jpg"
    }
  ];

  const skills = [
    {
      category: "Performance",
      items: "Meta Ads Manager, Google Ads, TikTok Ads, Klaviyo Lifecycle Flows, Triple Whale Data Logic, Media Buying.",
      icon: <Zap className="w-5 h-5 text-yellow-400" />
    },
    {
      category: "Technical",
      items: "Python (Data Analysis), HTML/CSS, React/Next.js (Frontend), Shopify Liquid, Meta Conversion API (CAPI), Google Tag Manager.",
      icon: <Code className="w-5 h-5 text-indigo-400" />
    },
    {
      category: "Creative",
      items: "High-Converting Hook Scripting, CapCut Video Editing, Canva Pro, Direct-Response Visual Design.",
      icon: <Palette className="w-5 h-5 text-pink-400" />
    }
  ];

  return (
    <section className="relative z-20 bg-[#121212] pt-24 pb-32 px-4 md:px-8 text-zinc-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Experience Section */}
        <div className="mb-24">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Work Experience</h3>
          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm relative overflow-hidden group hover:border-zinc-700 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div>
                <h4 className="text-2xl font-bold text-white">Technical Growth Lead</h4>
                <p className="text-blue-400 font-medium mt-1">International E-Commerce Ventures (UAE/US Markets)</p>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-zinc-800 text-sm font-medium whitespace-nowrap">
                2024 – Present
              </span>
            </div>
            <p className="mt-6 text-zinc-400 leading-relaxed max-w-4xl relative z-10 text-lg">
              Architected end-to-end performance marketing ecosystems for independent e-commerce ventures. Managed Meta ad deployments, custom Shopify tracking integrations, and deep-dive data analysis using Python. Consistently beat market averages by combining aggressive creative testing with flawless technical tracking.
            </p>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mb-24">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">The Engineering & Growth Audits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md hover:bg-zinc-800/60 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image 
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161618] to-transparent opacity-90" />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow relative z-10">
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-zinc-800/90 shadow-lg border border-zinc-700/50 -mt-14 backdrop-blur-sm w-fit">
                    {study.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{study.title}</h4>
                  <p className="text-emerald-400 text-sm font-semibold mb-4 uppercase tracking-wider">{study.role}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {study.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arsenal / Skills Grid */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">The Technical Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 flex flex-col gap-4 hover:bg-zinc-900/50 transition-colors">
                <div className="flex items-center gap-3">
                  {skill.icon}
                  <h4 className="text-lg font-bold text-white">{skill.category}</h4>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {skill.items}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cinematic Skills Vortex */}
        <SkillsTornado />

      </div>
    </section>
  );
}
