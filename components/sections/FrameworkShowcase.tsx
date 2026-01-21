"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { foundationSteps, operationalSteps, growthSteps, scaleSteps, type FrameworkStep } from "@/lib/data/framework";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function FrameworkShowcase() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      id: "foundation",
      title: "Foundation & Operations",
      stepsRange: "1-8",
      description: "Platform mastery → recruiter relationships → operational excellence",
      steps: [...foundationSteps, ...operationalSteps],
    },
    {
      id: "growth",
      title: "Growth & Scale",
      stepsRange: "9-16",
      description: "GMV acceleration → marketplace experiments → systems building",
      steps: [...growthSteps, ...scaleSteps],
    },
  ];

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
              Account Manager Framework
            </motion.div>
            <motion.h2
              className="text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              16-Step Recruiter Success Process
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-stone-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Defined steps, objectives, and success criteria from onboarding to scaled GMV impact
            </motion.p>
          </div>

          {/* Framework Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + sectionIndex * 0.15,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                <Card
                  className={`group cursor-pointer transition-all duration-300 border bg-white ${
                    expandedSection === section.id
                      ? "border-indigo-400 shadow-lg"
                      : "border-slate-200/50 hover:border-indigo-300 shadow-sm"
                  }`}
                  onMouseEnter={() => setExpandedSection(section.id)}
                  onMouseLeave={() => setExpandedSection(null)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-slate-600 to-slate-700 text-white font-bold text-sm shadow-lg shrink-0 ${
                          expandedSection === section.id ? 'shadow-slate-500/40' : 'shadow-slate-500/20'
                        } transition-all relative overflow-hidden`}
                        animate={expandedSection === section.id && !prefersReducedMotion ? {
                          scale: [1, 1.05, 1],
                          transition: { duration: 0.4 }
                        } : {}}
                      >
                        {expandedSection === section.id && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            initial={{ x: "-100%" }}
                            animate={{ x: "200%" }}
                            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                          />
                        )}
                        <span className="relative z-10">{section.stepsRange}</span>
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-xl md:text-2xl text-stone-900 mb-2">
                          {section.title}
                        </CardTitle>
                        <p className="text-sm text-stone-600">
                          {section.description}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="shrink-0"
                      >
                        <ChevronDown className={`h-6 w-6 transition-colors ${
                          expandedSection === section.id ? 'text-indigo-500' : 'text-slate-400'
                        }`} />
                      </motion.div>
                    </div>
                  </CardHeader>
                  <AnimatePresence>
                    {expandedSection === section.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <CardContent className="pt-0 pb-4">
                          <div className="grid grid-cols-1 gap-3">
                            {section.steps.map((step: FrameworkStep, stepIndex: number) => (
                              <motion.div
                                key={step.step}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -20, opacity: 0 }}
                                transition={{ delay: stepIndex * 0.03, duration: 0.2, ease: "easeOut" }}
                                className="px-4 py-3 rounded-lg border border-slate-100"
                              >
                                <div className="flex items-start gap-3">
                                  <Badge variant="outline" className="shrink-0 border-slate-300 text-slate-700 font-semibold">
                                    {step.step}
                                  </Badge>
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-sm text-stone-900 mb-1">{step.title}</h4>
                                    <p className="text-xs text-stone-600 mb-1">
                                      <span className="font-medium text-stone-700">Objective:</span> {step.objective}
                                    </p>
                                    <p className="text-xs text-stone-600 mb-2">
                                      <span className="font-medium text-stone-700">Criteria:</span> {step.criteria}
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                      {step.frameworks.map((framework: string) => (
                                        <Badge key={framework} variant="secondary" className="text-xs bg-slate-100 text-slate-700 border-slate-200">
                                          {framework}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
