"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { Navigation } from "@/components/sections/Navigation";
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
  Building2,
  Briefcase,
} from "lucide-react";

// DEMAND SIDE: Companies that would benefit from Paraform
const demandAccounts = [
  {
    id: 1,
    company: "Anthropic",
    tier: "Tier 1",
    type: "demand",
    description: "AI safety company. ~1,000+ employees. Series D funded ($4B+ valuation). Rapid hiring across research, engineering, and GTM roles.",
    signals: [
      "Hiring 100+ roles across engineering, research, policy, and GTM functions",
      "Competing with OpenAI, Google DeepMind for top AI talent - speed matters",
      "Recent $2B+ funding round enables aggressive talent acquisition",
    ],
    valueHypothesis: "With intense competition for AI talent, Anthropic needs specialized recruiters who understand ML/AI hiring. Paraform's 3x faster time-to-hire and access to niche technical recruiters could be a major advantage in their talent war.",
    contacts: [
      { name: "Talent Acquisition Lead", title: "Head of Recruiting", linkedin: "#", approach: "Focus on competitive advantage in AI talent market - speed and specialization" },
      { name: "HR Business Partner", title: "Senior HRBP, Engineering", linkedin: "#", approach: "Emphasize quality of technical recruiters and 70% interview rate" },
    ],
    outreach: {
      emailSubject: "Scaling Anthropic's AI talent pipeline",
      emailBody: "Hi [Name],\n\nWith 100+ open roles and fierce competition for AI talent, I imagine speed-to-hire is critical.\n\nParaform helped Windsurf hire 7 engineers in under 2 months through our network of specialized technical recruiters.\n\nWould it be worth a quick call to see if we could help accelerate your hiring?\n\nBest,",
      sequenceLabel: "12 Steps / 21 Days",
      sequence: [
        { day: 1, step: 1, channel: "LinkedIn", action: "Connect request with note on AI talent market" },
        { day: 1, step: 2, channel: "Email", action: "Initial outreach (Windsurf case study)" },
        { day: 3, step: 3, channel: "LinkedIn", action: "Engage with Anthropic content" },
        { day: 5, step: 4, channel: "Phone", action: "Call attempt #1" },
        { day: 5, step: 5, channel: "Email", action: "Follow-up with technical recruiting angle" },
        { day: 8, step: 6, channel: "LinkedIn", action: "InMail with different value prop" },
        { day: 10, step: 7, channel: "Phone", action: "Call attempt #2" },
        { day: 12, step: 8, channel: "Email", action: "Share relevant content on AI hiring trends" },
        { day: 15, step: 9, channel: "LinkedIn", action: "Engage with another post + brief message" },
        { day: 17, step: 10, channel: "Phone", action: "Call attempt #3" },
        { day: 19, step: 11, channel: "Email", action: "Social proof email (similar AI companies)" },
        { day: 21, step: 12, channel: "Email", action: "Breakup email" },
      ],
    },
  },
  {
    id: 2,
    company: "Databricks",
    tier: "Tier 1",
    type: "demand",
    description: "Data + AI platform. ~7,000 employees. $43B+ valuation. Aggressive growth hiring across engineering, sales, and customer success.",
    signals: [
      "Hiring 500+ roles globally - massive scale requires recruiting efficiency",
      "Competing for data engineering talent against Snowflake, AWS, Google",
      "Recent acquisitions (MosaicML) indicate aggressive talent strategy",
    ],
    valueHypothesis: "At Databricks' scale, traditional agency relationships become unwieldy. Paraform's marketplace model lets them tap specialized recruiters for different functions without managing dozens of agency contracts.",
    contacts: [
      { name: "VP Talent Acquisition", title: "VP, Global Talent Acquisition", linkedin: "#", approach: "Focus on scale efficiency and recruiter specialization by function" },
      { name: "Director Engineering Recruiting", title: "Director, Technical Recruiting", linkedin: "#", approach: "Emphasize technical recruiter quality and speed metrics" },
    ],
    outreach: {
      emailSubject: "Scaling recruiting at Databricks' pace",
      emailBody: "Hi [Name],\n\nWith 500+ open roles, I imagine managing agency relationships at scale is a challenge.\n\nParaform gives companies like Palantir instant access to specialized recruiters without the overhead of traditional agency contracts - and at 30% lower cost.\n\nWorth exploring?\n\nBest,",
      sequenceLabel: "11 Steps / 21 Days",
      sequence: [
        { day: 1, step: 1, channel: "LinkedIn", action: "Connect request on recruiting at scale" },
        { day: 3, step: 2, channel: "Email", action: "Initial outreach (Palantir reference)" },
        { day: 5, step: 3, channel: "Phone", action: "Call attempt #1" },
        { day: 7, step: 4, channel: "Email", action: "Follow-up with cost efficiency angle" },
        { day: 9, step: 5, channel: "LinkedIn", action: "Engage with Databricks content" },
        { day: 11, step: 6, channel: "Phone", action: "Call attempt #2" },
        { day: 13, step: 7, channel: "Email", action: "Share marketplace efficiency data" },
        { day: 15, step: 8, channel: "LinkedIn", action: "InMail to second contact" },
        { day: 17, step: 9, channel: "Phone", action: "Call attempt #3" },
        { day: 19, step: 10, channel: "Email", action: "Customer story with metrics" },
        { day: 21, step: 11, channel: "Email", action: "Breakup email" },
      ],
    },
  },
  {
    id: 3,
    company: "Ramp",
    tier: "Tier 2",
    type: "demand",
    description: "Corporate card & spend management. ~1,000 employees. $7.65B valuation. Rapid growth in competitive fintech space.",
    signals: [
      "Hiring across engineering, sales, and operations - 150+ open roles",
      "8x revenue growth in 2023 requires proportional team scaling",
      "Competing with Brex for talent in competitive fintech market",
    ],
    valueHypothesis: "Ramp's hypergrowth requires recruiting that can keep pace. Paraform's speed (avg 1 month time-to-hire vs industry 2-3 months) directly supports their aggressive growth targets.",
    contacts: [
      { name: "Head of Recruiting", title: "Head of Talent Acquisition", linkedin: "#", approach: "Focus on speed-to-hire supporting hypergrowth" },
      { name: "Recruiting Manager", title: "Senior Manager, GTM Recruiting", linkedin: "#", approach: "Emphasize sales/GTM recruiter specialization" },
    ],
    outreach: {
      emailSubject: "Recruiting at Ramp's growth pace",
      emailBody: "Hi [Name],\n\nRamp's growth trajectory is impressive - and I imagine keeping recruiting pace is a constant challenge.\n\nParaform helped Decagon hire their founding engineer and GTM lead in just 27 days. Our average time-to-hire is 1 month vs. industry average of 2-3.\n\nCould be relevant for your growth targets?\n\nBest,",
      sequenceLabel: "10 Steps / 18 Days",
      sequence: [
        { day: 1, step: 1, channel: "LinkedIn", action: "Comment on Ramp company post" },
        { day: 2, step: 2, channel: "LinkedIn", action: "Connect request with growth note" },
        { day: 3, step: 3, channel: "Email", action: "Initial outreach (Decagon case study)" },
        { day: 6, step: 4, channel: "Phone", action: "Call attempt #1" },
        { day: 8, step: 5, channel: "Email", action: "Follow-up with speed metrics" },
        { day: 10, step: 6, channel: "LinkedIn", action: "Connect with second contact" },
        { day: 12, step: 7, channel: "Phone", action: "Call attempt #2" },
        { day: 14, step: 8, channel: "Email", action: "Share fintech hiring content" },
        { day: 16, step: 9, channel: "LinkedIn", action: "Message with different angle" },
        { day: 18, step: 10, channel: "Email", action: "Breakup email" },
      ],
    },
  },
];

