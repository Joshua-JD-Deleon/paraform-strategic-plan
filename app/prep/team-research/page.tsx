"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Users,
  Linkedin,
  Building2,
  Target,
  MessageSquare,
  Briefcase,
  GraduationCap,
  Lightbulb,
  ExternalLink,
  Star
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  email: string;
  background: string[];
  education: string;
  linkedinUrl: string;
  talkingPoints: string[];
  questionsToAsk: string[];
  connectionPoints: string[];
  interviewRole?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Dean Shu",
    role: "Co-Founder & CEO",
    email: "dean@paraform.ai",
    education: "Harvard University (Economics & Psychology)",
    background: [
      "Co-Founder & CEO at Paraform (Jan 2024 - Present)",
      "Head of Studio at Scale AI (2022-2023)",
      "Chief of Staff to CEO at Scale AI (2021-2022)",
      "Business Operations & Strategy at Scale AI (2019-2021)",
      "Diligence at Insight Partners (2017-2019)",
      "Business Analyst at McKinsey & Company (2015-2017)"
    ],
    linkedinUrl: "https://www.linkedin.com/in/dean-shu/",
    talkingPoints: [
      "Vision for Paraform's growth and GTM strategy",
      "How founding AE role fits into company trajectory",
      "What success looks like in first 90 days",
      "His Scale AI experience with AI products",
      "McKinsey background - analytical approach"
    ],
    questionsToAsk: [
      "What did you learn at Scale AI that shaped how you're building Paraform?",
      "What's the biggest GTM challenge you're trying to solve right now?",
      "How do you see the founding AE role evolving as the company grows?",
      "What keeps you up at night about the business?"
    ],
    connectionPoints: [
      "Both have enterprise sales/strategy backgrounds",
      "Shared passion for AI transformation",
      "McKinsey analytical rigor aligns with MEDDPICC approach",
      "Scale AI experience = understands enterprise AI sales"
    ],
    interviewRole: "Will conduct Paraform Discovery call role-play as 'Sr. Director @ Affirm'"
  },
  {
    name: "Lauren Wong",
    role: "Chief of Staff",
    email: "lauren@paraform.ai",
    education: "Stanford GSB (MBA)",
    background: [
      "Chief of Staff at Paraform (Current)",
      "Strategy & Operations MBA Intern at Fora Travel",
      "Associate at CPP Investments (Relationship Investments)",
      "Analyst at CPP Investments",
      "Investment Banking Analyst at Credit Suisse"
    ],
    linkedinUrl: "https://www.linkedin.com/in/lwong96/",
    talkingPoints: [
      "Operations and strategy at early-stage startup",
      "Her transition from finance to tech",
      "How she works with sales/GTM",
      "Day-to-day at Paraform"
    ],
    questionsToAsk: [
      "What's surprised you most about going from finance to a startup?",
      "How do you see the Chief of Staff role supporting sales?",
      "What's the team culture like day-to-day?",
      "What do you wish candidates knew before joining?"
    ],
    connectionPoints: [
      "Stanford GSB - strong business fundamentals",
      "Finance background = understands metrics and ROI",
      "CPP Investments = knows enterprise decision-making"
    ]
  },
  {
    name: "Bilal Malik",
    role: "Software Engineer",
    email: "bilal@paraform.ai",
    education: "University of Windsor",
    background: [
      "Software Engineer at Paraform (Current)",
      "Previous: Zafin (Fintech)",
      "Previous: Palantir Technologies",
      "Previous: Zynga",
      "Previous: IBM"
    ],
    linkedinUrl: "https://www.linkedin.com/in/bilal-malik-15754b185/",
    talkingPoints: [
      "Technical architecture of Paraform",
      "How engineering supports sales/customer needs",
      "Palantir experience with enterprise software",
      "What makes Paraform's AI different technically"
    ],
    questionsToAsk: [
      "What's the most exciting technical challenge you're working on?",
      "How does customer feedback flow to the engineering team?",
      "What's it like building AI products vs. traditional software?",
      "How does Palantir experience shape how you think about enterprise?"
    ],
    connectionPoints: [
      "Palantir = enterprise-grade software experience",
      "Diverse tech background (IBM, Zynga, fintech)",
      "Understands building for enterprise customers"
    ]
  },
  {
    name: "Justin Lim",
    role: "Software Engineer",
    email: "justin@paraform.ai",
    education: "Harvey Mudd College",
    background: [
      "Software Engineer at Paraform (Current)",
      "Harvey Mudd - strong technical foundation",
      "Emphasized 'AI shouldn't be a black box'",
      "Focus on agentic AI processes"
    ],
    linkedinUrl: "https://www.linkedin.com/in/milsuj/",
    talkingPoints: [
      "Paraform's approach to transparent AI",
      "Agentic process architecture",
      "How the product breaks AI work into steps",
      "Engineering philosophy at Paraform"
    ],
    questionsToAsk: [
      "What does 'AI shouldn't be a black box' mean for how you build?",
      "How do you ensure AI responses are trustworthy for enterprise?",
      "What's the agentic architecture approach at Paraform?",
      "What excites you most about the product roadmap?"
    ],
    connectionPoints: [
      "Harvey Mudd = elite technical education",
      "Philosophy on transparent AI = great for enterprise trust",
      "Agentic AI = cutting edge approach"
    ]
  },
  {
    name: "David Burton",
    role: "Team Member",
    email: "david@paraform.ai",
    education: "University of Michigan - Ross School of Business",
    background: [
      "Currently at Paraform",
      "Michigan Ross MBA/Business background",
      "Based in San Francisco"
    ],
    linkedinUrl: "https://www.linkedin.com/in/david-burton-2b992766/",
    talkingPoints: [
      "His role and responsibilities at Paraform",
      "Business perspective on the product",
      "Cross-functional collaboration"
    ],
    questionsToAsk: [
      "What brought you to Paraform?",
      "What's your role in the company?",
      "What do you enjoy most about working here?",
      "What would make a founding AE successful in your view?"
    ],
    connectionPoints: [
      "Michigan Ross = strong business school",
      "Business background complements technical team"
    ]
  }
];

