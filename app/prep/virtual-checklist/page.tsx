"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Clock,
  Target,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Video,
  Mic,
  FileText,
  Users,
  Brain,
  Shield,
  Link,
  DollarSign,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

const STORAGE_KEY = "virtual-session-checklist";

interface ChecklistItem {
  id: string;
  label: string;
  category: "before" | "motion" | "paraform" | "closing";
  critical?: boolean;
  tip?: string;
}

export default function VirtualChecklistPage() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setCheckedItems(new Set(JSON.parse(saved)));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...checkedItems]));
    }
  }, [checkedItems, mounted]);

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const beforeSession: ChecklistItem[] = [
    { id: "b1", label: "Test camera, microphone, and lighting", category: "before" },
    { id: "b2", label: "Close unnecessary tabs and notifications", category: "before" },
    { id: "b3", label: "Have water nearby", category: "before" },
    { id: "b4", label: "Open this prep site on second monitor/device", category: "before" },
    { id: "b5", label: "Review Paraform discovery scenario (Dean = Affirm Sr. Director)", category: "before", critical: true },
    { id: "b6", label: "Review Motion AI product and demo flow", category: "before" },
    { id: "b7", label: "Practice 30-second intro out loud", category: "before" },
    { id: "b8", label: "Have notepad ready for notes during calls", category: "before" },
    { id: "b9", label: "Mental reset - you're here to help, not to sell", category: "before" },
  ];

  const motionChecklist: ChecklistItem[] = [
    { id: "m1", label: "Open with agenda setting (discovery → demo → Q&A)", category: "motion" },
    { id: "m2", label: "Ask about their current scheduling/productivity challenges", category: "motion" },
    { id: "m3", label: "Understand who else is involved in their workflow", category: "motion" },
    { id: "m4", label: "Identify 2-3 key pain points before demo", category: "motion", critical: true },
    { id: "m5", label: "Transition smoothly: 'Based on what you shared...'", category: "motion" },
    { id: "m6", label: "Demo: Start with the problem, not the feature", category: "motion" },
    { id: "m7", label: "Demo: Show AI value prop (connects to Paraform story)", category: "motion" },
    { id: "m8", label: "Demo: Pause for reactions and questions", category: "motion" },
    { id: "m9", label: "End with clear next steps or trial offer", category: "motion" },
    { id: "m10", label: "Leave time for Q&A (they're evaluating your curiosity)", category: "motion", critical: true },
  ];

  const paraformChecklist: ChecklistItem[] = [
    { id: "a1", label: "Remember: Dean = Sr. Director Enterprise Sales @ Affirm", category: "paraform", critical: true },
    { id: "a2", label: "Remember: Inbound via email form fill", category: "paraform", critical: true },
    { id: "a3", label: "Remember: DISCOVERY ONLY - NO DEMO", category: "paraform", critical: true },
    { id: "a4", label: "Open: Thank for reaching out, set agenda (discovery call)", category: "paraform" },
    { id: "a5", label: "Ask: What prompted you to reach out now?", category: "paraform" },
    { id: "a6", label: "Uncover: Current RFP/questionnaire volume and pain", category: "paraform" },
    { id: "a7", label: "Uncover: Current tools (Loopio, RFPIO, manual?)", category: "paraform" },
    { id: "a8", label: "Uncover: Team size and who's involved in RFP process", category: "paraform" },
    { id: "a9", label: "Uncover: Pain with existing solution (AI quality, seat limits, maintenance)", category: "paraform", critical: true },
    { id: "a10", label: "Uncover: Security requirements (critical for enterprise)", category: "paraform" },
    { id: "a11", label: "Qualify: Timeline, budget, decision process", category: "paraform" },
    { id: "a12", label: "Close: Summarize pain, suggest demo as next step", category: "paraform" },
    { id: "a13", label: "Multi-thread: Ask about other stakeholders for demo", category: "paraform" },
  ];

  const closingChecklist: ChecklistItem[] = [
    { id: "c1", label: "Express genuine interest in the role", category: "closing" },
    { id: "c2", label: "Reference something specific from the calls", category: "closing" },
    { id: "c3", label: "Ask about in-person interview logistics", category: "closing" },
    { id: "c4", label: "Thank them for the opportunity", category: "closing" },
    { id: "c5", label: "Ask: 'Is there anything else you'd like to see from me?'", category: "closing", critical: true },
  ];

  // Paraform deck key slides for reference
  const deckSlides = [
    {
      slide: "Slide 2",
      title: "Agenda Structure",
      content: "Intros (3 min) → Background (3 min) → Data Mapping (5 min) → Demo (10 min) → Next Steps (5 min)",
      note: "Your discovery should uncover info that makes this flow compelling"
    },
    {
      slide: "Slide 3",
      title: "Customer Social Proof",
      content: "Affirm, Philips, Qualys, Braze, Ramp, Navan, Contentful, Recorded Future",
      note: "Most evaluated 2-4 platforms before choosing Paraform"
    },
    {
      slide: "Slide 4",
      title: "Legacy vs Paraform",
      content: "Seat-based limits → Unlimited seats | AI doesn't work → 70%+ time savings | Content library maintenance → Live integrations",
      note: "Discover which of these pains resonate most"
    },
    {
      slide: "Slide 6",
      title: "The Paraform Approach",
      content: "Q&A Library + Live Integrations → AI Semantic Search → AI Generation → Content Loop",
      note: "Understand their current workflow to position this"
    },
    {
      slide: "Slide 9",
      title: "Trust & Security",
      content: "SOC 2 Type 2 | ZDR with AI providers | No cross-customer data sharing | Auditable AI responses",
      note: "Critical for enterprise - probe security requirements"
    },
    {
      slide: "Slide 12",
      title: "Pricing",
      content: "5 projects: $29,500 | 10 projects: $37,500 | 15+: Custom | All unlimited users",
      note: "Understand their RFP volume to position tier"
    }
  ];

  const meddpiccAlignment = [
    {
      letter: "M",
      element: "Metrics",
      deckAlignment: "70%+ time savings, customer proof points",
      discoveryGoal: "How many RFPs? How long does each take? What's the cost of current process?"
    },
    {
      letter: "E",
      element: "Economic Buyer",
      deckAlignment: "Pricing slide shows clear value prop",
      discoveryGoal: "Who controls the budget? Is this VP Sales, CRO, or COO decision?"
    },
    {
      letter: "D",
      element: "Decision Criteria",
      deckAlignment: "AI quality, transparency, integrations, security",
      discoveryGoal: "What's most important? Speed? Accuracy? Security? Ease of use?"
    },
    {
      letter: "D",
      element: "Decision Process",
      deckAlignment: "Trial logistics (Slide 19), POC process",
      discoveryGoal: "Have you purchased similar tools? What's the typical process?"
    },
    {
      letter: "P",
      element: "Paper Process",
      deckAlignment: "MNDA, procurement timeline",
      discoveryGoal: "What does procurement look like? Any security reviews?"
    },
    {
      letter: "I",
      element: "Identify Pain",
      deckAlignment: "Slide 4 - all legacy RFP problems",
      discoveryGoal: "What's broken today? What's the impact of not fixing it?"
    },
    {
      letter: "C",
      element: "Champion",
      deckAlignment: "Unlimited seats = broad adoption potential",
      discoveryGoal: "Who else feels this pain? Who would advocate internally?"
    },
    {
      letter: "C",
      element: "Competition",
      deckAlignment: "Slide 4 positions vs Loopio, RFPIO",
      discoveryGoal: "What alternatives are you considering? Evaluated before?"
    }
  ];

  const getProgress = (items: ChecklistItem[]) => {
    const checked = items.filter(item => checkedItems.has(item.id)).length;
    return Math.round((checked / items.length) * 100);
  };

  const resetChecklist = () => {
    setCheckedItems(new Set());
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-violet-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-purple-400/20 text-purple-100 border-purple-400/30 mb-4">
              Virtual Session
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Virtual Session Checklist</h1>
            <p className="text-purple-100/80 mb-6">
              Aligned to Paraform's actual discovery deck and best practices
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                <span>1.5 hours total</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span>Motion: 30 + 15 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span>Paraform: 30 + 15 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="checklist" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="checklist">Session Checklist</TabsTrigger>
              <TabsTrigger value="deck">Deck Alignment</TabsTrigger>
              <TabsTrigger value="meddpicc">MEDDPICC Map</TabsTrigger>
            </TabsList>

            {/* Checklist Tab */}
            <TabsContent value="checklist">
              <div className="space-y-6">
                {/* Progress Overview */}
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: "Before Session", items: beforeSession, color: "slate" },
                    { label: "Motion Demo", items: motionChecklist, color: "blue" },
                    { label: "Paraform Discovery", items: paraformChecklist, color: "purple" },
                    { label: "Closing", items: closingChecklist, color: "green" }
                  ].map((section, idx) => (
                    <Card key={idx} className="text-center">
                      <CardContent className="pt-4">
                        <div className={`text-2xl font-bold text-${section.color}-600`}>
                          {getProgress(section.items)}%
                        </div>
                        <div className="text-xs text-slate-500">{section.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <button
                  onClick={resetChecklist}
                  className="text-sm text-slate-500 hover:text-slate-700 underline"
                >
                  Reset all checkboxes
                </button>

                {/* Before Session */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-slate-600" />
                      Before the Session
                    </CardTitle>
                    <CardDescription>Complete at least 30 minutes before start time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {beforeSession.map((item) => (
                        <div
                          key={item.id}
                          className={`flex items-start gap-3 p-2 rounded-lg ${item.critical ? 'bg-amber-50 border border-amber-200' : 'hover:bg-slate-50'}`}
                        >
                          <Checkbox
                            id={item.id}
                            checked={checkedItems.has(item.id)}
                            onCheckedChange={() => toggleItem(item.id)}
                            className="mt-0.5"
                          />
                          <label
                            htmlFor={item.id}
                            className={`text-sm cursor-pointer ${checkedItems.has(item.id) ? 'line-through text-slate-400' : 'text-slate-700'}`}
                          >
                            {item.label}
                            {item.critical && (
                              <Badge variant="outline" className="ml-2 text-xs border-amber-400 text-amber-700">Critical</Badge>
                            )}
                          </label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Motion Demo */}
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-blue-600" />
                      Motion AI Discovery + Demo
                      <Badge className="bg-blue-100 text-blue-700">30 + 15 min</Badge>
                    </CardTitle>
                    <CardDescription>Consumer product - shows your demo skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {motionChecklist.map((item) => (
                        <div
                          key={item.id}
                          className={`flex items-start gap-3 p-2 rounded-lg ${item.critical ? 'bg-blue-50 border border-blue-200' : 'hover:bg-slate-50'}`}
                        >
                          <Checkbox
                            id={item.id}
                            checked={checkedItems.has(item.id)}
                            onCheckedChange={() => toggleItem(item.id)}
                            className="mt-0.5"
                          />
                          <label
                            htmlFor={item.id}
                            className={`text-sm cursor-pointer ${checkedItems.has(item.id) ? 'line-through text-slate-400' : 'text-slate-700'}`}
                          >
                            {item.label}
                            {item.critical && (
                              <Badge variant="outline" className="ml-2 text-xs border-blue-400 text-blue-700">Critical</Badge>
                            )}
                          </label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Paraform Discovery */}
                <Card className="border-2 border-red-200 bg-red-50/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-800">
                      <Target className="h-5 w-5" />
                      Paraform Discovery Call
                      <Badge className="bg-red-100 text-red-700">CRITICAL - 30 + 15 min</Badge>
                    </CardTitle>
                    <CardDescription className="text-red-600">
                      Dean = Sr. Director Enterprise Sales @ Affirm | INBOUND | NO DEMO
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {paraformChecklist.map((item) => (
                        <div
                          key={item.id}
                          className={`flex items-start gap-3 p-2 rounded-lg ${item.critical ? 'bg-red-100 border border-red-300' : 'bg-white hover:bg-red-50'}`}
                        >
                          <Checkbox
                            id={item.id}
                            checked={checkedItems.has(item.id)}
                            onCheckedChange={() => toggleItem(item.id)}
                            className="mt-0.5"
                          />
                          <label
                            htmlFor={item.id}
                            className={`text-sm cursor-pointer ${checkedItems.has(item.id) ? 'line-through text-slate-400' : 'text-slate-700'}`}
                          >
                            {item.label}
                            {item.critical && (
                              <Badge variant="outline" className="ml-2 text-xs border-red-400 text-red-700">Must Do</Badge>
                            )}
                          </label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Closing */}
                <Card className="border-green-200 bg-green-50/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-800">
                      <CheckCircle2 className="h-5 w-5" />
                      Closing Strong
                    </CardTitle>
                    <CardDescription>End the virtual session memorably</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {closingChecklist.map((item) => (
                        <div
                          key={item.id}
                          className={`flex items-start gap-3 p-2 rounded-lg ${item.critical ? 'bg-green-100 border border-green-300' : 'bg-white hover:bg-green-50'}`}
                        >
                          <Checkbox
                            id={item.id}
                            checked={checkedItems.has(item.id)}
                            onCheckedChange={() => toggleItem(item.id)}
                            className="mt-0.5"
                          />
                          <label
                            htmlFor={item.id}
                            className={`text-sm cursor-pointer ${checkedItems.has(item.id) ? 'line-through text-slate-400' : 'text-slate-700'}`}
                          >
                            {item.label}
                            {item.critical && (
                              <Badge variant="outline" className="ml-2 text-xs border-green-400 text-green-700">Critical</Badge>
                            )}
                          </label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Deck Alignment Tab */}
            <TabsContent value="deck">
              <div className="space-y-6">
                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="py-4">
                    <div className="flex items-center gap-2 text-purple-800">
                      <FileText className="h-5 w-5" />
                      <p className="font-medium">
                        These are the key slides from Paraform's actual discovery deck. Your discovery should uncover info that makes each slide resonate.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-4">
                  {deckSlides.map((slide, index) => (
                    <Card key={index}>
                      <CardHeader className="py-4">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{slide.slide}</Badge>
                          <span className="text-sm font-semibold text-slate-900">{slide.title}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-700 mb-3 bg-slate-50 p-2 rounded font-mono">
                          {slide.content}
                        </p>
                        <div className="flex items-start gap-2 text-xs">
                          <ArrowRight className="h-3 w-3 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span className="text-purple-700">{slide.note}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Key Value Props to Uncover */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-purple-600" />
                      Key Value Props to Uncover in Discovery
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="h-4 w-4 text-purple-600" />
                          <span className="font-semibold text-purple-900">Unlimited Seats</span>
                        </div>
                        <p className="text-xs text-purple-700">Ask: "How many people touch RFPs? Are they all licensed?"</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="h-4 w-4 text-blue-600" />
                          <span className="font-semibold text-blue-900">AI That Works</span>
                        </div>
                        <p className="text-xs text-blue-700">Ask: "Have you tried AI features? How did they perform?"</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Link className="h-4 w-4 text-green-600" />
                          <span className="font-semibold text-green-900">Live Integrations</span>
                        </div>
                        <p className="text-xs text-green-700">Ask: "Where does your source content live today?"</p>
                      </div>
                      <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-4 w-4 text-amber-600" />
                          <span className="font-semibold text-amber-900">Security</span>
                        </div>
                        <p className="text-xs text-amber-700">Ask: "What security requirements does your team have?"</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* MEDDPICC Map Tab */}
            <TabsContent value="meddpicc">
              <div className="space-y-6">
                <Card className="bg-emerald-50 border-emerald-200">
                  <CardContent className="py-4">
                    <div className="flex items-center gap-2 text-emerald-800">
                      <Brain className="h-5 w-5" />
                      <p className="font-medium">
                        How each MEDDPICC element maps to Paraform's deck and what to uncover in discovery.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  {meddpiccAlignment.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="py-4">
                        <div className="grid md:grid-cols-12 gap-4 items-start">
                          <div className="md:col-span-1">
                            <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
                              {item.letter}
                            </div>
                          </div>
                          <div className="md:col-span-2">
                            <span className="font-semibold text-slate-900">{item.element}</span>
                          </div>
                          <div className="md:col-span-4">
                            <div className="text-xs text-slate-500 mb-1">Deck Alignment</div>
                            <p className="text-sm text-slate-700">{item.deckAlignment}</p>
                          </div>
                          <div className="md:col-span-5">
                            <div className="text-xs text-emerald-600 mb-1">Discovery Goal</div>
                            <p className="text-sm text-emerald-800 font-medium">{item.discoveryGoal}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Reference */}
                <Card className="bg-gradient-to-br from-emerald-900 to-teal-800 text-white">
                  <CardContent className="py-6">
                    <h3 className="font-bold text-lg mb-4 text-center">Discovery Call Success = Demo Setup Success</h3>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center p-3 bg-white/10 rounded-lg">
                        <div className="text-2xl mb-1">🎯</div>
                        <div className="font-medium">Uncover Pain</div>
                        <div className="text-emerald-200 text-xs">That maps to Slide 4</div>
                      </div>
                      <div className="text-center p-3 bg-white/10 rounded-lg">
                        <div className="text-2xl mb-1">📊</div>
                        <div className="font-medium">Get Metrics</div>
                        <div className="text-emerald-200 text-xs"># of RFPs, time spent, team size</div>
                      </div>
                      <div className="text-center p-3 bg-white/10 rounded-lg">
                        <div className="text-2xl mb-1">👥</div>
                        <div className="font-medium">Multi-Thread</div>
                        <div className="text-emerald-200 text-xs">Who else should see the demo?</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
