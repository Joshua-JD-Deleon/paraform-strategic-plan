export interface TimelinePhase {
  phase: string;
  title: string;
  subtitle: string;
  color: string;
  target?: string;
  items: {
    title: string;
    description: string;
  }[];
}

// Export as both names for compatibility
export const defaultTimelineData: TimelinePhase[] = [
  {
    phase: "First 30 Days",
    title: "Platform Mastery & Portfolio Foundations",
    subtitle: "FIRST 30 DAYS",
    color: "phase-30",
    target: "Full Portfolio Onboarding",
    items: [
      {
        title: "Master Paraform platform & marketplace",
        description: "100% product fluency + recruiter workflow mastery",
      },
      {
        title: "Shadow top Account Managers",
        description: "15+ advisor calls observed, success patterns documented",
      },
      {
        title: "Build relationships with assigned portfolio",
        description: "1:1 intro calls with all recruiters in portfolio",
      },
      {
        title: "Map recruiter health metrics",
        description: "GMV, placement velocity, engagement scores baselined",
      },
      {
        title: "Identify quick-win optimization opportunities",
        description: "3-5 high-impact improvements per recruiter",
      },
      {
        title: "Document onboarding-to-activation bottlenecks",
        description: "Friction points mapped, solutions proposed",
      },
    ],
  },
  {
    phase: "Days 31-60",
    title: "Revenue Execution & Marketplace Experiments",
    subtitle: "DAYS 31-60",
    color: "phase-60",
    target: "20%+ GMV Lift in Portfolio",
    items: [
      {
        title: "Own recruiter relationships independently",
        description: "Full advisory responsibility for portfolio",
      },
      {
        title: "Execute growth playbooks with top agencies",
        description: "Personalized strategies driving measurable GMV",
      },
      {
        title: "Run marketplace experiments",
        description: "3+ incentive/workflow tests with documented results",
      },
      {
        title: "Address retention risks proactively",
        description: "At-risk recruiters identified + intervention plans",
      },
      {
        title: "Build operational excellence templates",
        description: "Repeatable success playbooks for common scenarios",
      },
      {
        title: "Bridge ops insights to Product",
        description: "5+ product improvement proposals submitted",
      },
    ],
  },
  {
    phase: "Days 61-90",
    title: "Scaled Impact & Systems Building",
    subtitle: "DAYS 61-90",
    color: "phase-90",
    target: "Portfolio GMV Growth [Target TBD]",
    items: [
      {
        title: "Deliver measurable portfolio GMV impact",
        description: "Documented revenue lift across managed agencies",
      },
      {
        title: "Scale winning experiments marketplace-wide",
        description: "2-3 proven tactics rolled out beyond portfolio",
      },
      {
        title: "Build systems that improve recruiter performance",
        description: "Automations + workflows reducing friction",
      },
      {
        title: "Develop internal tools proposals",
        description: "Product specs for ops efficiency gains",
      },
      {
        title: "Deliver 90-day strategic review",
        description: "Portfolio insights + growth roadmap + process improvements",
      },
      {
        title: "Establish foundation for portfolio expansion",
        description: "Playbooks ready to scale to larger recruiter base",
      },
    ],
  },
];

// Legacy alias for compatibility
export const timelineData = defaultTimelineData;

// AI Prompt for generating customized 30/60/90 plans
export const timelinePrompt = `Create a detailed 30/60/90 day plan for a [ROLE_TITLE] position at [COMPANY_NAME].

**Context:**
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- Team/Portfolio Size: [TEAM_SIZE]
- Key Success Metrics: [KEY_METRICS]
- Industry: [INDUSTRY]
- Products/Services: [PRODUCTS]

**Requirements:**
Please create a strategic plan with 3 phases (30 days, 60 days, 90 days), each containing 4-6 specific milestones.

For each phase, include:
1. A clear theme that matches the stage:
   - 30 Days: Learn, Assess & Build Foundation
   - 60 Days: Execute, Experiment & Drive Results
   - 90 Days: Scale, Optimize & Deliver Impact
2. 4-6 specific action items with:
   - A concise title (what to accomplish)
   - A detailed description (specific tactics and expected outcomes)

**Focus Areas:**
- First 30 Days: Learning the business, understanding the marketplace dynamics, building relationships with portfolio, assessing current state
- Days 31-60: Taking initiative, executing growth strategies, running experiments, building credibility through measurable action
- Days 61-90: Delivering scaled results, optimizing processes, demonstrating strategic impact, proving portfolio growth

**Output Format:**
Format as three phases with clear progression showing increasing responsibility and impact. Make activities specific to the role, company, and industry provided.`;

export const timelinePromptBlocks = [
  { key: "ROLE_TITLE", description: "Your job title", example: "Account Manager" },
  { key: "COMPANY_NAME", description: "Company you're joining", example: "Paraform" },
  { key: "TEAM_SIZE", description: "Size of portfolio or territory", example: "50-75 recruiter partners" },
  { key: "KEY_METRICS", description: "Success metrics for the role", example: "GMV growth, recruiter activation, placement velocity" },
  { key: "INDUSTRY", description: "Industry sector", example: "Recruiting marketplace" },
  { key: "PRODUCTS", description: "Main products/services", example: "Bounty-based recruiting platform" },
];
