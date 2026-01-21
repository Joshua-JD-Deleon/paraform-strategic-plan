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
  Target,
  Building2,
  User,
  AlertTriangle,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
  Users,
  FileText,
  Shield,
  Clock,
  Lightbulb,
  ChevronRight,
  ChevronDown,
  DollarSign,
  Briefcase,
  Play,
  Pause,
  RotateCcw,
  Timer,
  Presentation,
  Edit3,
  ExternalLink,
  Save,
  X,
  Star,
  Zap,
  StickyNote
} from "lucide-react";

const LINKS_STORAGE_KEY = "paraform-discovery-links";
const NOTES_STORAGE_KEY = "paraform-discovery-flow-notes";
const DEFAULT_VIDEO_URL = "https://www.loom.com/share/b6dfce6fed7f49c0a4aaf44c92c98705";
const DEFAULT_DECK_URL = "https://docs.google.com/presentation/d/19Tp1zko92tmmZF3G6PwOl6zUGAYn3waqAWx0B8gOuf8/edit?slide=id.g31adae610de_0_25#slide=id.g31adae610de_0_25";

export default function ParaformDiscoveryPrep() {
  const [expandedMeddpicc, setExpandedMeddpicc] = useState<string | null>(null);
  const [expandedFlowSections, setExpandedFlowSections] = useState<Set<string>>(new Set(["painAndImpact"])); // Track multiple expanded sections

  // Interview Timer State
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  // Notes State
  const [flowNotes, setFlowNotes] = useState<Record<string, string>>({});
  const [flowNotesLoaded, setFlowNotesLoaded] = useState(false);

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

  // Paraform Discovery Time Phases (30 min discovery only)
  const getTimerPhase = () => {
    const mins = timerSeconds / 60;
    if (mins < 3) return { phase: "Opening", color: "bg-emerald-500", next: "3:00" };
    if (mins < 12) return { phase: "Pain & Impact", color: "bg-amber-500", next: "12:00" };
    if (mins < 18) return { phase: "Metrics & Champion", color: "bg-blue-500", next: "18:00" };
    if (mins < 25) return { phase: "Decision & Process", color: "bg-purple-500", next: "25:00" };
    if (mins < 30) return { phase: "Wrap Up", color: "bg-emerald-500", next: "30:00" };
    return { phase: "Overtime", color: "bg-red-500", next: "-" };
  };

  const [mounted, setMounted] = useState(false);
  const [videoUrl, setVideoUrl] = useState(DEFAULT_VIDEO_URL);
  const [deckUrl, setDeckUrl] = useState(DEFAULT_DECK_URL);
  const [editingVideo, setEditingVideo] = useState(false);
  const [editingDeck, setEditingDeck] = useState(false);
  const [tempVideoUrl, setTempVideoUrl] = useState("");
  const [tempDeckUrl, setTempDeckUrl] = useState("");

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(LINKS_STORAGE_KEY);
    if (saved) {
      const { video, deck } = JSON.parse(saved);
      setVideoUrl(video || DEFAULT_VIDEO_URL);
      setDeckUrl(deck || DEFAULT_DECK_URL);
    }
    // Load flow notes
    const savedNotes = localStorage.getItem(NOTES_STORAGE_KEY);
    if (savedNotes) {
      setFlowNotes(JSON.parse(savedNotes));
    }
    setFlowNotesLoaded(true);
  }, []);

  // Save flow notes to localStorage
  const updateFlowNote = (section: string, value: string) => {
    const newNotes = { ...flowNotes, [section]: value };
    setFlowNotes(newNotes);
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(newNotes));
  };

  const saveVideoUrl = () => {
    setVideoUrl(tempVideoUrl);
    localStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify({ video: tempVideoUrl, deck: deckUrl }));
    setEditingVideo(false);
  };

  const saveDeckUrl = () => {
    setDeckUrl(tempDeckUrl);
    localStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify({ video: videoUrl, deck: tempDeckUrl }));
    setEditingDeck(false);
  };
  const scenarioContext = {
    prospect: "Dean Shu",
    title: "Sr. Director of Enterprise Sales",
    company: "Affirm",
    source: "Inbound - Email form fill on Paraform website",
    constraint: "Discovery call ONLY - No demo required"
  };

  const affirmResearch = {
    overview: "Affirm is a leading Buy Now, Pay Later (BNPL) fintech company that provides installment loans to consumers at point of sale.",
    financials: [
      { label: "Ticker", value: "NASDAQ: AFRM" },
      { label: "Revenue", value: "~$1.7B (FY2024)" },
      { label: "Employees", value: "~1,800" },
      { label: "Founded", value: "2012 (Max Levchin)" }
    ],
    salesContext: [
      "Large enterprise sales org selling to merchants (retailers)",
      "Complex sales cycles with technical requirements",
      "Likely handles RFPs from major retailers, security questionnaires",
      "Financial services = heavy compliance (SOC 2, PCI-DSS)",
      "Growing partner ecosystem = more RFI/RFP volume"
    ],
    painHypotheses: [
      "High volume of security questionnaires from merchants",
      "Repetitive compliance questions across prospects",
      "Time spent on RFPs taking away from selling",
      "Need to scale SE/sales resources without adding headcount",
      "Content library maintenance is painful"
    ]
  };

  const meddpiccQuestions = {
    // PAIN FIRST - Lead with pain-driven discovery
    identifyPain: {
      title: "1. Identify Pain (START HERE)",
      icon: AlertTriangle,
      questions: [
        {
          question: "Tell me about your current RFP process - walk me through what happens when a new one comes in",
          followUp: "Where are the biggest bottlenecks?",
          why: "Open-ended, lets them tell their story"
        },
        {
          question: "What's the most frustrating part of responding to RFPs today?",
          followUp: "How is that impacting you and your team?",
          why: "Uncovers emotional pain - key for urgency"
        },
        {
          question: "When an RFP comes in with a tight deadline, what happens?",
          followUp: "How does that affect the team? The quality?",
          why: "Creates vivid picture of the problem"
        },
        {
          question: "How do you currently store and manage your RFP answers?",
          followUp: "How often do people use outdated content by mistake?",
          why: "Specific pain around content management"
        },
        {
          question: "Are there deals you've lost or passed on because of RFP capacity?",
          followUp: "What was the revenue impact of that?",
          why: "Ties pain directly to revenue"
        }
      ]
    },
    // IMPACT - Amplify the pain before qualification
    impact: {
      title: "2. Impact & Implications",
      icon: TrendingUp,
      questions: [
        {
          question: "What happens when RFPs don't get the attention they deserve?",
          followUp: "How often does that happen?",
          why: "Consequences of the pain"
        },
        {
          question: "How much time does your team spend on RFPs each week?",
          followUp: "What else could they be doing with that time?",
          why: "Opportunity cost - time = money"
        },
        {
          question: "If nothing changes in 6 months, what does that look like?",
          followUp: "Is that acceptable?",
          why: "Cost of inaction"
        },
        {
          question: "How is this affecting you personally? Your team's morale?",
          followUp: "What would it mean to solve this?",
          why: "Personal stake creates champions"
        }
      ]
    },
    // METRICS - Now quantify after understanding pain
    metrics: {
      title: "3. Metrics",
      icon: TrendingUp,
      questions: [
        {
          question: "How many RFPs or security questionnaires does your team handle per month/quarter?",
          followUp: "Is that volume increasing?",
          why: "Establishes scale of the problem"
        },
        {
          question: "How long does it typically take to complete an RFP from start to finish?",
          followUp: "What's the breakdown between first draft and review cycles?",
          why: "Quantifies time investment"
        },
        {
          question: "What percentage of deals require an RFP or security questionnaire?",
          followUp: "What's your win rate on RFPs?",
          why: "Ties RFPs to revenue impact"
        }
      ]
    },
    // CHAMPION - Find your internal advocate
    champion: {
      title: "4. Champion",
      icon: Users,
      questions: [
        {
          question: "Who on your team feels this pain the most?",
          followUp: "Would they be involved in evaluating solutions?",
          why: "Identifies potential champion"
        },
        {
          question: "If this turned out to be a great fit, would you be willing to champion this internally?",
          followUp: "What would you need from us to make that case?",
          why: "Tests for champion commitment"
        },
        {
          question: "What would success look like for you personally if you solved this?",
          followUp: "How visible is this problem to leadership?",
          why: "Personal win = motivated champion"
        }
      ]
    },
    // DECISION - Only after pain is established
    decisionCriteria: {
      title: "5. Decision Criteria",
      icon: CheckCircle2,
      questions: [
        {
          question: "What's most important to you when evaluating an RFP solution?",
          followUp: "How would you prioritize speed vs accuracy vs ease of use?",
          why: "Uncovers key priorities"
        },
        {
          question: "You mentioned coming to us inbound - what prompted you to look at Paraform specifically?",
          followUp: "What have you heard or seen that resonated?",
          why: "Understands what attracted them"
        },
        {
          question: "If you could wave a magic wand and solve one thing about your RFP process, what would it be?",
          followUp: "What would that mean for you and your team?",
          why: "Identifies #1 priority"
        }
      ]
    },
    economicBuyer: {
      title: "6. Economic Buyer",
      icon: DollarSign,
      questions: [
        {
          question: "Walk me through how decisions like this typically get made at Affirm",
          followUp: "Who ultimately holds the budget for sales enablement tools?",
          why: "Maps decision structure"
        },
        {
          question: "Beyond yourself, who else would need to be involved in evaluating a solution like this?",
          followUp: "What matters most to each of them?",
          why: "Identifies full buying committee"
        }
      ]
    },
    decisionProcess: {
      title: "7. Decision Process",
      icon: Briefcase,
      questions: [
        {
          question: "When you've purchased sales tools in the past, what did that process look like?",
          followUp: "How long did it typically take from evaluation to decision?",
          why: "Sets timeline expectations"
        },
        {
          question: "Are you evaluating other solutions alongside Paraform?",
          followUp: "What's your timeline for making a decision?",
          why: "Competitive landscape"
        },
        {
          question: "What would a successful pilot or proof of concept look like for your team?",
          followUp: "Who would need to be involved in that evaluation?",
          why: "Defines next steps"
        }
      ]
    },
    competition: {
      title: "8. Competition",
      icon: Target,
      questions: [
        {
          question: "Have you looked at or used any RFP software before?",
          followUp: "What was that experience like?",
          why: "Competitive intel"
        },
        {
          question: "What alternatives are you considering if you don't go with a solution?",
          followUp: "What's the cost of doing nothing?",
          why: "Status quo is the real competition"
        }
      ]
    },
    paperProcess: {
      title: "9. Paper Process",
      icon: FileText,
      questions: [
        {
          question: "What does your procurement process typically look like for a tool like this?",
          followUp: "Are there specific security or compliance reviews required?",
          why: "Identifies blockers early"
        },
        {
          question: "Would legal or security need to review before we could move forward?",
          followUp: "What do they typically look for? (We're SOC 2 Type 2)",
          why: "Paraform is SOC 2 Type 2 - handle objection"
        }
      ]
    }
  };

  const talkTrack = {
    opening: {
      title: "1. Opening (2-3 min)",
      content: `"Dean, thanks for taking the time today. I saw you reached out through our website - I'm curious what prompted that."

[LISTEN - capture the trigger event]

"Before we dive in, let me share how I like to run these... My goal today is to understand what's happening on your end with RFPs and security questionnaires - where the pain points are, and whether Paraform can help solve any of those challenges or fill gaps in your current process.

If there's a fit, next step would be to get a demo on the calendar with your team and anyone else who'd want to weigh in - so we can really dive into the tool together. Sound fair?"

"Quick question - how much time do we have today?"`,
      questions: []
    },
    rapport: {
      title: "2. Rapport & Context + Hypothesis (5 min)",
      content: `Build rapport, understand Dean's world, then share your hypothesis to validate.`,
      questions: [
        {
          q: "So Dean, you're Director of Revenue Enablement at Affirm - what does your day-to-day look like?",
          level2: "How big is your team? What are you responsible for?",
          level3: "",
          persona: "Understand his scope and responsibilities first",
          mustAsk: true
        },
        {
          q: "Affirm has been growing fast - how has that affected your team's workload?",
          level2: "What's changed in the last year?",
          level3: "",
          persona: "Affirm is scaling = more RFPs, more compliance requests",
          mustAsk: true
        }
      ],
      hypothesis: {
        setup: "Dean, I did some research before our call. Based on what I've seen with other fintech companies scaling enterprise partnerships - Stripe, Plaid, similar companies - I have a hypothesis about what might be driving your interest in Paraform. Mind if I share it and you tell me where I'm right or wrong?",
        points: [
          "Volume scaling faster than team - more merchants wanting to integrate means more RFPs/security questionnaires, but headcount isn't scaling proportionally",
          "Compliance accuracy pressure - in fintech, one wrong answer on a security questionnaire can derail a deal or create audit issues",
          "Tribal knowledge scattered - best answers live in people's heads or random docs, making consistency hard",
          "Sales team bottleneck - your revenue team waiting on SMEs for responses, slowing deal velocity"
        ],
        closer: "How much of that resonates? What did I get wrong?"
      }
    },
    painDiscovery: {
      title: "3-4. Pain Discovery & Impact (13-15 min) - MOST IMPORTANT",
      content: `For each pain topic: uncover → understand why → quantify impact. Go DEEP before moving to next topic.`,
      keySection: true,
      questions: [
        {
          q: "Tell me about your current RFP process - when a new one comes in, what happens?",
          level2: "Where are the biggest bottlenecks? Why is that happening?",
          level3: "What happens when those bottlenecks cause delays? Have you lost deals because of this?",
          persona: "Enterprise merchants send RFPs to Affirm - understand flow then impact",
          mustAsk: true
        },
        {
          q: "What's the most frustrating part of responding to RFPs today?",
          level2: "How often does that happen? Can you give me an example?",
          level3: "What does that cost you - in time, stress, or actual revenue?",
          persona: "Look for: time drain, repetitive work, then quantify the pain",
          mustAsk: true
        },
        {
          q: "How do you currently store and manage your RFP answers?",
          level2: "How often does someone use outdated content? What causes that?",
          level3: "What's the worst case scenario when wrong info goes out? Has that happened?",
          persona: "Content management pain → compliance/accuracy risk in fintech",
          mustAsk: true
        },
        {
          q: "As Sr. Director, how much of YOUR time goes into RFP reviews or approvals?",
          level2: "Is that the best use of your time? What's not getting done because of it?",
          level3: "If you got that time back, what would you do with it? What's that worth to the business?",
          persona: "Dean's personal pain → opportunity cost → strategic value",
          mustAsk: true
        },
        {
          q: "When an RFP comes in with a tight deadline, what happens?",
          level2: "How does that affect quality? Team morale?",
          level3: "Is that sustainable as you keep growing? What happens in 6-12 months if nothing changes?",
          persona: "Urgency → stress → cost of inaction",
          mustAsk: false
        },
        {
          q: "With Affirm being in fintech, I imagine security questionnaires are a big part of this?",
          level2: "How many of those per quarter? Are they more painful than regular RFPs?",
          level3: "What's the risk if a security answer is wrong or outdated? Any close calls?",
          persona: "Fintech compliance - high stakes, high volume, high stress",
          mustAsk: false
        }
      ]
    },
    metricsQuestions: {
      title: "5. Metrics & Quantification (3 min)",
      content: `Now that pain is established, quantify it for business case.`,
      questions: [
        {
          q: "Roughly how many RFPs or security questionnaires does your team handle per quarter?",
          followUp: "Is that volume increasing?",
          persona: "Scale of problem - likely 20-50+ per quarter at enterprise",
          mustAsk: true
        },
        {
          q: "How long does it typically take to complete one from start to finish?",
          followUp: "What's the breakdown between first draft and review cycles?",
          persona: "Time investment - likely days to weeks per RFP",
          mustAsk: true
        },
        {
          q: "What percentage of your deals require an RFP or security questionnaire?",
          followUp: "What's your win rate on RFPs specifically?",
          persona: "Enterprise deals = high RFP rate, ties to revenue",
          mustAsk: false
        }
      ]
    },
    qualificationQuestions: {
      title: "6. Qualification & Decision (5 min)",
      content: `Only ask these AFTER pain and impact are clear.`,
      questions: [
        {
          q: "If this turned out to be a great fit, would you be willing to champion this internally?",
          followUp: "What would you need from us to make that case?",
          persona: "Test for champion - Dean has authority as Sr. Director",
          mustAsk: true
        },
        {
          q: "Who else would need to be involved in evaluating a solution like this?",
          followUp: "What matters most to each of them?",
          persona: "Likely: Sales Ops, IT/Security, maybe Finance",
          mustAsk: true
        },
        {
          q: "Walk me through how decisions like this typically get made at Affirm",
          followUp: "What's the typical timeline?",
          persona: "Enterprise process - probably procurement involved",
          mustAsk: false
        },
        {
          q: "Are you looking at any other solutions alongside Paraform?",
          followUp: "What's attracting you to those?",
          persona: "Competitive intel - likely Loopio, Responsive, or RFPIO",
          mustAsk: false
        }
      ]
    },
    summary: {
      title: "7. Summary & Bridge (2 min)",
      content: `Summarize what you heard before discussing next steps.

"Let me make sure I understand what I'm hearing, Dean...

You're handling [X] RFPs per quarter, and that volume is [growing]. The process is taking [X time], which pulls your team away from [selling/customers]. The most frustrating part is [their words]. And if nothing changes, [consequence they mentioned].

Did I get that right? Anything I missed?"

[IF PAIN IS CLEAR] "Based on what you've shared, it sounds like there's real pain here. If Paraform could [solve specific pain], would that be valuable enough to move forward with an evaluation?"`,
      questions: []
    },
    nextSteps: {
      title: "8. Next Steps (3 min)",
      content: `"Based on our conversation, here's what I'd recommend:

1. I'll send you a brief summary of what we discussed today
2. Let's schedule a demo with [names mentioned] to show how Paraform would work for Affirm specifically
3. I can also share some security documentation since I know that's important for fintech

Who else should be in that next conversation?

What day/time works best for you and the team?"

[BOOK THE MEETING BEFORE HANGING UP]`,
      questions: []
    }
  };

  const proTips = [
    {
      title: "He came INBOUND",
      tip: "This means there's already interest. Ask what prompted him to reach out - there's a trigger event."
    },
    {
      title: "Affirm = Financial Services",
      tip: "Security and compliance are critical. Mention Paraform is SOC 2 Type 2 and has ZDR agreements."
    },
    {
      title: "Enterprise Sales context",
      tip: "Dean manages SEs/AEs. Position RFP time as taking away from selling and customer engagement."
    },
    {
      title: "No Demo needed",
      tip: "Focus 100% on discovery. The goal is to deeply understand their world, not show product."
    },
    {
      title: "Affirm is on Paraform's deck",
      tip: "Per the actual deck - Affirm (~$1B revenue) evaluated 2 platforms before picking Paraform. Great social proof to reference."
    },
    {
      title: "Discovery sets up Slide 4",
      tip: "Uncover pains that map to: seat limits, AI that doesn't work, content library maintenance. These are Paraform's key differentiators."
    }
  ];

  // Capability Validation Scripts - Use during discovery to validate pain & speak to how Paraform solves it
  const capabilityScripts = [
    {
      painPoint: "Content Library Maintenance",
      capability: "Two-Source Approach",
      badge: "Key Differentiator",
      validation: `"You mentioned maintaining your content library is painful. How we approach that is different - we don't require you to maintain everything in a Q&A library.

If that info already lives in Confluence or a Drive folder, you just point us to it. We pull from your existing sources, so there's no double work. Would that help?"`,
      whenTheyMention: "Library maintenance, keeping answers updated, duplicate work"
    },
    {
      painPoint: "Switching from Responsive",
      capability: "Import Accuracy",
      badge: "vs Responsive",
      validation: `"Are you using Responsive today? Usually what people tell us when they switch is that our AI-based detection during import is much more accurate - people spend a lot less time on the import process.

What's your experience been with importing questionnaires?"`,
      whenTheyMention: "Responsive, import issues, questionnaire setup taking too long"
    },
    {
      painPoint: "Multi-Language Content",
      capability: "On-the-Fly Translation",
      badge: "Global Teams",
      validation: `"You mentioned maintaining content in multiple languages. That's actually a big pain point we hear. With Paraform, you can centralize in one language - typically English - and we translate on the fly.

So if a questionnaire comes in German, we translate it to English, find the answer, and translate back. No maintaining separate German AND English libraries. Would that be valuable?"`,
      whenTheyMention: "German, multiple languages, global teams, translation"
    },
    {
      painPoint: "Trusting AI Responses",
      capability: "AI Transparency",
      badge: "Opening the Black Box",
      validation: `"I hear a lot of concerns about trusting AI-generated answers. That's why we show confidence scores and the logic the AI used - where it pulled the info from, the reasoning it took.

SEs want to understand how we got the answer. Does your team have concerns about AI accuracy?"`,
      whenTheyMention: "AI accuracy, trusting AI, reviewing AI responses, quality concerns"
    },
    {
      painPoint: "Portal Responses",
      capability: "Chrome Extension",
      badge: "Vendor Portals",
      validation: `"Do you ever have to respond inside vendor portals? Those are super annoying - can't export, can't have multiple people logged in...

We have a Chrome extension that detects questions in the portal and lets you collaborate in Paraform, then type answers back. No more exporting to Google Sheets. Is that something you deal with?"`,
      whenTheyMention: "Portals, can't export, single login, collaboration challenges"
    },
    {
      painPoint: "Reusing Previous Work",
      capability: "Granular Library Control",
      badge: "Smart Reuse",
      validation: `"When you finish an RFP, what happens to those answers? Can you reuse them?

With Paraform, you pick exactly which answers to save back to the library. So if you spent time getting a questionnaire right last week, that becomes a source for future responses automatically."`,
      whenTheyMention: "Reusing answers, building knowledge, previous RFPs as reference"
    },
    {
      painPoint: "Cross-Team Collaboration",
      capability: "Assignments & Workflow",
      badge: "Team Workflow",
      validation: `"You mentioned pulling in InfoSec for certain questions. How does that handoff work today?

With Paraform, you can assign specific sections directly - 'all security questions go to Lauren.' She gets notified, reminded to respond, and you track all changes. Would that streamline things?"`,
      whenTheyMention: "InfoSec, SMEs, handoffs, multiple people, collaboration"
    }
  ];

  // Key deck slides for alignment
  const deckAlignment = [
    {
      slide: "Slide 4 - Legacy vs Paraform",
      uncover: "Seat-based limits? AI that doesn't work? Content library pain?",
      position: "Unlimited seats, 70%+ time savings, live integrations"
    },
    {
      slide: "Slide 6 - Paraform Approach",
      uncover: "Where does their source content live today?",
      position: "Q&A Library + Live Integrations → AI agents"
    },
    {
      slide: "Slide 9 - Security",
      uncover: "What security requirements do they have?",
      position: "SOC 2 Type 2, ZDR, no cross-customer sharing"
    },
    {
      slide: "Slide 12 - Pricing",
      uncover: "How many concurrent RFPs do they run?",
      position: "5 projects: $29,500 | 10: $37,500 | Unlimited users"
    }
  ];

  // Full PPT Deck Analysis (21 slides)
  const pptDeckAnalysis = {
    totalSlides: 21,
    flow: [
      { section: "Opening", slides: "1-2", content: "Title + Agenda (Intros, Background, Data Mapping, Demo, Next Steps)", duration: "3 min", notes: "Set expectations early" },
      { section: "Social Proof", slides: "3", content: "Customer logos & credibility (Braze, Qualys, Philips)", duration: "2 min", notes: "Build trust with enterprise logos" },
      { section: "Problem/Solution", slides: "4", content: "Legacy RFP software pain vs Paraform's approach", duration: "3 min", notes: "Frame the problem they're solving" },
      { section: "Case Study", slides: "5", content: "Recorded Future - 70%+ time savings", duration: "2 min", notes: "Concrete ROI example" },
      { section: "How It Works", slides: "6-8", content: "Q&A Library + Live Integrations, AI quality, Patent", duration: "5 min", notes: "Technical differentiation" },
      { section: "Trust & Security", slides: "9", content: "SOC 2 Type 2, ZDR agreements, no data sharing", duration: "2 min", notes: "Critical for enterprise sales" },
      { section: "Demo", slides: "10", content: "Live product demonstration", duration: "10 min", notes: "Show don't tell" },
      { section: "Next Steps", slides: "11-12", content: "Pricing & next steps", duration: "5 min", notes: "Close with clear CTA" },
      { section: "Appendix", slides: "14-21", content: "Additional slides for Q&A (customization, AI agents, POC)", duration: "As needed", notes: "Pull as needed during Q&A" },
    ],
    keyRecommendations: [
      "Skip slides 13+ unless asked - they're appendix material",
      "Spend most time on slides 4-9 during discovery (Problem → Solution)",
      "Use Case Study (slide 5) to tie back to their pain points",
      "Slide 9 (Trust & Security) is critical for enterprise - emphasize SOC 2",
      "Pricing (slide 12) shows volume-based model - good for landing & expanding",
      "Modify deck to match YOUR discovery style - don't copy Dean's exactly"
    ],
    editSuggestions: [
      { slide: "Slide 2 - Agenda", suggestion: "Adjust timing/order based on your discovery flow" },
      { slide: "Slide 4 - Legacy vs Paraform", suggestion: "Add specific pain points you uncover from Dean" },
      { slide: "Slide 5 - Case Study", suggestion: "Choose most relevant case study for Affirm (fintech angle)" },
      { slide: "Slide 9 - Security", suggestion: "Lead with SOC 2 and ZDR - critical for Affirm" },
      { slide: "Slides 14+", suggestion: "Review appendix - know what's there for Q&A" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-violet-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <Link href="/prep" className="inline-flex items-center text-purple-200 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Prep
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <Badge className="bg-red-500 text-white mb-2">Critical - Discovery Only</Badge>
              <h1 className="text-3xl font-bold">Paraform Discovery Call</h1>
            </div>
          </div>
          <p className="text-purple-100">
            Dean Shu | Sr. Director Enterprise Sales @ Affirm | Inbound Lead
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
                  <Timer className="h-5 w-5 text-purple-400" />
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
              <span className="text-emerald-400">3:00 Open</span>
              <span className="text-amber-400">12:00 Pain</span>
              <span className="text-blue-400">18:00 Metrics</span>
              <span className="text-purple-400">25:00 Decision</span>
              <span className="text-emerald-400">30:00</span>
            </div>
          </div>
        </div>
      )}

      {/* Start Timer Button (when timer is hidden) */}
      {!showTimer && (
        <div className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-violet-600 border-b border-purple-500">
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
          {/* Scenario Alert */}
          <Card className="mb-8 border-2 border-amber-300 bg-amber-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-800">
                <AlertTriangle className="h-5 w-5" />
                Scenario Context - Read This First!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-amber-700" />
                    <span className="font-medium">{scenarioContext.prospect}</span>
                    <span className="text-slate-600">- {scenarioContext.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-amber-700" />
                    <span className="font-medium">{scenarioContext.company}</span>
                    <span className="text-slate-600">- BNPL Fintech (NASDAQ: AFRM)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-amber-700" />
                    <span>{scenarioContext.source}</span>
                  </div>
                </div>
                <div className="bg-red-100 rounded-lg p-4 border border-red-200">
                  <p className="font-bold text-red-800 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    {scenarioContext.constraint}
                  </p>
                  <p className="text-sm text-red-700 mt-2">
                    This is a discovery call. Focus on understanding their world, not showing product.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="flow" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="flow" className="bg-green-100 data-[state=active]:bg-green-500 data-[state=active]:text-white">Discovery Flow</TabsTrigger>
              <TabsTrigger value="deck">PPT Deck Prep</TabsTrigger>
              <TabsTrigger value="research">Affirm Research</TabsTrigger>
              <TabsTrigger value="meddpicc">MEDDPICC Questions</TabsTrigger>
            </TabsList>

            {/* Discovery Flow Tab - Comprehensive single-tab reference for the call */}
            <TabsContent value="flow">
              <div className="space-y-4 pt-2">
                {/* Quick Facts Banner */}
                <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg p-4">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-6">
                      <div>
                        <p className="text-purple-200 text-xs">PROSPECT</p>
                        <p className="font-bold text-lg">Dean Shu</p>
                      </div>
                      <div>
                        <p className="text-purple-200 text-xs">TITLE</p>
                        <p className="font-semibold">Sr. Director Enterprise Sales</p>
                      </div>
                      <div>
                        <p className="text-purple-200 text-xs">COMPANY</p>
                        <p className="font-semibold">Affirm (NASDAQ: AFRM)</p>
                      </div>
                      <div>
                        <p className="text-purple-200 text-xs">SESSION</p>
                        <p className="font-semibold">30 min Discovery</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className="bg-amber-500 text-white">Inbound Lead</Badge>
                      <Badge className="bg-red-500 text-white">NO DEMO</Badge>
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
                              <span className="text-xs text-slate-500">~60 sec</span>
                            </div>
                            <p className="text-sm text-slate-700 italic mb-3">
                              &quot;Thanks for taking the time, Dean. Before we dive in, I want to make sure we use our 30 minutes effectively. My goal today is to learn about how Affirm handles RFPs and security questionnaires - understand what&apos;s working, what&apos;s challenging - and then determine if there&apos;s a fit for us to help. Sound good?&quot;
                            </p>
                            <p className="text-sm text-slate-700 italic">
                              &quot;I&apos;d love to hear what prompted you to reach out and then ask some questions about your current process. At the end, we can discuss next steps if it makes sense. Does that agenda work for you?&quot;
                            </p>
                          </div>
                          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                            <p className="text-xs text-amber-800">
                              <strong>Why this works:</strong> Gets buy-in on the agenda, sets you up as a consultant (not a pitcher), and opens the door for them to share what prompted the call.
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
                          {flowNotesLoaded && (
                            <textarea
                              className="w-full h-40 text-sm p-2 rounded border border-yellow-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                              placeholder="What prompted their outreach?..."
                              value={flowNotes['agenda'] || ''}
                              onChange={(e) => updateFlowNote('agenda', e.target.value)}
                            />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                {/* Pro Tip - Inbound Context */}
                <div className="flex items-center gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <p className="text-sm text-amber-800">
                    <strong>He came INBOUND</strong> - There&apos;s already interest. Ask what prompted him to reach out - there&apos;s a trigger event. Affirm is also on Paraform&apos;s deck as a reference customer.
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
                    expandedFlowSections.has('hypothesis') ? 'max-h-[2500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <CardContent className="pt-3">
                      <div className="grid md:grid-cols-3 gap-4">
                        {/* Content - Left 2/3 */}
                        <div className="md:col-span-2 space-y-4">
                          {/* Research Context */}
                          <div className="p-3 bg-white rounded-lg border border-blue-200">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-blue-600 text-white text-xs">What I Know About Affirm</Badge>
                            </div>
                            <ul className="text-sm text-slate-700 space-y-2">
                              <li><strong>Company:</strong> Affirm - BNPL fintech, 30M+ active consumers, 300K+ merchant partners</li>
                              <li><strong>Role:</strong> Dean Shu - Director of Revenue Enablement (supports sales team effectiveness)</li>
                              <li><strong>Context:</strong> Rapid merchant partner growth = likely increasing RFP/security questionnaire volume from enterprise retailers wanting to integrate Affirm</li>
                              <li><strong>Industry:</strong> Fintech = heavy compliance requirements, security-conscious responses required</li>
                              <li><strong>Signal:</strong> Inbound inquiry - something triggered this outreach</li>
                            </ul>
                          </div>

                          {/* Working Hypothesis */}
                          <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border border-blue-300">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-purple-600 text-white text-xs">My Working Hypothesis</Badge>
                            </div>
                            <p className="text-sm text-slate-800 italic mb-3">
                              &quot;Based on what I&apos;ve seen with similar fintech companies scaling their enterprise partnerships - companies like Stripe, Plaid, and other payment providers - my hypothesis is that you&apos;re experiencing one or more of these:&quot;
                            </p>
                            <ol className="text-sm text-slate-700 space-y-2 list-decimal ml-4">
                              <li><strong>Volume scaling faster than team:</strong> More enterprise merchants wanting to integrate = more RFPs/security questionnaires, but team size isn&apos;t scaling proportionally</li>
                              <li><strong>Compliance accuracy pressure:</strong> In fintech, one wrong answer on a security questionnaire can derail a deal or create audit issues</li>
                              <li><strong>Tribal knowledge problem:</strong> Best answers live in people&apos;s heads or scattered docs, making consistency hard</li>
                              <li><strong>Sales team bottleneck:</strong> Revenue team waiting on SMEs for responses, slowing deal velocity</li>
                            </ol>
                          </div>

                          {/* Validation Script */}
                          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-amber-600 text-white text-xs">How to Deliver</Badge>
                            </div>
                            <p className="text-sm text-slate-700 italic mb-2">
                              &quot;Dean, I did some research before our call. Based on what I&apos;ve seen with other fintech companies in growth mode - Stripe, Plaid, companies scaling enterprise partnerships - I have a hypothesis about what might be driving your interest in Paraform. Mind if I share it and you tell me where I&apos;m right or wrong?&quot;
                            </p>
                            <p className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded">
                              This shows preparation, positions you as consultative, and gives them something concrete to react to instead of open-ended &quot;tell me about your challenges&quot;
                            </p>
                          </div>

                          {/* Product Tie-In */}
                          <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-300">
                            <div className="flex items-center gap-2 mb-2">
                              <Zap className="h-4 w-4 text-cyan-600" />
                              <span className="text-xs font-bold text-cyan-800">Product Tie-In (After they confirm)</span>
                            </div>
                            <p className="text-sm text-slate-700 italic">
                              &quot;That&apos;s exactly why Paraform exists. Instead of your team spending hours copy-pasting from scattered docs, Paraform&apos;s AI drafts responses by pulling from your connected sources - and shows you exactly where each answer came from so compliance can trust it.&quot;
                            </p>
                          </div>
                        </div>
                        {/* Notes - Right 1/3 */}
                        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-3" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center gap-2 mb-2">
                            <StickyNote className="h-4 w-4 text-yellow-600" />
                            <span className="text-xs font-semibold text-yellow-800">Hypothesis Notes</span>
                          </div>
                          {flowNotesLoaded && (
                            <textarea
                              className="w-full h-72 text-sm p-2 rounded border border-yellow-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                              placeholder="What resonated?&#10;What was wrong?&#10;Their actual challenges:..."
                              value={flowNotes['hypothesis'] || ''}
                              onChange={(e) => updateFlowNote('hypothesis', e.target.value)}
                            />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                {/* Quick Product Overview Script - Collapsible */}
                <Card className="border-2 border-blue-300 bg-blue-50/30">
                  <CardHeader className="py-4 cursor-pointer" onClick={() => toggleFlowSection('productOverview')}>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base flex items-center gap-2 text-blue-800">
                        <Zap className="h-4 w-4" />
                        Quick Product Overview Script
                        <Badge className="bg-blue-500 text-white text-xs ml-1">Reference If Needed</Badge>
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
                      <div className="p-3 bg-white rounded-lg border border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-blue-600 text-white text-xs">30-Second Pitch</Badge>
                        </div>
                        <p className="text-sm text-slate-700 italic">
                          &quot;Paraform is an AI-powered platform that helps teams respond to RFPs, security questionnaires, and due diligence requests up to 10x faster. Unlike traditional tools where you&apos;re copy-pasting from a library, Paraform&apos;s AI actually drafts responses by pulling from your connected sources - previous responses, documentation, even your website - then shows you exactly where each answer came from so you can trust it.&quot;
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-emerald-600 text-white text-xs">Key Differentiators</Badge>
                        </div>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li><strong>Two-Source Approach:</strong> Q&A library + connected sources (Confluence, Google Drive, etc.)</li>
                          <li><strong>AI Transparency:</strong> Shows sources and confidence levels - &quot;opens the black box&quot;</li>
                          <li><strong>Unlimited Seats:</strong> No per-seat pricing means whole team can collaborate</li>
                          <li><strong>Import Accuracy:</strong> Better document parsing than competitors</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <p className="text-xs text-amber-800">
                          <strong>Remember:</strong> This is discovery - don&apos;t pitch unless asked. Focus on understanding their pain first.
                        </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                {/* Collapsible Talk Track Sections */}
                <div className="space-y-2">
                  {/* Opening Section */}
                  {(() => {
                    const openingData = talkTrack.opening;
                    const isExpanded = expandedFlowSections.has('opening');
                    return (
                      <Card
                        className={`cursor-pointer transition-all duration-300 ${
                          isExpanded ? 'border-2 border-purple-400 shadow-lg' : 'border-slate-200 hover:border-purple-300'
                        }`}
                        onClick={() => toggleFlowSection('opening')}
                      >
                        <CardHeader className="py-4">
                          <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center gap-2 text-base text-slate-800">
                              <Clock className="h-4 w-4 text-purple-600" />
                              {openingData.title}
                            </CardTitle>
                            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                              <ChevronDown className={`h-5 w-5 transition-colors ${isExpanded ? 'text-purple-500' : 'text-slate-400'}`} />
                            </motion.div>
                          </div>
                        </CardHeader>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          <CardContent className="pt-3 space-y-4">
                            <div className="rounded-lg p-4 font-mono text-sm whitespace-pre-wrap border-l-4 bg-slate-50 border-purple-400">
                              {openingData.content}
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    );
                  })()}

                  {/* Rapport Section */}
                  {/* Rapport & Context + Hypothesis */}
                  {(() => {
                    const rapportData = talkTrack.rapport as { title: string; content: string; questions: Array<{ q: string; level2?: string; level3?: string; persona: string; mustAsk?: boolean }>; hypothesis?: { setup: string; points: string[]; closer: string } };
                    const isExpanded = expandedFlowSections.has('rapport');
                    const mustAskCount = rapportData.questions?.filter(q => q.mustAsk).length || 0;
                    return (
                      <Card
                        className={`cursor-pointer transition-all duration-300 ${
                          isExpanded ? 'border-2 border-blue-400 shadow-lg bg-blue-50/30' : 'border-slate-200 hover:border-blue-300'
                        }`}
                        onClick={() => toggleFlowSection('rapport')}
                      >
                        <CardHeader className="py-4">
                          <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center gap-2 text-base text-slate-800">
                              <Clock className="h-4 w-4 text-blue-600" />
                              {rapportData.title}
                              <Badge className="bg-blue-500 text-white text-xs ml-1">+ Hypothesis</Badge>
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
                          <CardContent className="pt-3 space-y-4">
                            <div className="rounded-lg p-3 bg-slate-50 border-l-4 border-blue-400">
                              <p className="text-sm text-slate-700">{rapportData.content}</p>
                            </div>

                            {/* Rapport Questions */}
                            {rapportData.questions && rapportData.questions.length > 0 && (
                              <div className="space-y-3">
                                <h4 className="font-semibold text-slate-700 text-sm uppercase tracking-wide">Context Questions:</h4>
                                {rapportData.questions.map((question, qIndex) => (
                                  <div key={qIndex} className={`p-3 rounded-lg border relative ${question.mustAsk ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-300' : 'bg-white border-slate-200'}`}>
                                    {question.mustAsk && (
                                      <div className="absolute -top-2 -left-2">
                                        <div className="bg-amber-500 rounded-full p-1">
                                          <Star className="h-3 w-3 text-white fill-white" />
                                        </div>
                                      </div>
                                    )}
                                    <p className="font-medium text-slate-900 text-sm">
                                      <span className="font-bold mr-2 text-blue-600">{qIndex + 1}.</span>
                                      &quot;{question.q}&quot;
                                    </p>
                                    {question.level2 && (
                                      <div className="ml-5 mt-2">
                                        <p className="text-xs text-blue-700"><span className="font-medium">↳</span> &quot;{question.level2}&quot;</p>
                                      </div>
                                    )}
                                    <p className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded inline-block mt-2 ml-5">{question.persona}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Working Hypothesis Section */}
                            {rapportData.hypothesis && (
                              <div className="space-y-3 pt-2 border-t border-blue-200">
                                <div className="flex items-center gap-2">
                                  <Target className="h-4 w-4 text-blue-600" />
                                  <h4 className="font-semibold text-blue-800 text-sm uppercase tracking-wide">Then Share Your Hypothesis</h4>
                                </div>

                                {/* Setup */}
                                <div className="p-3 bg-blue-100 rounded-lg border border-blue-200">
                                  <p className="text-sm text-blue-800 italic">&quot;{rapportData.hypothesis.setup}&quot;</p>
                                </div>

                                {/* Hypothesis Points */}
                                <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                                  <p className="text-xs font-semibold text-blue-700 mb-2">YOUR HYPOTHESIS POINTS:</p>
                                  <ol className="space-y-2">
                                    {rapportData.hypothesis.points.map((point, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                        <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs flex-shrink-0">{idx + 1}</span>
                                        {point}
                                      </li>
                                    ))}
                                  </ol>
                                </div>

                                {/* Closer */}
                                <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                                  <p className="text-sm text-emerald-800 italic">&quot;{rapportData.hypothesis.closer}&quot;</p>
                                </div>

                                <p className="text-xs text-slate-500 bg-amber-50 px-2 py-1 rounded border border-amber-200">
                                  <strong>Why this works:</strong> Shows preparation, positions you as consultative, gives them something concrete to react to. If right = instant credibility. If wrong = they tell you what actually matters.
                                </p>
                              </div>
                            )}
                          </CardContent>
                        </div>
                      </Card>
                    );
                  })()}

                  {/* COMBINED Pain Discovery + Impact Section - Multi-Level Questions */}
                  {(() => {
                    const painData = talkTrack.painDiscovery;
                    const isExpanded = expandedFlowSections.has('painAndImpact');
                    const mustAskCount = painData.questions?.filter(q => q.mustAsk).length || 0;
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
                              <Clock className="h-4 w-4 text-amber-600" />
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
                          <CardContent className="pt-3 space-y-4">
                            {/* Approach */}
                            <div className="rounded-lg p-3 bg-amber-100/50 border-l-4 border-amber-500">
                              <p className="text-sm text-amber-800 font-medium">{painData.content}</p>
                            </div>

                            {/* Question Flow Legend */}
                            <div className="flex items-center gap-4 p-2 bg-slate-100 rounded-lg text-xs">
                              <div className="flex items-center gap-1">
                                <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-[10px]">1</span>
                                <span className="text-slate-600">Primary Question</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-blue-600 font-bold">→</span>
                                <span className="text-slate-600">2nd Level (Why/How)</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-red-600 font-bold">→→</span>
                                <span className="text-slate-600">3rd Level (Impact)</span>
                              </div>
                            </div>

                            {/* Multi-Level Questions */}
                            {painData.questions && painData.questions.length > 0 && (
                              <div className="space-y-4">
                                {painData.questions.map((question: { q: string; level2?: string; level3?: string; persona: string; mustAsk?: boolean }, qIndex: number) => (
                                  <div key={qIndex} className={`p-4 rounded-lg border relative ${question.mustAsk ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-300' : 'bg-white border-slate-200'}`}>
                                    {question.mustAsk && (
                                      <div className="absolute -top-2 -left-2">
                                        <div className="bg-amber-500 rounded-full p-1">
                                          <Star className="h-3 w-3 text-white fill-white" />
                                        </div>
                                      </div>
                                    )}

                                    {/* Primary Question */}
                                    <div className="flex items-start gap-2">
                                      <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">{qIndex + 1}</span>
                                      <p className="font-medium text-slate-900 text-sm">&quot;{question.q}&quot;</p>
                                    </div>

                                    {/* 2nd Level - Why/How */}
                                    {question.level2 && (
                                      <div className="ml-8 mt-3 pl-3 border-l-2 border-blue-300">
                                        <div className="flex items-center gap-1 mb-1">
                                          <span className="text-blue-600 font-bold text-xs">2nd Level</span>
                                          <span className="text-slate-400 text-xs">- Dig deeper</span>
                                        </div>
                                        <p className="text-sm text-blue-700">&quot;{question.level2}&quot;</p>
                                      </div>
                                    )}

                                    {/* 3rd Level - Impact */}
                                    {question.level3 && (
                                      <div className="ml-8 mt-2 pl-3 border-l-2 border-red-300">
                                        <div className="flex items-center gap-1 mb-1">
                                          <span className="text-red-600 font-bold text-xs">3rd Level</span>
                                          <span className="text-slate-400 text-xs">- Quantify impact</span>
                                        </div>
                                        <p className="text-sm text-red-700">&quot;{question.level3}&quot;</p>
                                      </div>
                                    )}

                                    {/* Context */}
                                    <div className="ml-8 mt-3">
                                      <p className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded inline-block">
                                        <span className="font-medium">Context:</span> {question.persona}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </CardContent>
                        </div>
                      </Card>
                    );
                  })()}

                  {/* Remaining Sections (Metrics, Qualification, Summary, Next Steps) */}
                  {Object.entries(talkTrack)
                    .filter(([key]) => !['opening', 'rapport', 'painDiscovery', 'impactQuestions'].includes(key))
                    .map(([key, section]) => {
                    const sectionData = section as { title: string; content: string; keySection?: boolean; questions?: Array<{ q: string; followUp: string; persona: string; mustAsk?: boolean }> };
                    const isExpanded = expandedFlowSections.has(key);
                    const mustAskCount = sectionData.questions?.filter(q => q.mustAsk).length || 0;

                    return (
                      <Card
                        key={key}
                        className={`cursor-pointer transition-all duration-300 ${
                          isExpanded ? 'border-2 border-purple-400 shadow-lg' : 'border-slate-200 hover:border-purple-300'
                        }`}
                        onClick={() => toggleFlowSection(key)}
                      >
                        <CardHeader className="py-4">
                          <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center gap-2 text-base text-slate-800">
                              <Clock className="h-4 w-4 text-purple-600" />
                              {sectionData.title}
                              {mustAskCount > 0 && (
                                <Badge variant="outline" className="text-xs border-amber-400 text-amber-700 ml-1">
                                  {mustAskCount} Must-Ask
                                </Badge>
                              )}
                            </CardTitle>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className={`h-5 w-5 transition-colors ${
                                isExpanded ? 'text-purple-500' : 'text-slate-400'
                              }`} />
                            </motion.div>
                          </div>
                        </CardHeader>

                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <CardContent className="pt-3 space-y-4">
                            <div className="rounded-lg p-4 font-mono text-sm whitespace-pre-wrap border-l-4 bg-slate-50 border-purple-400">
                              {sectionData.content}
                            </div>

                            {sectionData.questions && sectionData.questions.length > 0 && (
                              <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                  <h4 className="font-semibold text-slate-700 text-sm uppercase tracking-wide">Questions:</h4>
                                  <div className="flex items-center gap-1 text-xs text-amber-600">
                                    <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                                    <span>= Must Ask</span>
                                  </div>
                                </div>
                                {sectionData.questions.map((question, qIndex) => (
                                  <div key={qIndex} className={`p-3 rounded-lg border relative ${
                                    question.mustAsk ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-300' : 'bg-white border-slate-200'
                                  }`}>
                                    {question.mustAsk && (
                                      <div className="absolute -top-2 -left-2">
                                        <div className="bg-amber-500 rounded-full p-1">
                                          <Star className="h-3 w-3 text-white fill-white" />
                                        </div>
                                      </div>
                                    )}
                                    <p className="font-medium text-slate-900 text-sm">
                                      <span className={`font-bold mr-2 ${question.mustAsk ? 'text-amber-600' : 'text-purple-600'}`}>{qIndex + 1}.</span>
                                      &quot;{question.q}&quot;
                                    </p>
                                    <div className="ml-5 mt-2 space-y-1">
                                      <p className="text-xs text-blue-700">
                                        <span className="font-medium">↳</span> &quot;{question.followUp}&quot;
                                      </p>
                                      <p className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded inline-block">
                                        {question.persona}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </CardContent>
                        </div>
                      </Card>
                    );
                  })}
                </div>

                {/* Quick Reference Section */}
                <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                  {/* Affirm Quick Facts */}
                  <Card className="border-2 border-blue-200">
                    <CardHeader className="py-4">
                      <CardTitle className="text-base flex items-center gap-2 text-blue-800">
                        <Building2 className="h-4 w-4" />
                        Affirm Quick Facts
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-1">
                      <p><span className="font-medium">Business:</span> BNPL fintech, ~$1.7B revenue</p>
                      <p><span className="font-medium">Sales team:</span> Enterprise sales to merchants/retailers</p>
                      <p><span className="font-medium">Pain hypothesis:</span> RFPs, security questionnaires, compliance</p>
                      <p><span className="font-medium">Note:</span> Financial services = SOC 2, PCI-DSS critical</p>
                    </CardContent>
                  </Card>

                  {/* Paraform Differentiators */}
                  <Card className="border-2 border-emerald-200 bg-emerald-50/50">
                    <CardHeader className="py-4">
                      <CardTitle className="text-base flex items-center gap-2 text-emerald-800">
                        <Shield className="h-4 w-4" />
                        Paraform Differentiators (If Asked)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-start gap-1">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600 mt-0.5" />
                          <span><strong>Unlimited seats</strong></span>
                        </div>
                        <div className="flex items-start gap-1">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600 mt-0.5" />
                          <span><strong>70%+ time savings</strong></span>
                        </div>
                        <div className="flex items-start gap-1">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600 mt-0.5" />
                          <span><strong>SOC 2 Type 2</strong> + ZDR</span>
                        </div>
                        <div className="flex items-start gap-1">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600 mt-0.5" />
                          <span><strong>AI that works</strong></span>
                        </div>
                        <div className="flex items-start gap-1">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600 mt-0.5" />
                          <span><strong>Live integrations</strong></span>
                        </div>
                        <div className="flex items-start gap-1">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600 mt-0.5" />
                          <span><strong>No data sharing</strong></span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Capability Validation Scripts - Collapsible */}
                <Card className="border-2 border-emerald-300 bg-emerald-50/30">
                  <CardHeader className="py-4 cursor-pointer" onClick={() => toggleFlowSection('capabilities')}>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base flex items-center gap-2 text-emerald-800">
                        <MessageSquare className="h-4 w-4" />
                        Capability Validation Scripts
                        <Badge className="bg-emerald-500 text-white text-xs ml-1">When They Mention Pain</Badge>
                      </CardTitle>
                      <motion.div
                        animate={{ rotate: expandedFlowSections.has('capabilities') ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-5 w-5 text-slate-400" />
                      </motion.div>
                    </div>
                  </CardHeader>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedFlowSections.has('capabilities') ? 'max-h-[2000px]' : 'max-h-0'
                  }`}>
                    <CardContent className="pt-3 space-y-3">
                      {capabilityScripts.map((script, index) => (
                        <div key={index} className="p-3 bg-white rounded-lg border border-emerald-200">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <Badge className="bg-amber-100 text-amber-800 text-xs">When: {script.painPoint}</Badge>
                            <Badge variant="outline" className="text-xs border-emerald-400 text-emerald-700">{script.badge}</Badge>
                          </div>
                          <p className="text-sm text-slate-700 whitespace-pre-wrap italic mb-2">{script.validation}</p>
                          <p className="text-xs text-slate-500">
                            <span className="font-medium">Listen for:</span> {script.whenTheyMention}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </div>
                </Card>

                {/* Slide Talk Tracks - Collapsible */}
                <Card className="border-2 border-purple-200">
                  <CardHeader className="py-4 cursor-pointer" onClick={() => toggleFlowSection('talkTracks')}>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base flex items-center gap-2 text-purple-800">
                        <Presentation className="h-4 w-4" />
                        Slide Talk Tracks (If Asked About Paraform)
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
                      <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-purple-600 text-white text-xs">Company Overview</Badge>
                          <span className="text-xs text-slate-500">~30 sec</span>
                        </div>
                        <p className="text-sm text-slate-700 italic">
                          &quot;Paraform is an AI-powered platform that transforms how companies respond to RFPs and security questionnaires. We use AI agents that actually do the work - not just suggest answers. Companies like Braze, Qualys, and Philips use Paraform to cut response time by 70% or more.&quot;
                        </p>
                      </div>
                      <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-emerald-600 text-white text-xs">Solution Pitch</Badge>
                          <span className="text-xs text-slate-500">~45 sec</span>
                        </div>
                        <p className="text-sm text-slate-700 italic">
                          &quot;Most RFP tools make you manually search a content library and copy-paste answers. Paraform is different - our AI reads the question, finds the right content from your library AND live integrations like Confluence and Google Drive, and generates a complete answer. You review and approve rather than write from scratch.&quot;
                        </p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-blue-600 text-white text-xs">Why Different</Badge>
                          <span className="text-xs text-slate-500">~30 sec</span>
                        </div>
                        <p className="text-sm text-slate-700 italic">
                          &quot;Three things make us different: unlimited seats so your whole team can use it, AI that actually works because we invested in the technology, and enterprise-grade security - SOC 2 Type 2 with zero data retention agreements. No sharing data between customers.&quot;
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
                        <AlertTriangle className="h-4 w-4" />
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
                          <Badge className="bg-red-500 text-white text-xs">&quot;We&apos;re already using Responsive/Loopio&quot;</Badge>
                        </div>
                        <p className="text-sm text-slate-700 italic mb-2">
                          &quot;That&apos;s great that you already have a solution in place. What prompted you to reach out to us? Usually when we talk to teams using [competitor], they mention [import accuracy issues / AI not working well / seat-based pricing limiting collaboration]. Is any of that resonating?&quot;
                        </p>
                        <p className="text-xs text-orange-700 bg-orange-50 px-2 py-1 rounded">
                          Turn it back to discovery - understand why they&apos;re looking despite having a tool
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-orange-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-red-500 text-white text-xs">&quot;We don&apos;t have budget right now&quot;</Badge>
                        </div>
                        <p className="text-sm text-slate-700 italic mb-2">
                          &quot;I completely understand. Before we worry about budget, let&apos;s make sure this is even the right solution for you. If it is, when would budget typically become available? And what would need to happen for this to become a priority?&quot;
                        </p>
                        <p className="text-xs text-orange-700 bg-orange-50 px-2 py-1 rounded">
                          Qualify if it&apos;s real or a brush-off. Focus on value first, timing second
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-orange-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-red-500 text-white text-xs">&quot;Can you just send me pricing?&quot;</Badge>
                        </div>
                        <p className="text-sm text-slate-700 italic mb-2">
                          &quot;Absolutely, I&apos;d be happy to share pricing. To give you an accurate quote, I need to understand your volume. How many concurrent RFPs do you typically work on? And how many users would need access?&quot;
                        </p>
                        <p className="text-xs text-orange-700 bg-orange-50 px-2 py-1 rounded">
                          Use pricing as a bridge back to discovery questions
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-orange-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-red-500 text-white text-xs">&quot;We&apos;re concerned about AI accuracy&quot;</Badge>
                        </div>
                        <p className="text-sm text-slate-700 italic mb-2">
                          &quot;That&apos;s a really valid concern - a lot of teams have been burned by AI that doesn&apos;t work. What makes Paraform different is we show you exactly where each answer came from and the confidence level. It&apos;s not a black box. Would a POC help you see this in action?&quot;
                        </p>
                        <p className="text-xs text-orange-700 bg-orange-50 px-2 py-1 rounded">
                          Acknowledge, then pivot to transparency differentiator
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-orange-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-amber-500 text-white text-xs">&quot;What about security/compliance?&quot;</Badge>
                        </div>
                        <p className="text-sm text-slate-700 italic mb-2">
                          &quot;Great question, especially for a fintech like Affirm. We&apos;re SOC 2 Type 2 certified, we offer zero data retention agreements, and there&apos;s no cross-customer data sharing. Your data is yours. I can send over our security documentation - would that be helpful?&quot;
                        </p>
                        <p className="text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                          This is a positive signal for fintech - lean into security credentials
                        </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                {/* Deck Alignment - Collapsible */}
                <Card className="border border-slate-200">
                  <CardHeader className="py-4 cursor-pointer" onClick={() => toggleFlowSection('deckAlign')}>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base flex items-center gap-2 text-slate-700">
                        <FileText className="h-4 w-4" />
                        Deck Alignment - What to Uncover
                      </CardTitle>
                      <motion.div
                        animate={{ rotate: expandedFlowSections.has('deckAlign') ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-5 w-5 text-slate-400" />
                      </motion.div>
                    </div>
                  </CardHeader>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedFlowSections.has('deckAlign') ? 'max-h-[500px]' : 'max-h-0'
                  }`}>
                    <CardContent className="pt-3">
                      <div className="grid grid-cols-2 gap-2">
                        {deckAlignment.map((item, index) => (
                          <div key={index} className="p-2 bg-slate-50 rounded border border-slate-200 text-xs">
                            <Badge variant="outline" className="text-[10px] mb-1">{item.slide}</Badge>
                            <p className="text-slate-600">{item.uncover}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* PPT Deck Prep Tab */}
            <TabsContent value="deck">
              <div className="space-y-6 pt-2">
                {/* Step 1: Watch Video & Review Deck */}
                <Card className="border-2 border-blue-300 bg-blue-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <Play className="h-5 w-5" />
                      Step 1: Watch Discovery Call Recording
                    </CardTitle>
                    <CardDescription>Watch Dean&apos;s sample discovery call before modifying the deck</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Video Recording */}
                      <div className="p-4 bg-white rounded-lg border border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Play className="h-5 w-5 text-blue-600" />
                          <span className="font-medium text-slate-900">Discovery Call Recording</span>
                        </div>
                        {mounted && editingVideo ? (
                          <div className="space-y-2">
                            <input
                              type="url"
                              placeholder="Paste recording URL from Dean's email..."
                              value={tempVideoUrl}
                              onChange={(e) => setTempVideoUrl(e.target.value)}
                              className="w-full px-3 py-2 text-sm border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="flex gap-2">
                              <Button size="sm" onClick={saveVideoUrl} className="flex-1 bg-blue-600 hover:bg-blue-700">
                                <Save className="h-4 w-4 mr-1" /> Save
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => setEditingVideo(false)}>
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ) : mounted && videoUrl ? (
                          <div className="space-y-2">
                            <p className="text-sm text-green-600 truncate">{videoUrl}</p>
                            <div className="flex gap-2">
                              <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                                <Button variant="outline" className="w-full text-blue-600 border-blue-300">
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Open Recording
                                </Button>
                              </a>
                              <Button size="sm" variant="ghost" onClick={() => { setTempVideoUrl(videoUrl); setEditingVideo(true); }}>
                                <Edit3 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <p className="text-sm text-amber-600">No URL set - paste from Dean&apos;s email</p>
                            <Button
                              variant="outline"
                              className="w-full text-amber-600 border-amber-300 hover:bg-amber-50"
                              onClick={() => { setTempVideoUrl(""); setEditingVideo(true); }}
                            >
                              <Edit3 className="h-4 w-4 mr-2" />
                              Add Recording URL
                            </Button>
                          </div>
                        )}
                      </div>
                      {/* Deck Template */}
                      <div className="p-4 bg-white rounded-lg border border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Presentation className="h-5 w-5 text-blue-600" />
                          <span className="font-medium text-slate-900">Slide Deck Template</span>
                        </div>
                        {mounted && editingDeck ? (
                          <div className="space-y-2">
                            <input
                              type="url"
                              placeholder="Paste deck URL from Dean's email..."
                              value={tempDeckUrl}
                              onChange={(e) => setTempDeckUrl(e.target.value)}
                              className="w-full px-3 py-2 text-sm border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="flex gap-2">
                              <Button size="sm" onClick={saveDeckUrl} className="flex-1 bg-blue-600 hover:bg-blue-700">
                                <Save className="h-4 w-4 mr-1" /> Save
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => setEditingDeck(false)}>
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ) : mounted && deckUrl ? (
                          <div className="space-y-2">
                            <p className="text-sm text-green-600 truncate">{deckUrl}</p>
                            <div className="flex gap-2">
                              <a href={deckUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                                <Button variant="outline" className="w-full text-blue-600 border-blue-300">
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Open PPT Deck
                                </Button>
                              </a>
                              <Button size="sm" variant="ghost" onClick={() => { setTempDeckUrl(deckUrl); setEditingDeck(true); }}>
                                <Edit3 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <p className="text-sm text-amber-600">No URL set - paste from Dean&apos;s email</p>
                            <Button
                              variant="outline"
                              className="w-full text-amber-600 border-amber-300 hover:bg-amber-50"
                              onClick={() => { setTempDeckUrl(""); setEditingDeck(true); }}
                            >
                              <Edit3 className="h-4 w-4 mr-2" />
                              Add Deck URL
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 2: Deck Flow */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-purple-600" />
                      Step 2: Understand Deck Flow ({pptDeckAnalysis.totalSlides} Slides)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
                      {pptDeckAnalysis.flow.map((section, index) => (
                        <div key={index} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">{section.slides}</Badge>
                            <span className="text-xs text-purple-600 font-medium">{section.duration}</span>
                          </div>
                          <p className="font-medium text-sm text-slate-900 mb-1">{section.section}</p>
                          <p className="text-xs text-slate-600 mb-2">{section.content}</p>
                          <p className="text-[10px] text-amber-700 bg-amber-50 px-2 py-1 rounded">{section.notes}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Step 3: Edit Suggestions */}
                <Card className="border-2 border-amber-200 bg-amber-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-800">
                      <Edit3 className="h-5 w-5" />
                      Step 3: Recommended Edits to Make
                    </CardTitle>
                    <CardDescription>Customize the deck to match YOUR discovery style</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {pptDeckAnalysis.editSuggestions.map((edit, index) => (
                        <div key={index} className="p-3 bg-white rounded-lg border border-amber-200">
                          <Badge className="bg-amber-100 text-amber-800 mb-2">{edit.slide}</Badge>
                          <p className="text-sm text-slate-700">{edit.suggestion}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Key Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-green-600" />
                      Key Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {pptDeckAnalysis.keyRecommendations.map((rec, index) => (
                        <div key={index} className="flex items-start gap-2 p-2 bg-green-50 rounded-lg border border-green-200">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-slate-700">{rec}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Discovery → Deck Alignment */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-blue-600" />
                      Discovery Questions → Deck Slides Alignment
                    </CardTitle>
                    <CardDescription>What to uncover during discovery to set up each slide</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {deckAlignment.map((item, index) => (
                        <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                          <Badge className="bg-purple-100 text-purple-700 mb-2">{item.slide}</Badge>
                          <div className="space-y-2">
                            <div>
                              <p className="text-xs font-medium text-slate-500">Uncover:</p>
                              <p className="text-sm text-slate-700">&quot;{item.uncover}&quot;</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-slate-500">Position:</p>
                              <p className="text-sm text-slate-900 font-medium">{item.position}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Affirm Research Tab */}
            <TabsContent value="research">
              <div className="grid md:grid-cols-2 gap-6 pt-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-purple-600" />
                      Company Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{affirmResearch.overview}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {affirmResearch.financials.map((item, index) => (
                        <div key={index} className="bg-slate-50 rounded-lg p-3">
                          <p className="text-xs text-slate-500">{item.label}</p>
                          <p className="font-semibold text-slate-900">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-purple-600" />
                      Sales Context
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {affirmResearch.salesContext.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                          <ChevronRight className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                      Pain Hypotheses (Validate in Discovery)
                    </CardTitle>
                    <CardDescription>
                      These are educated guesses - use discovery to validate or disprove
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {affirmResearch.painHypotheses.map((pain, index) => (
                        <div key={index} className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg border border-amber-200">
                          <Target className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-amber-800">{pain}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* MEDDPICC Questions Tab */}
            <TabsContent value="meddpicc">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {Object.entries(meddpiccQuestions).map(([key, category]) => {
                  const isExpanded = expandedMeddpicc === key;
                  const IconComponent = category.icon;
                  return (
                    <Card
                      key={key}
                      className={`cursor-pointer transition-all duration-300 ${
                        isExpanded ? 'border-blue-400 shadow-lg' : 'border-slate-200 hover:border-blue-300'
                      }`}
                      onClick={() => setExpandedMeddpicc(expandedMeddpicc === key ? null : key)}
                    >
                      <CardHeader className="py-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                              <IconComponent className="h-5 w-5 text-purple-600" />
                            </div>
                            <div className="text-left">
                              <span className="font-semibold text-slate-900">{category.title}</span>
                              <p className="text-sm text-slate-500">{category.questions.length} questions</p>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className={`h-4 w-4 transition-colors ${isExpanded ? 'text-blue-500' : 'text-slate-400'}`} />
                          </motion.div>
                        </div>
                      </CardHeader>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <CardContent className="pt-2 pb-4">
                          <div className="space-y-4">
                            {category.questions.map((q, index) => (
                              <div key={index} className="border-l-2 border-purple-300 pl-4 py-2">
                                <p className="font-medium text-slate-900 mb-1 text-sm">"{q.question}"</p>
                                {q.followUp && (
                                  <p className="text-xs text-purple-600 mb-2">
                                    Follow-up: "{q.followUp}"
                                  </p>
                                )}
                                <p className="text-xs text-slate-500 bg-slate-50 inline-block px-2 py-1 rounded">
                                  Why: {q.why}
                                </p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

          </Tabs>

          {/* Quick Reference Footer */}
          <Card className="mt-8 bg-purple-900 text-white">
            <CardContent className="py-6">
              <div className="flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <p className="text-purple-300 text-sm">Time Allocation</p>
                  <p className="font-bold">30 min call + 15 min Q&A</p>
                </div>
                <div className="text-center">
                  <p className="text-purple-300 text-sm">Goal</p>
                  <p className="font-bold">Deep Discovery</p>
                </div>
                <div className="text-center">
                  <p className="text-purple-300 text-sm">Framework</p>
                  <p className="font-bold">MEDDPICC</p>
                </div>
                <div className="text-center">
                  <p className="text-purple-300 text-sm">Demo?</p>
                  <p className="font-bold text-red-300">NO</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
