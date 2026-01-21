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

export const timelineData: TimelinePhase[] = [
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
    target: "$XXK+ GMV Growth Driven",
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
