// Pitch content
export interface Pitch {
  id: string;
  title: string;
  duration: '30-second' | '60-second' | 'full';
  content: string;
  keyPoints: string[];
  useFor: string;
}

// STAR Stories
export interface STARStory {
  id: string;
  slug: string;
  title: string;
  company: string;
  metric: string;
  useFor: string[];
  situation: string;
  task: string;
  action: string[];
  result: string;
  roleApplication: string;
  keyPoints: string[];
}

// Q&A Content
export interface QAItem {
  id: string;
  category: 'strategic' | 'behavioral' | 'company' | 'closing' | 'objection';
  question: string;
  answer: string;
  keyPoints?: string[];
}

// Mock Interview
export interface MockQuestion {
  id: string;
  round: number;
  category: string;
  question: string;
  suggestedAnswer: string;
  timeLimit?: number;
}

// Interviewer Profile
export interface InterviewerProfile {
  id: string;
  name: string;
  role: string;
  company: string;
  background: {
    education?: string;
    previousRoles?: string[];
    philosophies: string[];
  };
  linkedIn?: string;
  questionsTheyAsk: string[];
  connectionPoints: string[];
  whatTheyValue: string[];
  tips: string[];
}

// Account Plan
export interface AccountPlan {
  accountName: string;
  overview: {
    location: string;
    industry: string;
    revenue: string;
    employees: string;
    currentARR: string;
    renewalDate: string;
    health: 'green' | 'yellow' | 'red';
    productsInUse: string[];
  };
  businessContext: {
    priorities: string[];
    relevanceToRole: string[];
  };
  stakeholders: Stakeholder[];
  currentState: {
    products: ProductUsage[];
    valueDelivered: string[];
    proofPoints: string[];
  };
  whitespace: ExpansionOpportunity[];
  risks: Risk[];
  actionPlan: ActionItem[];
  financialSummary: {
    currentARR: string;
    targetARR: string;
    growthPercent: string;
  };
}

export interface Stakeholder {
  name: string;
  title: string;
  role: 'economic-buyer' | 'champion' | 'user' | 'exec-sponsor' | 'expansion-target';
  relationship: 'strong' | 'moderate' | 'cold' | 'not-engaged';
  engagementPlan: string;
}

export interface ProductUsage {
  product: string;
  useCase: string;
  primaryUser: string;
  adoption: 'high' | 'medium' | 'low';
}

export interface ExpansionOpportunity {
  opportunity: string;
  product: string;
  targetBuyer: string;
  estimatedValue: string;
  timing: string;
}

export interface Risk {
  risk: string;
  likelihood: 'high' | 'medium' | 'low';
  impact: 'high' | 'medium' | 'low';
  mitigation: string;
}

export interface ActionItem {
  action: string;
  owner: string;
  dueDate: string;
  status: 'not-started' | 'in-progress' | 'completed';
}

// Competitor data
export interface Competitor {
  id: string;
  name: string;
  positioning: string;
  strengths: string[];
  weaknesses: string[];
  talkTrack: string;
  objectionResponses: { objection: string; response: string; }[];
}

// Metrics
export interface MetricCategory {
  category: 'primary' | 'leading' | 'activity';
  metrics: { name: string; definition: string; target: string; whyItMatters?: string; }[];
}

// Cheat Sheet
export interface CheatSheetSection {
  id: string;
  title: string;
  items: { label: string; value: string; }[];
}
