"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Navigation } from "@/components/sections/Navigation";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import {
  Copy,
  CheckCircle2,
  Clock,
  AlertCircle,
  MessageSquare,
  Calendar,
  Send,
  Briefcase,
  TrendingUp,
  Target,
  Users,
  DollarSign,
  Search,
  FileText,
  Zap,
  Calculator,
} from "lucide-react";
import { useState, useMemo } from "react";

// Tab configuration
const tabs = [
  { id: "pre-call", label: "Pre-Call Prep", icon: Search },
  { id: "call-frameworks", label: "Call Frameworks", icon: Target },
  { id: "follow-up", label: "Follow-Up", icon: Send },
  { id: "business-case", label: "Business Case", icon: Briefcase },
];

// Sales follow-up email templates
const salesEmailTemplates = [
  {
    id: "recap",
    title: "Same-Day Recap Email",
    content: `Subject: Recap: [Your Company] & [Their Company]

[Name], thanks for such an open, thoughtful conversation.

**Core Challenges:**
1. [Challenge #1 in their words]
2. [Challenge #2 in their words]

You shared that despite trying [failed solution], your team still can't [desired outcome]. That's because of [problem], which is costing [cost/impact].

**Requirements to Address:**
1. [Capability #1 they need]
2. [Capability #2 they need]

**Next Steps Before [Date] with [Names]:**
- I'll [your action item]
- You'll [their action item]

Let me know if I missed anything. Looking forward to [next meeting].`
  },
  {
    id: "warmup",
    title: "Pre-Meeting Warm-Up (3 days before)",
    content: `Subject: [Meeting Topic] - [Date]

[Name], excited for our call with [new stakeholders] on [date].

We plan to focus on [key topic/outcome]. Anything else you want to ensure we cover?

Highly recommend checking this out beforehand:
- [Relevant resource/case study link]

See you [day]!`
  },
  {
    id: "dark",
    title: "Gone-Dark Revival (When ghosted)",
    content: `**Option 1 - Short & Direct:**
[Name], haven't heard from you in a bit.
Usually this means it's not a priority right now - completely fine if that's the case.
Mind letting me know so I don't bug you?

**Option 2 - Value-Add:**
[Name], last we spoke, [their challenge] was a big focus.
I was just reviewing [content/resource/tool] and thought of you.
Are you still working on [related goal]? If so, check it out: [link]`
  }
];

// Arphie pricing tiers
const ARPHIE_TIERS = [
  { id: "5-projects", label: "5 Concurrent Projects", price: 29500 },
  { id: "10-projects", label: "10 Concurrent Projects", price: 37500 },
  { id: "15-projects", label: "15+ Projects (Custom)", price: 50000, isCustom: true },
];

