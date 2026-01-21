"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Hash,
  TrendingUp,
  DollarSign,
  Target,
  Building2,
  Percent,
  Calendar,
  Award,
  Briefcase,
  Users
} from "lucide-react";

interface NumberCard {
  category: string;
  icon: React.ElementType;
  color: string;
  numbers: {
    label: string;
    value: string;
    context?: string;
  }[];
}

const numberCards: NumberCard[] = [
  {
    category: "Your Career Revenue",
    icon: DollarSign,
    color: "blue",
    numbers: [
      { label: "Total Closed Revenue", value: "$7.5M+", context: "AI-powered SaaS & strategic services" },
      { label: "Largest Single Deal", value: "$900K TCV", context: "Healthcare enterprise ML modernization" },
      { label: "Enterprise Expansion", value: "$90K → $400K", context: "F500 win-back (4.4x growth)" },
      { label: "Multi-Deal Wins", value: "$480K TCV", context: "FinTech: $170K SaaS + $310K consulting" }
    ]
  },
  {
    category: "Quota Attainment",
    icon: Award,
    color: "emerald",
    numbers: [
      { label: "Peak Performance", value: "169%", context: "Forrester 2021 - Winner's Circle" },
      { label: "Rookie Year", value: "112%", context: "Forrester 2020 - Sales Rookie of the Year" },
      { label: "Darktrace", value: "106%", context: "2019 - Field sales & POC execution" },
      { label: "Calligo", value: "95%", context: "Ranked #2 globally on $1.05M quota" }
    ]
  },
  {
    category: "Pipeline Generation",
    icon: TrendingUp,
    color: "purple",
    numbers: [
      { label: "Quarterly Pipeline", value: "$4M+", context: "GlobalData Q2 qualified pipeline" },
      { label: "Speed to Pipeline", value: "$110K in 10 days", context: "DTC brand GTM playbook" },
      { label: "Pipeline Coverage", value: "4.5x", context: "Calligo strategic partnerships" },
      { label: "Rolling Coverage", value: "4:1", context: "Darktrace cold outbound + partners" }
    ]
  },
  {
    category: "Deal Highlights",
    icon: Target,
    color: "amber",
    numbers: [
      { label: "F50 CPG Giant", value: "$110K → $1.1M", context: "Pilot to ARR renewal business case" },
      { label: "Top 20 Food Brand", value: "$310K", context: "$220K ARR + $90K TCV consulting" },
      { label: "Healthcare Enterprise", value: "$900K TCV", context: "ML modernization with CTO" },
      { label: "Agribusiness RFP", value: "$600K TCV", context: "Data modernization, CFO & R&D" }
    ]
  },
  {
    category: "Leadership & Scale",
    icon: Users,
    color: "rose",
    numbers: [
      { label: "Team Built", value: "4 ICs", context: "US Consumer team at GlobalData" },
      { label: "Office Launch", value: "SF Expansion", context: "Built San Francisco presence" },
      { label: "Global Lead", value: "10 Marquee Logos", context: "Cross-functional acquisition planning" },
      { label: "Champions Program", value: "Top 5%", context: "Forrester leadership track" }
    ]
  },
  {
    category: "GTM Consulting Results",
    icon: Briefcase,
    color: "indigo",
    numbers: [
      { label: "New Logos Closed", value: "4", context: "Enterprise logos for CRM client" },
      { label: "Revenue Impact", value: "$120K vs $110K", context: "5 months vs. prior full year" },
      { label: "YoY Growth", value: "22%", context: "Q4 to Q2 acceleration" },
      { label: "First Multi-Year ARR", value: "✓", context: "First-ever for the client" }
    ]
  }
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; border: string; text: string; light: string }> = {
    blue: { bg: "bg-blue-100", border: "border-blue-200", text: "text-blue-700", light: "bg-blue-50" },
    emerald: { bg: "bg-emerald-100", border: "border-emerald-200", text: "text-emerald-700", light: "bg-emerald-50" },
    purple: { bg: "bg-purple-100", border: "border-purple-200", text: "text-purple-700", light: "bg-purple-50" },
    amber: { bg: "bg-amber-100", border: "border-amber-200", text: "text-amber-700", light: "bg-amber-50" },
    rose: { bg: "bg-rose-100", border: "border-rose-200", text: "text-rose-700", light: "bg-rose-50" },
    indigo: { bg: "bg-blue-100", border: "border-blue-200", text: "text-blue-700", light: "bg-blue-50" }
  };
  return colors[color] || colors.blue;
};

