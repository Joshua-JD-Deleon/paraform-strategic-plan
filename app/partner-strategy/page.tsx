"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import {
  Target,
  Users,
  TrendingUp,
  Mail,
  Linkedin,
  Phone,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Zap,
  MessageSquare,
  Clock,
  Briefcase,
  BarChart3,
  Handshake,
  Settings,
  Star,
  ArrowRight,
} from "lucide-react";

// SUPPLY SIDE: Recruiting agencies/firms to partner with - Primary focus
const supplyAccounts = [
  {
    id: 1,
    company: "Riviera Partners",
    tier: "Tier 1",
    type: "supply",
    description: "Executive search firm specializing in technology. 50+ recruiters. Strong track record with venture-backed startups and public tech companies.",
    signals: [
      "Deep specialization in technical executive search (VP Eng, CTO, CPO)",
      "Existing relationships with VC portfolio companies - natural Paraform client overlap",
      "Looking to expand beyond retainer model to increase deal flow",
    ],
    valueHypothesis: "Riviera's executive recruiters could significantly expand their deal flow through Paraform's marketplace while maintaining focus on high-quality placements. Our AI tools would complement their relationship-driven approach.",
    managementPlan: {
      onboarding: "High-touch: Dedicated 1:1 sessions with each partner recruiter, custom role matching based on their specialization",
      cadence: "Weekly check-ins, quarterly business reviews, direct Slack channel",
      growth: "Help them expand from exec-only to senior IC roles, introduce to new client categories",
      metrics: "Target 2 placements/month within 90 days, 70%+ interview rate"
    },
    contacts: [
      { name: "Managing Partner", title: "Managing Partner", linkedin: "#", approach: "Focus on incremental revenue without diluting brand" },
      { name: "Director, Business Dev", title: "Director of Business Development", linkedin: "#", approach: "Emphasize deal flow and reduced BD burden" },
    ],
    outreach: {
      emailSubject: "Expanding Riviera's reach without the BD overhead",
      emailBody: `Hi [Name],

Riviera's reputation in technical executive search is excellent - but I imagine there's always more demand than your team can pursue through traditional BD.

Paraform gives elite recruiters like your team access to curated roles from 500+ companies (Palantir, Cursor, Hightouch) - we handle BD so you can focus on placements.

Worth a conversation?

Best,`,
    },
  },
  {
    id: 2,
    company: "Betts Recruiting",
    tier: "Tier 1",
    type: "supply",
    description: "GTM-focused recruiting firm. 100+ recruiters specializing in sales, marketing, and customer success for tech companies.",
    signals: [
      "Strong GTM specialization aligns with Paraform's hiring company needs",
      "Already operates with contingency model - natural fit for marketplace",
      "Expanding into new markets and could benefit from Paraform's client network",
    ],
    valueHypothesis: "Betts' GTM expertise is exactly what Paraform's client companies need. Joining the marketplace would give their recruiters access to roles they might not find through traditional BD, increasing placements per recruiter.",
    managementPlan: {
      onboarding: "Tiered: Start with 10 top performers, expand based on success",
      cadence: "Bi-weekly syncs with agency leadership, monthly all-hands for their team",
      growth: "Cross-train some recruiters on technical roles, launch referral program for their network",
      metrics: "Target 15% increase in placements/recruiter within 6 months"
    },
    contacts: [
      { name: "CEO/Founder", title: "CEO & Founder", linkedin: "#", approach: "Focus on strategic partnership and market expansion" },
      { name: "VP Recruiting", title: "VP of Recruiting Operations", linkedin: "#", approach: "Emphasize recruiter productivity and earnings potential" },
    ],
    outreach: {
      emailSubject: "Betts + Paraform: GTM recruiting at scale",
      emailBody: `Hi [Name],

Betts has built an incredible reputation in GTM recruiting. Strong strategic fit with Paraform.

Our marketplace connects specialized recruiters with 500+ companies actively hiring - recruiters earn 3-5x traditional agency roles.

15 minutes to explore the partnership opportunity?

Best,`,
    },
  },
  {
    id: 3,
    company: "Staffing Future (Independent Recruiters Collective)",
    tier: "Tier 2",
    type: "supply",
    description: "Network of 200+ independent technical recruiters. Members specialize in software engineering, data science, and DevOps roles.",
    signals: [
      "Independent recruiters struggle with client acquisition - Paraform's core value prop",
      "Technical specialization matches Paraform's strongest demand categories",
      "Members seeking alternatives to traditional agency employment",
    ],
    valueHypothesis: "Independent recruiters are Paraform's sweet spot. They have the skills but lack deal flow. Paraform handles BD, payments, and tools - letting them focus purely on placements and earn more.",
    managementPlan: {
      onboarding: "Scalable: Self-serve onboarding with group training sessions, peer mentorship program",
      cadence: "Monthly office hours, automated performance nudges, community Slack",
      growth: "Identify top performers for Tier 1 treatment, create success playbooks from their strategies",
      metrics: "80% activation rate within 14 days, 1 placement within 45 days"
    },
    contacts: [
      { name: "Community Leader", title: "Community Director", linkedin: "#", approach: "Focus on member value and earnings potential" },
      { name: "Top Member Recruiter", title: "Independent Technical Recruiter", linkedin: "#", approach: "Emphasize freedom and earnings vs. agency work" },
    ],
    outreach: {
      emailSubject: "A better model for independent recruiters",
      emailBody: `Hi [Name],

Impressive network of independent recruiters you've built.

Paraform handles client acquisition, payments, and provides free AI tools - your members focus purely on placements and earn 3-5x traditional agency roles.

Can we set up a call to discuss a community partnership?

Best,`,
    },
  },
  {
    id: 4,
    company: "Tech Talent Advisors",
    tier: "Tier 2",
    type: "supply",
    description: "Boutique firm of 15 senior recruiters focused on Series A-C startups. Known for speed and founder relationships.",
    signals: [
      "Strong relationships with founders - could expand Paraform's startup client base",
      "Lean team that would benefit from Paraform's AI tools and automation",
      "Currently capacity-constrained and turning away business",
    ],
    valueHypothesis: "TTA is exactly the type of specialized, high-quality agency that makes marketplaces work. They bring expertise and relationships; Paraform provides scale and tools.",
    managementPlan: {
      onboarding: "Partnership model: Co-create onboarding experience, involve in product feedback early",
      cadence: "Weekly calls during ramp, then bi-weekly, quarterly strategy sessions",
      growth: "Help them hire and train junior recruiters using Paraform tools",
      metrics: "2x their current placement capacity within 6 months"
    },
    contacts: [
      { name: "Founder", title: "Founder & Principal", linkedin: "#", approach: "Founder-to-founder conversation about scaling" },
      { name: "Senior Recruiter", title: "Senior Technical Recruiter", linkedin: "#", approach: "Tool efficiency and earnings potential" },
    ],
    outreach: {
      emailSubject: "Scaling TTA without sacrificing quality",
      emailBody: `Hi [Name],

TTA's reputation with early-stage startups is exactly what Paraform values.

We provide infrastructure for boutique firms to scale without losing what makes them special - relationships and expertise. Our AI tools let your team do more with less overhead.

Quick call this week to explore fit?

Best,`,
    },
  },
];

