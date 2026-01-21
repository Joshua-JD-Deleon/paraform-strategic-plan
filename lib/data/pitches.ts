export interface PitchTemplate {
  id: string;
  title: string;
  duration: '30-second' | '60-second' | 'full';
  description: string;
  useFor: string;
  defaultContent: string;
  prompt: string;
  promptBlocks: { key: string; description: string; example?: string }[];
  keyPointsPrompt: string;
}

export const pitchTemplates: PitchTemplate[] = [
  {
    id: 'intro-60',
    title: '60-Second Introduction',
    duration: '60-second',
    description: 'Your primary elevator pitch for "Tell me about yourself"',
    useFor: 'Primary introduction - use for "Tell me about yourself" in first rounds',
    defaultContent: `[Your personalized 60-second introduction will appear here after you generate it with AI]

This pitch should cover:
- Your career trajectory and years of experience
- Key achievements with specific metrics
- What you've learned and how you've grown
- Why this specific role and company excites you

Click the "AI" button above to generate your personalized version.`,
    prompt: `Write a compelling 60-second elevator pitch for an Account Manager interview at a recruiting marketplace.

CANDIDATE BACKGROUND:
- Name: [YOUR_NAME]
- Years of experience: [YEARS_EXPERIENCE]
- Target role: Account Manager at Paraform
- Current/recent role: [CURRENT_ROLE]
- Key achievement 1: [ACHIEVEMENT_1]
- Key achievement 2: [ACHIEVEMENT_2]
- Key achievement 3: [ACHIEVEMENT_3]
- Why Paraform: [WHY_PARAFORM]

CONTEXT ABOUT PARAFORM:
- Two-sided recruiting marketplace: companies post jobs with bounties, recruiters earn by placing candidates
- Account Manager owns recruiter portfolios and drives GMV (gross merchandise value) growth
- Focus on recruiter activation, placement velocity, and supply-side marketplace operations

REQUIREMENTS:
- Keep it under 200 words (60 seconds spoken)
- Lead with impact, not chronology
- Include specific metrics related to account growth, activation, or marketplace operations
- End with clear connection to marketplace/recruiter success
- Sound conversational, not scripted
- Show progression and growth

Write the pitch in first person, ready to deliver.`,
    promptBlocks: [
      { key: 'YOUR_NAME', description: 'Your first name', example: 'Sarah' },
      { key: 'YEARS_EXPERIENCE', description: 'Total years in account management/customer success/marketplace ops', example: '4+' },
      { key: 'CURRENT_ROLE', description: 'Current or most recent role', example: 'Customer Success Manager at Toptal' },
      { key: 'ACHIEVEMENT_1', description: 'Top achievement with metrics', example: 'Grew recruiter GMV 85% YoY across 50-account portfolio' },
      { key: 'ACHIEVEMENT_2', description: 'Second achievement', example: 'Improved recruiter activation rate from 40% to 72%' },
      { key: 'ACHIEVEMENT_3', description: 'Third achievement', example: 'Reduced time-to-first-placement by 35% through onboarding improvements' },
      { key: 'WHY_PARAFORM', description: 'Why Paraform excites you', example: 'Democratizing recruiting, aligning incentives with bounty model' },
    ],
    keyPointsPrompt: `Based on the 60-second pitch, extract 5-7 key bullet points that I should memorize as talking points. Format as a simple bulleted list.`
  },
  {
    id: 'elevator-30',
    title: '30-Second Elevator',
    duration: '30-second',
    description: 'Quick intro for later rounds or networking',
    useFor: 'Quick intro for later rounds or when time is limited',
    defaultContent: `[Your personalized 30-second elevator pitch will appear here]

This is your ultra-condensed version - just the highlights:
- Who you are
- Your best metric
- Why this role

Click the "AI" button to generate.`,
    prompt: `Write a punchy 30-second elevator pitch for an Account Manager role at a recruiting marketplace.

CANDIDATE INFO:
- Name: [YOUR_NAME]
- Experience summary: [EXPERIENCE_SUMMARY]
- Best achievement: [BEST_ACHIEVEMENT]
- Target role: Account Manager at Paraform
- One-line hook for why Paraform: [WHY_PARAFORM_HOOK]

CONTEXT ABOUT PARAFORM:
- Two-sided recruiting marketplace connecting companies with recruiters
- Account Managers drive recruiter success and GMV growth
- Focus on supply-side operations and placement velocity

REQUIREMENTS:
- Maximum 75 words
- Lead with your strongest credential related to account growth or marketplace ops
- One specific metric
- Clear connection to recruiter success/marketplace operations
- Memorable and conversational

Write in first person, ready to deliver.`,
    promptBlocks: [
      { key: 'YOUR_NAME', description: 'Your first name', example: 'Mike' },
      { key: 'EXPERIENCE_SUMMARY', description: 'One-line experience summary', example: '5 years managing supplier accounts at talent marketplaces' },
      { key: 'BEST_ACHIEVEMENT', description: 'Single best metric', example: '$2.4M GMV growth, 120% of target' },
      { key: 'WHY_PARAFORM_HOOK', description: 'One compelling reason', example: 'Bounty model creates real alignment between recruiters and outcomes' },
    ],
    keyPointsPrompt: `Extract 3-4 key phrases from this 30-second pitch that I must remember.`
  },
  {
    id: 'why-company',
    title: 'Why Paraform?',
    duration: 'full',
    description: 'Your answer to "Why do you want to work at Paraform?"',
    useFor: 'When asked "Why Paraform?" or "Why are you interested in this role?"',
    defaultContent: `[Your personalized "Why Paraform" answer will appear here]

Structure your answer around 3 reasons:
1. Marketplace model fit with your experience
2. Timing/opportunity you see in recruiting
3. The Account Manager role and what excites you

Click "AI" to generate your version.`,
    prompt: `Write a compelling answer to "Why do you want to work at Paraform?" for an Account Manager interview.

CONTEXT:
- Role: Account Manager at Paraform
- What Paraform does: [PARAFORM_DESCRIPTION]
- Recent company momentum: [COMPANY_NEWS]
- Your relevant experience: [RELEVANT_EXPERIENCE]
- Specific proof point from your background: [PROOF_POINT]

PARAFORM BACKGROUND:
- Two-sided recruiting marketplace: companies post jobs with bounties, recruiters earn by making placements
- Account Manager manages recruiter portfolios to drive GMV growth
- Focus on recruiter activation, placement velocity, and supply-side marketplace health

STRUCTURE (use this framework):
1. Marketplace/recruiting fit - how your experience aligns with two-sided marketplaces or recruiter success
2. The timing/moment - why the recruiting marketplace model is compelling now
3. The role itself - what specifically excites you about driving recruiter success

REQUIREMENTS:
- Be specific about Paraform, not generic
- Reference something about the bounty model or marketplace dynamics
- Include one concrete example from your past that proves fit
- Show you understand recruiters as the supply side
- Keep under 200 words

Write in first person.`,
    promptBlocks: [
      { key: 'PARAFORM_DESCRIPTION', description: 'Your understanding of Paraform', example: 'Recruiting marketplace where companies post jobs with bounties and independent recruiters compete to fill them' },
      { key: 'COMPANY_NEWS', description: 'Recent news or momentum', example: 'Growing rapidly, expanding recruiter network, recently raised funding' },
      { key: 'RELEVANT_EXPERIENCE', description: 'Your relevant background', example: 'Managed supplier success at a gig economy marketplace for 3 years' },
      { key: 'PROOF_POINT', description: 'Specific achievement that proves fit', example: 'Grew active supplier base 60% while improving per-supplier GMV 40%' },
    ],
    keyPointsPrompt: `Extract the 3 main reasons and 1 proof point from this answer as bullet points.`
  },
  {
    id: 'why-leave',
    title: 'Why Are You Looking to Leave?',
    duration: 'full',
    description: 'Address why you\'re leaving current role positively',
    useFor: 'When asked about leaving current role or employment gaps',
    defaultContent: `[Your answer to "Why are you looking to leave?" will appear here]

Frame this positively:
- What you've gained in current role
- What you're looking for next
- Why this opportunity is the right next step

Click "AI" to generate.`,
    prompt: `Write a positive, professional answer to "Why are you looking to leave your current role?" for a marketplace Account Manager interview.

SITUATION:
- Current/recent role: [CURRENT_ROLE] at [CURRENT_COMPANY]
- Time in role: [TIME_IN_ROLE]
- Reason for leaving (honest): [REAL_REASON]
- What you want next: [WHAT_YOU_WANT]
- Target role: Account Manager at Paraform

RULES:
- Never badmouth current/previous employer
- Frame as moving toward something, not away
- Show gratitude for what you learned
- Connect clearly to why Paraform's marketplace model is the answer
- Keep under 150 words
- Sound genuine, not rehearsed

Write in first person.`,
    promptBlocks: [
      { key: 'CURRENT_ROLE', description: 'Current/recent title', example: 'Customer Success Manager' },
      { key: 'CURRENT_COMPANY', description: 'Current/recent company', example: 'Upwork' },
      { key: 'TIME_IN_ROLE', description: 'Duration', example: '2 years' },
      { key: 'REAL_REASON', description: 'Honest reason (will be reframed positively)', example: 'Want more ownership of growth metrics, not just retention' },
      { key: 'WHAT_YOU_WANT', description: 'What you\'re looking for', example: 'Own GMV growth, drive recruiter success at a focused marketplace' },
    ],
    keyPointsPrompt: `Extract the key reframe and connection to target role as 3-4 bullets.`
  },
  {
    id: 'resume-walkthrough',
    title: 'Resume Walkthrough',
    duration: 'full',
    description: 'Structured walkthrough of your career progression',
    useFor: 'When asked to walk through your resume or career progression',
    defaultContent: `[Your resume walkthrough will appear here]

Structure as a narrative arc:
- Each role builds on the previous
- Highlight the "so what" for each transition
- End with why this role is the logical next step

Click "AI" to generate.`,
    prompt: `Write a structured resume walkthrough for a marketplace Account Manager interview at Paraform.

CAREER HISTORY (oldest to newest):
Role 1: [ROLE_1_TITLE] at [ROLE_1_COMPANY] ([ROLE_1_DURATION])
- Key learning/achievement: [ROLE_1_HIGHLIGHT]

Role 2: [ROLE_2_TITLE] at [ROLE_2_COMPANY] ([ROLE_2_DURATION])
- Key learning/achievement: [ROLE_2_HIGHLIGHT]

Role 3: [ROLE_3_TITLE] at [ROLE_3_COMPANY] ([ROLE_3_DURATION])
- Key learning/achievement: [ROLE_3_HIGHLIGHT]

Role 4 (if applicable): [ROLE_4_TITLE] at [ROLE_4_COMPANY] ([ROLE_4_DURATION])
- Key learning/achievement: [ROLE_4_HIGHLIGHT]

Target role: Account Manager at Paraform

REQUIREMENTS:
- Tell it as a narrative arc, not just a list
- Show what you learned at each stop and why you moved
- Emphasize experience relevant to marketplace ops, account growth, or recruiter/supplier success
- Each role should build logically on the previous
- End with clear connection to why Paraform Account Manager is the next step
- Keep under 250 words
- Use transition phrases like "That foundation led me to..." or "Building on that..."

Write in first person.`,
    promptBlocks: [
      { key: 'ROLE_1_TITLE', description: 'First role title', example: 'Recruiting Coordinator' },
      { key: 'ROLE_1_COMPANY', description: 'First company', example: 'Robert Half' },
      { key: 'ROLE_1_DURATION', description: 'Duration', example: '1 year' },
      { key: 'ROLE_1_HIGHLIGHT', description: 'Key achievement', example: 'Learned recruiting ops, supported 15 recruiters' },
      { key: 'ROLE_2_TITLE', description: 'Second role', example: 'Account Coordinator' },
      { key: 'ROLE_2_COMPANY', description: 'Second company', example: 'Hired' },
      { key: 'ROLE_2_DURATION', description: 'Duration', example: '1.5 years' },
      { key: 'ROLE_2_HIGHLIGHT', description: 'Key achievement', example: 'Onboarded 200+ recruiters to platform' },
      { key: 'ROLE_3_TITLE', description: 'Third role', example: 'Customer Success Manager' },
      { key: 'ROLE_3_COMPANY', description: 'Third company', example: 'Toptal' },
      { key: 'ROLE_3_DURATION', description: 'Duration', example: '2 years' },
      { key: 'ROLE_3_HIGHLIGHT', description: 'Key achievement', example: 'Managed 80-account portfolio, 95% retention, $1.5M GMV' },
      { key: 'TARGET_ROLE', description: 'Target role', example: 'Account Manager' },
      { key: 'TARGET_COMPANY', description: 'Target company', example: 'Paraform' },
    ],
    keyPointsPrompt: `Extract the key theme/learning from each role as bullets, plus the overall arc.`
  },
  {
    id: 'unique-value',
    title: 'What Makes You Unique?',
    duration: 'full',
    description: 'Your differentiator vs other candidates',
    useFor: 'When differentiating yourself or asked "What makes you the best candidate?"',
    defaultContent: `[Your unique value proposition will appear here]

Focus on:
- What you have that others don't
- Specific proof points
- Why that matters for THIS role

Click "AI" to generate.`,
    prompt: `Write a compelling answer to "What makes you unique?" or "Why should we hire you over other candidates?" for a marketplace Account Manager interview at Paraform.

YOUR DIFFERENTIATORS:
- Unique experience: [UNIQUE_EXPERIENCE]
- Relevant marketplace/recruiting experience: [MARKETPLACE_EXPERIENCE]
- Specific proof point with metrics: [PROOF_POINT]
- Soft skill that sets you apart: [SOFT_SKILL]
- Target role: Account Manager at Paraform

CONTEXT ABOUT THE ROLE:
- Account Manager owns recruiter portfolios and drives GMV growth
- Success means recruiter activation, placement velocity, and supply-side health
- Requires understanding both recruiters (supply) and companies (demand)

REQUIREMENTS:
- Lead with what's genuinely different about you
- Not generic strengths (hardworking, team player)
- Specific to marketplace operations and recruiter success
- Include at least one metric related to growth, activation, or retention
- Show confidence without arrogance
- Keep under 150 words

Write in first person.`,
    promptBlocks: [
      { key: 'UNIQUE_EXPERIENCE', description: 'What makes you different', example: 'Built supplier activation program from scratch at a gig marketplace' },
      { key: 'MARKETPLACE_EXPERIENCE', description: 'Marketplace or recruiting experience', example: '4 years in talent marketplaces, understand both supply and demand' },
      { key: 'PROOF_POINT', description: 'Best metric', example: 'Grew active recruiter base 75% while improving placement rate 2x' },
      { key: 'SOFT_SKILL', description: 'Standout soft skill', example: 'Deep empathy for recruiters - I started as one and know their pain points' },
    ],
    keyPointsPrompt: `Extract the 3 key differentiators with their proof points.`
  }
];

// Legacy export for backwards compatibility
export const pitches = pitchTemplates.map(t => ({
  id: t.id,
  title: t.title,
  duration: t.duration,
  content: t.defaultContent,
  keyPoints: [],
  useFor: t.useFor
}));
