"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  DollarSign,
  CheckCircle2,
  Briefcase,
  FileText,
  AlertTriangle,
  Users,
  Swords,
  Lightbulb,
  ChevronRight,
  Mic,
  Clock,
  Shield,
  MessageSquare,
  ChevronDown,
  Sparkles,
  Zap,
  Play,
  Pause,
  RotateCcw,
  Timer
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const tabs = [
  { id: "meddpicc", label: "MEDDPICC", icon: Target },
  { id: "pitch", label: "Pitches & Scripts", icon: Mic },
  { id: "objections", label: "Objections", icon: Shield },
];

const framework = [
  {
    letter: "M",
    title: "Metrics",
    icon: TrendingUp,
    color: "bg-blue-500",
    definition: "The quantifiable measures of success the prospect uses to evaluate the impact of a solution.",
    keyQuestions: [
      "What metrics do you track to measure success in this area?",
      "What does good look like? What are your targets?",
      "How much time/money is this problem costing you today?",
      "If we solved this, how would you measure the impact?"
    ],
    whatToListen: [
      "Specific numbers (time, money, percentages)",
      "KPIs they're measured on",
      "Gap between current state and desired state",
      "Business impact of the problem"
    ],
    redFlags: [
      "Can't quantify the problem",
      "No clear success metrics",
      "Vague about current performance"
    ],
    example: "For Paraform: 'How many RFPs do you handle per quarter? How long does each take? What's your win rate?'"
  },
  {
    letter: "E",
    title: "Economic Buyer",
    icon: DollarSign,
    color: "bg-green-500",
    definition: "The person with the final authority to approve the purchase and release budget.",
    keyQuestions: [
      "Who ultimately signs off on purchases like this?",
      "Walk me through how budget decisions get made",
      "Who controls the budget for this initiative?",
      "If we were to move forward, who would need to approve?"
    ],
    whatToListen: [
      "Names and titles of decision makers",
      "Budget ownership and approval process",
      "Whether you're talking to the EB or a champion",
      "Organizational buying patterns"
    ],
    redFlags: [
      "Can't identify who controls budget",
      "Multiple competing budget owners",
      "No access to economic buyer"
    ],
    example: "For Paraform: 'Beyond yourself, who would need to sign off on a tool like this? Who owns the sales enablement budget?'"
  },
  {
    letter: "D",
    title: "Decision Criteria",
    icon: CheckCircle2,
    color: "bg-purple-500",
    definition: "The formal and informal criteria the prospect will use to evaluate and select a solution.",
    keyQuestions: [
      "What's most important to you in evaluating solutions?",
      "How will you decide between options?",
      "Are there must-have requirements vs nice-to-haves?",
      "What would make this a no-brainer decision?"
    ],
    whatToListen: [
      "Prioritized list of requirements",
      "Technical vs business requirements",
      "Deal breakers and must-haves",
      "Evaluation scorecard or process"
    ],
    redFlags: [
      "Criteria that doesn't match your strengths",
      "Unrealistic requirements",
      "Criteria set by competitor"
    ],
    example: "For Paraform: 'What's most important - AI quality, ease of use, integrations, or price? How would you rank those?'"
  },
  {
    letter: "D",
    title: "Decision Process",
    icon: Briefcase,
    color: "bg-amber-500",
    definition: "The formal process and steps the organization will follow to make a purchase decision.",
    keyQuestions: [
      "Walk me through how you've purchased tools like this before",
      "What are the steps from evaluation to decision?",
      "Who needs to be involved at each stage?",
      "What's your timeline for making a decision?"
    ],
    whatToListen: [
      "Clear stages and gates",
      "Stakeholders at each stage",
      "Timeline and urgency",
      "Potential blockers or delays"
    ],
    redFlags: [
      "No clear process defined",
      "Infinite evaluation loop",
      "Too many stakeholders"
    ],
    example: "For Paraform: 'What would a successful pilot look like? Who needs to be involved? What's your timeline?'"
  },
  {
    letter: "P",
    title: "Paper Process",
    icon: FileText,
    color: "bg-pink-500",
    definition: "The administrative, legal, and procurement steps required to finalize a purchase.",
    keyQuestions: [
      "What does your procurement process look like?",
      "Are there security reviews required?",
      "Do you need legal to review contracts?",
      "What's typically the longest part of getting a deal done?"
    ],
    whatToListen: [
      "Procurement requirements and timeline",
      "Security/compliance reviews needed",
      "Legal review process",
      "Typical contract negotiation patterns"
    ],
    redFlags: [
      "Lengthy procurement process",
      "Strict security requirements you can't meet",
      "Unknown or undefined process"
    ],
    example: "For Paraform: 'What does procurement typically look for? We're SOC 2 Type 2 - would that satisfy security review?'"
  },
  {
    letter: "I",
    title: "Identify Pain",
    icon: AlertTriangle,
    color: "bg-red-500",
    definition: "The specific business problems or challenges that are driving the prospect to seek a solution.",
    keyQuestions: [
      "What's the biggest challenge you're facing in this area?",
      "Tell me about a recent example of this problem",
      "How is this impacting you and your team?",
      "What happens if you don't solve this?"
    ],
    whatToListen: [
      "Specific pain points with examples",
      "Emotional impact (frustration, stress)",
      "Business impact (lost deals, time, money)",
      "Urgency to solve"
    ],
    redFlags: [
      "No real pain - 'nice to have'",
      "Pain not connected to business outcomes",
      "Low urgency to change"
    ],
    example: "For Paraform: 'What's the most frustrating part of your RFP process? Walk me through what happens when a new RFP comes in.'"
  },
  {
    letter: "C",
    title: "Champion",
    icon: Users,
    color: "bg-blue-500",
    definition: "An internal advocate who has power and influence, and will sell on your behalf when you're not there.",
    keyQuestions: [
      "Who feels this pain the most on your team?",
      "Who would benefit most from solving this?",
      "Would you be willing to advocate for this internally?",
      "What would you need from us to make the case?"
    ],
    whatToListen: [
      "Personal stake in solving the problem",
      "Influence within the organization",
      "Willingness to advocate",
      "Access to decision makers"
    ],
    redFlags: [
      "No clear champion identified",
      "Champion lacks influence",
      "Champion unwilling to advocate"
    ],
    example: "For Paraform: 'If this works well in a pilot, would you be comfortable presenting results to leadership?'"
  },
  {
    letter: "C",
    title: "Competition",
    icon: Swords,
    color: "bg-slate-500",
    definition: "Other options the prospect is considering, including competitors, internal solutions, and doing nothing.",
    keyQuestions: [
      "What other options are you considering?",
      "Have you used tools like this before?",
      "What's the alternative if you don't buy a solution?",
      "What would make Paraform stand out vs alternatives?"
    ],
    whatToListen: [
      "Named competitors being evaluated",
      "Status quo / do nothing option",
      "Build vs buy considerations",
      "How far along with competitors"
    ],
    redFlags: [
      "Strong incumbent relationship",
      "Competitor already selected",
      "Not seriously considering alternatives"
    ],
    example: "For Paraform: 'Are you evaluating other RFP platforms? What's your impression so far? What would make us stand out?'"
  }
];

