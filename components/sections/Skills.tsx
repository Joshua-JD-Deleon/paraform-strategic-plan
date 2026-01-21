"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  TrendingUp,
  Lightbulb,
  Zap,
  Shield,
  Brain,
  MessageSquare,
  Database,
  Code,
  Cloud,
  Cpu
} from "lucide-react";

const skillsData = [
  {
    category: "Technical Sales Excellence",
    icon: Target,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    skills: [
      "DevOps & CI/CD Platforms",
      "Cloud Infrastructure (AWS, GCP, Azure)",
      "AI/ML Infrastructure & Solutions",
      "Platform Engineering & SRE",
      "API Integrations & Developer Tools",
      "Security & Compliance (SOC 2, FedRAMP)"
    ]
  },
  {
    category: "Enterprise Sales Methodology",
    icon: TrendingUp,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    skills: [
      "Multi-threaded Enterprise Selling",
      "MEDDPICC & Command of the Message",
      "Technical Discovery & Value Engineering",
      "POC Design & Execution",
      "Complex Deal Orchestration",
      "Strategic Account Planning"
    ]
  },
  {
    category: "Relationship Building",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    skills: [
      "C-Level Executive Engagement",
      "Engineering Leadership Credibility",
      "Cross-functional Stakeholder Management",
      "Partner Ecosystem Development",
      "Champion Identification & Enablement",
      "Long-term Strategic Partnerships"
    ]
  },
  {
    category: "Strategic Thinking",
    icon: Lightbulb,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    skills: [
      "Market & Competitive Intelligence",
      "ICP Definition & Segmentation",
      "Business Case Development",
      "ROI Modeling & Value Quantification",
      "Territory Planning & Optimization",
      "Go-to-Market Strategy"
    ]
  },
  {
    category: "Communication & Influence",
    icon: MessageSquare,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    skills: [
      "Executive Presentations & Demos",
      "Technical to Business Translation",
      "Objection Handling & Negotiation",
      "Storytelling & Case Study Delivery",
      "Written Communication (RFPs, Proposals)",
      "Virtual & In-person Meeting Mastery"
    ]
  },
  {
    category: "Execution & Results",
    icon: Zap,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    skills: [
      "Consistent Quota Attainment (120%+)",
      "Pipeline Generation & Management",
      "Rapid Ramp & Time-to-Productivity",
      "CRM Hygiene & Forecasting Accuracy",
      "Process Optimization & Best Practices",
      "Resilience & Adaptability"
    ]
  }
];

const coreStrengths = [
  {
    title: "Technical Credibility",
    description: "Deep understanding of modern software development workflows, enabling authentic conversations with engineering leaders",
    icon: Code
  },
  {
    title: "Consultative Approach",
    description: "Discovery-first methodology that uncovers true business pain and maps solutions to strategic outcomes",
    icon: Brain
  },
  {
    title: "Relationship Intelligence",
    description: "Natural ability to build trust quickly and maintain long-term partnerships across organizational hierarchies",
    icon: Shield
  },
  {
    title: "Revenue Acceleration",
    description: "Proven track record of exceeding quota through systematic pipeline generation and deal execution",
    icon: TrendingUp
  }
];

