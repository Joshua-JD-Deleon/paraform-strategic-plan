"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Story } from "@/lib/data/stories";
import { ArrowLeft, ArrowRight, Target, CheckCircle, Zap, TrendingUp } from "lucide-react";

interface StoryDetailClientProps {
  story: Story;
  prevStory: Story | null;
  nextStory: Story | null;
}

export function StoryDetailClient({ story, prevStory, nextStory }: StoryDetailClientProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <motion.div variants={item}>
        <Card className="border-slate-200">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-slate-100 text-slate-700 border-slate-300">
                {story.company}
              </Badge>
              <div className="flex flex-wrap gap-2">
                {story.useFor.map((use, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {use}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-50 rounded-lg p-6 border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                  Key Result
                </span>
              </div>
              <p className="text-3xl font-bold text-blue-600">{story.metric}</p>
            </div>
          </CardHeader>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="border-slate-200 bg-slate-50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-slate-700" />
              <CardTitle className="text-xl">Situation</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed">{story.situation}</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-xl">Task</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed">{story.task}</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="border-slate-200 bg-slate-50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber-600" />
              <CardTitle className="text-xl">Action</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3">
              {story.action.map((actionItem, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 leading-relaxed pt-0.5">
                    {actionItem}
                  </span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="border-blue-200 bg-gradient-to-br from-white to-blue-50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-xl text-blue-900">Result</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed font-medium">
              {story.result}
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-xl text-blue-900">
              Application to Target Role
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed">
              {story.roleApplication}
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg">Key Takeaways</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {story.keyPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-slate-50 rounded-lg p-3 border border-slate-200"
                >
                  <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item} className="flex justify-between pt-6">
        {prevStory ? (
          <Link href={`/stories/${prevStory.slug}`}>
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Previous Story
            </Button>
          </Link>
        ) : (
          <div />
        )}
        {nextStory ? (
          <Link href={`/stories/${nextStory.slug}`}>
            <Button variant="outline" className="gap-2">
              Next Story
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <div />
        )}
      </motion.div>
    </motion.div>
  );
}