export default function KeyNumbersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="bg-slate-100 text-slate-700 border-slate-200 mb-4">
              Your Track Record
            </Badge>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Key Numbers to Know
            </h1>
            <p className="text-slate-600">
              Your actual stats from resume - memorize these for the interview
            </p>
          </div>

          {/* Hero Stats */}
          <Card className="mb-8 border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-blue-50 shadow-lg">
            <CardHeader className="py-4">
              <CardTitle className="text-lg flex items-center gap-2 text-blue-900">
                <Hash className="h-5 w-5 text-blue-600" />
                Lightning Round - Memorize These
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="p-4 bg-white/70 rounded-lg text-center border border-blue-200">
                  <p className="text-3xl font-bold text-blue-600">$7.5M+</p>
                  <p className="text-xs text-slate-600 mt-1">Total Closed Revenue</p>
                </div>
                <div className="p-4 bg-white/70 rounded-lg text-center border border-blue-200">
                  <p className="text-3xl font-bold text-emerald-600">169%</p>
                  <p className="text-xs text-slate-600 mt-1">Peak Quota Attainment</p>
                </div>
                <div className="p-4 bg-white/70 rounded-lg text-center border border-blue-200">
                  <p className="text-3xl font-bold text-purple-600">$900K</p>
                  <p className="text-xs text-slate-600 mt-1">Largest Single Deal</p>
                </div>
                <div className="p-4 bg-white/70 rounded-lg text-center border border-blue-200">
                  <p className="text-3xl font-bold text-amber-600">$4M+</p>
                  <p className="text-xs text-slate-600 mt-1">Quarterly Pipeline</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Company Timeline */}
          <Card className="mb-8 border border-slate-200/50 shadow-sm">
            <CardHeader className="py-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-slate-600" />
                Career Timeline (Quick Reference)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-3">
                <div className="p-3 bg-slate-50 rounded-lg text-center">
                  <p className="font-bold text-sm text-slate-900">GTM Consultant</p>
                  <p className="text-xs text-slate-500">Aug 2024 - Now</p>
                  <p className="text-xs text-blue-600 mt-1">Startups & Founders</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg text-center">
                  <p className="font-bold text-sm text-slate-900">GlobalData</p>
                  <p className="text-xs text-slate-500">Jul 2023 - Jul 2024</p>
                  <p className="text-xs text-blue-600 mt-1">Sales Director Americas</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg text-center">
                  <p className="font-bold text-sm text-slate-900">Calligo</p>
                  <p className="text-xs text-slate-500">Mar 2022 - Jul 2023</p>
                  <p className="text-xs text-blue-600 mt-1">Sales Director NA</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg text-center">
                  <p className="font-bold text-sm text-slate-900">Forrester</p>
                  <p className="text-xs text-slate-500">Mar 2020 - Mar 2022</p>
                  <p className="text-xs text-blue-600 mt-1">Account Manager</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg text-center">
                  <p className="font-bold text-sm text-slate-900">Darktrace</p>
                  <p className="text-xs text-slate-500">Sep 2018 - Mar 2020</p>
                  <p className="text-xs text-blue-600 mt-1">Account Executive</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Number Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {numberCards.map((card, index) => {
              const Icon = card.icon;
              const colors = getColorClasses(card.color);

              return (
                <motion.div
                  key={card.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border border-slate-200/50 hover:border-blue-300 transition-all duration-300 shadow-sm">
                    <CardHeader className="py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                          <Icon className={`h-5 w-5 ${colors.text}`} />
                        </div>
                        <CardTitle className="text-base">{card.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {card.numbers.map((num, i) => (
                          <div
                            key={i}
                            className={`p-3 ${colors.light} rounded-lg border ${colors.border}`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-medium text-slate-600">{num.label}</span>
                              <span className={`text-lg font-bold ${colors.text}`}>{num.value}</span>
                            </div>
                            {num.context && (
                              <p className="text-xs text-slate-500">{num.context}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Paraform-Relevant Stats */}
          <Card className="mt-8 border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg">
            <CardHeader className="py-4">
              <CardTitle className="text-lg flex items-center gap-2 text-emerald-900">
                <Target className="h-5 w-5 text-emerald-600" />
                Why These Numbers Matter for Paraform
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/70 rounded-lg border border-emerald-200">
                  <h4 className="font-semibold text-sm text-emerald-900 mb-2">AI-Powered SaaS Experience</h4>
                  <ul className="space-y-1 text-xs text-slate-600">
                    <li>• GlobalData: AI-powered data analytics</li>
                    <li>• Darktrace: AI-powered cybersecurity</li>
                    <li>• GTM Consulting: AI sales intelligence tools</li>
                  </ul>
                </div>
                <div className="p-4 bg-white/70 rounded-lg border border-emerald-200">
                  <h4 className="font-semibold text-sm text-emerald-900 mb-2">Enterprise Deal Complexity</h4>
                  <ul className="space-y-1 text-xs text-slate-600">
                    <li>• F50/F500 logos closed</li>
                    <li>• Multi-stakeholder orchestration (CTO, CFO, R&D)</li>
                    <li>• RFP wins ($600K, $220K via MEDDICC)</li>
                  </ul>
                </div>
                <div className="p-4 bg-white/70 rounded-lg border border-emerald-200">
                  <h4 className="font-semibold text-sm text-emerald-900 mb-2">Founding/Building Experience</h4>
                  <ul className="space-y-1 text-xs text-slate-600">
                    <li>• Built US team from scratch at GlobalData</li>
                    <li>• SF office launch</li>
                    <li>• GTM playbook development for startups</li>
                  </ul>
                </div>
                <div className="p-4 bg-white/70 rounded-lg border border-emerald-200">
                  <h4 className="font-semibold text-sm text-emerald-900 mb-2">RFP-Specific Relevance</h4>
                  <ul className="space-y-1 text-xs text-slate-600">
                    <li>• Won RFPs at Darktrace ($220K) & Calligo ($600K)</li>
                    <li>• Understands RFP pain from seller side</li>
                    <li>• MEDDICC methodology expert</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Tips */}
          <Card className="mt-6 border border-slate-200/50 shadow-sm">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-slate-900 mb-3">How to Use Numbers in the Interview</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="font-medium text-sm text-slate-900 mb-1">Lead with Impact</p>
                  <p className="text-xs text-slate-600">&quot;I&apos;ve closed $7.5M+ across AI-powered SaaS...&quot;</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="font-medium text-sm text-slate-900 mb-1">Be Specific</p>
                  <p className="text-xs text-slate-600">&quot;My largest deal was $900K with a healthcare enterprise...&quot;</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="font-medium text-sm text-slate-900 mb-1">Connect to Paraform</p>
                  <p className="text-xs text-slate-600">&quot;I&apos;ve won RFPs myself, so I know the pain Paraform solves...&quot;</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