// ALL PITCHES - Grouped by Type
const elevatorPitches = [
  {
    id: "30-sec",
    title: "30-Second Intro",
    duration: 30,
    context: "When someone asks 'Tell me about yourself'",
    pitch: `I'm a full-cycle enterprise AE with 6+ years of experience in B2B SaaS. I've consistently hit quota by combining disciplined outbound with consultative discovery.

What excites me about Paraform is the opportunity to be the first sales hire - to build the playbook, not just execute it. The AI-powered RFP space is massive and ready for disruption, and Paraform has the product to win.

I want to help take you from founder-led sales to a scalable, repeatable motion.`,
    keyPoints: [
      "Experience summary in one sentence",
      "Why Paraform specifically",
      "What you bring to the table",
      "End with value you'll add"
    ]
  },
  {
    id: "2-min",
    title: "2-Minute Story",
    duration: 120,
    context: "When they want more depth on your background",
    pitch: `Let me tell you how I got here.

I started in a BDR role where I learned the fundamentals - prospecting, qualification, handling rejection. That's where I developed my outbound muscle.

Moving into a closing role, I found my passion for complex deals. At my previous company, I built pipelines from scratch and closed our largest deals by focusing on enterprise pain points.

What I've learned is that the best sales comes from genuine curiosity about the customer's problem, not from pushing product. That's why I'm drawn to Paraform - you're solving a real pain point with AI that actually works.

I'm at a point where I want more ownership. I don't want to run someone else's playbook - I want to build one. Being the first sales hire means I can shape how Paraform sells, influence product direction, and build something that scales.

That's why I'm here.`,
    keyPoints: [
      "Show career progression",
      "Highlight specific achievements",
      "Connect your approach to Paraform",
      "End with why this role, why now"
    ]
  },
  {
    id: "why-paraform",
    title: "Why Paraform Pitch",
    duration: 60,
    context: "When they ask 'Why do you want to work here?'",
    pitch: `Three things:

**Market timing.** AI is transforming enterprise software, and the RFP/proposal space is massive - billions of hours spent on repetitive work. Paraform is positioned to capture that.

**Product differentiation.** I've looked at the competition. Most are adding AI as a feature. Paraform's agent-based approach - pulling from live sources, showing its reasoning - that's fundamentally different. Customers are choosing Paraform over established players even with existing contracts. That tells me the product is genuinely better.

**The opportunity.** Being the first sales hire isn't just a job - it's a chance to build something. I'll work directly with founders, influence product direction, and create the playbook that future hires will use. That kind of impact is rare, and it's what I'm looking for.`,
    keyPoints: [
      "Market opportunity",
      "Product differentiation",
      "Role opportunity",
      "Shows you've done research"
    ]
  },
  {
    id: "why-me",
    title: "Why Me Pitch",
    duration: 60,
    context: "When they ask 'Why should we hire you?'",
    pitch: `You need someone who can:

1. **Run independently from day one.** I've done full-cycle before - sourcing, discovery, demos, negotiation, close. I don't need hand-holding.

2. **Build, not just execute.** I've created playbooks, built outbound sequences, refined messaging. I see patterns and systematize what works.

3. **Sell AI products.** I understand the objections - accuracy concerns, security questions, ROI skepticism. I know how to build trust with skeptical enterprise buyers.

4. **Stay hungry.** I'm at a point where I want ownership and impact. I'll outwork the competition because I'm building something, not just hitting a number.

You're looking for a founding AE who can take you from founder-led sales to a repeatable motion. That's exactly what I want to build.`,
    keyPoints: [
      "Immediate independence",
      "Builder mentality",
      "Relevant experience (AI sales)",
      "Hungry and committed"
    ]
  }
];

