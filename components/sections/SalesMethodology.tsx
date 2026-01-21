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
    title: "Portfolio Growth",
    description: "Driving GMV growth across assigned recruiter portfolio through strategic guidance, workflow optimization, and personalized success planning",
  },
  {
    icon: Target,
    title: "Relationship Management",
    description: "Building trusted advisor relationships with recruiters, establishing regular cadence, and delivering consistent value through 1:1 engagement",
  },
  {
    icon: Lightbulb,
    title: "Strategic Advisory",
    description: "Consultative approach to understand recruiter goals, identify growth opportunities, and deliver actionable recommendations",
  },
  {
    icon: Presentation,
    title: "Marketplace Operations",
    description: "Understanding supply-demand dynamics, optimizing liquidity, and running experiments to improve marketplace performance",
  },
  {
    icon: Settings,
    title: "Data-Driven Insights",
    description: "Leveraging health metrics, engagement scoring, and performance data to prioritize interventions and measure impact",
  },
  {
    icon: BookOpen,
    title: "Playbook Development",
    description: "Building repeatable success patterns, documenting best practices, and codifying learnings for team-wide adoption",
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
              Core Expertise
            </motion.div>
            <motion.h2
              className="text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Core Account Management Expertise
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-stone-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              Proven frameworks for recruiter success and marketplace growth
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
                <Card className="h-full group shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-[#5074F6]/50 bg-white">
                  <CardContent className="p-6">
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
            <Card className="inline-block shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-[#5074F6]/50 bg-gradient-to-r from-slate-50 to-stone-50 rounded-2xl">
              <CardContent className="p-6">
                <p className="text-xs md:text-sm text-stone-700">
                  <span className="font-semibold text-[#5074F6]">Account Management Standard:</span>{" "}
                  Recruiter success ownership | GMV growth execution | Operational excellence builder
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
