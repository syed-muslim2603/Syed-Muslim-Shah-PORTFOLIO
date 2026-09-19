"use client";

import {
  ExternalLink,
  Target,
  LineChart,
  TrendingUp,
  Code,
  Palette,
  Zap,
} from "lucide-react";
import Image from "next/image";
import SkillsTornado from "./SkillsTornado";

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

const LINK_PROPS = {
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
};

export default function Projects() {
  const caseStudies = [
    {
      title: "High-Velocity Market Acquisition — UAE",
      role: "Performance Marketing Test",
      description:
        "Meta Ads creative testing for a UAE e-commerce campaign. The documented test produced an AED 0.0734 CPC and 7.04% CTR during the recorded test period. Results are directional and should be evaluated alongside spend, attribution settings, and downstream conversion data.",
      disclaimer: "Campaign snapshot — not a guaranteed future result.",
      tech: ["Meta Ads", "Shopify", "Creative Testing", "Campaign Analysis"],
      icon: <Target className="w-6 h-6 text-blue-400" aria-hidden="true" />,
      image: "/project1.jpg",
      imageAlt:
        "Meta Ads campaign dashboard screenshot for UAE market acquisition test showing CPC and CTR metrics",
    },
    {
      title: "Full-Funnel Measurement Diagnostics",
      role: "Technical Measurement Audit",
      description:
        "Reviewed a potential View-to-ATC measurement gap and examined the relationship between browser events, server-side events, and funnel movement. The project demonstrates how tracking inconsistencies can be investigated before campaign scaling.",
      disclaimer: null,
      tech: [
        "Pixel Diagnostics",
        "Funnel Analytics",
        "Meta CAPI",
        "Shopify",
        "HTML/CSS",
      ],
      icon: (
        <LineChart className="w-6 h-6 text-emerald-400" aria-hidden="true" />
      ),
      image: "/project2.jpg",
      imageAlt:
        "Funnel diagnostics dashboard showing View-to-ATC event tracking and browser vs server-side event comparison",
    },
    {
      title: "Organic Content Distribution System",
      role: "SEO and Content Systematization",
      description:
        "Built a multi-week Pinterest content distribution workflow using keyword mapping, visual storytelling, and repeatable publishing processes. The documented snapshot reached more than 4.3K weekly impressions during the measured period.",
      disclaimer:
        "Organic reach snapshot — results vary by topic, account history, and publishing consistency.",
      tech: [
        "Pinterest SEO",
        "Keyword Mapping",
        "Content Strategy",
        "Visual Storytelling",
      ],
      icon: (
        <TrendingUp className="w-6 h-6 text-purple-400" aria-hidden="true" />
      ),
      image: "/project3.jpg",
      imageAlt:
        "Pinterest analytics dashboard showing organic weekly impressions from a structured content distribution workflow",
    },
  ];

  const skills = [
    {
      category: "Performance Marketing",
      items:
        "Meta Ads, Google Ads, TikTok Ads, media buying, creative testing, audience segmentation, Klaviyo lifecycle workflows, and performance reporting.",
      icon: <Zap className="w-5 h-5 text-yellow-400" aria-hidden="true" />,
    },
    {
      category: "Measurement & Technical Systems",
      items:
        "Shopify measurement, Google Tag Manager, GA4 auditing, Meta Pixel, Meta Conversions API concepts, event validation, funnel diagnostics, and first-party measurement.",
      icon: <Code className="w-5 h-5 text-indigo-400" aria-hidden="true" />,
    },
    {
      category: "Creative & Content",
      items:
        "Direct-response creative testing, hook scripting, Canva, CapCut, UGC-style concepts, Pinterest SEO, keyword mapping, and visual storytelling.",
      icon: <Palette className="w-5 h-5 text-pink-400" aria-hidden="true" />,
    },
  ];

  const featuredSystems = [
    {
      title: "Livora E-commerce Measurement Audit",
      description:
        "Evidence-led audit framework for Shopify funnel tracking, pixel events, and attribution gaps.",
      status: "Public repository",
      statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
      tech: [
        "Shopify",
        "Meta Ads",
        "Pixel Diagnostics",
        "Measurement Audit",
      ],
      repoUrl:
        "https://github.com/muslim-rashdi-ecom/livora-ecommerce-measurement-audit",
      buttons: [
        {
          label: "View Repository",
          url: "https://github.com/muslim-rashdi-ecom/livora-ecommerce-measurement-audit",
          primary: true,
          ariaLabel:
            "View Livora E-commerce Measurement Audit repository on GitHub — opens in a new tab",
        },
        {
          label: "Read Audit",
          url: "https://github.com/muslim-rashdi-ecom/livora-ecommerce-measurement-audit",
          primary: false,
          ariaLabel:
            "Read the Livora audit documentation on GitHub — opens in a new tab",
        },
      ],
    },
    {
      title: "Shopify First-Party Measurement Gateway",
      description:
        "Privacy-aware measurement gateway concept covering consent, event validation, deduplication, and provider mapping.",
      status: "Public repository",
      statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
      tech: [
        "First-Party Measurement",
        "Event Validation",
        "Deduplication",
        "CAPI",
      ],
      repoUrl:
        "https://github.com/muslim-rashdi-ecom/shopify-first-party-measurement-gateway",
      buttons: [
        {
          label: "View Repository",
          url: "https://github.com/muslim-rashdi-ecom/shopify-first-party-measurement-gateway",
          primary: true,
          ariaLabel:
            "View Shopify First-Party Measurement Gateway repository on GitHub — opens in a new tab",
        },
        {
          label: "Read Documentation",
          url: "https://github.com/muslim-rashdi-ecom/shopify-first-party-measurement-gateway",
          primary: false,
          ariaLabel:
            "Read the gateway documentation on GitHub — opens in a new tab",
        },
      ],
    },
    {
      title: "E-commerce Growth Control Tower",
      description:
        "Decision-support dashboard concept connecting ad spend, funnel movement, creative fatigue, and tracking confidence.",
      status: "Public repository",
      statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
      tech: [
        "Growth Analytics",
        "Funnel Monitoring",
        "Creative Testing",
        "Reporting",
      ],
      repoUrl:
        "https://github.com/muslim-rashdi-ecom/ecommerce-growth-control-tower",
      buttons: [
        {
          label: "View Repository",
          url: "https://github.com/muslim-rashdi-ecom/ecommerce-growth-control-tower",
          primary: true,
          ariaLabel:
            "View E-commerce Growth Control Tower repository on GitHub — opens in a new tab",
        },
        {
          label: "View Architecture",
          url: "https://github.com/muslim-rashdi-ecom/ecommerce-growth-control-tower",
          primary: false,
          ariaLabel:
            "View architecture documentation on GitHub — opens in a new tab",
        },
      ],
    },
    {
      title: "Commerce Truth Lab",
      description:
        "Evidence-first e-commerce revenue integrity platform for reconciling orders, payments, refunds, COD settlements, advertising data, and purchase signals.",
      status: "In validation — public launch in progress",
      statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
      tech: [
        "Revenue Reconciliation",
        "E-commerce Audits",
        "Payment Integrity",
        "Tracking Health",
      ],
      repoUrl: "https://github.com/muslim-rashdi-ecom/commerce-truth-lab",
      buttons: [
        {
          label: "View Repository",
          url: "https://github.com/muslim-rashdi-ecom/commerce-truth-lab",
          primary: true,
          ariaLabel:
            "View Commerce Truth Lab repository on GitHub — opens in a new tab",
        },
        {
          label: "Product Preview",
          url: "https://commerce-truth-lab--rashdimukram26.replit.app/",
          primary: false,
          ariaLabel:
            "View Commerce Truth Lab product preview on Replit — validation in progress, opens in a new tab",
          note: "Product preview — validation in progress",
        },
      ],
    },
  ];

  return (
    <section className="relative z-20 bg-[#121212] pt-24 pb-32 px-4 md:px-8 text-zinc-100">
      <div className="max-w-6xl mx-auto">

        {/* ── Work Experience ── */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Work Experience
          </h2>
          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm relative overflow-hidden group hover:border-zinc-700 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Technical Growth Lead
                </h3>
                <p className="text-blue-400 font-medium mt-1">
                  Independent E-commerce Ventures · UAE / US
                </p>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-zinc-800 text-sm font-medium whitespace-nowrap">
                2024 – Present
              </span>
            </div>
            <p className="mt-6 text-zinc-400 leading-relaxed max-w-4xl relative z-10 text-lg">
              Built and managed independent e-commerce growth systems across
              paid acquisition, Shopify measurement, funnel diagnostics, and
              performance reporting. Combined campaign testing with technical
              tracking review to improve decision quality before scaling spend.
            </p>
          </div>
        </div>

        {/* ── Campaign Tests & Audits ── */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Selected Builds, Campaign Tests &amp; Measurement Audits
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-3xl">
            Independent projects demonstrating performance marketing,
            e-commerce measurement, tracking diagnostics, and growth systems
            thinking.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className="group flex flex-col rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md hover:bg-zinc-800/60 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161618] to-transparent opacity-90" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative z-10">
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-zinc-800/90 shadow-lg border border-zinc-700/50 -mt-14 backdrop-blur-sm w-fit">
                    {study.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-emerald-400 text-sm font-semibold mb-4 uppercase tracking-wider">
                    {study.role}
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {study.description}
                  </p>
                  {study.disclaimer && (
                    <p className="text-xs text-zinc-600 italic mb-6">
                      {study.disclaimer}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {study.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Technical Stack ── */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            The Technical Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 flex flex-col gap-4 hover:bg-zinc-900/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {skill.icon}
                  <h3 className="text-lg font-bold text-white">
                    {skill.category}
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {skill.items}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Featured Systems & Audits ── */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured Systems &amp; Audits
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-3xl">
            Public repositories documenting practical e-commerce measurement,
            tracking, reconciliation, and growth-system work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredSystems.map((sys, idx) => (
              <div
                key={idx}
                className="group flex flex-col rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md hover:bg-zinc-800/50 hover:-translate-y-1 transition-all duration-300 p-6"
              >
                {/* Status badge */}
                <span
                  className={`self-start text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${sys.statusColor}`}
                >
                  {sys.status}
                </span>

                <div className="flex items-start gap-3 mb-3">
                  <GithubIcon className="w-5 h-5 text-zinc-500 mt-0.5 shrink-0" />
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {sys.title}
                  </h3>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-grow">
                  {sys.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {sys.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {sys.buttons.map((btn, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <a
                        href={btn.url}
                        {...LINK_PROPS}
                        aria-label={btn.ariaLabel}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                          btn.primary
                            ? "bg-zinc-700 hover:bg-zinc-600 text-white"
                            : "border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white"
                        }`}
                      >
                        {btn.primary ? (
                          <GithubIcon className="w-4 h-4" />
                        ) : (
                          <ExternalLink
                            className="w-4 h-4"
                            aria-hidden="true"
                          />
                        )}
                        {btn.label}
                      </a>
                      {"note" in btn && btn.note && (
                        <span className="text-xs text-zinc-600 italic pl-1">
                          {btn.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Skills Tornado ── */}
        <SkillsTornado />
      </div>
    </section>
  );
}
