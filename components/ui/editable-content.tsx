"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Edit2, Save, X, Check, Sparkles, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { AIPromptCard } from "./ai-prompt-card";

interface EditableContentProps {
  id: string;
  title: string;
  description?: string;
  defaultContent: string;
  prompt: string;
  promptBlocks?: { key: string; description: string; example?: string }[];
  category?: string;
  className?: string;
  minHeight?: string;
}

const STORAGE_PREFIX = "interview-prep-content-";

export function EditableContent({
  id,
  title,
  description,
  defaultContent,
  prompt,
  promptBlocks = [],
  category,
  className,
  minHeight = "150px",
}: EditableContentProps) {
  const [content, setContent] = useState(defaultContent);
  const [isEditing, setIsEditing] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [isCustomized, setIsCustomized] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_PREFIX + id);
    if (saved) {
      setContent(saved);
      setIsCustomized(true);
    }
  }, [id]);

  const handleEdit = () => {
    setEditValue(content);
    setIsEditing(true);
  };

  const handleSave = () => {
    localStorage.setItem(STORAGE_PREFIX + id, editValue);
    setContent(editValue);
    setIsCustomized(true);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditValue("");
  };

  const handleReset = () => {
    localStorage.removeItem(STORAGE_PREFIX + id);
    setContent(defaultContent);
    setIsCustomized(false);
  };

  if (!mounted) {
    return (
      <Card className={cn("overflow-hidden", className)}>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse bg-slate-100 rounded h-24" />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={cn("space-y-3", className)}>
      <Card className="overflow-hidden">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                {category && (
                  <Badge variant="secondary" className="text-xs">
                    {category}
                  </Badge>
                )}
                {isCustomized && (
                  <Badge className="bg-emerald-100 text-emerald-700 text-xs">
                    <Check className="h-3 w-3 mr-1" />
                    Customized
                  </Badge>
                )}
              </div>
              <CardTitle className="text-lg mt-2">{title}</CardTitle>
              {description && (
                <p className="text-sm text-slate-500 mt-1">{description}</p>
              )}
            </div>
            <div className="flex gap-1">
              {!isEditing && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPrompt(!showPrompt)}
                    className="gap-1"
                  >
                    <Sparkles className="h-4 w-4" />
                    {showPrompt ? "Hide" : "AI"}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleEdit}
                    className="gap-1"
                  >
                    <Edit2 className="h-4 w-4" />
                    Edit
                  </Button>
                  {isCustomized && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleReset}
                      className="gap-1 text-slate-500"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <div className="space-y-3">
              <Textarea
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="min-h-[150px] font-mono text-sm"
                style={{ minHeight }}
                placeholder="Enter your customized content..."
              />
              <div className="flex gap-2 justify-end">
                <Button variant="outline" size="sm" onClick={handleCancel}>
                  <X className="h-4 w-4 mr-1" />
                  Cancel
                </Button>
                <Button size="sm" onClick={handleSave} className="bg-rose-500 hover:bg-rose-600">
                  <Save className="h-4 w-4 mr-1" />
                  Save
                </Button>
              </div>
            </div>
          ) : (
            <div
              className="prose prose-sm max-w-none text-slate-700 whitespace-pre-wrap"
              style={{ minHeight: "auto" }}
            >
              {content}
            </div>
          )}
        </CardContent>
      </Card>

      {/* AI Prompt Panel */}
      {showPrompt && !isEditing && (
        <AIPromptCard
          title={`Generate: ${title}`}
          description="Use this prompt to generate personalized content with AI"
          prompt={prompt}
          blocks={promptBlocks}
          className="border-rose-200 bg-rose-50/50"
        />
      )}
    </div>
  );
}
