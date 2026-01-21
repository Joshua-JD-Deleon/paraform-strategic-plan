"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Target,
  CheckCircle2,
  MessageSquare,
  Zap,
  ArrowRight,
  AlertCircle,
  ThumbsUp,
  Clock,
  Star
} from "lucide-react";

interface ClosingScript {
  id: string;
  title: string;
  context: string;
  script: string;
  variations?: string[];
  doNot: string[];
}

const closingScripts: ClosingScript[] = [
  {
    id: "end-of-call",
    title: "End of Virtual Session Close",
    context: "After completing the discovery call and/or demo simulations",
    script: `"Before we wrap up, I want to share how I'm feeling about this opportunity. Today's conversation has only reinforced my excitement about Paraform. The problem you're solving, the team you're building, and the stage you're at - this is exactly what I've been looking for.

I'm confident I can come in and make an immediate impact. My experience in [specific relevant experience] combined with my track record of [specific achievement] positions me well to help build the GTM motion here.

What questions do you have for me about my fit for this role? And what are the next steps in the process?"`,
    variations: [
      "If pressed for timeline: \"I'm actively exploring opportunities, but Paraform is my top choice. I'm flexible on timing to make this work.\"",
      "If they seem hesitant: \"Is there anything about my background or approach that gives you pause? I'd rather address concerns now than leave them unspoken.\""
    ],
    doNot: [
      "Don't be desperate or over-eager",
      "Don't pressure for immediate decision",
      "Don't trash talk other opportunities",
      "Don't undersell yourself"
    ]
  },
  {
    id: "dean-checkin",
    title: "Final Dean Check-in Close",
    context: "The 15-minute check-in at the end of the in-person day",
    script: `"Dean, I want to be direct - I want this role.

Today has confirmed everything I was excited about coming in. The team energy during lunch, the thoughtful questions in the interview, and the clarity of vision for where Paraform is headed - I want to be part of this.

I know I can come in and contribute immediately. [Reference specific thing discussed today]. My experience building from scratch at [previous company] prepared me for exactly this kind of challenge.

What would you need to see from me to feel confident making an offer? Is there anything I can address right now?"`,
    variations: [
      "If they mention other candidates: \"I respect that you have a process. What I can tell you is that I'm ready to commit and start contributing. I'd rather you knew that clearly.\"",
      "If timeline is unclear: \"I don't want to be pushy, but I do want you to know that if you're ready to move, I'm ready to move. What's a realistic timeline for a decision?\""
    ],
    doNot: [
      "Don't give ultimatums",
      "Don't mention competing offers unless asked",
      "Don't beg or plead",
      "Don't leave without expressing clear interest"
    ]
  },
  {
    id: "handle-feedback",
    title: "Handling Live Feedback",
    context: "If they give you feedback or objections during the close",
    script: `If positive feedback:
"Thank you for sharing that. I appreciate the direct feedback. [If they mention specific strengths] That's exactly what I'd bring to the team every day."

If concerns raised:
"I appreciate you being direct with me - that's how I'd want us to work together. Let me address that... [address the concern directly and specifically]. Does that help clarify things?"

If they're non-committal:
"I understand you need to complete your process. Before we wrap - what's the one thing that would make you feel fully confident about bringing me on board? I want to make sure you have everything you need."`,
    doNot: [
      "Don't get defensive about feedback",
      "Don't dismiss their concerns",
      "Don't agree with criticism of yourself unnecessarily",
      "Don't leave concerns unaddressed"
    ]
  }
];

const closingPrinciples = [
  {
    title: "Ask for What You Want",
    description: "Be direct about your interest. Interviewers respect clarity.",
    icon: Target
  },
  {
    title: "Surface Objections",
    description: "Invite them to share concerns so you can address them.",
    icon: AlertCircle
  },
  {
    title: "Establish Next Steps",
    description: "Never leave a conversation without knowing what's next.",
    icon: ArrowRight
  },
  {
    title: "Express Gratitude",
    description: "Thank them sincerely for their time and consideration.",
    icon: ThumbsUp
  }
];

export default function ClosingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4">
              Close Strong
            </Badge>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Closing Scripts
            </h1>
            <p className="text-slate-600">
              How to end each interview session with confidence and clarity
            </p>
          </div>

          {/* Key Principles */}
          <Card className="mb-8 border border-slate-200/50 shadow-sm">
            <CardHeader className="py-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-500" />
                The Sales Close Mindset
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                As a sales professional, you&apos;re being evaluated on whether you can close. Use these interviews to demonstrate that skill.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                {closingPrinciples.map((principle, i) => {
                  const Icon = principle.icon;
                  return (
                    <div key={i} className="p-3 bg-slate-50 rounded-lg text-center">
                      <Icon className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                      <p className="font-medium text-sm text-slate-900">{principle.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{principle.description}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Closing Scripts */}
          <div className="space-y-6">
            {closingScripts.map((script, index) => (
              <motion.div
                key={script.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border border-slate-200/50 hover:border-blue-300 transition-all duration-300 shadow-sm">
                  <CardHeader className="py-4">
                    <div className="flex items-center gap-2 mb-1">
                      <MessageSquare className="h-5 w-5 text-blue-500" />
                      <CardTitle className="text-lg">{script.title}</CardTitle>
                    </div>
                    <p className="text-sm text-slate-500">{script.context}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Main Script */}
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">
                        {script.script}
                      </pre>
                    </div>

                    {/* Variations */}
                    {script.variations && (
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 mb-2 flex items-center gap-2">
                          <Zap className="h-4 w-4 text-amber-500" />
                          Situational Variations
                        </h4>
                        <div className="space-y-2">
                          {script.variations.map((variation, i) => (
                            <div key={i} className="p-3 bg-amber-50 border border-amber-100 rounded-lg">
                              <p className="text-sm text-slate-700 italic">{variation}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Do Not */}
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <h4 className="font-semibold text-sm text-red-900 mb-2 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Avoid These Mistakes
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-1">
                        {script.doNot.map((item, i) => (
                          <li key={i} className="text-xs text-red-700 flex items-start gap-2">
                            <span className="text-red-500 mt-0.5">✗</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* The Ultimate Close */}
          <Card className="mt-8 border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg">
            <CardHeader className="py-4">
              <CardTitle className="text-lg flex items-center gap-2 text-emerald-900">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                The Ultimate Mindset
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-white/70 rounded-lg border border-emerald-200">
                <p className="text-slate-700 leading-relaxed">
                  <strong>Remember:</strong> You&apos;re not begging for a job. You&apos;re interviewing them as much as they&apos;re interviewing you.
                  The right close communicates that you&apos;re a professional who knows their value, is genuinely excited about this specific opportunity,
                  and would be a great partner to build with. Confidence, not arrogance. Enthusiasm, not desperation.
                </p>
              </div>
              <div className="mt-4 grid md:grid-cols-3 gap-3 text-center">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <p className="text-sm font-bold text-emerald-800">Be Direct</p>
                  <p className="text-xs text-emerald-700">&quot;I want this role&quot;</p>
                </div>
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <p className="text-sm font-bold text-emerald-800">Be Specific</p>
                  <p className="text-xs text-emerald-700">&quot;Here&apos;s why I&apos;ll succeed&quot;</p>
                </div>
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <p className="text-sm font-bold text-emerald-800">Be Ready</p>
                  <p className="text-xs text-emerald-700">&quot;What&apos;s next?&quot;</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
