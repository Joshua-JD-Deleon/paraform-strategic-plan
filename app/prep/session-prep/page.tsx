"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  Target,
  Clock,
  MessageSquare,
  CheckCircle2,
  Users,
  AlertCircle,
  Mail,
  Lightbulb,
  ArrowRight,
  FileText,
  Clipboard,
  Zap,
  DollarSign,
  BarChart3,
  Briefcase,
  Calculator,
  Layers,
  TrendingUp,
  Settings
} from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: "pre-call", label: "Pre-Call Prep", icon: Clipboard },
  { id: "call-structure", label: "Call Structure", icon: Clock },
  { id: "pain-funnel", label: "PAIN Funnel", icon: AlertCircle },
  { id: "business-case", label: "Business Case", icon: Briefcase },
  { id: "follow-up", label: "Follow-Up", icon: Mail },
];

const objectives = [
  "Qualify as champion / identify champion",
  "Uncover pain points & business impact",
  "Understand decision process & stakeholders",
  "Identify compelling event / urgency",
  "Book next step with right people"
];

const callStructure = [
  {
    step: "1. Open",
    duration: "2 min",
    description: "Build rapport and set expectations",
    tactics: [
      "Build rapport briefly",
      '"What would make this a successful call for you?"',
      '"By the end, I\'ll know if we can help. If not, we\'ll say so."'
    ]
  },
  {
    step: "2. Clarify Research",
    duration: "3 min",
    description: "Confirm your research",
    tactics: [
      "Confirm role & responsibilities",
      "Verify company context you researched"
    ]
  },
  {
    step: "3. Discovery",
    duration: "15-20 min",
    description: "Uncover pain and impact",
    tactics: [
      "Current State: \"What's your current process for [challenge area]?\"",
      "Problem & Impact: Go 3+ layers deep on pain",
      "Triggers & Urgency: \"Why is this a priority now?\"",
      "Desired Outcomes: \"What does success look like?\""
    ]
  },
  {
    step: "4. Tailored Response",
    duration: "5-10 min",
    description: "Connect pain to solution",
    tactics: [
      "Connect their pain to your solution",
      "Share 1-2 relevant case studies",
      "Discuss potential ROI"
    ]
  },
  {
    step: "5. Qualify Process & Budget",
    duration: "5 min",
    description: "Understand decision dynamics",
    tactics: [
      '"How are decisions like this typically made?"',
      '"Who else needs to be involved?"',
      '"Is there budget allocated for this?"',
      '"What\'s your timeline for making a decision?"'
    ]
  },
  {
    step: "6. Address Concerns",
    duration: "Variable",
    description: "Surface and handle objections",
    tactics: [
      '"What questions do you have?"',
      '"What concerns might prevent us from moving forward?"'
    ]
  },
  {
    step: "7. Lock Next Steps",
    duration: "2 min",
    description: "Secure commitment",
    tactics: [
      "Book next meeting ON the call",
      "Confirm attendees for next step",
      "Summarize key points"
    ]
  }
];

const painFunnel = [
  "Tell me more about that...",
  "Can you be more specific?",
  "Give me an example...",
  "How long has that been a problem?",
  "What have you tried to do about it?",
  "Has anything worked?",
  "What has this cost you?",
  "How do you feel about that cost?",
  "What kind of trouble does it cause?"
];

