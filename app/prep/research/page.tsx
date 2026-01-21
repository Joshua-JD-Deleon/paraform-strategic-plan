"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Building2,
  Users,
  Swords,
  Hash,
  Linkedin,
  ExternalLink,
  Target,
  MessageSquare,
  GraduationCap,
  Briefcase,
  Lightbulb,
  Star,
  TrendingUp,
  DollarSign,
  Award,
  Calendar,
  CheckCircle2,
  XCircle,
  Shield,
  Zap
} from "lucide-react";

// Tab definitions
const tabs = [
  { id: "product", label: "Product Intel", icon: Building2 },
  { id: "team", label: "Team Research", icon: Users },
  { id: "competitors", label: "Competitors", icon: Swords },
  { id: "numbers", label: "Key Numbers", icon: Hash },
];

// Team data
const teamMembers = [
  {
    name: "Dean Shu",
    role: "Co-Founder & CEO",
    email: "dean@paraform.ai",
    education: "Harvard University (Economics & Psychology)",
    background: [
      "Co-Founder & CEO at Paraform (Jan 2024 - Present)",
      "Head of Studio at Scale AI (2022-2023)",
      "Chief of Staff to CEO at Scale AI (2021-2022)",
      "Business Analyst at McKinsey & Company (2015-2017)"
    ],
    linkedinUrl: "https://www.linkedin.com/in/dean-shu/",
    questionsToAsk: [
      "What did you learn at Scale AI that shaped how you're building Paraform?",
      "What's the biggest GTM challenge you're trying to solve right now?",
      "How do you see the founding AE role evolving as the company grows?"
    ],
    connectionPoints: ["Scale AI = enterprise AI sales", "McKinsey analytical rigor", "Shared passion for AI"],
    interviewRole: "Will conduct Paraform Discovery call role-play as 'Sr. Director @ Affirm'"
  },
  {
    name: "Lauren Wong",
    role: "Chief of Staff",
    email: "lauren@paraform.ai",
    education: "Stanford GSB (MBA)",
    background: [
      "Chief of Staff at Paraform (Current)",
      "Strategy & Operations MBA Intern at Fora Travel",
      "Associate at CPP Investments",
      "Investment Banking Analyst at Credit Suisse"
    ],
    linkedinUrl: "https://www.linkedin.com/in/lwong96/",
    questionsToAsk: [
      "What's surprised you most about going from finance to a startup?",
      "How do you see the Chief of Staff role supporting sales?",
      "What's the team culture like day-to-day?"
    ],
    connectionPoints: ["Stanford GSB", "Finance background = understands ROI", "CPP = enterprise decision-making"]
  },
  {
    name: "Bilal Malik",
    role: "Software Engineer",
    email: "bilal@paraform.ai",
    education: "University of Windsor",
    background: ["Software Engineer at Paraform", "Previous: Palantir Technologies", "Previous: Zynga", "Previous: IBM"],
    linkedinUrl: "https://www.linkedin.com/in/bilal-malik-15754b185/",
    questionsToAsk: [
      "What's the most exciting technical challenge you're working on?",
      "How does Palantir experience shape how you think about enterprise?"
    ],
    connectionPoints: ["Palantir = enterprise-grade software", "Diverse tech background"]
  },
  {
    name: "Justin Lim",
    role: "Software Engineer",
    email: "justin@paraform.ai",
    education: "Harvey Mudd College",
    background: ["Software Engineer at Paraform", "Harvey Mudd - strong technical foundation", "Focus on agentic AI processes"],
    linkedinUrl: "https://www.linkedin.com/in/milsuj/",
    questionsToAsk: [
      "What does 'AI shouldn't be a black box' mean for how you build?",
      "What's the agentic architecture approach at Paraform?"
    ],
    connectionPoints: ["Harvey Mudd = elite technical", "Transparent AI philosophy"]
  },
  {
    name: "David Burton",
    role: "Team Member",
    email: "david@paraform.ai",
    education: "University of Michigan - Ross School of Business",
    background: ["Currently at Paraform", "Michigan Ross MBA/Business background"],
    linkedinUrl: "https://www.linkedin.com/in/david-burton-2b992766/",
    questionsToAsk: ["What brought you to Paraform?", "What would make a founding AE successful in your view?"],
    connectionPoints: ["Michigan Ross = strong business school"]
  }
];

