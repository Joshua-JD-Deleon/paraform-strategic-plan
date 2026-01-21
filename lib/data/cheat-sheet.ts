export interface CheatSheetTemplate {
  id: string;
  title: string;
  description: string;
  prompt: string;
  promptBlocks: { key: string; description: string; example?: string }[];
  defaultContent: string;
  category: string;
}

/**
 * Cheat Sheet Templates
 * Quick reference sections for creating a one-page interview prep sheet
 */
export const cheatSheetTemplates: CheatSheetTemplate[] = [
  {
    id: 'paraform-quick-reference',
    title: 'Paraform Quick Reference',
    description: 'Key facts and metrics for Paraform Account Manager interview',
    category: 'Paraform-Specific',
    prompt: `Create a quick reference sheet for my Paraform Account Manager interview.

Include:
1. Company Facts - founding year, funding, team size, growth stage
2. Business Model - two-sided marketplace, bounty structure, how money flows
3. Key Metrics - GMV definitions, recruiter activation, placement velocity
4. Account Manager KPIs - what metrics I'll be measured on
5. Recent News - funding rounds, product launches, customer wins
6. Leadership Team - key executives I should know
7. Culture & Values - what they look for in candidates
8. My Relevant Stats - $8M+ revenue, marketplace experience, account management

Format for easy scanning during final prep.`,
    promptBlocks: [
      { key: 'YOUR_STATS', description: 'Your key achievements', example: '$8M+ closed, 95% retention' },
    ],
    defaultContent: `**PARAFORM AT A GLANCE**

**Company Basics:**
- Two-sided recruiting marketplace
- Companies post jobs → Freelance recruiters earn bounties
- Focus: Tech & startup hiring

**Business Model:**
- Companies pay success-based bounties (% of first-year salary)
- Recruiters earn majority of bounty on successful placements
- Paraform earns platform fee

**Key Metrics:**
- GMV (Gross Merchandise Value) = Total bounties transacted
- Recruiter Activation Rate = Active recruiters / Total recruiters
- Placement Velocity = Time from job post to successful hire
- Company Retention = Repeat customers

**Account Manager Role:**
- Drive GMV growth through portfolio optimization
- Activate and support recruiting partners
- Balance company needs with recruiter success
- Own revenue retention and expansion

**Your Differentiators:**
- $8M+ closed revenue across multiple roles
- Two-sided marketplace understanding
- Account management methodology
- Strategic growth mindset`,
  },
  {
    id: 'company-facts',
    title: 'Company Facts',
    description: 'Essential company information at a glance',
    category: 'Quick Reference',
    prompt: `Create a concise company fact sheet for [COMPANY]:

**Company Basics:**
- Founded: [Year]
- Headquarters: [Location]
- Size: [Employees/Revenue]
- Leadership: CEO/Key Executives
- Funding/Status: [Public/Private/PE-backed]

**What They Do:**
- Product/Service: [Brief description]
- Target Market: [Who they sell to]
- Value Proposition: [Why customers choose them]

**Recent News (Last 6 Months):**
- [2-3 recent announcements, product launches, or major wins]

**Culture Highlights:**
- Core Values: [Key values]
- Work Style: [Remote/Hybrid/In-office]

Keep it brief - this should fit in a small section of a one-page cheat sheet.`,
    promptBlocks: [
      { key: 'COMPANY', description: 'Company you are interviewing with', example: 'Stripe' },
    ],
    defaultContent: `Company Founded: [Year] | HQ: [Location]
Size: [# Employees] | Status: [Public/Private]
CEO: [Name]

What They Do:
[Brief product/service description]
[Target customers]

Recent News:
- [Major announcement or product launch]
- [Partnership or customer win]

Values: [2-3 key company values]`,
  },
  {
    id: 'role-requirements',
    title: 'Role Requirements',
    description: 'What the job requires and key success factors',
    category: 'Quick Reference',
    prompt: `Summarize the key requirements for [ROLE] at [COMPANY]:

**Core Responsibilities:**
- [Main day-to-day activities]
- [Key projects or initiatives]
- [Who you'll work with]

**Required Skills:**
- Technical: [Key technical skills]
- Soft Skills: [Communication, leadership, etc.]
- Experience: [Years/industry background needed]

**Success Metrics:**
- [How performance is measured]
- [Key KPIs or quotas]

**What Makes Someone Successful:**
- [Top 2-3 traits of high performers in this role]

Format as bullet points for quick reference.`,
    promptBlocks: [
      { key: 'ROLE', description: 'Role you are applying for', example: 'Account Executive' },
      { key: 'COMPANY', description: 'Company name', example: 'Notion' },
    ],
    defaultContent: `Core Responsibilities:
- [Primary activity - e.g., "Manage 50-75 enterprise accounts"]
- [Secondary activity - e.g., "Drive upsell and expansion"]
- [Collaboration - e.g., "Work with CS and Product teams"]

Required Skills:
- [Technical skill - e.g., "Salesforce, sales methodology"]
- [Soft skill - e.g., "Executive communication"]
- [Experience - e.g., "3+ years enterprise SaaS sales"]

Success Metrics:
- [KPI - e.g., "120% quota attainment"]
- [Metric - e.g., "$1M+ ARR booked annually"]

Top Performers Are:
- [Trait - e.g., "Consultative and customer-focused"]
- [Trait - e.g., "Strong at multi-threading accounts"]`,
  },
  {
    id: 'your-stats',
    title: 'Your Key Stats',
    description: 'Your most impressive numbers and achievements',
    category: 'Quick Reference',
    prompt: `Help me create a "brag sheet" of my top career stats and achievements for a [ROLE] interview:

Based on my background:
- [YOUR_EXPERIENCE] years in [YOUR_INDUSTRY]
- Previous roles: [YOUR_ROLES]
- Key achievements: [YOUR_ACHIEVEMENTS]
- Top skills: [YOUR_SKILLS]

Format as:
**Top Achievements:**
- [Achievement with metric - e.g., "169% quota attainment in 2023"]
- [Achievement with metric - e.g., "$900K largest single deal closed"]
- [Achievement with metric - e.g., "95% customer retention rate"]

**Key Skills:**
- [Skill 1] | [Skill 2] | [Skill 3]

**Career Progression:**
[Brief summary showing upward trajectory]

Keep it concise - numbers and results only.`,
    promptBlocks: [
      { key: 'ROLE', description: 'Target role', example: 'Senior Account Executive' },
      { key: 'YOUR_EXPERIENCE', description: 'Years of experience', example: '5' },
      { key: 'YOUR_INDUSTRY', description: 'Your industry', example: 'B2B SaaS' },
      { key: 'YOUR_ROLES', description: 'Previous titles', example: 'SDR, AE, Senior AE' },
      { key: 'YOUR_ACHIEVEMENTS', description: 'Top accomplishments', example: '140% quota, $1M+ deals' },
      { key: 'YOUR_SKILLS', description: 'Key strengths', example: 'Enterprise sales, MEDDIC' },
    ],
    defaultContent: `Top Achievements:
- [Metric - e.g., "169% average quota attainment"]
- [Biggest Win - e.g., "$900K largest deal closed"]
- [Impact - e.g., "Top 5% of sales team 2 years running"]

Key Skills:
[Skill 1] | [Skill 2] | [Skill 3] | [Skill 4]

Career Progression:
[Start Role] → [Mid Role] → [Current/Most Recent Role]
[Brief summary - e.g., "Promoted twice in 3 years based on performance"]`,
  },
  {
    id: 'talking-points',
    title: 'Talking Points',
    description: 'Key points to weave into your answers',
    category: 'Quick Reference',
    prompt: `Create talking points I should weave into my [ROLE] interview at [COMPANY]:

**Why This Company:**
- [2-3 specific reasons you're excited about this company]
- [Connection between their mission and your values]

**Why This Role:**
- [Why this is the logical next step in your career]
- [What excites you about the opportunity]

**Your Value Proposition:**
- [How your background uniquely fits their needs]
- [What you bring that others might not]

**Connection Points:**
- [Any shared background, mutual connections, or relevant experience]
- [Ways your experience aligns with their challenges]

**Questions That Demonstrate Interest:**
- [1-2 strategic questions that show you've done research]

Keep each point to 1-2 sentences max.`,
    promptBlocks: [
      { key: 'ROLE', description: 'Target role', example: 'Customer Success Manager' },
      { key: 'COMPANY', description: 'Company name', example: 'Figma' },
    ],
    defaultContent: `Why This Company:
- [Reason 1 - e.g., "Market leader in [space] with strong growth trajectory"]
- [Reason 2 - e.g., "Values align with my belief in [value]"]

Why This Role:
- [Career fit - e.g., "Natural next step after managing [type] accounts"]
- [Opportunity - e.g., "Chance to work on [specific challenge]"]

Your Unique Value:
- [Differentiator - e.g., "Deep experience in [industry] + technical background"]
- [Strength - e.g., "Track record of [specific type of success]"]

Connection Points:
- [Shared experience - e.g., "Used [their product] at previous company"]
- [Mutual contact - e.g., "Know [person] who speaks highly of culture"]

Strategic Questions to Ask:
- [Question showing research - e.g., "Saw you recently launched [product]..."]
- [Question showing strategic thinking - e.g., "How does team prioritize..."]`,
  },
  {
    id: 'questions-to-ask',
    title: 'Questions to Ask',
    description: 'Thoughtful questions for each interview round',
    category: 'Quick Reference',
    prompt: `Generate 10-12 strategic questions I should ask during my [ROLE] interview at [COMPANY]:

**About the Role:**
- [Questions about day-to-day, success metrics, challenges]

**About the Team:**
- [Questions about team dynamics, collaboration, culture]

**About the Company:**
- [Questions about strategy, market position, priorities]

**About Growth:**
- [Questions about development, career path, learning]

**Closer Questions (Final Round):**
- [Questions that show you're seriously evaluating them]

Make questions:
- Specific to [COMPANY] and [INDUSTRY] where possible
- Appropriate for different interviewer levels (peer, manager, executive)
- Open-ended and thoughtful
- Show you've done research

Select 3-4 questions per interviewer.`,
    promptBlocks: [
      { key: 'ROLE', description: 'Target role', example: 'Solutions Engineer' },
      { key: 'COMPANY', description: 'Company name', example: 'Datadog' },
      { key: 'INDUSTRY', description: 'Industry/market', example: 'observability platform' },
    ],
    defaultContent: `About the Role:
- What does success look like in the first 90 days?
- What are the biggest challenges someone in this role faces?
- How is performance measured and reviewed?

About the Team:
- How does this team collaborate with [other teams]?
- What's the team's working style? (sync vs async, meetings, etc.)
- What do you value most in team members?

About the Company:
- What are the company's top priorities for the next year?
- How is [Company] positioned against [main competitor]?
- What excites you most about where the company is heading?

About Growth:
- What learning/development opportunities are available?
- What's the typical career progression from this role?
- How does the company support professional growth?

Closer Questions:
- What would make you confident in your decision to hire me?
- What are the next steps in the process?
- Is there anything about my background I can clarify?`,
  },
];

/**
 * Get cheat sheet template by ID
 */
export function getCheatSheetTemplateById(id: string): CheatSheetTemplate | undefined {
  return cheatSheetTemplates.find(template => template.id === id);
}

/**
 * Get templates by category
 */
export function getCheatSheetTemplatesByCategory(category: string): CheatSheetTemplate[] {
  return cheatSheetTemplates.filter(template => template.category === category);
}

/**
 * Get all unique categories
 */
export function getCheatSheetCategories(): string[] {
  const categories = new Set(cheatSheetTemplates.map(t => t.category));
  return Array.from(categories);
}
