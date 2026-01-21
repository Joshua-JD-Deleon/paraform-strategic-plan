export interface STARStoryTemplate {
  id: string;
  slug: string;
  title: string;
  description: string;
  useFor: string[];
  defaultContent: string;
  prompt: string;
  promptBlocks: { key: string; description: string; example?: string }[];
}

/**
 * STAR Story Templates for Interview Prep
 * Generalized templates for creating compelling behavioral interview stories
 */
export const starStoryTemplates: STARStoryTemplate[] = [
  {
    id: 'achievement-quota',
    slug: 'achievement-quota',
    title: 'Achievement / Quota Attainment',
    description: 'Tell about exceeding targets and how you achieved exceptional results',
    useFor: ['Sales performance', 'Goal achievement', 'Strategic planning', 'Execution excellence'],
    defaultContent: `[Your quota achievement story will appear here after you generate it with AI]

This story should demonstrate:
- Your strategic approach to achieving challenging goals
- Specific actions you took to exceed expectations
- Measurable results with percentages and dollar amounts
- What made your approach successful

Click the "AI" button above to generate your personalized STAR story.`,
    prompt: `Write a compelling STAR format interview story about a time I significantly exceeded my quota or sales targets.

CONTEXT:
- Company: [COMPANY]
- Time period: [TIME_PERIOD]
- Your quota: [QUOTA_AMOUNT]
- Your achievement: [FINAL_ATTAINMENT]% of quota ([DOLLAR_AMOUNT] closed)
- Market context: [MARKET_CHALLENGE]
- Territory/segment: [TERRITORY_INFO]

SITUATION:
Set the scene - what was the market condition? What made this quota challenging? What was your starting position?

TASK:
What was your goal beyond just hitting quota? What obstacles did you face?

ACTION (be specific about YOUR steps):
1. Planning approach: [PLANNING_STRATEGY]
2. How you prioritized: [PRIORITIZATION_METHOD]
3. Pipeline building tactics: [PIPELINE_APPROACH]
4. Efficiency improvements: [EFFICIENCY_GAINS]
5. Key relationships leveraged: [RELATIONSHIP_STRATEGY]
6. How you maintained momentum: [EXECUTION_DISCIPLINE]

RESULT:
- Final attainment: [FINAL_ATTAINMENT]% of quota
- Total closed: [DOLLAR_AMOUNT]
- Ranking: [RANKING] out of [TEAM_SIZE] reps
- Recognition received: [AWARDS_OR_RECOGNITION]
- What you learned: [KEY_LESSONS]

Write in first person, conversational but professional. Keep under 300 words for verbal delivery.`,
    promptBlocks: [
      { key: 'COMPANY', description: 'Company name', example: 'Salesforce' },
      { key: 'TIME_PERIOD', description: 'When this happened', example: 'FY2023' },
      { key: 'QUOTA_AMOUNT', description: 'Your assigned quota', example: '$1.2M ARR' },
      { key: 'FINAL_ATTAINMENT', description: 'Percentage achieved', example: '145' },
      { key: 'DOLLAR_AMOUNT', description: 'Total revenue closed', example: '$1.74M' },
      { key: 'MARKET_CHALLENGE', description: 'Market conditions', example: 'Recession, tight budgets' },
      { key: 'TERRITORY_INFO', description: 'Your territory/segment', example: 'Enterprise FinTech' },
      { key: 'RANKING', description: 'Your rank on team', example: '#2' },
      { key: 'TEAM_SIZE', description: 'Total reps', example: '50' },
      { key: 'AWARDS_OR_RECOGNITION', description: 'Awards received', example: "President's Club, Top Performer" },
    ],
  },
  {
    id: 'problem-solving',
    slug: 'problem-solving',
    title: 'Problem Solving / Customer Recovery',
    description: 'Share how you saved an at-risk account or solved a critical customer issue',
    useFor: ['Customer retention', 'Win-back stories', 'Relationship building', 'Crisis management'],
    defaultContent: `[Your customer recovery story will appear here after you generate it with AI]

This story should demonstrate:
- Your ability to diagnose and solve complex problems
- How you rebuild trust with dissatisfied customers
- Your ownership and accountability mindset
- Measurable outcomes from your intervention

Click the "AI" button above to generate your personalized STAR story.`,
    prompt: `Write a compelling STAR format interview story about a time I recovered an at-risk customer or solved a critical customer problem.

CONTEXT:
- Company: [COMPANY]
- Customer: [CUSTOMER_NAME]
- Account value: [ACCOUNT_VALUE]
- Problem description: [PROBLEM_DESCRIPTION]
- Risk level: [RISK_LEVEL]

SITUATION:
Describe the customer situation. What was the problem? How did you inherit or discover this issue? What was at stake?

TASK:
What was your goal? What made this recovery challenging?

ACTION (focus on YOUR specific steps):
1. How you listened and diagnosed: [LISTENING_APPROACH]
2. Root cause identified: [ROOT_CAUSE]
3. How you took ownership: [ACCOUNTABILITY_ACTION]
4. Recovery plan created: [RECOVERY_PLAN]
5. Implementation steps: [EXECUTION_STEPS]
6. Trust-building approach: [RELATIONSHIP_REBUILD]

RESULT:
- Outcome: [OUTCOME_DESCRIPTION]
- Revenue saved: [SAVED_VALUE]
- Customer state before/after: [BEFORE_STATE] → [AFTER_STATE]
- Additional impact: [ADDITIONAL_IMPACT]
- Lessons learned: [KEY_LESSONS]

Write in first person, conversational but professional. Keep under 300 words.`,
    promptBlocks: [
      { key: 'COMPANY', description: 'Your company', example: 'HubSpot' },
      { key: 'CUSTOMER_NAME', description: 'The customer', example: 'Fortune 500 retailer' },
      { key: 'ACCOUNT_VALUE', description: 'ARR or contract size', example: '$400K ARR' },
      { key: 'PROBLEM_DESCRIPTION', description: 'What was wrong', example: 'Low product adoption, no ROI' },
      { key: 'RISK_LEVEL', description: 'How at-risk', example: 'Planning to churn at renewal' },
      { key: 'ROOT_CAUSE', description: 'Real underlying issue', example: 'Lack of executive sponsorship' },
      { key: 'OUTCOME_DESCRIPTION', description: 'Final result', example: 'Saved renewal and expanded' },
      { key: 'SAVED_VALUE', description: 'Revenue saved/grown', example: '$400K → $600K' },
      { key: 'BEFORE_STATE', description: 'Customer before', example: 'Detractor, planning to leave' },
      { key: 'AFTER_STATE', description: 'Customer after', example: 'Promoter, expanding use cases' },
    ],
  },
  {
    id: 'leadership',
    slug: 'leadership',
    title: 'Leadership / Influence',
    description: 'Demonstrate leadership without direct authority or leading a team initiative',
    useFor: ['Leadership skills', 'Cross-functional collaboration', 'Influence without authority', 'Project management'],
    defaultContent: `[Your leadership story will appear here after you generate it with AI]

This story should demonstrate:
- Your ability to lead without formal authority
- How you build consensus across different teams
- Your influence and communication skills
- Measurable impact of your leadership

Click the "AI" button above to generate your personalized STAR story.`,
    prompt: `Write a compelling STAR format interview story about a time I demonstrated leadership without direct authority or led a cross-functional initiative.

CONTEXT:
- Company: [COMPANY]
- Initiative: [PROJECT_DESCRIPTION]
- Teams involved: [TEAMS_INVOLVED]
- Your role: [YOUR_ROLE]
- Timeline: [TIMELINE]

SITUATION:
What was the business need? Why did this initiative matter? What was the organizational context?

TASK:
What was the goal? Why was it complex? What made this a leadership challenge (especially without direct authority)?

ACTION (specific leadership steps YOU took):
1. How you built buy-in: [STAKEHOLDER_ALIGNMENT]
2. Structure/process created: [FRAMEWORK_OR_PROCESS]
3. Communication approach: [COMMUNICATION_STRATEGY]
4. How you influenced others: [INFLUENCE_TACTICS]
5. Conflict resolution: [CONFLICT_HANDLING]
6. How you drove execution: [EXECUTION_APPROACH]

RESULT:
- Project outcome: [PROJECT_RESULT]
- Business impact: [BUSINESS_IMPACT]
- Team feedback: [FEEDBACK_RECEIVED]
- What this led to: [FOLLOW_ON_IMPACT]
- Key lessons: [LESSONS_LEARNED]

Write in first person, conversational but professional. Keep under 300 words.`,
    promptBlocks: [
      { key: 'COMPANY', description: 'Company name', example: 'Adobe' },
      { key: 'PROJECT_DESCRIPTION', description: 'What the initiative was', example: 'Launch new product tier' },
      { key: 'TEAMS_INVOLVED', description: 'Who was involved', example: 'Sales, Product, Marketing, CS' },
      { key: 'YOUR_ROLE', description: 'Your position/role', example: 'Senior Account Manager' },
      { key: 'TIMELINE', description: 'How long', example: '90-day launch timeline' },
      { key: 'STAKEHOLDER_ALIGNMENT', description: 'How you aligned people', example: 'Weekly syncs, clear RACI' },
      { key: 'PROJECT_RESULT', description: 'Outcome', example: 'Launched on time with $2M pipeline' },
      { key: 'BUSINESS_IMPACT', description: 'Business value', example: '15% of new business from new tier' },
      { key: 'FEEDBACK_RECEIVED', description: 'What others said', example: 'VP called me "force multiplier"' },
    ],
  },
  {
    id: 'conflict-resolution',
    slug: 'conflict-resolution',
    title: 'Conflict Resolution / Difficult Conversation',
    description: 'Show how you handled disagreement or a challenging interpersonal situation',
    useFor: ['Conflict management', 'Difficult conversations', 'Stakeholder management', 'Negotiation'],
    defaultContent: `[Your conflict resolution story will appear here after you generate it with AI]

This story should demonstrate:
- Your emotional intelligence and maturity
- How you navigate difficult conversations
- Your ability to find win-win solutions
- Professional handling of disagreements

Click the "AI" button above to generate your personalized STAR story.`,
    prompt: `Write a compelling STAR format interview story about a time I successfully resolved a conflict or handled a difficult conversation.

CONTEXT:
- Company: [COMPANY]
- Situation: [CONFLICT_DESCRIPTION]
- Who was involved: [PARTIES_INVOLVED]
- What was at stake: [STAKES]

SITUATION:
Describe the conflict or difficult situation. What led to this? What were the different perspectives or positions?

TASK:
What outcome did you need to achieve? Why was this conversation difficult?

ACTION (specific steps YOU took):
1. Preparation approach: [PREP_WORK]
2. How you initiated the conversation: [CONVERSATION_OPENING]
3. Listening/understanding approach: [LISTENING_STRATEGY]
4. How you reframed the issue: [REFRAME_APPROACH]
5. Solution you proposed: [PROPOSED_SOLUTION]
6. How you gained agreement: [CONSENSUS_BUILDING]

RESULT:
- Resolution achieved: [RESOLUTION]
- Relationship after: [RELATIONSHIP_OUTCOME]
- Business impact: [BUSINESS_RESULT]
- What you learned: [LESSONS_LEARNED]

Write in first person, conversational but professional. Keep under 300 words.`,
    promptBlocks: [
      { key: 'COMPANY', description: 'Company name', example: 'Snowflake' },
      { key: 'CONFLICT_DESCRIPTION', description: 'What was the conflict', example: 'Pricing dispute with customer' },
      { key: 'PARTIES_INVOLVED', description: 'Who was involved', example: 'Customer CFO, our leadership team' },
      { key: 'STAKES', description: 'What was at risk', example: '$500K renewal at risk' },
      { key: 'PREP_WORK', description: 'How you prepared', example: 'Researched their business constraints' },
      { key: 'RESOLUTION', description: 'How it was resolved', example: 'Custom contract structure both sides accepted' },
      { key: 'RELATIONSHIP_OUTCOME', description: 'Relationship after', example: 'Stronger trust, expanded next year' },
      { key: 'BUSINESS_RESULT', description: 'Business outcome', example: 'Saved $500K renewal, added $200K expansion' },
    ],
  },
  {
    id: 'failure-learning',
    slug: 'failure-learning',
    title: 'Failure / Learning Experience',
    description: 'Share a time you failed or made a mistake and what you learned',
    useFor: ['Self-awareness', 'Growth mindset', 'Resilience', 'Learning from mistakes'],
    defaultContent: `[Your failure/learning story will appear here after you generate it with AI]

This story should demonstrate:
- Your self-awareness and humility
- How you respond to setbacks
- Your ability to learn and adapt
- Growth mindset and resilience

Click the "AI" button above to generate your personalized STAR story.`,
    prompt: `Write a compelling STAR format interview story about a time I failed, made a mistake, or learned a difficult lesson.

CONTEXT:
- Company: [COMPANY]
- Situation: [FAILURE_DESCRIPTION]
- What went wrong: [WHAT_HAPPENED]
- Impact: [IMPACT_OF_FAILURE]

SITUATION:
Set the context. What were you trying to accomplish? What was the situation?

TASK:
What was your goal? What were you responsible for?

ACTION:
1. What you did (that led to the failure): [ACTIONS_TAKEN]
2. What you missed or got wrong: [WHAT_YOU_MISSED]
3. How you discovered the problem: [DISCOVERY_MOMENT]
4. Immediate response: [IMMEDIATE_RESPONSE]
5. How you took accountability: [OWNERSHIP_SHOWN]
6. Recovery steps: [RECOVERY_ACTIONS]

RESULT:
- Outcome after recovery: [RECOVERY_OUTCOME]
- What you learned: [KEY_LESSONS]
- How you applied this lesson: [APPLICATION_OF_LEARNING]
- How this changed your approach: [BEHAVIOR_CHANGE]

IMPORTANT: Be honest about the failure but show growth and learning. This demonstrates maturity and self-awareness.

Write in first person, conversational but professional. Keep under 300 words.`,
    promptBlocks: [
      { key: 'COMPANY', description: 'Company name', example: 'Gong' },
      { key: 'FAILURE_DESCRIPTION', description: 'What was the failure', example: 'Lost major deal I thought was locked' },
      { key: 'WHAT_HAPPENED', description: 'What went wrong', example: "Didn't multi-thread, champion left" },
      { key: 'IMPACT_OF_FAILURE', description: 'Impact', example: 'Lost $400K deal, missed quarter' },
      { key: 'WHAT_YOU_MISSED', description: 'Your mistake', example: 'Over-reliance on single contact' },
      { key: 'IMMEDIATE_RESPONSE', description: 'First thing you did', example: 'Called manager, debriefed honestly' },
      { key: 'RECOVERY_OUTCOME', description: 'How it ended', example: "Won them back 6 months later, $600K" },
      { key: 'KEY_LESSONS', description: 'What you learned', example: 'Always multi-thread, never single-thread' },
      { key: 'APPLICATION_OF_LEARNING', description: 'How you use this now', example: 'Built 3+ contacts in every deal since' },
    ],
  },
  {
    id: 'cross-functional-collaboration',
    slug: 'cross-functional-collaboration',
    title: 'Cross-Functional Collaboration',
    description: 'Demonstrate successful collaboration across teams to achieve a goal',
    useFor: ['Teamwork', 'Collaboration', 'Working with SEs/CSMs/Product', 'Pod selling'],
    defaultContent: `[Your collaboration story will appear here after you generate it with AI]

This story should demonstrate:
- Your ability to work across different functions
- How you orchestrate internal resources
- Communication and coordination skills
- Team-oriented mindset and shared success

Click the "AI" button above to generate your personalized STAR story.`,
    prompt: `Write a compelling STAR format interview story about a time I successfully collaborated across functions to achieve a business goal.

CONTEXT:
- Company: [COMPANY]
- Goal/deal: [BUSINESS_OBJECTIVE]
- Teams involved: [TEAMS_INVOLVED]
- Complexity factors: [COMPLEXITY]
- Your role: [YOUR_ROLE]

SITUATION:
Describe the business goal and why cross-functional collaboration was critical. What made this complex?

TASK:
What were you trying to accomplish? What was your responsibility in orchestrating the team?

ACTION (focus on YOUR coordination/collaboration):
1. How you organized the team: [TEAM_STRUCTURE]
2. Communication approach: [COMMUNICATION_STRATEGY]
3. How you aligned everyone: [ALIGNMENT_APPROACH]
4. Role clarity you created: [ROLE_DEFINITION]
5. How you leveraged each expert: [RESOURCE_UTILIZATION]
6. Conflict/challenge navigation: [CHALLENGE_HANDLING]

RESULT:
- Outcome achieved: [OUTCOME]
- Business impact: [BUSINESS_IMPACT]
- Team feedback: [TEAM_FEEDBACK]
- What made collaboration successful: [SUCCESS_FACTORS]
- Lessons learned: [KEY_LESSONS]

Write in first person, conversational but professional. Keep under 300 words.`,
    promptBlocks: [
      { key: 'COMPANY', description: 'Company name', example: 'Datadog' },
      { key: 'BUSINESS_OBJECTIVE', description: 'What you were trying to achieve', example: 'Close $1M enterprise deal' },
      { key: 'TEAMS_INVOLVED', description: 'Which teams', example: 'Sales, SE, Security, CSM, Legal' },
      { key: 'COMPLEXITY', description: 'What made it complex', example: 'Technical POC, security review, custom terms' },
      { key: 'YOUR_ROLE', description: 'Your position', example: 'Enterprise Account Executive' },
      { key: 'TEAM_STRUCTURE', description: 'How you organized', example: 'Weekly pod syncs, clear owner per workstream' },
      { key: 'OUTCOME', description: 'Final result', example: 'Won $1.2M deal in 6 months' },
      { key: 'BUSINESS_IMPACT', description: 'Business value', example: 'Largest deal in region, reference account' },
      { key: 'TEAM_FEEDBACK', description: 'What teammates said', example: 'SE said "best orchestrated deal"' },
    ],
  },
  // Account Manager Specific Templates (Marketplace/Recruiter Context)
  {
    id: 'am-portfolio-turnaround',
    slug: 'am-portfolio-turnaround',
    title: 'Portfolio Turnaround',
    description: 'Tell how you turned around underperforming accounts in your portfolio',
    useFor: ['Account management', 'Recruiter success', 'Performance improvement', 'Strategic intervention'],
    defaultContent: `[Your portfolio turnaround story will appear here after you generate it with AI]

This story should demonstrate:
- Your ability to diagnose underperformance root causes
- Strategic approach to activating disengaged recruiters
- Data-driven decision making and prioritization
- Measurable improvement in placement activity and GMV

Click the "AI" button above to generate your personalized STAR story.`,
    prompt: `Write a compelling STAR format interview story about a time I turned around underperforming accounts in my portfolio at a recruiting marketplace.

CONTEXT:
- Company: [COMPANY]
- Portfolio size: [PORTFOLIO_SIZE] recruiters/agencies
- Underperforming segment: [UNDERPERFORMING_COUNT] accounts producing [UNDERPERFORMING_GMV] GMV
- Time period: [TIME_PERIOD]
- Target improvement: [TARGET_IMPROVEMENT]

SITUATION:
Describe the state of your portfolio. What percentage was underperforming? What were the symptoms - low submission rates, inactive recruiters, poor placement conversion? What was the business impact of this underperformance?

TASK:
What was your goal for turning around these accounts? What constraints did you face (time, resources, recruiter engagement)?

ACTION (specific steps YOU took to turn around the portfolio):
1. How you segmented and prioritized: [SEGMENTATION_APPROACH]
2. Root cause diagnosis for underperformance: [ROOT_CAUSE_ANALYSIS]
3. Intervention strategy for disengaged recruiters: [REACTIVATION_STRATEGY]
4. Training or enablement provided: [ENABLEMENT_ACTIONS]
5. Success metrics and tracking: [TRACKING_APPROACH]
6. Escalation or tough decisions made: [TOUGH_DECISIONS]

RESULT:
- Portfolio performance improvement: [PERFORMANCE_IMPROVEMENT]
- GMV impact: [GMV_BEFORE] → [GMV_AFTER]
- Recruiter activation rate: [ACTIVATION_IMPROVEMENT]
- Placements driven: [PLACEMENT_COUNT] placements worth [PLACEMENT_VALUE]
- Recognition or feedback: [RECOGNITION]
- Lessons learned: [KEY_LESSONS]

Write in first person, conversational but professional. Keep under 300 words for verbal delivery.`,
    promptBlocks: [
      { key: 'COMPANY', description: 'Company name', example: 'Hired' },
      { key: 'PORTFOLIO_SIZE', description: 'Number of accounts', example: '150 recruiters' },
      { key: 'UNDERPERFORMING_COUNT', description: 'Underperforming accounts', example: '40 accounts (27%)' },
      { key: 'UNDERPERFORMING_GMV', description: 'GMV from underperformers', example: '$50K/month vs $300K target' },
      { key: 'TIME_PERIOD', description: 'When this happened', example: 'Q3-Q4 2023' },
      { key: 'TARGET_IMPROVEMENT', description: 'Your goal', example: 'Double GMV from bottom tier' },
      { key: 'SEGMENTATION_APPROACH', description: 'How you prioritized', example: 'Scored by potential vs current activity' },
      { key: 'ROOT_CAUSE_ANALYSIS', description: 'Why they underperformed', example: 'Poor job matching, unclear platform value' },
      { key: 'REACTIVATION_STRATEGY', description: 'How you re-engaged', example: '1:1 strategy calls, curated job alerts' },
      { key: 'GMV_BEFORE', description: 'Starting GMV', example: '$50K/month' },
      { key: 'GMV_AFTER', description: 'Ending GMV', example: '$180K/month' },
      { key: 'PLACEMENT_COUNT', description: 'Placements made', example: '25 placements' },
      { key: 'RECOGNITION', description: 'Recognition received', example: 'Q4 AM of the Quarter' },
    ],
  },
  {
    id: 'am-relationship-building',
    slug: 'am-relationship-building',
    title: 'Trusted Advisor Relationship',
    description: 'Share how you built deep trusted advisor relationships with recruiters or agency partners',
    useFor: ['Relationship building', 'Partnership development', 'Recruiter retention', 'Strategic accounts'],
    defaultContent: `[Your relationship building story will appear here after you generate it with AI]

This story should demonstrate:
- Your ability to move beyond transactional relationships
- How you become a strategic partner to recruiters
- Understanding recruiter business models and challenges
- Long-term value creation through trust

Click the "AI" button above to generate your personalized STAR story.`,
    prompt: `Write a compelling STAR format interview story about a time I built a deep trusted advisor relationship with a recruiter or recruiting agency in a marketplace context.

CONTEXT:
- Company: [COMPANY]
- Recruiter/Agency: [RECRUITER_NAME]
- Starting relationship: [STARTING_STATE]
- Account potential: [ACCOUNT_POTENTIAL]
- Timeline: [TIMELINE]

SITUATION:
Describe the recruiter or agency. What was their initial perception of the platform? Were they skeptical, disengaged, or treating you as just another vendor? What was the opportunity if you could build a real partnership?

TASK:
What was your goal for this relationship? What made building trust with this particular recruiter challenging?

ACTION (specific steps YOU took to build the relationship):
1. How you understood their business: [DISCOVERY_APPROACH]
2. Value you provided beyond transactions: [VALUE_ADDED_SERVICES]
3. How you demonstrated reliability: [TRUST_BUILDING_ACTIONS]
4. Proactive support and communication: [PROACTIVE_ENGAGEMENT]
5. How you handled problems or setbacks: [PROBLEM_HANDLING]
6. Strategic advice or insights shared: [STRATEGIC_PARTNERSHIP]

RESULT:
- Relationship transformation: [RELATIONSHIP_BEFORE] → [RELATIONSHIP_AFTER]
- Business impact: [BUSINESS_IMPACT]
- GMV or placement growth: [GMV_GROWTH]
- Recruiter retention: [RETENTION_OUTCOME]
- Referrals or advocacy: [ADVOCACY_RESULT]
- What made this relationship successful: [SUCCESS_FACTORS]

Write in first person, conversational but professional. Keep under 300 words.`,
    promptBlocks: [
      { key: 'COMPANY', description: 'Company name', example: 'Triplebyte' },
      { key: 'RECRUITER_NAME', description: 'Recruiter or agency', example: 'Top boutique tech agency' },
      { key: 'STARTING_STATE', description: 'Initial relationship', example: 'Skeptical, used competitors primarily' },
      { key: 'ACCOUNT_POTENTIAL', description: 'Potential value', example: '$500K+ annual GMV potential' },
      { key: 'TIMELINE', description: 'How long', example: '9 months' },
      { key: 'DISCOVERY_APPROACH', description: 'How you learned their business', example: 'On-site visit, shadowed their workflow' },
      { key: 'VALUE_ADDED_SERVICES', description: 'Extra value provided', example: 'Market intel, candidate sourcing tips, intro to hiring managers' },
      { key: 'TRUST_BUILDING_ACTIONS', description: 'How you built trust', example: 'Always followed through, transparent about issues' },
      { key: 'RELATIONSHIP_BEFORE', description: 'Relationship before', example: 'Vendor, backup option' },
      { key: 'RELATIONSHIP_AFTER', description: 'Relationship after', example: 'Strategic partner, primary platform' },
      { key: 'GMV_GROWTH', description: 'Revenue growth', example: '$30K → $400K annual GMV' },
      { key: 'ADVOCACY_RESULT', description: 'Referrals generated', example: 'Referred 5 other agencies' },
    ],
  },
  {
    id: 'am-gmv-growth',
    slug: 'am-gmv-growth',
    title: 'GMV Growth Initiative',
    description: 'Demonstrate how you drove revenue growth through strategic initiatives',
    useFor: ['Revenue growth', 'Strategic planning', 'Marketplace dynamics', 'Business development'],
    defaultContent: `[Your GMV growth story will appear here after you generate it with AI]

This story should demonstrate:
- Your strategic thinking about marketplace levers
- Ability to identify and execute growth opportunities
- Understanding of recruiter economics and incentives
- Measurable revenue impact from your initiatives

Click the "AI" button above to generate your personalized STAR story.`,
    prompt: `Write a compelling STAR format interview story about a time I drove significant GMV growth through a strategic initiative at a recruiting marketplace.

CONTEXT:
- Company: [COMPANY]
- Your portfolio/territory: [PORTFOLIO_DESCRIPTION]
- Starting GMV: [STARTING_GMV]
- Growth target: [GROWTH_TARGET]
- Time period: [TIME_PERIOD]

SITUATION:
Describe the marketplace context. What was the GMV trajectory before your initiative? What opportunities did you identify for growth - new recruiter segments, underserved job categories, placement conversion improvements?

TASK:
What was your growth goal? What made this ambitious? What resources or constraints did you have?

ACTION (specific strategic steps YOU took):
1. Market/data analysis to identify opportunity: [OPPORTUNITY_ANALYSIS]
2. Strategy developed: [GROWTH_STRATEGY]
3. Recruiter engagement approach: [RECRUITER_ENGAGEMENT]
4. Incentive or program created: [INCENTIVE_PROGRAM]
5. Execution and iteration: [EXECUTION_APPROACH]
6. How you scaled what worked: [SCALING_STRATEGY]

RESULT:
- GMV growth achieved: [GMV_BEFORE] → [GMV_AFTER] ([GROWTH_PERCENTAGE]% growth)
- Placement volume: [PLACEMENT_GROWTH]
- Recruiter activation: [ACTIVATION_METRICS]
- Revenue impact: [REVENUE_IMPACT]
- Initiative adoption: [ADOPTION_BY_OTHERS]
- Lessons learned: [KEY_LESSONS]

Write in first person, conversational but professional. Keep under 300 words.`,
    promptBlocks: [
      { key: 'COMPANY', description: 'Company name', example: 'Vettery' },
      { key: 'PORTFOLIO_DESCRIPTION', description: 'Your territory', example: 'West Coast tech recruiters' },
      { key: 'STARTING_GMV', description: 'Starting GMV', example: '$1.2M quarterly' },
      { key: 'GROWTH_TARGET', description: 'Your target', example: '40% QoQ growth' },
      { key: 'TIME_PERIOD', description: 'Timeline', example: 'Q2-Q3 2023' },
      { key: 'OPPORTUNITY_ANALYSIS', description: 'How you found the opportunity', example: 'Data showed low conversion in senior roles' },
      { key: 'GROWTH_STRATEGY', description: 'Your strategy', example: 'Focus on senior engineer placements, higher fees' },
      { key: 'RECRUITER_ENGAGEMENT', description: 'How you engaged recruiters', example: 'Bootcamp on senior candidate sourcing' },
      { key: 'INCENTIVE_PROGRAM', description: 'Incentives created', example: 'Bonus tier for senior placements' },
      { key: 'GMV_BEFORE', description: 'GMV before', example: '$1.2M quarterly' },
      { key: 'GMV_AFTER', description: 'GMV after', example: '$2.1M quarterly' },
      { key: 'GROWTH_PERCENTAGE', description: 'Growth percentage', example: '75' },
      { key: 'REVENUE_IMPACT', description: 'Revenue impact', example: '$3.6M additional annual GMV' },
      { key: 'ADOPTION_BY_OTHERS', description: 'How others adopted', example: 'Strategy rolled out company-wide' },
    ],
  },
  {
    id: 'am-cross-functional',
    slug: 'am-cross-functional',
    title: 'Cross-Functional Collaboration (Product/Ops)',
    description: 'Show how you worked with Product and Operations teams to improve recruiter experience',
    useFor: ['Cross-functional work', 'Product feedback', 'Process improvement', 'Operational excellence'],
    defaultContent: `[Your cross-functional collaboration story will appear here after you generate it with AI]

This story should demonstrate:
- Your ability to bridge customer insights and internal teams
- How you translate recruiter feedback into product improvements
- Collaboration with Product, Engineering, and Operations
- Impact of your cross-functional work on marketplace metrics

Click the "AI" button above to generate your personalized STAR story.`,
    prompt: `Write a compelling STAR format interview story about a time I collaborated with Product and Operations teams to improve the recruiter experience at a marketplace.

CONTEXT:
- Company: [COMPANY]
- Problem identified: [PROBLEM_DESCRIPTION]
- Teams involved: [TEAMS_INVOLVED]
- Your role: [YOUR_ROLE]
- Timeline: [TIMELINE]

SITUATION:
Describe the recruiter pain point or opportunity you identified. How did you discover this - through recruiter feedback, data analysis, or your own observation? What was the business impact of not solving this problem?

TASK:
What improvement were you trying to drive? Why did this require cross-functional collaboration rather than just an AM solution?

ACTION (specific steps YOU took to drive cross-functional change):
1. How you gathered and documented recruiter insights: [INSIGHT_GATHERING]
2. Business case built for the change: [BUSINESS_CASE]
3. How you engaged Product/Ops teams: [STAKEHOLDER_ENGAGEMENT]
4. Your role in solution design: [SOLUTION_CONTRIBUTION]
5. Testing or piloting approach: [PILOT_APPROACH]
6. Feedback loop with recruiters: [RECRUITER_FEEDBACK_LOOP]

RESULT:
- Solution implemented: [SOLUTION_DESCRIPTION]
- Recruiter experience improvement: [EXPERIENCE_IMPROVEMENT]
- Business metrics impact: [METRICS_IMPACT]
- Adoption or satisfaction: [ADOPTION_METRICS]
- Recognition or feedback from teams: [TEAM_FEEDBACK]
- Lessons about cross-functional work: [KEY_LESSONS]

Write in first person, conversational but professional. Keep under 300 words.`,
    promptBlocks: [
      { key: 'COMPANY', description: 'Company name', example: 'Andela' },
      { key: 'PROBLEM_DESCRIPTION', description: 'The problem', example: 'Recruiters churning due to slow job matching' },
      { key: 'TEAMS_INVOLVED', description: 'Teams you worked with', example: 'Product, Engineering, Operations' },
      { key: 'YOUR_ROLE', description: 'Your position', example: 'Senior Account Manager' },
      { key: 'TIMELINE', description: 'How long', example: '4 months end-to-end' },
      { key: 'INSIGHT_GATHERING', description: 'How you gathered insights', example: 'Surveyed 50 recruiters, analyzed churn data' },
      { key: 'BUSINESS_CASE', description: 'Business case built', example: 'Showed $2M at-risk GMV from slow matching' },
      { key: 'STAKEHOLDER_ENGAGEMENT', description: 'How you engaged teams', example: 'Weekly syncs with PM, brought recruiter voice' },
      { key: 'SOLUTION_DESCRIPTION', description: 'What was built', example: 'Real-time job alerts with smart matching' },
      { key: 'EXPERIENCE_IMPROVEMENT', description: 'How experience improved', example: 'Time to first submission cut 60%' },
      { key: 'METRICS_IMPACT', description: 'Business impact', example: '25% reduction in recruiter churn' },
      { key: 'TEAM_FEEDBACK', description: 'Feedback received', example: 'PM credited me as "voice of the recruiter"' },
    ],
  },
];

