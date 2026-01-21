import { InterviewerProfile } from '@/types/interview';

/**
 * Interviewer Research Template
 *
 * This is a generalized template for researching any interviewer.
 * Use the AI prompts to generate personalized research for your specific interviewer.
 */

export const interviewerTemplate: InterviewerProfile = {
  id: "interviewer-research-template",
  name: "[Your Interviewer's Name]",
  role: "[Their Role]",
  company: "[Their Company]",
  background: {
    education: "Research their educational background on LinkedIn",
    previousRoles: [
      "Find their career progression on LinkedIn",
      "Look for relevant previous companies in similar industries",
      "Identify any career pivots or specialty areas"
    ],
    philosophies: [
      "Search for their LinkedIn posts or articles about leadership, sales, or industry topics",
      "Look for quotes in company blog posts or press releases",
      "Check if they've spoken at conferences or podcasts",
      "Review their activity - what do they engage with on LinkedIn?",
      "What values seem important based on their content?"
    ]
  },
  linkedIn: "https://www.linkedin.com/in/their-profile/",
  questionsTheyAsk: [
    "Use the AI prompts below to generate likely questions based on their role",
    "Review their LinkedIn content for themes they care about",
    "Research common questions for their level and function",
    "Think about what THEY need to evaluate for this role"
  ],
  connectionPoints: [
    "Shared alma mater, previous companies, or career paths?",
    "Similar backgrounds (consulting → sales, technical → business, etc.)?",
    "Mutual connections on LinkedIn?",
    "Shared values or philosophies mentioned in their content?",
    "Common interests or professional communities?"
  ],
  whatTheyValue: [
    "Strategic thinking - Can you think beyond tactics?",
    "Results orientation - Do you have quantifiable achievements?",
    "Cultural fit - Would they want to work with you?",
    "Coachability - Are you open to feedback and growth?",
    "Collaboration - Can you work effectively with teams?",
    "Customer focus - Do you prioritize customer outcomes?"
  ],
  tips: [
    "Reference something specific from their LinkedIn content - shows you did the work",
    "Ask thoughtful questions about their priorities in this role",
    "Be authentic - don't try to be who you think they want",
    "Show strategic thinking appropriate for the level",
    "Demonstrate understanding of their business challenges",
    "Don't come across as a lone wolf - emphasize collaboration",
    "Don't skip over details - be specific with examples",
    "Don't trash talk previous employers or colleagues"
  ]
};

// AI Prompts for researching interviewers
export const interviewerResearchPrompts = {
  backgroundResearch: {
    prompt: `I'm preparing for an interview with [INTERVIEWER_NAME] who is [THEIR_ROLE] at [COMPANY].

Their LinkedIn profile is: [LINKEDIN_URL]

Please help me research and analyze:
1. Their career trajectory and what it tells me about their priorities
2. Their educational background and how it might inform their perspective
3. Any content they've shared (posts, articles, comments) and what themes emerge
4. What they likely value in candidates based on their background
5. Connection points I might have with them (shared experiences, backgrounds, values)
6. How I should position my experience to resonate with their perspective

Please structure your response to help me prepare for a productive conversation.`,
    blocks: [
      { key: "INTERVIEWER_NAME", description: "Full name", example: "Sarah Johnson" },
      { key: "THEIR_ROLE", description: "Current title", example: "VP of Sales" },
      { key: "COMPANY", description: "Their company", example: "TechCorp" },
      { key: "LINKEDIN_URL", description: "Their LinkedIn profile URL" }
    ]
  },

  likelyQuestions: {
    prompt: `I'm interviewing with [INTERVIEWER_NAME] who is [THEIR_ROLE] at [COMPANY] for a [YOUR_ROLE] position.

Based on their role and the position I'm interviewing for, what are the most likely questions they'll ask me?

Consider:
- Questions specific to evaluating [YOUR_ROLE] capabilities
- Questions that assess strategic thinking and execution
- Behavioral questions about collaboration and results
- Questions about handling specific challenges common in this role
- Questions about cultural fit and working style

Please categorize the questions by topic area (Strategic, Behavioral, Technical, etc.) and explain WHY they might ask each one.`,
    blocks: [
      { key: "INTERVIEWER_NAME", description: "Their name", example: "John Smith" },
      { key: "THEIR_ROLE", description: "Their title", example: "Sales Director" },
      { key: "COMPANY", description: "Their company", example: "DataCo" },
      { key: "YOUR_ROLE", description: "Role you're interviewing for", example: "Account Executive" }
    ]
  },

  connectionPoints: {
    prompt: `I'm preparing to interview with [INTERVIEWER_NAME] ([THEIR_ROLE] at [COMPANY]).

Their background:
[THEIR_BACKGROUND]

My background:
[YOUR_BACKGROUND]

Please identify:
1. Connection points we share (career paths, companies, education, geographies, etc.)
2. How I can authentically reference these connections in conversation
3. Shared values or philosophies I can emphasize
4. How to position my experience to resonate with their perspective
5. Topics or themes from their content I should be prepared to discuss

Help me find authentic common ground that shows I've done my research.`,
    blocks: [
      { key: "INTERVIEWER_NAME", description: "Their name" },
      { key: "THEIR_ROLE", description: "Their title" },
      { key: "COMPANY", description: "Their company" },
      { key: "THEIR_BACKGROUND", description: "Summary from LinkedIn - education, previous roles, content themes" },
      { key: "YOUR_BACKGROUND", description: "Your relevant background to compare" }
    ]
  },

  questionsToAsk: {
    prompt: `I'm interviewing with [INTERVIEWER_NAME] who is [THEIR_ROLE] at [COMPANY].

Based on their role and recent [COMPANY] developments, what are the most insightful questions I should ask them?

I want questions that:
1. Show I understand their business and challenges
2. Demonstrate strategic thinking
3. Reveal information I need to make a decision
4. Reference their specific responsibilities or recent initiatives
5. Are appropriate for their level (not too tactical, not too broad)

Please suggest 5-7 thoughtful questions and explain why each would be valuable to ask.`,
    blocks: [
      { key: "INTERVIEWER_NAME", description: "Their name" },
      { key: "THEIR_ROLE", description: "Their title" },
      { key: "COMPANY", description: "Their company" }
    ]
  }
};

// Utility functions
export function getInterviewerTemplate(): InterviewerProfile {
  return interviewerTemplate;
}

export function getInterviewerResearchPrompts() {
  return interviewerResearchPrompts;
}
