"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const icpData = [
  {
    title: "Ideal Recruiter Profile (Supply Side)",
    sections: [
      {
        label: "AGENCY CHARACTERISTICS",
        content: "Boutique to mid-size agencies (5-50 recruiters) with tech focus. Strong placement records seeking deal flow without upfront costs.",
      },
      {
        label: "RECRUITER ATTRIBUTES",
        content: "Experienced tech recruiters (3+ years) in engineering, GTM, or executive roles. High performers seeking premium bounties and flexibility.",
      },
    ],
  },
  {
    title: "Ideal Company Profile (Demand Side)",
    sections: [
      {
        label: "COMPANY STAGE & SIZE",
        content: "Series A to Growth-stage startups ($10M-$500M). High-volume hiring (20+ roles/year). Scaling engineering, sales, or ops rapidly.",
      },
      {
        label: "HIRING CHALLENGES",
        content: "Competing for talent against FAANG. Need specialized recruiters without long-term contracts. Value speed and quality over traditional models.",
      },
    ],
  },
  {
    title: "Growth Signals & Indicators",
    sections: [
      {
        label: "RECRUITER SIGNALS",
        content: "Agency expansion, new practice areas, seeking passive income, dissatisfaction with traditional splits, interest in tech specialization.",
      },
      {
        label: "COMPANY SIGNALS",
        content: "Recent funding, headcount goals announced, job postings increasing, internal recruiting stretched, executive hiring needs.",
      },
    ],
  },
  {
    title: "Value Proposition by Side",
    sections: [
      {
        label: "RECRUITER VALUE",
        content: "3-5x higher earnings vs traditional splits. Free tools and platform. Curated job flow without BD overhead. Flexible bounty model.",
      },
      {
        label: "COMPANY VALUE",
        content: "70%+ interview rate from vetted candidates. 3x faster time-to-hire. Pay only for results. Access specialized recruiter network.",
      },
    ],
  },
];

export function ICP() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Section Header */}
          <div className="text-center mb-4 md:mb-6">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Marketplace Profiles
            </motion.div>
            <motion.h2
              className="text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Two-Sided Marketplace Strategy
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-stone-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Strategic targeting of high-potential recruiters and growth-stage companies
            </motion.p>
          </div>

          {/* ICP Methodology Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {icpData.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                <div>
                  <Card className="h-full group shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-[#5074F6]/50 bg-white">
                    <CardHeader className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <motion.div
                          className="h-1 w-12 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full"
                          initial={{ scaleX: 0 }}
                          animate={isInView ? { scaleX: 1 } : {}}
                          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                          style={{ transformOrigin: "left" }}
                        />
                      </div>
                      <CardTitle className="text-lg md:text-xl text-stone-900">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pt-0 pb-6 space-y-4">
                      {card.sections.map((section, sectionIndex) => (
                        <motion.div
                          key={sectionIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.3,
                            delay: 0.5 + index * 0.1 + sectionIndex * 0.05
                          }}
                        >
                          <div>
                            <Badge
                              variant="secondary"
                              className="mb-2 text-xs font-semibold bg-slate-100 text-slate-700 border-slate-200"
                            >
                              {section.label}
                            </Badge>
                            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                              {section.content}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
