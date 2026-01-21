"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  MessageSquare,
  Briefcase,
  TrendingUp,
  Target,
  Users,
  Zap,
  Handshake,
  BarChart3,
  Lightbulb,
  ArrowRight,
  Star,
  RefreshCw,
  Settings,
  Mail,
  Linkedin,
  Phone,
} from "lucide-react";
import { useState } from "react";

// Tab configuration - focused on Supply-Side Account Management
const tabs = [
  { id: "onboarding", label: "Partner Onboarding", icon: Handshake },
  { id: "success", label: "Partner Success", icon: TrendingUp },
  { id: "retention", label: "Retention & Growth", icon: RefreshCw },
  { id: "marketplace", label: "Marketplace Ops", icon: Settings },
];

export default function MyApproachPage() {
  const [activeTab, setActiveTab] = useState("onboarding");
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <main className="min-h-screen pt-14">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1A1A1A] via-slate-900 to-[#1A1A1A] overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"
            animate={!prefersReducedMotion ? {
              backgroundPosition: ["0px 0px", "50px 50px"],
            } : {}}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {!prefersReducedMotion && (
            <>
              <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5074F6]/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </>
          )}

          <div className="container relative z-10 mx-auto px-4 py-12 md:py-16">
            <div className="mx-auto max-w-[1200px] text-center">
              <motion.h1
                className="mb-4 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  Playbook Highlights
                </span>
              </motion.h1>
              <motion.p
                className="mb-8 text-xl font-normal text-slate-200 md:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Onboarding | Success | Retention | Marketplace Ops
              </motion.p>

              {/* Contact CTA pills */}
              <motion.div
                className="flex flex-wrap justify-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {[
                  {
                    href: "mailto:joshua2250@berkeley.edu",
                    icon: Mail,
                    label: "joshua2250@berkeley.edu",
                    shortLabel: "Email"
                  },
                  {
                    href: "https://linkedin.com/in/jd-gtm",
                    icon: Linkedin,
                    label: "LinkedIn",
                    shortLabel: "LinkedIn",
                    external: true
                  },
                  {
                    href: "tel:+12099476557",
                    icon: Phone,
                    label: "209-947-6557",
                    shortLabel: "Call"
                  }
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    {...(contact.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all font-semibold"
                    >
                      <contact.icon className="h-4 w-4" />
                      <span className="hidden sm:inline ml-2">{contact.label}</span>
                      <span className="sm:hidden ml-2">{contact.shortLabel}</span>
                    </Button>
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-stone-50 py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-[1200px]">
              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                        activeTab === tab.id
                          ? "bg-[#5074F6] text-white shadow-md"
                          : "text-slate-600 border border-slate-200 bg-white hover:border-[#5074F6]/50 hover:text-[#5074F6]"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Partner Onboarding Tab */}
              {activeTab === "onboarding" && (
                <div className="space-y-6">
                  {/* Onboarding Philosophy */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-[#5074F6]/50 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <Handshake className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Onboarding Philosophy</CardTitle>
                          <CardDescription>Treating recruiters like entrepreneurs, not vendors</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          { title: "Partner First", detail: "Every recruiter is a business owner with goals. My job is to understand what success looks like for them.", icon: Users },
                          { title: "Fast Time-to-First-Placement", detail: "The first 30 days are critical. I design onboarding to get recruiters earning as quickly as possible.", icon: Clock },
                          { title: "Systems, Not Heroics", detail: "Scalable onboarding means building repeatable processes, not relying on individual effort.", icon: Settings },
                        ].map((item, index) => {
                          const Icon = item.icon;
                          return (
                            <div key={index} className="p-4 bg-stone-50 rounded-lg border border-slate-200 text-center">
                              <Icon className="h-6 w-6 text-[#5074F6] mx-auto mb-2" />
                              <p className="font-semibold text-slate-900 mb-2">{item.title}</p>
                              <p className="text-sm text-slate-600">{item.detail}</p>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Onboarding Checklist */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-[#5074F6]/50 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <CheckCircle2 className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>New Partner Onboarding Framework</CardTitle>
                          <CardDescription>First 30 days to first placement</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <Badge className="bg-blue-600 text-white mb-3">Week 1</Badge>
                          <h4 className="font-semibold text-slate-900 mb-3">Platform Setup & Training</h4>
                          <ul className="space-y-2">
                            {[
                              "Welcome call - understand their specialization & goals",
                              "Platform walkthrough & AI tools training",
                              "Profile optimization for visibility",
                              "Role matching preferences configured",
                              "First batch of relevant roles shared",
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <Badge className="bg-[#5074F6] text-white mb-3">Week 2-3</Badge>
                          <h4 className="font-semibold text-slate-900 mb-3">Active Sourcing & Support</h4>
                          <ul className="space-y-2">
                            {[
                              "Daily check-ins on candidate pipeline",
                              "Troubleshoot any platform issues",
                              "Review submission quality & feedback",
                              "Connect to high-fit roles proactively",
                              "Introduce to company hiring managers if needed",
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-[#5074F6] flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                          <Badge className="bg-slate-600 text-white mb-3">Week 4+</Badge>
                          <h4 className="font-semibold text-slate-900 mb-3">First Placement & Beyond</h4>
                          <ul className="space-y-2">
                            {[
                              "Celebrate first submission/interview",
                              "Analyze what's working, what's not",
                              "Expand to additional role types",
                              "Transition to ongoing success cadence",
                              "Introduce to other platform features",
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-[#5074F6] flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Red Flags During Onboarding */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-[#5074F6]/50 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <AlertCircle className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Early Warning Signs</CardTitle>
                          <CardDescription>Identifying at-risk partners before they churn</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                          <Badge className="bg-red-100 text-red-700 border border-red-200 mb-3">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            Red Flags
                          </Badge>
                          <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-red-500 mt-0.5" />No platform login in first 7 days</li>
                            <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-red-500 mt-0.5" />Zero candidate submissions by day 14</li>
                            <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-red-500 mt-0.5" />Not responding to outreach</li>
                            <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-red-500 mt-0.5" />Complaints about role quality/fit</li>
                            <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-red-500 mt-0.5" />Confusion about platform features</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <Badge className="bg-blue-100 text-blue-700 border border-blue-200 mb-3">
                            <Zap className="h-3 w-3 mr-1" />
                            Intervention Playbook
                          </Badge>
                          <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-[#5074F6] mt-0.5" />Immediate 1:1 call to understand blockers</li>
                            <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-[#5074F6] mt-0.5" />Hands-on role matching assistance</li>
                            <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-[#5074F6] mt-0.5" />Screen share training session</li>
                            <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-[#5074F6] mt-0.5" />Connect with successful peer recruiter</li>
                            <li className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-[#5074F6] mt-0.5" />Surface feedback to product team</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Partner Success Tab */}
              {activeTab === "success" && (
                <div className="space-y-6">
                  {/* Success Framework */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-[#5074F6]/50 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/20">
                          <TrendingUp className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Trusted Advisor Framework</CardTitle>
                          <CardDescription>How I help top recruiters grow their business</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-blue-600" />
                            Data-Driven Insights
                          </h4>
                          <ul className="space-y-3">
                            {[
                              "Weekly performance review: submissions, interviews, placements",
                              "Benchmark against top performers in their category",
                              "Identify highest-converting role types for them",
                              "Surface opportunities they might be missing",
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            <MessageSquare className="h-5 w-5 text-[#5074F6]" />
                            Proactive Coaching
                          </h4>
                          <ul className="space-y-3">
                            {[
                              "Monthly strategy calls with top partners",
                              "Share what's working for other successful recruiters",
                              "Early access to new features and roles",
                              "Direct line to product for feature requests",
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-[#5074F6] flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* QBR Structure */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-[#5074F6]/50 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <Target className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Partner Business Review Structure</CardTitle>
                          <CardDescription>Quarterly deep-dive with top agency partners</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-4 gap-4">
                        {[
                          { time: "15 min", title: "Performance Review", items: ["Placements & revenue", "Submission quality scores", "Interview conversion rates"] },
                          { time: "15 min", title: "What's Working", items: ["High-performing role types", "Successful strategies", "Platform features used"] },
                          { time: "15 min", title: "Opportunities", items: ["New verticals to explore", "Underutilized features", "Roles they're missing"] },
                          { time: "15 min", title: "Action Plan", items: ["Specific goals for next quarter", "Support needed from Paraform", "New experiments to try"] },
                        ].map((section, index) => (
                          <div key={index} className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                            <Badge className="bg-blue-100 text-blue-700 border border-blue-200 mb-2">{section.time}</Badge>
                            <h4 className="font-semibold text-slate-900 mb-2">{section.title}</h4>
                            <ul className="space-y-1 text-sm text-slate-600">
                              {section.items.map((item, i) => (
                                <li key={i}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tiered Support Model */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-[#5074F6]/50 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <Star className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Tiered Partner Support</CardTitle>
                          <CardDescription>Right-sized engagement based on partner performance</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <Badge className="bg-[#5074F6] text-white mb-3">Tier 1: Strategic</Badge>
                          <p className="text-sm text-slate-600 mb-3">Top 20% by GMV - highest touch</p>
                          <ul className="space-y-1 text-sm text-slate-700">
                            <li>• Weekly 1:1 check-ins</li>
                            <li>• Quarterly business reviews</li>
                            <li>• Priority role access</li>
                            <li>• Direct product input</li>
                            <li>• Beta feature access</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                          <Badge className="bg-slate-600 text-white mb-3">Tier 2: Growth</Badge>
                          <p className="text-sm text-slate-600 mb-3">Middle 50% - high potential</p>
                          <ul className="space-y-1 text-sm text-slate-700">
                            <li>• Bi-weekly check-ins</li>
                            <li>• Monthly performance reviews</li>
                            <li>• Proactive role suggestions</li>
                            <li>• Group office hours</li>
                            <li>• Training resources</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                          <Badge className="bg-stone-500 text-white mb-3">Tier 3: Self-Serve</Badge>
                          <p className="text-sm text-slate-600 mb-3">Bottom 30% or new - scalable</p>
                          <ul className="space-y-1 text-sm text-slate-700">
                            <li>• Automated onboarding</li>
                            <li>• Self-serve resources</li>
                            <li>• Monthly newsletter</li>
                            <li>• Community forums</li>
                            <li>• Support ticket system</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Retention & Growth Tab */}
              {activeTab === "retention" && (
                <div className="space-y-6">
                  {/* Retention Metrics */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-[#5074F6]/50 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <BarChart3 className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Key Metrics I Track</CardTitle>
                          <CardDescription>Leading indicators of partner health and churn risk</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-4 gap-4">
                        {[
                          { metric: "Time to First Placement", target: "< 30 days", why: "Early success predicts long-term retention" },
                          { metric: "Monthly Active Partners", target: "> 80%", why: "Partners who log in regularly stay longer" },
                          { metric: "Placements per Partner", target: "Growing MoM", why: "More placements = higher earnings = stickier" },
                          { metric: "NPS / Partner Satisfaction", target: "> 50", why: "Happy partners refer other recruiters" },
                        ].map((item, index) => (
                          <div key={index} className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                            <p className="font-semibold text-slate-900 text-sm mb-1">{item.metric}</p>
                            <p className="text-2xl font-bold text-[#5074F6] mb-2">{item.target}</p>
                            <p className="text-xs text-slate-500">{item.why}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Churn Prevention */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-[#5074F6]/50 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <RefreshCw className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Churn Prevention Playbook</CardTitle>
                          <CardDescription>Proactive intervention before partners leave</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-slate-100 rounded-lg border border-slate-200">
                          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            <AlertCircle className="h-5 w-5 text-slate-600" />
                            Churn Signals
                          </h4>
                          <ul className="space-y-3">
                            {[
                              "Activity drop: 50%+ decrease in logins or submissions",
                              "Quality decline: Lower interview rates than usual",
                              "Payment complaints: Delayed payout questions",
                              "Support tickets: Frustrated tone or repeated issues",
                              "Competitor mentions: Asking about other platforms",
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm">
                                <ArrowRight className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            <Zap className="h-5 w-5 text-[#5074F6]" />
                            Intervention Actions
                          </h4>
                          <ul className="space-y-3">
                            {[
                              "Immediate outreach: Personal call within 24 hours",
                              "Root cause discovery: What changed? What's frustrating?",
                              "Quick wins: Find them a high-fit role immediately",
                              "Escalate blockers: Loop in product/support as needed",
                              "Document feedback: Turn complaints into improvements",
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm">
                                <ArrowRight className="h-4 w-4 text-[#5074F6] flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Growth Expansion */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-[#5074F6]/50 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <TrendingUp className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Partner Growth Strategies</CardTitle>
                          <CardDescription>Helping successful partners expand their business</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          { title: "Vertical Expansion", description: "Help engineers-focused recruiters expand into product or data roles", icon: Briefcase },
                          { title: "Team Growth", description: "Support independent recruiters in building their own agencies on Paraform", icon: Users },
                          { title: "Referral Program", description: "Incentivize top partners to recruit other high-quality recruiters", icon: Handshake },
                        ].map((item, index) => {
                          const Icon = item.icon;
                          return (
                            <div key={index} className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                              <Icon className="h-6 w-6 text-blue-600 mb-3" />
                              <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                              <p className="text-sm text-slate-600">{item.description}</p>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Marketplace Ops Tab */}
              {activeTab === "marketplace" && (
                <div className="space-y-6">
                  {/* Marketplace Thinking */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-[#5074F6]/50 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <Lightbulb className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Marketplace Mindset</CardTitle>
                          <CardDescription>Understanding network effects and liquidity</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-slate-900 mb-3">The Flywheel</h4>
                          <div className="space-y-2 text-sm text-slate-700">
                            <p className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#5074F6]" />More quality recruiters → Better candidate flow</p>
                            <p className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#5074F6]" />Better candidates → More companies posting</p>
                            <p className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#5074F6]" />More roles → Attracts more recruiters</p>
                            <p className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#5074F6]" />Network effects compound over time</p>
                          </div>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                          <h4 className="font-semibold text-slate-900 mb-3">My Role in the Flywheel</h4>
                          <div className="space-y-2 text-sm text-slate-700">
                            <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#5074F6]" />Ensure recruiter quality bar stays high</p>
                            <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#5074F6]" />Match right recruiters to right roles</p>
                            <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#5074F6]" />Surface supply gaps to demand team</p>
                            <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#5074F6]" />Build systems that scale, not just relationships</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Experiment Ideas */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-[#5074F6]/50 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <Zap className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Experiments I Would Run</CardTitle>
                          <CardDescription>Testing incentives and workflows to improve liquidity</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { title: "Speed Bonuses", hypothesis: "Bonus for placements within 14 days of role posting", metric: "Time-to-fill reduction", effort: "Low" },
                          { title: "Specialization Badges", hypothesis: "Public badges for top performers in each vertical", metric: "Recruiter engagement & quality", effort: "Medium" },
                          { title: "Peer Mentorship Program", hypothesis: "Pair new recruiters with top performers for faster ramp", metric: "Time-to-first-placement", effort: "Medium" },
                          { title: "Role Priority Queue", hypothesis: "Give high-performers first access to new roles", metric: "Fill rate on hard roles", effort: "High" },
                        ].map((experiment, index) => (
                          <div key={index} className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-slate-900">{experiment.title}</h4>
                              <Badge variant="outline" className={
                                experiment.effort === "Low" ? "bg-blue-50 text-blue-700 border-blue-200" :
                                experiment.effort === "Medium" ? "bg-slate-100 text-slate-700 border-slate-200" :
                                "bg-red-50 text-red-700 border-red-200"
                              }>
                                {experiment.effort} effort
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-600 mb-2"><strong>Hypothesis:</strong> {experiment.hypothesis}</p>
                            <p className="text-sm text-slate-500"><strong>Success metric:</strong> {experiment.metric}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Ops → Product Bridge */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-[#5074F6]/50 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <Settings className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Bridging Ops → Product</CardTitle>
                          <CardDescription>Translating partner feedback into product improvements</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <Badge className="bg-blue-600 text-white mb-3">Collect</Badge>
                          <ul className="space-y-2 text-sm text-slate-700">
                            <li>• Log all partner feedback systematically</li>
                            <li>• Tag by theme (UX, features, bugs)</li>
                            <li>• Quantify frequency and impact</li>
                            <li>• Record verbatim quotes</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <Badge className="bg-[#5074F6] text-white mb-3">Synthesize</Badge>
                          <ul className="space-y-2 text-sm text-slate-700">
                            <li>• Monthly feedback report to product</li>
                            <li>• Prioritize by revenue impact</li>
                            <li>• Include partner stories/context</li>
                            <li>• Propose solutions, not just problems</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                          <Badge className="bg-slate-600 text-white mb-3">Close Loop</Badge>
                          <ul className="space-y-2 text-sm text-slate-700">
                            <li>• Share roadmap updates with partners</li>
                            <li>• Beta test new features with power users</li>
                            <li>• Celebrate when their feedback ships</li>
                            <li>• Build trust that their voice matters</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
