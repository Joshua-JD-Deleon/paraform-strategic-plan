export interface CompetitiveTemplate {
  id: string;
  title: string;
  description: string;
  prompt: string;
  promptBlocks: { key: string; description: string; example?: string }[];
  defaultContent: string;
  category: string;
}

/**
 * Competitive Intelligence Templates
 * Generalized frameworks and AI prompts for analyzing competitive landscape
 */
export const competitiveTemplates: CompetitiveTemplate[] = [
  {
    id: 'paraform-marketplace-landscape',
    title: 'Recruiting Marketplace Landscape',
    description: 'Understand the two-sided recruiting marketplace competitive space',
    category: 'Paraform-Specific',
    prompt: `Analyze the competitive landscape for Paraform in the recruiting marketplace industry.

As an Account Manager, I need to understand:

1. Direct Competitors (Recruiting Marketplaces):
   - Hired - How does their model compare?
   - Triplebyte (acquired by Karat) - What happened and why?
   - Moonlight Work, Gun.io - How are they differentiated?

2. Traditional Recruiting Competition:
   - Staffing agencies (Hays, Robert Half, TEKsystems)
   - In-house recruiting teams
   - LinkedIn Recruiter and Talent Solutions

3. Paraform's Unique Model:
   - How does the bounty-based model differ?
   - What's the value proposition for companies posting jobs?
   - What's the value proposition for freelance recruiters?

4. Market Positioning:
   - What customer segments does Paraform win?
   - Where does Paraform lose to competitors?
   - What's the key competitive moat?

5. Account Manager Relevance:
   - How do I position Paraform vs. alternatives to clients?
   - What objections do companies have about marketplace recruiting?
   - How do I articulate GMV growth to internal stakeholders?

Please provide specific talking points I can use in my Account Manager interview at Paraform.`,
    promptBlocks: [
      { key: 'YOUR_BACKGROUND', description: 'Your relevant experience', example: '$8M+ closed revenue, marketplace experience' },
    ],
    defaultContent: `**Paraform vs. Key Competitors:**

**Direct Marketplace Competitors:**
- Hired: Auction-based model, focuses on tech talent, higher fees
- Triplebyte: Was skills-based matching, now part of Karat
- Gun.io: Freelance developer focus, different customer segment

**Traditional Competition:**
- Staffing Agencies: Higher cost (20-25% of salary), slower, relationship-based
- In-house Recruiters: Fixed cost, limited network reach
- LinkedIn: Self-serve, high volume low quality

**Paraform Differentiators:**
- Bounty model aligns incentives (pay for results)
- Network of specialized freelance recruiters
- Faster time-to-fill through parallel sourcing
- Lower cost structure for companies
- Access to passive candidates through recruiter networks

**Key Competitive Positioning:**
- Win: Startups wanting quality + speed + cost efficiency
- Challenge: Enterprises with established agency relationships
- Moat: Quality of recruiter network and matching algorithm`,
  },
  {
    id: 'competitive-landscape',
    title: 'Competitive Landscape Overview',
    description: 'Map the competitive environment and key players',
    category: 'Market Analysis',
    prompt: `Analyze the competitive landscape for [TARGET_COMPANY] in the [INDUSTRY] industry.

For the role of [YOUR_ROLE], help me understand:

1. Who are the top 3-5 direct competitors to [TARGET_COMPANY]?
2. What are each competitor's key strengths and market positioning?
3. What are the main weaknesses or gaps in each competitor's offering?
4. How does [TARGET_COMPANY] differentiate from these competitors?
5. What unique value propositions does [TARGET_COMPANY] offer?

Please provide specific, actionable insights I can reference during my interview to demonstrate market awareness.`,
    promptBlocks: [
      { key: 'TARGET_COMPANY', description: 'Company you are interviewing with', example: 'Salesforce' },
      { key: 'INDUSTRY', description: 'Industry or market category', example: 'CRM software' },
      { key: 'YOUR_ROLE', description: 'Role you are interviewing for', example: 'Strategic Account Manager' },
    ],
    defaultContent: `Use the AI prompt above to research your target company's competitive landscape.

This section will help you:
- Understand who the company competes against
- Identify key market differentiators
- Prepare for "What do you know about our competitors?" questions
- Demonstrate strategic market awareness

Click "AI" to see the prompt, then paste into Claude, ChatGPT, or Gemini with your specific company details.`,
  },
  {
    id: 'win-loss-positioning',
    title: 'Win/Loss Analysis & Positioning',
    description: 'Understanding why customers choose (or don\'t choose) the company',
    category: 'Competitive Strategy',
    prompt: `For [TARGET_COMPANY] competing in [INDUSTRY], help me understand typical win/loss scenarios:

1. Win Analysis:
   - What are the top reasons customers choose [TARGET_COMPANY] over competitors?
   - What specific use cases or customer profiles favor [TARGET_COMPANY]?
   - What success stories or customer testimonials showcase competitive wins?

2. Loss Analysis:
   - In what scenarios do customers choose competitors instead?
   - What objections or concerns typically come up during sales cycles?
   - What competitive threats should I be aware of?

3. Talk Tracks:
   - When a prospect says "We're evaluating [COMPETITOR_1]", how should [TARGET_COMPANY] position against them?
   - When a prospect says "We're evaluating [COMPETITOR_2]", what's the competitive angle?

Provide specific responses I can discuss during my [YOUR_ROLE] interview.`,
    promptBlocks: [
      { key: 'TARGET_COMPANY', description: 'Company you are interviewing with', example: 'HubSpot' },
      { key: 'INDUSTRY', description: 'Industry or product category', example: 'marketing automation' },
      { key: 'COMPETITOR_1', description: 'Primary competitor #1', example: 'Marketo' },
      { key: 'COMPETITOR_2', description: 'Primary competitor #2', example: 'Pardot' },
      { key: 'YOUR_ROLE', description: 'Your target role', example: 'Enterprise Sales Manager' },
    ],
    defaultContent: `Use the AI prompt to generate competitive positioning insights.

This analysis will help you:
- Understand the company's competitive advantages
- Prepare for competitive scenario discussions
- Demonstrate strategic thinking about market position
- Show readiness to handle competitive objections

Replace the [BLOCKS] in the prompt with your specific details, then generate insights using AI.`,
  },
  {
    id: 'differentiation-framework',
    title: 'Key Differentiators Framework',
    description: 'What makes the target company unique and defensible',
    category: 'Value Proposition',
    prompt: `Create a differentiation analysis for [TARGET_COMPANY] in the [INDUSTRY] space:

1. Unique Technology/Product Features:
   - What proprietary technology or features does [TARGET_COMPANY] have?
   - What can they do that competitors cannot?

2. Data/Intelligence Advantages:
   - What unique data sets or insights do they provide?
   - How is their data more accurate, comprehensive, or actionable?

3. Customer Success/Implementation:
   - How does their customer success model differ?
   - What makes their implementation or onboarding better?

4. Strategic Positioning:
   - Are they positioned as "and" (complementary) or "or" (replacement) vs. competitors?
   - What specific customer problems do they solve better than anyone else?

5. Recent Innovations:
   - What new products, acquisitions, or capabilities set them apart?
   - How are they ahead of the market (AI, automation, etc.)?

For role: [YOUR_ROLE]

Provide 5-7 key differentiators I can articulate during my interview.`,
    promptBlocks: [
      { key: 'TARGET_COMPANY', description: 'Company you are interviewing with', example: 'Snowflake' },
      { key: 'INDUSTRY', description: 'Market category', example: 'cloud data warehouse' },
      { key: 'YOUR_ROLE', description: 'Your target role', example: 'Solutions Engineer' },
    ],
    defaultContent: `Use this prompt to identify the company's unique differentiators.

Understanding differentiators helps you:
- Answer "Why do you want to work here?" with specifics
- Demonstrate product knowledge
- Show you understand their competitive moat
- Articulate value in customer conversations

Generate AI insights, then customize this section with what you learn.`,
  },
  {
    id: 'objection-handling',
    title: 'Common Objections & Responses',
    description: 'Competitive objections and how to address them',
    category: 'Sales Enablement',
    prompt: `For [TARGET_COMPANY] selling to [TARGET_CUSTOMER] in the [INDUSTRY] space, help me prepare responses to common competitive objections:

Common objections when competing against [COMPETITOR_1]:
- "We already use [COMPETITOR_1]"
- "[COMPETITOR_1] is cheaper"
- "[COMPETITOR_1] has more market share"
- "[COMPETITOR_1] integrates with our existing tools"

Common objections when competing against [COMPETITOR_2]:
- "We're evaluating [COMPETITOR_2]"
- "[COMPETITOR_2] has feature X that we need"
- "[COMPETITOR_2] is more established"

For each objection, provide:
1. Acknowledge (validate their point)
2. Differentiate (how [TARGET_COMPANY] is different)
3. Reframe (shift to value, not features)
4. Proof (example/metric if possible)

Role context: [YOUR_ROLE]`,
    promptBlocks: [
      { key: 'TARGET_COMPANY', description: 'Company you are interviewing with', example: 'Datadog' },
      { key: 'TARGET_CUSTOMER', description: 'Typical customer profile', example: 'DevOps teams' },
      { key: 'INDUSTRY', description: 'Market category', example: 'observability and monitoring' },
      { key: 'COMPETITOR_1', description: 'Main competitor #1', example: 'New Relic' },
      { key: 'COMPETITOR_2', description: 'Main competitor #2', example: 'Splunk' },
      { key: 'YOUR_ROLE', description: 'Your target role', example: 'Strategic Account Executive' },
    ],
    defaultContent: `Generate objection handling responses for competitive scenarios.

Being prepared for objections shows:
- Sales competency and experience
- Market knowledge
- Strategic thinking
- Readiness to contribute from day one

Use AI to generate responses, then practice delivering them naturally.`,
  },
  {
    id: 'competitive-intelligence-sources',
    title: 'Competitive Intelligence Sources',
    description: 'Where to find ongoing competitive information',
    category: 'Research Resources',
    prompt: `For ongoing competitive intelligence on [TARGET_COMPANY] and competitors in [INDUSTRY], recommend:

1. Primary Research Sources:
   - What industry analyst reports should I follow? (Gartner, Forrester, etc.)
   - What trade publications cover this space?
   - What blogs or thought leaders should I monitor?

2. Product Intelligence:
   - Where can I find product comparisons and reviews? (G2, TrustRadius, etc.)
   - What technical documentation or demos are publicly available?
   - What communities or forums discuss these products?

3. Company Updates:
   - How can I track product launches, acquisitions, funding?
   - What earnings calls or investor updates are relevant?
   - What social media or newsletters should I follow?

4. Competitor Tracking:
   - How can I monitor competitor [COMPETITOR_1] and [COMPETITOR_2]?
   - What tools or alerts should I set up?

Provide specific URLs and resources for role: [YOUR_ROLE]`,
    promptBlocks: [
      { key: 'TARGET_COMPANY', description: 'Company you are interviewing with', example: 'Workday' },
      { key: 'INDUSTRY', description: 'Market space', example: 'enterprise HR software' },
      { key: 'COMPETITOR_1', description: 'Competitor to track', example: 'SAP SuccessFactors' },
      { key: 'COMPETITOR_2', description: 'Another competitor', example: 'Oracle HCM' },
      { key: 'YOUR_ROLE', description: 'Your target role', example: 'Account Executive' },
    ],
    defaultContent: `Build your competitive intelligence toolkit.

Ongoing market monitoring helps you:
- Stay current on industry trends
- Demonstrate commitment to continuous learning
- Provide value from week one
- Build credibility with prospects

Use AI to identify the best resources, then bookmark and follow them.`,
  },
  {
    id: 'competitive-positioning-matrix',
    title: 'Competitive Positioning Matrix',
    description: 'Visual framework for understanding market position',
    category: 'Strategic Analysis',
    prompt: `Create a competitive positioning matrix for [TARGET_COMPANY] vs. competitors in [INDUSTRY]:

Compare [TARGET_COMPANY], [COMPETITOR_1], [COMPETITOR_2], and [COMPETITOR_3] across these dimensions:

1. Price Point (High/Mid/Low)
2. Market Position (Enterprise/Mid-Market/SMB)
3. Product Depth (Comprehensive/Specialized)
4. Implementation Complexity (Complex/Moderate/Simple)
5. Innovation Leadership (First Mover/Fast Follower/Established)
6. Customer Success Model (High-Touch/Tech-Touch/Self-Service)

For each company, explain:
- Where they sit on each dimension
- Their ideal customer profile
- When they win vs. lose

This is for my [YOUR_ROLE] interview preparation.`,
    promptBlocks: [
      { key: 'TARGET_COMPANY', description: 'Company you are interviewing with', example: 'Zendesk' },
      { key: 'INDUSTRY', description: 'Market category', example: 'customer service software' },
      { key: 'COMPETITOR_1', description: 'Competitor #1', example: 'Salesforce Service Cloud' },
      { key: 'COMPETITOR_2', description: 'Competitor #2', example: 'Freshdesk' },
      { key: 'COMPETITOR_3', description: 'Competitor #3', example: 'Intercom' },
      { key: 'YOUR_ROLE', description: 'Your target role', example: 'Customer Success Manager' },
    ],
    defaultContent: `Create a structured view of the competitive landscape.

A positioning matrix helps you:
- Understand market segmentation
- Identify sweet spot customers
- Articulate strategic positioning
- Show analytical thinking

Generate the matrix with AI, then visualize it for your interview prep.`,
  },
];

/**
 * Get competitive template by ID
 */
export function getCompetitiveTemplateById(id: string): CompetitiveTemplate | undefined {
  return competitiveTemplates.find(template => template.id === id);
}

/**
 * Get templates by category
 */
export function getCompetitiveTemplatesByCategory(category: string): CompetitiveTemplate[] {
  return competitiveTemplates.filter(template => template.category === category);
}

/**
 * Get all unique categories
 */
export function getCompetitiveCategories(): string[] {
  const categories = new Set(competitiveTemplates.map(t => t.category));
  return Array.from(categories);
}
