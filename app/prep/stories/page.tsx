"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { storyTemplates } from "@/lib/data/stories";
import { ArrowRight, Sparkles, FileText } from "lucide-react";

export default function Stories() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <PageHeader
          title="STAR Story Templates"
          description="Generate personalized interview stories using AI"
        />

        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Instructions Card */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Sparkles className="h-5 w-5" />
                  How to Use These Templates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-700">
                <p>
                  Each template below provides a structured framework for creating compelling STAR format interview stories:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>
                    <strong>Choose a template</strong> that matches the type of story you want to tell
                  </li>
                  <li>
                    <strong>Click on the card</strong> to view the full template and AI prompt
                  </li>
                  <li>
                    <strong>Generate your story</strong> by copying the prompt and using it with Claude, ChatGPT, or Gemini
                  </li>
                  <li>
                    <strong>Replace the bracketed placeholders</strong> [LIKE_THIS] with your specific details
                  </li>
                  <li>
                    <strong>Save your customized story</strong> for interview preparation
                  </li>
                </ol>
                <p className="text-sm text-slate-600 mt-4 bg-white/50 rounded p-3 border border-blue-200">
                  <strong>Pro tip:</strong> The AI will generate a complete story based on your inputs. You can then edit and refine it to match your personal style and ensure accuracy.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Story Templates Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {storyTemplates.map((template) => (
              <motion.div key={template.slug} variants={item}>
                <Link href={`/stories/${template.slug}`}>
                  <Card className="h-full border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <Badge className="bg-gradient-to-r from-blue-100 to-blue-100 text-blue-700 border-blue-200">
                          <FileText className="h-3 w-3 mr-1" />
                          Template
                        </Badge>
                        <Sparkles className="h-4 w-4 text-blue-500" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {template.title}
                      </CardTitle>
                      <p className="text-sm text-slate-600 mt-2">
                        {template.description}
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">
                          Use For
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {template.useFor.map((use, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs bg-white"
                            >
                              {use}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex items-center gap-2 text-sm text-blue-600 font-medium group-hover:gap-3 transition-all">
                        View template & AI prompt
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Card className="border-slate-200 bg-slate-50/50 inline-block">
              <CardContent className="py-4 px-6">
                <p className="text-sm text-slate-600">
                  All templates follow the <strong>STAR format</strong>: Situation, Task, Action, Result
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

    </>
  );
}
