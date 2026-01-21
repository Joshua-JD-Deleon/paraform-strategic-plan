"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { User, Target, Lightbulb, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Interview() {
  const interviewTools = [
    {
      title: "Interviewer Research",
      icon: User,
      iconColor: "from-blue-500 to-blue-500",
      borderColor: "border-blue-200",
      href: "/interview/research",
      description: "Research any interviewer with AI-powered prompts to understand their background, priorities, and likely questions.",
      features: [
        "LinkedIn profile analysis",
        "Generate likely interview questions",
        "Find connection points",
        "Prepare thoughtful questions to ask"
      ]
    },
    {
      title: "Mock Interview Practice",
      icon: Target,
      iconColor: "from-blue-500 to-blue-600",
      borderColor: "border-blue-200",
      href: "/interview/mock",
      description: "Practice with customizable interview questions and AI prompts to generate role-specific scenarios.",
      features: [
        "Template questions by category",
        "Generate custom questions for any role",
        "Practice with suggested answers",
        "Timed response practice"
      ]
    }
  ];

  const interviewTips = [
    "Use the STAR method for behavioral questions (Situation, Task, Action, Result)",
    "Reference specific numbers and quantifiable achievements from your background",
    "Research the company, role, and interviewer before every conversation",
    "Show strategic thinking - go beyond surface-level responses",
    "Ask thoughtful questions that demonstrate your research and interest",
    "Be authentic about growth areas - self-awareness is a strength",
    "Demonstrate cross-functional collaboration skills",
    "Prepare examples that show both wins AND what you learned from challenges"
  ];

  return (
    <>
      <main className="min-h-screen">
        <PageHeader
          title="Interview Preparation"
          description="AI-powered tools to research interviewers and practice for any interview"
        />

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* AI-Powered Tools Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-6 w-6 text-blue-500" />
                <h2 className="text-2xl font-bold">AI-Powered Interview Prep</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {interviewTools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <motion.div
                      key={tool.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Link href={tool.href}>
                        <Card className={`h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group ${tool.borderColor}`}>
                          <CardHeader>
                            <div className="flex items-center gap-4 mb-4">
                              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${tool.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className="w-8 h-8 text-white" />
                              </div>
                              <div className="flex-1">
                                <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                                  {tool.title}
                                </CardTitle>
                              </div>
                            </div>
                            <CardDescription className="text-base">
                              {tool.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2 text-sm text-muted-foreground">
                              {tool.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                            <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600">
                              Get Started
                            </Button>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* General Interview Tips Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-blue-500" />
                    General Interview Tips
                  </CardTitle>
                  <CardDescription>
                    Best practices for professional interviews at any level
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {interviewTips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle>How to Use These Tools</CardTitle>
                  <CardDescription>
                    Get the most out of your interview preparation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Research Your Interviewer</h4>
                      <p className="text-sm text-slate-600">
                        Use the Interviewer Research tool to analyze their LinkedIn, generate likely questions, and find connection points.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Generate Custom Questions</h4>
                      <p className="text-sm text-slate-600">
                        Use AI prompts to generate role-specific and company-specific questions tailored to your interview.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Practice Your Responses</h4>
                      <p className="text-sm text-slate-600">
                        Use the Mock Interview tool to practice answering questions out loud with suggested frameworks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Customize Everything</h4>
                      <p className="text-sm text-slate-600">
                        Edit any content to match your specific situation. Your customizations are saved locally in your browser.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Related Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Related Resources</CardTitle>
                  <CardDescription>
                    Additional materials to support your interview prep
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/prep/qa">
                        Q&A Preparation
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/prep/stories">
                        Success Stories
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/prep/cheat-sheet">
                        Quick Reference
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/prep/frameworks">
                        Strategic Frameworks
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
