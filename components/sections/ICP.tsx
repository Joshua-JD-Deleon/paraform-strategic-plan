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
        content: "Boutique to mid-size agencies (5-50 recruiters) with tech/startup focus. Strong placement track records seeking incremental deal flow without upfront costs.",
      },
      {
        label: "RECRUITER ATTRIBUTES",
        content: "Experienced tech recruiters (3+ years), specialized in engineering, GTM, or executive roles. High performers seeking premium bounties and flexible working arrangements.",
      },
    ],
  },
  {
    title: "Ideal Company Profile (Demand Side)",
    sections: [
      {
        label: "COMPANY STAGE & SIZE",
        content: "Series A to Growth-stage startups ($10M-$500M). High-volume hiring (20+ roles/year) with urgency. Scaling engineering, sales, or ops teams rapidly.",
      },
      {
        label: "HIRING CHALLENGES",
        content: "Competing for top talent against FAANG. Need specialized recruiters without long-term agency contracts. Value speed-to-hire and quality over traditional agency models.",
      },
    ],
  },
  {
    title: "Growth Signals & Indicators",
    sections: [
      {
        label: "RECRUITER SIGNALS",
        content: "Agency expansion, new practice areas launching, seeking passive income streams, dissatisfaction with traditional splits, interest in startup/tech specialization.",
      },
      {
        label: "COMPANY SIGNALS",
        content: "Recent funding rounds, headcount goals announced, job postings increasing, internal recruiting team stretched, executive hiring needs emerging.",
      },
    ],
  },
  {
    title: "Value Proposition by Side",
    sections: [
      {
        label: "RECRUITER VALUE",
        content: "3-5x higher earnings per placement vs traditional splits. Free tools and platform access. Curated job flow without BD overhead. Flexible, bounty-based model.",
      },
      {
        label: "COMPANY VALUE",
        content: "70%+ interview rate from vetted candidates. 3x faster time-to-hire. Pay only for results (listing + success fee). Access to specialized recruiter network.",
      },
    ],
  },
];

export function ICP() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="py-6 md:py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Section Header */}
          <div className="text-center mb-4 md:mb-6">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
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
                  <Card className="h-full group shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-slate-400 bg-white">
                    <CardHeader>
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
                    <CardContent className="space-y-4">
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
