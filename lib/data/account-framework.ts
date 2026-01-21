export interface FrameworkStep {
  step: number;
  title: string;
  objective: string;
  criteria: string;
  tools: string[];
}

export interface FrameworkPhase {
  id: string;
  steps: string;
  title: string;
  subtitle: string;
  description: string;
  items: FrameworkStep[];
}

export const accountFrameworkData: FrameworkPhase[] = [
  {
    id: "foundation",
    steps: "1-4",
    title: "FOUNDATION",
    subtitle: "Account Intelligence & Team Alignment",
    description: "Strategic assessment, product knowledge, cross-functional partnerships, and stakeholder mapping",
    items: [
      {
        step: 1,
        title: "Portfolio Assessment",
        objective: "Strategic Account/Territory Analysis",
        criteria: "Complete health audit - understand revenue status, timelines, and growth potential",
        tools: ["Account Health Scorecard", "Territory Analysis"]
      },
      {
        step: 2,
        title: "Product/Solution Mastery",
        objective: "Deep Product Knowledge & Competitive Positioning",
        criteria: "Full command of offerings - features, use cases, differentiation, and value props",
        tools: ["Product Documentation", "Competitive Analysis"]
      },
      {
        step: 3,
        title: "Team Alignment",
        objective: "Cross-Functional Partnerships Established",
        criteria: "Cadence set with key partners - clear roles, communication paths, and collaboration norms",
        tools: ["Team Operating Model", "RACI Matrix"]
      },
      {
        step: 4,
        title: "Stakeholder Mapping",
        objective: "Multi-Level Relationship Strategy",
        criteria: "Key decision-makers identified - org structure, influence dynamics, and access paths mapped",
        tools: ["Stakeholder Matrix", "Relationship Plan"]
      }
    ]
  },
  {
    id: "activation",
    steps: "5-8",
    title: "ACTIVATION",
    subtitle: "Value Delivery & Strategic Planning",
    description: "Value documentation, proactive strategy development, opportunity identification, and engagement cadence",
    items: [
      {
        step: 5,
        title: "Value Realization",
        objective: "Usage & Impact Documentation",
        criteria: "Quantified business outcomes - adoption metrics, success stories, and ROI captured",
        tools: ["Value Framework", "Success Metrics Dashboard"]
      },
      {
        step: 6,
        title: "Strategic Planning",
        objective: "Proactive Account/Territory Strategy",
        criteria: "Strategic playbooks activated - risk mitigation and growth opportunities identified early",
        tools: ["Account Plan Template", "Risk Assessment"]
      },
      {
        step: 7,
        title: "Opportunity Targeting",
        objective: "Growth & Expansion Identification",
        criteria: "Opportunity analysis complete - new use cases, departments, and offerings mapped per account",
        tools: ["Opportunity Map", "Expansion Framework"]
      },
      {
        step: 8,
        title: "Engagement Rhythm",
        objective: "Strategic Touchpoint Cadence",
        criteria: "Regular check-ins scheduled - business reviews, executive access, and value delivery calendared",
        tools: ["Business Review Template", "Engagement Calendar"]
      }
    ]
  },
  {
    id: "expansion",
    steps: "9-12",
    title: "EXPANSION",
    subtitle: "Discovery & Strategic Alignment",
    description: "Evolving needs discovery, solution fit, executive relationships, and compelling business cases",
    items: [
      {
        step: 9,
        title: "Discovery Refresh",
        objective: "Evolving Needs & Strategic Priorities",
        criteria: "Updated context - new initiatives, challenges, and stakeholder changes documented",
        tools: ["Discovery Framework", "Strategic Account Plan"]
      },
      {
        step: 10,
        title: "Solution Alignment",
        objective: "Use Case Fit & Product Matching",
        criteria: "Solutions matched to needs - demos and proposals tailored to buyer-specific outcomes",
        tools: ["Demo Library", "Use Case Catalog"]
      },
      {
        step: 11,
        title: "Executive Alignment",
        objective: "Senior-Level Sponsorship & Strategic Buy-In",
        criteria: "Executive relationships strengthened - strategic roadmap aligned with customer goals",
        tools: ["Executive Business Review", "Strategic Roadmap"]
      },
      {
        step: 12,
        title: "Business Case Development",
        objective: "Compelling Value Proposition",
        criteria: "ROI-backed proposal - clear value metrics, multiple scenarios, and success criteria defined",
        tools: ["Business Case Template", "ROI Calculator"]
      }
    ]
  },
  {
    id: "revenue",
    steps: "13-16",
    title: "REVENUE",
    subtitle: "Deal Execution & Account Success",
    description: "Commercial negotiation, deal closure, revenue realization, and continuous optimization",
    items: [
      {
        step: 13,
        title: "Negotiation & Terms",
        objective: "Commercial Agreement Finalization",
        criteria: "Terms aligned with mutual success - procurement, legal, and stakeholder approval secured",
        tools: ["Negotiation Playbook", "Contract Template"]
      },
      {
        step: 14,
        title: "Revenue Secured",
        objective: "Deal Closure & Commitment",
        criteria: "Agreement signed - customer commitment locked with clear next steps defined",
        tools: ["Deal Checklist", "Handoff Protocol"]
      },
      {
        step: 15,
        title: "Expansion Realized",
        objective: "Growth Revenue Achieved",
        criteria: "Additional value delivered - expanded scope, users, or products successfully onboarded",
        tools: ["Expansion Tracker", "Implementation Plan"]
      },
      {
        step: 16,
        title: "Success & Iteration",
        objective: "Continuous Improvement & Learning",
        criteria: "Account health optimized - playbooks refined, insights captured, best practices shared",
        tools: ["Win/Loss Analysis", "Best Practice Documentation"]
      }
    ]
  }
];

