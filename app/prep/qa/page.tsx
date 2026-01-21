"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  Search,
  X,
  Target,
  AlertTriangle,
  HelpCircle,
  CheckCircle2,
  Lightbulb,
  ChevronDown
} from "lucide-react";

interface QAItem {
  id: string;
  question: string;
  answer: string;
  keyPoints?: string[];
  tags?: string[];
  category: "strategic" | "behavioral" | "objection" | "ask-them";
}

const qaData: QAItem[] = [
  // Strategic Questions
  {
    id: "why-paraform",
    question: "Why Paraform?",
    answer: `Three things stand out:

1. **Market Timing**: AI is transforming how enterprise teams work, and Paraform is at the intersection of AI and GTM operations. The RFP/questionnaire space is massive, painful, and ready for disruption.

2. **Product Differentiation**: Paraform isn't just adding AI to an old playbook. The agent-based approach, live integrations, and transparency features are fundamentally different from legacy solutions. Customers choose Paraform over incumbents even with existing contracts.

3. **The Opportunity**: Being the first sales hire means I get to build something from the ground up. I'll shape the playbook, influence product direction, and have direct impact on the company's trajectory. That's rare and exciting.`,
    keyPoints: [
      "AI market timing is perfect",
      "Product is genuinely differentiated",
      "First sales hire = building something meaningful",
      "Direct access to founders and product"
    ],
    tags: ["strategic", "motivation"],
    category: "strategic"
  },
  {
    id: "why-now",
    question: "Why leave your current role / Why now?",
    answer: `I'm at a point where I want to take on more ownership and have greater impact. In larger organizations, you execute the playbook. Here, I'd be writing it.

The AI moment is now - companies that get GTM right in this window will define the category. Paraform has the product, the team, and the backing. The only missing piece is a sales foundation, and that's exactly what I want to build.

Also, I've done enterprise sales at scale. I know what good looks like. Now I want to apply that experience in a setting where I can truly shape outcomes rather than just meet a quota.`,
    keyPoints: [
      "Want more ownership and impact",
      "AI timing is critical - now is the moment",
      "Ready to build, not just execute",
      "Apply enterprise experience in high-impact setting"
    ],
    tags: ["motivation", "timing"],
    category: "strategic"
  },
  {
    id: "why-you",
    question: "Why should we hire you? What makes you the right first hire?",
    answer: `Three reasons:

1. **I've Done Full-Cycle Before**: From sourcing to close, I understand the entire journey. I won't need hand-holding on process - I can build it.

2. **I'm a Builder, Not Just an Executor**: I've created playbooks, refined messaging, built outbound sequences. I don't wait to be told what to do - I figure out what works and systematize it.

3. **I Understand the AI Buyer**: I've sold AI products before. I know the objections (accuracy, security, ROI). I know how to build trust with skeptical buyers. That pattern-matching is hard to teach.

You need someone who can run independently, learn fast, and build the foundation for future hires. That's what I do.`,
    keyPoints: [
      "Full-cycle experience from sourcing to close",
      "Builder mentality - creates playbooks, not just follows them",
      "Understands AI buyer psychology",
      "Can run independently and build for scale"
    ],
    tags: ["differentiation", "fit"],
    category: "strategic"
  },
  {
    id: "first-90-days",
    question: "What would your first 90 days look like?",
    answer: `**Days 1-30: Learn & Absorb**
- Deep dive on product - become an expert user
- Shadow founder calls, study won deals
- Map the competitive landscape
- Understand current ICP and what's working

**Days 31-60: Build & Test**
- Document the sales playbook v1
- Build outbound sequences, test messaging
- Start running my own calls (inbound + sourced)
- Establish feedback loop with product

**Days 61-90: Optimize & Scale**
- Refine based on what's working
- Hit quota (or be on clear path)
- Document what scales vs. what doesn't
- Identify what the next hire needs to succeed`,
    keyPoints: [
      "First 30: Deep product and customer learning",
      "Days 31-60: Build playbook and start selling",
      "Days 61-90: Optimize and document for scale",
      "Balance learning with immediate contribution"
    ],
    tags: ["plan", "30-60-90"],
    category: "strategic"
  },
  {
    id: "quota-achievement",
    question: "Tell me about your quota attainment history",
    answer: `[PERSONALIZE WITH YOUR ACTUAL NUMBERS]

Consistently at or above quota throughout my career:
- [Year/Role]: X% of quota - [context]
- [Year/Role]: X% of quota - [context]

More importantly, I understand *how* I achieved it:
- Outbound discipline: X activities/day, consistent pipeline generation
- Discovery rigor: Qualify hard, focus on winnable deals
- Multi-threading: Never single-threaded in accounts
- Urgency creation: Understanding what drives buying decisions

I don't rely on luck. I have a system, and I execute it.`,
    keyPoints: [
      "Consistent quota achievement",
      "Systematic approach to pipeline",
      "Strong discovery and qualification",
      "Multi-threaded deals"
    ],
    tags: ["track record", "results"],
    category: "strategic"
  },
  // Behavioral Questions
  {
    id: "deal-proud",
    question: "Tell me about a deal you're most proud of",
    answer: `[PERSONALIZE - Use STAR format]

**Situation**: [Describe the account and context]

**Task**: [What was the challenge/goal]

**Action**:
- [Specific things you did]
- [How you approached obstacles]
- [Who you engaged and how]

**Result**:
- [Deal size/outcome]
- [What made it special]
- [What you learned]

The reason I'm proud of this one isn't just the revenue - it's that I had to [specific challenge you overcame]. That experience shaped how I approach complex deals today.`,
    keyPoints: [
      "Use STAR format",
      "Be specific about YOUR actions",
      "Include the challenge you overcame",
      "Connect learning to current approach"
    ],
    tags: ["STAR", "wins"],
    category: "behavioral"
  },
  {
    id: "deal-lost",
    question: "Tell me about a deal you lost and what you learned",
    answer: `[PERSONALIZE]

I lost a deal to [competitor/situation] that taught me a valuable lesson.

**What happened**: [Brief context]

**Why we lost**: [Be honest - was it discovery, champion, timing?]

**What I learned**:
- [Specific tactical learning]
- [How it changed your process]
- [What you do differently now]

The best salespeople lose deals. The difference is whether you learn from them. After this, I [specific change], which has helped me [specific improvement].`,
    keyPoints: [
      "Be honest about the loss",
      "Show self-awareness",
      "Demonstrate learning",
      "Explain how it changed your approach"
    ],
    tags: ["STAR", "learning"],
    category: "behavioral"
  },
  {
    id: "rejection",
    question: "How do you handle rejection?",
    answer: `Rejection is data. Every 'no' tells me something - about my messaging, my timing, my qualification, or the market.

My process:
1. **Immediate**: Don't take it personally. Thank them for their time.
2. **Reflect**: What could I have done differently? Was this even the right account?
3. **Document**: Add learnings to my system so I don't repeat mistakes
4. **Move on**: Pipeline fixes everything. Back to the next opportunity.

The best sellers I know have high rejection tolerance because they understand it's a numbers game. I'd rather hear 'no' fast than waste time on deals that won't close.`,
    keyPoints: [
      "Rejection is information, not personal",
      "Systematic reflection process",
      "Learn and document",
      "High activity maintains resilience"
    ],
    tags: ["resilience", "mindset"],
    category: "behavioral"
  },
  {
    id: "outbound",
    question: "How do you approach outbound prospecting?",
    answer: `I treat outbound like a product launch - it requires research, testing, and iteration.

**My approach**:
1. **ICP Definition**: Who are we actually winning? What patterns exist?
2. **Trigger-Based Targeting**: What events signal buying intent?
3. **Personalized Sequencing**: Multi-channel (email, LinkedIn, phone), value-first
4. **Testing**: A/B subject lines, messaging, timing. Let data decide.
5. **Discipline**: X activities per day, non-negotiable

**Key insight**: The best outbound isn't about volume - it's about relevance. A personalized message to the right person at the right time beats 100 generic emails.

For Paraform, I'd focus on companies with visible RFP pain - job postings for proposal managers, G2 reviews mentioning RFP challenges, companies in regulated industries with complex sales cycles.`,
    keyPoints: [
      "Systematic ICP and trigger-based targeting",
      "Multi-channel, personalized approach",
      "Data-driven testing and iteration",
      "Relevance over volume"
    ],
    tags: ["prospecting", "pipeline"],
    category: "behavioral"
  },
  // Objection Handling
  {
    id: "startup-risk",
    question: "This is a startup - doesn't that concern you?",
    answer: `Not at all - it's why I'm excited.

Look, I've been in larger organizations. I know what that looks like - politics, slow decisions, limited impact. Here, I can actually build something.

What matters to me:
- **Product-market fit**: Paraform has paying customers and rapid ARR growth. This isn't a science project.
- **Team**: Working directly with founders who've built before.
- **Market**: AI in enterprise is here. The timing is right.
- **Role**: First sales hire means ownership, not just execution.

The "risk" of a startup is also the upside. I want to be part of building something meaningful, and I'm willing to bet on myself to make it work.`,
    keyPoints: [
      "Startup is the opportunity, not the risk",
      "Paraform has PMF and traction",
      "Direct access to founders",
      "Ownership > stability"
    ],
    tags: ["objection", "startup"],
    category: "objection"
  },
  {
    id: "no-team",
    question: "You'd be alone - no sales team to learn from",
    answer: `That's actually what I want.

In my experience, the best learning comes from:
1. Direct customer conversations
2. Working with founders who know the product deeply
3. Rapid experimentation and feedback

I'm not looking for a manager to tell me what to do. I'm looking for access to customers, product insight, and room to build. Paraform offers all three.

Plus, I'll be building the team eventually. I want to establish the culture and playbook before others join, not inherit someone else's.`,
    keyPoints: [
      "Autonomy is a feature, not a bug",
      "Learn from customers and founders",
      "Will build the team and culture",
      "Self-directed learner"
    ],
    tags: ["objection", "independence"],
    category: "objection"
  },
  {
    id: "experience-level",
    question: "Do you have enough experience for a founding role?",
    answer: `I think about it differently. You don't need someone with 15 years of experience who's set in their ways. You need someone with:

- **Enough experience** to know what good looks like
- **Enough hunger** to put in the work
- **Enough adaptability** to learn and iterate fast

I've closed enterprise deals, built outbound motions, and worked in fast-moving environments. I also know I don't have all the answers - and I'm coachable. That combination of experience + hunger + humility is exactly what a founding role needs.

The best founders I know hire for slope, not just intercept. My slope is high.`,
    keyPoints: [
      "Right balance of experience and hunger",
      "Adaptable and coachable",
      "High slope - rapid learning",
      "Know what good looks like but not set in ways"
    ],
    tags: ["objection", "experience"],
    category: "objection"
  },
  // Questions to Ask Them
  {
    id: "ask-sales-vision",
    question: "What does success look like for this hire in 12 months?",
    answer: `[ASK THIS] This helps you understand their expectations and whether they're realistic.

**Listen for**:
- Specific revenue targets
- Beyond quota - building playbook, culture
- Path to team growth
- Clear definition of success

**Follow-up**: "What would make you say 'we absolutely made the right hire' a year from now?"`,
    keyPoints: [
      "Understand success metrics",
      "Beyond just quota - what else matters?",
      "Path to team building",
      "Alignment on expectations"
    ],
    tags: ["ask-them"],
    category: "ask-them"
  },
  {
    id: "ask-founder-sales",
    question: "How has founder-led sales worked so far? What's working and what isn't?",
    answer: `[ASK THIS] Critical to understand what you're inheriting.

**Listen for**:
- What messaging resonates
- Common objections
- Sales cycle length
- Why deals are won/lost

**Follow-up**: "Can I shadow some calls before starting to get up to speed faster?"`,
    keyPoints: [
      "Understand current playbook",
      "What's working vs needs improvement",
      "Sales cycle and objections",
      "Shows you want to learn, not just impose"
    ],
    tags: ["ask-them"],
    category: "ask-them"
  },
  {
    id: "ask-product-roadmap",
    question: "How does sales feedback influence the product roadmap?",
    answer: `[ASK THIS] This matters for an AI product - you need tight feedback loops.

**Listen for**:
- How requests are prioritized
- Access to product/engineering
- Speed of iteration
- Examples of sales-driven features

**Follow-up**: "Can you give me an example of a feature that came from customer feedback?"`,
    keyPoints: [
      "Product-sales collaboration",
      "Speed of iteration",
      "Your voice will matter",
      "Shows you think beyond just selling"
    ],
    tags: ["ask-them"],
    category: "ask-them"
  },
  {
    id: "ask-competition",
    question: "Who do you lose to and why?",
    answer: `[ASK THIS] Every company loses deals. Understanding why reveals market position.

**Listen for**:
- Honest assessment of weaknesses
- Competitive differentiation
- Deals they walk away from
- How they're addressing gaps

**Follow-up**: "What type of deal is NOT a good fit for Paraform today?"`,
    keyPoints: [
      "Honest about competition",
      "Clear on differentiation",
      "Know their weaknesses",
      "Shows strategic thinking"
    ],
    tags: ["ask-them"],
    category: "ask-them"
  },
  {
    id: "ask-culture",
    question: "What are Paraform's core values? How do they show up day-to-day?",
    answer: `[ASK THIS] Important for culture fit - both ways.

**Listen for**:
- Specific examples, not just words
- How decisions are made
- What gets celebrated
- What gets corrected

**Follow-up**: "What's something you'd want to change about how the team works?"`,
    keyPoints: [
      "Values in action, not just stated",
      "Decision-making culture",
      "What matters to leadership",
      "Honest about areas for improvement"
    ],
    tags: ["ask-them"],
    category: "ask-them"
  }
];

