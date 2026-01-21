"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building2,
  Zap,
  Shield,
  Users,
  Target,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  DollarSign,
  Brain,
  Link,
  FileText,
  MessageSquare
} from "lucide-react";

export default function ProductIntelPage() {
  const productOverview = {
    tagline: "AI-powered platform for RFP and questionnaire management",
    description: "Paraform helps GTM teams respond to RFPs, security questionnaires, and compliance documents faster and more accurately using AI agents.",
    keyDifferentiators: [
      {
        title: "Agent-Based AI",
        description: "Not just AI-assisted, but AI that does the work. Multiple specialized agents handle different aspects of response generation.",
        icon: Brain
      },
      {
        title: "Live Integrations",
        description: "Connects directly to GDrive, SharePoint, Confluence, Seismic, Highspot - no need to maintain a separate content library.",
        icon: Link
      },
      {
        title: "Transparency",
        description: "Shows exact sources, confidence levels, and AI reasoning. Opens the 'black box' so users can trust and verify responses.",
        icon: CheckCircle2
      },
      {
        title: "Unlimited Seats",
        description: "No per-seat pricing. Entire organization can access - removes artificial limits on collaboration.",
        icon: Users
      }
    ]
  };

  const howItWorks = [
    {
      step: 1,
      title: "Upload RFP/Questionnaire",
      description: "User uploads the document (Excel, Word, PDF). Paraform extracts and structures the questions."
    },
    {
      step: 2,
      title: "AI Semantic Search",
      description: "First, Paraform matches questions to approved Q&A library answers using semantic (not keyword) search."
    },
    {
      step: 3,
      title: "AI Generation",
      description: "For remaining questions, AI agents pull from connected sources (docs, product docs, past responses) to generate first drafts."
    },
    {
      step: 4,
      title: "Review & Refine",
      description: "Users review with full transparency - see sources, confidence, reasoning. Edit as needed."
    },
    {
      step: 5,
      title: "Export",
      description: "Export completed responses back to original format. Content loop: new approved answers can be saved to library."
    }
  ];

  const competitorComparison = [
    {
      competitor: "Loopio",
      positioning: "Legacy RFP software",
      weaknesses: [
        "Seat-based pricing limits adoption",
        "AI features don't work effectively",
        "Content library requires manual maintenance"
      ],
      paraformAdvantage: "Better AI, unlimited seats, live integrations"
    },
    {
      competitor: "Responsive (formerly RFPIO)",
      positioning: "Enterprise RFP management",
      weaknesses: [
        "Complex, heavy implementation",
        "AI is bolted on, not native",
        "High total cost of ownership"
      ],
      paraformAdvantage: "Faster time-to-value, better AI quality, simpler UX"
    },
    {
      competitor: "Seismic / Highspot",
      positioning: "Sales enablement platforms",
      weaknesses: [
        "RFP is a feature, not core focus",
        "Not purpose-built for questionnaire workflows",
        "AI capabilities limited"
      ],
      paraformAdvantage: "Paraform integrates with these - complementary, not competitive"
    },
    {
      competitor: "Manual (Docs/Sheets)",
      positioning: "Status quo",
      weaknesses: [
        "No automation",
        "Content scattered and outdated",
        "No version control or collaboration"
      ],
      paraformAdvantage: "70%+ time savings, centralized content, AI-powered"
    }
  ];

  const securityFeatures = [
    {
      feature: "SOC 2 Type 2 Compliant",
      description: "Annual third-party audits verify security controls"
    },
    {
      feature: "Zero Data Retention (ZDR)",
      description: "Custom agreements with AI model providers - customer data not used for training"
    },
    {
      feature: "No Cross-Customer Data Sharing",
      description: "Your data is only used to improve your responses"
    },
    {
      feature: "Trusted by Security Companies",
      description: "Qualys, Recorded Future, and other cybersecurity companies use Paraform"
    }
  ];

  const pricing = {
    model: "Concurrent projects, not seats",
    tiers: [
      { projects: "5", price: "$29,500/year", users: "Unlimited" },
      { projects: "10", price: "$37,500/year", users: "Unlimited" },
      { projects: "15+", price: "Custom", users: "Unlimited" }
    ],
    notes: [
      "No per-seat fees",
      "No implementation fees",
      "Pricing may vary by customer"
    ]
  };

  const customerProof = [
    { name: "Affirm", type: "Public (NASDAQ: AFRM)", detail: "~$1B revenue, evaluated 2 platforms" },
    { name: "Philips", type: "Fortune 500 (NYSE: PHG)", detail: "€18B annual sales" },
    { name: "Qualys", type: "Public (NASDAQ: QLYS)", detail: "Cybersecurity, >$550M revenue" },
    { name: "Braze", type: "Public (NASDAQ: BRZE)", detail: ">$3B market cap" },
    { name: "Ramp", type: "Series E", detail: "~$16B valuation, evaluated 4 platforms" },
    { name: "Navan", type: "Series G", detail: "~$10B valuation" },
    { name: "Contentful", type: "Series F", detail: "$3B valuation CMS company" },
    { name: "Recorded Future", type: "Cybersecurity", detail: "$350M+ ARR, 1800+ clients" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-400/20 text-blue-100 border-blue-400/30 mb-4">
              Know Your Product
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Paraform Product Intel</h1>
            <p className="text-blue-100/80">
              Everything you need to know about what you'll be selling
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="how">How It Works</TabsTrigger>
              <TabsTrigger value="competition">Competition</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="customers">Customers</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-blue-600" />
                      What is Paraform?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-slate-700 mb-6">{productOverview.description}</p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {productOverview.keyDifferentiators.map((diff, index) => (
                        <div key={index} className="p-4 bg-slate-50 rounded-lg border">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                              <diff.icon className="h-5 w-5 text-blue-600" />
                            </div>
                            <h4 className="font-semibold text-slate-900">{diff.title}</h4>
                          </div>
                          <p className="text-sm text-slate-600">{diff.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Pricing Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      Pricing Model
                    </CardTitle>
                    <CardDescription>Based on concurrent projects, not seats</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      {pricing.tiers.map((tier, index) => (
                        <div key={index} className="text-center p-4 bg-slate-50 rounded-lg border">
                          <div className="text-3xl font-bold text-blue-600 mb-1">{tier.projects}</div>
                          <div className="text-sm text-slate-500 mb-2">concurrent projects</div>
                          <div className="font-semibold text-slate-900">{tier.price}</div>
                          <div className="text-xs text-green-600">{tier.users} users</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {pricing.notes.map((note, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {note}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* How It Works Tab */}
            <TabsContent value="how">
              <Card>
                <CardHeader>
                  <CardTitle>How Paraform Works</CardTitle>
                  <CardDescription>The workflow from RFP upload to completed response</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {howItWorks.map((step, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">{step.title}</h4>
                          <p className="text-sm text-slate-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Competition Tab */}
            <TabsContent value="competition">
              <div className="space-y-6">
                {competitorComparison.map((comp, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-red-600" />
                          {comp.competitor}
                        </CardTitle>
                        <Badge variant="outline">{comp.positioning}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold text-red-700 mb-2 flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4" />
                            Their Weaknesses
                          </h4>
                          <ul className="space-y-1">
                            {comp.weaknesses.map((weakness, wIndex) => (
                              <li key={wIndex} className="text-sm text-slate-600 flex items-start gap-2">
                                <span className="text-red-400">-</span>
                                {weakness}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-green-700 mb-2 flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            Paraform Advantage
                          </h4>
                          <p className="text-sm text-green-700 bg-green-50 p-3 rounded-lg border border-green-200">
                            {comp.paraformAdvantage}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    Security & Trust
                  </CardTitle>
                  <CardDescription>Critical for enterprise sales - know this cold</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {securityFeatures.map((feature, index) => (
                      <div key={index} className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          <h4 className="font-semibold text-green-800">{feature.feature}</h4>
                        </div>
                        <p className="text-sm text-green-700">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Customers Tab */}
            <TabsContent value="customers">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    Customer Proof Points
                  </CardTitle>
                  <CardDescription>Logos and social proof to reference</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {customerProof.map((customer, index) => (
                      <div key={index} className="p-4 bg-slate-50 rounded-lg border text-center">
                        <h4 className="font-bold text-slate-900 mb-1">{customer.name}</h4>
                        <Badge variant="outline" className="text-xs mb-2">{customer.type}</Badge>
                        <p className="text-xs text-slate-500">{customer.detail}</p>
                      </div>
                    ))}
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