// AI Prompts for framework customization
export const frameworkPhasePrompts = {
  foundation: {
    prompt: `Customize the Foundation phase (Steps 1-4) of an account management framework for [ROLE_TITLE] at [COMPANY_NAME].

**Context:**
- Role: [ROLE_TITLE]
- Company: [COMPANY_NAME]
- Industry: [INDUSTRY]
- Portfolio/Territory Size: [PORTFOLIO_SIZE]
- Main Products/Services: [PRODUCTS]

**Generate customized steps for:**
1. Portfolio/Territory Assessment - How to analyze account health and opportunity for this specific role
2. Product/Solution Mastery - What specific knowledge and expertise is needed
3. Team Alignment - Which cross-functional partners are critical and how to work with them
4. Stakeholder Mapping - How to identify and map decision-makers in this industry/company

For each step, provide:
- Specific objective tailored to the role
- Clear success criteria with measurable outcomes
- Relevant tools/resources needed for this industry

Make recommendations specific to this role, company, and industry context.`,
    blocks: [
      { key: "ROLE_TITLE", description: "Your role", example: "Account Manager" },
      { key: "COMPANY_NAME", description: "Company name", example: "Paraform" },
      { key: "INDUSTRY", description: "Industry", example: "Recruiting marketplace" },
      { key: "PORTFOLIO_SIZE", description: "Accounts or territory scope", example: "50-75 company accounts, 200+ recruiter partners" },
      { key: "PRODUCTS", description: "Product/service suite", example: "Job marketplace, recruiter matching, bounty platform" },
    ]
  },
  activation: {
    prompt: `Customize the Activation phase (Steps 5-8) for [ROLE_TITLE] at [COMPANY_NAME].

**Context:**
- Role: [ROLE_TITLE]
- Company: [COMPANY_NAME]
- Success Metrics: [SUCCESS_METRICS]
- Customer Lifecycle: [LIFECYCLE_TYPE]
- Growth Strategy: [GROWTH_GOALS]

**Generate customized steps for:**
5. Value Realization - How to measure and document success for your customers/accounts
6. Strategic Planning - How to develop proactive strategies and mitigate risks
7. Opportunity Targeting - How to identify and qualify growth opportunities
8. Engagement Rhythm - What strategic touchpoints and cadence to establish

Include specific tactics, metrics, and best practices relevant to this role and industry.`,
    blocks: [
      { key: "ROLE_TITLE", description: "Your role", example: "Account Manager" },
      { key: "COMPANY_NAME", description: "Company name", example: "Paraform" },
      { key: "SUCCESS_METRICS", description: "Key metrics", example: "GMV growth, recruiter activation rate, placement velocity" },
      { key: "LIFECYCLE_TYPE", description: "Customer/contract cycle", example: "Ongoing bounty-based engagement" },
      { key: "GROWTH_GOALS", description: "Growth targets", example: "130% GMV growth, 80% recruiter activation" },
    ]
  },
  expansion: {
    prompt: `Customize the Expansion phase (Steps 9-12) for [ROLE_TITLE] selling [PRODUCTS].

**Context:**
- Products/Services: [PRODUCTS]
- Target Buyers: [TARGET_BUYERS]
- Average Deal Size: [DEAL_SIZE]
- Sales Cycle Length: [SALES_CYCLE]
- Industry: [INDUSTRY]

**Generate customized steps for:**
9. Discovery Refresh - How to uncover evolving needs and new opportunities
10. Solution Alignment - How to match your offerings to customer use cases
11. Executive Alignment - How to build and leverage C-level relationships
12. Business Case Development - How to create compelling ROI-backed proposals

Make recommendations specific to this product, buyer profile, and industry dynamics.`,
    blocks: [
      { key: "ROLE_TITLE", description: "Your role", example: "Account Manager" },
      { key: "PRODUCTS", description: "Products you sell", example: "Recruiting marketplace, bounty-based hiring" },
      { key: "TARGET_BUYERS", description: "Buyer personas", example: "VP Talent, Head of Recruiting, Founders" },
      { key: "DEAL_SIZE", description: "Average deal value", example: "$15K-$75K bounty per placement" },
      { key: "SALES_CYCLE", description: "Typical timeline", example: "2-6 weeks from job post to placement" },
      { key: "INDUSTRY", description: "Industry focus", example: "Tech recruiting marketplace" },
    ]
  },
  revenue: {
    prompt: `Customize the Revenue phase (Steps 13-16) for [ROLE_TITLE] at [COMPANY_NAME].

**Context:**
- Company: [COMPANY_NAME]
- Deal Complexity: [DEAL_COMPLEXITY]
- Approval Process: [APPROVAL_PROCESS]
- Post-Sale Handoff: [HANDOFF_PROCESS]
- Success Measures: [SUCCESS_MEASURES]

**Generate customized steps for:**
13. Negotiation & Terms - How to navigate deal closure effectively
14. Revenue Secured - How to finalize agreements and lock commitment
15. Expansion Realized - How to deliver on growth objectives
16. Success & Iteration - How to optimize and continuously improve

Focus on the unique aspects of this company's sales process, customer lifecycle, and success metrics.`,
    blocks: [
      { key: "ROLE_TITLE", description: "Your role", example: "Account Manager" },
      { key: "COMPANY_NAME", description: "Company name", example: "Paraform" },
      { key: "DEAL_COMPLEXITY", description: "Deal type and complexity", example: "Ongoing engagement with multiple open roles" },
      { key: "APPROVAL_PROCESS", description: "Contract/approval process", example: "Platform onboarding, bounty approval, role posting" },
      { key: "HANDOFF_PROCESS", description: "Post-sale transition", example: "Recruiter matching, candidate pipeline management" },
      { key: "SUCCESS_MEASURES", description: "How success is measured", example: "GMV realized, placement velocity, recruiter satisfaction" },
    ]
  }
};