export function Skills() {
  return (
    <section className="py-6 md:py-10 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Section Header */}
          <div className="text-center mb-4 md:mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-600 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Core Competencies
            </div>
            <h2 className="text-3xl font-bold text-stone-900 md:text-4xl lg:text-5xl mb-4">
              Skills & Capabilities
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Built through enterprise B2B SaaS experience, validated by leaders, and proven through consistent results
            </p>
          </div>

          {/* Core Strengths - Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {coreStrengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border border-slate-200/50 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-blue-100">
                        <strength.icon className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-stone-900">{strength.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {strength.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Industries and Solutions Summary */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Industries Grid */}
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-4 text-center">Proven Industry Verticals</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Card className="text-center border border-slate-200/50 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                    <CardContent className="pt-4 pb-4">
                      <div className="flex justify-center mb-2">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <Database className="h-4 w-4 text-blue-600" />
                        </div>
                      </div>
                      <p className="text-xs font-semibold text-stone-900 mb-1">CPG & Food</p>
                      <Badge className="bg-blue-600 text-white text-xs font-bold">$1.1M</Badge>
                    </CardContent>
                  </Card>
                  <Card className="text-center border border-slate-200/50 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                    <CardContent className="pt-4 pb-4">
                      <div className="flex justify-center mb-2">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <Shield className="h-4 w-4 text-blue-600" />
                        </div>
                      </div>
                      <p className="text-xs font-semibold text-stone-900 mb-1">Healthcare & Life Sciences</p>
                      <Badge className="bg-blue-600 text-white text-xs font-bold">$900K</Badge>
                    </CardContent>
                  </Card>
                  <Card className="text-center border border-slate-200/50 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                    <CardContent className="pt-4 pb-4">
                      <div className="flex justify-center mb-2">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <Cpu className="h-4 w-4 text-blue-600" />
                        </div>
                      </div>
                      <p className="text-xs font-semibold text-stone-900 mb-1">AgTech & Manufacturing</p>
                      <Badge className="bg-blue-600 text-white text-xs font-bold">$600K</Badge>
                    </CardContent>
                  </Card>
                  <Card className="text-center border border-slate-200/50 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                    <CardContent className="pt-4 pb-4">
                      <div className="flex justify-center mb-2">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <TrendingUp className="h-4 w-4 text-blue-600" />
                        </div>
                      </div>
                      <p className="text-xs font-semibold text-stone-900 mb-1">Financial Services</p>
                      <Badge className="bg-blue-600 text-white text-xs font-bold">$480K</Badge>
                    </CardContent>
                  </Card>
                  <Card className="text-center border border-slate-200/50 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                    <CardContent className="pt-4 pb-4">
                      <div className="flex justify-center mb-2">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <Code className="h-4 w-4 text-blue-600" />
                        </div>
                      </div>
                      <p className="text-xs font-semibold text-stone-900 mb-1">Enterprise Technology</p>
                      <Badge className="bg-blue-600 text-white text-xs font-bold">$400K</Badge>
                    </CardContent>
                  </Card>
                  <Card className="text-center border border-slate-200/50 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                    <CardContent className="pt-4 pb-4">
                      <div className="flex justify-center mb-2">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <Database className="h-4 w-4 text-blue-600" />
                        </div>
                      </div>
                      <p className="text-xs font-semibold text-stone-900 mb-1">Retail & Foodservice</p>
                      <Badge className="bg-blue-600 text-white text-xs font-bold">$220K</Badge>
                    </CardContent>
                  </Card>
                  <Card className="text-center border border-slate-200/50 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                    <CardContent className="pt-4 pb-4">
                      <div className="flex justify-center mb-2">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <Shield className="h-4 w-4 text-blue-600" />
                        </div>
                      </div>
                      <p className="text-xs font-semibold text-stone-900 mb-1">Legal Services</p>
                      <Badge className="bg-blue-600 text-white text-xs font-bold">$180K</Badge>
                    </CardContent>
                  </Card>
                  <Card className="text-center border border-slate-200/50 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                    <CardContent className="pt-4 pb-4">
                      <div className="flex justify-center mb-2">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <Users className="h-4 w-4 text-blue-600" />
                        </div>
                      </div>
                      <p className="text-xs font-semibold text-stone-900 mb-1">Nonprofit</p>
                      <Badge className="bg-blue-600 text-white text-xs font-bold">Multi-deal</Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Product Categories */}
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-4 text-center">Solutions & Products Sold</h3>
                <div className="grid grid-cols-1 gap-3">
                  <Card className="border border-slate-200/50 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-bold text-stone-900">AI/ML & Data Analytics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5">
                        <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">AI market intelligence</Badge>
                        <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">ML infrastructure</Badge>
                        <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">Predictive analytics</Badge>
                        <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">Consumer insights</Badge>
                        <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">Research platforms</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-slate-200/50 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-bold text-stone-900">Data Engineering & Science</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5">
                        <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">Data visualization</Badge>
                        <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">Data engineering</Badge>
                        <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">Data science</Badge>
                        <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">Data privacy</Badge>
                        <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">ML modernization</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-slate-200/50 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-bold text-stone-900">Cybersecurity & Compliance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5">
                        <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">Threat detection</Badge>
                        <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">SOC 2/FedRAMP</Badge>
                        <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">Cyber AI</Badge>
                        <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">Network security</Badge>
                        <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">Compliance tools</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-slate-200/50 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-bold text-stone-900">GTM & Revenue Intelligence</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5">
                        <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">Market research</Badge>
                        <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">Competitive intel</Badge>
                        <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">Account intelligence</Badge>
                        <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">Sales enablement</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full group border border-slate-200/50 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-3 rounded-lg ${category.bgColor} group-hover:scale-110 transition-transform`}>
                        <category.icon className={`h-6 w-6 ${category.color}`} />
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-1 text-stone-900">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs font-normal bg-stone-100 text-stone-700 hover:bg-blue-100 hover:text-blue-700 transition-colors border-stone-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-stone-100/50 backdrop-blur-sm rounded-2xl p-6 border border-stone-200">
              <p className="text-sm text-stone-600 mb-2">
                What leaders say most often:
              </p>
              <p className="text-lg font-semibold text-stone-900 italic">
                "Technical depth + sales acumen + genuine relationship builder"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