export default function QAPrep() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { value: "strategic", label: "Strategic", icon: Target, color: "bg-purple-100 text-purple-700" },
    { value: "behavioral", label: "Behavioral", icon: CheckCircle2, color: "bg-blue-100 text-blue-700" },
    { value: "objection", label: "Objections", icon: AlertTriangle, color: "bg-red-100 text-red-700" },
    { value: "ask-them", label: "Ask Them", icon: HelpCircle, color: "bg-green-100 text-green-700" },
  ];

  const filteredQA = qaData.filter((item) => {
    const matchesSearch =
      searchTerm === "" ||
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedQA = {
    strategic: filteredQA.filter(q => q.category === "strategic"),
    behavioral: filteredQA.filter(q => q.category === "behavioral"),
    objection: filteredQA.filter(q => q.category === "objection"),
    "ask-them": filteredQA.filter(q => q.category === "ask-them"),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-violet-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-purple-400/20 text-purple-100 border-purple-400/30 mb-4">
              Founding AE Interview
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Q&A Preparation</h1>
            <p className="text-purple-100/80">
              Strategic answers to questions they'll ask, and questions you should ask them
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 space-y-4"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => setSelectedCategory(null)}
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                className={selectedCategory === null ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                All
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  variant={selectedCategory === cat.value ? "default" : "outline"}
                  size="sm"
                  className={selectedCategory === cat.value ? "bg-purple-600 hover:bg-purple-700" : ""}
                >
                  <cat.icon className="h-4 w-4 mr-1" />
                  {cat.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Q&A Sections */}
          <div className="space-y-8">
            {(!selectedCategory || selectedCategory === "strategic") && groupedQA.strategic.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-purple-600" />
                  Strategic Questions
                </h2>
                <Card>
                  <CardContent className="p-0">
                    <Accordion type="multiple">
                      {groupedQA.strategic.map((qa) => (
                        <AccordionItem key={qa.id} value={qa.id} className="border-b last:border-0 px-6 transition-colors hover:bg-purple-50/50 data-[state=open]:bg-purple-50/30">
                          <AccordionTrigger className="text-left hover:no-underline py-4 [&[data-state=open]>svg]:rotate-180 [&>svg]:transition-transform [&>svg]:duration-200">
                            <span className="font-semibold text-slate-900">{qa.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-6">
                            <div className="bg-slate-50 rounded-lg p-4 mb-4 prose prose-sm max-w-none">
                              <div className="whitespace-pre-wrap text-slate-700" dangerouslySetInnerHTML={{ __html: qa.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            </div>
                            {qa.keyPoints && (
                              <div className="mb-4">
                                <h4 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                                  <Lightbulb className="h-4 w-4 text-amber-500" />
                                  Key Points to Hit
                                </h4>
                                <ul className="space-y-1">
                                  {qa.keyPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {qa.tags && (
                              <div className="flex flex-wrap gap-2">
                                {qa.tags.map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </section>
            )}

            {(!selectedCategory || selectedCategory === "behavioral") && groupedQA.behavioral.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  Behavioral Questions
                </h2>
                <Card className="border-blue-200 bg-blue-50/30">
                  <CardContent className="p-0">
                    <Accordion type="multiple">
                      {groupedQA.behavioral.map((qa) => (
                        <AccordionItem key={qa.id} value={qa.id} className="border-b border-blue-200 last:border-0 px-6 transition-colors hover:bg-blue-100/50 data-[state=open]:bg-blue-100/30">
                          <AccordionTrigger className="text-left hover:no-underline py-4 [&[data-state=open]>svg]:rotate-180 [&>svg]:transition-transform [&>svg]:duration-200">
                            <span className="font-semibold text-slate-900">{qa.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-6">
                            <div className="bg-white rounded-lg p-4 mb-4 border border-blue-200">
                              <div className="whitespace-pre-wrap text-slate-700" dangerouslySetInnerHTML={{ __html: qa.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            </div>
                            {qa.keyPoints && (
                              <div className="mb-4">
                                <h4 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                                  <Lightbulb className="h-4 w-4 text-amber-500" />
                                  Key Points to Hit
                                </h4>
                                <ul className="space-y-1">
                                  {qa.keyPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </section>
            )}

            {(!selectedCategory || selectedCategory === "objection") && groupedQA.objection.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  Objection Handling
                </h2>
                <Card className="border-red-200 bg-red-50/30">
                  <CardContent className="p-0">
                    <Accordion type="multiple">
                      {groupedQA.objection.map((qa) => (
                        <AccordionItem key={qa.id} value={qa.id} className="border-b border-red-200 last:border-0 px-6 transition-colors hover:bg-red-100/50 data-[state=open]:bg-red-100/30">
                          <AccordionTrigger className="text-left hover:no-underline py-4 [&[data-state=open]>svg]:rotate-180 [&>svg]:transition-transform [&>svg]:duration-200">
                            <span className="font-semibold text-slate-900">{qa.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-6">
                            <div className="bg-white rounded-lg p-4 mb-4 border border-red-200">
                              <div className="whitespace-pre-wrap text-slate-700" dangerouslySetInnerHTML={{ __html: qa.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            </div>
                            {qa.keyPoints && (
                              <div>
                                <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Points</h4>
                                <ul className="space-y-1">
                                  {qa.keyPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </section>
            )}

            {(!selectedCategory || selectedCategory === "ask-them") && groupedQA["ask-them"].length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-green-600" />
                  Questions to Ask Them
                </h2>
                <Card className="border-green-200 bg-green-50/30">
                  <CardContent className="p-0">
                    <Accordion type="multiple">
                      {groupedQA["ask-them"].map((qa) => (
                        <AccordionItem key={qa.id} value={qa.id} className="border-b border-green-200 last:border-0 px-6 transition-colors hover:bg-green-100/50 data-[state=open]:bg-green-100/30">
                          <AccordionTrigger className="text-left hover:no-underline py-4 [&[data-state=open]>svg]:rotate-180 [&>svg]:transition-transform [&>svg]:duration-200">
                            <span className="font-semibold text-slate-900">{qa.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-6">
                            <div className="bg-white rounded-lg p-4 mb-4 border border-green-200">
                              <div className="whitespace-pre-wrap text-slate-700" dangerouslySetInnerHTML={{ __html: qa.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            </div>
                            {qa.keyPoints && (
                              <div>
                                <h4 className="text-sm font-semibold text-slate-900 mb-2">Why This Matters</h4>
                                <ul className="space-y-1">
                                  {qa.keyPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                      <Lightbulb className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
