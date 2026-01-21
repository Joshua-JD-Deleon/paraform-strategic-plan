"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AIPromptCard } from "@/components/ui/ai-prompt-card";
import { Button } from "@/components/ui/button";
import { Sparkles, Lightbulb } from "lucide-react";
import { useState } from "react";

export default function Playbooks() {
  const [showPrompts, setShowPrompts] = useState(false);

  // Generic playbook data
  const expansionPlaybook = {
    targetProfile: [
      "Current customer using your core product",
      "Shows adoption signals and positive engagement",
      "Has budget and authority for additional purchases",
      "Organization has clear expansion use cases"
    ],
    discoveryQuestions: [
      "What other teams could benefit from this solution?",
      "What new use cases are emerging in your organization?",
      "How has your business evolved since initial purchase?",
      "What gaps exist in your current tech stack?"
    ],
    valueProps: [
      {
        prop: "Expanded Value Delivery",
        description: "Increase ROI by extending solution to additional teams and use cases"
      },
      {
        prop: "Operational Efficiency",
        description: "Consolidate vendors and streamline workflows across organization"
      },
      {
        prop: "Strategic Partnership",
        description: "Deepen relationship with comprehensive solution coverage"
      }
    ],
    proofPoints: [
      "Customers expanding to 3+ products see 2.5x higher retention",
      "Multi-product customers report 40% higher satisfaction scores",
      "Cross-functional adoption drives 3x increase in executive engagement"
    ]
  };

  const renewalPlaybook = {
    timeline: [
      { days: 180, action: "Renewal kickoff meeting with account team", owner: "Account Manager" },
      { days: 150, action: "Executive Business Review with customer", owner: "AM + Executive Sponsor" },
      { days: 120, action: "Renewal proposal and expansion discussion", owner: "Account Manager" },
      { days: 90, action: "Address objections, negotiate terms", owner: "AM + Legal" },
      { days: 60, action: "Contract review and approvals", owner: "AM + Contracts" },
      { days: 30, action: "Final signatures and handoff to implementation", owner: "Account Manager" }
    ],
    riskTriggers: [
      {
        trigger: "Product adoption below target threshold",
        severity: "High",
        action: "Schedule training sessions, identify barriers to adoption"
      },
      {
        trigger: "Champion has left company or changed roles",
        severity: "High",
        action: "Urgent stakeholder mapping, build new champion relationship"
      },
      {
        trigger: "No executive engagement in 90+ days",
        severity: "Medium",
        action: "Request intro via champion, prepare exec-level value summary"
      },
      {
        trigger: "Support issues trending up or unresolved",
        severity: "Medium",
        action: "Deep dive on issues, assign dedicated support for 30 days"
      },
      {
        trigger: "Competitive evaluation detected",
        severity: "High",
        action: "Competitive response, executive engagement, advisory board invitation"
      }
    ],
    savePlay: [
      "Step 1: Acknowledge the issue directly and take ownership",
      "Step 2: Conduct listening tour with all stakeholders",
      "Step 3: Document specific gaps and create action plan",
      "Step 4: Assign executive sponsor and meet weekly",
      "Step 5: Deliver quick wins to rebuild trust (30-day milestones)",
      "Step 6: Propose renewal with flexibility (shorter term, reduced scope)"
    ]
  };

  // AI Prompts
  const expansionPrompt = `Create a customized expansion playbook for [PRODUCT_NAME] selling to [TARGET_CUSTOMER].

**Context:**
- Product: [PRODUCT_NAME]
- Target Customer: [TARGET_CUSTOMER]
- Typical Expansion Path: [EXPANSION_PATH]
- Average Deal Size: [DEAL_SIZE]
- Key Buyer Personas: [BUYER_PERSONAS]

**Generate a comprehensive expansion playbook including:**

1. **Target Profile** - Characteristics of customers ready for expansion
2. **Discovery Questions** - 5-7 questions to uncover expansion opportunities
3. **Value Propositions** - 3-4 compelling value props specific to expansion
4. **Proof Points** - Customer success metrics and case studies
5. **Common Objections** - Top objections and how to address them

Make it specific to [PRODUCT_NAME] and [TARGET_CUSTOMER] industry.`;

  const renewalPrompt = `Create a customized renewal playbook for [PRODUCT_TYPE] with [CONTRACT_TERM] contracts.

**Context:**
- Product Type: [PRODUCT_TYPE]
- Contract Term: [CONTRACT_TERM]
- Customer Segment: [CUSTOMER_SEGMENT]
- Key Success Metrics: [SUCCESS_METRICS]
- Typical Renewal Rate: [RENEWAL_RATE]

**Generate a renewal playbook with:**

1. **Renewal Timeline** - Milestone actions from 180 days to renewal
2. **Risk Triggers** - Early warning signs and severity levels
3. **Health Indicators** - Metrics to track account health
4. **Save Plays** - Step-by-step recovery protocol for at-risk renewals
5. **Success Criteria** - What defines a successful renewal

Focus on proactive strategies specific to [PRODUCT_TYPE] and [CUSTOMER_SEGMENT].`;

  const objectionPrompt = `Create an objection handling guide for [PRODUCT_NAME] in the [INDUSTRY] industry.

**Context:**
- Product: [PRODUCT_NAME]
- Industry: [INDUSTRY]
- Price Point: [PRICE_POINT]
- Main Competitors: [COMPETITORS]
- Unique Value: [UNIQUE_VALUE]

**Generate objection handling framework:**

1. **Common Objections** - Top 5-7 objections you hear
2. **Response Framework** - Structured responses for each
3. **Proof Points** - Data and case studies to support responses
4. **Competitive Positioning** - How to handle competitive objections
5. **Pricing Objections** - ROI-based responses to price concerns

Make responses specific to [INDUSTRY] and [PRODUCT_NAME] positioning.`;

  const expansionBlocks = [
    { key: "PRODUCT_NAME", description: "Your product", example: "Analytics Platform" },
    { key: "TARGET_CUSTOMER", description: "Customer type", example: "Mid-market SaaS companies" },
    { key: "EXPANSION_PATH", description: "How they expand", example: "Add users, new products, new teams" },
    { key: "DEAL_SIZE", description: "Typical expansion", example: "$25K-$100K" },
    { key: "BUYER_PERSONAS", description: "Who buys expansions", example: "VP Operations, CTO" },
  ];

  const renewalBlocks = [
    { key: "PRODUCT_TYPE", description: "Product category", example: "SaaS platform" },
    { key: "CONTRACT_TERM", description: "Contract length", example: "Annual" },
    { key: "CUSTOMER_SEGMENT", description: "Customer type", example: "Enterprise B2B" },
    { key: "SUCCESS_METRICS", description: "Success indicators", example: "Usage, NPS, feature adoption" },
    { key: "RENEWAL_RATE", description: "Current rate", example: "90% GRR" },
  ];

  const objectionBlocks = [
    { key: "PRODUCT_NAME", description: "Your product" },
    { key: "INDUSTRY", description: "Target industry", example: "FinTech" },
    { key: "PRICE_POINT", description: "Pricing tier", example: "$50K-$250K annually" },
    { key: "COMPETITORS", description: "Main competitors", example: "CompanyX, CompanyY" },
    { key: "UNIQUE_VALUE", description: "Key differentiator", example: "Real-time analytics" },
  ];

  return (
    <>

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <PageHeader
          title="Sales Playbooks"
          description="Customizable frameworks for expansion and retention success"
        />

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Instructions */}
          <Card className="border-blue-200 bg-blue-50/50 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Lightbulb className="h-5 w-5" />
                Customize These Playbooks
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-blue-800">
              <p>
                These are general playbook templates. Use the AI prompts below to create
                customized versions for your specific products, customers, and sales motion.
              </p>
            </CardContent>
          </Card>

          {/* AI Prompts Toggle */}
          <div className="flex justify-center mb-8">
            <Button
              variant="outline"
              onClick={() => setShowPrompts(!showPrompts)}
              className="gap-2"
            >
              <Sparkles className="h-4 w-4" />
              {showPrompts ? "Hide" : "Show"} AI Playbook Generators
            </Button>
          </div>

          {showPrompts && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <AIPromptCard
                title="Generate Expansion Playbook"
                description="Create a customized expansion strategy"
                prompt={expansionPrompt}
                blocks={expansionBlocks}
                category="Expansion"
              />
              <AIPromptCard
                title="Generate Renewal Playbook"
                description="Build a proactive renewal framework"
                prompt={renewalPrompt}
                blocks={renewalBlocks}
                category="Renewal"
              />
              <AIPromptCard
                title="Generate Objection Handling"
                description="Develop responses to common objections"
                prompt={objectionPrompt}
                blocks={objectionBlocks}
                category="Objections"
              />
            </div>
          )}

          <Tabs defaultValue="expansion" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="expansion">Expansion Playbook</TabsTrigger>
              <TabsTrigger value="renewal">Renewal Management</TabsTrigger>
            </TabsList>

            {/* Expansion Playbook */}
            <TabsContent value="expansion" className="space-y-6">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700">Target Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {expansionPlaybook.targetProfile.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700">Discovery Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    {expansionPlaybook.discoveryQuestions.map((question, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="font-semibold text-blue-600 flex-shrink-0">{idx + 1}.</span>
                        <span className="text-slate-700">{question}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700">Value Propositions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {expansionPlaybook.valueProps.map((vp, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                        <h4 className="font-semibold text-slate-900 mb-1">{vp.prop}</h4>
                        <p className="text-sm text-slate-700">{vp.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700">Proof Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {expansionPlaybook.proofPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                        <span className="text-slate-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Renewal Playbook */}
            <TabsContent value="renewal" className="space-y-6">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700">Renewal Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {renewalPlaybook.timeline.map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="flex-shrink-0 w-24">
                          <Badge className="bg-blue-100 text-blue-700 text-sm">
                            {item.days} days
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <div className="text-slate-900 font-medium">{item.action}</div>
                          <div className="text-sm text-slate-600">Owner: {item.owner}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700">Risk Triggers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-slate-200">
                          <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Trigger</th>
                          <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Severity</th>
                          <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Action Required</th>
                        </tr>
                      </thead>
                      <tbody>
                        {renewalPlaybook.riskTriggers.map((risk, idx) => (
                          <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="py-3 px-4 text-sm text-slate-900 font-medium align-top">
                              {risk.trigger}
                            </td>
                            <td className="py-3 px-4 align-top">
                              <Badge
                                className={
                                  risk.severity === "High"
                                    ? "bg-red-100 text-red-700"
                                    : "bg-amber-100 text-amber-700"
                                }
                              >
                                {risk.severity}
                              </Badge>
                            </td>
                            <td className="py-3 px-4 text-sm text-slate-700">
                              {risk.action}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700">The Save Play</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-slate-700 font-medium">
                      When a renewal is at serious risk, execute this recovery protocol:
                    </p>
                    <ol className="space-y-3">
                      {renewalPlaybook.savePlay.map((step, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="font-semibold text-blue-600 flex-shrink-0">{step.split(':')[0]}:</span>
                          <span className="text-slate-700">{step.split(':')[1]}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Best Practices */}
          <div className="mt-12 bg-slate-100 rounded-lg p-6 border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-4">Playbook Best Practices</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h5 className="text-blue-700 font-medium mb-2">Customize to Context</h5>
                <p className="text-sm text-slate-700">
                  Adapt messaging and timing based on account health, industry, and stakeholder role
                </p>
              </div>
              <div>
                <h5 className="text-blue-700 font-medium mb-2">Document Learnings</h5>
                <p className="text-sm text-slate-700">
                  Track what works and what doesn't. Update playbooks quarterly based on win/loss data
                </p>
              </div>
              <div>
                <h5 className="text-blue-700 font-medium mb-2">Enable the Team</h5>
                <p className="text-sm text-slate-700">
                  Share successful plays across the organization. Make playbooks accessible and actionable
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
