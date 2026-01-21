"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EditableContent } from "@/components/ui/editable-content";
import { accountPlanTemplate, accountPlanPrompt, accountPlanPromptBlocks } from "@/lib/data/account-plan";
import { Printer, Lightbulb } from "lucide-react";

export default function AccountPlan() {
  const plan = accountPlanTemplate;

  const handlePrint = () => {
    window.print();
  };

  const getHealthColor = (health: string) => {
    return health === "green"
      ? "bg-emerald-100 text-emerald-700 border-emerald-300"
      : health === "yellow"
      ? "bg-amber-100 text-amber-700 border-amber-300"
      : "bg-red-100 text-red-700 border-red-300";
  };

  const getStatusColor = (status: string) => {
    return status === "Scheduled" || status === "In Progress"
      ? "bg-blue-100 text-blue-700"
      : status === "Not Started"
      ? "bg-slate-100 text-slate-700"
      : "bg-emerald-100 text-emerald-700";
  };

  const getRelationshipColor = (relationship: string) => {
    return relationship === "Strong"
      ? "text-emerald-700"
      : relationship === "Moderate"
      ? "text-amber-700"
      : "text-slate-600";
  };

  // Default content strings for editable sections
  const businessContextDefault = `Customer Priorities:
• [CUSTOMER_PRIORITY_1]
• [CUSTOMER_PRIORITY_2]
• [CUSTOMER_PRIORITY_3]
• [CUSTOMER_PRIORITY_4]

How Your Products Help:
• [HOW_YOUR_PRODUCT_HELPS_1]
• [HOW_YOUR_PRODUCT_HELPS_2]
• [HOW_YOUR_PRODUCT_HELPS_3]
• [HOW_YOUR_PRODUCT_HELPS_4]`;

  const stakeholdersDefault = `| Name | Title | Role | Relationship | Engagement Plan |
|------|-------|------|--------------|-----------------|
| [STAKEHOLDER_1_NAME] | [STAKEHOLDER_1_TITLE] | Economic Buyer | Strong | [ENGAGEMENT_PLAN_1] |
| [STAKEHOLDER_2_NAME] | [STAKEHOLDER_2_TITLE] | Champion | Strong | [ENGAGEMENT_PLAN_2] |
| [STAKEHOLDER_3_NAME] | [STAKEHOLDER_3_TITLE] | User | Moderate | [ENGAGEMENT_PLAN_3] |
| [STAKEHOLDER_4_NAME] | [STAKEHOLDER_4_TITLE] | Exec Sponsor | Not Engaged | [ENGAGEMENT_PLAN_4] |
| [STAKEHOLDER_5_NAME] | [STAKEHOLDER_5_TITLE] | Expansion Target | Cold | [ENGAGEMENT_PLAN_5] |`;

  const currentStateDefault = `Product: [PRODUCT_1]
Value Delivered: [VALUE_DELIVERED_1]
Proof Point: [PROOF_POINT_1]

Product: [PRODUCT_2]
Value Delivered: [VALUE_DELIVERED_2]
Proof Point: [PROOF_POINT_2]`;

  const whitespaceDefault = `| Opportunity | Product | Target Buyer | Est. Value | Timing |
|------------|---------|--------------|------------|--------|
| [EXPANSION_OPPORTUNITY_1] | [EXPANSION_PRODUCT_1] | [EXPANSION_BUYER_1] | [EXPANSION_VALUE_1] | Q1 |
| [EXPANSION_OPPORTUNITY_2] | [EXPANSION_PRODUCT_2] | [EXPANSION_BUYER_2] | [EXPANSION_VALUE_2] | Q2 |
| [EXPANSION_OPPORTUNITY_3] | [EXPANSION_PRODUCT_3] | [EXPANSION_BUYER_3] | [EXPANSION_VALUE_3] | Q2 |
| [EXPANSION_OPPORTUNITY_4] | [EXPANSION_PRODUCT_4] | [EXPANSION_BUYER_4] | [EXPANSION_VALUE_4] | Q3 |`;

  const competitiveDefault = `| Competitor | Presence | Threat Level | Defense Strategy |
|-----------|----------|--------------|------------------|
| [COMPETITOR_1] | [COMPETITOR_1_PRESENCE] | High | [DEFENSE_STRATEGY_1] |
| [COMPETITOR_2] | [COMPETITOR_2_PRESENCE] | Medium | [DEFENSE_STRATEGY_2] |`;

  const risksDefault = `| Risk | Likelihood | Impact | Mitigation Strategy |
|------|------------|--------|---------------------|
| [RISK_1] | Medium | High | [MITIGATION_1] |
| [RISK_2] | High | Medium | [MITIGATION_2] |
| [RISK_3] | Low | Medium | [MITIGATION_3] |`;

  const actionPlanDefault = `| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| [ACTION_1] | AM | [DUE_DATE_1] | In Progress |
| [ACTION_2] | AM + SE | [DUE_DATE_2] | Not Started |
| [ACTION_3] | AM | [DUE_DATE_3] | Not Started |
| [ACTION_4] | AM | [DUE_DATE_4] | Scheduled |
| [ACTION_5] | SE | [DUE_DATE_5] | Not Started |`;

  return (
    <>

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <PageHeader
          title="Strategic Account Plan"
          description="Comprehensive planning for revenue retention and expansion"
        />

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Instructions */}
          <Card className="border-blue-200 bg-blue-50/50 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Lightbulb className="h-5 w-5" />
                How to Use This Template
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-blue-800 space-y-2">
              <p>
                This is a generalized account plan template. To customize it for your specific account:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Click the <strong>AI button</strong> on any section to generate customized content using ChatGPT, Claude, or Gemini</li>
                <li>Or click the <strong>Edit button</strong> to manually update the content</li>
                <li>Your customizations are automatically saved to your browser</li>
                <li>Use the Reset button to restore default template content</li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900">{plan.accountName}</h2>
            <Button onClick={handlePrint} variant="outline" className="gap-2 print:hidden">
              <Printer className="h-4 w-4" />
              Print Plan
            </Button>
          </div>

          <div className="space-y-8">
            {/* Account Overview */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-700">Account Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-slate-600">Location:</span>
                      <p className="text-slate-900">{plan.overview.location}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-slate-600">Industry:</span>
                      <p className="text-slate-900">{plan.overview.industry}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-slate-600">Revenue:</span>
                      <p className="text-slate-900 font-semibold text-blue-600">{plan.overview.revenue}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-slate-600">Employees:</span>
                      <p className="text-slate-900">{plan.overview.employees}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-slate-600">Current ARR:</span>
                      <p className="text-slate-900 font-semibold text-blue-600">{plan.overview.currentARR}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-slate-600">Renewal Date:</span>
                      <p className="text-slate-900">{plan.overview.renewalDate}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-slate-600">Account Health:</span>
                      <Badge className={getHealthColor(plan.overview.health)}>
                        {plan.overview.health.toUpperCase()}
                      </Badge>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-slate-600">Products:</span>
                      <div className="flex gap-2 mt-1">
                        {plan.overview.productsInUse.map((product, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {product}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Context - Editable */}
            <EditableContent
              id="account-plan-business-context"
              title="Business Context"
              description="Customer priorities and how your products align"
              defaultContent={businessContextDefault}
              prompt={accountPlanPrompt}
              promptBlocks={accountPlanPromptBlocks}
              category="Strategic Alignment"
              minHeight="200px"
            />

            {/* Stakeholder Map - Editable */}
            <EditableContent
              id="account-plan-stakeholders"
              title="Stakeholder Map"
              description="Key contacts and engagement strategy"
              defaultContent={stakeholdersDefault}
              prompt={accountPlanPrompt}
              promptBlocks={accountPlanPromptBlocks}
              category="Relationships"
              minHeight="250px"
            />

            {/* Current State - Editable */}
            <EditableContent
              id="account-plan-current-state"
              title="Current State"
              description="Products in use and value delivered"
              defaultContent={currentStateDefault}
              prompt={accountPlanPrompt}
              promptBlocks={accountPlanPromptBlocks}
              category="Value Delivery"
              minHeight="200px"
            />

            {/* Whitespace & Expansion - Editable */}
            <EditableContent
              id="account-plan-whitespace"
              title="Whitespace & Expansion Opportunities"
              description="Upsell and cross-sell opportunities"
              defaultContent={whitespaceDefault}
              prompt={accountPlanPrompt}
              promptBlocks={accountPlanPromptBlocks}
              category="Growth"
              minHeight="200px"
            />

            {/* Competitive Landscape - Editable */}
            <EditableContent
              id="account-plan-competitive"
              title="Competitive Landscape"
              description="Competitors and defense strategies"
              defaultContent={competitiveDefault}
              prompt={accountPlanPrompt}
              promptBlocks={accountPlanPromptBlocks}
              category="Competition"
              minHeight="150px"
            />

            {/* Risk Assessment - Editable */}
            <EditableContent
              id="account-plan-risks"
              title="Risk Assessment"
              description="Potential risks and mitigation plans"
              defaultContent={risksDefault}
              prompt={accountPlanPrompt}
              promptBlocks={accountPlanPromptBlocks}
              category="Risk Management"
              minHeight="150px"
            />

            {/* Action Plan - Editable */}
            <EditableContent
              id="account-plan-action-plan"
              title="Action Plan"
              description="Next steps with owners and timelines"
              defaultContent={actionPlanDefault}
              prompt={accountPlanPrompt}
              promptBlocks={accountPlanPromptBlocks}
              category="Execution"
              minHeight="200px"
            />

            {/* Financial Summary */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-700">Financial Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="text-center">
                    <p className="text-sm text-slate-600 mb-1">Current ARR</p>
                    <p className="text-2xl font-bold text-slate-900">{plan.financialSummary.currentARR}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-600 mb-1">Target ARR</p>
                    <p className="text-2xl font-bold text-blue-600">{plan.financialSummary.targetARR}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-600 mb-1">Expansion</p>
                    <p className="text-2xl font-bold text-emerald-600">{plan.financialSummary.expansion}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-600 mb-1">Growth</p>
                    <p className="text-2xl font-bold text-blue-600">{plan.financialSummary.growthPercent}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-600 mb-1">Renewal Risk</p>
                    <Badge className="bg-emerald-100 text-emerald-700 text-sm">
                      {plan.financialSummary.renewalRisk}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

    </>
  );
}
