"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { EditableContent } from "@/components/ui/editable-content";
import { pitchTemplates } from "@/lib/data/pitches";
import { Badge } from "@/components/ui/badge";

export default function Pitch() {
  const getDurationBadgeColor = (duration: string) => {
    switch (duration) {
      case "30-second":
        return "bg-emerald-100 text-emerald-700 border-emerald-300";
      case "60-second":
        return "bg-blue-100 text-blue-700 border-blue-300";
      default:
        return "bg-blue-100 text-blue-700 border-blue-300";
    }
  };

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
          title="Your Pitches"
          description="AI-powered pitch generation for every interview situation"
        />

        <div className="container mx-auto px-4 py-12 max-w-5xl">
          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg"
          >
            <h3 className="font-semibold text-blue-900 mb-2">How to use this page:</h3>
            <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
              <li>Click the <strong>AI</strong> button on any pitch to see the generation prompt</li>
              <li>Copy the prompt, fill in your details in the [BLOCKS], and paste into Claude/ChatGPT/Gemini</li>
              <li>Click <strong>Edit</strong> to paste your generated content and save it</li>
              <li>Your customized pitches are saved locally and will persist across sessions</li>
            </ol>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            {pitchTemplates.map((pitch) => (
              <motion.div key={pitch.id} variants={item}>
                <div className="mb-2 flex items-center gap-2">
                  <Badge className={getDurationBadgeColor(pitch.duration)}>
                    {pitch.duration}
                  </Badge>
                  <span className="text-sm text-slate-500">{pitch.useFor}</span>
                </div>
                <EditableContent
                  id={`pitch-${pitch.id}`}
                  title={pitch.title}
                  description={pitch.description}
                  defaultContent={pitch.defaultContent}
                  prompt={pitch.prompt}
                  promptBlocks={pitch.promptBlocks}
                  minHeight="200px"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </>
  );
}
