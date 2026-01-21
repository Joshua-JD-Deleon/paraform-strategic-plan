"use client";

import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { storyTemplates } from "@/lib/data/stories";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { EditableContent } from "@/components/ui/editable-content";

interface StoryDetailClientProps {
  slug: string;
}

export default function StoryDetailClient({ slug }: StoryDetailClientProps) {
  const template = storyTemplates.find((t) => t.slug === slug);
  const currentIndex = storyTemplates.findIndex((t) => t.slug === slug);
  const prevTemplate = currentIndex > 0 ? storyTemplates[currentIndex - 1] : null;
  const nextTemplate = currentIndex < storyTemplates.length - 1 ? storyTemplates[currentIndex + 1] : null;

  if (!template) {
    return (
      <>

        <main className="min-h-screen">
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-2xl font-bold mb-4">Template not found</h1>
            <Link href="/prep/stories">
              <Button variant="outline">Back to Templates</Button>
            </Link>
          </div>
        </main>

      </>
    );
  }

  return (
    <>

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <PageHeader title={template.title} />

        <div className="container mx-auto px-4 py-12 max-w-5xl">
          <div className="mb-6">
            <Link href="/prep/stories">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Templates
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            {/* Template Header */}
            <Card className="border-slate-200 bg-gradient-to-br from-white to-slate-50">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-gradient-to-r from-blue-100 to-blue-100 text-blue-700 border-blue-200">
                        <Sparkles className="h-3 w-3 mr-1" />
                        AI-Powered Template
                      </Badge>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {template.description}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">
                    Use this template for:
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
              </CardContent>
            </Card>

            {/* Editable Content with AI Prompt */}
            <EditableContent
              id={template.id}
              title="Your Story"
              description="Generate your personalized story using AI, then edit and customize"
              defaultContent={template.defaultContent}
              prompt={template.prompt}
              promptBlocks={template.promptBlocks}
              category="STAR Story"
              minHeight="300px"
            />

            {/* Prompt Blocks Reference */}
            <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3 flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Template Variables
                </h3>
                <p className="text-sm text-slate-700 mb-4">
                  Replace these placeholders in the AI prompt with your specific details to generate a personalized story:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {template.promptBlocks.map((block) => (
                    <div
                      key={block.key}
                      className="bg-white rounded-lg p-3 border border-amber-200"
                    >
                      <div className="font-mono text-sm font-medium text-blue-700 mb-1">
                        [{block.key}]
                      </div>
                      <div className="text-sm text-slate-600">
                        {block.description}
                      </div>
                      {block.example && (
                        <div className="text-xs text-slate-400 italic mt-1">
                          e.g., {block.example}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* STAR Format Guide */}
            <Card className="border-slate-200 bg-slate-50">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  STAR Format Guide
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-semibold text-sm">
                        S
                      </div>
                      <h4 className="font-semibold text-slate-900">Situation</h4>
                    </div>
                    <p className="text-sm text-slate-600">
                      Set the context. Where were you working? What was the challenge or opportunity?
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-sm">
                        T
                      </div>
                      <h4 className="font-semibold text-slate-900">Task</h4>
                    </div>
                    <p className="text-sm text-slate-600">
                      What was your specific goal or responsibility? What did you need to accomplish?
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-semibold text-sm">
                        A
                      </div>
                      <h4 className="font-semibold text-slate-900">Action</h4>
                    </div>
                    <p className="text-sm text-slate-600">
                      Detail the specific steps YOU took. Focus on your individual contributions and decisions.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-sm">
                        R
                      </div>
                      <h4 className="font-semibold text-slate-900">Result</h4>
                    </div>
                    <p className="text-sm text-slate-600">
                      Share the measurable outcomes. What was the business impact? Include metrics when possible.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between pt-6">
              {prevTemplate ? (
                <Link href={`/stories/${prevTemplate.slug}`}>
                  <Button variant="outline" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    {prevTemplate.title}
                  </Button>
                </Link>
              ) : (
                <div />
              )}
              {nextTemplate ? (
                <Link href={`/stories/${nextTemplate.slug}`}>
                  <Button variant="outline" className="gap-2">
                    {nextTemplate.title}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
