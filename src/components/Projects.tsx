import { ExternalLink, Target, LineChart, TrendingUp, Code, Palette, Zap } from "lucide-react";
import Image from "next/image";
import SkillsTornado from "./SkillsTornado";

export default function Projects() {
  const caseStudies = [
    {
      title: "UAE Market Expansion & Acquisition",
      role: "Performance Marketer",
      description: "Engineered a high-efficiency paid acquisition engine for a D2C Shopify store targeting the UAE. Utilized pattern-interrupting visual hooks to achieve an ultra-low $0.02 CPC and a 7.04% CTR on Meta Ads.",
      tech: ["Meta Ads", "Shopify", "A/B Testing", "Campaign Scaling"],
      icon: <Target className="w-6 h-6 text-blue-400" />,
      image: "/project1.jpg"
    },
    {
      title: "Full-Funnel Conversion Diagnostics (CRO)",
      role: "CRO Specialist",
      description: "Implemented custom Facebook Pixel event tracking across 6,200+ pageviews to map the complete user journey. Successfully diagnosed a critical 6% View-to-ATC drop-off, allowing for targeted landing page redesigns to eliminate funnel leaks.",
      tech: ["Pixel Tracking", "Funnel Analytics", "HTML/CSS", "Consumer Psychology"],
      icon: <LineChart className="w-6 h-6 text-emerald-400" />,
      image: "/project2.jpg"
    },
    {
      title: "Organic Visual Search Scale",
      role: "Content Strategist",
      description: "Executed a 35-day organic growth campaign focused on SEO-optimized visual assets. Grew account reach from zero to 4.3K+ impressions with a platform-beating 4.4% engagement rate, completely independent of ad spend.",
      tech: ["Pinterest SEO", "Canva Pro", "Visual Storytelling", "Keyword Mapping"],
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      image: "/project3.jpg"
    }
  ];

  const skills = [
    {
      category: "Performance",
      items: "Meta Ads, Google Ads, A/B Testing, Media Buying, Funnel Optimization, Lead Generation.",
      icon: <Zap className="w-5 h-5 text-yellow-400" />
    },
    {
      category: "Technical",
      items: "Python, HTML, CSS, Shopify Architecture, Conversion Tracking (Pixels/GA4).",
      icon: <Code className="w-5 h-5 text-indigo-400" />
    },
    {
      category: "Creative",
      items: "AI Image Generation (Cinematic/Realistic), UGC Scriptwriting, Canva Pro Expert, Video Editing.",
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
                <h4 className="text-2xl font-bold text-white">E-Commerce Store Owner & Growth Lead</h4>
                <p className="text-blue-400 font-medium mt-1">Independent Venture</p>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-zinc-800 text-sm font-medium whitespace-nowrap">
                Early 2024 – Present
              </span>
            </div>
            <p className="mt-6 text-zinc-400 leading-relaxed max-w-4xl relative z-10 text-lg">
              Independently built and managed end-to-end Shopify dropshipping operations. Handled everything from storefront development and international payment gateways to UGC video production and bilingual (English/Arabic) copywriting. Transitioned a foundational background in Computer Science into building scalable, data-driven revenue engines.
            </p>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mb-24">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Case Studies</h3>
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
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Arsenal & Tooling</h3>
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