const positioningStatements = [
  {
    id: "first-hire",
    theme: "On Being First Hire",
    statement: "I see being the first hire as the opportunity, not the risk. I get to build the foundation that everything else will be built on. That's exactly the kind of challenge I'm looking for.",
    when: "When they test your comfort with ambiguity"
  },
  {
    id: "startup-risk",
    theme: "On Startup Risk",
    statement: "Paraform has product-market fit, paying customers, and rapid ARR growth. The 'risk' of an early-stage company is also the upside. I'd rather bet on myself in a high-growth environment than optimize for safety in a slow one.",
    when: "When they probe about stability concerns"
  },
  {
    id: "founders",
    theme: "On Working with Founders",
    statement: "I want direct access to decision-makers and product insight. In larger orgs, you're three levels removed from that. Here, I'll be in the room where it happens. That's where I do my best work.",
    when: "When discussing team structure"
  },
  {
    id: "building",
    theme: "On Building vs Executing",
    statement: "I've run other people's playbooks - I know what good looks like. Now I want to write one. The skills are different: you need to experiment, document, iterate. That's the muscle I want to develop.",
    when: "When discussing your growth goals"
  },
  {
    id: "ai-sales",
    theme: "On AI Sales",
    statement: "Selling AI is different. Buyers are skeptical because they've been burned by hype. You win by being transparent, setting realistic expectations, and letting the product prove itself. Paraform's transparency features - showing sources and confidence - are perfect for building that trust.",
    when: "When discussing your approach to selling Paraform"
  },
  {
    id: "quota",
    theme: "On Quota",
    statement: "I'm confident about quota because I have a system. Consistent outbound, rigorous qualification, multi-threaded deals. I don't rely on luck - I control what I can control and the numbers follow.",
    when: "When discussing expectations"
  }
];

