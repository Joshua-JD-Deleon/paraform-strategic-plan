"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Swords,
  CheckCircle2,
  XCircle,
  Target,
  TrendingUp,
  Shield,
  Zap,
  Building2,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

interface Competitor {
  id: string;
  name: string;
  category: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  paraformAdvantage: string[];
  whenTheyMention: string;
  keyDifferentiator: string;
}

const competitors: Competitor[] = [
  {
    id: "loopio",
    name: "Loopio",
    category: "Legacy RFP Software",
    description: "Established RFP response platform with large enterprise install base. Content library and collaboration features.",
    strengths: [
      "Large content library capabilities",
      "Established brand recognition",
      "Strong enterprise customer base",
      "Robust collaboration features"
    ],
    weaknesses: [
      "Limited AI capabilities - mostly keyword matching",
      "Manual content management burden",
      "Steep learning curve",
      "Expensive for mid-market"
    ],
    paraformAdvantage: [
      "True AI-powered response generation, not just search",
      "Learns and improves with every response",
      "Faster time to value - weeks not months",
      "Modern UX designed for actual users"
    ],
    whenTheyMention: "\"Loopio is a solid platform for content management, but if you're looking to actually accelerate response time and quality, AI-native solutions like Paraform are the next evolution. We're not just organizing your content - we're generating tailored responses that get better over time.\"",
    keyDifferentiator: "AI-first vs. content library-first approach"
  },
  {
    id: "responsive",
    name: "Responsive (formerly RFPIO)",
    category: "Legacy RFP Software",
    description: "Enterprise RFP platform known for integrations and import capabilities. Recently rebranded.",
    strengths: [
      "Strong import/export capabilities",
      "Good integration ecosystem",
      "Enterprise-grade security",
      "Mature product"
    ],
    weaknesses: [
      "Bolt-on AI feels like afterthought",
      "Complex implementation process",
      "High total cost of ownership",
      "Legacy architecture limits innovation"
    ],
    paraformAdvantage: [
      "Purpose-built AI from the ground up",
      "Faster implementation and ROI",
      "More intuitive user experience",
      "Continuous AI improvement built-in"
    ],
    whenTheyMention: "\"Responsive has been around for a while, but their AI capabilities are add-ons to a legacy platform. Paraform was built AI-first, which means the intelligence is core to everything - from how we learn your voice to how we generate responses. The architecture matters.\"",
    keyDifferentiator: "AI-native architecture vs. legacy + AI add-on"
  },
  {
    id: "qvidian",
    name: "Qvidian (Upland)",
    category: "Legacy RFP Software",
    description: "Part of Upland Software portfolio. Traditional proposal and RFP management.",
    strengths: [
      "Part of larger software suite",
      "Established enterprise processes",
      "Document automation features"
    ],
    weaknesses: [
      "Minimal AI innovation",
      "Part of portfolio company - less focus",
      "Dated user experience",
      "Slow product evolution"
    ],
    paraformAdvantage: [
      "Dedicated focus on AI-powered RFP",
      "Modern, fast-moving company",
      "Cutting-edge AI technology",
      "Customer-obsessed product development"
    ],
    whenTheyMention: "\"Qvidian is a legacy player that's part of a larger portfolio. With Paraform, you get a team that's 100% focused on revolutionizing how RFPs get done. We're not a feature in someone's portfolio - we're building the future of this category.\"",
    keyDifferentiator: "Focused AI-first startup vs. portfolio company legacy product"
  },
  {
    id: "chatgpt",
    name: "ChatGPT / Generic AI",
    category: "General AI Tools",
    description: "General-purpose LLMs that some companies try to use for RFP responses.",
    strengths: [
      "Low/no cost to try",
      "Familiar interface",
      "Good for one-off tasks",
      "Flexible for many use cases"
    ],
    weaknesses: [
      "No company context or memory",
      "Inconsistent brand voice",
      "No collaboration features",
      "Security/compliance concerns",
      "Doesn't learn from your wins"
    ],
    paraformAdvantage: [
      "Trained on YOUR content and voice",
      "Enterprise-grade security and compliance",
      "Purpose-built workflow for RFP teams",
      "Learns what wins and applies it",
      "Collaboration and review built-in"
    ],
    whenTheyMention: "\"ChatGPT is amazing for general tasks, but for something as high-stakes as RFPs, you need AI that knows YOUR company, YOUR products, and what's won before. Paraform is purpose-built for this - with the security, compliance, and workflow your team needs.\"",
    keyDifferentiator: "Purpose-built enterprise tool vs. general consumer AI"
  }
];

const battlecardTips = [
  "Never trash talk competitors - stay professional and factual",
  "Focus on customer outcomes, not feature comparisons",
  "Use 'and' not 'but' when positioning",
  "Acknowledge competitor strengths before differentiating"
];

