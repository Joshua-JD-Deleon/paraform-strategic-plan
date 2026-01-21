import { MockQuestion } from '@/types/interview';

/**
 * Mock Interview Question Templates
 *
 * Generalized interview questions organized by round/stage.
 * Use AI prompts to generate customized questions for your specific role and company.
 */

// AI Prompts for generating custom mock interview questions
export const mockInterviewPrompts = {
  phoneScreen: {
    prompt: `I'm preparing for a phone screen interview for a [ROLE] position at [COMPANY].

Please generate 5-7 likely phone screen questions including:
- Tell me about yourself / walk me through your resume
- Why this role? Why this company?
- Key qualification questions specific to [ROLE]
- Questions about my background and experience
- Availability and logistics questions

For each question, also suggest a strong answer framework I should use.`,
    blocks: [
      { key: "ROLE", description: "Job title", example: "Account Manager" },
      { key: "COMPANY", description: "Company name", example: "Paraform" }
    ]
  },

  hiringManager: {
    prompt: `I'm preparing for a hiring manager interview for a [ROLE] position at [COMPANY].

The hiring manager is [MANAGER_NAME] who is [MANAGER_ROLE].

Please generate 10-12 likely questions they'll ask, including:
- Strategic questions about how I'd approach the role
- Behavioral questions (STAR format) about past performance
- Process and execution questions
- Team collaboration questions
- Questions specific to [COMPANY]'s current challenges

For each question, explain WHY they're asking it and what they're evaluating.`,
    blocks: [
      { key: "ROLE", description: "Job title" },
      { key: "COMPANY", description: "Company name" },
      { key: "MANAGER_NAME", description: "Hiring manager's name" },
      { key: "MANAGER_ROLE", description: "Hiring manager's title" }
    ]
  },

  panel: {
    prompt: `I'm preparing for a panel interview for a [ROLE] position at [COMPANY].

The panel likely includes: [PANEL_MEMBERS]

Please generate questions organized by who might ask them:
- Questions from the hiring manager (strategic, performance)
- Questions from team members (collaboration, day-to-day)
- Questions from cross-functional partners (e.g., CS, Product, Marketing)
- Questions from senior leadership (vision, culture fit)

Include 12-15 total questions across all panel members.`,
    blocks: [
      { key: "ROLE", description: "Job title", example: "Account Manager" },
      { key: "COMPANY", description: "Company name", example: "Paraform" },
      { key: "PANEL_MEMBERS", description: "Roles of panel members", example: "VP Revenue, Account Managers, Head of Recruiter Success" }
    ]
  },

  executive: {
    prompt: `I'm preparing for an executive interview (final round) for a [ROLE] position at [COMPANY].

The executive is [EXEC_NAME], [EXEC_ROLE].

Please generate 5-7 executive-level questions focusing on:
- Strategic thinking and business acumen
- Cultural fit and values alignment
- Long-term vision and career goals
- Leadership philosophy (if applicable)
- How I'd contribute beyond my core role

These should be higher-level than hiring manager questions.`,
    blocks: [
      { key: "ROLE", description: "Job title" },
      { key: "COMPANY", description: "Company name" },
      { key: "EXEC_NAME", description: "Executive's name" },
      { key: "EXEC_ROLE", description: "Executive's title", example: "CRO" }
    ]
  },

  skillsAssessment: {
    prompt: `I'm preparing for a skills assessment / case study interview for a [ROLE] position at [COMPANY].

Please generate:
1. Likely case study scenarios or exercises I might be given
2. Role-play situations I might encounter
3. Technical or strategic questions to assess my [ROLE] capabilities
4. How I should structure my responses
5. What they're evaluating in each scenario

Focus on practical, realistic scenarios relevant to [ROLE] at [COMPANY].`,
    blocks: [
      { key: "ROLE", description: "Job title" },
      { key: "COMPANY", description: "Company name" }
    ]
  },

  customQuestions: {
    prompt: `I'm preparing for a [INTERVIEW_TYPE] interview for a [ROLE] position at [COMPANY].

Based on:
- The role requirements: [ROLE_REQUIREMENTS]
- The company's current focus: [COMPANY_FOCUS]
- My background: [YOUR_BACKGROUND]

Please generate 10-12 customized interview questions that:
1. Are specific to this role and company
2. Test the key competencies needed
3. Allow me to highlight my relevant experience
4. Address any potential concerns about my background

For each question, provide a suggested answer framework.`,
    blocks: [
      { key: "INTERVIEW_TYPE", description: "Type of interview", example: "hiring manager" },
      { key: "ROLE", description: "Job title" },
      { key: "COMPANY", description: "Company name" },
      { key: "ROLE_REQUIREMENTS", description: "Key requirements from job description" },
      { key: "COMPANY_FOCUS", description: "Company priorities or challenges" },
      { key: "YOUR_BACKGROUND", description: "Your relevant background summary" }
    ]
  }
};

