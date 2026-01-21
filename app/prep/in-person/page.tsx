"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Coffee,
  MessageSquare,
  CheckCircle2,
  Lightbulb,
  ChevronRight,
  Heart,
  Target,
  AlertTriangle,
  Handshake,
  Brain,
  Sparkles
} from "lucide-react";

export default function InPersonPrep() {
  const teamLunchPrep = {
    duration: "45 minutes",
    goal: "Build genuine rapport and assess culture fit (both ways)",
    mindset: "Be yourself. This is as much about you evaluating them as them evaluating you.",
    topics: [
      {
        category: "Their Stories",
        questions: [
          "What made you join Paraform?",
          "What's the most exciting thing you're working on right now?",
          "What's the culture like day-to-day?",
          "What do you wish you knew before joining?"
        ]
      },
      {
        category: "Product & Market",
        questions: [
          "What's your favorite customer win story?",
          "What do customers love most about Paraform?",
          "Where do you see the biggest opportunity?",
          "What's the competitive landscape like?"
        ]
      },
      {
        category: "Team & Growth",
        questions: [
          "How does the sales team work together?",
          "What's the relationship like between sales and product?",
          "How does Paraform approach professional development?",
          "What does success look like in the first year?"
        ]
      },
      {
        category: "Your Curiosity",
        questions: [
          "What's something surprising about working here?",
          "How do decisions get made?",
          "What's the founder involvement like?",
          "What keeps you excited to come to work?"
        ]
      }
    ],
    tips: [
      "Let conversations flow naturally - don't rapid-fire questions",
      "Share your own stories and experiences",
      "Show genuine curiosity about their experiences",
      "Be present - put away your phone",
      "It's okay to have moments of silence",
      "Find common ground and build on it"
    ],
    avoid: [
      "Dominating the conversation",
      "Only talking about work",
      "Negative talk about past employers",
      "Asking about salary/comp during lunch",
      "Being too formal or stiff"
    ]
  };

  const teamInterviewPrep = {
    duration: "30 minutes (without Dean)",
    goal: "Demonstrate competence, curiosity, and culture fit",
    format: "Likely questions about experience, scenarios, and fit",
    likelyQuestions: [
      {
        question: "Tell us about yourself / your background",
        approach: "2-minute pitch: Background → Why Sales → Why Paraform → What you bring",
        tips: "Keep it concise, end with why you're excited about Paraform"
      },
      {
        question: "Why Paraform? Why now?",
        approach: "AI/RFP market timing + Product differentiation + Stage of company + Team",
        tips: "Be specific about what you've learned about Paraform in the process"
      },
      {
        question: "Tell me about a deal you're proud of",
        approach: "Use STAR format - focus on your specific contributions and learnings",
        tips: "Include the challenge, your approach, and measurable outcome"
      },
      {
        question: "How do you handle rejection/losing deals?",
        approach: "Acknowledge it's hard, but focus on what you learn and how you improve",
        tips: "Give a specific example of a loss that made you better"
      },
      {
        question: "How do you approach a new territory/market?",
        approach: "Research → ICP identification → Outbound strategy → Measure & iterate",
        tips: "Show you're systematic but also adaptable"
      },
      {
        question: "What questions do you have for us?",
        approach: "Ask about their experience, the team, product roadmap",
        tips: "Have 3-5 thoughtful questions prepared"
      }
    ],
    questionsToAsk: [
      "What does the ideal AE at Paraform look like?",
      "What's the biggest challenge the sales team is facing right now?",
      "How does the team celebrate wins?",
      "What's something you'd want to change about how sales works here?",
      "What's the relationship like between founders and the sales team?",
      "How do you see the AE role evolving as Paraform grows?"
    ]
  };

  const deanCheckinPrep = {
    duration: "15 minutes",
    goal: "Reinforce fit, address any concerns, align on next steps",
    structure: [
      {
        phase: "Reflection",
        duration: "5 min",
        content: "Dean will likely ask how you felt about the day. Be honest and specific about what excited you."
      },
      {
        phase: "Questions/Concerns",
        duration: "5 min",
        content: "This is your chance to ask any final questions or address anything that came up."
      },
      {
        phase: "Next Steps",
        duration: "5 min",
        content: "Dean should outline timeline and next steps. Ask if there's anything else he needs from you."
      }
    ],
    closingQuestions: [
      "Based on today, is there anything that gives you pause about my fit?",
      "What would make you confident I'm the right hire?",
      "What's the timeline for a decision?",
      "Is there anything else you need from me to move forward?"
    ],
    closingStatements: [
      "I'm really excited about this opportunity. The team was great, and I can see myself thriving here.",
      "Everything I've learned today has reinforced why I want this role.",
      "I'm ready to move forward whenever you are. What are the next steps?"
    ]
  };

  const generalTips = [
    {
      title: "Energy Management",
      tip: "It's a long day. Bring water, eat well at lunch, take bathroom breaks as needed to reset."
    },
    {
      title: "Active Listening",
      tip: "Reference things people said earlier in the day. It shows you're engaged and listening."
    },
    {
      title: "Authenticity",
      tip: "Be yourself. If you have to pretend to fit in, it's not the right fit anyway."
    },
    {
      title: "Confidence Without Arrogance",
      tip: "Know your worth, but stay curious and coachable. They want confident, not cocky."
    },
    {
      title: "Ask for the Job",
      tip: "At some point, make it clear you want this. 'I'm excited and ready to join if you'll have me.'"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-700 to-orange-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <Link href="/prep" className="inline-flex items-center text-amber-200 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Prep
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <Badge className="bg-amber-500 text-white mb-2">In-Person Session</Badge>
              <h1 className="text-3xl font-bold">In-Person Interview Prep</h1>
            </div>
          </div>
          <p className="text-amber-100">
            1.5 hours: Team Lunch (45 min) + Team Interview (30 min) + Dean Check-in (15 min)
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* General Tips Alert */}
          <Card className="mb-8 border-2 border-amber-300 bg-amber-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-800">
                <Sparkles className="h-5 w-5" />
                Mindset for In-Person Day
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-4">
                {generalTips.map((tip, index) => (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center mx-auto mb-2">
                      <span className="text-amber-800 font-bold">{index + 1}</span>
                    </div>
                    <h4 className="font-semibold text-amber-900 text-sm mb-1">{tip.title}</h4>
                    <p className="text-xs text-amber-700">{tip.tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="lunch" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="lunch" className="flex items-center gap-2">
                <Coffee className="h-4 w-4" />
                Team Lunch
              </TabsTrigger>
              <TabsTrigger value="interview" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Team Interview
              </TabsTrigger>
              <TabsTrigger value="checkin" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Dean Check-in
              </TabsTrigger>
            </TabsList>

            {/* Team Lunch Tab */}
            <TabsContent value="lunch">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Coffee className="h-5 w-5 text-amber-600" />
                        Team Lunch
                      </CardTitle>
                      <Badge variant="outline">{teamLunchPrep.duration}</Badge>
                    </div>
                    <CardDescription>{teamLunchPrep.goal}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-amber-50 rounded-lg p-4 mb-6 border border-amber-200">
                      <div className="flex items-center gap-2 text-amber-800 font-medium mb-2">
                        <Brain className="h-5 w-5" />
                        Mindset
                      </div>
                      <p className="text-amber-700">{teamLunchPrep.mindset}</p>
                    </div>

                    <h4 className="font-semibold text-slate-900 mb-4">Conversation Topics & Questions</h4>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {teamLunchPrep.topics.map((topic, index) => (
                        <Card key={index} className="bg-slate-50">
                          <CardHeader className="py-4">
                            <CardTitle className="text-sm">{topic.category}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {topic.questions.map((q, qIndex) => (
                                <li key={qIndex} className="text-sm text-slate-600 flex items-start gap-2">
                                  <ChevronRight className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                  {q}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4" />
                          Do This
                        </h4>
                        <ul className="space-y-2">
                          {teamLunchPrep.tips.map((tip, index) => (
                            <li key={index} className="text-sm text-green-700 flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4" />
                          Avoid This
                        </h4>
                        <ul className="space-y-2">
                          {teamLunchPrep.avoid.map((item, index) => (
                            <li key={index} className="text-sm text-red-700 flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Team Interview Tab */}
            <TabsContent value="interview">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-amber-600" />
                        Team Interview (Without Dean)
                      </CardTitle>
                      <Badge variant="outline">{teamInterviewPrep.duration}</Badge>
                    </div>
                    <CardDescription>{teamInterviewPrep.goal}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-slate-900 mb-4">Likely Questions & How to Approach</h4>
                    <div className="space-y-4">
                      {teamInterviewPrep.likelyQuestions.map((item, index) => (
                        <Card key={index} className="bg-slate-50">
                          <CardHeader className="py-4">
                            <CardTitle className="text-base text-purple-800">"{item.question}"</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <Badge className="bg-purple-100 text-purple-700 flex-shrink-0">Approach</Badge>
                                <span className="text-sm text-slate-700">{item.approach}</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <Badge className="bg-amber-100 text-amber-700 flex-shrink-0">Tip</Badge>
                                <span className="text-sm text-slate-600">{item.tips}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-amber-500" />
                        Questions to Ask Them
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {teamInterviewPrep.questionsToAsk.map((q, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                            <ChevronRight className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                            {q}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Dean Check-in Tab */}
            <TabsContent value="checkin">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-amber-600" />
                        Check-in with Dean
                      </CardTitle>
                      <Badge variant="outline">{deanCheckinPrep.duration}</Badge>
                    </div>
                    <CardDescription>{deanCheckinPrep.goal}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-slate-900 mb-4">Expected Flow</h4>
                    <div className="space-y-4 mb-6">
                      {deanCheckinPrep.structure.map((phase, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                          <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center flex-shrink-0 font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-slate-900">{phase.phase}</span>
                              <Badge variant="outline" className="text-xs">{phase.duration}</Badge>
                            </div>
                            <p className="text-sm text-slate-600">{phase.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Target className="h-5 w-5 text-purple-500" />
                          Questions to Ask Dean
                        </h4>
                        <ul className="space-y-2">
                          {deanCheckinPrep.closingQuestions.map((q, index) => (
                            <li key={index} className="text-sm text-slate-600 border-l-2 border-purple-300 pl-3 py-1">
                              "{q}"
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Handshake className="h-5 w-5 text-green-500" />
                          Closing Statements
                        </h4>
                        <ul className="space-y-2">
                          {deanCheckinPrep.closingStatements.map((s, index) => (
                            <li key={index} className="text-sm text-green-700 bg-green-50 p-3 rounded-lg border border-green-200">
                              "{s}"
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Close Strong Card */}
                <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-800">
                      <Heart className="h-5 w-5" />
                      Close Strong
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-800 mb-4">
                      This is your last impression. Leave no doubt that you want this job and are ready to start.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-purple-200">
                      <p className="text-slate-700 font-medium italic">
                        "Dean, I want to be direct - today has only reinforced my excitement about this opportunity.
                        The team is great, the product is compelling, and I can see myself making a real impact here.
                        I'm ready to move forward whenever you are. What are the next steps?"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Quick Reference Footer */}
          <Card className="mt-8 bg-amber-800 text-white">
            <CardContent className="py-6">
              <div className="flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <p className="text-amber-300 text-sm">Team Lunch</p>
                  <p className="font-bold">45 min - Build Rapport</p>
                </div>
                <div className="text-center">
                  <p className="text-amber-300 text-sm">Team Interview</p>
                  <p className="font-bold">30 min - Show Fit</p>
                </div>
                <div className="text-center">
                  <p className="text-amber-300 text-sm">Dean Check-in</p>
                  <p className="font-bold">15 min - Close Strong</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
