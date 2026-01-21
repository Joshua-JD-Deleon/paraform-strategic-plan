"use client";

import { useState } from 'react';
import { mockQuestions, getMockInterviewPrompts } from '@/lib/data/mock-interview';
import { MockInterviewPlayer } from '@/components/interview/MockInterviewPlayer';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AIPromptCard } from '@/components/ui/ai-prompt-card';
import { Lightbulb, Clock, Target, RotateCcw, Sparkles, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MockInterviewPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [completedQuestions, setCompletedQuestions] = useState<string[]>([]);
  const [showAIPrompts, setShowAIPrompts] = useState(true);

  const prompts = getMockInterviewPrompts();

  const handleReset = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setCompletedQuestions([]);
  };

  return (
    <>
      <main className="min-h-screen">
        <PageHeader
          title="Mock Interview Practice"
          description="Practice with template questions or generate custom questions for any role"
        />

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Back Button */}
            <Button asChild variant="outline" size="sm">
              <Link href="/prep/interview">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Interview Prep
              </Link>
            </Button>

            {/* Toggle AI Prompts */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Practice Mode</h2>
              <Button
                variant="outline"
                onClick={() => setShowAIPrompts(!showAIPrompts)}
                className="gap-2"
              >
                <Sparkles className="h-4 w-4" />
                {showAIPrompts ? 'Hide' : 'Show'} AI Prompts
              </Button>
            </div>

            {/* AI Prompts Section */}
            {showAIPrompts && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <Card className="border-blue-200 bg-gradient-to-br from-white to-blue-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-blue-500" />
                      Generate Custom Interview Questions
                    </CardTitle>
                    <CardDescription>
                      Use AI to create questions tailored to your specific role, company, and interview round
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4">
                      The template questions below are useful, but AI can generate highly specific questions for your exact situation.
                      Choose a prompt based on your interview type:
                    </p>
                  </CardContent>
                </Card>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="phone-screen">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-2">
                        <Badge>Phone Screen</Badge>
                        <span className="text-left">Initial recruiter or hiring manager call</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <AIPromptCard
                        title="Phone Screen Questions"
                        description="Generate questions for your initial screening call"
                        prompt={prompts.phoneScreen.prompt}
                        blocks={prompts.phoneScreen.blocks}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="hiring-manager">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-2">
                        <Badge>Hiring Manager</Badge>
                        <span className="text-left">Deep dive with your potential manager</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <AIPromptCard
                        title="Hiring Manager Interview Questions"
                        description="Strategic, behavioral, and role-specific questions"
                        prompt={prompts.hiringManager.prompt}
                        blocks={prompts.hiringManager.blocks}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="panel">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-2">
                        <Badge>Panel Interview</Badge>
                        <span className="text-left">Multiple interviewers from different functions</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <AIPromptCard
                        title="Panel Interview Questions"
                        description="Questions organized by panel member role"
                        prompt={prompts.panel.prompt}
                        blocks={prompts.panel.blocks}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="executive">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-2">
                        <Badge>Executive Round</Badge>
                        <span className="text-left">Final round with C-suite or VP</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <AIPromptCard
                        title="Executive Interview Questions"
                        description="High-level strategic and culture fit questions"
                        prompt={prompts.executive.prompt}
                        blocks={prompts.executive.blocks}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="skills">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-2">
                        <Badge>Skills Assessment</Badge>
                        <span className="text-left">Case studies, role plays, and exercises</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <AIPromptCard
                        title="Skills Assessment Scenarios"
                        description="Practice scenarios and case studies"
                        prompt={prompts.skillsAssessment.prompt}
                        blocks={prompts.skillsAssessment.blocks}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="custom">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Custom</Badge>
                        <span className="text-left">Fully customized for your specific situation</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <AIPromptCard
                        title="Custom Interview Questions"
                        description="Most flexible - provide your specific context"
                        prompt={prompts.customQuestions.prompt}
                        blocks={prompts.customQuestions.blocks}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            )}

            {/* Divider */}
            {showAIPrompts && (
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-sm text-slate-500">Or practice with template questions below</span>
                <div className="flex-1 h-px bg-slate-200" />
              </div>
            )}

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-blue-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-blue-500" />
                      <CardTitle className="text-lg">Template Questions</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Common interview questions with answer frameworks
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card className="border-blue-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-500" />
                      <CardTitle className="text-lg">Timed Practice</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Each question includes a suggested time limit
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Card className="border-blue-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-blue-500" />
                      <CardTitle className="text-lg">Answer Frameworks</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      See suggested answer structures and tips
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Instructions Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-blue-50 to-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-blue-500" />
                    How to Practice Effectively
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5 flex-shrink-0">1</Badge>
                      <span>Read the question carefully and start the timer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5 flex-shrink-0">2</Badge>
                      <span><strong>Answer out loud</strong> - this builds muscle memory and confidence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5 flex-shrink-0">3</Badge>
                      <span>Review the suggested answer framework - how does yours compare?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5 flex-shrink-0">4</Badge>
                      <span>Customize the framework with YOUR specific examples and stories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5 flex-shrink-0">5</Badge>
                      <span>Practice the same question multiple times until you're confident</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mock Interview Player */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <MockInterviewPlayer
                questions={mockQuestions}
                currentIndex={currentIndex}
                onNext={() => {
                  setShowAnswer(false);
                  setCurrentIndex(i => Math.min(i + 1, mockQuestions.length - 1));
                }}
                onPrevious={() => {
                  setShowAnswer(false);
                  setCurrentIndex(i => Math.max(i - 1, 0));
                }}
                showAnswer={showAnswer}
                onToggleAnswer={() => setShowAnswer(!showAnswer)}
                completedQuestions={completedQuestions}
                onMarkComplete={(id) => setCompletedQuestions([...completedQuestions, id])}
              />
            </motion.div>

            {/* Reset and Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Practice Actions</CardTitle>
                  <CardDescription>
                    Reset your progress or explore other interview resources
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <RotateCcw className="h-4 w-4" />
                      Start Over
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/interview/research">
                        Research Your Interviewer
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/prep/stories">
                        View STAR Stories
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/prep/qa">
                        Q&A Preparation
                      </Link>
                    </Button>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
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