// Alias for backwards compatibility and consistency
export const storyTemplates = starStoryTemplates;

/**
 * Legacy stories - keeping for backward compatibility
 * These are specific examples that can be referenced if needed
 */
export interface Story {
  slug: string;
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

export const stories: Story[] = [
  {
    slug: "forrester-winback",
    company: "Forrester",
    metric: "$90K → $400K (4.4x growth)",
    useFor: ["Account expansion", "Win-back", "Multi-stakeholder selling"],
    situation:
      "At Forrester, I inherited a Fortune 500 mobility platform account that had churned the prior year. They'd dropped from a $90K relationship to zero - they felt they weren't getting value and the previous rep hadn't stayed close to their evolving needs.",
    task: "My goal was to win them back and rebuild the relationship. But I knew I couldn't just pitch the same thing that hadn't worked.",
    action: [
      "Did deep research into their business - earnings calls, press releases, new product launches, leadership changes",
      "Identified a gap in their GTM strategy - expanding into new verticals but didn't have research to support positioning",
      "Reached out to a new stakeholder in their strategy team, not the old contact who'd churned",
      "Led with insights about their market, not a product pitch",
      "Mapped out how Forrester could support three different initiatives across Sales, Marketing, and Product",
      "Built a multi-stakeholder business case showing ROI for each function",
    ],
    result:
      "Won them back at $400K ARR - a 4.4x increase from their previous spend. More importantly, I multi-threaded across three teams so the relationship was resilient. This became one of my proof points for the Champions Program promotion.",
    roleApplication:
      "This story demonstrates the expansion motion - taking an existing customer and finding new use cases. Shows ability to identify cross-sell paths and multi-thread across stakeholders for resilient account relationships.",
    keyPoints: [
      "4.4x ARR growth",
      "Multi-threaded across 3 teams",
      "Research-led approach",
      "Champions Program proof point",
    ],
  },
  {
    slug: "calligo-healthcare",
    company: "Calligo",
    metric: "$900K TCV",
    useFor: ["Complex deals", "Technical sales", "Consensus building"],
    situation:
      "At Calligo, I was working a large healthcare enterprise that had fragmented data across multiple legacy systems. They knew they needed to modernize for ML capabilities, but they'd been stuck in analysis paralysis for over a year.",
    task: "My goal was to close a data modernization engagement, but the real challenge was helping them build internal consensus around a path forward.",
    action: [
      "Partnered directly with their CTO and data leads to understand the technical debt and business impact",
      "Co-developed an ML modernization business case - not a Calligo proposal, but their internal justification",
      "Brought in our technical team to run a discovery workshop",
      "Helped them quantify the cost of inaction - delayed patient care insights, compliance risk, competitive disadvantage",
      "Navigated procurement, legal, and IT security reviews",
      "Arranged CFO call with reference customer in similar situation",
    ],
    result:
      "Closed $900K TCV. More importantly, the deal accelerated their digital transformation timeline by 12 months. This was the proof point that helped me hit 95% of a $1.05M quota and rank #2 globally.",
    roleApplication:
      "This story shows how to navigate complex buying centers with multiple stakeholders across RevOps, Sales leadership, Marketing, and Strategy. Demonstrates consensus-building across technical and business stakeholders.",
    keyPoints: [
      "$900K TCV",
      "6-month sales cycle",
      "Ranked #2 globally",
      "Accelerated customer timeline by 12 months",
    ],
  },
  {
    slug: "forrester-fintech",
    company: "Forrester",
    metric: "$480K TCV",
    useFor: ["Cross-selling", "Multi-product", "Champion-led expansion"],
    situation:
      "I had a top FinTech account at Forrester that was using us only for Marketing research. They were getting value, but I knew there was more opportunity - their Sales and Channel teams were scaling rapidly.",
    task: "Expand the relationship beyond Marketing into Sales and Channel Sales functions - essentially tripling the use case footprint.",
    action: [
      "Identified an Analyst Relations champion in Marketing who had credibility internally",
      "Asked her: 'Who in Sales is struggling with competitive positioning?' She made the intro",
      "Ran a gap analysis on Sales team's competitive intelligence process",
      "Learned their Channel team was launching new partner program with no enablement content",
      "Built unified proposal showing how Forrester could support all three functions",
      "Made it easy for champion to sell internally with business case deck",
    ],
    result:
      "Closed $480K TCV - $170K SaaS and $310K consulting. Three functions now using Forrester, which made the account stickier and positioned me for expansion the following year.",
    roleApplication:
      "This story illustrates cross-sell expansion strategy. Demonstrates identifying different use cases across functions and building unified proposals that make champions successful sellers internally.",
    keyPoints: [
      "3 functions engaged",
      "$480K TCV",
      "Champion-led expansion",
      "SaaS + consulting bundle",
    ],
  },
  {
    slug: "globaldata-f50",
    company: "GlobalData",
    metric: "$110K saved with $1.1M expansion path",
    useFor: ["Retention", "At-risk renewals", "Re-selling value"],
    situation:
      "At GlobalData, I had a Fortune 50 CPG account that was a pilot customer - $110K TCV. Three months before renewal, their main user left the company and the new stakeholder didn't understand the value. They were leaning toward non-renewal.",
    task: "Save the renewal and position for expansion to a $1.1M ARR relationship based on their stated interest in scaling the use case.",
    action: [
      "Treated this as a re-sale, not a renewal",
      "Immediately set up on-site meeting with new stakeholder to understand their priorities",
      "Discovered their focus was a global AI initiative - completely different use case",
      "Worked with product team to show how our data could feed their AI models",
      "Co-developed business case showing how scaling with GlobalData would support their AI initiative",
      "Multi-threaded to their VP of Strategy who owned the AI budget",
    ],
    result:
      "Saved the renewal and built the expansion roadmap. The account was on track for significant growth before I departed in the restructure. The approach - treating at-risk renewals as re-sales - became something I coached other reps on.",
    roleApplication:
      "In strategic accounts, champions leave, priorities shift, budgets change. This story shows the skill of re-discovering value and re-aligning to what matters now - treating at-risk renewals as re-sales.",
    keyPoints: [
      "Saved at-risk renewal",
      "Re-sale approach",
      "10x expansion path",
      "Coached other reps",
    ],
  },
  {
    slug: "calligo-pod",
    company: "Calligo",
    metric: "Won $900K deal through collaboration",
    useFor: ["Cross-functional collaboration", "Working with SEs/CSMs", "Team selling"],
    situation:
      "The $900K healthcare deal required deep collaboration. I'm a sales lead, not a data engineer - I needed our technical team to help build credibility and scope the solution correctly.",
    task: "Orchestrate internal resources - Data Insights directors, Privacy consultants, and technical architects - to deliver a winning proposal.",
    action: [
      "Ran this like a pod with weekly internal syncs",
      "Brought in Privacy lead for HIPAA compliance discussions",
      "I owned the commercial relationship and business case; they owned technical credibility",
      "Before every customer meeting, did 15-minute pre-brief so everyone knew their role",
      "Sent customer recaps and documented next steps in Salesforce",
      "When customer had technical objections, scheduled follow-up with right expert",
    ],
    result:
      "Won the deal because the customer said we were the only vendor who brought a 'team that understood their business.' The collaboration model became something I replicated on other complex deals.",
    roleApplication:
      "This story demonstrates pod-based selling with cross-functional collaboration. Shows ability to orchestrate the right people at the right time while owning overall account strategy.",
    keyPoints: [
      "Pod model collaboration",
      "Pre-brief discipline",
      "Customer feedback",
      "Replicated on other deals",
    ],
  },
  {
    slug: "globaldata-restructure",
    company: "GlobalData",
    metric: "Strong exit + consulting success",
    useFor: ["Adversity", "Resilience", "Professional handling of setbacks"],
    situation:
      "Last year, GlobalData went through a significant restructure. Despite strong performance - I'd closed flagship deals and been appointed Global Lead for strategic accounts - my role was impacted. I was offered relocation to HQ or a pivot to lead a BioTech vertical.",
    task: "Navigate the transition professionally while positioning for the right next opportunity.",
    action: [
      "Made a deliberate choice - declined offers respectfully",
      "Finished strong - completed handoffs, documented account plans, left relationships intact",
      "Used transition productively - took on consulting projects to stay sharp",
      "Was selective about next role - turned down several opportunities that weren't right fit",
      "Stayed in touch with GlobalData leadership - they've offered to be references",
    ],
    result:
      "Left with strong endorsements - my Managing Director said I have an 'intelligent, client-centric approach that drives real value.' The consulting work generated real results - $65K TCV closed, 45% revenue growth for one client.",
    roleApplication:
      "This story demonstrates resilience and professional handling of organizational change. Shows ability to navigate ambiguity and come out stronger while maintaining strong relationships and performance.",
    keyPoints: [
      "Professional exit",
      "Strong references",
      "Consulting success",
      "Navigates change well",
    ],
  },
];
