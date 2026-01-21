"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Timeline } from "@/components/sections/Timeline";
import { AccountFramework } from "@/components/sections/AccountFramework";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AIPromptCard } from "@/components/ui/ai-prompt-card";
import { EditableContent } from "@/components/ui/editable-content";
import { timelinePrompt, timelinePromptBlocks, defaultTimelineData } from "@/lib/data/timeline";
import { frameworkPhasePrompts } from "@/lib/data/account-framework";
import { Lightbulb, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Plan() {
  const [showTimelinePrompt, setShowTimelinePrompt] = useState(false);
  const [showFrameworkPrompts, setShowFrameworkPrompts] = useState(false);
  const [showTimelineDetails, setShowTimelineDetails] = useState(false);

  // Generate default timeline content for editable sections
  const generateTimelineContent = (phaseIndex: number) => {
    const phase = defaultTimelineData[phaseIndex];
    return `${phase.title} - ${phase.subtitle}

${phase.items.map((item, idx) =>
  `${idx + 1}. ${item.title}
   ${item.description}`
).join('\n\n')}`;
  };

  const timelinePhasePrompts = [
    {
      id: 'timeline-30',
      title: 'First 30 Days: Learn & Assess',
      description: 'Focus on learning, assessment, and relationship building',
      defaultContent: generateTimelineContent(0),
      prompt: `Create a detailed plan for the first 30 days in a [ROLE_TITLE] role at [COMPANY_NAME].

**Context:**
- Role: [ROLE_TITLE]
- Company: [COMPANY_NAME]
- Industry: [INDUSTRY]
- Products: [PRODUCTS]

**Focus Areas:**
This phase is about learning and assessment. Create 4 specific milestones covering:
1. Product/solution knowledge and expertise development
2. Portfolio/territory assessment and analysis
3. Internal relationship building and team alignment
4. Customer/stakeholder mapping and research

For each milestone, provide:
- Clear, action-oriented title
- Specific description with tactics and expected outcomes

Format as a numbered list with titles and descriptions.`,
      promptBlocks: timelinePromptBlocks,
    },
    {
      id: 'timeline-60',
      title: 'Days 31-60: Engage & Execute',
      description: 'Drive initiatives, build relationships, and identify opportunities',
      defaultContent: generateTimelineContent(1),
      prompt: `Create a detailed plan for days 31-60 in a [ROLE_TITLE] role at [COMPANY_NAME].

**Context:**
- Role: [ROLE_TITLE]
- Company: [COMPANY_NAME]
- Industry: [INDUSTRY]
- Products: [PRODUCTS]

**Focus Areas:**
This phase is about engagement and execution. Create 4 specific milestones covering:
1. Leading strategic customer/stakeholder initiatives
2. Launching proactive campaigns and outreach strategies
3. Identifying and qualifying growth opportunities
4. Building key executive relationships

For each milestone, provide:
- Clear, action-oriented title
- Specific description with tactics and expected outcomes

Format as a numbered list with titles and descriptions.`,
      promptBlocks: timelinePromptBlocks,
    },
    {
      id: 'timeline-90',
      title: 'Days 61-90: Deliver & Optimize',
      description: 'Close deals, demonstrate impact, and present results',
      defaultContent: generateTimelineContent(2),
      prompt: `Create a detailed plan for days 61-90 in a [ROLE_TITLE] role at [COMPANY_NAME].

**Context:**
- Role: [ROLE_TITLE]
- Company: [COMPANY_NAME]
- Industry: [INDUSTRY]
- Products: [PRODUCTS]

**Focus Areas:**
This phase is about delivery and optimization. Create 4 specific milestones covering:
1. Closing first wins or deals
2. Progressing pipeline opportunities
3. Solidifying executive access and relationships
4. Presenting success metrics and 90-day review

For each milestone, provide:
- Clear, action-oriented title
- Specific description with tactics and expected outcomes

Format as a numbered list with titles and descriptions.`,
      promptBlocks: timelinePromptBlocks,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <PageHeader
        title="Strategic Plan"
        description="Customizable templates for 30/60/90 day plans and account frameworks"
      />

      {/* Instructions Section */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Card className="border-blue-200 bg-blue-50/50 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Lightbulb className="h-5 w-5" />
              How to Use This Template
            </CardTitle>
            <CardDescription className="text-blue-700">
              Transform these generic frameworks into your personalized interview prep plan
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-blue-900">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Option 1: Use AI to Generate Custom Content</h4>
                <ol className="list-decimal list-inside space-y-1 text-blue-800">
                  <li>Click the "AI" button on any section below</li>
                  <li>Copy the prompt and replace the [BLOCKS] with your info</li>
                  <li>Paste into Claude, ChatGPT, or Gemini</li>
                  <li>Copy the AI-generated content back and paste it here</li>
                </ol>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Option 2: Manually Edit Content</h4>
                <ol className="list-decimal list-inside space-y-1 text-blue-800">
                  <li>Click "Edit" on any section</li>
                  <li>Customize the content directly</li>
                  <li>Click "Save" - your changes are stored locally</li>
                  <li>Use "Reset" to restore the default template</li>
                </ol>
              </div>
            </div>
            <div className="pt-2 border-t border-blue-200">
              <p className="text-xs text-blue-700">
                <strong>Note:</strong> All customizations are saved in your browser's local storage.
                They persist between sessions but won't sync across devices.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 30/60/90 Plan AI Prompt */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-slate-900">30/60/90 Day Plan Template</h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowTimelinePrompt(!showTimelinePrompt)}
              className="gap-2"
            >
              <Sparkles className="h-4 w-4" />
              {showTimelinePrompt ? "Hide" : "Show"} AI Generator
            </Button>
          </div>

          {showTimelinePrompt && (
            <AIPromptCard
              title="Generate Complete 30/60/90 Day Plan"
              description="Use this prompt to create a personalized plan for any role"
              prompt={timelinePrompt}
              blocks={timelinePromptBlocks}
              category="30/60/90 Plan"
              className="mb-6"
            />
          )}
        </div>
      </div>

      {/* Timeline Visual */}
      <div id="timeline">
        <Timeline />
      </div>

      {/* Editable Timeline Details */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-slate-900">Detailed Action Plans</h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowTimelineDetails(!showTimelineDetails)}
            className="gap-2"
          >
            {showTimelineDetails ? "Hide" : "Show"} Details
          </Button>
        </div>

        {showTimelineDetails && (
          <div className="space-y-4">
            {timelinePhasePrompts.map((phase) => (
              <EditableContent
                key={phase.id}
                id={phase.id}
                title={phase.title}
                description={phase.description}
                defaultContent={phase.defaultContent}
                prompt={phase.prompt}
                promptBlocks={phase.promptBlocks}
                category="30/60/90 Plan"
                minHeight="200px"
              />
            ))}
          </div>
        )}
      </div>

      {/* Account Framework AI Prompts */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-slate-900">16-Step Account Framework</h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFrameworkPrompts(!showFrameworkPrompts)}
            className="gap-2"
          >
            <Sparkles className="h-4 w-4" />
            {showFrameworkPrompts ? "Hide" : "Show"} AI Generators
          </Button>
        </div>

        {showFrameworkPrompts && (
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {Object.entries(frameworkPhasePrompts).map(([phase, data]) => (
              <AIPromptCard
                key={phase}
                title={`Customize ${phase.charAt(0).toUpperCase() + phase.slice(1)} Phase`}
                description={`Generate customized steps ${data.blocks.length > 0 ? 'for your specific role' : ''}`}
                prompt={data.prompt}
                blocks={data.blocks}
                category={`${phase.charAt(0).toUpperCase() + phase.slice(1)} Phase`}
              />
            ))}
          </div>
        )}
      </div>

      <div id="framework">
        <AccountFramework />
      </div>
    </main>
  );
}