// SUPPLY SIDE: Recruiting agencies/firms to partner with
const supplyAccounts = [
  {
    id: 4,
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
    contacts: [
      { name: "Managing Partner", title: "Managing Partner", linkedin: "#", approach: "Focus on incremental revenue without diluting brand" },
      { name: "Director, Business Dev", title: "Director of Business Development", linkedin: "#", approach: "Emphasize deal flow and reduced BD burden" },
    ],
    outreach: {
      emailSubject: "Expanding Riviera's reach without the BD overhead",
      emailBody: "Hi [Name],\n\nRiviera's reputation in technical executive search is excellent - but I imagine there's always more demand than your team can pursue through traditional BD.\n\nParaform gives elite recruiters like your team access to curated roles from 500+ companies (Palantir, Cursor, Hightouch) - we handle BD so you can focus on placements.\n\nWorth a conversation?\n\nBest,",
      sequenceLabel: "10 Steps / 18 Days",
      sequence: [
        { day: 1, step: 1, channel: "Email", action: "Initial outreach (deal flow focus)" },
        { day: 2, step: 2, channel: "LinkedIn", action: "Connect with personalized note" },
        { day: 4, step: 3, channel: "Phone", action: "Call attempt #1" },
        { day: 6, step: 4, channel: "Email", action: "Follow-up with client list angle" },
        { day: 8, step: 5, channel: "LinkedIn", action: "Engage with firm content" },
        { day: 10, step: 6, channel: "Phone", action: "Call attempt #2" },
        { day: 12, step: 7, channel: "Email", action: "Share recruiter success story" },
        { day: 14, step: 8, channel: "LinkedIn", action: "Connect with second contact" },
        { day: 16, step: 9, channel: "Phone", action: "Call attempt #3" },
        { day: 18, step: 10, channel: "Email", action: "Breakup email" },
      ],
    },
  },
  {
    id: 5,
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
    contacts: [
      { name: "CEO/Founder", title: "CEO & Founder", linkedin: "#", approach: "Focus on strategic partnership and market expansion" },
      { name: "VP Recruiting", title: "VP of Recruiting Operations", linkedin: "#", approach: "Emphasize recruiter productivity and earnings potential" },
    ],
    outreach: {
      emailSubject: "Betts + Paraform: GTM recruiting at scale",
      emailBody: "Hi [Name],\n\nBetts has built an incredible reputation in GTM recruiting. I think there's a strong strategic fit with Paraform.\n\nOur marketplace connects specialized recruiters with 500+ companies actively hiring - and recruiters on Paraform earn 3-5x what they would in traditional roles.\n\nWould love to explore a partnership.\n\nBest,",
      sequenceLabel: "12 Steps / 21 Days",
      sequence: [
        { day: 1, step: 1, channel: "LinkedIn", action: "Connect with strategic partnership angle" },
        { day: 2, step: 2, channel: "Email", action: "Initial outreach (partnership focus)" },
        { day: 4, step: 3, channel: "Phone", action: "Call attempt #1" },
        { day: 6, step: 4, channel: "LinkedIn", action: "Engage with Betts content" },
        { day: 8, step: 5, channel: "Email", action: "Follow-up with earnings data" },
        { day: 10, step: 6, channel: "Phone", action: "Call attempt #2" },
        { day: 12, step: 7, channel: "LinkedIn", action: "InMail to second contact" },
        { day: 14, step: 8, channel: "Email", action: "Share marketplace success metrics" },
        { day: 16, step: 9, channel: "LinkedIn", action: "Another touchpoint" },
        { day: 17, step: 10, channel: "Phone", action: "Call attempt #3" },
        { day: 19, step: 11, channel: "Email", action: "Social proof from similar firms" },
        { day: 21, step: 12, channel: "Email", action: "Breakup email" },
      ],
    },
  },
  {
    id: 6,
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
    contacts: [
      { name: "Community Leader", title: "Community Director", linkedin: "#", approach: "Focus on member value and earnings potential" },
      { name: "Top Member Recruiter", title: "Independent Technical Recruiter", linkedin: "#", approach: "Emphasize freedom and earnings vs. agency work" },
    ],
    outreach: {
      emailSubject: "A better model for independent recruiters",
      emailBody: "Hi [Name],\n\nI've been following your community of independent recruiters - impressive network.\n\nParaform was built specifically to help recruiters like your members thrive. We handle client acquisition, payments, and provide free AI tools - recruiters just focus on what they do best.\n\nOur recruiters earn 3-5x traditional agency roles. Would your members be interested in learning more?\n\nBest,",
      sequenceLabel: "10 Steps / 18 Days",
      sequence: [
        { day: 1, step: 1, channel: "LinkedIn", action: "Connect with community focus" },
        { day: 3, step: 2, channel: "Email", action: "Initial outreach (member value)" },
        { day: 5, step: 3, channel: "Phone", action: "Call attempt #1" },
        { day: 7, step: 4, channel: "Email", action: "Follow-up with earnings data" },
        { day: 9, step: 5, channel: "LinkedIn", action: "Engage with community content" },
        { day: 11, step: 6, channel: "Phone", action: "Call attempt #2" },
        { day: 13, step: 7, channel: "Email", action: "Share recruiter testimonial" },
        { day: 15, step: 8, channel: "LinkedIn", action: "Connect with top member" },
        { day: 17, step: 9, channel: "Phone", action: "Call attempt #3" },
        { day: 18, step: 10, channel: "Email", action: "Breakup email" },
      ],
    },
  },
];

