"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Zap,
  Clock,
  Calendar,
  CheckCircle2,
  MessageSquare,
  Target,
  Play,
  Pause,
  RotateCcw,
  Lightbulb,
  ChevronRight,
  ChevronDown,
  Brain,
  ListTodo,
  Timer,
  Users,
  AlertCircle,
  Star,
  Presentation,
  StickyNote
} from "lucide-react";

const NOTES_STORAGE_KEY = "motion-demo-flow-notes";

export default function MotionDemoPrep() {
  const [expandedFlowSections, setExpandedFlowSections] = useState<Set<string>>(new Set(["painAndImpact"])); // Track multiple expanded sections

  // Interview Timer State
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  // Notes State
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [notesLoaded, setNotesLoaded] = useState(false);

  // Load notes from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(NOTES_STORAGE_KEY);
    if (saved) {
      setNotes(JSON.parse(saved));
    }
    setNotesLoaded(true);
  }, []);

  // Save notes to localStorage
  const updateNote = (section: string, value: string) => {
    const newNotes = { ...notes, [section]: value };
    setNotes(newNotes);
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(newNotes));
  };

  const toggleFlowSection = (key: string) => {
    setExpandedFlowSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  // Interview Timer Logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const resetTimer = () => {
    setTimerSeconds(0);
    setTimerRunning(false);
  };

  // Motion Demo Time Phases (30 min total)
  const getTimerPhase = () => {
    const mins = timerSeconds / 60;
    if (mins < 7) return { phase: "Discovery", color: "bg-blue-500", next: "7:00" };
    if (mins < 20) return { phase: "Demo", color: "bg-purple-500", next: "20:00" };
    if (mins < 30) return { phase: "Q&A", color: "bg-emerald-500", next: "30:00" };
    return { phase: "Overtime", color: "bg-red-500", next: "-" };
  };
  const motionOverview = {
    description: "Motion is an AI-powered calendar and task management tool that automatically schedules tasks, protects focus time, and optimizes your day using AI.",
    keyFeatures: [
      "AI auto-scheduling of tasks based on deadlines and priorities",
      "Intelligent calendar blocking and focus time protection",
      "Project management with task dependencies",
      "Meeting scheduling and optimization",
      "Team coordination and workload balancing"
    ],
    valueProps: [
      { icon: Brain, title: "AI-First", description: "AI doesn't just assist - it takes action" },
      { icon: Clock, title: "Time Savings", description: "Save 2+ hours/day on scheduling" },
      { icon: Target, title: "Productivity", description: "Get more done with less stress" },
      { icon: ListTodo, title: "Auto-Prioritization", description: "Never miss deadlines" }
    ]
  };

  const discoveryQuestions = {
    rapport: {
      title: "1. Opening & Rapport (2-3 min)",
      content: `Build rapport, understand their world, then share your hypothesis to validate.`,
      questions: [
        {
          q: "Tell me about your role - what does a typical day or week look like for you?",
          level2: "What takes up most of your time? What tools are you using?",
          level3: "",
          persona: "Understand their context and current workflow",
          mustAsk: true
        },
        {
          q: "How do you currently manage your tasks and calendar?",
          level2: "What's working? What's frustrating about it?",
          level3: "",
          persona: "Current state baseline - look for friction points",
          mustAsk: true
        }
      ],
      hypothesis: {
        setup: "Based on conversations with people in similar roles - founders, sales leaders, PMs - I have a hypothesis about what might be frustrating you. Mind if I share it and you tell me if I'm on the right track?",
        points: [
          "Calendar Tetris - spending 30+ min/day reorganizing tasks around meetings that keep getting added",
          "Priority Paralysis - so many urgent things that you're not sure what to actually work on next",
          "Focus Time Erosion - deep work keeps getting interrupted or never gets scheduled at all",
          "End-of-day Guilt - feeling busy all day but not accomplishing the important things"
        ],
        closer: "How much of that resonates? What did I get wrong?"
      }
    },
    painDiscovery: {
      title: "2-3. Pain Discovery & Impact (5-7 min) - MOST IMPORTANT",
      content: `For each pain topic: uncover → understand why → quantify impact. Go DEEP before moving to next topic.`,
      keySection: true,
      questions: [
        {
          q: "What's the hardest part about managing your time and priorities?",
          level2: "Why is that happening? How often does it come up?",
          level3: "What happens when that derails your day? What's the cost?",
          persona: "Core pain - look for time management struggles",
          mustAsk: true
        },
        {
          q: "How often do tasks slip through the cracks or miss deadlines?",
          level2: "What causes that? Is it visibility, prioritization, or something else?",
          level3: "What's the impact when that happens? Any examples of real consequences?",
          persona: "Quantify the problem - missed deadlines = real business impact",
          mustAsk: true
        },
        {
          q: "How much time do you spend planning and reorganizing your calendar?",
          level2: "What triggers the reorganization? How often does it happen?",
          level3: "What would you do with that time if you got it back? What's that worth?",
          persona: "Time investment → opportunity cost → value proposition",
          mustAsk: true
        },
        {
          q: "When you have a busy week, how do you decide what to focus on?",
          level2: "How well does that work? What falls through the cracks?",
          level3: "What happens when you make the wrong call? Any examples?",
          persona: "Prioritization challenges - leads to AI auto-prioritization pitch",
          mustAsk: false
        },
        {
          q: "How does calendar chaos affect your stress levels and work quality?",
          level2: "Does it spill over into personal time? How?",
          level3: "What would it mean to solve this? How would your day feel different?",
          persona: "Emotional connection - personal stake creates urgency",
          mustAsk: false
        }
      ]
    },
    transition: {
      title: "4. Transition to Demo",
      content: `Bridge from discovery to demo using their specific pain points.`,
      questions: [
        {
          q: "Based on what you've shared, would you like to see how Motion approaches this?",
          level2: "",
          level3: "",
          persona: "Permission to demo - they should be leaning in at this point",
          mustAsk: true
        }
      ]
    }
  };

  const demoFlow = [
    {
      step: 1,
      title: "Start with Their Pain",
      duration: "30 seconds",
      content: `"You mentioned you spend [X time] reorganizing your calendar and tasks. Let me show you how Motion eliminates that entirely."`,
      action: "Reference their specific pain from discovery"
    },
    {
      step: 2,
      title: "Show the Calendar View",
      duration: "2 min",
      content: `"This is Motion's calendar. Notice how tasks are already scheduled. Motion's AI looks at your deadlines, priorities, and available time - then automatically finds the best time to work on each task."`,
      action: "Highlight auto-scheduled tasks on calendar",
      keyPoints: [
        "Tasks appear as blocks on calendar",
        "AI respects your working hours and preferences",
        "Color coding by project/priority"
      ]
    },
    {
      step: 3,
      title: "Add a Task Live",
      duration: "2 min",
      content: `"Let me show you what happens when a new task comes in. I'll add one right now..."

[Add task with deadline]

"See how Motion automatically found time for it? It analyzed my calendar, looked at existing commitments, and scheduled it at the optimal time. No manual calendar tetris."`,
      action: "Create new task, show auto-scheduling",
      keyPoints: [
        "Deadline-aware scheduling",
        "Respects existing commitments",
        "Handles conflicts automatically"
      ]
    },
    {
      step: 4,
      title: "Show Priority Intelligence",
      duration: "1 min",
      content: `"But what about when priorities shift? Watch this - if I mark this as urgent, Motion automatically reschedules everything to make room. You don't have to manually move anything."`,
      action: "Change priority, show cascade effect",
      keyPoints: [
        "Dynamic reprioritization",
        "No manual reorganization needed",
        "Deadline protection"
      ]
    },
    {
      step: 5,
      title: "Meeting Optimization (if relevant)",
      duration: "1 min",
      content: `"Motion also helps protect your focus time. See these blocks? Motion groups meetings together and preserves uninterrupted work time. No more death by meeting."`,
      action: "Show focus time protection",
      keyPoints: [
        "Meeting clustering",
        "Focus time protection",
        "Buffer time between meetings"
      ]
    },
    {
      step: 6,
      title: "Connect Back to Value",
      duration: "1 min",
      content: `"Remember how you said you spend [X time] managing your calendar? With Motion, that goes to nearly zero. The AI handles the scheduling, so you can focus on actually doing the work."`,
      action: "Tie back to their pain and quantify value"
    }
  ];

  const tieToParaform = [
    {
      title: "AI That Takes Action",
      motion: "Auto-schedules tasks without user input",
      paraform: "Auto-generates RFP responses without manual work",
      lesson: "Both use AI to eliminate busywork, not just assist"
    },
    {
      title: "Trust Through Transparency",
      motion: "Shows why it scheduled things when it did",
      paraform: "Shows sources and confidence levels for answers",
      lesson: "Build trust by showing the AI's reasoning"
    },
    {
      title: "Time Savings = Value",
      motion: "Save 2 hours/day on scheduling",
      paraform: "Save 70%+ time on RFPs",
      lesson: "Quantifiable time savings resonates with buyers"
    },
    {
      title: "Enterprise Readiness",
      motion: "Team features, workload balancing",
      paraform: "Unlimited seats, integrations, SOC 2",
      lesson: "Scale from individual to team use case"
    }
  ];

  const demoTips = [
    "Always connect features back to their stated pain",
    "Use 'you mentioned...' to show you listened",
    "Demo should feel like a conversation, not a presentation",
    "Ask questions during demo: 'How would this help with [their pain]?'",
    "Leave time for questions - don't rush through features",
    "Less is more - focus on 2-3 high-impact features"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <Link href="/prep" className="inline-flex items-center text-blue-200 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Prep
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <Badge className="bg-blue-500 text-white mb-2">Discovery + Demo</Badge>
              <h1 className="text-3xl font-bold">Motion AI Demo</h1>
            </div>
          </div>
          <p className="text-blue-100">
            30 min: Light discovery + product demo | Consumer product showcase
          </p>
        </div>
      </div>

      {/* Sticky Interview Timer */}
      {showTimer && (
        <div className="sticky top-0 z-50 bg-slate-900 border-b border-slate-700 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Timer className="h-5 w-5 text-blue-400" />
                  <span className="text-white font-bold text-2xl font-mono">
                    {formatTime(timerSeconds)}
                  </span>
                </div>
                <div className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getTimerPhase().color}`}>
                  {getTimerPhase().phase}
                </div>
                <div className="text-slate-400 text-sm">
                  Next phase: {getTimerPhase().next}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant={timerRunning ? "destructive" : "default"}
                  onClick={() => setTimerRunning(!timerRunning)}
                  className="gap-2"
                >
                  {timerRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  {timerRunning ? "Pause" : "Start"}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={resetTimer}
                  className="gap-2 border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  <RotateCcw className="h-4 w-4" />
                  Reset
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setShowTimer(false)}
                  className="text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  Hide
                </Button>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-1000 ${getTimerPhase().color}`}
                style={{ width: `${Math.min((timerSeconds / 1800) * 100, 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>0:00</span>
              <span className="text-blue-400">7:00 Discovery</span>
              <span className="text-purple-400">20:00 Demo</span>
              <span className="text-emerald-400">30:00</span>
            </div>
          </div>
        </div>
      )}

      {/* Start Timer Button (when timer is hidden) */}
      {!showTimer && (
        <div className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-cyan-600 border-b border-blue-500">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white text-sm">
                <Timer className="h-4 w-4" />
                <span>Interview Timer Available</span>
              </div>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setShowTimer(true)}
                className="gap-2"
              >
                <Play className="h-4 w-4" />
                Start Interview Timer
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Why Motion Alert */}
          <Card className="mb-8 border-2 border-blue-300 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Lightbulb className="h-5 w-5" />
                Why Motion is Perfect for This Demo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Product Alignment with Paraform</h4>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                      AI-first approach (AI does the work, not just assists)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                      Automation that saves significant time
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                      Transparent about how AI works
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Skills You'll Demonstrate</h4>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                      Discovery before demo (consultative selling)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                      Connecting features to pain points
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                      Storytelling with product
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="flow" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="flow" className="bg-green-100 data-[state=active]:bg-green-500 data-[state=active]:text-white">Call Flow</TabsTrigger>
              <TabsTrigger value="overview">Product Overview</TabsTrigger>
              <TabsTrigger value="connection">Paraform Connection</TabsTrigger>
            </TabsList>

            {/* Call Flow Tab - Combined Discovery + Demo in single flow */}
            <TabsContent value="flow">
              <div className="space-y-4 pt-2">
                {/* Quick Facts Banner */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg p-4">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-6">
                      <div>
                        <p className="text-blue-100 text-xs">SESSION</p>
                        <p className="font-bold text-lg">Motion Disco + Demo</p>
                      </div>
                      <div>
                        <p className="text-blue-100 text-xs">FORMAT</p>
                        <p className="font-semibold">5-7 min discovery → 8-10 min demo</p>
                      </div>
                      <div>
                        <p className="text-blue-100 text-xs">GOAL</p>
                        <p className="font-semibold">Show AI that takes action</p>
                      </div>
                    </div>
                    <div className="bg-amber-500 px-4 py-2 rounded-lg">
                      <p className="font-bold">Discovery BEFORE Demo</p>
                    </div>
                  </div>
                </div>

                {/* Opening: Set Agenda & Expectations */}
                <Card className="border-2 border-emerald-400 bg-emerald-50/50">
                  <CardHeader className="py-4 cursor-pointer" onClick={() => toggleFlowSection('agenda')}>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base flex items-center gap-2 text-emerald-800">
                        <CheckCircle2 className="h-4 w-4" />
                        Opening: Set Agenda & Expectations
                        <Badge className="bg-emerald-500 text-white text-xs ml-1">Start Here</Badge>
                      </CardTitle>
                      <motion.div
                        animate={{ rotate: expandedFlowSections.has('agenda') ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-5 w-5 text-slate-400" />
                      </motion.div>
                    </div>
                  </CardHeader>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedFlowSections.has('agenda') ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <CardContent className="pt-3">
                      <div className="grid md:grid-cols-3 gap-4">
                        {/* Content - Left 2/3 */}
                        <div className="md:col-span-2 space-y-3">
                          <div className="p-3 bg-white rounded-lg border border-emerald-200">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-emerald-600 text-white text-xs">Opening Script</Badge>
                              <span className="text-xs text-slate-500">~45 sec</span>
                            </div>
                            <p className="text-sm text-slate-700 italic mb-3">
                              &quot;Thanks for joining. I want to make sure we use our 30 minutes effectively. My goal today is to understand what&apos;s happening with your calendar and task management - where the friction is, what&apos;s costing you time - and see if Motion can help solve those challenges or fill gaps in your current workflow.&quot;
                            </p>
                            <p className="text-sm text-slate-700 italic mb-3">
                              &quot;If there&apos;s a fit, we&apos;d schedule a follow-up to get your team together and really dive into how Motion would work for everyone. Sound fair?&quot;
                            </p>
                            <p className="text-sm text-slate-700 italic">
                              &quot;I&apos;ll ask a few quick questions first, then we&apos;ll jump into the product. Does that agenda work?&quot;
                            </p>
                          </div>
                          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                            <p className="text-xs text-amber-800">
                              <strong>Why this works:</strong> Gets buy-in on discovery BEFORE demo, positions you as consultative, and sets up the &quot;you mentioned...&quot; tie-backs later.
                            </p>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="p-2 bg-emerald-100 rounded text-center">
                              <p className="text-xs font-semibold text-emerald-800">1. Thank them</p>
                            </div>
                            <div className="p-2 bg-emerald-100 rounded text-center">
                              <p className="text-xs font-semibold text-emerald-800">2. State your goal</p>
                            </div>
                            <div className="p-2 bg-emerald-100 rounded text-center">
                              <p className="text-xs font-semibold text-emerald-800">3. Get agreement</p>
                            </div>
                          </div>
                        </div>
                        {/* Notes - Right 1/3 */}
                        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-3" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center gap-2 mb-2">
                            <StickyNote className="h-4 w-4 text-yellow-600" />
                            <span className="text-xs font-semibold text-yellow-800">Call Notes</span>
                          </div>
                          {notesLoaded && (
                            <textarea
                              className="w-full h-40 text-sm p-2 rounded border border-yellow-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                              placeholder="Take notes during the call..."
                              value={notes['agenda'] || ''}
                              onChange={(e) => updateNote('agenda', e.target.value)}
                            />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                {/* Pro Tip */}
                <div className="flex items-center gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <p className="text-sm text-amber-800">
                    <strong>Less is more</strong> - Focus on 2-3 features max. Use &quot;you mentioned...&quot; to connect features to their specific pain points. Ask questions during the demo.
                  </p>
                </div>

                {/* Research & Working Hypothesis */}
                <Card className="border-2 border-blue-300 bg-blue-50/50">
                  <CardHeader className="py-4 cursor-pointer" onClick={() => toggleFlowSection('hypothesis')}>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base flex items-center gap-2 text-blue-800">
                        <Target className="h-4 w-4" />
                        Research & Working Hypothesis
                        <Badge className="bg-blue-500 text-white text-xs ml-1">Come with POV</Badge>
                      </CardTitle>
                      <motion.div
                        animate={{ rotate: expandedFlowSections.has('hypothesis') ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-5 w-5 text-slate-400" />
                      </motion.div>
                    </div>
                  </CardHeader>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedFlowSections.has('hypothesis') ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <CardContent className="pt-3">
                      <div className="grid md:grid-cols-3 gap-4">
                        {/* Content - Left 2/3 */}
                        <div className="md:col-span-2 space-y-4">
                          {/* Demo Context */}
                          <div className="p-3 bg-white rounded-lg border border-blue-200">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-blue-600 text-white text-xs">Demo Context</Badge>
                            </div>
                            <ul className="text-sm text-slate-700 space-y-1">
                              <li><strong>Product:</strong> Motion - AI calendar/task management ($19/mo individual, $12/mo team)</li>
                              <li><strong>Target:</strong> Founders, sales leaders, PMs, executives</li>
                              <li><strong>Key Parallel:</strong> Both Motion and Paraform use AI that DOES the work (not just assists)</li>
                            </ul>
                          </div>

                          {/* Ready-to-Go Hypothesis - Combined Section */}
                          <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border-2 border-blue-400">
                            <div className="flex items-center gap-2 mb-3">
                              <Badge className="bg-purple-600 text-white text-xs">Ready-to-Go Hypothesis</Badge>
                              <span className="text-xs text-purple-700 font-medium">Copy & deliver</span>
                            </div>

                            {/* Setup */}
                            <p className="text-sm text-slate-800 italic mb-3 p-2 bg-white/60 rounded border-l-4 border-purple-400">
                              &quot;Based on conversations with founders, sales leaders, and PMs in similar roles, I have a hypothesis about what might be frustrating you. Mind if I share it and you tell me if I&apos;m on the right track?&quot;
                            </p>

                            {/* The Hypothesis Points */}
                            <div className="bg-white/80 rounded-lg p-3 mb-3">
                              <p className="text-xs font-bold text-purple-800 mb-2">THE HYPOTHESIS:</p>
                              <ol className="text-sm text-slate-700 space-y-2 list-decimal ml-4">
                                <li><strong>Calendar Tetris</strong> - Spending 30+ min/day reorganizing tasks around meetings that keep getting added</li>
                                <li><strong>Priority Paralysis</strong> - So many urgent things you&apos;re not sure what to actually work on next</li>
                                <li><strong>Focus Time Erosion</strong> - Deep work keeps getting interrupted or never gets scheduled</li>
                                <li><strong>End-of-day Guilt</strong> - Feeling busy all day but not accomplishing the important things</li>
                              </ol>
                            </div>

                            {/* Closer */}
                            <p className="text-sm text-slate-800 italic p-2 bg-white/60 rounded border-l-4 border-emerald-400">
                              &quot;How much of that resonates? What did I get wrong?&quot;
                            </p>

                            {/* Why it works */}
                            <p className="text-xs text-purple-700 mt-3 bg-purple-50 px-2 py-1 rounded">
                              <strong>Why this works:</strong> Gives them something to react to. If they say &quot;yes, exactly!&quot; you&apos;ve built instant credibility. If they correct you, you learn what actually matters.
                            </p>
                          </div>
                        </div>
                        {/* Notes - Right 1/3 */}
                        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-3" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center gap-2 mb-2">
                            <StickyNote className="h-4 w-4 text-yellow-600" />
                            <span className="text-xs font-semibold text-yellow-800">Call Notes</span>
                          </div>
                          {notesLoaded && (
                            <textarea
                              className="w-full h-64 text-sm p-2 rounded border border-yellow-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                              placeholder="What resonated? What did they correct?..."
                              value={notes['hypothesis'] || ''}
                              onChange={(e) => updateNote('hypothesis', e.target.value)}
                            />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                {/* Quick Product Overview Script - Collapsible */}
                <Card className="border-2 border-cyan-300 bg-cyan-50/30">
                  <CardHeader className="py-4 cursor-pointer" onClick={() => toggleFlowSection('productOverview')}>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base flex items-center gap-2 text-cyan-800">
                        <Zap className="h-4 w-4" />
                        Quick Product Overview Script
                        <Badge className="bg-cyan-500 text-white text-xs ml-1">Reference For Demo</Badge>
                      </CardTitle>
                      <motion.div
                        animate={{ rotate: expandedFlowSections.has('productOverview') ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-5 w-5 text-slate-400" />
                      </motion.div>
                    </div>
                  </CardHeader>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedFlowSections.has('productOverview') ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <CardContent className="pt-3 space-y-3">
                      <div className="p-3 bg-white rounded-lg border border-cyan-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-cyan-600 text-white text-xs">30-Second Pitch</Badge>
                        </div>
                        <p className="text-sm text-slate-700 italic">
                          &quot;Motion is an AI-powered calendar and task management tool. Unlike traditional tools where you organize everything yourself, Motion&apos;s AI automatically schedules your tasks, protects your focus time, and reorganizes your day when priorities shift - so you can focus on actually getting work done instead of managing your calendar.&quot;
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-cyan-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-emerald-600 text-white text-xs">Key Value Props</Badge>
                        </div>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li><strong>AI-First:</strong> AI doesn&apos;t just suggest - it takes action and schedules for you</li>
                          <li><strong>Time Savings:</strong> Users save 2+ hours/day on calendar management</li>
                          <li><strong>Auto-Prioritization:</strong> Automatically reprioritizes when deadlines or priorities change</li>
                          <li><strong>Focus Protection:</strong> Groups meetings together, protects deep work blocks</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-purple-600 text-white text-xs">Paraform Connection</Badge>
                        </div>
                        <p className="text-xs text-purple-800">
                          <strong>Same philosophy:</strong> Both Motion and Paraform use AI that does the work, not just assists. This demo shows you can sell AI-first products effectively.
                        </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                {/* Collapsible Discovery Sections */}
                <div className="space-y-2">
                  {/* Opening & Rapport Section with Hypothesis */}
                  {(() => {
                    const rapportData = discoveryQuestions.rapport;
                    const isExpanded = expandedFlowSections.has('rapport');
                    const mustAskCount = rapportData.questions.filter(q => q.mustAsk).length;
                    return (
                      <Card
                        className={`cursor-pointer transition-all duration-300 ${
                          isExpanded ? 'border-2 border-blue-400 shadow-lg' : 'border-slate-200 hover:border-blue-300'
                        }`}
                        onClick={() => toggleFlowSection('rapport')}
                      >
                        <CardHeader className="py-4">
                          <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center gap-2 text-base text-slate-800">
                              <MessageSquare className="h-4 w-4 text-blue-600" />
                              {rapportData.title}
                              {mustAskCount > 0 && (
                                <Badge variant="outline" className="text-xs border-amber-400 text-amber-700 ml-1">{mustAskCount} Must-Ask</Badge>
                              )}
                            </CardTitle>
                            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                              <ChevronDown className={`h-5 w-5 transition-colors ${isExpanded ? 'text-blue-500' : 'text-slate-400'}`} />
                            </motion.div>
                          </div>
                        </CardHeader>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          <CardContent className="pt-3">
                            <div className="grid md:grid-cols-3 gap-4">
                              {/* Content - Left 2/3 */}
                              <div className="md:col-span-2 space-y-4">
                                <p className="text-sm text-slate-600 italic">{rapportData.content}</p>

                                {/* Questions */}
                                <div className="space-y-3">
                                  {rapportData.questions.map((q, qIndex) => (
                                    <div key={qIndex} className={`p-3 rounded-lg border relative ${q.mustAsk ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-300' : 'bg-white border-slate-200'}`}>
                                      {q.mustAsk && (
                                        <div className="absolute -top-2 -left-2">
                                          <div className="bg-amber-500 rounded-full p-1">
                                            <Star className="h-3 w-3 text-white fill-white" />
                                          </div>
                                        </div>
                                      )}
                                      <p className="font-medium text-slate-900 text-sm">
                                        <span className={`font-bold mr-2 ${q.mustAsk ? 'text-amber-600' : 'text-blue-600'}`}>{qIndex + 1}.</span>
                                        &quot;{q.q}&quot;
                                      </p>
                                      {q.level2 && (
                                        <div className="mt-2 ml-4 pl-3 border-l-2 border-blue-300">
                                          <p className="text-xs text-blue-700 font-medium">↳ 2nd Level: &quot;{q.level2}&quot;</p>
                                        </div>
                                      )}
                                      <p className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded inline-block mt-2">{q.persona}</p>
                                    </div>
                                  ))}
                                </div>

                                {/* Hypothesis Section */}
                                {rapportData.hypothesis && (
                                  <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                                    <div className="flex items-center gap-2 mb-3">
                                      <Target className="h-4 w-4 text-blue-600" />
                                      <span className="font-bold text-blue-800 text-sm">Working Hypothesis - Share & Validate</span>
                                    </div>
                                    <p className="text-sm text-slate-700 italic mb-3">&quot;{rapportData.hypothesis.setup}&quot;</p>
                                    <ol className="text-sm text-slate-700 space-y-2 list-decimal ml-4 mb-3">
                                      {rapportData.hypothesis.points.map((point, i) => (
                                        <li key={i}><strong>{point.split(' - ')[0]}</strong> - {point.split(' - ')[1]}</li>
                                      ))}
                                    </ol>
                                    <p className="text-sm text-blue-700 font-medium italic">&quot;{rapportData.hypothesis.closer}&quot;</p>
                                  </div>
                                )}

                                {/* Product Context Teaser */}
                                <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-300">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Zap className="h-4 w-4 text-cyan-600" />
                                    <span className="text-xs font-bold text-cyan-800">Brief Product Context (if needed)</span>
                                  </div>
                                  <p className="text-sm text-slate-700 italic">
                                    &quot;Motion is an AI-powered calendar that automatically schedules and reschedules your tasks - so you spend less time organizing and more time doing.&quot;
                                  </p>
                                </div>
                              </div>
                              {/* Notes - Right 1/3 */}
                              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-3" onClick={(e) => e.stopPropagation()}>
                                <div className="flex items-center gap-2 mb-2">
                                  <StickyNote className="h-4 w-4 text-yellow-600" />
                                  <span className="text-xs font-semibold text-yellow-800">Rapport Notes</span>
                                </div>
                                {notesLoaded && (
                                  <textarea
                                    className="w-full h-64 text-sm p-2 rounded border border-yellow-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                                    placeholder="Context learned:&#10;- Their role:&#10;- Current tools:&#10;- Initial frustrations:..."
                                    value={notes['rapport'] || ''}
                                    onChange={(e) => updateNote('rapport', e.target.value)}
                                  />
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    );
                  })()}

                  {/* Pain Discovery & Impact Section with Multi-Level Questions */}
                  {(() => {
                    const painData = discoveryQuestions.painDiscovery;
                    const isExpanded = expandedFlowSections.has('painAndImpact');
                    const mustAskCount = painData.questions.filter(q => q.mustAsk).length;
                    return (
                      <Card
                        className={`cursor-pointer transition-all duration-300 ${
                          isExpanded ? 'border-2 border-amber-400 bg-gradient-to-r from-amber-50/50 to-red-50/30 shadow-lg' : 'border-amber-300 hover:border-amber-400 bg-amber-50/30'
                        }`}
                        onClick={() => toggleFlowSection('painAndImpact')}
                      >
                        <CardHeader className="py-4">
                          <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center gap-2 text-base text-amber-800">
                              <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                              <MessageSquare className="h-4 w-4 text-amber-600" />
                              {painData.title}
                              <Badge className="bg-amber-500 text-white text-xs ml-1">Key Section</Badge>
                              {mustAskCount > 0 && (
                                <Badge variant="outline" className="text-xs border-amber-400 text-amber-700 ml-1">{mustAskCount} Must-Ask</Badge>
                              )}
                            </CardTitle>
                            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                              <ChevronDown className={`h-5 w-5 transition-colors ${isExpanded ? 'text-amber-500' : 'text-slate-400'}`} />
                            </motion.div>
                          </div>
                        </CardHeader>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          <CardContent className="pt-3">
                            <div className="grid md:grid-cols-3 gap-4">
                              {/* Content - Left 2/3 */}
                              <div className="md:col-span-2 space-y-4">
                                <p className="text-sm text-slate-600 italic">{painData.content}</p>

                                {/* Multi-Level Questions */}
                                <div className="space-y-4">
                                  {painData.questions.map((q, qIndex) => (
                                    <div key={qIndex} className={`p-4 rounded-lg border relative ${q.mustAsk ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-300' : 'bg-white border-slate-200'}`}>
                                      {q.mustAsk && (
                                        <div className="absolute -top-2 -left-2">
                                          <div className="bg-amber-500 rounded-full p-1">
                                            <Star className="h-3 w-3 text-white fill-white" />
                                          </div>
                                        </div>
                                      )}

                                      {/* Primary Question */}
                                      <p className="font-medium text-slate-900 text-sm">
                                        <span className={`font-bold mr-2 ${q.mustAsk ? 'text-amber-600' : 'text-blue-600'}`}>{qIndex + 1}.</span>
                                        &quot;{q.q}&quot;
                                      </p>

                                      {/* Level 2 - Why/How */}
                                      {q.level2 && (
                                        <div className="mt-3 ml-4 pl-3 border-l-2 border-blue-300">
                                          <p className="text-xs text-blue-700 font-medium">
                                            <span className="bg-blue-100 px-1 rounded mr-1">2nd Level</span>
                                            &quot;{q.level2}&quot;
                                          </p>
                                        </div>
                                      )}

                                      {/* Level 3 - Impact */}
                                      {q.level3 && (
                                        <div className="mt-2 ml-8 pl-3 border-l-2 border-red-300">
                                          <p className="text-xs text-red-700 font-medium">
                                            <span className="bg-red-100 px-1 rounded mr-1">3rd Level (Impact)</span>
                                            &quot;{q.level3}&quot;
                                          </p>
                                        </div>
                                      )}

                                      <p className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded inline-block mt-3">{q.persona}</p>
                                    </div>
                                  ))}
                                </div>

                                {/* Product Tie-In Script */}
                                <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-300">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Zap className="h-4 w-4 text-cyan-600" />
                                    <span className="text-xs font-bold text-cyan-800">Product Tie-In (Use after uncovering pain)</span>
                                  </div>
                                  <p className="text-sm text-slate-700 italic">
                                    &quot;That&apos;s exactly why Motion exists - to eliminate calendar tetris entirely. Instead of you spending 30+ min reorganizing tasks, Motion&apos;s AI does it automatically. Would it help to see how that actually works?&quot;
                                  </p>
                                </div>
                              </div>
                              {/* Notes - Right 1/3 */}
                              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-3" onClick={(e) => e.stopPropagation()}>
                                <div className="flex items-center gap-2 mb-2">
                                  <StickyNote className="h-4 w-4 text-yellow-600" />
                                  <span className="text-xs font-semibold text-yellow-800">Pain Notes</span>
                                </div>
                                {notesLoaded && (
                                  <textarea
                                    className="w-full h-80 text-sm p-2 rounded border border-yellow-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                                    placeholder="Key pains uncovered:&#10;- Time spent on...&#10;- Impact:...&#10;- Use in demo:..."
                                    value={notes['painDiscovery'] || ''}
                                    onChange={(e) => updateNote('painDiscovery', e.target.value)}
                                  />
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    );
                  })()}

                  {/* Transition to Demo Section */}
                  {(() => {
                    const transitionData = discoveryQuestions.transition;
                    const isExpanded = expandedFlowSections.has('transition');
                    const mustAskCount = transitionData.questions.filter(q => q.mustAsk).length;
                    return (
                      <Card
                        className={`cursor-pointer transition-all duration-300 ${
                          isExpanded ? 'border-2 border-blue-400 shadow-lg' : 'border-slate-200 hover:border-blue-300'
                        }`}
                        onClick={() => toggleFlowSection('transition')}
                      >
                        <CardHeader className="py-4">
                          <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center gap-2 text-base text-slate-800">
                              <Play className="h-4 w-4 text-blue-600" />
                              {transitionData.title}
                              {mustAskCount > 0 && (
                                <Badge variant="outline" className="text-xs border-amber-400 text-amber-700 ml-1">{mustAskCount} Must-Ask</Badge>
                              )}
                            </CardTitle>
                            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                              <ChevronDown className={`h-5 w-5 transition-colors ${isExpanded ? 'text-blue-500' : 'text-slate-400'}`} />
                            </motion.div>
                          </div>
                        </CardHeader>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          <CardContent className="pt-3">
                            <div className="grid md:grid-cols-3 gap-4">
                              {/* Content - Left 2/3 */}
                              <div className="md:col-span-2 space-y-3">
                                <p className="text-sm text-slate-600 italic">{transitionData.content}</p>
                                {transitionData.questions.map((q, qIndex) => (
                                  <div key={qIndex} className={`p-3 rounded-lg border relative ${q.mustAsk ? 'bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-300' : 'bg-white border-slate-200'}`}>
                                    {q.mustAsk && (
                                      <div className="absolute -top-2 -left-2">
                                        <div className="bg-emerald-500 rounded-full p-1">
                                          <Star className="h-3 w-3 text-white fill-white" />
                                        </div>
                                      </div>
                                    )}
                                    <p className="font-medium text-slate-900 text-sm">
                                      &quot;{q.q}&quot;
                                    </p>
                                    <p className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded inline-block mt-2">{q.persona}</p>
                                  </div>
                                ))}

                                {/* Transition Script with Product */}
                                <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-300">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Zap className="h-4 w-4 text-cyan-600" />
                                    <span className="text-xs font-bold text-cyan-800">Transition to Demo Script</span>
                                  </div>
                                  <p className="text-sm text-slate-700 italic">
                                    &quot;Based on what you&apos;ve shared about [THEIR PAIN], let me show you how Motion handles that. I&apos;ll focus on [2-3 specific features] since those seem most relevant to you.&quot;
                                  </p>
                                </div>
                              </div>
                              {/* Notes - Right 1/3 */}
                              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-3" onClick={(e) => e.stopPropagation()}>
                                <div className="flex items-center gap-2 mb-2">
                                  <StickyNote className="h-4 w-4 text-yellow-600" />
                                  <span className="text-xs font-semibold text-yellow-800">Demo Focus</span>
                                </div>
                                {notesLoaded && (
                                  <textarea
                                    className="w-full h-40 text-sm p-2 rounded border border-yellow-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                                    placeholder="Features to show:&#10;1.&#10;2.&#10;3.&#10;&#10;Their words to use:..."
                                    value={notes['transition'] || ''}
                                    onChange={(e) => updateNote('transition', e.target.value)}
                                  />
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    );
                  })()}
                </div>

                {/* Demo Script - Full Section */}
                <Card className="border-2 border-blue-400 bg-blue-50/50">
                  <CardHeader className="py-4 cursor-pointer" onClick={() => toggleFlowSection('demoFlow')}>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base flex items-center gap-2 text-blue-800">
                        <Play className="h-4 w-4" />
                        Demo Script (8-10 min)
                        <Badge className="bg-blue-500 text-white text-xs ml-1">Show Product</Badge>
                      </CardTitle>
                      <motion.div
                        animate={{ rotate: expandedFlowSections.has('demoFlow') ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-5 w-5 text-slate-400" />
                      </motion.div>
                    </div>
                  </CardHeader>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedFlowSections.has('demoFlow') ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <CardContent className="pt-3">
                      <div className="grid md:grid-cols-3 gap-4">
                        {/* Content - Left 2/3 */}
                        <div className="md:col-span-2 space-y-4">
                          {/* Demo Opening */}
                          <div className="p-3 bg-white rounded-lg border border-blue-200">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-blue-600 text-white text-xs">1. Demo Opening</Badge>
                              <span className="text-xs text-slate-500">~30 sec</span>
                            </div>
                            <p className="text-sm text-slate-700 italic">
                              &quot;Based on what you shared about [THEIR PAIN], let me show you exactly how Motion solves that. I&apos;ll focus on [2-3 specific features] since those seem most relevant to you.&quot;
                            </p>
                          </div>

                          {/* Feature 1: Calendar View */}
                          <div className="p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-300">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-cyan-600 text-white text-xs">2. Calendar View</Badge>
                              <span className="text-xs text-slate-500">~2 min</span>
                            </div>
                            <p className="text-sm text-slate-700 italic mb-2">
                              &quot;This is my calendar. Notice how all these colored blocks are tasks that Motion scheduled automatically. I didn&apos;t place any of these - I just told Motion what I needed to do and by when.&quot;
                            </p>
                            <div className="text-xs text-cyan-800 bg-cyan-100 px-2 py-1 rounded">
                              <strong>Show:</strong> Calendar with auto-scheduled tasks, different colors for priorities
                            </div>
                          </div>

                          {/* Feature 2: Add Task Live */}
                          <div className="p-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-300">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-emerald-600 text-white text-xs">3. Add Task Live</Badge>
                              <span className="text-xs text-slate-500">~2 min</span>
                            </div>
                            <p className="text-sm text-slate-700 italic mb-2">
                              &quot;Let me add a task right now. [Create task: &apos;Prepare quarterly report&apos;, 2 hours, due Friday]. Watch what happens... Motion just found the optimal time based on my deadlines, priorities, and when I actually have focused time available.&quot;
                            </p>
                            <div className="text-xs text-emerald-800 bg-emerald-100 px-2 py-1 rounded">
                              <strong>Show:</strong> Create task → watch it auto-schedule → explain the logic
                            </div>
                          </div>

                          {/* Feature 3: Priority Shift */}
                          <div className="p-3 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-amber-300">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-amber-600 text-white text-xs">4. Priority Cascade</Badge>
                              <span className="text-xs text-slate-500">~2 min</span>
                            </div>
                            <p className="text-sm text-slate-700 italic mb-2">
                              &quot;Now here&apos;s where it gets powerful. What happens when priorities change? [Change task priority or add urgent task]. Watch - Motion just reorganized my entire week automatically. That&apos;s the 30+ minutes of calendar tetris you mentioned - gone.&quot;
                            </p>
                            <div className="text-xs text-amber-800 bg-amber-100 px-2 py-1 rounded">
                              <strong>Show:</strong> Change priority → watch cascade → point out how other tasks moved
                            </div>
                          </div>

                          {/* Feature 4: Focus Time */}
                          <div className="p-3 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-300">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-purple-600 text-white text-xs">5. Focus Time Protection</Badge>
                              <span className="text-xs text-slate-500">~1 min</span>
                            </div>
                            <p className="text-sm text-slate-700 italic mb-2">
                              &quot;See these protected blocks? Motion clusters my meetings together and protects these focus periods. So that deep work time you mentioned never getting? Motion guards it automatically.&quot;
                            </p>
                            <div className="text-xs text-purple-800 bg-purple-100 px-2 py-1 rounded">
                              <strong>Show:</strong> Protected focus blocks, meeting clustering, work preferences
                            </div>
                          </div>

                          {/* Pain Tie-Back */}
                          <div className="p-3 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg border-2 border-rose-400">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-rose-600 text-white text-xs">6. Pain Tie-Back</Badge>
                              <Badge className="bg-rose-500 text-white text-xs">Critical</Badge>
                            </div>
                            <p className="text-sm text-slate-700 italic mb-2">
                              &quot;Remember earlier you mentioned [SPECIFIC PAIN]? What you just saw is how that goes away. No more [calendar tetris / priority paralysis / lost focus time / end-of-day guilt]. Motion handles it all in the background.&quot;
                            </p>
                            <p className="text-sm text-slate-700 italic">
                              &quot;How would it feel to have those [X hours/minutes] back every day?&quot;
                            </p>
                          </div>

                          {/* Closing the Demo */}
                          <div className="p-3 bg-slate-100 rounded-lg border border-slate-300">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-slate-600 text-white text-xs">7. Demo Close</Badge>
                            </div>
                            <p className="text-sm text-slate-700 italic">
                              &quot;Based on what you&apos;ve seen, how well does this match what you were hoping to solve? ... What questions do you have?&quot;
                            </p>
                          </div>
                        </div>
                        {/* Notes - Right 1/3 */}
                        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-3" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center gap-2 mb-2">
                            <StickyNote className="h-4 w-4 text-yellow-600" />
                            <span className="text-xs font-semibold text-yellow-800">Demo Notes</span>
                          </div>
                          {notesLoaded && (
                            <textarea
                              className="w-full h-96 text-sm p-2 rounded border border-yellow-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                              placeholder="Their specific pains to tie back:&#10;1.&#10;2.&#10;&#10;Features to emphasize:&#10;&#10;Their words to use:&#10;&#10;Questions they asked:&#10;&#10;Reactions during demo:..."
                              value={notes['demoFlow'] || ''}
                              onChange={(e) => updateNote('demoFlow', e.target.value)}
                            />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                {/* Slide Talk Tracks - Collapsible */}
                <Card className="border-2 border-purple-200">
                  <CardHeader className="py-4 cursor-pointer" onClick={() => toggleFlowSection('talkTracks')}>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base flex items-center gap-2 text-purple-800">
                        <Presentation className="h-4 w-4" />
                        Slide Talk Tracks
                      </CardTitle>
                      <motion.div
                        animate={{ rotate: expandedFlowSections.has('talkTracks') ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-5 w-5 text-slate-400" />
                      </motion.div>
                    </div>
                  </CardHeader>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedFlowSections.has('talkTracks') ? 'max-h-[1000px]' : 'max-h-0'
                  }`}>
                    <CardContent className="pt-3 space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-blue-600 text-white text-xs">Company Overview</Badge>
                          <span className="text-xs text-slate-500">~30 sec</span>
                        </div>
                        <p className="text-sm text-slate-700 italic">
                          &quot;Motion is an AI-powered calendar and task management tool. Unlike traditional tools where you organize everything yourself, Motion&apos;s AI automatically schedules your tasks, protects your focus time, and reorganizes your day when priorities shift - so you can focus on actually getting work done.&quot;
                        </p>
                      </div>
                      <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-emerald-600 text-white text-xs">Solution Pitch</Badge>
                          <span className="text-xs text-slate-500">~45 sec</span>
                        </div>
                        <p className="text-sm text-slate-700 italic">
                          &quot;Think about how much time you spend every week playing calendar tetris - moving tasks, reorganizing when meetings pop up, figuring out what to work on next. Motion eliminates all of that. You add tasks with deadlines, and the AI does the rest. It finds the optimal time, respects your preferences, and automatically adjusts when things change. Users save 2+ hours a day on average.&quot;
                        </p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-purple-600 text-white text-xs">Why Different</Badge>
                          <span className="text-xs text-slate-500">~30 sec</span>
                        </div>
                        <p className="text-sm text-slate-700 italic">
                          &quot;Other tools help you organize - Motion actually does the organizing for you. The AI doesn&apos;t just suggest - it takes action. It&apos;s like having a personal assistant who&apos;s constantly optimizing your schedule in the background.&quot;
                        </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                {/* Objection Handling - Collapsible */}
                <Card className="border-2 border-orange-200 bg-orange-50/30">
                  <CardHeader className="py-4 cursor-pointer" onClick={() => toggleFlowSection('objections')}>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base flex items-center gap-2 text-orange-800">
                        <AlertCircle className="h-4 w-4" />
                        Objection Handling Scripts
                        <Badge className="bg-orange-500 text-white text-xs ml-1">Be Ready</Badge>
                      </CardTitle>
                      <motion.div
                        animate={{ rotate: expandedFlowSections.has('objections') ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-5 w-5 text-slate-400" />
                      </motion.div>
                    </div>
                  </CardHeader>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedFlowSections.has('objections') ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <CardContent className="pt-3 space-y-3">
                      <div className="p-3 bg-white rounded-lg border border-orange-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-red-500 text-white text-xs">&quot;I already have Google Calendar/Notion&quot;</Badge>
                        </div>
                        <p className="text-sm text-slate-700 italic mb-2">
                          &quot;Totally - and those are great tools. The difference is they require you to do the organizing. How much time do you spend each week deciding what to work on and when? Motion takes that completely off your plate.&quot;
                        </p>
                        <p className="text-xs text-orange-700 bg-orange-50 px-2 py-1 rounded">
                          Don&apos;t compete with calendar - compete with manual organization
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-orange-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-red-500 text-white text-xs">&quot;I like having control over my schedule&quot;</Badge>
                        </div>
                        <p className="text-sm text-slate-700 italic mb-2">
                          &quot;You still have full control - you can override any suggestion, set specific times for things, protect certain blocks. The AI just handles the tedious part. Think of it as having an assistant who does the first draft of your schedule.&quot;
                        </p>
                        <p className="text-xs text-orange-700 bg-orange-50 px-2 py-1 rounded">
                          Frame AI as assistant, not replacement - they stay in control
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-orange-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-red-500 text-white text-xs">&quot;My schedule is too unpredictable&quot;</Badge>
                        </div>
                        <p className="text-sm text-slate-700 italic mb-2">
                          &quot;That&apos;s actually where Motion shines. When things change - and they always do - Motion automatically re-optimizes everything. No more manually moving tasks around when a meeting runs long or something urgent comes up.&quot;
                        </p>
                        <p className="text-xs text-orange-700 bg-orange-50 px-2 py-1 rounded">
                          Turn the objection into a feature - unpredictability is the use case
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-orange-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-amber-500 text-white text-xs">&quot;What&apos;s the cost?&quot;</Badge>
                        </div>
                        <p className="text-sm text-slate-700 italic mb-2">
                          &quot;It&apos;s $19/month for individual, $12/month per user for teams. But the real question is - if you could get back 2 hours a day, what would that be worth? Most users say it pays for itself in the first week.&quot;
                        </p>
                        <p className="text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                          Reframe cost as ROI - focus on time saved, not price
                        </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                {/* Quick Reference Section */}
                <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                  {/* Motion Value Props */}
                  <Card className="border-2 border-emerald-200 bg-emerald-50/50">
                    <CardHeader className="py-4">
                      <CardTitle className="text-base flex items-center gap-2 text-emerald-800">
                        <CheckCircle2 className="h-4 w-4" />
                        Motion Value Props
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-start gap-1">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600 mt-0.5" />
                          <span><strong>AI-First</strong> - takes action</span>
                        </div>
                        <div className="flex items-start gap-1">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600 mt-0.5" />
                          <span><strong>2+ hrs/day</strong> saved</span>
                        </div>
                        <div className="flex items-start gap-1">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600 mt-0.5" />
                          <span><strong>Auto-prioritize</strong></span>
                        </div>
                        <div className="flex items-start gap-1">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600 mt-0.5" />
                          <span><strong>Focus time</strong> protection</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Paraform Connection */}
                  <Card className="border-2 border-purple-200 bg-purple-50/50">
                    <CardHeader className="py-4">
                      <CardTitle className="text-base flex items-center gap-2 text-purple-800">
                        <Zap className="h-4 w-4" />
                        Why This Matters for Paraform
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs">
                      <div className="space-y-2">
                        <p><strong>Same AI Philosophy:</strong> AI that eliminates work, not just assists</p>
                        <p><strong>Transferable Skills:</strong> Discovery before demo, connecting features to pain</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Product Overview Tab */}
            <TabsContent value="overview">
              <div className="space-y-6 pt-2">
                <Card>
                  <CardHeader>
                    <CardTitle>What is Motion?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6">{motionOverview.description}</p>

                    <div className="grid md:grid-cols-4 gap-4 mb-6">
                      {motionOverview.valueProps.map((prop, index) => (
                        <div key={index} className="text-center p-4 bg-slate-50 rounded-lg">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                            <prop.icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <h4 className="font-semibold text-slate-900 mb-1">{prop.title}</h4>
                          <p className="text-sm text-slate-500">{prop.description}</p>
                        </div>
                      ))}
                    </div>

                    <h4 className="font-semibold text-slate-900 mb-3">Key Features to Know</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {motionOverview.keyFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Paraform Connection Tab */}
            <TabsContent value="connection">
              <div className="space-y-6 pt-2">
                <Card className="bg-purple-50 border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-purple-800">Why This Demo Matters for Paraform</CardTitle>
                    <CardDescription>
                      This demo demonstrates your ability to sell AI-first products - directly relevant to Paraform
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-800 mb-4">
                      Motion and Paraform share a core philosophy: AI should do the work, not just assist.
                      Your ability to articulate this value proposition transfers directly.
                    </p>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {tieToParaform.map((item, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <Badge className="bg-blue-100 text-blue-700 flex-shrink-0">Motion</Badge>
                            <span className="text-sm text-slate-600">{item.motion}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge className="bg-purple-100 text-purple-700 flex-shrink-0">Paraform</Badge>
                            <span className="text-sm text-slate-600">{item.paraform}</span>
                          </div>
                          <div className="bg-slate-50 rounded p-3 mt-2">
                            <p className="text-sm font-medium text-slate-700">
                              <Lightbulb className="h-4 w-4 inline mr-1 text-amber-500" />
                              {item.lesson}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Quick Reference Footer */}
          <Card className="mt-8 bg-blue-900 text-white">
            <CardContent className="py-6">
              <div className="flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <p className="text-blue-300 text-sm">Total Time</p>
                  <p className="font-bold">30 min + 15 min Q&A</p>
                </div>
                <div className="text-center">
                  <p className="text-blue-300 text-sm">Discovery</p>
                  <p className="font-bold">5-7 min</p>
                </div>
                <div className="text-center">
                  <p className="text-blue-300 text-sm">Demo</p>
                  <p className="font-bold">8-10 min</p>
                </div>
                <div className="text-center">
                  <p className="text-blue-300 text-sm">Key Message</p>
                  <p className="font-bold">AI does the work</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