// Competitors data - Full Battlecards
const competitors = [
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

// Key numbers data
const keyNumbers = {
  hero: [
    { value: "$7.5M+", label: "Total Closed Revenue" },
    { value: "169%", label: "Peak Quota Attainment" },
    { value: "$900K", label: "Largest Single Deal" },
    { value: "$4M+", label: "Quarterly Pipeline" }
  ],
  career: [
    { company: "GTM Consultant", period: "Aug 2024 - Now", role: "Startups & Founders" },
    { company: "GlobalData", period: "Jul 2023 - Jul 2024", role: "Sales Director Americas" },
    { company: "Calligo", period: "Mar 2022 - Jul 2023", role: "Sales Director NA" },
    { company: "Forrester", period: "Mar 2020 - Mar 2022", role: "Account Manager" },
    { company: "Darktrace", period: "Sep 2018 - Mar 2020", role: "Account Executive" }
  ]
};

export default function ResearchHubPage() {
  const [activeTab, setActiveTab] = useState("product");

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Header */}
          <div className="text-center mb-6">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
              Research & Intelligence
            </Badge>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Research Hub</h1>
            <p className="text-slate-600">Everything you need to know about Paraform, the team, and the market</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    activeTab === tab.id
                      ? "bg-slate-900 text-white shadow-lg"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Product Intel Tab */}
            {activeTab === "product" && (
              <div className="space-y-6">
                <Card className="border border-slate-200/50 shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-blue-600" />
                      Paraform Company Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 mb-3">Company Facts</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between"><span className="text-slate-500">Founded:</span><span className="font-medium">2023</span></div>
                          <div className="flex justify-between"><span className="text-slate-500">Stage:</span><span className="font-medium">Seed ($2.9M, General Catalyst)</span></div>
                          <div className="flex justify-between"><span className="text-slate-500">Co-Founders:</span><span className="font-medium">Dean Shu & Michael Chen</span></div>
                          <div className="flex justify-between"><span className="text-slate-500">HQ:</span><span className="font-medium">San Francisco, CA</span></div>
                          <div className="flex justify-between"><span className="text-slate-500">Team Size:</span><span className="font-medium">2-10 employees</span></div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 mb-3">Product & Value Prop</h4>
                        <p className="text-sm text-slate-600 mb-3">AI-powered RFP response platform that helps sales teams respond faster and win more.</p>
                        <div className="space-y-2">
                          <Badge variant="secondary">70-80% time savings</Badge>
                          <Badge variant="secondary">2-3x quality improvement</Badge>
                          <Badge variant="secondary">Weeks to value (not months)</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                      <h4 className="font-semibold text-sm text-emerald-900 mb-2">Recent News</h4>
                      <ul className="space-y-1 text-sm text-emerald-700">
                        <li className="flex items-center gap-2"><Star className="h-3 w-3" /> 3x revenue growth</li>
                        <li className="flex items-center gap-2"><Star className="h-3 w-3" /> Hiring US-based engineers</li>
                        <li className="flex items-center gap-2"><Star className="h-3 w-3" /> Focus on agentic AI architecture</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-slate-200/50 shadow-sm">
                  <CardHeader>
                    <CardTitle>Why Paraform Wins</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-sm text-blue-900 mb-2">AI-Native Architecture</h4>
                        <p className="text-xs text-slate-600">Built from the ground up with AI at the core, not bolted on</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-sm text-blue-900 mb-2">Learns & Improves</h4>
                        <p className="text-xs text-slate-600">Gets smarter with every response, learns what wins</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-sm text-blue-900 mb-2">Time to Value</h4>
                        <p className="text-xs text-slate-600">Weeks not months - start seeing results fast</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Team Research Tab */}
            {activeTab === "team" && (
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className={`border shadow-sm ${member.interviewRole ? 'border-red-200 bg-red-50/20' : 'border-slate-200/50'}`}>
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-lg">{member.name}</h3>
                                {member.interviewRole && <Badge variant="destructive" className="text-xs">Key Interviewer</Badge>}
                              </div>
                              <p className="text-sm text-blue-600">{member.role}</p>
                              <p className="text-xs text-slate-500">{member.education}</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" onClick={() => window.open(member.linkedinUrl, '_blank')}>
                            <Linkedin className="h-4 w-4 mr-1" /> LinkedIn
                          </Button>
                        </div>
                        {member.interviewRole && (
                          <div className="mb-4 p-2 bg-red-100 border border-red-200 rounded-lg">
                            <p className="text-sm text-red-800 font-medium"><Target className="h-4 w-4 inline mr-1" />{member.interviewRole}</p>
                          </div>
                        )}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-xs text-slate-700 mb-2 flex items-center gap-1"><Briefcase className="h-3 w-3" /> Background</h4>
                            <ul className="space-y-1">{member.background.map((b, i) => <li key={i} className="text-xs text-slate-600">• {b}</li>)}</ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-xs text-slate-700 mb-2 flex items-center gap-1"><MessageSquare className="h-3 w-3" /> Questions to Ask</h4>
                            <ul className="space-y-1">{member.questionsToAsk.map((q, i) => <li key={i} className="text-xs text-slate-600">• {q}</li>)}</ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Competitors Tab - Full Battlecards */}
            {activeTab === "competitors" && (
              <div className="space-y-6">
                {/* Positioning Rules */}
                <Card className="border border-blue-200 bg-blue-50/50 shadow-sm">
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

                {/* Core Differentiation */}
                <Card className="border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-sm">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-emerald-900 mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-emerald-600" />
                      Paraform&apos;s Core Differentiation
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-3 bg-white/70 rounded-lg border border-emerald-200">
                        <p className="font-bold text-emerald-700 text-sm">AI-Native Architecture</p>
                        <p className="text-xs text-slate-600">Built from the ground up with AI at the core, not bolted on</p>
                      </div>
                      <div className="p-3 bg-white/70 rounded-lg border border-emerald-200">
                        <p className="font-bold text-emerald-700 text-sm">Learns & Improves</p>
                        <p className="text-xs text-slate-600">Gets smarter with every response, learns your winning patterns</p>
                      </div>
                      <div className="p-3 bg-white/70 rounded-lg border border-emerald-200">
                        <p className="font-bold text-emerald-700 text-sm">Fast Time to Value</p>
                        <p className="text-xs text-slate-600">Weeks to implement, not months like legacy tools</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Battlecards */}
                {competitors.map((comp, index) => (
                  <motion.div key={comp.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                    <Card className="border border-slate-200/50 shadow-sm hover:shadow-md transition-all">
                      <CardHeader className="py-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg">{comp.name}</CardTitle>
                            <p className="text-sm text-slate-500">{comp.description}</p>
                          </div>
                          <Badge variant="secondary">{comp.category}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Strengths & Weaknesses Grid */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                            <h4 className="font-semibold text-sm text-amber-900 mb-2 flex items-center gap-1">
                              <TrendingUp className="h-4 w-4" /> Their Strengths
                            </h4>
                            <ul className="space-y-1">
                              {comp.strengths.map((s, i) => <li key={i} className="text-xs text-amber-800">• {s}</li>)}
                            </ul>
                          </div>
                          <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                            <h4 className="font-semibold text-sm text-red-900 mb-2 flex items-center gap-1">
                              <XCircle className="h-4 w-4" /> Their Weaknesses
                            </h4>
                            <ul className="space-y-1">
                              {comp.weaknesses.map((w, i) => <li key={i} className="text-xs text-red-700">• {w}</li>)}
                            </ul>
                          </div>
                        </div>

                        {/* Paraform Advantage */}
                        <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                          <h4 className="font-semibold text-sm text-emerald-900 mb-2 flex items-center gap-1">
                            <CheckCircle2 className="h-4 w-4" /> Paraform Wins On
                          </h4>
                          <ul className="grid md:grid-cols-2 gap-x-4 gap-y-1">
                            {comp.paraformAdvantage.map((w, i) => <li key={i} className="text-xs text-emerald-700">• {w}</li>)}
                          </ul>
                        </div>

                        {/* When They Mention Script */}
                        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-sm text-blue-900 mb-2 flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" /> When They Mention {comp.name}
                          </h4>
                          <p className="text-xs text-slate-700 italic">{comp.whenTheyMention}</p>
                        </div>

                        {/* Key Differentiator Badge */}
                        <div className="flex items-center justify-center pt-2">
                          <Badge className="bg-purple-100 text-purple-700 border-purple-200 text-xs">
                            Key: {comp.keyDifferentiator}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Key Numbers Tab */}
            {activeTab === "numbers" && (
              <div className="space-y-6">
                <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-blue-50 shadow-lg">
                  <CardHeader className="py-4">
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <Hash className="h-5 w-5" /> Memorize These
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {keyNumbers.hero.map((stat, i) => (
                        <div key={i} className="p-4 bg-white/70 rounded-lg text-center border border-blue-200">
                          <p className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</p>
                          <p className="text-xs text-slate-600 mt-1">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-slate-200/50 shadow-sm">
                  <CardHeader className="py-4">
                    <CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5" /> Career Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {keyNumbers.career.map((job, i) => (
                        <div key={i} className="p-3 bg-slate-50 rounded-lg text-center">
                          <p className="font-bold text-sm text-slate-900">{job.company}</p>
                          <p className="text-xs text-slate-500">{job.period}</p>
                          <p className="text-xs text-blue-600 mt-1">{job.role}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-slate-200/50 shadow-sm">
                  <CardHeader className="py-4">
                    <CardTitle>Why These Numbers Matter for Paraform</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">AI-Powered SaaS Experience</h4>
                        <ul className="text-xs text-slate-600 space-y-1">
                          <li>• GlobalData: AI-powered data analytics</li>
                          <li>• Darktrace: AI-powered cybersecurity</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2">RFP-Specific Relevance</h4>
                        <ul className="text-xs text-slate-600 space-y-1">
                          <li>• Won RFPs at Darktrace ($220K) & Calligo ($600K)</li>
                          <li>• Understands RFP pain from seller side</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
