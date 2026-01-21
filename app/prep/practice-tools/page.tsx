"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Timer,
  Play,
  Pause,
  RotateCcw,
  Target,
  Mic,
  CheckCircle2,
  AlertCircle,
  Clock,
  MessageSquare,
  Zap,
  ArrowRight,
  ThumbsUp,
  Star,
  Building2,
  TrendingUp,
  Users,
  FileText,
  DollarSign,
  Briefcase,
  Brain,
  ListTodo,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const tabs = [
  { id: "sessions", label: "Practice Sessions", icon: Timer },
  { id: "closing", label: "Closing Scripts", icon: MessageSquare },
];

interface ScriptSection {
  title: string;
  icon: React.ElementType;
  items: { label: string; content: string; followUp?: string }[];
}

interface PracticeSession {
  id: string;
  title: string;
  duration: number;
  description: string;
  checkpoints: { time: number; label: string }[];
  tips: string[];
  scriptSections?: ScriptSection[];
  demoFlow?: { step: number; title: string; duration: string; content: string; keyPoints?: string[] }[];
}

const practiceSessions: PracticeSession[] = [
  {
    id: "elevator-pitch",
    title: "Elevator Pitch",
    duration: 60,
    description: "Your 60-second 'Why Paraform, Why You' pitch",
    checkpoints: [
      { time: 45, label: "Wrap up Why Paraform" },
      { time: 30, label: "Transition to Why You" },
      { time: 15, label: "Start closing" }
    ],
    tips: [
      "Start with the hook - the problem you solve",
      "Be specific about your experience",
      "End with enthusiasm for the role"
    ],
    scriptSections: [
      {
        title: "Why Paraform",
        icon: Building2,
        items: [
          { label: "The Problem", content: "Enterprise teams waste hundreds of hours on repetitive RFPs and security questionnaires - copying, pasting, searching for answers." },
          { label: "The Solution", content: "Paraform uses AI to auto-generate accurate responses, pulling from your knowledge base and past answers." },
          { label: "The Result", content: "Companies like Contentful and Braze have cut RFP time by 70%+ and increased win rates." }
        ]
      },
      {
        title: "Why Me",
        icon: Target,
        items: [
          { label: "Track Record", content: "I've built pipelines from scratch at early-stage companies - $2.5M ARR in 18 months." },
          { label: "Enterprise Experience", content: "I know how to navigate complex sales cycles with multiple stakeholders." },
          { label: "Founder Mentality", content: "I'm looking for exactly this - building the GTM motion at a high-growth company." }
        ]
      }
    ]
  },
  {
    id: "discovery-opening",
    title: "Discovery Opening",
    duration: 120,
    description: "First 2 minutes of discovery call - rapport and agenda setting",
    checkpoints: [
      { time: 90, label: "Finish rapport building" },
      { time: 60, label: "Set the agenda" },
      { time: 30, label: "Transition to first question" }
    ],
    tips: [
      "Thank them for their time",
      "Confirm time available",
      "Set clear agenda and ask permission"
    ],
    scriptSections: [
      {
        title: "Opening Lines",
        icon: MessageSquare,
        items: [
          { label: "Greeting", content: "Thanks for taking the time today, [Name]. I've been looking forward to this conversation." },
          { label: "Time Check", content: "I've set aside 30 minutes for us - does that still work on your end?" },
          { label: "Agenda", content: "My goal today is to understand your current process, see if there might be a fit, and if so, determine logical next steps. Does that work for you?" }
        ]
      },
      {
        title: "Rapport Building",
        icon: Users,
        items: [
          { label: "Research Reference", content: "I saw you've been at [Company] for [X years] - how's the journey been?" },
          { label: "Industry Context", content: "The [industry] space has been evolving rapidly - how has that affected your team?" },
          { label: "Permission", content: "Before we dive in, what's most important for YOU to get out of this call?" }
        ]
      }
    ]
  },
  {
    id: "meddpicc-discovery",
    title: "MEDDPICC Discovery",
    duration: 900,
    description: "15-minute discovery practice - hit all MEDDPICC elements",
    checkpoints: [
      { time: 780, label: "M - Metrics questions" },
      { time: 660, label: "E - Economic Buyer" },
      { time: 540, label: "D - Decision Criteria" },
      { time: 420, label: "D - Decision Process" },
      { time: 300, label: "P - Paper Process" },
      { time: 180, label: "I - Identify Pain" },
      { time: 60, label: "C - Champion / Competition" }
    ],
    tips: [
      "Don't rush - let them talk",
      "Take notes on key points",
      "Follow up on interesting threads"
    ],
    scriptSections: [
      {
        title: "Metrics (M)",
        icon: TrendingUp,
        items: [
          { label: "Quantify Pain", content: "How many RFPs/questionnaires does your team handle per quarter?" },
          { label: "Time Impact", content: "How long does it typically take to complete one from start to finish?" },
          { label: "Win Rate", content: "What's your current win rate on RFPs? Where do you want it to be?" }
        ]
      },
      {
        title: "Economic Buyer (E)",
        icon: DollarSign,
        items: [
          { label: "Budget Owner", content: "Who ultimately holds the budget for sales enablement tools?" },
          { label: "Priority", content: "Where does solving this problem rank on their list of priorities?" },
          { label: "Approval", content: "Walk me through how purchase decisions like this typically get made." }
        ]
      },
      {
        title: "Decision Criteria (D)",
        icon: ListTodo,
        items: [
          { label: "Requirements", content: "What would a solution need to do to be a fit for your team?" },
          { label: "Must-Haves", content: "What are the non-negotiables vs nice-to-haves?" },
          { label: "Success", content: "How will you measure if this investment was successful?" }
        ]
      },
      {
        title: "Decision Process (D)",
        icon: Users,
        items: [
          { label: "Stakeholders", content: "Beyond yourself, who else would need to be involved in this decision?" },
          { label: "Stages", content: "What does your evaluation process typically look like?" },
          { label: "Timeline", content: "Is there a specific timeline you're working toward?" }
        ]
      },
      {
        title: "Paper Process (P)",
        icon: FileText,
        items: [
          { label: "Procurement", content: "What does your procurement process look like for new vendors?" },
          { label: "Security", content: "Would legal or security need to review? (We're SOC 2 Type 2)" },
          { label: "Contract", content: "Any specific contract requirements or preferred terms?" }
        ]
      },
      {
        title: "Identify Pain (I)",
        icon: AlertCircle,
        items: [
          { label: "Current State", content: "What happens today when an RFP comes in?" },
          { label: "Frustration", content: "What's the most frustrating part of your current process?" },
          { label: "Impact", content: "How is this problem affecting you and your team personally?" }
        ]
      },
      {
        title: "Champion (C)",
        icon: Target,
        items: [
          { label: "Advocate", content: "If we move forward, who would champion this internally?" },
          { label: "Motivation", content: "What's in it for them personally if this succeeds?" },
          { label: "Competition", content: "Are you evaluating other solutions alongside us?" }
        ]
      }
    ]
  },
  {
    id: "objection-response",
    title: "Objection Response",
    duration: 45,
    description: "Practice responding to tough questions with the ARC framework",
    checkpoints: [
      { time: 35, label: "Acknowledge the concern" },
      { time: 20, label: "Reframe with context" },
      { time: 10, label: "Close with confidence" }
    ],
    tips: [
      "Pause before answering - don't be defensive",
      "Acknowledge their concern genuinely",
      "Bridge to your strength with a specific example"
    ],
    scriptSections: [
      {
        title: "Common Objections",
        icon: AlertCircle,
        items: [
          {
            label: "\"You haven't sold AI products before\"",
            content: "You're right - Paraform is my first AI-focused role. What I've found is that the fundamentals of enterprise sales remain the same: understanding pain, building relationships, and navigating complex buying processes. At [previous company], I had to learn a technical product quickly and became one of the top performers within 6 months."
          },
          {
            label: "\"Your deal sizes were smaller\"",
            content: "That's true - my average deal was around $50K. But I was successful because I understand how to qualify properly and run a tight process. The skills of multi-threading, building champions, and running MEDDPICC qualification translate directly to larger deals."
          },
          {
            label: "\"Why leave your current role?\"",
            content: "I've built a strong foundation at [current company], but I'm looking for a role where I can have more impact on the company's trajectory. Paraform represents exactly that - an opportunity to build the sales motion from scratch at a company solving a real problem."
          }
        ]
      }
    ]
  },
  {
    id: "closing-statement",
    title: "Interview Close",
    duration: 90,
    description: "Your closing statement - express interest and ask for next steps",
    checkpoints: [
      { time: 60, label: "State your interest clearly" },
      { time: 30, label: "Reference specific excitement" },
      { time: 15, label: "Ask for next steps" }
    ],
    tips: [
      "Be direct about wanting the role",
      "Reference specific things from the interview",
      "Ask what's next"
    ],
    scriptSections: [
      {
        title: "Closing Script",
        icon: Target,
        items: [
          {
            label: "Express Interest",
            content: "Before we wrap up, I want to be direct - I want this role. Today's conversation has reinforced everything I was excited about."
          },
          {
            label: "Specific Reference",
            content: "What excites me most is [reference something specific from the conversation] - that's exactly the kind of challenge I'm looking for."
          },
          {
            label: "Address Concerns",
            content: "Is there anything about my background or approach that gives you pause? I'd rather address concerns now."
          },
          {
            label: "Next Steps",
            content: "What are the next steps in the process?"
          }
        ]
      }
    ]
  },
  {
    id: "paraform-discovery",
    title: "Paraform Discovery Call",
    duration: 1800,
    description: "Full 30-minute discovery call simulation - MEDDPICC framework with Affirm scenario",
    checkpoints: [
      { time: 1680, label: "Opening & Rapport (2 min)" },
      { time: 1500, label: "Current State Questions" },
      { time: 1200, label: "Pain Discovery - Deep Dive" },
      { time: 900, label: "Impact & Metrics" },
      { time: 600, label: "Decision Process & Criteria" },
      { time: 300, label: "Paper Process & Timeline" },
      { time: 120, label: "Champion Building" },
      { time: 60, label: "Summarize & Next Steps" }
    ],
    tips: [
      "Listen more than you talk (aim for 70/30)",
      "Go 3+ layers deep on pain",
      "Take notes on their exact words",
      "Book the next meeting ON this call"
    ],
    scriptSections: [
      {
        title: "Opening (2 min)",
        icon: MessageSquare,
        items: [
          { label: "Thank & Set Agenda", content: "Thanks for taking the time today, Dean. I've set aside 30 minutes - does that still work for you?", followUp: "My goal is to understand your current RFP process, see if Paraform might be a fit, and if so, determine logical next steps. Sound good?" },
          { label: "Confirm Research", content: "I did some research beforehand - you're Sr. Director of Enterprise Sales at Affirm, focused on merchant partnerships. Is that right?", followUp: "Tell me more about your team structure and what you're responsible for." }
        ]
      },
      {
        title: "Pain Discovery",
        icon: AlertCircle,
        items: [
          { label: "Current Process", content: "Walk me through what happens when a new RFP or security questionnaire comes in today.", followUp: "Where are the biggest bottlenecks?" },
          { label: "Time Investment", content: "How much time does your team spend on RFPs each week?", followUp: "What else could they be doing with that time?" },
          { label: "Frustration", content: "What's the most frustrating part of responding to RFPs today?", followUp: "How is that impacting you and your team personally?" },
          { label: "Content Management", content: "How do you currently store and manage your RFP answers?", followUp: "Is that working well, or is it a pain point too?" }
        ]
      },
      {
        title: "Metrics & Impact",
        icon: TrendingUp,
        items: [
          { label: "Volume", content: "How many RFPs or security questionnaires does your team handle per quarter?", followUp: "Is that volume increasing?" },
          { label: "Timeline", content: "How long does it typically take to complete an RFP from start to finish?", followUp: "What's the breakdown between first draft and review cycles?" },
          { label: "Win Rate", content: "What percentage of RFPs do you win?", followUp: "Where do you want that to be?" },
          { label: "Revenue Impact", content: "What percentage of deals require an RFP?", followUp: "Have you ever passed on deals due to RFP burden?" }
        ]
      },
      {
        title: "Economic Buyer & Decision",
        icon: DollarSign,
        items: [
          { label: "Decision Process", content: "Walk me through how decisions like this typically get made at Affirm.", followUp: "Who ultimately holds the budget for sales enablement tools?" },
          { label: "Stakeholders", content: "Beyond yourself, who else would need to be involved in evaluating a solution like this?", followUp: "What matters most to each of them?" },
          { label: "Evaluation", content: "Are you evaluating other solutions alongside Paraform?", followUp: "What's your timeline for making a decision?" }
        ]
      },
      {
        title: "Paper Process",
        icon: FileText,
        items: [
          { label: "Procurement", content: "What does your procurement process typically look like for a tool like this?", followUp: "Are there specific security or compliance reviews required?" },
          { label: "Legal/Security", content: "Would legal or security need to review before we could move forward?", followUp: "Good news - Paraform is SOC 2 Type 2 certified." },
          { label: "Timing", content: "Is there a specific budget cycle or fiscal timing we should be aware of?", followUp: "Any year-end considerations?" }
        ]
      },
      {
        title: "Close & Next Steps",
        icon: CheckCircle2,
        items: [
          { label: "Summarize", content: "Let me make sure I heard you correctly. [Summarize their pain in their words]. Did I capture that right?" },
          { label: "Value Connection", content: "Based on what you've shared, I think Paraform could help you [specific value prop tied to their pain]." },
          { label: "Next Steps", content: "Would it make sense to schedule a demo where I can show you how this would work for your team?", followUp: "Who else should be on that call?" }
        ]
      }
    ]
  },
  {
    id: "motion-demo",
    title: "Motion Demo/Discovery",
    duration: 1200,
    description: "Full 20-minute discovery + demo simulation - AI calendar product",
    checkpoints: [
      { time: 1080, label: "Discovery Opening (2 min)" },
      { time: 900, label: "Pain Questions" },
      { time: 720, label: "Impact Questions" },
      { time: 600, label: "Transition to Demo" },
      { time: 480, label: "Show Calendar View" },
      { time: 300, label: "Add Task Live" },
      { time: 180, label: "Show Priority Intelligence" },
      { time: 60, label: "Connect to Value & Close" }
    ],
    tips: [
      "Discovery first, then demo",
      "Reference their specific pain during demo",
      "Show, don't tell",
      "Tie every feature back to their stated problem"
    ],
    scriptSections: [
      {
        title: "Discovery Questions",
        icon: MessageSquare,
        items: [
          { label: "Current State", content: "Tell me about your role - what does a typical day or week look like for you?", followUp: "How do you currently manage your tasks and calendar?" },
          { label: "Pain Discovery", content: "What's the hardest part about managing your time and priorities?", followUp: "How often do tasks slip through the cracks?" },
          { label: "Time Investment", content: "How much time do you spend planning and reorganizing your calendar?", followUp: "When you have a busy week, how do you decide what to focus on?" },
          { label: "Impact", content: "What happens when important tasks don't get done on time?", followUp: "If you could get back 2 hours a day, what would you do with that time?" }
        ]
      }
    ],
    demoFlow: [
      {
        step: 1,
        title: "Start with Their Pain",
        duration: "30 sec",
        content: "You mentioned you spend [X time] reorganizing your calendar and tasks. Let me show you how Motion eliminates that entirely."
      },
      {
        step: 2,
        title: "Show Calendar View",
        duration: "2 min",
        content: "This is Motion's calendar. Notice how tasks are already scheduled. Motion's AI looks at your deadlines, priorities, and available time - then automatically finds the best time to work on each task.",
        keyPoints: ["Tasks appear as blocks on calendar", "AI respects your working hours", "Color coding by project/priority"]
      },
      {
        step: 3,
        title: "Add Task Live",
        duration: "2 min",
        content: "Let me show you what happens when a new task comes in. I'll add one right now... See how Motion automatically found time for it? No manual calendar tetris.",
        keyPoints: ["Deadline-aware scheduling", "Respects existing commitments", "Handles conflicts automatically"]
      },
      {
        step: 4,
        title: "Show Priority Intelligence",
        duration: "1 min",
        content: "But what about when priorities shift? Watch this - if I mark this as urgent, Motion automatically reschedules everything to make room.",
        keyPoints: ["Dynamic reprioritization", "No manual reorganization", "Deadline protection"]
      },
      {
        step: 5,
        title: "Meeting Optimization",
        duration: "1 min",
        content: "Motion also protects your focus time. See these blocks? Motion groups meetings together and preserves uninterrupted work time.",
        keyPoints: ["Meeting clustering", "Focus time protection", "Buffer time between meetings"]
      },
      {
        step: 6,
        title: "Connect to Value",
        duration: "1 min",
        content: "Remember how you said you spend [X time] managing your calendar? With Motion, that goes to nearly zero. The AI handles scheduling so you can focus on the actual work."
      }
    ]
  }
];

