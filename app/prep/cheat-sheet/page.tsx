"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Users,
  DollarSign,
  Shield,
  Zap,
  Target,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  Award,
  Brain
} from "lucide-react";

export default function CheatSheetPage() {
  const paraformQuickFacts = [
    { label: "Founded", value: "AI collaboration intelligence platform" },
    { label: "Stage", value: "Early-stage, VC-backed" },
    { label: "Product", value: "AI-powered RFP & questionnaire management" },
    { label: "Differentiator", value: "Agent-based AI + live integrations" },
    { label: "Pricing", value: "By concurrent projects, unlimited seats" },
    { label: "Security", value: "SOC 2 Type 2, ZDR with AI providers" },
  ];

  const roleQuickFacts = [
    { label: "Title", value: "Founding Account Executive" },
    { label: "Position", value: "First sales hire" },
    { label: "Focus", value: "Full-cycle, mid-market B2B SaaS" },
    { label: "Expectation", value: "Build playbook + hit quota" },
    { label: "Location", value: "Hybrid, 3+ days in office" },
    { label: "Reports to", value: "Founders/leadership" },
  ];

  const interviewStructure = {
    virtual: [
      { session: "Motion AI Discovery + Demo", duration: "30 min + 15 min Q&A", note: "Consumer product" },
      { session: "Paraform Discovery Call", duration: "30 min + 15 min Q&A", note: "NO DEMO - Discovery only" }
    ],
    inPerson: [
      { session: "Team Lunch", duration: "45 min", note: "Casual, build rapport" },
      { session: "Team Interview", duration: "30 min", note: "Without Dean" },
      { session: "Dean Check-in", duration: "15 min", note: "Close strong" }
    ]
  };

  const keyNumbers = [
    { metric: "Time Savings", value: "70%+", context: "vs legacy RFP software" },
    { metric: "Starting Price", value: "$29,500", context: "per year, 5 projects" },
    { metric: "Customers", value: "Multiple public cos", context: "Affirm, Qualys, Braze" },
    { metric: "Evaluated by", value: "2-4 platforms", context: "before choosing Paraform" },
  ];

  const discoveryScenario = {
    prospect: "Dean Shu",
    title: "Sr. Director of Enterprise Sales",
    company: "Affirm",
    companyInfo: "NASDAQ: AFRM, ~$1.7B revenue, BNPL",
    source: "Inbound via email form fill",
    constraint: "Discovery ONLY - No demo"
  };

  const meddpiccQuick = [
    { letter: "M", word: "Metrics", question: "How many RFPs? How long to complete?" },
    { letter: "E", word: "Economic Buyer", question: "Who controls the budget?" },
    { letter: "D", word: "Decision Criteria", question: "What's most important to you?" },
    { letter: "D", word: "Decision Process", question: "How have you purchased tools before?" },
    { letter: "P", word: "Paper Process", question: "What's procurement look like?" },
    { letter: "I", word: "Identify Pain", question: "What's the most frustrating part?" },
    { letter: "C", word: "Champion", question: "Who would advocate internally?" },
    { letter: "C", word: "Competition", question: "What alternatives are you considering?" },
  ];

  const topQuestions = [
    { question: "Why Paraform?", answer: "Market timing + Product differentiation + Building opportunity" },
    { question: "Why you?", answer: "Full-cycle experience + Builder mentality + AI sales experience" },
    { question: "First 90 days?", answer: "30: Learn | 60: Build & test | 90: Optimize & scale" },
    { question: "Startup concern?", answer: "PMF exists, it's the opportunity not the risk" },
  ];

  const closingReminders = [
    "Ask for the job explicitly",
    "Reinforce excitement without desperation",
    "Ask about next steps and timeline",
    "Offer to provide references if helpful"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-900 to-emerald-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-teal-400/20 text-teal-100 border-teal-400/30 mb-4">
              Quick Reference
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Cheat Sheet</h1>
            <p className="text-teal-100/80">
              Everything at a glance - review before your interview
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Top Row - Quick Facts */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="py-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-purple-600" />
                  Paraform Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {paraformQuickFacts.map((fact, index) => (
                    <div key={index} className="flex justify-between items-center py-1 border-b border-slate-100 last:border-0">
                      <span className="text-sm text-slate-500">{fact.label}</span>
                      <span className="text-sm font-medium text-slate-900">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="py-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Role Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {roleQuickFacts.map((fact, index) => (
                    <div key={index} className="flex justify-between items-center py-1 border-b border-slate-100 last:border-0">
                      <span className="text-sm text-slate-500">{fact.label}</span>
                      <span className="text-sm font-medium text-slate-900">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Numbers */}
          <Card>
            <CardHeader className="py-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                Key Numbers to Know
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {keyNumbers.map((item, index) => (
                  <div key={index} className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{item.value}</div>
                    <div className="text-sm font-medium text-slate-900">{item.metric}</div>
                    <div className="text-xs text-slate-500">{item.context}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Interview Structure */}
          <Card>
            <CardHeader className="py-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-amber-600" />
                Interview Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Badge className="bg-purple-100 text-purple-700">Virtual - 1.5 hrs</Badge>
                  </h4>
                  <div className="space-y-2">
                    {interviewStructure.virtual.map((item, index) => (
                      <div key={index} className="p-2 bg-purple-50 rounded border border-purple-200">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm text-slate-900">{item.session}</span>
                          <Badge variant="outline" className="text-xs">{item.duration}</Badge>
                        </div>
                        <span className="text-xs text-purple-600">{item.note}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Badge className="bg-amber-100 text-amber-700">In-Person - 1.5 hrs</Badge>
                  </h4>
                  <div className="space-y-2">
                    {interviewStructure.inPerson.map((item, index) => (
                      <div key={index} className="p-2 bg-amber-50 rounded border border-amber-200">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm text-slate-900">{item.session}</span>
                          <Badge variant="outline" className="text-xs">{item.duration}</Badge>
                        </div>
                        <span className="text-xs text-amber-600">{item.note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Discovery Scenario */}
          <Card className="border-2 border-red-200 bg-red-50">
            <CardHeader className="py-4">
              <CardTitle className="text-lg flex items-center gap-2 text-red-800">
                <AlertTriangle className="h-5 w-5" />
                Paraform Discovery Scenario
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <span className="text-xs text-red-600">Prospect</span>
                  <p className="font-semibold text-red-900">{discoveryScenario.prospect}</p>
                </div>
                <div>
                  <span className="text-xs text-red-600">Title</span>
                  <p className="font-semibold text-red-900">{discoveryScenario.title}</p>
                </div>
                <div>
                  <span className="text-xs text-red-600">Company</span>
                  <p className="font-semibold text-red-900">{discoveryScenario.company}</p>
                </div>
                <div>
                  <span className="text-xs text-red-600">Company Info</span>
                  <p className="font-semibold text-red-900 text-sm">{discoveryScenario.companyInfo}</p>
                </div>
                <div>
                  <span className="text-xs text-red-600">Source</span>
                  <p className="font-semibold text-red-900 text-sm">{discoveryScenario.source}</p>
                </div>
                <div className="bg-red-200 rounded p-2">
                  <span className="text-xs text-red-800">CRITICAL</span>
                  <p className="font-bold text-red-900">{discoveryScenario.constraint}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* MEDDPICC Quick Reference */}
          <Card>
            <CardHeader className="py-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Brain className="h-5 w-5 text-emerald-600" />
                MEDDPICC Quick Reference
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-2">
                {meddpiccQuick.map((item, index) => (
                  <div key={index} className="p-2 bg-slate-50 rounded border">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-6 h-6 rounded bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                        {item.letter}
                      </span>
                      <span className="font-medium text-sm text-slate-900">{item.word}</span>
                    </div>
                    <p className="text-xs text-slate-500 italic">"{item.question}"</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Q&A */}
          <Card>
            <CardHeader className="py-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-5 w-5 text-purple-600" />
                Top Questions - Quick Answers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topQuestions.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-2 bg-slate-50 rounded">
                    <Badge className="bg-purple-100 text-purple-700 flex-shrink-0">{item.question}</Badge>
                    <span className="text-sm text-slate-700">{item.answer}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Closing Reminders */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader className="py-4">
              <CardTitle className="text-lg flex items-center gap-2 text-green-800">
                <Award className="h-5 w-5" />
                Closing Reminders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-3">
                {closingReminders.map((reminder, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-green-700">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                    {reminder}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Final Note */}
          <Card className="bg-purple-900 text-white">
            <CardContent className="py-6 text-center">
              <p className="text-lg font-medium mb-2">You've prepared. You're ready.</p>
              <p className="text-purple-200">
                Be yourself. Show curiosity. Ask for the job.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
