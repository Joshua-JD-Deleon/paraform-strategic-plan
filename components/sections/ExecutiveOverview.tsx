"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ExecutiveOverview() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-6 md:py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Section Header */}
          <div className="mb-4 md:mb-6 text-center">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, ease: "backOut" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Strategic Summary
            </motion.div>
            <motion.h2
              className="text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Executive Overview
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-stone-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Full-cycle new business development framework for founding sales role
            </motion.p>
          </div>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-slate-400 bg-white rounded-2xl">
              <CardContent className="pt-6 pb-6">
                <div className="space-y-4">
                  {/* Main Value Proposition */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">Value Proposition</p>
                    <p className="text-sm md:text-base text-stone-700 leading-relaxed">
                      Enterprise sales professional with $7.5M+ closed revenue across AI-powered SaaS, specializing in transforming early markets into high-growth engines. Proven track record in full-cycle enterprise sales, complex deal execution, and GTM strategy development, including partnering with founders to build sales playbooks. Experienced in MEDDICC methodology, multi-stakeholder orchestration, and AI-augmented sales tech stack optimization.
                    </p>
                  </motion.div>

                  {/* Why Arphie */}
                  <motion.div
                    className="pt-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">Why Arphie</p>
                    <p className="text-sm md:text-base text-stone-700 leading-relaxed">
                      AI + enterprise sales + founding role = ideal opportunity to drive measurable revenue impact and long-term growth. Arphie solves a pain I've seen firsthand: RFP response cycles that drain sales capacity. Excited to translate that into pipeline.
                    </p>
                  </motion.div>

                  {/* Disclaimer with subtle entrance */}
                  <motion.div
                    className="pt-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 }}
                  >
                    <p className="text-xs md:text-sm text-stone-500 italic">
                      This briefing provides a high-level overview for interview discussions. Final strategy will be collaboratively developed during onboarding based on organizational priorities.
                    </p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
