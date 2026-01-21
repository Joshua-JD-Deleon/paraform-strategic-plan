export interface QATemplate {
  id: string;
  category: 'behavioral' | 'role-specific' | 'company-specific' | 'situational' | 'ask-them' | 'paraform-specific';
  question: string;
  description: string;
  defaultAnswer: string;
  prompt: string;
  promptBlocks: { key: string; description: string; example?: string }[];
}

/**
 * Interview Q&A Templates
 * Generalized templates for common interview questions with AI prompts
 */
export const qaTemplates: QATemplate[] = [
  // Behavioral Questions
  {
    id: 'tell-me-about-failure',
    category: 'behavioral',
    question: 'Tell me about a time you failed',
    description: 'Show self-awareness and learning from mistakes',
    defaultAnswer: `[Describe a specific failure or setback you experienced]

What I learned:
- [Key lesson 1]
- [Key lesson 2]
- [Key lesson 3]

How it changed my approach:
[Explain how this experience improved your work or decision-making going forward]`,
    prompt: `Write a compelling answer to "Tell me about a time you failed" for a job interview.

Context:
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- Failure story: [BRIEF_DESCRIPTION_OF_FAILURE]
- What you learned: [KEY_LESSONS]
- How you improved: [CHANGES_YOU_MADE]

Use the STAR format (Situation, Task, Action, Result). Be authentic and focus on growth. Keep it under 150 words.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'Salesforce' },
      { key: 'ROLE_TITLE', description: 'Role you are applying for', example: 'Account Manager' },
      { key: 'BRIEF_DESCRIPTION_OF_FAILURE', description: 'What went wrong', example: 'Lost a major renewal' },
      { key: 'KEY_LESSONS', description: 'What you learned', example: 'Needed earlier executive engagement' },
      { key: 'CHANGES_YOU_MADE', description: 'How you adapted', example: 'Created QBR process' },
    ],
  },
  {
    id: 'biggest-weakness',
    category: 'behavioral',
    question: 'What is your biggest weakness?',
    description: 'Show self-awareness and commitment to growth',
    defaultAnswer: `[Describe a real weakness you are working on]

How I am addressing it:
- [Step 1: What you are doing to improve]
- [Step 2: Systems or habits you have put in place]
- [Step 3: Progress you have made]

Example of improvement:
[Share a specific instance where you successfully managed this weakness]`,
    prompt: `Write an honest answer to "What is your biggest weakness?" for a job interview.

Context:
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- Your weakness: [REAL_WEAKNESS]
- How you are improving: [IMPROVEMENT_ACTIONS]
- Progress made: [SPECIFIC_EXAMPLE]

Be authentic. Choose a real weakness but show how you are actively working on it. Avoid cliches. Keep it under 150 words.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'Adobe' },
      { key: 'ROLE_TITLE', description: 'Role you are applying for', example: 'Project Manager' },
      { key: 'REAL_WEAKNESS', description: 'Your actual weakness', example: 'Can be impatient with slow processes' },
      { key: 'IMPROVEMENT_ACTIONS', description: 'What you are doing', example: 'Practicing active listening, seeking to understand first' },
      { key: 'SPECIFIC_EXAMPLE', description: 'Example of progress', example: 'Recently slowed down to build consensus, led to better outcome' },
    ],
  },
  {
    id: 'conflict-with-coworker',
    category: 'behavioral',
    question: 'Tell me about a conflict with a coworker',
    description: 'Demonstrate collaboration and conflict resolution skills',
    defaultAnswer: `[Describe the situation and the conflict]

My approach:
- [Step 1: How you addressed it]
- [Step 2: What you did to resolve it]
- [Step 3: The outcome]

Result:
[Explain how the relationship improved or what you accomplished together afterward]`,
    prompt: `Write a professional answer to "Tell me about a conflict with a coworker" for a job interview.

Context:
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- Conflict situation: [WHAT_HAPPENED]
- Your approach: [HOW_YOU_HANDLED_IT]
- Resolution: [THE_OUTCOME]
- Long-term impact: [RELATIONSHIP_AFTER]

Use the STAR format. Show empathy, professionalism, and focus on solutions not blame. Keep it under 150 words.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'Microsoft' },
      { key: 'ROLE_TITLE', description: 'Role you are applying for', example: 'Software Engineer' },
      { key: 'WHAT_HAPPENED', description: 'The conflict', example: 'Disagreement on technical approach' },
      { key: 'HOW_YOU_HANDLED_IT', description: 'Your resolution approach', example: 'Scheduled discussion, heard their perspective' },
      { key: 'THE_OUTCOME', description: 'What was resolved', example: 'Found hybrid solution, better than either original idea' },
      { key: 'RELATIONSHIP_AFTER', description: 'Long-term relationship', example: 'Became trusted collaborators' },
    ],
  },
  {
    id: 'greatest-achievement',
    category: 'behavioral',
    question: 'What is your greatest professional achievement?',
    description: 'Showcase your best work and impact',
    defaultAnswer: `[Describe the situation and what you accomplished]

The challenge:
[What made this difficult or significant]

My approach:
- [What you did]
- [How you did it]
- [Who you worked with]

Results:
- [Measurable outcome 1]
- [Measurable outcome 2]
- [Impact on team/company]`,
    prompt: `Write a compelling answer to "What is your greatest professional achievement?" for a job interview.

Context:
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- Your achievement: [WHAT_YOU_ACCOMPLISHED]
- The challenge: [WHAT_MADE_IT_DIFFICULT]
- Your approach: [HOW_YOU_DID_IT]
- Measurable results: [SPECIFIC_METRICS]

Use STAR format. Focus on impact and what made it meaningful. Include specific numbers. Keep it under 175 words.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'Google' },
      { key: 'ROLE_TITLE', description: 'Role you are applying for', example: 'Product Manager' },
      { key: 'WHAT_YOU_ACCOMPLISHED', description: 'Your achievement', example: 'Launched new product feature' },
      { key: 'WHAT_MADE_IT_DIFFICULT', description: 'The challenge', example: 'Tight deadline, cross-functional team of 15' },
      { key: 'HOW_YOU_DID_IT', description: 'Your approach', example: 'Created clear roadmap, daily standups, removed blockers' },
      { key: 'SPECIFIC_METRICS', description: 'Results with numbers', example: '40% increase in user engagement, shipped on time' },
    ],
  },
  {
    id: 'handling-pressure',
    category: 'behavioral',
    question: 'How do you handle pressure and stress?',
    description: 'Show resilience and coping strategies',
    defaultAnswer: `I thrive under pressure when [describe conditions that help you perform].

My approach to managing stress:
- [Strategy 1: e.g., prioritization, organization]
- [Strategy 2: e.g., breaking down large goals]
- [Strategy 3: e.g., maintaining perspective]

Example:
[Share a specific story of handling high-pressure situation successfully]`,
    prompt: `Write an authentic answer to "How do you handle pressure and stress?" for a job interview.

Context:
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- When you thrive: [CONDITIONS_THAT_HELP_YOU]
- Your strategies: [HOW_YOU_COPE]
- Example situation: [SPECIFIC_HIGH_PRESSURE_STORY]
- The outcome: [WHAT_HAPPENED]

Be honest about what energizes you and what drains you. Show self-awareness. Keep it under 150 words.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'Amazon' },
      { key: 'ROLE_TITLE', description: 'Role you are applying for', example: 'Operations Manager' },
      { key: 'CONDITIONS_THAT_HELP_YOU', description: 'What helps you perform', example: 'Clear deadlines and priorities' },
      { key: 'HOW_YOU_COPE', description: 'Your stress management', example: 'Stay organized, focus on controllables' },
      { key: 'SPECIFIC_HIGH_PRESSURE_STORY', description: 'Example situation', example: 'Peak season with multiple delays' },
      { key: 'WHAT_HAPPENED', description: 'The result', example: 'Reorganized workflow, met all deadlines' },
    ],
  },

  // Role-Specific Questions
  {
    id: 'describe-your-process',
    category: 'role-specific',
    question: 'Describe your [work] process',
    description: 'Show your methodology and approach to your role',
    defaultAnswer: `My process follows [X] steps:

1. [Discovery/Research: What you do first]
2. [Planning: How you organize the work]
3. [Execution: Your approach to doing the work]
4. [Review/Iteration: How you ensure quality]
5. [Delivery/Follow-up: How you complete and hand off]

Framework I use: [Name any methodology or framework you follow]`,
    prompt: `Write a detailed answer describing your work process for a job interview.

Context:
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- Your process steps: [YOUR_PROCESS_STEPS]
- Methodology you follow: [FRAMEWORK]
- Example project: [SPECIFIC_PROJECT_STORY]
- Project outcome: [RESULTS_METRICS]

Be specific and show how your process drives results. Include frameworks you use. Keep it under 200 words.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'Figma' },
      { key: 'ROLE_TITLE', description: 'Role you are applying for', example: 'UX Designer' },
      { key: 'YOUR_PROCESS_STEPS', description: 'Your process', example: 'User research, wireframes, prototypes, testing, iteration' },
      { key: 'FRAMEWORK', description: 'Methodology', example: 'Design thinking, Jobs-to-be-Done' },
      { key: 'SPECIFIC_PROJECT_STORY', description: 'Example', example: 'Redesigned onboarding flow' },
      { key: 'RESULTS_METRICS', description: 'Outcome', example: '60% improvement in activation rate' },
    ],
  },
  {
    id: 'handling-difficult-situations',
    category: 'role-specific',
    question: 'How do you handle [role-specific challenge]?',
    description: 'Show your ability to overcome common role challenges',
    defaultAnswer: `My approach to [challenge]:

1. [First step: How you assess the situation]
2. [Second step: Your initial response]
3. [Third step: How you resolve it]
4. [Fourth step: How you prevent recurrence]

Example:
[Share a specific story of handling this challenge successfully]`,
    prompt: `Write a strong answer to "How do you handle [role-specific challenge]?" for a job interview.

Context:
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- Common challenge: [SPECIFIC_CHALLENGE]
- Your framework: [YOUR_APPROACH]
- Example situation: [SPECIFIC_EXAMPLE]
- The outcome: [RESULT]

Show a systematic approach. Include a specific example with results. Keep it under 200 words.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'Stripe' },
      { key: 'ROLE_TITLE', description: 'Role you are applying for', example: 'Customer Success Manager' },
      { key: 'SPECIFIC_CHALLENGE', description: 'Role challenge', example: 'Customer churn risk' },
      { key: 'YOUR_APPROACH', description: 'Your framework', example: 'Early warning system, proactive outreach' },
      { key: 'SPECIFIC_EXAMPLE', description: 'Example', example: 'At-risk enterprise account' },
      { key: 'RESULT', description: 'Outcome', example: 'Saved account, expanded by 40%' },
    ],
  },
  {
    id: 'technical-skills',
    category: 'role-specific',
    question: 'What technical skills make you effective in this role?',
    description: 'Highlight relevant technical competencies',
    defaultAnswer: `Key technical skills I bring:

1. [Skill 1]: [How you use it and proficiency level]
2. [Skill 2]: [How you use it and proficiency level]
3. [Skill 3]: [How you use it and proficiency level]

Example of impact:
[Share how these skills drove a specific result in a past role]`,
    prompt: `Write a targeted answer about your technical skills for a job interview.

Context:
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- Required skills from job description: [JOB_REQUIREMENTS]
- Your relevant skills: [YOUR_TECHNICAL_SKILLS]
- How you use them: [APPLICATION]
- Impact example: [SPECIFIC_RESULT]

Focus on skills relevant to the role. Include proficiency levels and real examples. Keep it under 175 words.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'Meta' },
      { key: 'ROLE_TITLE', description: 'Role you are applying for', example: 'Data Analyst' },
      { key: 'JOB_REQUIREMENTS', description: 'Skills from posting', example: 'SQL, Python, data visualization' },
      { key: 'YOUR_TECHNICAL_SKILLS', description: 'Your skills', example: 'Advanced SQL, Python (pandas, scikit-learn), Tableau' },
      { key: 'APPLICATION', description: 'How you use them', example: 'Build dashboards, run A/B tests, predictive models' },
      { key: 'SPECIFIC_RESULT', description: 'Impact', example: 'Dashboard drove 15% efficiency gain' },
    ],
  },
  {
    id: 'keeping-up-with-industry',
    category: 'role-specific',
    question: 'How do you stay current in your field?',
    description: 'Show commitment to continuous learning',
    defaultAnswer: `I stay current through:

Learning sources:
- [Resource 1: Blogs, podcasts, courses, etc.]
- [Resource 2: Communities, conferences, etc.]
- [Resource 3: Practice, projects, etc.]

Recent example:
[Share something new you learned and how you applied it]

Why it matters:
[Connect learning to better performance in your role]`,
    prompt: `Write an engaging answer to "How do you stay current in your field?" for a job interview.

Context:
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- Your field: [INDUSTRY_OR_SPECIALTY]
- How you learn: [LEARNING_METHODS]
- Recent learning: [WHAT_YOU_LEARNED_RECENTLY]
- How you applied it: [PRACTICAL_APPLICATION]

Show genuine curiosity and proactive learning. Include specific examples. Keep it under 150 words.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'OpenAI' },
      { key: 'ROLE_TITLE', description: 'Role you are applying for', example: 'Machine Learning Engineer' },
      { key: 'INDUSTRY_OR_SPECIALTY', description: 'Your field', example: 'AI/ML' },
      { key: 'LEARNING_METHODS', description: 'How you learn', example: 'Papers, courses, implementing models' },
      { key: 'WHAT_YOU_LEARNED_RECENTLY', description: 'Recent learning', example: 'New transformer architecture' },
      { key: 'PRACTICAL_APPLICATION', description: 'How you used it', example: 'Applied to project, improved performance 20%' },
    ],
  },

  // Company-Specific Questions
  {
    id: 'why-this-role',
    category: 'company-specific',
    question: 'Why are you interested in this role?',
    description: 'Show alignment and genuine interest',
    defaultAnswer: `Three reasons this role excites me:

1. [Reason 1: Company/mission alignment]
   [Specific example of why this resonates]

2. [Reason 2: Role responsibilities match strengths]
   [How your experience maps to the role]

3. [Reason 3: Growth opportunity or timing]
   [What you can learn or contribute]

This feels like the right fit because:
[Personal connection to the opportunity]`,
    prompt: `Write a compelling answer to "Why are you interested in this role?" for a job interview.

Context:
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- Company mission/values: [WHAT_APPEALS_TO_YOU]
- Role responsibilities: [HOW_IT_MATCHES_YOUR_SKILLS]
- Your career goals: [WHY_NOW]
- What you bring: [YOUR_VALUE_PROP]

Show genuine enthusiasm and research. Connect your experience to their needs. Keep it under 175 words.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'Airbnb' },
      { key: 'ROLE_TITLE', description: 'Role you are applying for', example: 'Product Marketing Manager' },
      { key: 'WHAT_APPEALS_TO_YOU', description: 'Company alignment', example: 'Mission to belong anywhere, global impact' },
      { key: 'HOW_IT_MATCHES_YOUR_SKILLS', description: 'Role fit', example: 'Go-to-market strategy, storytelling' },
      { key: 'WHY_NOW', description: 'Career timing', example: 'Ready for consumer-focused role' },
      { key: 'YOUR_VALUE_PROP', description: 'What you bring', example: 'Built GTM for 3 product launches' },
    ],
  },
  {
    id: 'why-this-company',
    category: 'company-specific',
    question: 'Why do you want to work here?',
    description: 'Show you have researched the company',
    defaultAnswer: `I am excited about [COMPANY] for several reasons:

Company/Product:
[What they do, why it matters, what differentiates them]

Market Position:
[Their leadership, growth, recent news or milestones]

Culture/Values:
[What you have learned about how they work]

Personal Connection:
[Why this resonates with your career goals or values]

This is the type of company where I can [what you hope to achieve].`,
    prompt: `Write an enthusiastic answer to "Why do you want to work here?" for a job interview.

Context:
- Company: [COMPANY_NAME]
- What they do: [PRODUCT_OR_SERVICE]
- Recent news: [FUNDING_ACQUISITIONS_LAUNCHES]
- What excites you: [SPECIFIC_REASONS]
- Cultural fit: [VALUES_ALIGNMENT]
- Your goals: [WHAT_YOU_WANT_TO_ACHIEVE]

Show deep research. Be specific about what you have learned. Connect to your values. Keep it under 175 words.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'Notion' },
      { key: 'PRODUCT_OR_SERVICE', description: 'What they do', example: 'All-in-one workspace and productivity tool' },
      { key: 'FUNDING_ACQUISITIONS_LAUNCHES', description: 'Recent milestones', example: 'Hit $1B valuation, launched AI features' },
      { key: 'SPECIFIC_REASONS', description: 'What excites you', example: 'Product-led growth, beautiful UX' },
      { key: 'VALUES_ALIGNMENT', description: 'Culture fit', example: 'Focus on craft, user-centric' },
      { key: 'WHAT_YOU_WANT_TO_ACHIEVE', description: 'Your goals', example: 'Build products people love' },
    ],
  },
  {
    id: 'where-see-yourself',
    category: 'company-specific',
    question: 'Where do you see yourself in 5 years?',
    description: 'Show ambition and alignment with career path',
    defaultAnswer: `In 5 years, I see myself [your vision - role, responsibilities, impact].

Short-term (1-2 years):
[Master this role, achieve specific goals]

Mid-term (3-4 years):
[Growth into expanded responsibilities or leadership]

Long-term vision:
[Where you ultimately want to go]

What I know is this: I want to [core value - e.g., build teams, master a craft, drive impact, etc.]. This role is the right step because [connection to your goals].`,
    prompt: `Write an ambitious yet realistic answer to "Where do you see yourself in 5 years?" for a job interview.

Context:
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- Short-term goals: [1_2_YEAR_GOALS]
- Growth path: [WHERE_YOU_WANT_TO_GROW]
- Long-term vision: [ULTIMATE_CAREER_GOAL]
- Core values: [WHAT_MATTERS_TO_YOU]

Show ambition but also commitment to the role. Connect growth to value for the company. Keep it under 150 words.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'Tesla' },
      { key: 'ROLE_TITLE', description: 'Role you are applying for', example: 'Mechanical Engineer' },
      { key: '1_2_YEAR_GOALS', description: 'Near-term goals', example: 'Master manufacturing processes' },
      { key: 'WHERE_YOU_WANT_TO_GROW', description: 'Growth direction', example: 'Lead engineering projects, mentor team' },
      { key: 'ULTIMATE_CAREER_GOAL', description: 'Long-term vision', example: 'Engineering leadership, drive innovation' },
      { key: 'WHAT_MATTERS_TO_YOU', description: 'Core values', example: 'Building sustainable products, technical excellence' },
    ],
  },
  {
    id: 'what-do-you-know',
    category: 'company-specific',
    question: 'What do you know about our company?',
    description: 'Demonstrate thorough research and understanding',
    defaultAnswer: `Based on my research:

Company overview:
[What they do, who they serve, market position]

Recent developments:
[Recent news, product launches, funding, growth]

What stands out:
[Unique aspects - culture, technology, approach]

Why this matters to me:
[How this connects to your interests and experience]`,
    prompt: `Write a well-researched answer to "What do you know about our company?" for a job interview.

Context:
- Company: [COMPANY_NAME]
- What they do: [BUSINESS_MODEL]
- Recent news: [RECENT_DEVELOPMENTS]
- Unique differentiators: [WHAT_MAKES_THEM_SPECIAL]
- Why you care: [PERSONAL_CONNECTION]
- Your relevant experience: [HOW_YOU_FIT]

Show you have done deep research. Be specific and cite recent developments. Keep it under 175 words.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'Spotify' },
      { key: 'BUSINESS_MODEL', description: 'What they do', example: 'Audio streaming platform, 500M+ users' },
      { key: 'RECENT_DEVELOPMENTS', description: 'Recent news', example: 'Launched AI DJ, expanded into audiobooks' },
      { key: 'WHAT_MAKES_THEM_SPECIAL', description: 'Differentiators', example: 'Personalization algorithms, creator tools' },
      { key: 'PERSONAL_CONNECTION', description: 'Why you care', example: 'Passionate about music discovery' },
      { key: 'HOW_YOU_FIT', description: 'Your fit', example: 'Background in recommendation systems' },
    ],
  },

  // Situational Questions
  {
    id: 'handle-difficult-customer',
    category: 'situational',
    question: 'How would you handle a difficult or upset stakeholder?',
    description: 'Show empathy and problem-solving',
    defaultAnswer: `My approach:

1. Listen actively
   [Let them fully express their frustration without interrupting]

2. Acknowledge and validate
   [Show empathy, take ownership where appropriate]

3. Ask clarifying questions
   [Understand the root issue, not just symptoms]

4. Propose solutions
   [Offer options, involve them in the solution]

5. Follow through
   [Execute and check back]

Example:
[Share a specific story of turning around a difficult situation]`,
    prompt: `Write a practical answer to "How would you handle a difficult or upset stakeholder?" for an interview.

Context:
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- Your approach: [YOUR_FRAMEWORK]
- Example situation: [SPECIFIC_DIFFICULT_SITUATION]
- What you did: [YOUR_ACTIONS]
- The outcome: [RESULT]

Show empathy, process, and a real example. Use STAR format for the example. Keep it under 175 words.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'Shopify' },
      { key: 'ROLE_TITLE', description: 'Role you are applying for', example: 'Account Manager' },
      { key: 'YOUR_FRAMEWORK', description: 'Your approach', example: 'Listen, acknowledge, clarify, solve, follow up' },
      { key: 'SPECIFIC_DIFFICULT_SITUATION', description: 'Example situation', example: 'Client upset about feature delays' },
      { key: 'YOUR_ACTIONS', description: 'What you did', example: 'Listened, owned the issue, created workaround plan' },
      { key: 'RESULT', description: 'The outcome', example: 'Retained client, became stronger partner' },
    ],
  },
  {
    id: 'prioritize-multiple-projects',
    category: 'situational',
    question: 'How do you prioritize when you have multiple competing priorities?',
    description: 'Show organizational skills and decision-making',
    defaultAnswer: `My prioritization framework:

1. [Assess urgency and impact]
   [Describe how you evaluate what matters most]

2. [Consider stakeholder needs]
   [How you balance competing demands]

3. [Communicate trade-offs]
   [How you manage expectations]

4. [Review and adjust]
   [How often you reassess priorities]

Example:
[Share a specific story of managing multiple high-priority items successfully]`,
    prompt: `Write a structured answer to "How do you prioritize when you have multiple competing priorities?" for an interview.

Context:
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- Your framework: [PRIORITIZATION_METHOD]
- Example situation: [MULTIPLE_PRIORITIES_STORY]
- How you decided: [DECISION_CRITERIA]
- The outcome: [WHAT_HAPPENED]

Show a clear framework and specific example. Demonstrate strategic thinking. Keep it under 175 words.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'Asana' },
      { key: 'ROLE_TITLE', description: 'Role you are applying for', example: 'Product Manager' },
      { key: 'PRIORITIZATION_METHOD', description: 'Your framework', example: 'Impact vs effort, RICE scoring' },
      { key: 'MULTIPLE_PRIORITIES_STORY', description: 'Example', example: 'Three features requested same quarter' },
      { key: 'DECISION_CRITERIA', description: 'How you chose', example: 'User impact, strategic alignment, resources' },
      { key: 'WHAT_HAPPENED', description: 'Result', example: 'Delivered highest impact, communicated roadmap' },
    ],
  },
  {
    id: 'tight-deadline',
    category: 'situational',
    question: 'Tell me about a time you had to meet a tight deadline',
    description: 'Show time management and performance under pressure',
    defaultAnswer: `Situation:
[Describe the deadline and what was at stake]

My approach:
- [How you planned and organized the work]
- [How you prioritized and focused]
- [What you delegated or eliminated]

Challenges:
[What obstacles you faced]

Result:
[Whether you met the deadline and the outcome]`,
    prompt: `Write a compelling answer to "Tell me about a time you had to meet a tight deadline" for a job interview.

Context:
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- The deadline: [WHAT_WAS_DUE_AND_WHEN]
- Why it was tight: [THE_CHALLENGE]
- Your approach: [HOW_YOU_MANAGED_IT]
- The outcome: [RESULT]

Use STAR format. Show planning, execution, and adaptability. Keep it under 175 words.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'Netflix' },
      { key: 'ROLE_TITLE', description: 'Role you are applying for', example: 'Content Producer' },
      { key: 'WHAT_WAS_DUE_AND_WHEN', description: 'The deadline', example: 'Launch campaign in 2 weeks instead of 6' },
      { key: 'THE_CHALLENGE', description: 'Why tight', example: 'Major event moved up, team at half capacity' },
      { key: 'HOW_YOU_MANAGED_IT', description: 'Your approach', example: 'Reprioritized, daily sprints, cut scope intelligently' },
      { key: 'RESULT', description: 'Outcome', example: 'Launched on time, exceeded engagement goals' },
    ],
  },

  // Paraform-Specific Questions
  {
    id: 'why-paraform',
    category: 'paraform-specific',
    question: 'Why Paraform?',
    description: 'Show understanding of the recruiting marketplace and genuine interest',
    defaultAnswer: `Paraform excites me because:

The Model:
- Two-sided marketplace connecting companies with top recruiters
- Performance-based bounties align incentives for everyone
- Democratizes access to quality talent for companies of all sizes

Why This Resonates:
- I thrive in environments where relationship building drives results
- My $8M+ in closed revenue came from understanding both sides of transactions
- I love the challenge of enabling others to succeed (recruiters) while driving business outcomes

Market Opportunity:
- Recruiting is ripe for disruption - traditional agencies have misaligned incentives
- Paraform's marketplace model creates a win-win-win

Why Now:
[Personal connection - e.g., ready to apply enterprise sales skills to marketplace operations]`,
    prompt: `Write a compelling answer to "Why Paraform?" for an Account Manager interview at Paraform.

Context:
- Your understanding of Paraform: [WHAT_YOU_KNOW_ABOUT_PARAFORM]
- What excites you about marketplaces: [MARKETPLACE_INTEREST]
- Relevant experience: [YOUR_RELEVANT_BACKGROUND]
- Why this timing: [WHY_NOW_FOR_YOU]
- Your sales/revenue background: [REVENUE_EXPERIENCE]

Show you understand the two-sided marketplace model. Connect your experience managing relationships and driving revenue to the recruiter success role. Keep it under 200 words.`,
    promptBlocks: [
      { key: 'WHAT_YOU_KNOW_ABOUT_PARAFORM', description: 'Your research on Paraform', example: 'Recruiting marketplace, bounty model, top recruiters' },
      { key: 'MARKETPLACE_INTEREST', description: 'Why marketplaces excite you', example: 'Network effects, scaling through others' },
      { key: 'YOUR_RELEVANT_BACKGROUND', description: 'Relevant experience', example: '$8M+ closed revenue, enterprise relationships' },
      { key: 'WHY_NOW_FOR_YOU', description: 'Career timing', example: 'Ready to apply sales skills to operations' },
      { key: 'REVENUE_EXPERIENCE', description: 'Revenue track record', example: 'Managed portfolios, drove growth through partnerships' },
    ],
  },
  {
    id: 'drive-gmv-growth',
    category: 'paraform-specific',
    question: 'How would you drive GMV growth in your recruiter portfolio?',
    description: 'Show strategic thinking about marketplace growth levers',
    defaultAnswer: `My GMV growth framework:

1. Portfolio Segmentation
   - Tier recruiters by potential and current performance
   - Focus highest-touch support on high-potential recruiters
   - Create scalable resources for the long tail

2. Activation & Engagement
   - Identify and remove friction in the recruiting process
   - Match recruiters to roles where they have the best win rate
   - Provide market intelligence and job insights

3. Performance Coaching
   - Regular check-ins with data-driven feedback
   - Share best practices from top performers
   - Help recruiters optimize their candidate sourcing

4. Expansion
   - Help successful recruiters take on more roles
   - Cross-train recruiters on adjacent specialties
   - Build recruiter referral programs

Metrics I would track:
- Placements per recruiter
- Time to first placement
- Recruiter retention and activity rates
- Revenue per recruiter`,
    prompt: `Write a strategic answer to "How would you drive GMV growth in your recruiter portfolio?" for a Paraform Account Manager interview.

Context:
- Your growth framework: [YOUR_GROWTH_APPROACH]
- How you would segment: [PORTFOLIO_SEGMENTATION]
- Activation tactics: [RECRUITER_ACTIVATION_IDEAS]
- Coaching approach: [PERFORMANCE_COACHING]
- Metrics you would track: [KEY_METRICS]
- Relevant experience: [PORTFOLIO_MANAGEMENT_EXPERIENCE]

Show you understand marketplace dynamics. Be specific about tactics and metrics. Draw on portfolio management or customer success experience. Keep it under 225 words.`,
    promptBlocks: [
      { key: 'YOUR_GROWTH_APPROACH', description: 'Overall strategy', example: 'Segment, activate, coach, expand' },
      { key: 'PORTFOLIO_SEGMENTATION', description: 'How you tier accounts', example: 'By potential, activity, and revenue' },
      { key: 'RECRUITER_ACTIVATION_IDEAS', description: 'Engagement tactics', example: 'Role matching, friction removal, onboarding' },
      { key: 'PERFORMANCE_COACHING', description: 'How you coach', example: 'Data-driven feedback, best practice sharing' },
      { key: 'KEY_METRICS', description: 'What you track', example: 'Placements, time to first win, retention' },
      { key: 'PORTFOLIO_MANAGEMENT_EXPERIENCE', description: 'Relevant background', example: 'Managed 50+ accounts, grew revenue 40%' },
    ],
  },
  {
    id: 'underperforming-recruiter',
    category: 'paraform-specific',
    question: 'How would you handle an underperforming recruiter in your portfolio?',
    description: 'Show coaching skills and performance management approach',
    defaultAnswer: `My approach to underperformance:

1. Diagnose Before Prescribing
   - Review data: submissions, response rates, time on platform
   - Have a discovery conversation to understand their perspective
   - Identify root cause: skills gap, motivation, role mismatch, external factors

2. Create a Clear Action Plan
   - Set specific, measurable goals with timeline
   - Identify 1-2 focus areas (not everything at once)
   - Provide resources and support

3. Coach and Enable
   - Increase touch points during improvement period
   - Connect them with successful recruiters for peer learning
   - Remove blockers and provide market intelligence

4. Monitor and Decide
   - Track progress against milestones
   - Recognize improvement and celebrate wins
   - If no improvement, have honest conversation about fit

Key Principle:
Most underperformance is a system problem, not a people problem. My job is to enable success, not just measure it.`,
    prompt: `Write a thoughtful answer to "How would you handle an underperforming recruiter?" for a Paraform Account Manager interview.

Context:
- Your diagnostic approach: [HOW_YOU_ASSESS]
- Common root causes: [UNDERPERFORMANCE_CAUSES]
- Your coaching framework: [COACHING_APPROACH]
- How you set expectations: [GOAL_SETTING]
- Example from past experience: [RELEVANT_EXAMPLE]
- Your philosophy: [MANAGEMENT_PHILOSOPHY]

Show empathy balanced with accountability. Demonstrate systematic thinking. Include a specific example if possible. Keep it under 225 words.`,
    promptBlocks: [
      { key: 'HOW_YOU_ASSESS', description: 'Diagnostic approach', example: 'Data review, discovery conversation' },
      { key: 'UNDERPERFORMANCE_CAUSES', description: 'Root causes you look for', example: 'Skills, motivation, role fit, external' },
      { key: 'COACHING_APPROACH', description: 'How you coach', example: 'Increase touch points, peer learning' },
      { key: 'GOAL_SETTING', description: 'How you set expectations', example: 'Specific milestones, clear timeline' },
      { key: 'RELEVANT_EXAMPLE', description: 'Past experience', example: 'Turned around underperforming account' },
      { key: 'MANAGEMENT_PHILOSOPHY', description: 'Your belief', example: 'Enable success, dont just measure' },
    ],
  },
  {
    id: 'two-sided-marketplace-experience',
    category: 'paraform-specific',
    question: 'What experience do you have with two-sided marketplaces?',
    description: 'Show understanding of marketplace dynamics and relevant transferable experience',
    defaultAnswer: `My marketplace-relevant experience:

Direct Experience:
[Any direct platform/marketplace work]

Transferable Skills:
- Managing relationships on both sides of transactions
  [Example: Worked with both buyers and vendors at company X]
- Understanding supply-side dynamics
  [Example: Enabled partner/channel success to drive revenue]
- Balancing competing stakeholder needs
  [Example: Negotiated between customer needs and product constraints]

Marketplace Concepts I Understand:
- Network effects and liquidity
- Supply quality vs quantity tradeoffs
- Matching and marketplace efficiency
- Incentive alignment across participants

Why This Matters for Paraform:
As an Account Manager, I need to deeply understand recruiter motivations and challenges (supply side) while keeping company needs (demand side) in mind. My experience [specific experience] translates directly to helping recruiters succeed on the platform.`,
    prompt: `Write a compelling answer to "What experience do you have with two-sided marketplaces?" for a Paraform interview.

Context:
- Direct marketplace experience: [DIRECT_MARKETPLACE_WORK]
- Transferable experience: [RELEVANT_TRANSFERABLE_SKILLS]
- Relationship management: [MULTI_STAKEHOLDER_EXPERIENCE]
- Marketplace concepts you understand: [MARKETPLACE_KNOWLEDGE]
- How this applies to Paraform: [CONNECTION_TO_ROLE]

Be honest about direct vs transferable experience. Show you understand marketplace dynamics. Connect your background to the recruiter-facing role. Keep it under 200 words.`,
    promptBlocks: [
      { key: 'DIRECT_MARKETPLACE_WORK', description: 'Any platform experience', example: 'None directly, but...' },
      { key: 'RELEVANT_TRANSFERABLE_SKILLS', description: 'Transferable skills', example: 'Channel partnerships, partner enablement' },
      { key: 'MULTI_STAKEHOLDER_EXPERIENCE', description: 'Managing multiple parties', example: 'Worked with buyers, vendors, internal teams' },
      { key: 'MARKETPLACE_KNOWLEDGE', description: 'Concepts you know', example: 'Network effects, supply/demand balance' },
      { key: 'CONNECTION_TO_ROLE', description: 'How it applies', example: 'Enabling recruiters is like channel enablement' },
    ],
  },
  {
    id: 'recruiter-success-metrics',
    category: 'paraform-specific',
    question: 'What metrics would you use to measure recruiter success?',
    description: 'Show analytical thinking and understanding of supply-side health',
    defaultAnswer: `I would track metrics across the recruiter lifecycle:

Leading Indicators (Activity):
- Roles claimed / applications submitted
- Candidate submissions per week
- Response time to new opportunities
- Platform engagement frequency

Lagging Indicators (Results):
- Placements per month/quarter
- Placement rate (placements / submissions)
- Revenue generated (bounties earned)
- Time to first placement (for new recruiters)

Health Metrics (Sustainability):
- Recruiter retention / churn rate
- Revenue per recruiter over time
- Recruiter satisfaction (NPS or surveys)
- Expansion rate (taking on more roles)

Segmentation Matters:
- New vs established recruiters need different benchmarks
- Specialist vs generalist recruiters have different patterns
- High-volume vs quality-focused approaches

How I Would Use These:
- Build a dashboard to identify at-risk recruiters early
- Celebrate and learn from top performers
- Use data to coach, not to punish`,
    prompt: `Write a data-driven answer to "What metrics would you use to measure recruiter success?" for a Paraform interview.

Context:
- Leading indicators: [ACTIVITY_METRICS]
- Lagging indicators: [RESULT_METRICS]
- Health metrics: [SUSTAINABILITY_METRICS]
- How you segment: [SEGMENTATION_APPROACH]
- How you use metrics: [METRICS_PHILOSOPHY]
- Relevant analytical experience: [ANALYTICS_BACKGROUND]

Show you think in terms of leading and lagging indicators. Demonstrate understanding of recruiter lifecycle. Keep it under 200 words.`,
    promptBlocks: [
      { key: 'ACTIVITY_METRICS', description: 'Leading indicators', example: 'Submissions, engagement, response time' },
      { key: 'RESULT_METRICS', description: 'Lagging indicators', example: 'Placements, revenue, conversion rate' },
      { key: 'SUSTAINABILITY_METRICS', description: 'Health metrics', example: 'Retention, NPS, expansion rate' },
      { key: 'SEGMENTATION_APPROACH', description: 'How you segment', example: 'By tenure, specialty, volume' },
      { key: 'METRICS_PHILOSOPHY', description: 'How you use data', example: 'Coach, dont punish; celebrate wins' },
      { key: 'ANALYTICS_BACKGROUND', description: 'Your experience', example: 'Built dashboards, managed by metrics' },
    ],
  },
  {
    id: 'balance-recruiter-company-needs',
    category: 'paraform-specific',
    question: 'How would you balance recruiter needs with company (client) needs?',
    description: 'Show understanding of marketplace dynamics and stakeholder management',
    defaultAnswer: `The key insight: Long-term, recruiter and company needs are aligned. Short-term tensions are where Account Management adds value.

My Framework:

1. Understand Both Perspectives
   - Recruiters want: quality roles, fair bounties, responsive companies, clear feedback
   - Companies want: quality candidates, fast turnaround, hiring success

2. Create Win-Win Outcomes
   - Help recruiters focus on roles where they can win
   - Coach recruiters on what makes submissions successful
   - Surface recruiter feedback to improve company briefs

3. When Tensions Arise
   - Advocate for recruiters on legitimate concerns (unclear JDs, unresponsive companies)
   - Coach recruiters on company expectations (submission quality, communication)
   - Escalate systemic issues to improve the platform

4. Build Trust on Both Sides
   - Be honest about tradeoffs
   - Follow through on commitments
   - Use data to have objective conversations

My Role: I am the bridge that makes the marketplace work. Healthy recruiter relationships drive company success.`,
    prompt: `Write a balanced answer to "How would you balance recruiter needs with company needs?" for a Paraform Account Manager interview.

Context:
- Recruiter needs you see: [RECRUITER_NEEDS]
- Company needs you see: [COMPANY_NEEDS]
- Where tensions arise: [COMMON_TENSIONS]
- How you create alignment: [WIN_WIN_APPROACH]
- How you handle conflicts: [CONFLICT_RESOLUTION]
- Your stakeholder management experience: [RELEVANT_EXPERIENCE]

Show you understand both sides. Demonstrate you can advocate while maintaining objectivity. Keep it under 225 words.`,
    promptBlocks: [
      { key: 'RECRUITER_NEEDS', description: 'What recruiters want', example: 'Quality roles, fair pay, clear feedback' },
      { key: 'COMPANY_NEEDS', description: 'What companies want', example: 'Quality candidates, speed, hiring success' },
      { key: 'COMMON_TENSIONS', description: 'Where conflicts happen', example: 'Submission quality vs volume' },
      { key: 'WIN_WIN_APPROACH', description: 'How you align interests', example: 'Focus recruiters on winnable roles' },
      { key: 'CONFLICT_RESOLUTION', description: 'How you handle tension', example: 'Honest conversations, data-driven' },
      { key: 'RELEVANT_EXPERIENCE', description: 'Past experience', example: 'Managed competing stakeholder needs' },
    ],
  },

  // Questions to Ask Them
  {
    id: 'ask-success-profile',
    category: 'ask-them',
    question: 'What separates your top performers from everyone else?',
    description: 'Understand what excellence looks like',
    defaultAnswer: `This question helps you:
- Understand the behaviors and skills they value most
- Position yourself by highlighting these qualities
- Show you are thinking about excellence, not just meeting expectations

Listen for: Specific behaviors, habits, skills, attitudes. Take notes and reference these in your follow-up or closing.`,
    prompt: `Generate a strategic question to ask about top performers, customized for this interview.

Context:
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- What you want to learn: [WHAT_YOURE_CURIOUS_ABOUT]
- How you will use the answer: [HOW_THIS_HELPS_YOU]

Create a thoughtful question that shows you are focused on high performance. Keep it concise.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'Apple' },
      { key: 'ROLE_TITLE', description: 'Role you are applying for', example: 'Design Lead' },
      { key: 'WHAT_YOURE_CURIOUS_ABOUT', description: 'What you want to know', example: 'Design philosophy of top designers' },
      { key: 'HOW_THIS_HELPS_YOU', description: 'Why it matters', example: 'Align my approach with expectations' },
    ],
  },
  {
    id: 'ask-biggest-challenge',
    category: 'ask-them',
    question: 'What is the biggest challenge facing the team right now?',
    description: 'Understand pain points and position yourself as a solver',
    defaultAnswer: `This question helps you:
- Identify the real problems you would be solving
- Position yourself as someone who can address these challenges
- Show problem-solving orientation

Listen for: Team challenges, resource constraints, competitive threats, process gaps. Use this to explain how you can help.`,
    prompt: `Generate a strategic question about team challenges, customized for this interview.

Context:
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- What challenges you expect: [YOUR_HYPOTHESIS]
- How you can help: [YOUR_RELEVANT_EXPERIENCE]

Create a question that uncovers real problems and lets you position your experience. Keep it concise.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'Slack' },
      { key: 'ROLE_TITLE', description: 'Role you are applying for', example: 'Engineering Manager' },
      { key: 'YOUR_HYPOTHESIS', description: 'What you think they face', example: 'Scaling team while maintaining quality' },
      { key: 'YOUR_RELEVANT_EXPERIENCE', description: 'How you can help', example: 'Grew team from 5 to 25 engineers' },
    ],
  },
  {
    id: 'ask-first-90-days',
    category: 'ask-them',
    question: 'What would success look like in the first 90 days?',
    description: 'Understand expectations and ramp timeline',
    defaultAnswer: `This question helps you:
- Clarify onboarding expectations and success metrics
- Show you are thinking about impact and ramp time
- Get specific goals you can reference in your 30/60/90 plan

Listen for: Specific metrics, relationship building expectations, training timeline, early wins.`,
    prompt: `Generate a strategic question about first 90 days success, customized for this interview.

Context:
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- What you want to clarify: [SPECIFIC_EXPECTATIONS]
- How you will use this: [CONNECTION_TO_YOUR_PLAN]

Create a question that shows action orientation and planning mindset. Keep it concise.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'LinkedIn' },
      { key: 'ROLE_TITLE', description: 'Role you are applying for', example: 'Marketing Manager' },
      { key: 'SPECIFIC_EXPECTATIONS', description: 'What you want to know', example: 'Key stakeholders, early priorities' },
      { key: 'CONNECTION_TO_YOUR_PLAN', description: 'How you will use it', example: 'Create detailed onboarding plan' },
    ],
  },
  {
    id: 'ask-team-dynamics',
    category: 'ask-them',
    question: 'How does the team collaborate? What is the relationship between [roles]?',
    description: 'Understand internal dynamics and support structure',
    defaultAnswer: `This question helps you:
- Understand collaboration model and support systems
- Show you value teamwork and cross-functional alignment
- Learn about potential friction points

Listen for: Handoff processes, shared goals, communication cadence, team culture.`,
    prompt: `Generate a strategic question about team collaboration, customized for this interview.

Context:
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- Teams you will work with: [KEY_CROSS_FUNCTIONAL_PARTNERS]
- What you want to understand: [COLLABORATION_MODEL]

Create a question that shows collaborative mindset and systems thinking. Keep it concise.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'Atlassian' },
      { key: 'ROLE_TITLE', description: 'Role you are applying for', example: 'Product Designer' },
      { key: 'KEY_CROSS_FUNCTIONAL_PARTNERS', description: 'Who you work with', example: 'PM, Engineering, Research' },
      { key: 'COLLABORATION_MODEL', description: 'What you want to know', example: 'Design review process, sprint structure' },
    ],
  },
  {
    id: 'ask-growth-development',
    category: 'ask-them',
    question: 'What opportunities are there for growth and development?',
    description: 'Understand career path and learning opportunities',
    defaultAnswer: `This question helps you:
- Show you are thinking long-term about growth
- Understand promotion paths and development programs
- Signal ambition and commitment

Listen for: Career paths, mentorship programs, training, promotion timelines, skill development opportunities.`,
    prompt: `Generate a strategic question about growth and development, customized for this interview.

Context:
- Company: [COMPANY_NAME]
- Role: [ROLE_TITLE]
- Your career goals: [WHERE_YOU_WANT_TO_GROW]
- What you want to learn: [SPECIFIC_DEVELOPMENT_INTERESTS]

Create a question that shows ambition and long-term thinking. Keep it concise.`,
    promptBlocks: [
      { key: 'COMPANY_NAME', description: 'Company you are interviewing with', example: 'Uber' },
      { key: 'ROLE_TITLE', description: 'Role you are applying for', example: 'Data Scientist' },
      { key: 'WHERE_YOU_WANT_TO_GROW', description: 'Career direction', example: 'ML research, team leadership' },
      { key: 'SPECIFIC_DEVELOPMENT_INTERESTS', description: 'What you want to learn', example: 'Advanced ML, mentorship' },
    ],
  },
];

