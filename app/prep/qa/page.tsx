"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EditableContent } from "@/components/ui/editable-content";
import { qaTemplates, getCategories } from "@/lib/data/qa";
import { Sparkles, BookOpen, ArrowRight } from "lucide-react";

export default function QA() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getCategories();

  const filteredTemplates = selectedCategory
    ? qaTemplates.filter((item) => item.category === selectedCategory)
    : qaTemplates;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <PageHeader
          title="Interview Q&A Prep"
          description="Generate personalized answers with AI prompts"
        />

        <div className="container mx-auto px-4 py-12 max-w-5xl">
          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Card className="border-blue-200 bg-blue-50/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Sparkles className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-2">
                      How to use this AI-powered Q&A tool
                    </h3>
                    <div className="space-y-2 text-sm text-slate-700">
                      <div className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <p>
                          <strong>Click "AI" button</strong> on any question to see the
                          AI prompt template
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <p>
                          <strong>Replace the [BLOCKS]</strong> with your specific
                          information (company name, your experience, etc.)
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <p>
                          <strong>Copy and paste</strong> the customized prompt into
                          Claude, ChatGPT, or Gemini
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <p>
                          <strong>Edit and save</strong> the AI-generated answer to make it
                          your own
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-5 w-5 text-slate-600" />
              <h3 className="font-semibold text-slate-900">Filter by category</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => setSelectedCategory(null)}
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                className={selectedCategory === null ? "bg-slate-900" : ""}
              >
                All Questions ({qaTemplates.length})
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  variant={selectedCategory === cat.value ? "default" : "outline"}
                  size="sm"
                  className={
                    selectedCategory === cat.value
                      ? cat.value === "behavioral"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : cat.value === "role-specific"
                        ? "bg-purple-600 hover:bg-purple-700"
                        : cat.value === "company-specific"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : cat.value === "situational"
                        ? "bg-amber-600 hover:bg-amber-700"
                        : "bg-emerald-600 hover:bg-emerald-700"
                      : ""
                  }
                >
                  {cat.label} ({cat.count})
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Q&A Templates */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {/* Behavioral */}
            {(!selectedCategory || selectedCategory === "behavioral") && (
              <motion.div variants={item}>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-600">Behavioral</Badge>
                    <h2 className="text-xl font-bold text-slate-900">
                      Behavioral Questions
                    </h2>
                  </div>
                  <p className="text-sm text-slate-600">
                    Classic behavioral interview questions that explore your past
                    experiences
                  </p>
                </div>
                <div className="space-y-4">
                  {qaTemplates
                    .filter((t) => t.category === "behavioral")
                    .map((template) => (
                      <EditableContent
                        key={template.id}
                        id={template.id}
                        title={template.question}
                        description={template.description}
                        defaultContent={template.defaultAnswer}
                        prompt={template.prompt}
                        promptBlocks={template.promptBlocks}
                        category="Behavioral"
                        minHeight="200px"
                      />
                    ))}
                </div>
              </motion.div>
            )}

            {/* Role-Specific */}
            {(!selectedCategory || selectedCategory === "role-specific") && (
              <motion.div variants={item}>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-600">Role-Specific</Badge>
                    <h2 className="text-xl font-bold text-slate-900">
                      Role-Specific Questions
                    </h2>
                  </div>
                  <p className="text-sm text-slate-600">
                    Questions about your specific role, skills, and industry knowledge
                  </p>
                </div>
                <div className="space-y-4">
                  {qaTemplates
                    .filter((t) => t.category === "role-specific")
                    .map((template) => (
                      <EditableContent
                        key={template.id}
                        id={template.id}
                        title={template.question}
                        description={template.description}
                        defaultContent={template.defaultAnswer}
                        prompt={template.prompt}
                        promptBlocks={template.promptBlocks}
                        category="Role-Specific"
                        minHeight="200px"
                      />
                    ))}
                </div>
              </motion.div>
            )}

            {/* Company-Specific */}
            {(!selectedCategory || selectedCategory === "company-specific") && (
              <motion.div variants={item}>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-600">Company-Specific</Badge>
                    <h2 className="text-xl font-bold text-slate-900">
                      Company-Specific Questions
                    </h2>
                  </div>
                  <p className="text-sm text-slate-600">
                    Questions about your motivation and alignment with the company
                  </p>
                </div>
                <div className="space-y-4">
                  {qaTemplates
                    .filter((t) => t.category === "company-specific")
                    .map((template) => (
                      <EditableContent
                        key={template.id}
                        id={template.id}
                        title={template.question}
                        description={template.description}
                        defaultContent={template.defaultAnswer}
                        prompt={template.prompt}
                        promptBlocks={template.promptBlocks}
                        category="Company-Specific"
                        minHeight="200px"
                      />
                    ))}
                </div>
              </motion.div>
            )}

            {/* Situational */}
            {(!selectedCategory || selectedCategory === "situational") && (
              <motion.div variants={item}>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-amber-600">Situational</Badge>
                    <h2 className="text-xl font-bold text-slate-900">
                      Situational Questions
                    </h2>
                  </div>
                  <p className="text-sm text-slate-600">
                    Hypothetical scenarios testing your problem-solving approach
                  </p>
                </div>
                <div className="space-y-4">
                  {qaTemplates
                    .filter((t) => t.category === "situational")
                    .map((template) => (
                      <EditableContent
                        key={template.id}
                        id={template.id}
                        title={template.question}
                        description={template.description}
                        defaultContent={template.defaultAnswer}
                        prompt={template.prompt}
                        promptBlocks={template.promptBlocks}
                        category="Situational"
                        minHeight="200px"
                      />
                    ))}
                </div>
              </motion.div>
            )}

            {/* Ask Them */}
            {(!selectedCategory || selectedCategory === "ask-them") && (
              <motion.div variants={item}>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-emerald-600">Ask Them</Badge>
                    <h2 className="text-xl font-bold text-slate-900">
                      Questions to Ask Them
                    </h2>
                  </div>
                  <p className="text-sm text-slate-600">
                    Strategic questions to ask your interviewer to show research and
                    curiosity
                  </p>
                </div>
                <div className="space-y-4">
                  {qaTemplates
                    .filter((t) => t.category === "ask-them")
                    .map((template) => (
                      <EditableContent
                        key={template.id}
                        id={template.id}
                        title={template.question}
                        description={template.description}
                        defaultContent={template.defaultAnswer}
                        prompt={template.prompt}
                        promptBlocks={template.promptBlocks}
                        category="Ask Them"
                        minHeight="150px"
                      />
                    ))}
                </div>
              </motion.div>
            )}

            {filteredTemplates.length === 0 && (
              <motion.div variants={item}>
                <Card className="border-slate-200">
                  <CardContent className="py-12 text-center">
                    <p className="text-slate-600">
                      No questions found in this category.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
    </>
  );
}