// ROI Calculator Component
function ROICalculator() {
  const [hoursPerRfp, setHoursPerRfp] = useState(40);
  const [rfpsPerYear, setRfpsPerYear] = useState(50);
  const [hourlyRate, setHourlyRate] = useState(75);
  const [hasExistingSoftware, setHasExistingSoftware] = useState(false);
  const [selectedTier, setSelectedTier] = useState(ARPHIE_TIERS[0]);

  const calculations = useMemo(() => {
    const timeSavingsPercent = hasExistingSoftware ? 0.60 : 0.80;
    const currentAnnualCost = hoursPerRfp * rfpsPerYear * hourlyRate;
    const hoursSavedPerYear = hoursPerRfp * rfpsPerYear * timeSavingsPercent;
    const dollarSavingsPerYear = hoursSavedPerYear * hourlyRate;
    const netRoi = dollarSavingsPerYear - selectedTier.price;
    const monthlySavings = dollarSavingsPerYear / 12;
    const paybackPeriodMonths = monthlySavings > 0 ? selectedTier.price / monthlySavings : 0;
    const roiPercentage = selectedTier.price > 0 ? ((dollarSavingsPerYear - selectedTier.price) / selectedTier.price) * 100 : 0;

    return { timeSavingsPercent, currentAnnualCost, hoursSavedPerYear, dollarSavingsPerYear, netRoi, paybackPeriodMonths, roiPercentage };
  }, [hoursPerRfp, rfpsPerYear, hourlyRate, hasExistingSoftware, selectedTier]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(Math.round(value));
  };

  return (
    <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-indigo-300 bg-white">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
            <Calculator className="h-5 w-5 text-white" />
          </div>
          <div>
            <CardTitle>Sample ROI Calculator</CardTitle>
            <CardDescription>Built with Arphie's actual metrics</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input Section - 5 Column Layout */}
        <div className="p-4 bg-stone-50 rounded-lg border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Zap className="h-4 w-4 text-slate-600" />
            Your Current State
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-700">Hours/RFP</label>
              <input
                type="number"
                value={hoursPerRfp}
                onChange={(e) => setHoursPerRfp(Math.max(1, parseInt(e.target.value) || 0))}
                className="w-full px-2 py-1.5 text-sm border border-slate-200 rounded-lg bg-white text-slate-900 hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-colors"
                min="1"
              />
              <p className="text-xs text-slate-400">Avg: 40 hrs</p>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-700">RFPs/Year</label>
              <input
                type="number"
                value={rfpsPerYear}
                onChange={(e) => setRfpsPerYear(Math.max(1, parseInt(e.target.value) || 0))}
                className="w-full px-2 py-1.5 text-sm border border-slate-200 rounded-lg bg-white text-slate-900 hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-colors"
                min="1"
              />
              <p className="text-xs text-slate-400">Annual volume</p>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-700">Hourly Rate</label>
              <div className="relative">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-500 text-sm">$</span>
                <input
                  type="number"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Math.max(1, parseInt(e.target.value) || 0))}
                  className="w-full pl-5 pr-2 py-1.5 text-sm border border-slate-200 rounded-lg bg-white text-slate-900 hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-colors"
                  min="1"
                />
              </div>
              <p className="text-xs text-slate-400">Fully loaded</p>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-700">Arphie Tier</label>
              <select
                value={selectedTier.id}
                onChange={(e) => {
                  const tier = ARPHIE_TIERS.find(t => t.id === e.target.value);
                  if (tier) setSelectedTier(tier);
                }}
                className="w-full px-2 py-1.5 text-sm border border-slate-200 rounded-lg bg-white text-slate-900 hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23475569%22%20d%3D%22M6%208L2%204h8z%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_8px_center] bg-no-repeat pr-7"
              >
                {ARPHIE_TIERS.map((tier) => (
                  <option key={tier.id} value={tier.id}>
                    {tier.label.replace(' Concurrent Projects', '')}
                  </option>
                ))}
              </select>
              <p className="text-xs text-slate-400">{formatCurrency(selectedTier.price)}/yr</p>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-700">Current Tools</label>
              <select
                value={hasExistingSoftware ? "yes" : "no"}
                onChange={(e) => setHasExistingSoftware(e.target.value === "yes")}
                className="w-full px-2 py-1.5 text-sm border border-slate-200 rounded-lg bg-white text-slate-900 hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23475569%22%20d%3D%22M6%208L2%204h8z%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_8px_center] bg-no-repeat pr-7"
              >
                <option value="no">No RFP software</option>
                <option value="yes">Has RFP software</option>
              </select>
              <p className="text-xs text-slate-400">{hasExistingSoftware ? "60% savings" : "80% savings"}</p>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="p-4 bg-stone-50 rounded-lg border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-slate-600" />
            Your Projected ROI
          </h4>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="p-4 bg-white rounded-lg border border-slate-200">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Current Annual RFP Cost</p>
              <p className="text-2xl font-bold text-slate-700">{formatCurrency(calculations.currentAnnualCost)}</p>
              <p className="text-xs text-slate-400 mt-1">{formatNumber(hoursPerRfp * rfpsPerYear)} hours/year</p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-slate-200">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Hours Saved per Year</p>
              <p className="text-2xl font-bold text-slate-700">{formatNumber(calculations.hoursSavedPerYear)}</p>
              <p className="text-xs text-slate-400 mt-1">{Math.round(calculations.timeSavingsPercent * 100)}% time reduction</p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-slate-200">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Dollar Savings per Year</p>
              <p className="text-2xl font-bold text-slate-700">{formatCurrency(calculations.dollarSavingsPerYear)}</p>
              <p className="text-xs text-slate-400 mt-1">Before software cost</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className={`p-4 rounded-lg border ${calculations.netRoi >= 0 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <Badge className={calculations.netRoi >= 0 ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}>
                  <DollarSign className="h-3 w-3 mr-1" />
                  Net ROI
                </Badge>
                After Arphie Cost
              </h4>
              <p className={`text-3xl font-bold ${calculations.netRoi >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                {formatCurrency(calculations.netRoi)}
              </p>
              <p className="text-sm mt-1 text-slate-600">
                {calculations.roiPercentage >= 0 ? '+' : ''}{Math.round(calculations.roiPercentage)}% return on investment
              </p>
            </div>

            <div className={`p-4 rounded-lg border ${calculations.paybackPeriodMonths <= 6 ? 'bg-green-50 border-green-200' : 'bg-indigo-50 border-indigo-200'}`}>
              <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <Badge className={calculations.paybackPeriodMonths <= 6 ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-indigo-100 text-indigo-700 border border-indigo-200'}>
                  <Clock className="h-3 w-3 mr-1" />
                  Payback
                </Badge>
                Time to ROI
              </h4>
              <p className={`text-3xl font-bold ${calculations.paybackPeriodMonths <= 6 ? 'text-green-700' : 'text-indigo-700'}`}>
                {calculations.paybackPeriodMonths < 1 ? '< 1' : calculations.paybackPeriodMonths.toFixed(1)} months
              </p>
              <p className="text-sm mt-1 text-slate-600">Time to recoup your investment</p>
            </div>
          </div>
        </div>

        {/* Win Rate Impact Section */}
        <div className="p-4 bg-stone-50 rounded-lg border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Target className="h-4 w-4 text-slate-600" />
            Win Rate Impact
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border border-slate-200">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Shortlist Rate</p>
              <p className="text-2xl font-bold text-slate-900">2x Higher</p>
              <p className="text-xs text-slate-500 mt-1">Customers report doubling their shortlist rates with Arphie</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-slate-200">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Content Reuse</p>
              <p className="text-2xl font-bold text-slate-900">30-40%</p>
              <p className="text-xs text-slate-500 mt-1">Only customize differentiators; AI handles the rest</p>
            </div>
          </div>
        </div>

        {/* Summary callout */}
        <div className="p-4 bg-indigo-600 rounded-lg text-white">
          <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
            <Badge className="bg-white/20 text-white border-white/30">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Bottom Line
            </Badge>
            Summary
          </h4>
          <p className="text-sm text-indigo-100">
            With Arphie, your team could save <strong className="text-white">{formatNumber(calculations.hoursSavedPerYear)} hours</strong> and{' '}
            <strong className="text-white">{formatCurrency(calculations.netRoi)}</strong> annually.
            You would break even in just <strong className="text-white">{calculations.paybackPeriodMonths.toFixed(1)} months</strong>.
          </p>
        </div>

        <p className="text-xs text-slate-400 text-center">
          Based on Arphie customer data: 60% time savings for customers switching from legacy software, 80% for new customers
        </p>
      </CardContent>
    </Card>
  );
}

export default function FollowUpPage() {
  const [activeTab, setActiveTab] = useState("pre-call");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Hero Section - Dark header matching 30-60-90 and Case Study */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden">
          {/* Animated background pattern */}
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

          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Ambient glow orbs */}
          {!prefersReducedMotion && (
            <>
              <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
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
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"
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
                <span className="bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent">
                  My Approach
                </span>
              </motion.h1>
              <motion.p
                className="mb-8 text-xl font-normal text-slate-200 md:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Sample frameworks and building blocks from our discovery conversation
              </motion.p>

              {/* Tab Navigation in Hero */}
              <motion.div
                className="flex flex-wrap justify-center gap-3 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                        activeTab === tab.id
                          ? "bg-white text-slate-900 shadow-md"
                          : "text-white border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </motion.div>

            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-stone-50 py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-[1200px]">

            {/* Tab Content */}
            <div>
              {/* Pre-Call Prep Tab */}
              {activeTab === "pre-call" && (
                <div className="space-y-6">
                  {/* Research Checklist */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-indigo-300 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <Search className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Pre-Call Research Checklist</CardTitle>
                          <CardDescription>Complete before every discovery call</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                          <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <Users className="h-4 w-4 text-slate-600" />
                            Company Research
                          </h4>
                          <ul className="space-y-2">
                            {["Company size, industry, and growth stage", "Recent news, funding, or announcements", "Key competitors and market position", "Tech stack and existing tools (if visible)", "Annual report or investor presentations"].map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm">
                                <div className="w-5 h-5 rounded border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                          <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <Target className="h-4 w-4 text-slate-600" />
                            Stakeholder Research
                          </h4>
                          <ul className="space-y-2">
                            {["LinkedIn profile and career history", "Role and likely priorities", "Mutual connections or shared background", "Recent posts or content they've shared", "Reporting structure (who do they report to?)"].map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm">
                                <div className="w-5 h-5 rounded border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Call Planning */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-indigo-300 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <FileText className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Call Planning Template</CardTitle>
                          <CardDescription>Structure your approach before the call</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                          <h4 className="font-semibold text-slate-900 mb-1">Primary Objective</h4>
                          <p className="text-xs text-slate-500 mb-2">What's the ONE thing I need to accomplish?</p>
                          <p className="text-sm text-slate-600 italic">Example: Qualify budget authority and confirm pain is urgent</p>
                        </div>
                        <div className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                          <h4 className="font-semibold text-slate-900 mb-1">Hypothesis</h4>
                          <p className="text-xs text-slate-500 mb-2">What do I believe their core challenge is?</p>
                          <p className="text-sm text-slate-600 italic">Example: Drowning in RFPs, current tools not scaling</p>
                        </div>
                        <div className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                          <h4 className="font-semibold text-slate-900 mb-1">Potential Objections</h4>
                          <p className="text-xs text-slate-500 mb-2">What pushback might I get?</p>
                          <p className="text-sm text-slate-600 italic">Example: Using [competitor], no budget until Q3</p>
                        </div>
                        <div className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                          <h4 className="font-semibold text-slate-900 mb-1">Desired Next Step</h4>
                          <p className="text-xs text-slate-500 mb-2">What's the ideal outcome?</p>
                          <p className="text-sm text-slate-600 italic">Example: Demo with full team next week</p>
                        </div>
                        <div className="md:col-span-2 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                          <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <Badge className="bg-indigo-100 text-indigo-700 border border-indigo-200">
                              <Target className="h-3 w-3 mr-1" />
                              3 Questions
                            </Badge>
                            I Must Ask
                          </h4>
                          <div className="grid md:grid-cols-3 gap-2">
                            <p className="text-sm text-slate-700 italic p-3 bg-white rounded-lg border border-indigo-200">1. How are you handling RFPs today?</p>
                            <p className="text-sm text-slate-700 italic p-3 bg-white rounded-lg border border-indigo-200">2. What's the bottleneck?</p>
                            <p className="text-sm text-slate-700 italic p-3 bg-white rounded-lg border border-indigo-200">3. What if this doesn't get solved?</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Pre-Call Mindset */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-indigo-300 bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-white" />
                        Pre-Call Mindset
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          { mindset: "Curious, not pitchy", detail: "Your job is to understand, not convince. Ask more than you tell." },
                          { mindset: "Doctor, not salesperson", detail: "Diagnose before prescribing. Never pitch without understanding pain." },
                          { mindset: "Qualify hard", detail: "It's okay if they're not a fit. Better to know now than waste cycles." },
                        ].map((item, index) => (
                          <div key={index} className="p-4 bg-stone-50 rounded-lg border border-slate-200 text-center">
                            <p className="font-semibold text-slate-900 mb-2">{item.mindset}</p>
                            <p className="text-sm text-slate-600">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Call Frameworks Tab */}
              {activeTab === "call-frameworks" && (
                <div className="space-y-6">
                  {/* Discovery Call Structure */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-indigo-300 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <Clock className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Discovery Call Structure (30 min)</CardTitle>
                          <CardDescription>Time-boxed framework for effective discovery</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-indigo-600 text-white border border-indigo-700">0-3 min</Badge>
                            <h4 className="font-semibold text-slate-900">Opening & Agenda</h4>
                          </div>
                          <p className="text-sm text-slate-600">Build rapport, set expectations. "Here's what I was hoping to cover - does that work?"</p>
                        </div>
                        <div className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-indigo-600 text-white border border-indigo-700">3-20 min</Badge>
                            <h4 className="font-semibold text-slate-900">Discovery & Pain</h4>
                          </div>
                          <p className="text-sm text-slate-600">Go deep on 1-2 problems. Use PAIN funnel. Listen more than talk (70/30 rule).</p>
                        </div>
                        <div className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-indigo-600 text-white border border-indigo-700">20-25 min</Badge>
                            <h4 className="font-semibold text-slate-900">Quick Demo (if earned)</h4>
                          </div>
                          <p className="text-sm text-slate-600">Only demo if you've uncovered real pain. Show 1-2 relevant features, not the whole product.</p>
                        </div>
                        <div className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-indigo-600 text-white border border-indigo-700">25-30 min</Badge>
                            <h4 className="font-semibold text-slate-900">Next Steps</h4>
                          </div>
                          <p className="text-sm text-slate-600">Confirm what happens next. Who else needs to be involved? Book the next meeting NOW.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* PAIN Funnel */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-indigo-300 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <AlertCircle className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>PAIN Funnel Framework</CardTitle>
                          <CardDescription>Go 3+ layers deep on every problem</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-3">
                        {[
                          { level: "Surface", question: "What's your biggest challenge with [area]?", purpose: "Identify the topic" },
                          { level: "Impact", question: "How is that affecting [team/revenue/goals]?", purpose: "Quantify the pain" },
                          { level: "Root Cause", question: "Why do you think that's happening?", purpose: "Find the real problem" },
                          { level: "Failed Solutions", question: "What have you tried so far?", purpose: "Understand context" },
                          { level: "Urgency", question: "What happens if this doesn't get solved?", purpose: "Establish stakes" },
                          { level: "Vision", question: "What would success look like?", purpose: "Define the goal" },
                        ].map((item, index) => (
                          <div key={index} className="p-3 bg-stone-50 rounded-lg border border-slate-200">
                            <Badge variant="outline" className="text-slate-700 border-slate-300 text-xs mb-2">{item.level}</Badge>
                            <p className="text-sm font-medium text-slate-900">"{item.question}"</p>
                            <p className="text-xs text-slate-500 mt-1">{item.purpose}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Qualification Framework */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-indigo-300 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <Target className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Qualification Criteria</CardTitle>
                          <CardDescription>Know when to advance or disqualify</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <Badge className="bg-green-100 text-green-700 border border-green-200">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              Green Lights
                            </Badge>
                            Advance
                          </h4>
                          <ul className="space-y-2 text-sm text-slate-700">
                            <li>Pain is quantified and urgent</li>
                            <li>Decision maker is engaged</li>
                            <li>Budget exists or can be created</li>
                            <li>Timeline aligns with your cycle</li>
                            <li>They're actively evaluating options</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                          <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <Badge className="bg-red-100 text-red-700 border border-red-200">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              Red Flags
                            </Badge>
                            Dig Deeper or Walk
                          </h4>
                          <ul className="space-y-2 text-sm text-slate-700">
                            <li>"Just exploring" with no timeline</li>
                            <li>Can't articulate the problem</li>
                            <li>No access to decision maker</li>
                            <li>Incumbent is deeply embedded</li>
                            <li>Price is the only consideration</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Follow-Up Tab */}
              {activeTab === "follow-up" && (
                <div className="space-y-6">
                  {/* Follow-Up Checklist */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-indigo-300 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <CheckCircle2 className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Post-Call Checklist</CardTitle>
                          <CardDescription>Execute within 24 hours of every call</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                          <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <Badge className="bg-slate-100 text-slate-700 border border-slate-200">Within 2 Hours</Badge>
                          </h4>
                          <ul className="space-y-2">
                            {["Send recap email with key points in their words", "Update CRM with call notes and next steps", "Send calendar invite for next meeting"].map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm">
                                <div className="w-4 h-4 rounded border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                          <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <Badge className="bg-slate-100 text-slate-700 border border-slate-200">Within 24 Hours</Badge>
                          </h4>
                          <ul className="space-y-2">
                            {["Share relevant resources or case studies mentioned", "Connect on LinkedIn (if appropriate)", "Loop in internal team members as needed"].map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm">
                                <div className="w-4 h-4 rounded border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email Templates - 3 Column Layout */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-indigo-300 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <MessageSquare className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Follow-Up Email Templates</CardTitle>
                          <CardDescription>Copy-paste frameworks for every situation</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        {salesEmailTemplates.map((template) => (
                          <div key={template.id} className="p-4 bg-stone-50 rounded-lg border border-slate-200 hover:border-indigo-200 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                                <Send className="h-4 w-4 text-slate-600" />
                                {template.title}
                              </h4>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-7 px-2"
                                onClick={() => copyToClipboard(template.content, `sales-${template.id}`)}
                              >
                                {copiedId === `sales-${template.id}` ? (
                                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                            <pre className="text-xs text-slate-600 whitespace-pre-wrap leading-relaxed">
                              {template.content}
                            </pre>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Follow-Up Cadence - Two Column Layout */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-indigo-300 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <Calendar className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Follow-Up Cadence</CardTitle>
                          <CardDescription>Stay top of mind without being pushy</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Warm Lead Cadence */}
                        <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            <Badge className="bg-indigo-100 text-indigo-700 border border-indigo-200">Warm Lead</Badge>
                            Post-Discovery
                          </h4>
                          <div className="space-y-3">
                            {[
                              { day: "Day 0", action: "Same-day recap email with key points in their words" },
                              { day: "Day 3", action: "Pre-meeting warm-up (if next call scheduled)" },
                              { day: "Day 5-7", action: "Value-add touchpoint (article, case study)" },
                              { day: "Day 10-14", action: "Status check-in if no response" },
                              { day: "Day 21", action: "Final 'closing the loop' message" },
                            ].map((item, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <Badge variant="outline" className="bg-white text-slate-700 border-indigo-300 text-xs flex-shrink-0">{item.day}</Badge>
                                <p className="text-sm text-slate-700">{item.action}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Gone-Dark Revival Cadence */}
                        <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            <Badge className="bg-orange-100 text-orange-700 border border-orange-200">Gone Dark</Badge>
                            Revival Sequence
                          </h4>
                          <div className="space-y-3">
                            {[
                              { day: "Day 0", action: "Short & direct: 'Haven't heard from you - still a priority?'" },
                              { day: "Day 3", action: "Value-add: Share relevant content they'd find useful" },
                              { day: "Day 7", action: "LinkedIn engagement: Comment on their post or share" },
                              { day: "Day 14", action: "New angle: Reference industry news or competitor move" },
                              { day: "Day 21", action: "Breakup: 'Should I close your file?'" },
                            ].map((item, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <Badge variant="outline" className="bg-white text-slate-700 border-orange-300 text-xs flex-shrink-0">{item.day}</Badge>
                                <p className="text-sm text-slate-700">{item.action}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Business Case Tab */}
              {activeTab === "business-case" && (
                <div className="space-y-6">
                  {/* Interactive ROI Calculator */}
                  <ROICalculator />

                  {/* Stakeholder Messaging */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-indigo-300 bg-white">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Stakeholder Messaging</CardTitle>
                          <CardDescription>Tailor your pitch to different decision makers</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { title: "Executive / C-Suite", icon: TrendingUp, focus: "Strategic impact, competitive advantage, revenue", language: "Business outcomes, market positioning", avoid: "Technical details, feature lists" },
                          { title: "Finance / Procurement", icon: DollarSign, focus: "ROI, total cost of ownership, payback period", language: "Hard numbers, cost reduction, risk mitigation", avoid: "Vague benefits, unquantified claims" },
                          { title: "Operations / End Users", icon: Target, focus: "Daily workflow improvement, pain relief, ease of use", language: "Time savings, frustration reduction, simplicity", avoid: "Big picture strategy, financial metrics" },
                          { title: "IT / Security", icon: Zap, focus: "Security, compliance, integration, maintainability", language: "Technical specs, certifications, API capabilities", avoid: "Business jargon, unverifiable ROI" },
                        ].map((stakeholder, index) => {
                          const Icon = stakeholder.icon;
                          return (
                            <div key={index} className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                              <div className="flex items-center gap-2 mb-3">
                                <Icon className="h-4 w-4 text-slate-600" />
                                <h4 className="font-semibold text-slate-900">{stakeholder.title}</h4>
                              </div>
                              <div className="space-y-1.5 text-sm">
                                <p><span className="font-medium text-slate-700">Focus:</span> <span className="text-slate-600">{stakeholder.focus}</span></p>
                                <p><span className="font-medium text-slate-700">Language:</span> <span className="text-slate-600">{stakeholder.language}</span></p>
                                <p><span className="font-medium text-slate-500">Avoid:</span> <span className="text-slate-500">{stakeholder.avoid}</span></p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Business Case Checklist */}
                  <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-indigo-300 bg-white">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                          <CheckCircle2 className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle>Business Case Checklist</CardTitle>
                          <CardDescription>Essential elements for executive buy-in</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { category: "Problem Definition", items: ["Current state pain quantified", "Failed solutions documented", "Cost of inaction calculated"] },
                          { category: "Solution Fit", items: ["Requirements mapped to capabilities", "Competitive differentiation clear", "Technical feasibility confirmed"] },
                          { category: "Financial Impact", items: ["ROI model built", "Payback period defined", "Budget allocation identified"] },
                          { category: "Risk Mitigation", items: ["Implementation timeline realistic", "Change management plan outlined", "Success metrics agreed upon"] },
                        ].map((section, index) => (
                          <div key={index} className="p-4 bg-stone-50 rounded-lg border border-slate-200">
                            <h4 className="font-semibold text-slate-900 mb-2">{section.category}</h4>
                            <ul className="space-y-1.5">
                              {section.items.map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <div className="w-4 h-4 rounded border-2 border-slate-300 flex-shrink-0" />
                                  <span className="text-sm text-slate-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