const closingScripts = [
  {
    id: "end-of-call",
    title: "End of Virtual Session Close",
    context: "After completing the discovery call and/or demo simulations",
    script: `"Before we wrap up, I want to share how I'm feeling about this opportunity. Today's conversation has only reinforced my excitement about Paraform. The problem you're solving, the team you're building, and the stage you're at - this is exactly what I've been looking for.

I'm confident I can come in and make an immediate impact. My experience in [specific relevant experience] combined with my track record of [specific achievement] positions me well to help build the GTM motion here.

What questions do you have for me about my fit for this role? And what are the next steps in the process?"`,
    variations: [
      "If pressed for timeline: \"I'm actively exploring opportunities, but Paraform is my top choice. I'm flexible on timing to make this work.\"",
      "If they seem hesitant: \"Is there anything about my background or approach that gives you pause? I'd rather address concerns now than leave them unspoken.\""
    ],
    doNot: [
      "Don't be desperate or over-eager",
      "Don't pressure for immediate decision",
      "Don't trash talk other opportunities"
    ]
  },
  {
    id: "dean-checkin",
    title: "Final Dean Check-in Close",
    context: "The 15-minute check-in at the end of the in-person day",
    script: `"Dean, I want to be direct - I want this role.

Today has confirmed everything I was excited about coming in. The team energy during lunch, the thoughtful questions in the interview, and the clarity of vision for where Paraform is headed - I want to be part of this.

I know I can come in and contribute immediately. [Reference specific thing discussed today]. My experience building from scratch at [previous company] prepared me for exactly this kind of challenge.

What would you need to see from me to feel confident making an offer? Is there anything I can address right now?"`,
    variations: [
      "If they mention other candidates: \"I respect that you have a process. What I can tell you is that I'm ready to commit and start contributing.\"",
      "If timeline is unclear: \"I don't want to be pushy, but if you're ready to move, I'm ready to move.\""
    ],
    doNot: [
      "Don't give ultimatums",
      "Don't beg or plead",
      "Don't leave without expressing clear interest"
    ]
  }
];

