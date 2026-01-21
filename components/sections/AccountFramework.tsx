"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accountFrameworkData } from "@/lib/data/account-framework";
import { motion, useInView } from "framer-motion";
import { Target, Zap, TrendingUp, DollarSign, FileText } from "lucide-react";
import { useRef } from "react";

const phaseIcons = {
  foundation: Target,
  activation: Zap,
  expansion: TrendingUp,
  revenue: DollarSign,
};

const phaseColors = {
  foundation: "from-slate-700 to-slate-600",
  activation: "from-slate-600 to-rose-500",
  expansion: "from-rose-500 to-rose-400",
  revenue: "from-rose-600 to-rose-500",
};

const phaseBadgeColors = {
  foundation: "bg-rose-100 text-rose-700 border-rose-200",
  activation: "bg-rose-100 text-rose-700 border-rose-200",
  expansion: "bg-rose-100 text-rose-700 border-rose-200",
  revenue: "bg-rose-100 text-rose-700 border-rose-200",
};

export function AccountFramework() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          {/* Section Header */}
          <div className="text-center mb-6">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 text-sm font-medium text-rose-700 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              Account Framework
            </motion.div>
            <motion.h2
              className="text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              16-Step Retention & Expansion Process
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-stone-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Defined steps, objectives, and success criteria from account health to expansion revenue
            </motion.p>
          </div>

          {/* Framework Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Accordion type="multiple" defaultValue={["foundation"]} className="space-y-4">
              {accountFrameworkData.map((phase) => {
                const Icon = phaseIcons[phase.id as keyof typeof phaseIcons];
                const gradient = phaseColors[phase.id as keyof typeof phaseColors];
                const badgeColor = phaseBadgeColors[phase.id as keyof typeof phaseBadgeColors];

                return (
                  <AccordionItem
                    key={phase.id}
                    value={phase.id}
                    className="border border-slate-200 rounded-lg bg-white overflow-hidden shadow-sm"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4 text-left">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <Badge variant="outline" className={`${badgeColor} text-xs font-semibold`}>
                              Steps {phase.steps}
                            </Badge>
                            <span className="text-xs font-bold text-slate-500 tracking-wider">
                              {phase.title}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-slate-900">
                            {phase.subtitle}
                          </h3>
                          <p className="text-sm text-slate-600 mt-0.5 hidden md:block">
                            {phase.description}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                        {phase.items.map((item) => (
                          <Card key={item.step} className="border-slate-200 hover:border-slate-300 transition-colors">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 mb-3">
                                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-sm font-bold`}>
                                  {item.step}
                                </div>
                                <h4 className="font-semibold text-slate-900">
                                  {item.title}
                                </h4>
                              </div>

                              <div className="space-y-3">
                                <div>
                                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                                    Objective
                                  </p>
                                  <p className="text-sm text-slate-700">
                                    {item.objective}
                                  </p>
                                </div>

                                <div>
                                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                                    Success Criteria
                                  </p>
                                  <p className="text-xs text-slate-600">
                                    {item.criteria}
                                  </p>
                                </div>

                                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                                  {item.tools.map((tool) => (
                                    <span
                                      key={tool}
                                      className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
                                    >
                                      <FileText className="h-3 w-3" />
                                      {tool}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
