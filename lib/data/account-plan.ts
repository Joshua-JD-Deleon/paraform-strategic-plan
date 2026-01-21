/**
 * Generalized Account Plan Template
 * This template can be customized for any company, industry, and sales/AM role
 */

export const accountPlanTemplate = {
  accountName: "[ACCOUNT_NAME]",
  overview: {
    location: "[LOCATION]",
    industry: "[INDUSTRY]",
    revenue: "[ANNUAL_REVENUE]",
    employees: "[EMPLOYEE_COUNT]",
    currentARR: "[CURRENT_ARR]",
    renewalDate: "[RENEWAL_DATE]",
    health: "green" as const,
    productsInUse: ["[PRODUCT_1]", "[PRODUCT_2]"]
  },
  businessContext: {
    priorities: [
      "[CUSTOMER_PRIORITY_1]",
      "[CUSTOMER_PRIORITY_2]",
      "[CUSTOMER_PRIORITY_3]",
      "[CUSTOMER_PRIORITY_4]"
    ],
    relevanceToCompany: [
      "[HOW_YOUR_PRODUCT_HELPS_1]",
      "[HOW_YOUR_PRODUCT_HELPS_2]",
      "[HOW_YOUR_PRODUCT_HELPS_3]",
      "[HOW_YOUR_PRODUCT_HELPS_4]"
    ]
  },
  stakeholders: [
    {
      name: "[STAKEHOLDER_1_NAME]",
      title: "[STAKEHOLDER_1_TITLE]",
      role: "Economic Buyer",
      relationship: "Strong",
      engagementPlan: "[ENGAGEMENT_PLAN_1]"
    },
    {
      name: "[STAKEHOLDER_2_NAME]",
      title: "[STAKEHOLDER_2_TITLE]",
      role: "Champion",
      relationship: "Strong",
      engagementPlan: "[ENGAGEMENT_PLAN_2]"
    },
    {
      name: "[STAKEHOLDER_3_NAME]",
      title: "[STAKEHOLDER_3_TITLE]",
      role: "User",
      relationship: "Moderate",
      engagementPlan: "[ENGAGEMENT_PLAN_3]"
    },
    {
      name: "[STAKEHOLDER_4_NAME]",
      title: "[STAKEHOLDER_4_TITLE]",
      role: "Exec Sponsor",
      relationship: "Not Engaged",
      engagementPlan: "[ENGAGEMENT_PLAN_4]"
    },
    {
      name: "[STAKEHOLDER_5_NAME]",
      title: "[STAKEHOLDER_5_TITLE]",
      role: "Expansion Target",
      relationship: "Cold",
      engagementPlan: "[ENGAGEMENT_PLAN_5]"
    }
  ],
  currentState: {
    productsInUse: [
      {
        product: "[PRODUCT_1]",
        value: "[VALUE_DELIVERED_1]",
        proof: "[PROOF_POINT_1]"
      },
      {
        product: "[PRODUCT_2]",
        value: "[VALUE_DELIVERED_2]",
        proof: "[PROOF_POINT_2]"
      }
    ]
  },
  whitespace: [
    {
      opportunity: "[EXPANSION_OPPORTUNITY_1]",
      product: "[EXPANSION_PRODUCT_1]",
      targetBuyer: "[EXPANSION_BUYER_1]",
      estimatedValue: "[EXPANSION_VALUE_1]",
      timing: "Q1"
    },
    {
      opportunity: "[EXPANSION_OPPORTUNITY_2]",
      product: "[EXPANSION_PRODUCT_2]",
      targetBuyer: "[EXPANSION_BUYER_2]",
      estimatedValue: "[EXPANSION_VALUE_2]",
      timing: "Q2"
    },
    {
      opportunity: "[EXPANSION_OPPORTUNITY_3]",
      product: "[EXPANSION_PRODUCT_3]",
      targetBuyer: "[EXPANSION_BUYER_3]",
      estimatedValue: "[EXPANSION_VALUE_3]",
      timing: "Q2"
    },
    {
      opportunity: "[EXPANSION_OPPORTUNITY_4]",
      product: "[EXPANSION_PRODUCT_4]",
      targetBuyer: "[EXPANSION_BUYER_4]",
      estimatedValue: "[EXPANSION_VALUE_4]",
      timing: "Q3"
    }
  ],
  competitive: [
    {
      competitor: "[COMPETITOR_1]",
      presence: "[COMPETITOR_1_PRESENCE]",
      threatLevel: "High",
      defenseStrategy: "[DEFENSE_STRATEGY_1]"
    },
    {
      competitor: "[COMPETITOR_2]",
      presence: "[COMPETITOR_2_PRESENCE]",
      threatLevel: "Medium",
      defenseStrategy: "[DEFENSE_STRATEGY_2]"
    }
  ],
  risks: [
    {
      risk: "[RISK_1]",
      likelihood: "Medium",
      impact: "High",
      mitigation: "[MITIGATION_1]"
    },
    {
      risk: "[RISK_2]",
      likelihood: "High",
      impact: "Medium",
      mitigation: "[MITIGATION_2]"
    },
    {
      risk: "[RISK_3]",
      likelihood: "Low",
      impact: "Medium",
      mitigation: "[MITIGATION_3]"
    }
  ],
  actionPlan: [
    {
      action: "[ACTION_1]",
      owner: "AM",
      dueDate: "[DUE_DATE_1]",
      status: "In Progress"
    },
    {
      action: "[ACTION_2]",
      owner: "AM + SE",
      dueDate: "[DUE_DATE_2]",
      status: "Not Started"
    },
    {
      action: "[ACTION_3]",
      owner: "AM",
      dueDate: "[DUE_DATE_3]",
      status: "Not Started"
    },
    {
      action: "[ACTION_4]",
      owner: "AM",
      dueDate: "[DUE_DATE_4]",
      status: "Scheduled"
    },
    {
      action: "[ACTION_5]",
      owner: "SE",
      dueDate: "[DUE_DATE_5]",
      status: "Not Started"
    }
  ],
  financialSummary: {
    currentARR: "[CURRENT_ARR]",
    targetARR: "[TARGET_ARR]",
    expansion: "[EXPANSION_ARR]",
    growthPercent: "[GROWTH_PERCENT]",
    renewalRisk: "Low"
  }
};