const closingPrinciples = [
  { title: "Ask for What You Want", description: "Be direct about your interest.", icon: Target },
  { title: "Surface Objections", description: "Invite them to share concerns.", icon: AlertCircle },
  { title: "Establish Next Steps", description: "Never leave without knowing what's next.", icon: ArrowRight },
  { title: "Express Gratitude", description: "Thank them for their time.", icon: ThumbsUp }
];

export default function PracticeToolsPage() {
  const [activeTab, setActiveTab] = useState("sessions");
  const [selectedSession, setSelectedSession] = useState<PracticeSession | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentCheckpoint, setCurrentCheckpoint] = useState<string | null>(null);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressPercent = () => {
    if (!selectedSession) return 0;
    return ((selectedSession.duration - timeRemaining) / selectedSession.duration) * 100;
  };

  const startSession = (session: PracticeSession) => {
    setSelectedSession(session);
    setTimeRemaining(session.duration);
    setIsRunning(false);
    setCurrentCheckpoint(null);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    if (selectedSession) {
      setTimeRemaining(selectedSession.duration);
      setIsRunning(false);
      setCurrentCheckpoint(null);
    }
  };

  const checkCheckpoints = useCallback(() => {
    if (!selectedSession) return;
    const checkpoint = selectedSession.checkpoints.find(cp => cp.time === timeRemaining);
    if (checkpoint) {
      setCurrentCheckpoint(checkpoint.label);
      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(200);
      }
    }
  }, [selectedSession, timeRemaining]);

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

  useEffect(() => {
    checkCheckpoints();
  }, [timeRemaining, checkCheckpoints]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="bg-rose-100 text-rose-700 border-rose-200 mb-4">
              Practice Mode
            </Badge>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Practice Tools
            </h1>
            <p className="text-slate-600">
              Timed practice sessions with scripts and closing frameworks
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
            {/* Sessions Tab */}
            {activeTab === "sessions" && (
              <div className="space-y-6">
                {/* Timer Display */}
                {selectedSession && (
                  <Card className="border-2 border-blue-300 shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-600 p-4 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="font-bold text-lg">{selectedSession.title}</h2>
                          <p className="text-blue-100 text-sm">{selectedSession.description}</p>
                        </div>
                        <Badge className="bg-white/20 text-white border-white/30">
                          {formatTime(selectedSession.duration)} total
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="pt-6 pb-6">
                      {/* Main Timer */}
                      <div className="text-center mb-6">
                        <motion.div
                          className={`text-7xl font-mono font-bold ${
                            timeRemaining <= 10 ? 'text-red-500' :
                            timeRemaining <= 30 ? 'text-amber-500' : 'text-slate-900'
                          }`}
                          animate={timeRemaining <= 10 && isRunning ? { scale: [1, 1.05, 1] } : {}}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        >
                          {formatTime(timeRemaining)}
                        </motion.div>

                        {/* Progress Bar */}
                        <div className="mt-4 w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${getProgressPercent()}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>

                        {/* Current Checkpoint Alert */}
                        <AnimatePresence>
                          {currentCheckpoint && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="mt-4 p-3 bg-amber-100 border border-amber-300 rounded-lg inline-flex items-center gap-2"
                            >
                              <AlertCircle className="h-5 w-5 text-amber-600" />
                              <span className="font-medium text-amber-800">{currentCheckpoint}</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center justify-center gap-4 mb-6">
                        <Button
                          size="lg"
                          variant={isRunning ? "destructive" : "default"}
                          className="w-32 gap-2"
                          onClick={toggleTimer}
                        >
                          {isRunning ? (
                            <>
                              <Pause className="h-5 w-5" />
                              Pause
                            </>
                          ) : (
                            <>
                              <Play className="h-5 w-5" />
                              Start
                            </>
                          )}
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="gap-2"
                          onClick={resetTimer}
                        >
                          <RotateCcw className="h-5 w-5" />
                          Reset
                        </Button>
                      </div>

                      {/* Checkpoints & Tips Row */}
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                          <h4 className="font-semibold text-sm text-slate-900 mb-2 flex items-center gap-2">
                            <Clock className="h-4 w-4 text-slate-500" />
                            Timing Checkpoints
                          </h4>
                          <ul className="space-y-2 max-h-40 overflow-y-auto">
                            {selectedSession.checkpoints.map((cp, i) => (
                              <li
                                key={i}
                                className={`text-sm flex items-center justify-between ${
                                  timeRemaining <= cp.time ? 'text-slate-400 line-through' : 'text-slate-700'
                                }`}
                              >
                                <span>{cp.label}</span>
                                <span className="font-mono text-xs">{formatTime(cp.time)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-sm text-blue-900 mb-2 flex items-center gap-2">
                            <Target className="h-4 w-4 text-blue-500" />
                            Key Tips
                          </h4>
                          <ul className="space-y-2">
                            {selectedSession.tips.map((tip, i) => (
                              <li key={i} className="text-sm text-blue-800 flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Scripts & Content - Horizontal Grid Layout */}
                      {selectedSession.scriptSections && selectedSession.scriptSections.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                            <FileText className="h-5 w-5 text-slate-600" />
                            Scripts & Talking Points
                          </h4>
                          {/* Dynamic grid based on number of sections */}
                          <div className={`grid gap-4 ${
                            selectedSession.scriptSections.length === 2 ? 'md:grid-cols-2' :
                            selectedSession.scriptSections.length === 3 ? 'md:grid-cols-3' :
                            selectedSession.scriptSections.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' :
                            selectedSession.scriptSections.length >= 5 ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' :
                            'md:grid-cols-2'
                          }`}>
                            {selectedSession.scriptSections.map((section) => {
                              const Icon = section.icon;
                              return (
                                <div key={section.title} className="border border-slate-200 rounded-lg overflow-hidden bg-white h-fit">
                                  <div className="p-3 bg-slate-50 border-b border-slate-200">
                                    <span className="flex items-center gap-2 font-medium text-slate-900">
                                      <Icon className="h-4 w-4 text-blue-500" />
                                      {section.title}
                                    </span>
                                  </div>
                                  <div className="p-3 space-y-2">
                                    {section.items.map((item, i) => (
                                      <div key={i} className="p-2 bg-blue-50 rounded-lg border border-blue-100">
                                        <p className="font-medium text-xs text-blue-900 mb-1">{item.label}</p>
                                        <p className="text-xs text-slate-700">&quot;{item.content}&quot;</p>
                                        {item.followUp && (
                                          <p className="text-xs text-slate-500 mt-1 italic">
                                            → &quot;{item.followUp}&quot;
                                          </p>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Demo Flow (for Motion session) - Horizontal Grid */}
                      {selectedSession.demoFlow && selectedSession.demoFlow.length > 0 && (
                        <div className="mt-6 space-y-3">
                          <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                            <Zap className="h-5 w-5 text-amber-500" />
                            Demo Flow
                          </h4>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {selectedSession.demoFlow.map((step) => (
                              <div key={step.step} className="p-3 bg-amber-50 rounded-lg border border-amber-200 h-fit">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge className="bg-amber-200 text-amber-800 border-amber-300 text-xs">
                                    {step.step}
                                  </Badge>
                                  <span className="font-medium text-sm text-amber-900">{step.title}</span>
                                  <span className="text-xs text-amber-600 ml-auto">({step.duration})</span>
                                </div>
                                <p className="text-xs text-slate-700 mb-2">&quot;{step.content}&quot;</p>
                                {step.keyPoints && (
                                  <ul className="flex flex-wrap gap-1">
                                    {step.keyPoints.map((point, i) => (
                                      <li key={i} className="text-[10px] bg-white px-1.5 py-0.5 rounded text-amber-800">
                                        {point}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Session Selection */}
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Mic className="h-5 w-5 text-slate-600" />
                  Select a Practice Session
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {practiceSessions.map((session, index) => (
                    <motion.div
                      key={session.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card
                        className={`cursor-pointer transition-all duration-300 h-full ${
                          selectedSession?.id === session.id
                            ? 'border-blue-400 shadow-lg ring-2 ring-blue-200'
                            : 'border-slate-200/50 hover:border-blue-300 shadow-sm'
                        }`}
                        onClick={() => startSession(session)}
                      >
                        <CardHeader className="py-4">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base">{session.title}</CardTitle>
                            <Badge variant="secondary" className="text-xs">
                              <Timer className="h-3 w-3 mr-1" />
                              {formatTime(session.duration)}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-slate-600 mb-3">{session.description}</p>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs text-slate-500">
                              {session.checkpoints.length} checkpoints
                            </span>
                            {session.scriptSections && (
                              <>
                                <span className="text-slate-300">•</span>
                                <span className="text-xs text-blue-600">
                                  {session.scriptSections.length} script sections
                                </span>
                              </>
                            )}
                            {session.demoFlow && (
                              <>
                                <span className="text-slate-300">•</span>
                                <span className="text-xs text-amber-600">
                                  {session.demoFlow.length} demo steps
                                </span>
                              </>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Closing Scripts Tab */}
            {activeTab === "closing" && (
              <div className="space-y-6">
                {/* Closing Principles */}
                <Card>
                  <CardHeader className="py-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Star className="h-5 w-5 text-amber-500" />
                      The Sales Close Mindset
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4">
                      As a sales professional, you&apos;re being evaluated on whether you can close. Use these interviews to demonstrate that skill.
                    </p>
                    <div className="grid md:grid-cols-4 gap-4">
                      {closingPrinciples.map((principle, i) => {
                        const Icon = principle.icon;
                        return (
                          <div key={i} className="p-3 bg-slate-50 rounded-lg text-center">
                            <Icon className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                            <p className="font-medium text-sm text-slate-900">{principle.title}</p>
                            <p className="text-xs text-slate-500 mt-1">{principle.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Closing Scripts */}
                {closingScripts.map((script, index) => (
                  <motion.div
                    key={script.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border border-slate-200/50 hover:border-blue-300 transition-all">
                      <CardHeader className="py-4">
                        <div className="flex items-center gap-2 mb-1">
                          <MessageSquare className="h-5 w-5 text-blue-500" />
                          <CardTitle className="text-lg">{script.title}</CardTitle>
                        </div>
                        <p className="text-sm text-slate-500">{script.context}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Main Script */}
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">
                            {script.script}
                          </pre>
                        </div>

                        {/* Variations */}
                        <div>
                          <h4 className="font-semibold text-sm text-slate-900 mb-2 flex items-center gap-2">
                            <Zap className="h-4 w-4 text-amber-500" />
                            Situational Variations
                          </h4>
                          <div className="space-y-2">
                            {script.variations.map((variation, i) => (
                              <div key={i} className="p-3 bg-amber-50 border border-amber-100 rounded-lg">
                                <p className="text-sm text-slate-700 italic">{variation}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Do Not */}
                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                          <h4 className="font-semibold text-sm text-red-900 mb-2 flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" />
                            Avoid These Mistakes
                          </h4>
                          <ul className="grid md:grid-cols-3 gap-1">
                            {script.doNot.map((item, i) => (
                              <li key={i} className="text-xs text-red-700 flex items-start gap-2">
                                <span className="text-red-500 mt-0.5">✗</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Ultimate Mindset */}
                <Card className="border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-teal-50">
                  <CardHeader className="py-4">
                    <CardTitle className="text-lg flex items-center gap-2 text-emerald-900">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      The Ultimate Mindset
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-white/70 rounded-lg border border-emerald-200">
                      <p className="text-slate-700 leading-relaxed">
                        <strong>Remember:</strong> You&apos;re not begging for a job. You&apos;re interviewing them as much as they&apos;re interviewing you.
                        The right close communicates that you&apos;re a professional who knows their value, is genuinely excited about this specific opportunity,
                        and would be a great partner to build with. Confidence, not arrogance. Enthusiasm, not desperation.
                      </p>
                    </div>
                    <div className="mt-4 grid md:grid-cols-3 gap-3 text-center">
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <p className="text-sm font-bold text-emerald-800">Be Direct</p>
                        <p className="text-xs text-emerald-700">&quot;I want this role&quot;</p>
                      </div>
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <p className="text-sm font-bold text-emerald-800">Be Specific</p>
                        <p className="text-xs text-emerald-700">&quot;Here&apos;s why I&apos;ll succeed&quot;</p>
                      </div>
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <p className="text-sm font-bold text-emerald-800">Be Ready</p>
                        <p className="text-xs text-emerald-700">&quot;What&apos;s next?&quot;</p>
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
