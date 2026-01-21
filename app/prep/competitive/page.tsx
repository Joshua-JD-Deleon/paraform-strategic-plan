"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EditableContent } from "@/components/ui/editable-content";
import { competitiveTemplates, getCompetitiveCategories } from "@/lib/data/competitive";
import { Target, TrendingUp, Lightbulb, Info } from "lucide-react";
import { useState } from "react";

export default function Competitive() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getCompetitiveCategories();

  const filteredTemplates = selectedCategory
    ? competitiveTemplates.filter(t => t.category === selectedCategory)
    : competitiveTemplates;

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
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <PageHeader
        title="Competitive Intelligence"
        description="AI-powered templates for analyzing competitive landscape and market positioning"
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Introduction Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-blue-50">
            <CardHeader>
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-blue-900">How to Use These Templates</CardTitle>
                  <p className="text-sm text-slate-600 mt-2">
                    Use AI to research any company's competitive landscape. Each template below includes:
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span className="text-sm text-slate-700">
                    <strong>AI Prompt:</strong> Click "AI" to see a customizable prompt for Claude, ChatGPT, or Gemini
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span className="text-sm text-slate-700">
                    <strong>Editable Content:</strong> Paste AI-generated insights and customize them for your interview
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span className="text-sm text-slate-700">
                    <strong>Saved Locally:</strong> Your customizations are saved in your browser for easy reference
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === null
                ? "bg-blue-500 text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"
            }`}
          >
            All Templates
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {filteredTemplates.map((template) => (
            <motion.div key={template.id} variants={item}>
              <EditableContent
                id={`competitive-${template.id}`}
                title={template.title}
                description={template.description}
                defaultContent={template.defaultContent}
                prompt={template.prompt}
                promptBlocks={template.promptBlocks}
                category={template.category}
                minHeight="200px"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Best Practices Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardHeader>
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <CardTitle className="text-blue-900">Competitive Intelligence Best Practices</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                    Research Approach
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      Start with the company's own marketing materials and website
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      Read analyst reports (Gartner, Forrester) if available
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      Check review sites (G2, TrustRadius) for customer feedback
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      Use AI to synthesize findings and identify patterns
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Info className="h-4 w-4 text-blue-600" />
                    Interview Tips
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      Never trash competitors - acknowledge their strengths first
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      Position as "complementary" when possible, not "versus"
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      Use specific examples and metrics, not generic claims
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      Demonstrate market awareness without sounding rehearsed
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