const methodology = [
  { icon: Handshake, title: "Partner-First Mindset", description: "Every recruiter is a business owner. My job is to understand their goals and help them succeed on the platform - not just hit my acquisition numbers." },
  { icon: TrendingUp, title: "Fast Time-to-Value", description: "The first 30 days determine long-term success. I design onboarding to get recruiters earning quickly, because early wins predict retention." },
  { icon: BarChart3, title: "Data-Driven Engagement", description: "I track leading indicators (logins, submissions, interview rates) to identify at-risk partners before they churn, not after." },
  { icon: MessageSquare, title: "Tiered Touch Model", description: "Top partners get high-touch service (weekly calls, QBRs). Growing partners get scalable support. New partners get efficient onboarding." },
  { icon: Settings, title: "Systems Over Heroics", description: "I build repeatable playbooks and automations so the supply engine scales beyond what any individual can manage." },
  { icon: Zap, title: "Ops → Product Loop", description: "Partner feedback becomes product improvements. I document friction, quantify impact, and work with product to fix root causes." },
];

const keyMetrics = [
  { metric: "Time to First Placement", target: "< 30 days", description: "Early success predicts long-term retention" },
  { metric: "Monthly Active Partners", target: "> 80%", description: "Engaged partners place more candidates" },
  { metric: "Placements per Partner", target: "Growing MoM", description: "More placements = higher earnings = stickier" },
  { metric: "Partner NPS", target: "> 50", description: "Happy partners refer other recruiters" },
];

const experimentIdeas = [
  { title: "Speed Bonuses", description: "Bonus for placements within 14 days of role posting", metric: "Time-to-fill", effort: "Low" },
  { title: "Specialization Badges", description: "Public recognition for top performers in each vertical", metric: "Quality + engagement", effort: "Medium" },
  { title: "Peer Mentorship", description: "Pair new recruiters with top performers", metric: "Time-to-first-placement", effort: "Medium" },
  { title: "Priority Role Access", description: "Top performers get first look at new roles", metric: "Fill rate on hard roles", effort: "High" },
];

function ExecutiveOverviewSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-8 md:py-12 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Section Header */}
          <div className="mb-4 md:mb-6 text-center">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, ease: "backOut" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Strategic Summary
            </motion.div>
            <motion.h2
              className="text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Executive Overview
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-stone-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Sample partner acquisition strategy for recruiting agency portfolio
            </motion.p>
          </div>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Card className="shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-[#5074F6]/50 bg-white rounded-2xl">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Main Value Proposition */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">Strategy Purpose</p>
                    <p className="text-sm md:text-base text-stone-700 leading-relaxed">
                      This document outlines a sample approach to building a high-quality portfolio of recruiting partners for Paraform's marketplace. It includes target account selection criteria, management frameworks for different partner tiers, and marketplace experiments to drive liquidity and retention.
                    </p>
                  </motion.div>

                  {/* Approach */}
                  <motion.div
                    className="pt-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">Partner Management Philosophy</p>
                    <p className="text-sm md:text-base text-stone-700 leading-relaxed">
                      Treat recruiters like entrepreneurs, not vendors. Fast time-to-first-placement drives retention. Data-informed engagement with tiered touch models. Build scalable systems over individual heroics. Surface ops insights to product for continuous improvement.
                    </p>
                  </motion.div>

                  {/* Disclaimer */}
                  <motion.div
                    className="pt-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 }}
                  >
                    <p className="text-xs md:text-sm text-stone-500 italic">
                      This document demonstrates my strategic approach for interview discussions. Final strategies and priorities would be developed collaboratively during onboarding.
                    </p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
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
              Sample Partner<br/>
              Strategy
            </span>
          </motion.h1>
          <motion.p
            className="mb-8 text-xl font-normal text-slate-200 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Example Account Plans | Outreach Templates | Growth Tactics
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
  );
}

function PhilosophySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="philosophy" ref={sectionRef} className="py-8 md:py-12 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
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
              Philosophy
            </motion.div>
            <motion.h2
              className="text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Account Management Philosophy
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-stone-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Treating recruiters like entrepreneurs, not vendors
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {methodology.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Card className="h-full group shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-[#5074F6]/50 bg-white">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                        <item.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <Badge
                          variant="secondary"
                          className="mb-2 text-xs bg-blue-100 text-blue-700 border-blue-200 font-semibold"
                        >
                          {item.title}
                        </Badge>
                        <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
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

function MetricsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="metrics" ref={sectionRef} className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-6">
            <motion.h2
              className="text-2xl font-bold text-stone-900 md:text-3xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
            >
              Key Metrics I Would Track
            </motion.h2>
            <motion.p
              className="text-base text-stone-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Leading indicators of partner health and marketplace liquidity
            </motion.p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {keyMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="pt-6">
                    <p className="font-semibold text-slate-900 text-sm mb-1">{item.metric}</p>
                    <p className="text-3xl font-bold text-[#5074F6] mb-2">{item.target}</p>
                    <p className="text-xs text-slate-500">{item.description}</p>
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

function AccountCard({ account }: { account: typeof supplyAccounts[0] }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Card className="overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/50 hover:border-[#5074F6]/50 bg-white">
        <CardHeader className="bg-gradient-to-r from-stone-50 to-white">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <Briefcase className="h-5 w-5 text-[#5074F6]" />
              </div>
              <div>
                <CardTitle className="text-xl md:text-2xl text-stone-900">{account.company}</CardTitle>
                <p className="text-sm text-stone-600 mt-1 max-w-xl">{account.description}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-end">
              <Badge className={account.tier === "Tier 1" ? "bg-[#5074F6] text-white border-0" : "bg-slate-600 text-white border-0"}>
                {account.tier}
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                Supply Partner
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* Why They'd Join */}
          <div>
            <Badge variant="secondary" className="mb-3 text-xs font-semibold bg-slate-100 text-slate-700 border-slate-200">
              <AlertCircle className="h-3 w-3 mr-1" />
              WHY THEY'D JOIN PARAFORM
            </Badge>
            <ul className="space-y-2">
              {account.signals.map((signal, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-stone-600">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Value Hypothesis */}
          <div className="rounded-xl p-4 border bg-blue-50 border-blue-100">
            <Badge variant="secondary" className="mb-2 text-xs font-semibold bg-blue-100 text-blue-700 border-blue-200">
              <Sparkles className="h-3 w-3 mr-1" />
              VALUE HYPOTHESIS
            </Badge>
            <p className="text-sm text-slate-700 leading-relaxed">{account.valueHypothesis}</p>
          </div>

          {/* Management Plan - NEW SECTION */}
          <div className="rounded-xl p-4 border bg-blue-50 border-blue-100">
            <Badge variant="secondary" className="mb-3 text-xs font-semibold bg-blue-100 text-blue-700 border-blue-200">
              <Target className="h-3 w-3 mr-1" />
              HOW I'D MANAGE THIS PARTNER
            </Badge>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Onboarding Approach</p>
                <p className="text-sm text-slate-700">{account.managementPlan.onboarding}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Engagement Cadence</p>
                <p className="text-sm text-slate-700">{account.managementPlan.cadence}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Growth Strategy</p>
                <p className="text-sm text-slate-700">{account.managementPlan.growth}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Success Metrics</p>
                <p className="text-sm text-slate-700">{account.managementPlan.metrics}</p>
              </div>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <Badge variant="secondary" className="mb-3 text-xs font-semibold bg-slate-100 text-slate-700 border-slate-200">
              <Users className="h-3 w-3 mr-1" />
              KEY CONTACTS
            </Badge>
            <div className="grid md:grid-cols-2 gap-3">
              {account.contacts.map((contact, idx) => (
                <div key={idx} className="bg-stone-50 rounded-lg p-4 border border-stone-100 hover:border-blue-200 transition-colors">
                  <p className="font-medium text-stone-900 text-sm">{contact.name}</p>
                  <p className="text-xs text-stone-500 mb-2">{contact.title}</p>
                  <p className="text-xs text-stone-500 italic leading-relaxed">{contact.approach}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Initial Outreach */}
          <div>
            <Badge variant="secondary" className="mb-3 text-xs font-semibold bg-slate-100 text-slate-700 border-slate-200">
              <Mail className="h-3 w-3 mr-1" />
              INITIAL OUTREACH
            </Badge>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Email Subject</p>
                <p className="text-sm text-stone-700 bg-stone-50 rounded-lg px-3 py-2 font-mono border border-stone-100">
                  {account.outreach.emailSubject}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Opening Email</p>
                <p className="text-sm text-stone-700 bg-stone-50 rounded-lg px-3 py-2 leading-relaxed border border-stone-100 whitespace-pre-line">
                  {account.outreach.emailBody}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function AccountsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05, margin: "100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section id="accounts" ref={sectionRef} className="py-8 md:py-12 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-4 md:mb-6">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3 }}
            >
              <Briefcase className="h-4 w-4" />
              Target Partners
            </motion.div>
            <motion.h2
              className="text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Recruiting Partner Portfolio
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-stone-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              High-quality agencies and independent recruiters who would thrive on Paraform
            </motion.p>
          </div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {supplyAccounts.map((account) => (
              <AccountCard key={account.id} account={account} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ExperimentsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="experiments" ref={sectionRef} className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-6">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-700 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3 }}
            >
              <Zap className="h-4 w-4" />
              Marketplace Experiments
            </motion.div>
            <motion.h2
              className="text-2xl font-bold text-stone-900 md:text-3xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
            >
              Experiments I Would Run
            </motion.h2>
            <motion.p
              className="text-base text-stone-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Testing incentives and workflows to improve marketplace liquidity
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {experimentIdeas.map((experiment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-slate-900">{experiment.title}</h4>
                      <Badge variant="outline" className={
                        experiment.effort === "Low" ? "bg-blue-50 text-blue-700 border-blue-200" :
                        experiment.effort === "Medium" ? "bg-slate-100 text-slate-700 border-slate-200" :
                        "bg-stone-100 text-stone-700 border-stone-200"
                      }>
                        {experiment.effort} effort
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{experiment.description}</p>
                    <p className="text-xs text-slate-500"><strong>Success metric:</strong> {experiment.metric}</p>
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

function AIDisclosure() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  return (
    <section id="ai-disclosure" ref={sectionRef} className="py-10 bg-slate-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-blue-400" />
              <span className="text-slate-300 text-sm">Research completed in under 1 hour</span>
            </div>
            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3 text-center">A Note on AI Usage</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  I used AI tools as a <span className="text-blue-400 font-medium">research accelerant</span> for this case study - specifically for company research and formatting. The strategic thinking, partner management frameworks, account selection rationale, and operational playbooks are entirely my own methodology, developed through years of account management and customer success experience.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyFooter() {
  return (
    <footer className="py-8 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            Joshua (JD) Deleon | Supply-Side Account Manager Candidate
          </p>
          <div className="flex items-center gap-4">
            <a href="mailto:joshua2250@berkeley.edu" className="text-slate-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/jd-gtm" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="tel:+12099476557" className="text-slate-400 hover:text-white transition-colors">
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function CaseStudyPage() {
  return (
    <>
      <main className="min-h-screen pt-14">
        <HeroSection />
        <ExecutiveOverviewSection />
        <PhilosophySection />
        <MetricsSection />
        <AccountsSection />
        <ExperimentsSection />
        <AIDisclosure />
      </main>
      <CaseStudyFooter />
    </>
  );
}