const emailTemplates = [
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
• I'll [your action item]
• You'll [their action item]

Let me know if I missed anything. Looking forward to [next meeting].`
  },
  {
    id: "warmup",
    title: "Pre-Meeting Warm-Up (3 days before)",
    content: `Subject: [Meeting Topic] - [Date]

[Name], excited for our call with [new stakeholders] on [date].

We plan to focus on [key topic/outcome]. Anything else you want to ensure we cover?

Highly recommend checking this out beforehand:
• [Relevant resource/case study link]

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

// Business Case Data
const businessCaseComponents = [
  {
    title: "Executive Summary",
    description: "High-level overview for quick decision-making",
    items: [
      "Problem statement in 2-3 sentences",
      "Proposed solution overview",
      "Expected ROI and timeline",
      "Investment required"
    ]
  },
  {
    title: "Current State Analysis",
    description: "Document the pain and its impact",
    items: [
      "Current process inefficiencies",
      "Quantified costs (time, money, resources)",
      "Risks of maintaining status quo",
      "Failed previous attempts"
    ]
  },
  {
    title: "Future State Vision",
    description: "Paint the picture of success",
    items: [
      "Desired outcomes and metrics",
      "Process improvements",
      "Strategic alignment",
      "Competitive advantages gained"
    ]
  },
  {
    title: "Solution Overview",
    description: "How you solve their problem",
    items: [
      "Key capabilities mapped to pain points",
      "Implementation approach",
      "Timeline and milestones",
      "Success criteria"
    ]
  },
  {
    title: "Financial Analysis",
    description: "The numbers that matter",
    items: [
      "Total cost of ownership",
      "Expected ROI and payback period",
      "Hard savings (cost reduction)",
      "Soft savings (productivity, risk)"
    ]
  },
  {
    title: "Risk Mitigation",
    description: "Address concerns proactively",
    items: [
      "Implementation risks and mitigation",
      "Change management considerations",
      "Support and training plan",
      "Vendor stability and roadmap"
    ]
  }
];

const roiFramework = [
  {
    category: "Time Savings",
    icon: Clock,
    color: "blue",
    formula: "(Hours saved/week) x (Hourly cost) x 52 weeks",
    example: "10 hrs/week x $75/hr x 52 = $39,000/year",
    questions: [
      "How many hours per week on [manual process]?",
      "What's the fully loaded cost of that time?",
      "How many people are affected?"
    ]
  },
  {
    category: "Revenue Impact",
    icon: TrendingUp,
    color: "green",
    formula: "(Win rate increase) x (Pipeline value) OR (Cycle reduction) x (Deals/year)",
    example: "5% win rate increase x $2M pipeline = $100K",
    questions: [
      "What's your current win rate?",
      "Average deal size?",
      "Current sales cycle length?"
    ]
  },
  {
    category: "Cost Avoidance",
    icon: DollarSign,
    color: "amber",
    formula: "(Risk probability) x (Cost if occurs) + Compliance/penalty costs",
    example: "20% risk x $500K impact = $100K avoided",
    questions: [
      "What compliance requirements are at risk?",
      "Cost of a single missed deadline?",
      "Penalty for non-compliance?"
    ]
  },
  {
    category: "Productivity Gains",
    icon: BarChart3,
    color: "purple",
    formula: "(Output increase %) x (Revenue per employee)",
    example: "15% productivity x $200K revenue/employee x 10 employees = $300K",
    questions: [
      "Current output per person?",
      "What's limiting productivity now?",
      "How many people would benefit?"
    ]
  }
];

const stakeholderMessaging = [
  {
    role: "Economic Buyer (CFO/VP Finance)",
    icon: DollarSign,
    color: "emerald",
    priorities: ["ROI & payback period", "Risk mitigation", "Budget alignment", "Total cost of ownership"],
    talkTrack: "This investment pays back in [X months] through [primary savings]. The risk of inaction is [quantified cost] per [time period].",
    avoid: "Don't lead with features. Focus on financial outcomes and risk."
  },
  {
    role: "Technical Buyer (IT/Security)",
    icon: Settings,
    color: "blue",
    priorities: ["Integration complexity", "Security & compliance", "Maintenance overhead", "Scalability"],
    talkTrack: "We integrate with [their stack] via [method]. SOC 2 Type II certified. Implementation is [X weeks] with [support level].",
    avoid: "Don't skip technical details. Have architecture diagrams ready."
  },
  {
    role: "User Buyer (End User/Manager)",
    icon: Users,
    color: "purple",
    priorities: ["Ease of use", "Time savings", "Learning curve", "Day-to-day impact"],
    talkTrack: "Your team will save [X hours/week] on [task]. Most users are productive within [timeframe]. Here's what their day looks like...",
    avoid: "Don't ignore adoption concerns. Show empathy for change management."
  },
  {
    role: "Champion (Your Internal Advocate)",
    icon: Target,
    color: "amber",
    priorities: ["Career impact", "Internal credibility", "Project success", "Executive visibility"],
    talkTrack: "When this succeeds, you'll be known as the person who [achievement]. I'll help you build the internal case and present to [executives].",
    avoid: "Don't forget to arm them with ammunition for internal meetings."
  }
];

const valuePropositionStructure = {
  framework: "For-Who-That-Unlike",
  components: [
    {
      label: "FOR",
      prompt: "[Target customer segment]",
      example: "For proposal teams at enterprise companies"
    },
    {
      label: "WHO",
      prompt: "[Key pain point or need]",
      example: "who struggle with time-consuming RFP responses"
    },
    {
      label: "OUR SOLUTION",
      prompt: "[Product/service name]",
      example: "Paraform"
    },
    {
      label: "THAT",
      prompt: "[Primary benefit/capability]",
      example: "uses AI to automate 80% of response drafting"
    },
    {
      label: "UNLIKE",
      prompt: "[Alternative/competitor]",
      example: "unlike manual processes or basic templates"
    },
    {
      label: "WE",
      prompt: "[Key differentiator]",
      example: "we learn your voice and improve with every proposal"
    }
  ]
};

const businessCaseChecklist = [
  {
    phase: "Before Building",
    items: [
      "Confirm all stakeholders and their priorities",
      "Gather all quantified pain points from discovery",
      "Understand their fiscal year and budget cycle",
      "Identify the compelling event and deadline",
      "Get champion buy-in on approach"
    ]
  },
  {
    phase: "While Building",
    items: [
      "Use their words and terminology",
      "Include 3 scenarios (conservative, expected, optimistic)",
      "Map capabilities to specific pain points",
      "Include competitive comparison if relevant",
      "Add customer proof points and references"
    ]
  },
  {
    phase: "Before Presenting",
    items: [
      "Review with champion first",
      "Prepare objection responses",
      "Have backup slides for deep dives",
      "Know who presents which sections",
      "Confirm all decision-makers attending"
    ]
  },
  {
    phase: "After Presenting",
    items: [
      "Send same-day summary email",
      "Address any open questions within 24 hours",
      "Provide editable version for internal sharing",
      "Schedule follow-up before leaving",
      "Update CRM with feedback and next steps"
    ]
  }
];
export default function SessionPrepPage() {
  const [activeTab, setActiveTab] = useState("pre-call");

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
              Session Prep
            </Badge>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Discovery Call Framework
            </h1>
            <p className="text-slate-600">
              Complete framework for running effective discovery calls
            </p>
          </div>

          {/* Tab Navigation */}
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
            {/* Pre-Call Tab */}
            {activeTab === "pre-call" && (
              <div className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Objectives */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                          <Target className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <CardTitle>My Objectives</CardTitle>
                          <CardDescription>Pick 2-3 for each call</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {objectives.map((obj, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Hypothesis Template */}
                  <Card className="border-2 border-purple-200">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                          <Lightbulb className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <CardTitle>Hypothesis Template</CardTitle>
                          <CardDescription>Your POV going in</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-slate-700 italic">
                          &quot;Because of <span className="font-semibold text-purple-700">[trigger/change]</span>,
                          now&apos;s the time for <span className="font-semibold text-purple-700">[Company]</span> to
                          <span className="font-semibold text-purple-700"> [action we enable]</span> by
                          <span className="font-semibold text-purple-700"> [date]</span>.
                          This unlocks <span className="font-semibold text-purple-700">[positive outcomes]</span> while
                          avoiding <span className="font-semibold text-purple-700">[negative outcomes]</span>.&quot;
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Intel & Company Snapshot */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                          <Users className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle>Contact Intel</CardTitle>
                          <CardDescription>Know your buyer</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-3">
                        {["Name & Title", "Key Responsibilities", "Anticipated Priorities", "Role in Decision"].map((field, i) => (
                          <div key={i} className="p-3 bg-slate-50 rounded-lg">
                            <div className="font-medium text-slate-900 text-sm mb-1">{field}</div>
                            <div className="h-6 border-b border-slate-300"></div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <CardTitle>Company Snapshot</CardTitle>
                          <CardDescription>Know their business</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-3">
                        {["What They Do", "Industry", "Recent News/Triggers", "Strategic Priorities"].map((field, i) => (
                          <div key={i} className="p-3 bg-slate-50 rounded-lg">
                            <div className="font-medium text-slate-900 text-sm mb-1">{field}</div>
                            <div className="h-6 border-b border-slate-300"></div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Call Structure Tab */}
            {activeTab === "call-structure" && (
              <div className="space-y-6">
                <Card className="border-2 border-blue-200">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle>Call Structure (30-45 min)</CardTitle>
                        <CardDescription>Framework for every discovery call</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {callStructure.map((step, i) => (
                      <div key={i} className="border rounded-lg p-4 hover:border-blue-300 transition-colors">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="bg-blue-50 text-blue-700">
                              {step.step}
                            </Badge>
                            <span className="font-medium text-slate-900">{step.description}</span>
                          </div>
                          <Badge variant="secondary">{step.duration}</Badge>
                        </div>
                        <ul className="space-y-2 ml-4">
                          {step.tactics.map((tactic, j) => (
                            <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
                              <ArrowRight className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                              {tactic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Discovery Deep Dive */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <CardTitle>Discovery Deep Dive Questions</CardTitle>
                        <CardDescription>Key questions for step 3</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Current State</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                          <li>&quot;What&apos;s your current process for [challenge area]?&quot;</li>
                          <li>&quot;What&apos;s working? What&apos;s not?&quot;</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Problem & Impact</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                          <li>&quot;What are your biggest pain points right now?&quot;</li>
                          <li>&quot;Can you give me a specific example?&quot;</li>
                          <li>&quot;How long has this been a problem?&quot;</li>
                          <li>&quot;What&apos;s the cost of not solving this?&quot;</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* PAIN Funnel Tab */}
            {activeTab === "pain-funnel" && (
              <div className="space-y-6">
                <Card className="border-2 border-red-200">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <CardTitle>PAIN Funnel</CardTitle>
                        <CardDescription>Use these to go 3+ layers deep on any problem</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {painFunnel.map((question, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg">
                          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-red-600">{i + 1}</span>
                          </div>
                          <span className="text-slate-700 font-medium">&quot;{question}&quot;</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-amber-900">Pro Tip</p>
                          <p className="text-sm text-amber-700">
                            The goal is to uncover the emotional and business impact.
                            Keep asking &quot;why&quot; and &quot;what happens then&quot; until you understand the full cost of inaction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Post-Call Templates */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card className="border-2 border-purple-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-purple-600" />
                        Compelling Event Template
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-slate-700 italic text-sm">
                          &quot;<span className="font-semibold text-purple-700">[Executive]</span> is pushing to reach
                          <span className="font-semibold text-purple-700"> [goal]</span> and created
                          <span className="font-semibold text-purple-700"> [initiative]</span> to support this.
                          Target: <span className="font-semibold text-purple-700">[milestone]</span> by
                          <span className="font-semibold text-purple-700"> [date]</span>.&quot;
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-red-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                        Problem Statement Template
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <p className="text-slate-700 italic text-sm">
                          &quot;Despite trying <span className="font-semibold text-red-700">[failed solutions]</span>,
                          they can&apos;t achieve <span className="font-semibold text-red-700">[outcomes]</span> because of
                          <span className="font-semibold text-red-700"> [root cause]</span>, costing them
                          <span className="font-semibold text-red-700"> [negative impact]</span>.&quot;
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Business Case Tab */}
            {activeTab === "business-case" && (
              <div className="space-y-6">
                {/* Intro Card */}
                <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
                  <CardContent className="py-4">
                    <div className="flex items-center gap-2 text-emerald-800">
                      <Briefcase className="h-5 w-5" />
                      <p className="font-medium">
                        Build compelling business cases that help champions sell internally and accelerate deal velocity
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Case Template Overview */}
                <Card className="border-2 border-emerald-200">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                        <Layers className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <CardTitle>Business Case Template</CardTitle>
                        <CardDescription>Six essential components for a winning business case</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {businessCaseComponents.map((component, index) => (
                        <div key={index} className="border rounded-lg p-4 hover:border-emerald-300 transition-colors">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                              <span className="text-xs font-bold text-emerald-700">{index + 1}</span>
                            </div>
                            <h4 className="font-semibold text-slate-900">{component.title}</h4>
                          </div>
                          <p className="text-xs text-slate-500 mb-3">{component.description}</p>
                          <ul className="space-y-1.5">
                            {component.items.map((item, i) => (
                              <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Key Components Checklist */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Clipboard className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle>Business Case Checklist</CardTitle>
                        <CardDescription>Phase-by-phase checklist for building and presenting</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {businessCaseChecklist.map((phase, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <Badge className={`mb-3 ${
                            index === 0 ? 'bg-blue-100 text-blue-700' :
                            index === 1 ? 'bg-purple-100 text-purple-700' :
                            index === 2 ? 'bg-amber-100 text-amber-700' :
                            'bg-emerald-100 text-emerald-700'
                          }`}>
                            {phase.phase}
                          </Badge>
                          <ul className="space-y-2">
                            {phase.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-4 h-4 rounded border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* ROI Calculation Framework */}
                <Card className="border-2 border-amber-200">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                        <Calculator className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <CardTitle>ROI Calculation Framework</CardTitle>
                        <CardDescription>Four categories to quantify value</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {roiFramework.map((category, index) => {
                        const CategoryIcon = category.icon;
                        return (
                          <div key={index} className={`border-2 border-${category.color}-200 rounded-lg p-4 bg-${category.color}-50/30`}>
                            <div className="flex items-center gap-2 mb-3">
                              <div className={`w-8 h-8 rounded-lg bg-${category.color}-100 flex items-center justify-center`}>
                                <CategoryIcon className={`h-4 w-4 text-${category.color}-600`} />
                              </div>
                              <h4 className="font-semibold text-slate-900">{category.category}</h4>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <p className="text-xs font-medium text-slate-500 uppercase mb-1">Formula</p>
                                <p className="text-sm text-slate-700 font-mono bg-white p-2 rounded">{category.formula}</p>
                              </div>
                              <div>
                                <p className="text-xs font-medium text-slate-500 uppercase mb-1">Example</p>
                                <p className="text-sm text-slate-600 italic">{category.example}</p>
                              </div>
                              <div>
                                <p className="text-xs font-medium text-slate-500 uppercase mb-1">Discovery Questions</p>
                                <ul className="space-y-1">
                                  {category.questions.map((q, i) => (
                                    <li key={i} className="text-sm text-slate-600 flex items-start gap-1">
                                      <ArrowRight className="h-3 w-3 text-slate-400 flex-shrink-0 mt-1" />
                                      {q}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Value Proposition Structure */}
                <Card className="border-2 border-purple-200">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                        <Target className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle>Value Proposition Structure</CardTitle>
                        <CardDescription>{valuePropositionStructure.framework} Framework</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {valuePropositionStructure.components.map((comp, index) => (
                        <div key={index} className="border rounded-lg p-3 bg-purple-50/50">
                          <Badge className="bg-purple-100 text-purple-700 mb-2">{comp.label}</Badge>
                          <p className="text-sm text-slate-600 mb-2">{comp.prompt}</p>
                          <p className="text-xs text-purple-700 italic bg-white p-2 rounded">&quot;{comp.example}&quot;</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-4 bg-purple-100 rounded-lg">
                      <p className="text-sm font-medium text-purple-900 mb-2">Complete Value Prop Example:</p>
                      <p className="text-sm text-purple-800 italic">
                        &quot;For proposal teams at enterprise companies who struggle with time-consuming RFP responses, Paraform uses AI to automate 80% of response drafting. Unlike manual processes or basic templates, we learn your voice and improve with every proposal.&quot;
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Stakeholder-Specific Messaging */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle>Stakeholder-Specific Messaging</CardTitle>
                        <CardDescription>Tailor your message to each buyer type</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {stakeholderMessaging.map((stakeholder, index) => {
                        const StakeholderIcon = stakeholder.icon;
                        return (
                          <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-2 mb-3">
                              <div className={`w-8 h-8 rounded-lg bg-${stakeholder.color}-100 flex items-center justify-center`}>
                                <StakeholderIcon className={`h-4 w-4 text-${stakeholder.color}-600`} />
                              </div>
                              <h4 className="font-semibold text-slate-900">{stakeholder.role}</h4>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <p className="text-xs font-medium text-slate-500 uppercase mb-1">Priorities</p>
                                <div className="flex flex-wrap gap-1">
                                  {stakeholder.priorities.map((priority, i) => (
                                    <Badge key={i} variant="outline" className="text-xs">{priority}</Badge>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <p className="text-xs font-medium text-slate-500 uppercase mb-1">Talk Track</p>
                                <p className="text-sm text-slate-700 italic bg-slate-50 p-2 rounded">&quot;{stakeholder.talkTrack}&quot;</p>
                              </div>
                              <div className="flex items-start gap-2 p-2 bg-red-50 rounded">
                                <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <p className="text-xs text-red-700">{stakeholder.avoid}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Pro Tips */}
                <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-amber-600" />
                      Business Case Pro Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { tip: "Use Their Words", detail: "Mirror exact language from discovery. If they said 'painful', don't write 'challenging'." },
                        { tip: "Three Scenarios Rule", detail: "Always present conservative, expected, and optimistic ROI. Let them choose which feels right." },
                        { tip: "Make It Shareable", detail: "Your champion will present this without you. Make every slide standalone." },
                        { tip: "Anchor High", detail: "Lead with total potential value before discussing investment. Context matters." },
                        { tip: "Quantify Everything", detail: "Every claim needs a number. 'Faster' becomes '40% faster' or '2 hours saved'." },
                        { tip: "Address the Elephant", detail: "If there's an obvious concern, address it proactively. Silence breeds doubt." }
                      ].map((item, index) => (
                        <div key={index} className="p-3 bg-white rounded-lg border border-amber-200">
                          <p className="font-medium text-sm text-slate-900 mb-1">{item.tip}</p>
                          <p className="text-xs text-amber-700">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Follow-Up Tab */}
            {activeTab === "follow-up" && (
              <div className="space-y-6">
                {/* Follow-Up Checklist */}
                <Card className="border-2 border-emerald-200">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <CardTitle>Follow-Up Checklist</CardTitle>
                        <CardDescription>Time-bound action items</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <Badge className="bg-red-100 text-red-700">Within 2 Hours</Badge>
                      </h4>
                      <ul className="space-y-2">
                        {["Send recap email with key points in their words", "Update CRM with call notes", "Send calendar invite for next step"].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <Badge className="bg-amber-100 text-amber-700">Within 24 Hours</Badge>
                      </h4>
                      <ul className="space-y-2">
                        {["Share relevant resources mentioned", "Connect on LinkedIn (if appropriate)", "Loop in internal team members as needed"].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Email Templates */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle>Email Templates</CardTitle>
                        <CardDescription>Copy-paste frameworks for follow-ups</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {emailTemplates.map((template) => (
                        <AccordionItem key={template.id} value={template.id} className="border rounded-lg px-4 mb-2 hover:bg-blue-50/50">
                          <AccordionTrigger className="hover:no-underline">{template.title}</AccordionTrigger>
                          <AccordionContent>
                            <pre className="bg-slate-50 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
                              {template.content}
                            </pre>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>

                {/* Do's and Don'ts */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-amber-600" />
                      Quick Reminders
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-emerald-700 mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4" />
                          Do
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                          <li>• Listen more than talk (aim for 70/30)</li>
                          <li>• Go 3+ layers deep on problems</li>
                          <li>• Summarize back what you heard</li>
                          <li>• Book next step on the call</li>
                          <li>• Send recap same day</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                          <AlertCircle className="h-4 w-4" />
                          Don&apos;t
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                          <li>• Talk too much</li>
                          <li>• Use generic questions</li>
                          <li>• Skip to pitching</li>
                          <li>• &quot;Just checking in&quot; emails</li>
                          <li>• Overpromise</li>
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