const methodology = [
  { icon: Target, title: "Two-Sided Targeting", description: "Paraform is a marketplace - success requires both demand (companies hiring) and supply (recruiters filling roles). I target both sides with tailored approaches." },
  { icon: TrendingUp, title: "Signal-First Selection", description: "Each account chosen based on specific triggers: hiring velocity, growth funding, market expansion, or strategic fit with Paraform's specializations." },
  { icon: Users, title: "Multi-Stakeholder Mapping", description: "Two contacts per account - decision maker and influencer - to avoid single-threaded relationships and increase conversion probability." },
  { icon: MessageSquare, title: "Value-Aligned Messaging", description: "Demand side: speed, quality, cost efficiency. Supply side: deal flow, earnings, tools. Each message addresses their specific pain points." },
  { icon: Zap, title: "Coordinated Outreach", description: "10-12 touches across LinkedIn, email, and phone over 3 weeks. Tier 1 gets fully personalized; Tier 2 starts with tailored templates." },
  { icon: Clock, title: "Marketplace Thinking", description: "Understanding network effects - each new recruiter makes the platform more valuable to companies, and vice versa. Prioritize accounts that accelerate this flywheel." },
];

function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden">
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
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] text-center">
          <motion.h1
            className="mb-4 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Marketplace Growth Strategy
            </span>
          </motion.h1>
          <motion.p
            className="mb-8 text-xl font-normal text-slate-200 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Two-sided targeting: Companies hiring + Recruiting agencies
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/">
              <Button variant="outline" className="text-white border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all font-semibold">
                Back to Strategic Plan
              </Button>
            </Link>
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
              My Approach
            </motion.div>
            <motion.h2
              className="text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Marketplace Development Methodology
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-stone-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Building network effects through strategic account targeting on both sides
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
                <Card className="h-full group shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-slate-400 bg-white">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 shadow-lg shadow-slate-500/20">
                        <item.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <Badge
                          variant="secondary"
                          className="mb-2 text-xs bg-slate-100 text-slate-700 border-slate-200 font-semibold"
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

