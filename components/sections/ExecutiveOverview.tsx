"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ExecutiveOverview() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Section Header */}
          <div className="mb-4 md:mb-6 text-center">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, ease: "backOut" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
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
              Strategic approach to recruiter success and marketplace growth
            </motion.p>
          </div>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-[#5074F6]/50 bg-white rounded-2xl">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Main Value Proposition */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">Value Proposition</p>
                    <p className="text-sm md:text-base text-stone-700 leading-relaxed">
                      Revenue leader with $8M+ closed across AI-powered SaaS and strategic services, specializing in building enterprise relationships and scaling cold-start markets. Proven track record in multi-stakeholder pipeline generation, GTM execution, and cross-functional alignment. Expert in MEDDICC methodology, consultative selling, and advising on strategy, market positioning, and buyer insights to drive growth.
                    </p>
                  </motion.div>

                  {/* Why Arphie */}
                  <motion.div
                    className="pt-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">Why Paraform</p>
                    <p className="text-sm md:text-base text-stone-700 leading-relaxed">
                      Marketplace dynamics + relationship building + revenue impact = ideal opportunity to drive GMV growth. Paraform's two-sided model aligns with my experience building enterprise relationships and scaling cold-start markets. Excited to help recruiters succeed and drive marketplace liquidity.
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
                      This document demonstrates my strategic approach for interview discussions. Final strategies and priorities would be developed collaboratively during onboarding.
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
