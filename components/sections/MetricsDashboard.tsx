"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { DollarSign, Building2, TrendingUp, Target } from "lucide-react";

const metrics = [
  {
    label: "Revenue Closed",
    value: "$8M+",
    icon: DollarSign,
    description: "Total closed B2B revenue",
  },
  {
    label: "Industries Served",
    value: "15+",
    icon: Building2,
    description: "Cross-vertical expertise",
  },
  {
    label: "Pipeline Coverage",
    value: "4.5:1",
    icon: TrendingUp,
    description: "Systematic pipeline generation",
  },
  {
    label: "Peak Quota Achievement",
    value: "169%",
    icon: Target,
    description: "Proven performance track record",
  },
];

export function MetricsDashboard() {
  return (
    <section className="py-6 md:py-10 bg-gradient-to-br from-stone-50 to-blue-50/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Section Header */}
          <div className="mb-4 md:mb-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-600 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Performance Metrics
            </div>
            <h2 className="text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl">
              Proven Results
            </h2>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full border border-slate-200/50 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 bg-white group">
                    <CardContent className="pt-6 pb-6">
                      <div className="flex flex-col items-center text-center space-y-3">
                        {/* Icon */}
                        <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-500 transition-colors duration-300">
                          <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                        </div>

                        {/* Value */}
                        <div className="text-4xl font-bold text-stone-900 group-hover:text-blue-600 transition-colors duration-300">
                          {metric.value}
                        </div>

                        {/* Label */}
                        <div className="text-sm font-semibold text-stone-700 uppercase tracking-wide">
                          {metric.label}
                        </div>

                        {/* Description */}
                        <div className="text-xs text-stone-600">
                          {metric.description}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
