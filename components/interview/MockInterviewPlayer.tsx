"use client";

import { MockQuestion } from '@/types/interview';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Timer } from './Timer';
import { ChevronLeft, ChevronRight, Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MockInterviewPlayerProps {
  questions: MockQuestion[];
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
  showAnswer: boolean;
  onToggleAnswer: () => void;
  completedQuestions: string[];
  onMarkComplete: (id: string) => void;
}

export function MockInterviewPlayer({
  questions,
  currentIndex,
  onNext,
  onPrevious,
  showAnswer,
  onToggleAnswer,
  completedQuestions,
  onMarkComplete,
}: MockInterviewPlayerProps) {
  const question = questions[currentIndex];
  const isCompleted = completedQuestions.includes(question.id);

  const handleNext = () => {
    if (!isCompleted) {
      onMarkComplete(question.id);
    }
    onNext();
  };

  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Progress Bar */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-rose-500 transition-all"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <span className="text-sm text-muted-foreground whitespace-nowrap font-medium">
          {currentIndex + 1} of {questions.length}
        </span>
      </div>

      {/* Question Card */}
      <Card className="border-2 border-rose-200 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Badge variant="outline" className="border-rose-300 text-rose-700">
              Round {question.round}: {question.category}
            </Badge>
            <Timer seconds={question.timeLimit || 60} />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-tight">
            {question.question}
          </h2>

          {/* Answer Section */}
          <AnimatePresence mode="wait">
            {showAnswer ? (
              <motion.div
                key="answer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-rose-500 space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-rose-500" />
                    <h3 className="font-semibold text-rose-700 text-lg">
                      Suggested Answer
                    </h3>
                  </div>
                  <p className="text-slate-700 whitespace-pre-line leading-relaxed">
                    {question.suggestedAnswer}
                  </p>
                </div>
                <Button
                  onClick={onToggleAnswer}
                  variant="outline"
                  className="w-full mt-4"
                >
                  <EyeOff className="mr-2 h-4 w-4" />
                  Hide Answer
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  onClick={onToggleAnswer}
                  className="w-full bg-rose-600 hover:bg-rose-700"
                  size="lg"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Show Suggested Answer
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center gap-4">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="text-sm text-muted-foreground">
          {completedQuestions.length} / {questions.length} reviewed
        </div>

        <Button
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
          className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Completion Message */}
      {currentIndex === questions.length - 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-rose-50 to-rose-100 border border-rose-200 rounded-lg p-6 text-center"
        >
          <h3 className="text-lg font-semibold text-rose-900 mb-2">
            Final Question
          </h3>
          <p className="text-slate-700">
            You've reached the last question. Review your answers and practice until you feel confident.
          </p>
        </motion.div>
      )}
    </div>
  );
}
