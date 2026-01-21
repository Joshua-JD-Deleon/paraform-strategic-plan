export interface FrameworkStep {
  step: number;
  title: string;
  objective: string;
  criteria: string;
  frameworks: string[];
}

/**
 * Platform & Portfolio Foundation Framework
 * Steps 1-4: Building marketplace expertise and recruiter relationships
 */
export const foundationSteps: FrameworkStep[] = [
  {
    step: 1,
    title: "Marketplace Mastery",
    objective: "Deep Platform & Ecosystem Understanding",
    criteria: "100% product fluency: recruiter workflows, matching algorithms, GMV mechanics",
    frameworks: ["Platform Certification", "Marketplace Dynamics"],
  },
  {
    step: 2,
    title: "Recruiter Success Metrics",
    objective: "KPI Definition & Health Scoring",
    criteria: "Health scorecard: GMV, placement velocity, engagement, churn risk indicators",
    frameworks: ["Success Scorecard", "Health Dashboard"],
  },
  {
    step: 3,
    title: "Portfolio Assessment",
    objective: "Agency Evaluation & Segmentation",
    criteria: "50+ agencies tiered by potential, performance, engagement level",
    frameworks: ["Portfolio Tiering", "Growth Potential Matrix"],
  },
  {
    step: 4,
    title: "Relationship Building",
    objective: "Trusted Advisor Foundation",
    criteria: "1:1 intro calls completed, weekly/bi-weekly cadence established",
    frameworks: ["Advisor Playbook", "Relationship Mapping"],
  },
];

/**
 * Operational Excellence Framework
 * Steps 5-8: Driving day-to-day recruiter performance
 */
export const operationalSteps: FrameworkStep[] = [
  {
    step: 5,
    title: "Advisory Excellence",
    objective: "Strategic Guidance & Operational Support",
    criteria: "Structured advisory calls with 3+ actionable recommendations per session",
    frameworks: ["Call Framework", "Value Delivery Checklist"],
  },
  {
    step: 6,
    title: "Workflow Optimization",
    objective: "Process Improvement & Efficiency Gains",
    criteria: "Workflows audited: submission speed, candidate quality, conversion rates",
    frameworks: ["Workflow Audit", "Optimization Playbook"],
  },
  {
    step: 7,
    title: "Performance Coaching",
    objective: "Skill Development & Best Practice Sharing",
    criteria: "Top 10 agencies on coaching plans, measurable velocity improvement",
    frameworks: ["Coaching Framework", "Best Practice Library"],
  },
  {
    step: 8,
    title: "Bottleneck Resolution",
    objective: "Friction Identification & Removal",
    criteria: "Activation blockers mapped and resolved, time-to-first-placement reduced",
    frameworks: ["Friction Mapping", "Resolution Playbook"],
  },
];

/**
 * Growth & Experiments Framework
 * Steps 9-12: Driving GMV growth and marketplace innovation
 */
export const growthSteps: FrameworkStep[] = [
  {
    step: 9,
    title: "GMV Growth Strategy",
    objective: "Revenue Acceleration & Expansion",
    criteria: "Growth plans for top-tier agencies, 20%+ GMV lift target",
    frameworks: ["Growth Playbook", "Revenue Levers"],
  },
  {
    step: 10,
    title: "Marketplace Experiments",
    objective: "Incentive & Workflow Testing",
    criteria: "3+ experiments with hypotheses, A/B results, scale recommendations",
    frameworks: ["Experiment Framework", "A/B Testing Protocol"],
  },
  {
    step: 11,
    title: "Retention & Engagement",
    objective: "Churn Prevention & Reactivation",
    criteria: "At-risk detection live, 80%+ save rate on flagged recruiters",
    frameworks: ["Retention Playbook", "Engagement Scoring"],
  },
  {
    step: 12,
    title: "Liquidity Optimization",
    objective: "Supply-Demand Matching & Market Balance",
    criteria: "Recruiter activation driving improved match rates and fill times",
    frameworks: ["Liquidity Framework", "Matching Optimization"],
  },
];

/**
 * Systems & Scale Framework
 * Steps 13-16: Building scalable operations and product feedback
 */
export const scaleSteps: FrameworkStep[] = [
  {
    step: 13,
    title: "Product Partnership",
    objective: "Ops-to-Product Feedback Loop",
    criteria: "5+ improvement proposals submitted with data, 2+ shipped",
    frameworks: ["Feedback Protocol", "Feature Request Process"],
  },
  {
    step: 14,
    title: "Internal Tools Development",
    objective: "Automation & Efficiency Systems",
    criteria: "3+ tool specs delivered, measurable ops efficiency gains",
    frameworks: ["Tools Roadmap", "Automation Checklist"],
  },
  {
    step: 15,
    title: "Playbook Codification",
    objective: "Repeatable Success Patterns",
    criteria: "5+ playbooks documented, ready for team-wide adoption",
    frameworks: ["Playbook Library", "Knowledge Base"],
  },
  {
    step: 16,
    title: "Cross-Functional Impact",
    objective: "GTM & Strategy Collaboration",
    criteria: "Ops insights driving GTM strategy, product roadmap input",
    frameworks: ["Cross-Functional Sync", "Strategic Input Framework"],
  },
];

export const frameworkPhases = [
  {
    phase: 1,
    title: "Platform & Portfolio Foundation",
    subtitle: "FOUNDATION",
    stepsRange: "1-4",
    description: "Build marketplace expertise and recruiter relationships",
    color: "phase-30",
    steps: foundationSteps,
  },
  {
    phase: 2,
    title: "Operational Excellence",
    subtitle: "OPERATIONS",
    stepsRange: "5-8",
    description: "Drive day-to-day recruiter performance and workflow optimization",
    color: "phase-60",
    steps: operationalSteps,
  },
  {
    phase: 3,
    title: "Growth & Experiments",
    subtitle: "GROWTH",
    stepsRange: "9-12",
    description: "Accelerate GMV through experiments and strategic interventions",
    color: "phase-90",
    steps: growthSteps,
  },
  {
    phase: 4,
    title: "Systems & Scale",
    subtitle: "SCALE",
    stepsRange: "13-16",
    description: "Build scalable operations and drive cross-functional impact",
    color: "phase-30",
    steps: scaleSteps,
  },
];