const companyInfo = {
  name: "Paraform",
  founded: "2023",
  stage: "Seed Stage ($2.9M led by General Catalyst)",
  headquarters: "San Francisco, CA",
  teamSize: "2-10 employees",
  coFounders: "Dean Shu & Michael Chen",
  investors: ["General Catalyst"],
  product: "AI-powered RFP response platform",
  culture: [
    "Move fast, iterate quickly",
    "AI shouldn't be a black box",
    "Customer-obsessed",
    "Small but mighty team"
  ],
  recentNews: [
    "3x revenue growth",
    "Hiring US-based generalist engineers",
    "Focus on agentic AI architecture"
  ]
};

export default function TeamResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
              Know Your Audience
            </Badge>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Paraform Team Research
            </h1>
            <p className="text-slate-600">
              Real LinkedIn profiles and backgrounds for your interviewers
            </p>
          </div>

          {/* Company Overview */}
          <Card className="mb-8 border border-slate-200/50 shadow-sm">
            <CardHeader className="py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">Paraform Company Intel</CardTitle>
                  <p className="text-sm text-slate-500">Key facts about the company</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-sm text-slate-900 mb-3">Company Facts</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Founded:</span>
                      <span className="text-slate-900 font-medium">{companyInfo.founded}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Stage:</span>
                      <span className="text-slate-900 font-medium">{companyInfo.stage}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Co-Founders:</span>
                      <span className="text-slate-900 font-medium">{companyInfo.coFounders}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">HQ:</span>
                      <span className="text-slate-900 font-medium">{companyInfo.headquarters}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Team:</span>
                      <span className="text-slate-900 font-medium">{companyInfo.teamSize}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Lead Investor:</span>
                      <span className="text-slate-900 font-medium">General Catalyst</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-900 mb-3">Recent News & Culture</h4>
                  <div className="space-y-2 mb-4">
                    {companyInfo.recentNews.map((news, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-emerald-700">
                        <Star className="h-3 w-3 text-emerald-500" />
                        {news}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {companyInfo.culture.map((value, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {value}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Members */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Users className="h-5 w-5 text-slate-600" />
              Your Interviewers
            </h2>

            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`border transition-all duration-300 shadow-sm hover:shadow-md ${
                  member.interviewRole ? 'border-red-200 bg-red-50/20' : 'border-slate-200/50 hover:border-blue-300'
                }`}>
                  <CardHeader className="py-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg">{member.name}</CardTitle>
                            {member.interviewRole && (
                              <Badge variant="destructive" className="text-xs">Key Interviewer</Badge>
                            )}
                          </div>
                          <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                          <p className="text-xs text-slate-500">{member.email}</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={() => window.open(member.linkedinUrl, '_blank')}
                      >
                        <Linkedin className="h-4 w-4" />
                        <span className="hidden sm:inline">LinkedIn</span>
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                    {member.interviewRole && (
                      <div className="mt-2 p-2 bg-red-100 border border-red-200 rounded-lg">
                        <p className="text-sm text-red-800 font-medium">
                          <Target className="h-4 w-4 inline mr-1" />
                          {member.interviewRole}
                        </p>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Education & Background */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 mb-2 flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-slate-500" />
                          Education
                        </h4>
                        <p className="text-sm text-slate-700">{member.education}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 mb-2 flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-slate-500" />
                          Background
                        </h4>
                        <ul className="space-y-1">
                          {member.background.slice(0, 4).map((item, i) => (
                            <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Talking Points & Questions */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <h4 className="font-semibold text-sm text-blue-900 mb-2 flex items-center gap-2">
                          <Target className="h-4 w-4" />
                          Topics to Discuss
                        </h4>
                        <ul className="space-y-1">
                          {member.talkingPoints.map((point, i) => (
                            <li key={i} className="text-xs text-blue-800 flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                        <h4 className="font-semibold text-sm text-emerald-900 mb-2 flex items-center gap-2">
                          <MessageSquare className="h-4 w-4" />
                          Questions to Ask
                        </h4>
                        <ul className="space-y-1">
                          {member.questionsToAsk.map((q, i) => (
                            <li key={i} className="text-xs text-emerald-800 flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                              {q}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Connection Points */}
                    <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                      <h4 className="font-semibold text-sm text-amber-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4" />
                        Connection Points
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.connectionPoints.map((point, i) => (
                          <Badge key={i} className="bg-amber-100 text-amber-800 border-amber-200 text-xs">
                            {point}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pro Tips */}
          <Card className="mt-8 border border-slate-200/50 shadow-sm">
            <CardHeader className="py-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-slate-600" />
                Research Pro Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="font-medium text-sm text-slate-900 mb-1">Check Recent Posts</p>
                  <p className="text-xs text-slate-600">See what they&apos;re sharing and commenting on LinkedIn</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="font-medium text-sm text-slate-900 mb-1">Note Commonalities</p>
                  <p className="text-xs text-slate-600">Shared connections, schools, companies, or interests</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="font-medium text-sm text-slate-900 mb-1">Reference Specifics</p>
                  <p className="text-xs text-slate-600">&quot;I saw you worked at Palantir&quot; builds instant rapport</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