/**
 * AI Prompt for generating a customized account plan
 */
export const accountPlanPrompt = `Generate a comprehensive Strategic Account Plan for my customer.

**Customer Information:**
- Account Name: [ACCOUNT_NAME]
- Industry: [INDUSTRY]
- Company Size: [COMPANY_SIZE]
- Annual Revenue: [ANNUAL_REVENUE]
- Location: [LOCATION]

**My Company & Role:**
- My Company: [YOUR_COMPANY]
- My Role: [YOUR_ROLE]
- Products We Sell: [YOUR_PRODUCTS]
- Current ARR with Customer: [CURRENT_ARR]
- Renewal Date: [RENEWAL_DATE]

**Account Context:**
- Products They Currently Use: [PRODUCTS_IN_USE]
- Account Health Status: [HEALTH_STATUS]
- Key Business Priorities: [CUSTOMER_PRIORITIES]

**Generate a detailed account plan with:**

1. **Account Overview**
   - Location, industry, revenue, employee count
   - Current ARR, renewal date, health status
   - Products currently in use

2. **Business Context**
   - 4-5 customer business priorities for this year
   - 4-5 ways our products align with and support those priorities

3. **Stakeholder Map**
   - 5 key stakeholders with names, titles, roles (Economic Buyer, Champion, User, Exec Sponsor, Expansion Target)
   - Relationship strength for each (Strong, Moderate, Cold, Not Engaged)
   - Engagement plan for each stakeholder

4. **Current State**
   - 2-3 products currently in use
   - Value delivered for each
   - Specific proof points and outcomes achieved

5. **Whitespace & Expansion Opportunities**
   - 4 expansion opportunities with product, target buyer, estimated value, timing

6. **Competitive Landscape**
   - 2-3 competitors present in the account
   - Their presence/positioning
   - Threat level (High/Medium/Low)
   - Defense strategy for each

7. **Risk Assessment**
   - 3 potential risks to the renewal or expansion
   - Likelihood and impact for each
   - Mitigation strategies

8. **Action Plan**
   - 5 specific next actions with owner, due date, and status

9. **Financial Summary**
   - Current ARR, target ARR, expansion amount, growth %, renewal risk level

Make all content specific to [INDUSTRY] and [YOUR_COMPANY] products.`;

export const accountPlanPromptBlocks = [
  { key: "ACCOUNT_NAME", description: "Customer company name", example: "Acme Corp" },
  { key: "INDUSTRY", description: "Customer's industry", example: "FinTech" },
  { key: "COMPANY_SIZE", description: "Employee count", example: "5,000 employees" },
  { key: "ANNUAL_REVENUE", description: "Company revenue", example: "$500M" },
  { key: "LOCATION", description: "HQ location", example: "San Francisco, CA" },
  { key: "YOUR_COMPANY", description: "Your company name", example: "DataCloud Inc" },
  { key: "YOUR_ROLE", description: "Your role", example: "Senior Account Manager" },
  { key: "YOUR_PRODUCTS", description: "Products you sell", example: "Analytics Platform, Data Warehouse, ML Tools" },
  { key: "CURRENT_ARR", description: "Current ARR", example: "$180K" },
  { key: "RENEWAL_DATE", description: "Renewal date", example: "March 15, 2025" },
  { key: "PRODUCTS_IN_USE", description: "Products they use", example: "Analytics Platform, Data Warehouse" },
  { key: "HEALTH_STATUS", description: "Account health", example: "Green - healthy and engaged" },
  { key: "CUSTOMER_PRIORITIES", description: "Their business goals", example: "Expand to EMEA, grow revenue 40%, launch new product" },
];
