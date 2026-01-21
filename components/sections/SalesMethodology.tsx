"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  TrendingUp,
  Lightbulb,
  Presentation,
  Settings,
  BookOpen,
} from "lucide-react";

const methodologies = [
  {
    icon: TrendingUp,
    title: "Full-Cycle Sales",
    description: "End-to-end deal ownership from prospecting to close, running enterprise sales cycles with founder-level gravitas",
  },
  {
    icon: Target,
    title: "Pipeline Generation",
    description: "Systematic outbound execution, multi-channel prospecting, conference activation, and inbound qualification",
  },
  {
    icon: Lightbulb,
    title: "MEDDICC Qualification",
    description: "Rigorous qualification methodology, stakeholder mapping, quantified business cases, and decision alignment",
  },
  {
    icon: Presentation,
    title: "Discovery & Demo Excellence",
    description: "Consultative discovery uncovering pain points, tailored product demos, and proof-of-concept execution",
  },
  {
    icon: Settings,
    title: "GTM Systems Expertise",
    description: "Modern GTM tech stack proficiency, workflow automation, AI-augmented tooling, and CRM discipline",
  },
  {
    icon: BookOpen,
    title: "Sales Process Development",
    description: "Building repeatable playbooks, documenting best practices, and establishing sales foundations for scale",
  },
];

export function SalesMethodology() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1, margin: "50px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
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
              className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Core Expertise
            </motion.div>
            <motion.h2
              className="text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Core Sales Expertise
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-stone-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              Proven frameworks for new logo acquisition and sales process excellence
            </motion.p>
          </div>

          {/* Methodology Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {methodologies.map((method) => (
              <motion.div
                key={method.title}
                variants={cardVariants}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Card className="h-full group shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-slate-400 bg-white">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                        <method.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <Badge
                          variant="secondary"
                          className="mb-2 text-xs bg-slate-100 text-slate-700 border-slate-200 font-semibold"
                        >
                          {method.title}
                        </Badge>
                        <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Summary Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-6 text-center"
          >
            <Card className="inline-block shadow-sm border border-slate-200/50 bg-gradient-to-r from-slate-50 to-stone-50 rounded-2xl">
              <CardContent className="py-4 px-6">
                <p className="text-xs md:text-sm text-stone-700">
                  <span className="font-semibold text-indigo-600">Sales Excellence Standard:</span>{" "}
                  Full-cycle ownership | Pipeline-to-close execution | Sales process builder
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
