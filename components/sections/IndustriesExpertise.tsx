"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Building2,
  Shield,
  Briefcase,
  TrendingUp,
  Heart,
  Sprout,
  FlaskConical,
  Scale,
  Code,
  CheckCircle2,
  DollarSign,
  LucideIcon
} from "lucide-react";

interface Deal {
  amount: string;
  description: string;
  timeline?: string;
}

interface Industry {
  name: string;
  icon: LucideIcon;
  color: string;
  deals: Deal[];
  solutions: string[];
}

// Industry verticals with proven results
const industries: Industry[] = [
  {
    name: "Healthcare & BioTech",
    icon: Heart,
    color: "blue",
    deals: [
      { amount: "$900K TCV", description: "ML modernization with healthcare CTO", timeline: "12-month acceleration" }
    ],
    solutions: ["AI/ML Infrastructure", "Compliance (HIPAA)", "Data Analytics"]
  },
  {
    name: "Financial Services",
    icon: TrendingUp,
    color: "blue",
    deals: [
      { amount: "$480K ARR", description: "FinTech cross-sell across 3 GTM functions" }
    ],
    solutions: ["Security & Compliance", "API Integration", "Platform Engineering"]
  },
  {
    name: "AgTech",
    icon: Sprout,
    color: "blue",
    deals: [
      { amount: "$600K", description: "Agribusiness RFP win" }
    ],
    solutions: ["Data Analytics", "IoT Integration", "Cloud Infrastructure"]
  },
  {
    name: "F500 CPG",
    icon: Building2,
    color: "blue",
    deals: [
      { amount: "$1.1M ARR", description: "Multi-year renewal case development" }
    ],
    solutions: ["GTM Transformation", "Market Research", "Value Engineering"]
  },
  {
    name: "Enterprise Tech",
    icon: Code,
    color: "blue",
    deals: [
      { amount: "$400K ARR", description: "F500 mobility platform win-back via GTM gap analysis" }
    ],
    solutions: ["DevOps/CI/CD", "Platform Engineering", "SRE"]
  },
  {
    name: "Legal Tech",
    icon: Scale,
    color: "blue",
    deals: [
      { amount: "Multi-deal", description: "Regulatory compliance across legal sector" }
    ],
    solutions: ["Cybersecurity", "Compliance (SOC 2)", "Data Protection"]
  }
];

// Product categories sold
const productCategories = [
  {
    category: "AI/ML & Data Analytics",
    icon: FlaskConical,
    products: [
      "AI-powered market intelligence",
      "ML infrastructure modernization",
      "Predictive analytics platforms",
      "Research & insights solutions"
    ],
    companies: ["GlobalData", "Calligo"]
  },
  {
    category: "Cybersecurity & Compliance",
    icon: Shield,
    products: [
      "Network threat detection",
      "SOC 2 & FedRAMP solutions",
      "Cyber AI platform",
      "Regulatory compliance tools"
    ],
    companies: ["Darktrace", "Calligo"]
  },
  {
    category: "GTM & Revenue Intelligence",
    icon: Briefcase,
    products: [
      "Market research & advisory",
      "Competitive intelligence",
      "Account-based intelligence",
      "Sales enablement solutions"
    ],
    companies: ["Forrester", "GlobalData"]
  }
];

// Key metrics
const keyMetrics: Array<{
  label: string;
  value: string;
  icon: any;
  subtitle?: string;
}> = [
  { label: "Total Closed Revenue", value: "$7.5M+", icon: DollarSign },
  { label: "Industries Served", value: "8+", icon: Building2 },
  { label: "Enterprise Logos", value: "4 New", icon: CheckCircle2 },
  { label: "Pipeline Coverage", value: "4.5:1", icon: TrendingUp }
];

export function IndustriesExpertise() {
  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Section Header */}
          <div className="text-center mb-4 md:mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-600 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Proven Track Record
            </div>
            <h2 className="text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl mb-4">
              Industries & Solutions Expertise
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Strategic deal execution across verticals, from AI SaaS to Cybersecurity, Healthcare to FinTech
            </p>
          </div>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center border border-slate-200/50 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-stone-50">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-2">
                      <div className="p-2 rounded-lg bg-indigo-100">
                        <metric.icon className="h-5 w-5 text-indigo-600" />
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-indigo-600 mb-1">{metric.value}</p>
                    <p className="text-xs text-stone-600 font-medium">{metric.label}</p>
                    {metric.subtitle && (
                      <p className="text-xs text-stone-500 mt-1 italic">{metric.subtitle}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Industry Verticals with Deals */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-stone-900 mb-6 text-center">
              Industry Verticals & Deal Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full group border border-slate-200/50 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-stone-50">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/20">
                          <industry.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-xl text-stone-900 group-hover:text-indigo-600 transition-colors">
                        {industry.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {/* Deal Highlights */}
                      <div className="mb-4 space-y-2">
                        {industry.deals.map((deal, idx) => (
                          <div key={idx} className="bg-indigo-50 rounded-lg p-3 border border-indigo-200">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge className="bg-indigo-600 text-white text-xs font-bold">
                                {deal.amount}
                              </Badge>
                              {deal.timeline && (
                                <span className="text-xs text-indigo-700 font-medium">
                                  {deal.timeline}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-stone-700 leading-relaxed">
                              {deal.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Solutions */}
                      <div className="flex flex-wrap gap-1.5">
                        {industry.solutions.map((solution) => (
                          <Badge
                            key={solution}
                            variant="secondary"
                            className="text-xs bg-stone-100 text-stone-700 border-stone-200"
                          >
                            {solution}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-2xl font-bold text-stone-900 mb-6 text-center">
              Products & Solutions Sold
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {productCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full group border border-slate-200/50 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-stone-50">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 rounded-xl bg-indigo-100 group-hover:scale-110 transition-transform">
                          <category.icon className="h-6 w-6 text-indigo-600" />
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-2 text-stone-900 group-hover:text-indigo-600 transition-colors">
                        {category.category}
                      </CardTitle>
                      <div className="flex gap-2">
                        {category.companies.map((company) => (
                          <Badge
                            key={company}
                            variant="outline"
                            className="text-xs border-indigo-300 text-indigo-700 font-semibold"
                          >
                            {company}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.products.map((product) => (
                          <li key={product} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-stone-700">{product}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-gradient-to-br from-indigo-50 to-stone-50 rounded-2xl p-8 border-2 border-indigo-200">
              <p className="text-sm text-stone-600 mb-2 font-medium">
                Cross-Vertical Value Proposition
              </p>
              <p className="text-lg font-bold text-stone-900 mb-1">
                Technical + Strategic Fluency Across Industries
              </p>
              <p className="text-sm text-stone-600 max-w-2xl">
                From AI infrastructure to compliance frameworks, cybersecurity to GTM transformation,
                proven ability to translate complex technical solutions into strategic business value
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