/**
 * Get Q&A templates by category
 */
export function getQAByCategory(
  category: 'behavioral' | 'role-specific' | 'company-specific' | 'situational' | 'ask-them' | 'paraform-specific'
): QATemplate[] {
  return qaTemplates.filter(item => item.category === category);
}

/**
 * Get Q&A template by ID
 */
export function getQAById(id: string): QATemplate | undefined {
  return qaTemplates.find(item => item.id === id);
}

/**
 * Get all categories with counts
 */
export function getCategories() {
  const categories = [
    { value: 'paraform-specific', label: 'Paraform-Specific', color: 'bg-indigo-100 text-indigo-700 border-indigo-300' },
    { value: 'behavioral', label: 'Behavioral', color: 'bg-blue-100 text-blue-700 border-blue-300' },
    { value: 'role-specific', label: 'Role-Specific', color: 'bg-purple-100 text-purple-700 border-purple-300' },
    { value: 'company-specific', label: 'Company-Specific', color: 'bg-rose-100 text-rose-700 border-rose-300' },
    { value: 'situational', label: 'Situational', color: 'bg-amber-100 text-amber-700 border-amber-300' },
    { value: 'ask-them', label: 'Ask Them', color: 'bg-emerald-100 text-emerald-700 border-emerald-300' },
  ];

  return categories.map(cat => ({
    ...cat,
    count: qaTemplates.filter(item => item.category === cat.value).length,
  }));
}
