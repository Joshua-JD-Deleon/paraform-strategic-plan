"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EditableContent } from "@/components/ui/editable-content";
import { AIPromptCard } from "@/components/ui/ai-prompt-card";
import Link from "next/link";
import {
  User,
  Lightbulb,
  Target,
  Users,
  MessageSquare,
  ArrowLeft,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { interviewerResearchPrompts } from "@/lib/data/interviewer";

export default function InterviewerResearchPage() {
  const prompts = interviewerResearchPrompts;

  return (
    <>
      <main className="min-h-screen">
        <PageHeader
          title="Interviewer Research"
          description="AI-powered tools to research any interviewer and prepare for meaningful conversations"
        />

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Back Button */}
            <Button asChild variant="outline" size="sm">
              <Link href="/prep/interview">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Interview Prep
              </Link>
            </Button>

            {/* Overview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-blue-200 bg-gradient-to-br from-white to-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-blue-500" />
                    How to Research Your Interviewer
                  </CardTitle>
                  <CardDescription>
                    Use AI to deeply understand who you're meeting with
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-700">
                    The best interviews happen when you've done your homework. Use the AI prompts below to:
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Analyze their LinkedIn profile to understand their career path and priorities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Generate likely questions they'll ask based on their role and background</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Find authentic connection points you share</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Prepare thoughtful questions that show you've done your research</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Background Research Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <User className="h-5 w-5 text-blue-500" />
                <h2 className="text-xl font-bold">1. Research Their Background</h2>
              </div>
              <AIPromptCard
                title="LinkedIn Profile Analysis"
                description="Analyze their career trajectory, education, and content to understand what they value"
                prompt={prompts.backgroundResearch.prompt}
                blocks={prompts.backgroundResearch.blocks}
                category="Background Research"
              />
            </motion.div>

            {/* Likely Questions Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-5 w-5 text-blue-500" />
                <h2 className="text-xl font-bold">2. Generate Likely Questions</h2>
              </div>
              <AIPromptCard
                title="Questions They'll Probably Ask"
                description="Based on their role and your position, what will they need to evaluate?"
                prompt={prompts.likelyQuestions.prompt}
                blocks={prompts.likelyQuestions.blocks}
                category="Question Generation"
              />
            </motion.div>

            {/* Connection Points Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-blue-500" />
                <h2 className="text-xl font-bold">3. Find Connection Points</h2>
              </div>
              <AIPromptCard
                title="Shared Background & Values"
                description="Identify authentic common ground to build rapport"
                prompt={prompts.connectionPoints.prompt}
                blocks={prompts.connectionPoints.blocks}
                category="Connection Building"
              />
            </motion.div>

            {/* Questions to Ask Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-blue-500" />
                <h2 className="text-xl font-bold">4. Prepare Your Questions</h2>
              </div>
              <AIPromptCard
                title="Questions to Ask Them"
                description="Thoughtful questions that demonstrate research and strategic thinking"
                prompt={prompts.questionsToAsk.prompt}
                blocks={prompts.questionsToAsk.blocks}
                category="Question Preparation"
              />
            </motion.div>

            {/* Editable Notes Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="h-5 w-5 text-blue-500" />
                <h2 className="text-xl font-bold">Your Research Notes</h2>
              </div>
              <div className="space-y-4">
                <EditableContent
                  id="interviewer-name"
                  title="Interviewer Profile"
                  description="Basic information about who you're meeting with"
                  category="Profile"
                  defaultContent={`Name: [Their Full Name]
Role: [Their Title]
Company: [Company Name]
LinkedIn: [Profile URL]

Quick Background:
- Education:
- Previous roles:
- Years in current role:
- Key responsibilities: `}
                  prompt="Paste the AI-generated background analysis here after running the prompts above"
                  promptBlocks={[]}
                  minHeight="200px"
                />

                <EditableContent
                  id="interviewer-philosophies"
                  title="Their Values & Philosophy"
                  description="What do they care about based on their content and background?"
                  category="Values"
                  defaultContent={`Key Themes from Their Content:
-
-
-

Sales/Leadership Philosophy:
-
-

What They Likely Value in Candidates:
-
-
- `}
                  prompt="Use the background research prompt to identify their values and philosophies"
                  promptBlocks={[]}
                  minHeight="200px"
                />

                <EditableContent
                  id="interviewer-likely-questions"
                  title="Questions They'll Likely Ask"
                  description="Prepare STAR answers for these"
                  category="Questions"
                  defaultContent={`Strategic Questions:
-
-

Behavioral Questions:
-
-

Role-Specific Questions:
-
-

About Me Questions:
-
- `}
                  prompt="Use the 'Generate Likely Questions' prompt above to fill this in"
                  promptBlocks={[]}
                  minHeight="250px"
                />

                <EditableContent
                  id="interviewer-connection-points"
                  title="Connection Points"
                  description="Shared background, experiences, or values to reference"
                  category="Connections"
                  defaultContent={`Shared Background:
-
-

Similar Career Paths:
-
-

Common Values/Philosophies:
-
-

How to Reference These:
-
- `}
                  prompt="Use the 'Find Connection Points' prompt above"
                  promptBlocks={[]}
                  minHeight="200px"
                />

                <EditableContent
                  id="interviewer-questions-to-ask"
                  title="Questions I'll Ask Them"
                  description="Thoughtful, well-researched questions"
                  category="My Questions"
                  defaultContent={`About Their Role:
1.
2.

About The Team/Company:
1.
2.

About Priorities:
1.
2.

Referencing Their Content:
1.
2. `}
                  prompt="Use the 'Questions to Ask Them' prompt above"
                  promptBlocks={[]}
                  minHeight="250px"
                />

                <EditableContent
                  id="interviewer-key-messages"
                  title="Key Messages to Convey"
                  description="What do you want them to remember about you?"
                  category="Strategy"
                  defaultContent={`Main Points to Emphasize:
1.
2.
3.

Stories to Tell:
-
-

How to Position My Experience:
-
-

Red Flags to Address:
-
- `}
                  prompt="Think about how to position your experience to resonate with their background and priorities"
                  promptBlocks={[]}
                  minHeight="200px"
                />
              </div>
            </motion.div>

            {/* Tips Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle>Research Tips</CardTitle>
                  <CardDescription>
                    Make the most of your interviewer research
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✓</span>
                      <span>Look at their last 5-10 LinkedIn posts to understand current priorities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✓</span>
                      <span>Check if they've written articles, given talks, or been quoted in press</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✓</span>
                      <span>Note specific phrases or themes they use - you can authentically reference these</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✓</span>
                      <span>Look for mutual connections who could provide insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✓</span>
                      <span>Understand their level - tailor your answers to match the seniority</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✗</span>
                      <span>Don't stalk - keep it professional and relevant to the interview</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✗</span>
                      <span>Don't force connections that aren't authentic</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="outline">
                      <Link href="/interview/mock">
                        Practice Mock Interviews
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/prep/stories">
                        Review Your Success Stories
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/prep/qa">
                        Q&A Preparation
                      </Link>
                    </Button>
                    <Button asChild className="bg-blue-500 hover:bg-blue-600">
                      <Link href="/prep/interview">
                        Back to Interview Hub
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
