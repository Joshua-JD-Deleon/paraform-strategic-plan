"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AIPromptCard } from "@/components/ui/ai-prompt-card";
import { Button } from "@/components/ui/button";
import { Sparkles, Lightbulb } from "lucide-react";
import { useState } from "react";

export default function Prioritization() {
  const [showPrompts, setShowPrompts] = useState(false);

  const healthMetrics = [
    { name: "Product Adoption", weight: "25%", description: "Usage depth, feature utilization, ROI realized" },
    { name: "Stakeholder Engagement", weight: "25%", description: "Champion strength, exec access, decision-maker relationships" },
    { name: "Value Realization", weight: "20%", description: "Documented outcomes, case studies, testimonials" },
    { name: "Relationship Quality", weight: "15%", description: "Response time, satisfaction scores, engagement" },
    { name: "Expansion Signals", weight: "15%", description: "New use cases, budget availability, growth initiatives" }
  ];

  const healthTiers = [
    { tier: "Green", range: "80-100", color: "bg-emerald-100 text-emerald-700 border-emerald-300", action: "Nurture and expand" },
    { tier: "Yellow", range: "60-79", color: "bg-amber-100 text-amber-700 border-amber-300", action: "Engage proactively" },
    { tier: "Red", range: "0-59", color: "bg-red-100 text-red-700 border-red-300", action: "Immediate intervention" }
  ];

  const matrixPrompt = `Create a customized account prioritization framework for [ROLE_TITLE] at [COMPANY_NAME].

**Context:**
- Role: [ROLE_TITLE]
- Company: [COMPANY_NAME]
- Portfolio Size: [PORTFOLIO_SIZE]
- Industry: [INDUSTRY]
- Key Metrics: [KEY_METRICS]

**Generate a 2x2 prioritization matrix with:**
1. Four quadrants based on Risk (High/Low) and Opportunity (High/Low)
2. Specific criteria for each quadrant relevant to [INDUSTRY]
3. Recommended time allocation percentages
4. Engagement strategies for each quadrant
5. Example actions for accounts in each category

**Focus on:**
- Industry-specific risk indicators
- Growth signals relevant to [PRODUCTS]
- Practical engagement cadences
- Resource allocation best practices`;

  const scorecardPrompt = `Create a customized Account Health Scorecard for [ROLE_TITLE] managing [PRODUCT_TYPE] accounts.

**Context:**
- Products: [PRODUCT_TYPE]
- Customer Type: [CUSTOMER_TYPE]
- Key Success Metrics: [SUCCESS_METRICS]
- Contract Terms: [CONTRACT_TERMS]

**Generate:**
1. 5-7 weighted health metrics specific to [PRODUCT_TYPE]
2. Scoring criteria for each metric (0-100)
3. Data sources to track each metric
4. Threshold definitions for Green/Yellow/Red health
5. Action triggers for each health tier

Make the scorecard actionable and measurable with clear definitions.`;

  const matrixBlocks = [
    { key: "ROLE_TITLE", description: "Your role", example: "Enterprise CSM" },
    { key: "COMPANY_NAME", description: "Company name" },
    { key: "PORTFOLIO_SIZE", description: "Number of accounts", example: "25 accounts" },
    { key: "INDUSTRY", description: "Target industry", example: "FinTech" },
    { key: "KEY_METRICS", description: "Success metrics", example: "NRR, retention, expansion" },
  ];

  const scorecardBlocks = [
    { key: "ROLE_TITLE", description: "Your role" },
    { key: "PRODUCT_TYPE", description: "Product category", example: "SaaS analytics platform" },
    { key: "CUSTOMER_TYPE", description: "Customer segment", example: "Mid-market B2B" },
    { key: "SUCCESS_METRICS", description: "What defines success", example: "MAU, feature adoption, NPS" },
    { key: "CONTRACT_TERMS", description: "Contract type", example: "Annual subscription" },
  ];

  return (
    <>

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <PageHeader
          title="Account Prioritization Framework"
          description="Data-driven approach to allocate time and resources effectively"
        />

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Instructions */}
          <Card className="border-blue-200 bg-blue-50/50 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Lightbulb className="h-5 w-5" />
                Customize This Framework
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-blue-800">
              <p>
                This is a general prioritization framework. Use the AI prompts below to generate
                a customized version for your specific role, industry, and products.
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
              {showPrompts ? "Hide" : "Show"} AI Customization Prompts
            </Button>
          </div>

          {showPrompts && (
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <AIPromptCard
                title="Customize Prioritization Matrix"
                description="Generate a 2x2 matrix tailored to your portfolio"
                prompt={matrixPrompt}
                blocks={matrixBlocks}
                category="Prioritization"
              />
              <AIPromptCard
                title="Customize Health Scorecard"
                description="Create metrics specific to your products"
                prompt={scorecardPrompt}
                blocks={scorecardBlocks}
                category="Health Scoring"
              />
            </div>
          )}

          <div className="space-y-12">
            {/* 2x2 Matrix */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Risk/Opportunity Matrix</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* High Risk / High Opportunity */}
                <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-blue-50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl text-blue-700">Growth Priority</CardTitle>
                      <Badge className="bg-blue-600 text-white">40% Time</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm font-medium text-slate-600">
                      High Risk / High Opportunity
                    </div>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                        <span>Renewals at risk but high expansion potential</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                        <span>Weekly exec-level engagement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                        <span>Quarterly business reviews</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                        <span>Proactive risk mitigation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Low Risk / High Opportunity */}
                <Card className="border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-teal-50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl text-emerald-700">Strategic Nurture</CardTitle>
                      <Badge className="bg-emerald-600 text-white">25% Time</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm font-medium text-slate-600">
                      Low Risk / High Opportunity
                    </div>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                        <span>Healthy accounts with expansion potential</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                        <span>Bi-weekly touchpoints</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                        <span>Focus on new use cases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                        <span>Cross-sell/upsell playbooks</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* High Risk / Low Opportunity */}
                <Card className="border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-blue-50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl text-amber-700">Triage Mode</CardTitle>
                      <Badge className="bg-amber-600 text-white">25% Time</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm font-medium text-slate-600">
                      High Risk / Low Opportunity
                    </div>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                        <span>At-risk renewals, limited expansion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                        <span>Emergency intervention protocols</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                        <span>Secure renewal first</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                        <span>Consider account fit</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Low Risk / Low Opportunity */}
                <Card className="border-2 border-slate-300 bg-gradient-to-br from-slate-50 to-gray-50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl text-slate-700">Steady State</CardTitle>
                      <Badge className="bg-slate-600 text-white">10% Time</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm font-medium text-slate-600">
                      Low Risk / Low Opportunity
                    </div>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 flex-shrink-0" />
                        <span>Stable accounts with limited expansion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 flex-shrink-0" />
                        <span>Monthly check-ins</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 flex-shrink-0" />
                        <span>Automated touchpoints</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 flex-shrink-0" />
                        <span>Nurture for future growth</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Account Health Scorecard */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-700">Account Health Scorecard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-slate-700">
                    Each account receives a health score (0-100) based on weighted metrics across five key dimensions.
                    This data-driven approach ensures consistent prioritization and resource allocation.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-slate-200">
                          <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Metric</th>
                          <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Weight</th>
                          <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Key Indicators</th>
                        </tr>
                      </thead>
                      <tbody>
                        {healthMetrics.map((metric, idx) => (
                          <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="py-3 px-4 text-sm text-slate-900 font-medium">{metric.name}</td>
                            <td className="py-3 px-4">
                              <Badge className="bg-blue-100 text-blue-700">{metric.weight}</Badge>
                            </td>
                            <td className="py-3 px-4 text-sm text-slate-700">{metric.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health Tiers */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-700">Health Score Tiers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {healthTiers.map((tier, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <Badge className={`${tier.color} text-base px-4 py-2 min-w-[100px] text-center`}>
                        {tier.tier}
                      </Badge>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900">Score: {tier.range}</div>
                        <div className="text-sm text-slate-700">Action: {tier.action}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Time Allocation Guide */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-700">Strategic Time Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                    <div className="text-sm font-medium text-slate-900">Growth Priority</div>
                    <div className="text-xs text-slate-600 mt-1">High risk, high reward</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">25%</div>
                    <div className="text-sm font-medium text-slate-900">Strategic Nurture</div>
                    <div className="text-xs text-slate-600 mt-1">Low risk expansion</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-amber-600 mb-2">25%</div>
                    <div className="text-sm font-medium text-slate-900">Triage Mode</div>
                    <div className="text-xs text-slate-600 mt-1">Save at-risk accounts</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-slate-600 mb-2">10%</div>
                    <div className="text-sm font-medium text-slate-900">Steady State</div>
                    <div className="text-xs text-slate-600 mt-1">Maintain relationships</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Framework Benefits */}
            <div className="bg-slate-100 rounded-lg p-6 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-4">Why This Framework Works</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="text-blue-700 font-medium mb-2">Data-Driven</h5>
                  <p className="text-sm text-slate-700">
                    Removes bias from prioritization decisions with objective, weighted scoring
                  </p>
                </div>
                <div>
                  <h5 className="text-blue-700 font-medium mb-2">Time Efficient</h5>
                  <p className="text-sm text-slate-700">
                    Allocates resources to highest-impact activities based on risk and opportunity
                  </p>
                </div>
                <div>
                  <h5 className="text-blue-700 font-medium mb-2">Predictable</h5>
                  <p className="text-sm text-slate-700">
                    Creates consistent customer experience and enables accurate revenue forecasting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
