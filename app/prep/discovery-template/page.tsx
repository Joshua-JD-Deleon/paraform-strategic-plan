"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Phone,
  FileText,
  Clipboard,
  Presentation
} from "lucide-react";

export default function DiscoveryTemplatePage() {
  const objectives = [
    "Qualify as champion / identify champion",
    "Uncover pain points & business impact",
    "Understand decision process & stakeholders",
    "Identify compelling event / urgency",
    "Book next step with right people"
  ];

  const contactIntelFields = [
    { field: "Name & Title", description: "Full name and current role" },
    { field: "Location", description: "Office/region for timezone planning" },
    { field: "Key Responsibilities", description: "What do they own?" },
    { field: "Anticipated Priorities", description: "What's top of mind?" },
    { field: "Anticipated Challenges", description: "What keeps them up at night?" },
    { field: "Role in Decision", description: "Champion / Influencer / Blocker / Decision Maker" }
  ];

  const companyFields = [
    { field: "What They Do", description: "Core business" },
    { field: "Industry", description: "Vertical market" },
    { field: "Size / Headcount", description: "Company scale" },
    { field: "Recent News / Triggers", description: "What's changed?" },
    { field: "Strategic Priorities", description: "Where are they investing?" },
    { field: "Competitors", description: "Who are they competing with?" }
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

  const postCallFields = [
    { field: "Pain Points Confirmed", description: "What did they validate?" },
    { field: "Success Metrics", description: "How will they measure?" },
    { field: "Decision Process", description: "How do they buy?" },
    { field: "Decision Makers", description: "Who's involved?" },
    { field: "Budget Status", description: "Funded or not?" },
    { field: "Timeline", description: "When do they need solution?" },
    { field: "Competitors/Alternatives", description: "Who else are they looking at?" },
    { field: "Objections Raised", description: "What concerns came up?" }
  ];

  const followUpChecklist = {
    within2Hours: [
      "Send recap email with key points in their words",
      "Update CRM with call notes",
      "Send calendar invite for next step",
      "Complete any promised action items"
    ],
    within24Hours: [
      "Share relevant resources mentioned",
      "Connect on LinkedIn (if appropriate)",
      "Loop in internal team members as needed"
    ],
    beforeNextMeeting: [
      "Send pre-meeting warm-up to new stakeholders",
      "Prepare tailored agenda",
      "Review notes from last call"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">Discovery Framework</Badge>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Discovery Call Prep Template
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Complete framework for running effective discovery calls - from pre-call prep through follow-up
            </p>
          </motion.div>

          {/* My End-to-End Approach */}
          <Card className="mb-8 border-2 border-blue-300 bg-gradient-to-r from-blue-50 to-blue-50">
            <CardHeader className="py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Presentation className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-blue-900">My End-to-End Discovery Approach</CardTitle>
                  <CardDescription>Consultative, conversation-first process</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="p-3 bg-white rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">1</div>
                    <span className="font-semibold text-slate-900 text-sm">Pre-Call</span>
                  </div>
                  <p className="text-xs text-slate-600">Send deck/materials before the call so they can review. Research their business, identify hypothesis.</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">2</div>
                    <span className="font-semibold text-slate-900 text-sm">Discovery Call</span>
                  </div>
                  <p className="text-xs text-slate-600">Conversation-first - no slides during call unless validating approach. Focus on questions and listening.</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">3</div>
                    <span className="font-semibold text-slate-900 text-sm">If Fit Exists</span>
                  </div>
                  <p className="text-xs text-slate-600">Schedule demo with team & stakeholders. Get commitment for next step before ending the call.</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">4</div>
                    <span className="font-semibold text-slate-900 text-sm">Follow-Up</span>
                  </div>
                  <p className="text-xs text-slate-600">Recap in their words, confirm next steps, provide any requested materials, maintain momentum.</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>Key Philosophy:</strong> Discovery is consultative, not interrogative. Come with a hypothesis, validate it through conversation, and let them talk more than you. The goal is to understand if we can help solve their challenges - not to pitch.
                </p>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="pre-call" className="space-y-8">
            <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
              <TabsTrigger value="pre-call">Pre-Call</TabsTrigger>
              <TabsTrigger value="call-structure">Call Structure</TabsTrigger>
              <TabsTrigger value="pain-funnel">PAIN Funnel</TabsTrigger>
              <TabsTrigger value="post-call">Post-Call</TabsTrigger>
              <TabsTrigger value="follow-up">Follow-Up</TabsTrigger>
            </TabsList>

            {/* Pre-Call Tab */}
            <TabsContent value="pre-call" className="space-y-6">
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
                        "Because of <span className="font-semibold text-purple-700">[trigger/change]</span>,
                        now's the time for <span className="font-semibold text-purple-700">[Company]</span> to
                        <span className="font-semibold text-purple-700"> [action we enable]</span> by
                        <span className="font-semibold text-purple-700"> [date]</span>.
                        This unlocks <span className="font-semibold text-purple-700">[positive outcomes]</span> while
                        avoiding <span className="font-semibold text-purple-700">[negative outcomes]</span>."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Intel */}
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
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {contactIntelFields.map((item, i) => (
                      <div key={i} className="p-3 bg-slate-50 rounded-lg">
                        <div className="font-medium text-slate-900 mb-1">{item.field}</div>
                        <div className="text-sm text-slate-500">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Company Snapshot */}
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
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {companyFields.map((item, i) => (
                      <div key={i} className="p-3 bg-slate-50 rounded-lg">
                        <div className="font-medium text-slate-900 mb-1">{item.field}</div>
                        <div className="text-sm text-slate-500">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Call Structure Tab */}
            <TabsContent value="call-structure" className="space-y-6">
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
                        <li>"What's your current process for [challenge area]?"</li>
                        <li>"What's working? What's not?"</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Problem & Impact</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>"What are your biggest pain points right now?"</li>
                        <li>"Can you give me a specific example?"</li>
                        <li>"How long has this been a problem?"</li>
                        <li>"What's the cost of not solving this?"</li>
                        <li>"Who else is affected?"</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Triggers & Urgency</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>"Why is this a priority now vs. last quarter?"</li>
                        <li>"What happens if nothing changes?"</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Desired Outcomes</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>"What does success look like?"</li>
                        <li>"What metrics matter to you?"</li>
                        <li>"If this was solved, what would you do with that time/resources?"</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* PAIN Funnel Tab */}
            <TabsContent value="pain-funnel" className="space-y-6">
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
                        <span className="text-slate-700 font-medium">"{question}"</span>
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
                          Keep asking "why" and "what happens then" until you understand the full cost of inaction.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Post-Call Tab */}
            <TabsContent value="post-call" className="space-y-6">
              {/* Compelling Event Template */}
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
                      <p className="text-slate-700 italic">
                        "<span className="font-semibold text-purple-700">[Executive]</span> is pushing to reach
                        <span className="font-semibold text-purple-700"> [goal]</span> and created
                        <span className="font-semibold text-purple-700"> [initiative]</span> to support this.
                        Target: <span className="font-semibold text-purple-700">[milestone]</span> by
                        <span className="font-semibold text-purple-700"> [date]</span>."
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
                      <p className="text-slate-700 italic">
                        "Despite trying <span className="font-semibold text-red-700">[failed solutions]</span>,
                        they can't achieve <span className="font-semibold text-red-700">[outcomes]</span> because of
                        <span className="font-semibold text-red-700"> [root cause]</span>, costing them
                        <span className="font-semibold text-red-700"> [negative impact]</span>."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Key Learnings */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Clipboard className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>Key Learnings to Document</CardTitle>
                      <CardDescription>Capture after every call</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {postCallFields.map((item, i) => (
                      <div key={i} className="p-3 bg-slate-50 rounded-lg">
                        <div className="font-medium text-slate-900 mb-1">{item.field}</div>
                        <div className="text-sm text-slate-500">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Threats to Deal */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                      <AlertCircle className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <CardTitle>Threats to Deal</CardTitle>
                      <CardDescription>Track deal risks</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {["Competitor", "Internal build", "Competing priority", "No decision / status quo"].map((threat, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                        <div className="w-5 h-5 rounded border-2 border-amber-400 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">{threat}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Self-Scorecard */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    Self-Scorecard (Rate 1-5)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      "Identified WHY they took the meeting",
                      "Uncovered specific pain + business impact",
                      "Identified success metrics / ROI",
                      "Understood decision process + buyers",
                      "Addressed concerns effectively",
                      "Built value for next step"
                    ].map((criteria, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <span className="text-sm text-slate-700">{criteria}</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((n) => (
                            <div key={n} className="w-6 h-6 rounded border border-slate-300 flex items-center justify-center text-xs text-slate-400">
                              {n}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Follow-Up Tab */}
            <TabsContent value="follow-up" className="space-y-6">
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
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <Badge className="bg-red-100 text-red-700">Within 2 Hours</Badge>
                    </h4>
                    <ul className="space-y-2">
                      {followUpChecklist.within2Hours.map((item, i) => (
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
                      {followUpChecklist.within24Hours.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <Badge className="bg-blue-100 text-blue-700">Before Next Meeting</Badge>
                    </h4>
                    <ul className="space-y-2">
                      {followUpChecklist.beforeNextMeeting.map((item, i) => (
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
                    <AccordionItem value="recap" className="border rounded-lg px-4 mb-2 transition-colors hover:bg-blue-50/50 data-[state=open]:bg-blue-50/30 data-[state=open]:border-blue-300">
                      <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:transition-transform [&>svg]:duration-200">Same-Day Recap Email</AccordionTrigger>
                      <AccordionContent>
                        <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm space-y-3">
                          <p className="text-slate-500">Subject: Recap: [Your Company] & [Their Company]</p>
                          <div className="pt-3 space-y-2">
                            <p>[Name], thanks for such an open, thoughtful conversation.</p>
                            <p><strong>Core Challenges:</strong></p>
                            <p>1. [Challenge #1 in their words]<br/>2. [Challenge #2 in their words]</p>
                            <p>You shared that despite trying [failed solution], your team still can't [desired outcome]. That's because of [problem], which is costing [cost/impact].</p>
                            <p><strong>Requirements to Address:</strong></p>
                            <p>1. [Capability #1 they need]<br/>2. [Capability #2 they need]</p>
                            <p>You felt the most effective approach is [their logic]. But for this to work, you need to ensure [key questions for next call].</p>
                            <p><strong>Next Steps Before [Date] with [Names]:</strong></p>
                            <p>• I'll [your action item]<br/>• You'll [their action item]</p>
                            <p>Let me know if I missed anything. Looking forward to [next meeting].</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="warmup" className="border rounded-lg px-4 mb-2 transition-colors hover:bg-blue-50/50 data-[state=open]:bg-blue-50/30 data-[state=open]:border-blue-300">
                      <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:transition-transform [&>svg]:duration-200">Pre-Meeting Warm-Up (3 days before)</AccordionTrigger>
                      <AccordionContent>
                        <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm space-y-3">
                          <p className="text-slate-500">Subject: [Meeting Topic] - [Date]</p>
                          <div className="pt-3 space-y-2">
                            <p>[Name], excited for our call with [new stakeholders] on [date].</p>
                            <p>We plan to focus on [key topic/outcome]. Anything else you want to ensure we cover?</p>
                            <p>Highly recommend checking this out beforehand:<br/>• [Relevant resource/case study link]</p>
                            <p>See you [day]!</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="forwardable" className="border rounded-lg px-4 mb-2 transition-colors hover:bg-blue-50/50 data-[state=open]:bg-blue-50/30 data-[state=open]:border-blue-300">
                      <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:transition-transform [&>svg]:duration-200">Forwardable Email (For champion to share with exec)</AccordionTrigger>
                      <AccordionContent>
                        <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm space-y-3">
                          <p className="text-slate-500">Subject: [Internal Project Name]</p>
                          <div className="pt-3 space-y-2">
                            <p>[Champion], you mentioned your team (especially [Exec Name]) is working on [big initiative].</p>
                            <p>The goal is "[their trigger phrase]", ideally [measurable outcome].</p>
                            <p>I can almost see the headline now: "[Bold future-state headline they'd be proud of]"</p>
                            <p>To make that happen, you need to [remove this problem/roadblock].</p>
                            <p>So we built out [specific deliverable] - attached here.</p>
                            <p>Guessing [Exec Name] might want to weigh in?</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="dark" className="border rounded-lg px-4 mb-2 transition-colors hover:bg-blue-50/50 data-[state=open]:bg-blue-50/30 data-[state=open]:border-blue-300">
                      <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:transition-transform [&>svg]:duration-200">Gone-Dark Revival (When ghosted)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm space-y-3">
                            <p className="text-slate-500 font-bold">Option 1 - Short & Direct:</p>
                            <p>[Name], haven't heard from you in a bit.</p>
                            <p>Usually this means it's not a priority right now - completely fine if that's the case.</p>
                            <p>Mind letting me know so I don't bug you?</p>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm space-y-3">
                            <p className="text-slate-500 font-bold">Option 2 - Value-Add:</p>
                            <p>[Name], last we spoke, [their challenge] was a big focus.</p>
                            <p>I was just reviewing [content/resource/tool] and thought of you.</p>
                            <p>Are you still working on [related goal]? If so, check it out: [link]</p>
                            <p>From what I'm seeing, I have an idea for how you could use it.</p>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm space-y-3">
                            <p className="text-slate-500 font-bold">Option 3 - After Sending SOW/Proposal:</p>
                            <p>[Name], are we still pacing towards [goal/decision]?</p>
                            <p>Usually when I don't hear back after sending [proposal/SOW], it's because there's a conversation to be had around timing, price, or scope.</p>
                            <p>Let me know if that's it, or if something else has us on hold.</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="exec" className="border rounded-lg px-4 mb-2 transition-colors hover:bg-blue-50/50 data-[state=open]:bg-blue-50/30 data-[state=open]:border-blue-300">
                      <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:transition-transform [&>svg]:duration-200">Executive Update (No reply needed)</AccordionTrigger>
                      <AccordionContent>
                        <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm space-y-3">
                          <p className="text-slate-500">Subject: Update: [Deal Focus]</p>
                          <div className="pt-3 space-y-2">
                            <p>[Exec], we're making good progress exploring [problem/focus area].</p>
                            <p>Surprisingly, [interesting finding from working with their team].</p>
                            <p>We have [next activity] planned for next week and will keep you posted.</p>
                            <p>Feel free to join of course, but no reply needed - just keeping you in the loop.</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Quick Reminders */}
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
                        <li>• Adapt questions to their answers</li>
                        <li>• Book next step on the call</li>
                        <li>• Use their words in follow-ups</li>
                        <li>• Send recap same day</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Don't
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>• Talk too much</li>
                        <li>• Use generic questions</li>
                        <li>• Assume needs</li>
                        <li>• Be pushy</li>
                        <li>• Overpromise</li>
                        <li>• Skip to pitching</li>
                        <li>• "Just checking in" emails</li>
                        <li>• Link-stack without context</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
