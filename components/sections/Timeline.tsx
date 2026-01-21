"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { timelineData } from "@/lib/data/timeline";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Target, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

export function Timeline() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1, margin: "50px 0px" });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={sectionRef} className="py-6 md:py-10">
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
              Execution Roadmap
            </motion.div>
            <motion.h2
              className="text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              First 90 Days: Portfolio Growth & Marketplace Impact
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-stone-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              Strategic milestones for recruiter success, GMV growth, and operational excellence.
            </motion.p>
          </div>

          {/* Timeline Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {timelineData.map((phase, index) => {
              const isExpanded = expandedCard === index;

              return (
                <motion.div
                  key={phase.phase}
                  variants={cardVariants}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  onMouseEnter={() => setExpandedCard(index)}
                  onMouseLeave={() => setExpandedCard(null)}
                  className="relative"
                >
                  <Card className={`h-full border transition-all duration-300 shadow-sm bg-white cursor-pointer ${
                    isExpanded ? 'border-blue-400 shadow-lg' : 'border-slate-200/50 hover:border-blue-300'
                  }`}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="w-fit text-xs bg-slate-100 text-slate-700 border-slate-200 font-semibold">
                          {phase.subtitle}
                        </Badge>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className={`h-4 w-4 transition-colors ${isExpanded ? 'text-blue-500' : 'text-slate-400'}`} />
                        </motion.div>
                      </div>
                      <CardTitle className="text-lg md:text-xl text-stone-900 mt-2">
                        {phase.title.split(" & ").map((part, i, arr) => (
                          <span key={i}>
                            {part}{i < arr.length - 1 && <><span> &</span><br /></>}
                          </span>
                        ))}
                      </CardTitle>
                      {phase.target && (
                        <div className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-1.5 text-sm font-bold text-white shadow-md">
                          <Target className="h-4 w-4" />
                          Target: {phase.target}
                        </div>
                      )}
                    </CardHeader>

                    {/* Expandable Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <CardContent className="pt-2 pb-4">
                        <ul className="space-y-3">
                          {phase.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-500" />
                              <div>
                                <p className="font-medium text-sm text-stone-900">
                                  {item.title}
                                </p>
                                <p className="text-xs text-stone-600 mt-0.5">
                                  → {item.description}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>

                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