export default function CompetitorsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
              Competitive Intelligence
            </Badge>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Competitor Battlecards
            </h1>
            <p className="text-slate-600">
              Know the landscape and how Paraform wins
            </p>
          </div>

          {/* Positioning Framework */}
          <Card className="mb-8 border border-blue-200 bg-blue-50/50 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Competitive Positioning Rules</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {battlecardTips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Paraform's Core Positioning */}
          <Card className="mb-8 border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-sm">
            <CardHeader className="py-4">
              <CardTitle className="text-lg flex items-center gap-2 text-emerald-900">
                <Zap className="h-5 w-5 text-emerald-600" />
                Paraform&apos;s Core Differentiation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-3 bg-white/70 rounded-lg border border-emerald-200">
                  <h4 className="font-semibold text-sm text-emerald-900 mb-1">AI-Native Architecture</h4>
                  <p className="text-xs text-slate-600">Built from the ground up with AI at the core, not bolted on</p>
                </div>
                <div className="p-3 bg-white/70 rounded-lg border border-emerald-200">
                  <h4 className="font-semibold text-sm text-emerald-900 mb-1">Learns & Improves</h4>
                  <p className="text-xs text-slate-600">Gets smarter with every response, learns what wins</p>
                </div>
                <div className="p-3 bg-white/70 rounded-lg border border-emerald-200">
                  <h4 className="font-semibold text-sm text-emerald-900 mb-1">Time to Value</h4>
                  <p className="text-xs text-slate-600">Weeks not months - start seeing results fast</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Competitor Cards */}
          <div className="space-y-4">
            {competitors.map((competitor, index) => {
              const isExpanded = expandedId === competitor.id;

              return (
                <motion.div
                  key={competitor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className={`border transition-all duration-300 cursor-pointer ${
                      isExpanded
                        ? 'border-blue-400 shadow-lg'
                        : 'border-slate-200/50 hover:border-blue-300 shadow-sm'
                    }`}
                    onClick={() => setExpandedId(expandedId === competitor.id ? null : competitor.id)}
                  >
                    <CardHeader className="py-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                            <Building2 className="h-5 w-5 text-slate-600" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{competitor.name}</CardTitle>
                            <Badge variant="secondary" className="text-xs mt-1">
                              {competitor.category}
                            </Badge>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className={`h-5 w-5 transition-colors ${
                            isExpanded ? 'text-blue-500' : 'text-slate-400'
                          }`} />
                        </motion.div>
                      </div>
                      <p className="text-sm text-slate-500 mt-2">{competitor.description}</p>
                    </CardHeader>

                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <CardContent className="pt-2 space-y-4">
                        {/* Strengths & Weaknesses */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                            <h4 className="font-semibold text-sm text-slate-900 mb-2 flex items-center gap-2">
                              <TrendingUp className="h-4 w-4 text-slate-500" />
                              Their Strengths
                            </h4>
                            <ul className="space-y-1">
                              {competitor.strengths.map((s, i) => (
                                <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
                                  {s}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                            <h4 className="font-semibold text-sm text-red-900 mb-2 flex items-center gap-2">
                              <XCircle className="h-4 w-4 text-red-500" />
                              Their Weaknesses
                            </h4>
                            <ul className="space-y-1">
                              {competitor.weaknesses.map((w, i) => (
                                <li key={i} className="text-xs text-red-700 flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                                  {w}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Paraform Advantage */}
                        <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                          <h4 className="font-semibold text-sm text-emerald-900 mb-2 flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                            Paraform&apos;s Advantage
                          </h4>
                          <ul className="grid md:grid-cols-2 gap-1">
                            {competitor.paraformAdvantage.map((a, i) => (
                              <li key={i} className="text-xs text-emerald-700 flex items-start gap-2">
                                <CheckCircle2 className="h-3 w-3 text-emerald-500 mt-0.5 flex-shrink-0" />
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Talk Track */}
                        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-sm text-blue-900 mb-2 flex items-center gap-2">
                            <Target className="h-4 w-4 text-blue-600" />
                            When They Mention {competitor.name}
                          </h4>
                          <p className="text-sm text-slate-700 italic">{competitor.whenTheyMention}</p>
                        </div>

                        {/* Key Differentiator */}
                        <div className="p-2 bg-purple-100 rounded-lg text-center">
                          <p className="text-xs font-semibold text-purple-800">
                            Key Differentiator: {competitor.keyDifferentiator}
                          </p>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Reference */}
          <Card className="mt-8 border border-slate-200/50 shadow-sm">
            <CardHeader className="py-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Swords className="h-5 w-5 text-slate-600" />
                Quick Competitive Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-2 px-3 font-semibold text-slate-900">Competitor</th>
                      <th className="text-left py-2 px-3 font-semibold text-slate-900">Main Weakness</th>
                      <th className="text-left py-2 px-3 font-semibold text-slate-900">Paraform Wins On</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((c) => (
                      <tr key={c.id} className="border-b border-slate-100">
                        <td className="py-2 px-3 font-medium text-slate-900">{c.name}</td>
                        <td className="py-2 px-3 text-slate-600">{c.weaknesses[0]}</td>
                        <td className="py-2 px-3 text-emerald-700">{c.paraformAdvantage[0]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