function AccountCard({ account }: { account: typeof demandAccounts[0] }) {
  const isDemand = account.type === "demand";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Card className="overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/50 hover:border-blue-300 bg-white">
        <CardHeader className="bg-gradient-to-r from-stone-50 to-white">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-lg ${isDemand ? 'bg-blue-100' : 'bg-emerald-100'}`}>
                {isDemand ? <Building2 className="h-5 w-5 text-blue-600" /> : <Briefcase className="h-5 w-5 text-emerald-600" />}
              </div>
              <div>
                <CardTitle className="text-xl md:text-2xl text-stone-900">{account.company}</CardTitle>
                <p className="text-sm text-stone-600 mt-1 max-w-xl">{account.description}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-end">
              <Badge className={account.tier === "Tier 1" ? "bg-blue-600 text-white border-0" : "bg-slate-600 text-white border-0"}>
                {account.tier}
              </Badge>
              <Badge className={isDemand ? "bg-blue-100 text-blue-700 border-blue-200" : "bg-emerald-100 text-emerald-700 border-emerald-200"}>
                {isDemand ? "Demand Side" : "Supply Side"}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* Signals */}
          <div>
            <Badge variant="secondary" className="mb-3 text-xs font-semibold bg-orange-100 text-orange-700 border-orange-200">
              <AlertCircle className="h-3 w-3 mr-1" />
              {isDemand ? "WHY THEY NEED PARAFORM" : "WHY THEY'D JOIN PARAFORM"}
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
          <div className={`rounded-xl p-4 border ${isDemand ? 'bg-blue-50 border-blue-100' : 'bg-emerald-50 border-emerald-100'}`}>
            <Badge variant="secondary" className={`mb-2 text-xs font-semibold ${isDemand ? 'bg-blue-100 text-blue-700 border-blue-200' : 'bg-emerald-100 text-emerald-700 border-emerald-200'}`}>
              <Sparkles className="h-3 w-3 mr-1" />
              VALUE HYPOTHESIS
            </Badge>
            <p className="text-sm text-slate-700 leading-relaxed">{account.valueHypothesis}</p>
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

          {/* Outreach Strategy */}
          <div className="pt-6">
            <Badge variant="secondary" className="mb-3 text-xs font-semibold bg-slate-100 text-slate-700 border-slate-200">
              <Mail className="h-3 w-3 mr-1" />
              OUTREACH STRATEGY
            </Badge>
            <div className="space-y-4">
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
              {/* Sequence Table */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Outreach Sequence</p>
                  <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                    {account.outreach.sequenceLabel}
                  </Badge>
                </div>
                <div className="overflow-x-auto rounded-lg border border-stone-200">
                  <table className="w-full text-xs">
                    <thead className="bg-stone-100">
                      <tr>
                        <th className="px-3 py-2 text-left font-semibold text-slate-700 w-12">Day</th>
                        <th className="px-3 py-2 text-left font-semibold text-slate-700 w-12">Step</th>
                        <th className="px-3 py-2 text-left font-semibold text-slate-700 w-24">Channel</th>
                        <th className="px-3 py-2 text-left font-semibold text-slate-700">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      {account.outreach.sequence.map((step, idx) => (
                        <tr key={idx} className="bg-white hover:bg-stone-50 transition-colors">
                          <td className="px-3 py-2 text-stone-600">{step.day}</td>
                          <td className="px-3 py-2 text-stone-600">{step.step}</td>
                          <td className="px-3 py-2">
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                              step.channel === "LinkedIn" ? "bg-blue-100 text-blue-700" :
                              step.channel === "Email" ? "bg-green-100 text-green-700" :
                              "bg-orange-100 text-orange-700"
                            }`}>
                              {step.channel === "LinkedIn" && <Linkedin className="h-3 w-3" />}
                              {step.channel === "Email" && <Mail className="h-3 w-3" />}
                              {step.channel === "Phone" && <Phone className="h-3 w-3" />}
                              {step.channel}
                            </span>
                          </td>
                          <td className="px-3 py-2 text-stone-600">{step.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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
    <section id="accounts" ref={sectionRef} className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Demand Side */}
          <div className="mb-12">
            <div className="text-center mb-4 md:mb-6">
              <motion.div
                className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3 }}
              >
                <Building2 className="h-4 w-4" />
                Demand Side
              </motion.div>
              <motion.h2
                className="text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Target Companies
              </motion.h2>
              <motion.p
                className="text-base md:text-lg text-stone-600"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                High-growth companies that would benefit from Paraform's recruiter marketplace
              </motion.p>
            </div>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {demandAccounts.map((account) => (
                <AccountCard key={account.id} account={account} />
              ))}
            </motion.div>
          </div>

          {/* Supply Side */}
          <div>
            <div className="text-center mb-4 md:mb-6">
              <motion.div
                className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3 }}
              >
                <Briefcase className="h-4 w-4" />
                Supply Side
              </motion.div>
              <motion.h2
                className="text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Target Recruiting Partners
              </motion.h2>
              <motion.p
                className="text-base md:text-lg text-stone-600"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Recruiting firms and independents that would thrive on Paraform's platform
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
                  I used AI tools as a <span className="text-blue-400 font-medium">research accelerant</span> for this case study - specifically for rapid company research, market analysis, and formatting. The strategic thinking, account selection rationale, marketplace dynamics understanding, and outreach approach are entirely my own methodology, developed through years of account management and business development experience.
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
            Joshua (JD) Deleon | Account Manager Candidate
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
      <Navigation />
      <main className="min-h-screen pt-16">
        <HeroSection />
        <PhilosophySection />
        <AccountsSection />
        <AIDisclosure />
      </main>
      <CaseStudyFooter />
    </>
  );
}
