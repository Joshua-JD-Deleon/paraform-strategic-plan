"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Target, TrendingUp, ArrowUpRight, Zap } from "lucide-react";

const driversData = [
  {
    icon: Target,
    title: "Multi-Stakeholder Orchestration",
    subtitle: "CONSENSUS BUILDING",
    description: "Navigate 3-7 stakeholder deals across GTM, Operations, and Technical functions. Coordinate C-suite buying committees through MEDDICC qualification and consultative discovery to align competing priorities, build champion networks, and drive consensus across complex organizational structures.",
  },
  {
    icon: TrendingUp,
    title: "Quantified Value Engineering",
    subtitle: "ROI MODELING",
    description: "Build compelling business cases with quantified metrics: pipeline velocity, cost savings, risk reduction, time-to-value. Co-develop executive-ready ROI models, competitive TCO analysis, and value realization frameworks that secure budget approval and accelerate buying decisions across stakeholder groups.",
  },
  {
    icon: Zap,
    title: "Rapid Pipeline Generation",
    subtitle: "SYSTEMATIC EXECUTION",
    description: "Maintain consistent 4-7x pipeline coverage through trigger-based prospecting, partner activation, and strategic account planning. Deploy systematic outbound motions combining signal-based triggers, persona-led messaging, and multi-channel sequencing to build qualified pipeline at velocity across market segments.",
  },
  {
    icon: ArrowUpRight,
    title: "Strategic Account Expansion",
    subtitle: "LAND & EXPAND",
    description: "Execute cross-sell and upsell strategies across GTM, Customer Success, and Technical teams. Deploy strategic account planning frameworks to identify whitespace, build executive relationships across departments, and establish land-and-expand playbooks that drive multi-year contract frameworks through systematic value tracking and quarterly business reviews.",
  },
];

export function ImpactDrivers() {
  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Section Header */}
          <div className="text-center mb-4 md:mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Competitive Advantage
            </div>
            <h2 className="text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl mb-2">
              Impact Levers
            </h2>
            <p className="text-base md:text-lg text-stone-600">
              Converting technical expertise into revenue growth
            </p>
          </div>

          {/* Impact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {driversData.map((driver, index) => (
              <motion.div
                key={driver.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full group shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-slate-400 bg-white">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/20">
                        <driver.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-lg md:text-xl mb-2 text-stone-900 group-hover:text-indigo-600 transition-colors">{driver.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit text-xs bg-indigo-100 text-indigo-700 border-indigo-200 font-semibold mb-3">
                      {driver.subtitle}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                      {driver.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
