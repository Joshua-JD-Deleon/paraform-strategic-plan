"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Brain,
  TrendingUp,
  Phone,
  FileText,
  Briefcase,
  Lightbulb,
  ArrowRight,
  MessageSquare,
  DollarSign,
  Calendar,
  Search,
  Presentation,
  BookOpen,
  ChevronDown
} from "lucide-react";

export default function SalesApproachPage() {
  const [expandedMeddpicc, setExpandedMeddpicc] = useState<string | null>(null);
  // Pipeline stages from the user's B2B folder structure
  const pipelineStages = [
    {
      stage: "1",
      name: "Problem Identified",
      description: "Discovery and stakeholder mapping",
      color: "blue",
      activities: [
        "Initial discovery call",
        "Stakeholder identification",
        "Pain point validation",
        "B2B buyer journey mapping",
        "Multi-threading setup"
      ],
      exitCriteria: "Clear pain identified, stakeholder map created, next meeting scheduled"
    },
    {
      stage: "2",
      name: "Problem Validated",
      description: "Qualification and demo execution",
      color: "purple",
      activities: [
        "MEDDPICC qualification",
        "Demo/presentation",
        "Solution mapping",
        "Technical validation"
      ],
      exitCriteria: "Champion confirmed, decision criteria understood, demo completed successfully"
    },
    {
      stage: "3",
      name: "Exec Sponsor",
      description: "Business case and executive alignment",
      color: "amber",
      activities: [
        "Business case creation",
        "ROI/value quantification",
        "Executive summary",
        "Champion coaching"
      ],
      exitCriteria: "Exec sponsor engaged, business case approved, budget confirmed"
    },
    {
      stage: "5",
      name: "Vendor Confirmed",
      description: "Proof of value and final selection",
      color: "green",
      activities: [
        "POC/pilot execution",
        "Success criteria validation",
        "Reference calls",
        "Final negotiations"
      ],
      exitCriteria: "POC successful, vendor selected, procurement initiated"
    },
    {
      stage: "7",
      name: "Paperwork Signed",
      description: "Contract and handoff",
      color: "emerald",
      activities: [
        "Contract finalization",
        "Legal/procurement close",
        "Account handoff prep",
        "Onboarding kickoff"
      ],
      exitCriteria: "Contract signed, implementation scheduled, CSM introduced"
    }
  ];

  // MEDDPICC application from the user's documents
  const meddpiccApplication = {
    metrics: {
      title: "Metrics",
      questions: [
        "What are the biggest challenges you're currently facing?",
        "How does this challenge impact your revenue, operational costs, or efficiency?",
        "What would success look like - what metrics would improve?"
      ],
      warning: "Vague or generalized pain points that don't connect to business outcomes",
      action: "Quantify the problem - if they can't, offer benchmarks from similar customers"
    },
    economicBuyer: {
      title: "Economic Buyer",
      questions: [
        "Who will make the final decision on this purchase?",
        "Walk me through how decisions like this typically get made",
        "Who controls the budget for this initiative?"
      ],
      warning: "No clear access to decision-makers or blockers in the way",
      action: "If not talking to EB, ask: 'What's the best way to involve them in our next conversation?'"
    },
    decisionCriteria: {
      title: "Decision Criteria",
      questions: [
        "What's most important to you when evaluating a solution?",
        "How would you prioritize speed vs accuracy vs ease of use?",
        "What would make you choose one solution over another?"
      ],
      warning: "Criteria that don't align with your strengths",
      action: "Understand and shape criteria early - don't wait until proposal stage"
    },
    decisionProcess: {
      title: "Decision Process",
      questions: [
        "When you've purchased similar tools, what did that process look like?",
        "What would a successful pilot look like for your team?",
        "Are you evaluating other solutions alongside us?"
      ],
      warning: "No clear timeline or prolonged process with no business impact",
      action: "Map the process early and align your activities to their buying stages"
    },
    paperProcess: {
      title: "Paper Process",
      questions: [
        "What does your procurement process typically look like?",
        "Would legal or security need to review before moving forward?",
        "Is there a specific budget cycle we should be aware of?"
      ],
      warning: "Lack of clear budget approval or resistance to discussing finances",
      action: "Identify blockers early - security reviews, legal requirements, budget cycles"
    },
    identifyPain: {
      title: "Identify Pain",
      questions: [
        "Tell me about your current process - walk me through what happens",
        "What's the most frustrating part of this today?",
        "Are there deals you've lost or passed on because of this?"
      ],
      warning: "No clear, identifiable problem your solution can address",
      action: "Connect pain to business impact - time, money, risk, opportunity cost"
    },
    champion: {
      title: "Champion",
      questions: [
        "Who on your team feels this pain the most?",
        "If this turned out to be a great fit, would you be willing to champion this internally?",
        "What would you need from us to make that case?"
      ],
      warning: "No internal advocate or champion who lacks influence",
      action: "Coach your champion - give them the tools and talking points they need"
    },
    competition: {
      title: "Competition",
      questions: [
        "Have you looked at or used any similar software before?",
        "What alternatives are you considering?",
        "What's the cost of doing nothing?"
      ],
      warning: "Strong competitor relationships with no known differentiation",
      action: "Focus on your unique value - don't criticize competitors directly"
    }
  };

  // Pre-demo planning framework from the user's documents
  const preDemoFramework = {
    objectives: {
      title: "Demo Objectives",
      content: "We need to enable [next decision & buying behavior] to keep our deal on track. If we see [evidence] by the end, the meeting was successful."
    },
    currentState: {
      title: "Current State / Negative Outcomes",
      content: "Despite trying [failed solutions], they still can't reach [positive outcomes] because of [problem/root cause], which is costing them [negative outcomes]."
    },
    whyNow: {
      title: "Why Now?",
      content: "[Executive] is pushing to reach [strategic priority], with a project labeled [internal language]. Their goal is to have [required capabilities] by [compelling event]."
    },
    valueMap: {
      columns: ["Customer Problem", "Root Causes", "Negative Impact", "Required Capabilities", "Unique Differentiator", "Desired Outcomes", "Metrics"]
    },
    threats: {
      title: "Threats & Alternatives",
      items: [
        "Alternative #1 - buying [Competitor X], even though [our differentiator is...]",
        "Alternative #2 - In-house build project",
        "Competing Priority - team may be re-focused on [X]"
      ]
    }
  };

  // Discovery call structure
  const discoveryStructure = [
    {
      phase: "Opening",
      duration: "2-3 min",
      objective: "Set agenda and build rapport",
      talkTrack: "Thanks for taking the time today. I want to learn about you, your team, and what's going on with [topic]. Based on what I hear, I'll share how we approach things, and then we can decide together if it makes sense to keep talking. Sound good?"
    },
    {
      phase: "Situation",
      duration: "5-7 min",
      objective: "Understand current state",
      talkTrack: "Tell me about your current [process]. Walk me through what happens when [trigger event]."
    },
    {
      phase: "Problem",
      duration: "8-10 min",
      objective: "Uncover pain and impact",
      talkTrack: "What's the most frustrating part of that today? How is that impacting you and your team? What does that cost in terms of time/money/opportunity?"
    },
    {
      phase: "Implication",
      duration: "5-7 min",
      objective: "Expand impact and create urgency",
      talkTrack: "If you don't solve this, what happens? How does this affect [other stakeholders/initiatives]? What's the cost of waiting another 6 months?"
    },
    {
      phase: "Qualification",
      duration: "5-7 min",
      objective: "MEDDPICC elements",
      talkTrack: "Walk me through how decisions like this typically get made. Who else would need to be involved? Is there budget allocated?"
    },
    {
      phase: "Next Steps",
      duration: "3-5 min",
      objective: "Advance the deal",
      talkTrack: "Based on what you've shared, it sounds like [summarize pain]. Let me suggest next steps... Who else should be involved? When works for you?"
    }
  ];

  // Demo best practices from user's documents
  const demoBestPractices = [
    {
      principle: "Start with the Problem",
      description: "Don't lead with features. Recap the pain they shared in discovery and get them nodding.",
      example: "Before I show you anything, let me make sure I understand: you said [pain point] is costing you [impact]. Is that still accurate?"
    },
    {
      principle: "Tell, Show, Tell",
      description: "Frame what you're about to show, demonstrate it, then confirm the value.",
      example: "I want to show you how we handle [problem]. [Demo]. How does that compare to what you're doing today?"
    },
    {
      principle: "Pause for Reactions",
      description: "Don't plow through. Stop after each major feature and gauge reaction.",
      example: "What questions do you have about that? How would your team use this?"
    },
    {
      principle: "Customize to Their World",
      description: "Use their language, their use cases, their metrics whenever possible.",
      example: "You mentioned you do about [X] per month. Let me show you what that would look like..."
    },
    {
      principle: "Close with Value Summary",
      description: "Recap the key value delivered and tie back to their stated goals.",
      example: "Based on what you shared about [goal], the key things that would help are [1, 2, 3]. Does that resonate?"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-emerald-400/20 text-emerald-100 border-emerald-400/30 mb-4">
              Sales Methodology
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Discovery & Demo Approach</h1>
            <p className="text-emerald-100/80 mb-4">
              Comprehensive sales methodology aligned to the Founding AE role
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span>MEDDPICC Qualification</span>
              </div>
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                <span>Consultative Discovery</span>
              </div>
              <div className="flex items-center gap-2">
                <Presentation className="h-4 w-4" />
                <span>Value-Based Demo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="pipeline" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="pipeline">Pipeline Stages</TabsTrigger>
              <TabsTrigger value="discovery">Discovery</TabsTrigger>
              <TabsTrigger value="demo">Demo</TabsTrigger>
              <TabsTrigger value="meddpicc">MEDDPICC</TabsTrigger>
            </TabsList>

            {/* Pipeline Stages Tab */}
            <TabsContent value="pipeline">
              <div className="space-y-6">
                <Card className="bg-emerald-50 border-emerald-200">
                  <CardContent className="py-4">
                    <div className="flex items-center gap-2 text-emerald-800">
                      <TrendingUp className="h-5 w-5" />
                      <p className="font-medium">
                        My pipeline management follows a structured 7-stage process with clear exit criteria at each stage
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="relative">
                  {/* Pipeline visualization */}
                  <div className="flex items-center justify-between mb-8">
                    {pipelineStages.map((stage, index) => (
                      <div key={index} className="flex-1 relative">
                        <div className={`w-full h-2 bg-${stage.color}-200`}>
                          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-${stage.color}-500 text-white flex items-center justify-center font-bold text-sm`}>
                            {stage.stage}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stage cards */}
                  <div className="grid gap-4">
                    {pipelineStages.map((stage, index) => (
                      <Card key={index} className={`border-l-4 border-l-${stage.color}-500`}>
                        <CardHeader className="py-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Badge className={`bg-${stage.color}-100 text-${stage.color}-700`}>Stage {stage.stage}</Badge>
                              <CardTitle className="text-lg">{stage.name}</CardTitle>
                            </div>
                            <CardDescription>{stage.description}</CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-medium text-slate-700 mb-2">Key Activities:</p>
                              <ul className="space-y-1">
                                {stage.activities.map((activity, actIndex) => (
                                  <li key={actIndex} className="text-sm text-slate-600 flex items-center gap-2">
                                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                                    {activity}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                              <p className="text-sm font-medium text-green-700 mb-1">Exit Criteria:</p>
                              <p className="text-sm text-green-800">{stage.exitCriteria}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Discovery Tab */}
            <TabsContent value="discovery">
              <div className="space-y-6">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="py-4">
                    <div className="flex items-center gap-2 text-blue-800">
                      <Search className="h-5 w-5" />
                      <p className="font-medium">
                        Discovery is about understanding their world, not pitching your product
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Discovery Structure */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-blue-600" />
                      Discovery Call Structure
                    </CardTitle>
                    <CardDescription>30-minute consultative discovery call flow</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {discoveryStructure.map((phase, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                                {index + 1}
                              </div>
                              <span className="font-semibold text-slate-900">{phase.phase}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{phase.duration}</Badge>
                              <Badge className="bg-blue-100 text-blue-700">{phase.objective}</Badge>
                            </div>
                          </div>
                          <div className="bg-slate-50 rounded p-3 ml-11">
                            <p className="text-sm text-slate-700 italic">"{phase.talkTrack}"</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Key Questions Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-purple-600" />
                      Power Questions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <p className="font-medium text-slate-700">Pain Uncovering:</p>
                        <ul className="space-y-2 text-sm">
                          <li className="p-2 bg-purple-50 rounded">"What's the most frustrating part of [process] today?"</li>
                          <li className="p-2 bg-purple-50 rounded">"How much time does your team spend on this each week?"</li>
                          <li className="p-2 bg-purple-50 rounded">"What happens when this doesn't work well?"</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <p className="font-medium text-slate-700">Impact Expansion:</p>
                        <ul className="space-y-2 text-sm">
                          <li className="p-2 bg-amber-50 rounded">"If you could wave a magic wand, what would be different?"</li>
                          <li className="p-2 bg-amber-50 rounded">"What's the cost of not solving this?"</li>
                          <li className="p-2 bg-amber-50 rounded">"How does this affect [other stakeholders]?"</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Demo Tab */}
            <TabsContent value="demo">
              <div className="space-y-6">
                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="py-4">
                    <div className="flex items-center gap-2 text-purple-800">
                      <Presentation className="h-5 w-5" />
                      <p className="font-medium">
                        Great demos are conversations, not presentations - 60% them, 40% you
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Pre-Demo Planning */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-purple-600" />
                      Pre-Demo Planning Framework
                    </CardTitle>
                    <CardDescription>Complete this before every demo</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <p className="font-medium text-purple-800 mb-2">{preDemoFramework.objectives.title}</p>
                        <p className="text-sm text-purple-700 font-mono">{preDemoFramework.objectives.content}</p>
                      </div>
                      <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                        <p className="font-medium text-red-800 mb-2">{preDemoFramework.currentState.title}</p>
                        <p className="text-sm text-red-700 font-mono">{preDemoFramework.currentState.content}</p>
                      </div>
                      <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                        <p className="font-medium text-amber-800 mb-2">{preDemoFramework.whyNow.title}</p>
                        <p className="text-sm text-amber-700 font-mono">{preDemoFramework.whyNow.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Demo Best Practices */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-amber-600" />
                      Demo Best Practices
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {demoBestPractices.map((practice, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-amber-100 text-amber-700">{practice.principle}</Badge>
                          </div>
                          <p className="text-sm text-slate-600 mb-2">{practice.description}</p>
                          <div className="bg-slate-50 rounded p-3">
                            <span className="text-xs text-slate-500">Example:</span>
                            <p className="text-sm text-slate-700 italic">"{practice.example}"</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* MEDDPICC Tab */}
            <TabsContent value="meddpicc">
              <div className="space-y-6">
                <Card className="bg-emerald-50 border-emerald-200">
                  <CardContent className="py-4">
                    <div className="flex items-center gap-2 text-emerald-800">
                      <Brain className="h-5 w-5" />
                      <p className="font-medium">
                        MEDDPICC isn't just a checklist - it's a framework for managing complex deals
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(meddpiccApplication).map(([key, element]) => {
                    const isExpanded = expandedMeddpicc === key;
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
                              <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                                {key.charAt(0).toUpperCase()}
                              </div>
                              <span className="font-semibold text-slate-900">{element.title}</span>
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
                            isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <CardContent className="pt-2 pb-4">
                            <div className="space-y-4">
                              <div>
                                <p className="text-sm font-medium text-slate-700 mb-2">Key Questions:</p>
                                <ul className="space-y-2">
                                  {element.questions.map((q, qIndex) => (
                                    <li key={qIndex} className="text-sm text-slate-600 p-2 bg-emerald-50 rounded flex items-start gap-2">
                                      <MessageSquare className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                      "{q}"
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="space-y-2">
                                <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                                  <p className="text-xs font-medium text-red-700 mb-1 flex items-center gap-1">
                                    <AlertTriangle className="h-3 w-3" /> Warning Sign
                                  </p>
                                  <p className="text-sm text-red-800">{element.warning}</p>
                                </div>
                                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                                  <p className="text-xs font-medium text-green-700 mb-1 flex items-center gap-1">
                                    <CheckCircle2 className="h-3 w-3" /> Action
                                  </p>
                                  <p className="text-sm text-green-800">{element.action}</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