const closingStatements = [
  {
    id: "end-interview",
    context: "End of Interview",
    duration: 30,
    statement: "I want to be direct - everything I've learned today has reinforced why I want this role. The team is strong, the product is differentiated, and the opportunity is exactly what I'm looking for. I'm ready to start building. What are the next steps?"
  },
  {
    id: "after-virtual",
    context: "After Virtual Session",
    duration: 30,
    statement: "I really enjoyed the discovery calls today. I tried to run them the way I'd run them with a real prospect - consultative, curious, focused on their world. I hope that came through. I'm excited about the in-person session."
  },
  {
    id: "ask-for-job",
    context: "Asking for the Job",
    duration: 45,
    statement: "I don't want to leave any ambiguity - I want this job. I think I'm the right person to be your first sales hire, and I'm ready to prove it. Is there anything else you need from me to feel confident about moving forward?"
  }
];

const objections = [
  {
    id: "1",
    objection: "You don't have specific AI/ML sales experience",
    severity: "high",
    response: "You're right that I haven't sold AI-native products specifically, but I've successfully sold complex, technical SaaS solutions that required deep product understanding and technical credibility. At NielsenIQ, I sold AI-powered retail analytics that used machine learning for demand forecasting - I had to explain algorithms to non-technical buyers. More importantly, I understand that selling AI isn't about the technology, it's about the business outcomes. For Paraform, that's faster RFP responses, higher win rates, and freed-up sales capacity. That's the conversation I know how to have.",
    keyPoints: [
      "Acknowledge the gap honestly",
      "Bridge to relevant technical sales experience",
      "Focus on business outcomes over technology",
      "Show you understand Paraform's value prop"
    ]
  },
  {
    id: "2",
    objection: "Why are you leaving / Why did you leave your last role?",
    severity: "medium",
    response: "I'm looking for an opportunity where I can have a bigger impact and grow with the company. I thrive in environments where I'm building something - whether that's a new territory, a sales playbook, or customer relationships from scratch. The founding AE role at Paraform is exactly that. I'm excited about the AI space, the problem you're solving resonates with pain I've seen firsthand in enterprise sales, and I want to be part of building something special from the early stages.",
    keyPoints: [
      "Keep it positive and forward-looking",
      "Don't criticize previous employers",
      "Connect to why THIS role is the right next step",
      "Show genuine enthusiasm for Paraform"
    ]
  },
  {
    id: "3",
    objection: "You've been at several companies - are you a job hopper?",
    severity: "medium",
    response: "I understand that concern. Looking at my trajectory, each move was intentional and resulted in increased scope and responsibility. What you'll see is a pattern of joining companies at inflection points and delivering results. The reason I'm so excited about Paraform is that this is the role I've been building toward - a founding position where I can apply everything I've learned to help build a category-defining company. I'm looking for a place to plant roots and grow.",
    keyPoints: [
      "Acknowledge the pattern directly",
      "Show intentionality in each move",
      "Highlight progression and results",
      "Express commitment to longevity at Paraform"
    ]
  },
  {
    id: "4",
    objection: "What's your biggest weakness?",
    severity: "low",
    response: "I can be impatient with slow decision-making processes. In enterprise sales, that's actually served me well - I push deals forward and don't let them stall. But I've learned that some buying processes just take time, especially in enterprise. I've developed better systems for staying engaged during long cycles without being pushy - regular value-adds, stakeholder mapping, and accepting that not every deal moves on my timeline. It's an ongoing area of growth.",
    keyPoints: [
      "Choose a real weakness",
      "Show self-awareness",
      "Demonstrate active work on improvement",
      "Frame it with a silver lining for sales"
    ]
  },
  {
    id: "5",
    objection: "How do you handle rejection?",
    severity: "low",
    response: "Rejection is data. Every 'no' teaches me something - maybe it was timing, maybe budget, maybe I didn't uncover the real pain. I track my losses as carefully as my wins because that's where the learning is. What keeps me resilient is focusing on activity over outcomes in the short term. I can't control every decision, but I can control my pipeline quality, my preparation, and my follow-through. The results follow from that.",
    keyPoints: [
      "Reframe rejection as learning opportunity",
      "Show analytical approach to losses",
      "Demonstrate process orientation",
      "Focus on controllables"
    ]
  },
  {
    id: "6",
    objection: "This is a founding role with no playbook - can you handle ambiguity?",
    severity: "high",
    response: "That's exactly what excites me. I've built territories from scratch twice - once at GlobalData where I was the first rep building the US Consumer team, and again at Calligo where I developed the outbound playbook that the team still uses. I actually find too much structure limiting. Give me a target market, a product I believe in, and room to experiment, and I'll figure out what works. I'll document it, iterate on it, and build something the next reps can use. That building phase is where I do my best work.",
    keyPoints: [
      "Show excitement for ambiguity, not just tolerance",
      "Provide concrete examples of building from scratch",
      "Demonstrate systematic approach to experimentation",
      "Emphasize documentation and scalability"
    ]
  },
  {
    id: "7",
    objection: "What if you don't hit quota in the first 6 months?",
    severity: "high",
    response: "First, I'd want to understand why. Is it pipeline volume, conversion rate, deal size, or cycle time? Each has a different fix. If it's pipeline, I'm doubling down on outbound and asking for help with inbound distribution. If it's conversion, I'm reviewing every lost deal and adjusting my discovery or demo. I'd also be proactive in communicating with leadership - no surprises. I've had slow starts before and recovered by staying disciplined on activity and asking for coaching. The worst thing you can do is hide and hope.",
    keyPoints: [
      "Show diagnostic thinking",
      "Demonstrate accountability, not excuses",
      "Emphasize proactive communication",
      "Reference past recovery from slow starts"
    ]
  },
  {
    id: "8",
    objection: "Why Paraform specifically?",
    severity: "high",
    response: "Three reasons. First, the problem - I've lived the RFP pain. I've seen deals slow down or die because the response process was a mess. Solving that with AI is genuinely exciting to me. Second, the timing - you're at the stage where a founding AE can have real impact on the trajectory of the company. I want to be part of building, not just executing someone else's playbook. Third, the team - from what I've seen, you're building with experienced operators who've done this before. That's the environment where I'll learn the most and contribute the most.",
    keyPoints: [
      "Show you've done your research",
      "Connect to personal experience with the problem",
      "Emphasize timing and opportunity",
      "Compliment the team authentically"
    ]
  }
];

