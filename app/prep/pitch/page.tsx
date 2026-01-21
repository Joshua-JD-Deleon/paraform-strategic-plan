"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  Mic,
  Target,
  User,
  Building2,
  Sparkles,
  Clock,
  CheckCircle2,
  Lightbulb,
  Zap,
  TrendingUp
} from "lucide-react";

export default function PitchPage() {
  const elevatorPitches = [
    {
      title: "30-Second Intro",
      duration: "30 sec",
      context: "When someone asks 'Tell me about yourself'",
      pitch: `I'm a full-cycle enterprise AE with [X] years of experience in B2B SaaS. I've consistently hit quota by combining disciplined outbound with consultative discovery.

What excites me about Paraform is the opportunity to be the first sales hire - to build the playbook, not just execute it. The AI-powered RFP space is massive and ready for disruption, and Paraform has the product to win.

I want to help take you from founder-led sales to a scalable, repeatable motion.`,
      keyPoints: [
        "Experience summary in one sentence",
        "Why Paraform specifically",
        "What you bring to the table",
        "End with value you'll add"
      ]
    },
    {
      title: "2-Minute Story",
      duration: "2 min",
      context: "When they want more depth on your background",
      pitch: `Let me tell you how I got here.

I started in [BDR/SDR role] where I learned the fundamentals - prospecting, qualification, handling rejection. That's where I developed my outbound muscle.

Moving into a closing role, I found my passion for complex deals. At [Company], I [specific achievement - e.g., "closed our largest deal" or "built outbound motion that generated $Xm pipeline"].

What I've learned is that the best sales comes from genuine curiosity about the customer's problem, not from pushing product. That's why I'm drawn to Paraform - you're solving a real pain point with AI that actually works.

I'm at a point where I want more ownership. I don't want to run someone else's playbook - I want to build one. Being the first sales hire means I can shape how Paraform sells, influence product direction, and build something that scales.

That's why I'm here.`,
      keyPoints: [
        "Show career progression",
        "Highlight specific achievements",
        "Connect your approach to Paraform",
        "End with why this role, why now"
      ]
    },
    {
      title: "Why Paraform Pitch",
      duration: "1 min",
      context: "When they ask 'Why do you want to work here?'",
      pitch: `Three things:

**Market timing.** AI is transforming enterprise software, and the RFP/proposal space is massive - billions of hours spent on repetitive work. Paraform is positioned to capture that.

**Product differentiation.** I've looked at the competition. Most are adding AI as a feature. Paraform's agent-based approach - pulling from live sources, showing its reasoning - that's fundamentally different. Customers are choosing Paraform over established players even with existing contracts. That tells me the product is genuinely better.

**The opportunity.** Being the first sales hire isn't just a job - it's a chance to build something. I'll work directly with founders, influence product direction, and create the playbook that future hires will use. That kind of impact is rare, and it's what I'm looking for.`,
      keyPoints: [
        "Market opportunity",
        "Product differentiation",
        "Role opportunity",
        "Shows you've done research"
      ]
    },
    {
      title: "Why Me Pitch",
      duration: "1 min",
      context: "When they ask 'Why should we hire you?'",
      pitch: `You need someone who can:

1. **Run independently from day one.** I've done full-cycle before - sourcing, discovery, demos, negotiation, close. I don't need hand-holding.

2. **Build, not just execute.** I've created playbooks, built outbound sequences, refined messaging. I see patterns and systematize what works.

3. **Sell AI products.** I understand the objections - accuracy concerns, security questions, ROI skepticism. I know how to build trust with skeptical enterprise buyers.

4. **Stay hungry.** I'm at a point where I want ownership and impact. I'll outwork the competition because I'm building something, not just hitting a number.

You're looking for a founding AE who can take you from founder-led sales to a repeatable motion. That's exactly what I want to build.`,
      keyPoints: [
        "Immediate independence",
        "Builder mentality",
        "Relevant experience (AI sales)",
        "Hungry and committed"
      ]
    }
  ];

  const positioningStatements = [
    {
      theme: "On Being First Hire",
      statement: "I see being the first hire as the opportunity, not the risk. I get to build the foundation that everything else will be built on. That's exactly the kind of challenge I'm looking for.",
      when: "When they test your comfort with ambiguity"
    },
    {
      theme: "On Startup Risk",
      statement: "Paraform has product-market fit, paying customers, and rapid ARR growth. The 'risk' of an early-stage company is also the upside. I'd rather bet on myself in a high-growth environment than optimize for safety in a slow one.",
      when: "When they probe about stability concerns"
    },
    {
      theme: "On Working with Founders",
      statement: "I want direct access to decision-makers and product insight. In larger orgs, you're three levels removed from that. Here, I'll be in the room where it happens. That's where I do my best work.",
      when: "When discussing team structure"
    },
    {
      theme: "On Building vs Executing",
      statement: "I've run other people's playbooks - I know what good looks like. Now I want to write one. The skills are different: you need to experiment, document, iterate. That's the muscle I want to develop.",
      when: "When discussing your growth goals"
    },
    {
      theme: "On AI Sales",
      statement: "Selling AI is different. Buyers are skeptical because they've been burned by hype. You win by being transparent, setting realistic expectations, and letting the product prove itself. Paraform's transparency features - showing sources and confidence - are perfect for building that trust.",
      when: "When discussing your approach to selling Paraform"
    },
    {
      theme: "On Quota",
      statement: "I'm confident about quota because I have a system. Consistent outbound, rigorous qualification, multi-threaded deals. I don't rely on luck - I control what I can control and the numbers follow.",
      when: "When discussing expectations"
    }
  ];

  const closingStatements = [
    {
      context: "End of Interview",
      statement: "I want to be direct - everything I've learned today has reinforced why I want this role. The team is strong, the product is differentiated, and the opportunity is exactly what I'm looking for. I'm ready to start building. What are the next steps?"
    },
    {
      context: "After Virtual Session",
      statement: "I really enjoyed the discovery calls today. I tried to run them the way I'd run them with a real prospect - consultative, curious, focused on their world. I hope that came through. I'm excited about the in-person session."
    },
    {
      context: "Asking for the Job",
      statement: "I don't want to leave any ambiguity - I want this job. I think I'm the right person to be your first sales hire, and I'm ready to prove it. Is there anything else you need from me to feel confident about moving forward?"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-900 to-pink-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-rose-400/20 text-rose-100 border-rose-400/30 mb-4">
              Your Story
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">The Pitch</h1>
            <p className="text-rose-100/80">
              Why Paraform, Why You, and How to Tell Your Story
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="elevator" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="elevator">Elevator Pitches</TabsTrigger>
              <TabsTrigger value="positioning">Positioning</TabsTrigger>
              <TabsTrigger value="closing">Closing Strong</TabsTrigger>
            </TabsList>

            {/* Elevator Pitches Tab */}
            <TabsContent value="elevator">
              <div className="space-y-6">
                <Card className="bg-rose-50 border-rose-200">
                  <CardContent className="py-4">
                    <div className="flex items-center gap-2 text-rose-800">
                      <Mic className="h-5 w-5" />
                      <p className="font-medium">Practice these out loud. Knowing your pitch cold gives you confidence.</p>
                    </div>
                  </CardContent>
                </Card>

                {elevatorPitches.map((pitch, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center">
                              <Mic className="h-5 w-5 text-rose-600" />
                            </div>
                            <div>
                              <CardTitle>{pitch.title}</CardTitle>
                              <CardDescription>{pitch.context}</CardDescription>
                            </div>
                          </div>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {pitch.duration}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-slate-50 rounded-lg p-4 mb-4 font-mono text-sm whitespace-pre-wrap border">
                          <div dangerouslySetInnerHTML={{ __html: pitch.pitch.replace(/\*\*(.*?)\*\*/g, '<strong class="text-rose-700">$1</strong>') }} />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
                            <Lightbulb className="h-4 w-4 text-amber-500" />
                            Key Elements
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {pitch.keyPoints.map((point, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                                {point}
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Positioning Tab */}
            <TabsContent value="positioning">
              <div className="space-y-6">
                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="py-4">
                    <div className="flex items-center gap-2 text-purple-800">
                      <Target className="h-5 w-5" />
                      <p className="font-medium">These help you reframe potential concerns into strengths.</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-4">
                  {positioningStatements.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card className="h-full">
                        <CardHeader className="py-4">
                          <Badge className="w-fit bg-purple-100 text-purple-700 mb-2">
                            {item.theme}
                          </Badge>
                          <CardDescription className="text-xs">
                            Use when: {item.when}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-700 text-sm italic">"{item.statement}"</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Closing Tab */}
            <TabsContent value="closing">
              <div className="space-y-6">
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="py-4">
                    <div className="flex items-center gap-2 text-green-800">
                      <Sparkles className="h-5 w-5" />
                      <p className="font-medium">Always close strong. Leave no doubt that you want this.</p>
                    </div>
                  </CardContent>
                </Card>

                {closingStatements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card>
                      <CardHeader className="py-4">
                        <Badge className="w-fit bg-green-100 text-green-700">
                          {item.context}
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                          <p className="text-green-800 font-medium italic">"{item.statement}"</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Final Reminder */}
                <Card className="bg-gradient-to-br from-rose-100 to-purple-100 border-0">
                  <CardContent className="py-6 text-center">
                    <Zap className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Remember</h3>
                    <p className="text-slate-700">
                      Confidence without arrogance. Enthusiasm without desperation.
                      <br />
                      You're evaluating them as much as they're evaluating you.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