// Template questions organized by category
export const mockQuestionTemplates: MockQuestion[] = [
  // Opening / Introduction
  {
    id: "tell-me-about-yourself",
    round: 1,
    category: "Opening",
    question: "Tell me about yourself.",
    suggestedAnswer: "Use a structured approach:\n\n1. Current role and key achievement (15 seconds)\n2. Relevant experience that led you here (30 seconds)\n3. Why you're excited about THIS role at THIS company (15 seconds)\n\nCustomize this with your actual background and the specific role/company.",
    timeLimit: 60
  },
  {
    id: "why-this-role",
    round: 1,
    category: "Opening",
    question: "Why are you interested in this role?",
    suggestedAnswer: "Connect THREE things:\n\n1. What you're looking for in your next role\n2. How this role provides that\n3. Why you're uniquely qualified\n\nBe specific about the company and role - avoid generic answers.",
    timeLimit: 60
  },

  // Strategic Thinking
  {
    id: "approach-first-90-days",
    round: 2,
    category: "Strategic",
    question: "How would you approach your first 90 days in this role?",
    suggestedAnswer: "Use a phased approach:\n\nDays 1-30: Learn\n- Understand the product, market, customers\n- Build relationships with team and stakeholders\n- Review existing accounts/pipeline\n\nDays 31-60: Contribute\n- Start executing on immediate priorities\n- Identify quick wins\n- Develop longer-term strategy\n\nDays 61-90: Lead\n- Own your full responsibilities\n- Share insights and recommendations\n- Demonstrate measurable progress",
    timeLimit: 90
  },
  {
    id: "biggest-challenge",
    round: 2,
    category: "Strategic",
    question: "What do you see as the biggest challenge in this role, and how would you address it?",
    suggestedAnswer: "Show you've researched:\n\n1. Identify a real challenge (from job description, company research, or industry trends)\n2. Explain why it's challenging\n3. Outline your approach to addressing it\n4. Reference relevant experience\n\nThis tests your research and strategic thinking.",
    timeLimit: 90
  },

  // Behavioral / STAR
  {
    id: "biggest-achievement",
    round: 3,
    category: "Behavioral",
    question: "Tell me about your biggest professional achievement.",
    suggestedAnswer: "Use STAR format:\n\nSituation: Set the context\nTask: What was the challenge or goal?\nAction: What did YOU do? (Be specific)\nResult: Quantify the impact\n\nChoose an achievement relevant to this role. Include numbers and business impact.",
    timeLimit: 90
  },
  {
    id: "difficult-stakeholder",
    round: 3,
    category: "Behavioral",
    question: "Tell me about a time you dealt with a difficult stakeholder or customer.",
    suggestedAnswer: "Use STAR format:\n\nSituation: Who was involved and what was the issue?\nTask: What did you need to accomplish?\nAction: How did you build the relationship and solve the problem?\nResult: What was the outcome?\n\nShow empathy, communication skills, and conflict resolution.",
    timeLimit: 90
  },
  {
    id: "failed-or-learned",
    round: 3,
    category: "Behavioral",
    question: "Tell me about a time you failed or made a mistake. What did you learn?",
    suggestedAnswer: "Be authentic and show growth:\n\n1. Describe the situation honestly\n2. Take ownership - don't blame others\n3. Explain what you learned\n4. Show how you've applied that learning since\n\nChoose a real failure that wasn't catastrophic and shows self-awareness.",
    timeLimit: 90
  },

  // Process & Execution
  {
    id: "prioritization",
    round: 4,
    category: "Process",
    question: "How do you prioritize when you have multiple competing priorities?",
    suggestedAnswer: "Show a framework:\n\n1. Assess impact vs. effort/urgency\n2. Align with team/company goals\n3. Communicate trade-offs to stakeholders\n4. Build in flexibility for high-priority interrupts\n\nGive a specific example of using this approach.",
    timeLimit: 60
  },
  {
    id: "staying-organized",
    round: 4,
    category: "Process",
    question: "How do you stay organized and manage your workflow?",
    suggestedAnswer: "Describe your system:\n\n1. Tools you use (CRM, project management, calendar, etc.)\n2. Daily/weekly rituals\n3. How you track commitments\n4. How you ensure nothing falls through the cracks\n\nBe specific - they want to know you're disciplined.",
    timeLimit: 60
  },

  // Collaboration
  {
    id: "cross-functional-collaboration",
    round: 5,
    category: "Collaboration",
    question: "How do you work with cross-functional teams?",
    suggestedAnswer: "Show you're a team player:\n\n1. How you build relationships proactively\n2. How you communicate and align on goals\n3. How you handle disagreements\n4. Example of successful collaboration\n\nEmphasize shared goals over individual wins.",
    timeLimit: 60
  },

  // Closing
  {
    id: "strengths-weaknesses",
    round: 6,
    category: "Closing",
    question: "What are your greatest strengths and weaknesses?",
    suggestedAnswer: "Strengths: Choose 2-3 relevant to the role with examples\n\nWeaknesses: Choose something real but not disqualifying:\n- Show self-awareness\n- Explain what you're doing to improve\n- Ideally, show progress you've made\n\nAvoid humble-brags ('I work too hard').",
    timeLimit: 90
  },
  {
    id: "questions-for-interviewer",
    round: 6,
    category: "Closing",
    question: "What questions do you have for me?",
    suggestedAnswer: "Always have 3-5 prepared questions:\n\n1. About their experience/perspective\n2. About team priorities or challenges\n3. About success metrics or expectations\n4. About company culture or growth\n5. About next steps\n\nAvoid questions about benefits/PTO in early rounds. Ask questions that show strategic thinking.",
    timeLimit: 90
  }
];

// Utility functions
export function getQuestionsByRound(round: number): MockQuestion[] {
  return mockQuestionTemplates.filter(q => q.round === round);
}

export function getQuestionsByCategory(category: string): MockQuestion[] {
  return mockQuestionTemplates.filter(q => q.category === category);
}

export function getAllCategories(): string[] {
  const categories = new Set(mockQuestionTemplates.map(q => q.category));
  return Array.from(categories);
}

export function getTotalRounds(): number {
  return Math.max(...mockQuestionTemplates.map(q => q.round));
}

export function getMockInterviewPrompts() {
  return mockInterviewPrompts;
}

// For backward compatibility, export as mockQuestions
export const mockQuestions = mockQuestionTemplates;