// Timer Component for in-card practice
function PracticeTimer({ duration, title }: { duration: number; title: string }) {
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRunning(!isRunning);
  };

  const resetTimer = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTimeRemaining(duration);
    setIsRunning(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && isRunning) {
      setIsRunning(false);
      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate([200, 100, 200]);
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, timeRemaining]);

  const progressPercent = ((duration - timeRemaining) / duration) * 100;

  return (
    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-slate-600">Practice Timer</span>
          <span className={`font-mono text-lg font-bold ${
            timeRemaining <= 10 ? 'text-red-500' :
            timeRemaining <= 30 ? 'text-amber-500' : 'text-slate-900'
          }`}>
            {formatTime(timeRemaining)}
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${
              timeRemaining <= 10 ? 'bg-red-500' :
              timeRemaining <= 30 ? 'bg-amber-500' : 'bg-blue-500'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Button
          size="sm"
          variant={isRunning ? "destructive" : "default"}
          className="h-8 w-8 p-0"
          onClick={toggleTimer}
        >
          {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={resetTimer}
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default function PlaybookPage() {
  const [activeTab, setActiveTab] = useState("meddpicc");
  const [expandedObjection, setExpandedObjection] = useState<string | null>(null);
  const [expandedPitch, setExpandedPitch] = useState<string | null>(null);
  const [activeMeddpicc, setActiveMeddpicc] = useState(0);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-red-100 text-red-700 border-red-200";
      case "medium": return "bg-amber-100 text-amber-700 border-amber-200";
      case "low": return "bg-green-100 text-green-700 border-green-200";
      default: return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4">
              Sales Arsenal
            </Badge>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Your Sales Arsenal
            </h1>
            <p className="text-slate-600">
              MEDDPICC framework, pitches with practice timers, and objection handling
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
            {/* MEDDPICC Tab */}
            {activeTab === "meddpicc" && (
              <div className="space-y-6">
                {/* Quick Reference */}
                <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                  {framework.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveMeddpicc(index)}
                      className={`${item.color} text-white rounded-lg p-3 text-center transition-all ${
                        activeMeddpicc === index ? "ring-2 ring-offset-2 ring-blue-500 scale-105" : "hover:opacity-80"
                      }`}
                    >
                      <div className="text-2xl font-bold">{item.letter}</div>
                      <div className="text-xs truncate">{item.title}</div>
                    </button>
                  ))}
                </div>

                {/* Active Item Detail */}
                <Card className="border-2 border-slate-200">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg ${framework[activeMeddpicc].color} flex items-center justify-center`}>
                        {(() => {
                          const Icon = framework[activeMeddpicc].icon;
                          return <Icon className="h-6 w-6 text-white" />;
                        })()}
                      </div>
                      <div>
                        <CardTitle className="text-2xl">
                          {framework[activeMeddpicc].letter} - {framework[activeMeddpicc].title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {framework[activeMeddpicc].definition}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          Key Questions to Ask
                        </h4>
                        <ul className="space-y-2">
                          {framework[activeMeddpicc].keyQuestions.map((q, qIndex) => (
                            <li key={qIndex} className="text-sm text-slate-600 border-l-2 border-emerald-300 pl-3 py-1">
                              &quot;{q}&quot;
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Lightbulb className="h-4 w-4 text-amber-500" />
                          What to Listen For
                        </h4>
                        <ul className="space-y-2">
                          {framework[activeMeddpicc].whatToListen.map((w, wIndex) => (
                            <li key={wIndex} className="flex items-start gap-2 text-sm text-slate-600">
                              <ChevronRight className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                              {w}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Red Flags
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {framework[activeMeddpicc].redFlags.map((flag, fIndex) => (
                          <Badge key={fIndex} variant="outline" className="text-red-700 border-red-300">
                            {flag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-2">Paraform Context</h4>
                      <p className="text-sm text-purple-700">{framework[activeMeddpicc].example}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Tip */}
                <Card className="bg-emerald-900 text-white">
                  <CardContent className="py-6">
                    <p className="text-center text-emerald-100 mb-4">
                      Remember: MEDDPICC is a qualification framework, not a checklist. Use it to understand the deal, not interrogate the prospect.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                      <span className="bg-emerald-800 px-3 py-1 rounded">Listen more than you talk</span>
                      <span className="bg-emerald-800 px-3 py-1 rounded">Ask follow-up questions</span>
                      <span className="bg-emerald-800 px-3 py-1 rounded">Validate assumptions</span>
                      <span className="bg-emerald-800 px-3 py-1 rounded">Document everything</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Pitch Tab - Now with ALL pitches grouped by type */}
            {activeTab === "pitch" && (
              <div className="space-y-8">
                {/* Elevator Pitches Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mic className="h-5 w-5 text-rose-600" />
                    <h2 className="text-xl font-bold text-slate-900">Elevator Pitches</h2>
                    <Badge className="bg-rose-100 text-rose-700 border-rose-200">{elevatorPitches.length} pitches</Badge>
                  </div>

                  <Card className="bg-rose-50 border-rose-200">
                    <CardContent className="py-4">
                      <div className="flex items-center gap-2 text-rose-800">
                        <Timer className="h-5 w-5" />
                        <p className="font-medium">Practice these out loud. Each card has a built-in timer.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid gap-4">
                    {elevatorPitches.map((pitch, index) => {
                      const isExpanded = expandedPitch === pitch.id;
                      return (
                        <motion.div
                          key={pitch.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Card
                            className={`cursor-pointer transition-all duration-300 ${
                              isExpanded ? 'border-rose-400 shadow-lg' : 'border-slate-200 hover:border-rose-300'
                            }`}
                            onClick={() => setExpandedPitch(isExpanded ? null : pitch.id)}
                          >
                            <CardHeader className="py-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center">
                                    <Mic className="h-5 w-5 text-rose-600" />
                                  </div>
                                  <div>
                                    <CardTitle className="text-base">{pitch.title}</CardTitle>
                                    <CardDescription className="text-sm">{pitch.context}</CardDescription>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge variant="outline" className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {pitch.duration}s
                                  </Badge>
                                  <motion.div
                                    animate={{ rotate: isExpanded ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <ChevronDown className={`h-5 w-5 ${isExpanded ? 'text-rose-500' : 'text-slate-400'}`} />
                                  </motion.div>
                                </div>
                              </div>
                            </CardHeader>
                            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                              <CardContent className="pt-0 space-y-4">
                                {/* Practice Timer */}
                                <PracticeTimer duration={pitch.duration} title={pitch.title} />

                                {/* Script */}
                                <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap border">
                                  <div dangerouslySetInnerHTML={{ __html: pitch.pitch.replace(/\*\*(.*?)\*\*/g, '<strong class="text-rose-700">$1</strong>') }} />
                                </div>

                                {/* Key Points */}
                                <div>
                                  <h4 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                                    <Lightbulb className="h-4 w-4 text-amber-500" />
                                    Key Elements
                                  </h4>
                                  <div className="grid grid-cols-2 gap-2">
                                    {pitch.keyPoints.map((point, idx) => (
                                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        {point}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </CardContent>
                            </div>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Positioning Statements Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-purple-600" />
                    <h2 className="text-xl font-bold text-slate-900">Positioning Statements</h2>
                    <Badge className="bg-purple-100 text-purple-700 border-purple-200">{positioningStatements.length} statements</Badge>
                  </div>

                  <Card className="bg-purple-50 border-purple-200">
                    <CardContent className="py-4">
                      <div className="flex items-center gap-2 text-purple-800">
                        <Target className="h-5 w-5" />
                        <p className="font-medium">These help you reframe potential concerns into strengths.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid md:grid-cols-2 gap-4">
                    {positioningStatements.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Card className="h-full border-slate-200 hover:border-purple-300 transition-all">
                          <CardHeader className="py-4">
                            <Badge className="w-fit bg-purple-100 text-purple-700 mb-2">
                              {item.theme}
                            </Badge>
                            <CardDescription className="text-xs">
                              Use when: {item.when}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-slate-700 text-sm italic">&quot;{item.statement}&quot;</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Closing Statements Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-green-600" />
                    <h2 className="text-xl font-bold text-slate-900">Closing Statements</h2>
                    <Badge className="bg-green-100 text-green-700 border-green-200">{closingStatements.length} closes</Badge>
                  </div>

                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="py-4">
                      <div className="flex items-center gap-2 text-green-800">
                        <Sparkles className="h-5 w-5" />
                        <p className="font-medium">Always close strong. Leave no doubt that you want this.</p>
                      </div>
                    </CardContent>
                  </Card>

                  {closingStatements.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="border-slate-200 hover:border-green-300 transition-all">
                        <CardHeader className="py-4">
                          <div className="flex items-center justify-between">
                            <Badge className="w-fit bg-green-100 text-green-700">
                              {item.context}
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {item.duration}s
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          {/* Practice Timer */}
                          <PracticeTimer duration={item.duration} title={item.context} />

                          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                            <p className="text-green-800 font-medium italic">&quot;{item.statement}&quot;</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Final Reminder */}
                <Card className="bg-gradient-to-br from-rose-100 to-purple-100 border-0">
                  <CardContent className="py-6 text-center">
                    <Zap className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Remember</h3>
                    <p className="text-slate-700">
                      Confidence without arrogance. Enthusiasm without desperation.
                      <br />
                      You&apos;re evaluating them as much as they&apos;re evaluating you.
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Objections Tab */}
            {activeTab === "objections" && (
              <div className="space-y-6">
                {/* LAIR Framework */}
                <Card className="border border-blue-200 bg-blue-50/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">The Framework: LAIR</h3>
                        <div className="grid md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-bold text-blue-600">L</span>
                            <span className="text-slate-700">isten fully</span>
                            <p className="text-xs text-slate-500 mt-1">Don&apos;t interrupt or get defensive</p>
                          </div>
                          <div>
                            <span className="font-bold text-blue-600">A</span>
                            <span className="text-slate-700">cknowledge</span>
                            <p className="text-xs text-slate-500 mt-1">Show you understand the concern</p>
                          </div>
                          <div>
                            <span className="font-bold text-blue-600">I</span>
                            <span className="text-slate-700">nvestigate</span>
                            <p className="text-xs text-slate-500 mt-1">Clarify if needed before responding</p>
                          </div>
                          <div>
                            <span className="font-bold text-blue-600">R</span>
                            <span className="text-slate-700">espond</span>
                            <p className="text-xs text-slate-500 mt-1">Give your prepared, authentic answer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Objections List */}
                <div className="space-y-4">
                  {objections.map((obj, index) => {
                    const isExpanded = expandedObjection === obj.id;
                    return (
                      <motion.div
                        key={obj.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Card
                          className={`border transition-all duration-300 cursor-pointer ${
                            isExpanded
                              ? 'border-blue-400 shadow-lg'
                              : 'border-slate-200/50 hover:border-blue-300 shadow-sm'
                          }`}
                          onClick={() => setExpandedObjection(expandedObjection === obj.id ? null : obj.id)}
                        >
                          <CardHeader className="py-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <AlertTriangle className="h-4 w-4 text-slate-600" />
                                </div>
                                <div>
                                  <CardTitle className="text-base font-semibold text-slate-900">
                                    &quot;{obj.objection}&quot;
                                  </CardTitle>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge className={getSeverityColor(obj.severity)}>
                                  {obj.severity === "high" ? "Likely" : obj.severity === "medium" ? "Possible" : "Rare"}
                                </Badge>
                                <motion.div
                                  animate={{ rotate: isExpanded ? 180 : 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <ChevronDown className={`h-5 w-5 transition-colors ${
                                    isExpanded ? 'text-blue-500' : 'text-slate-400'
                                  }`} />
                                </motion.div>
                              </div>
                            </div>
                          </CardHeader>

                          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                            <CardContent className="pt-2 space-y-4">
                              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                  <MessageSquare className="h-4 w-4 text-green-600" />
                                  <span className="font-semibold text-sm text-green-800">Your Response:</span>
                                </div>
                                <p className="text-sm text-slate-700 leading-relaxed">
                                  {obj.response}
                                </p>
                              </div>
                              <div>
                                <h4 className="font-semibold text-sm text-slate-900 mb-2 flex items-center gap-2">
                                  <Target className="h-4 w-4 text-blue-500" />
                                  Key Points to Hit:
                                </h4>
                                <ul className="grid md:grid-cols-2 gap-2">
                                  {obj.keyPoints.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                      <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Pro Tips */}
                <Card>
                  <CardHeader className="py-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-slate-600" />
                      Pro Tips for Tough Questions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-slate-50 rounded-lg">
                        <p className="font-medium text-sm text-slate-900 mb-1">Pause before answering</p>
                        <p className="text-xs text-slate-600">A 2-3 second pause shows thoughtfulness, not uncertainty</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg">
                        <p className="font-medium text-sm text-slate-900 mb-1">Bridge to your strengths</p>
                        <p className="text-xs text-slate-600">Acknowledge the concern, then pivot to relevant experience</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg">
                        <p className="font-medium text-sm text-slate-900 mb-1">Use specific examples</p>
                        <p className="text-xs text-slate-600">Concrete stories are more credible than general claims</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg">
                        <p className="font-medium text-sm text-slate-900 mb-1">Stay calm and confident</p>
                        <p className="text-xs text-slate-600">They expect you to handle objections - it&apos;s a sales skill</p>
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
