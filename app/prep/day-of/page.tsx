"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import {
  Monitor,
  Wifi,
  Battery,
  Camera,
  Mic,
  Coffee,
  Shirt,
  FileText,
  Clock,
  MapPin,
  Phone,
  Brain,
  CheckCircle2,
  AlertTriangle,
  Zap
} from "lucide-react";
import { useState, useEffect } from "react";

const STORAGE_KEY = "paraform-day-of-checklist";

interface ChecklistItem {
  id: string;
  label: string;
  description?: string;
  critical?: boolean;
}

interface ChecklistSection {
  title: string;
  icon: React.ElementType;
  timing: string;
  items: ChecklistItem[];
}

const checklistSections: ChecklistSection[] = [
  {
    title: "Night Before",
    icon: Clock,
    timing: "Evening before interview",
    items: [
      { id: "nb-1", label: "Confirm interview time & timezone", description: "Double-check calendar invite", critical: true },
      { id: "nb-2", label: "Review Cheat Sheet one more time", description: "Key facts fresh in mind" },
      { id: "nb-3", label: "Prepare outfit for in-person session", description: "Business casual, pressed and ready" },
      { id: "nb-4", label: "Charge all devices", description: "Laptop, phone, backup devices" },
      { id: "nb-5", label: "Set multiple alarms", description: "Primary + backup alarm" },
      { id: "nb-6", label: "Get 7-8 hours of sleep", description: "Rest is performance", critical: true }
    ]
  },
  {
    title: "Morning Prep (2 hrs before)",
    icon: Coffee,
    timing: "2 hours before virtual session",
    items: [
      { id: "am-1", label: "Eat a good breakfast", description: "Protein + complex carbs for sustained energy" },
      { id: "am-2", label: "Light exercise or walk", description: "Get blood flowing, reduce anxiety" },
      { id: "am-3", label: "Shower and get dressed", description: "Dress fully, even for virtual - affects mindset" },
      { id: "am-4", label: "Review key talking points", description: "Pitch, discovery flow, demo highlights" },
      { id: "am-5", label: "Hydrate", description: "Water + coffee if needed", critical: true }
    ]
  },
  {
    title: "Tech Setup (30 min before)",
    icon: Monitor,
    timing: "30 minutes before virtual session",
    items: [
      { id: "tech-1", label: "Test internet connection", description: "Speed test, have backup hotspot ready", critical: true },
      { id: "tech-2", label: "Test camera and lighting", description: "Face well-lit, no backlighting" },
      { id: "tech-3", label: "Test microphone and audio", description: "Clear audio, no echo" },
      { id: "tech-4", label: "Close unnecessary applications", description: "Prevent notifications and lag" },
      { id: "tech-5", label: "Open prep materials in tabs", description: "Cheat sheet, discovery template, demo" },
      { id: "tech-6", label: "Have phone on silent nearby", description: "Backup for emergency call-in" },
      { id: "tech-7", label: "Join meeting 5 min early", description: "Shows professionalism", critical: true }
    ]
  },
  {
    title: "Environment Check",
    icon: Camera,
    timing: "Before going live",
    items: [
      { id: "env-1", label: "Clean, professional background", description: "Neutral wall or virtual background" },
      { id: "env-2", label: "Good lighting on face", description: "Natural light or ring light" },
      { id: "env-3", label: "Quiet environment", description: "No pets, family, construction noise" },
      { id: "env-4", label: "Water within reach", description: "Stay hydrated during calls" },
      { id: "env-5", label: "Notepad and pen ready", description: "For taking notes during discovery" }
    ]
  },
  {
    title: "Mental Prep",
    icon: Brain,
    timing: "5-10 minutes before",
    items: [
      { id: "mental-1", label: "Deep breathing exercises", description: "4-7-8 breathing: inhale 4, hold 7, exhale 8" },
      { id: "mental-2", label: "Power pose for 2 minutes", description: "Raises confidence hormones" },
      { id: "mental-3", label: "Visualize success", description: "See yourself crushing the discovery call" },
      { id: "mental-4", label: "Remind yourself: You belong here", description: "They invited YOU for a reason", critical: true },
      { id: "mental-5", label: "Smile before joining", description: "Sets positive tone in your voice" }
    ]
  },
  {
    title: "In-Person Prep",
    icon: MapPin,
    timing: "Before leaving for SF office",
    items: [
      { id: "ip-1", label: "Confirm office address", description: "Paraform SF office location" },
      { id: "ip-2", label: "Plan arrival 15 min early", description: "Account for traffic, parking, security" },
      { id: "ip-3", label: "Bring printed materials", description: "Resume, portfolio if applicable" },
      { id: "ip-4", label: "Breath mints", description: "Fresh breath for close conversations" },
      { id: "ip-5", label: "Business cards if you have them", description: "Professional touch" },
      { id: "ip-6", label: "Phone fully charged", description: "For navigation and emergencies" }
    ]
  }
];

export default function DayOfChecklistPage() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setCheckedItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedItems));
    }
  }, [checkedItems, mounted]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const resetChecklist = () => {
    setCheckedItems({});
    localStorage.removeItem(STORAGE_KEY);
  };

  const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);
  const completedItems = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedItems / totalItems) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
              Day-Of Execution
            </Badge>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Interview Day Checklist
            </h1>
            <p className="text-slate-600">
              Everything you need to do before, during, and between sessions
            </p>
          </div>

          {/* Progress Bar */}
          <Card className="mb-8 border border-slate-200/50 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700">
                  Progress: {completedItems} of {totalItems} items
                </span>
                <span className="text-sm font-bold text-blue-600">{progressPercent}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              {progressPercent === 100 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-green-700 font-medium">You&apos;re ready! Go crush it!</span>
                </motion.div>
              )}
              <button
                onClick={resetChecklist}
                className="mt-4 text-sm text-slate-500 hover:text-slate-700 underline"
              >
                Reset checklist
              </button>
            </CardContent>
          </Card>

          {/* Checklist Sections */}
          <div className="space-y-6">
            {checklistSections.map((section, sectionIndex) => {
              const SectionIcon = section.icon;
              const sectionCompleted = section.items.every(item => checkedItems[item.id]);

              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: sectionIndex * 0.1 }}
                >
                  <Card className={`border transition-all duration-300 ${
                    sectionCompleted
                      ? 'border-green-300 bg-green-50/30'
                      : 'border-slate-200/50 hover:border-blue-300'
                  } shadow-sm`}>
                    <CardHeader className="py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            sectionCompleted ? 'bg-green-100' : 'bg-blue-100'
                          }`}>
                            <SectionIcon className={`h-5 w-5 ${
                              sectionCompleted ? 'text-green-600' : 'text-blue-600'
                            }`} />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{section.title}</CardTitle>
                            <p className="text-sm text-slate-500">{section.timing}</p>
                          </div>
                        </div>
                        {sectionCompleted && (
                          <Badge className="bg-green-100 text-green-700 border-green-200">
                            Complete
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {section.items.map((item) => (
                          <div
                            key={item.id}
                            className={`flex items-start gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                              checkedItems[item.id]
                                ? 'bg-slate-50 border-slate-200'
                                : item.critical
                                  ? 'bg-orange-50/50 border-orange-200 hover:border-orange-300'
                                  : 'bg-white border-slate-100 hover:border-blue-200'
                            }`}
                            onClick={() => toggleItem(item.id)}
                          >
                            <Checkbox
                              checked={checkedItems[item.id] || false}
                              onCheckedChange={() => toggleItem(item.id)}
                              className="mt-0.5"
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className={`font-medium text-sm ${
                                  checkedItems[item.id] ? 'text-slate-500 line-through' : 'text-slate-900'
                                }`}>
                                  {item.label}
                                </span>
                                {item.critical && !checkedItems[item.id] && (
                                  <Badge variant="destructive" className="text-[10px] px-1.5 py-0">
                                    Critical
                                  </Badge>
                                )}
                              </div>
                              {item.description && (
                                <p className={`text-xs mt-0.5 ${
                                  checkedItems[item.id] ? 'text-slate-400' : 'text-slate-500'
                                }`}>
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Emergency Contacts */}
          <Card className="mt-8 border border-red-200 bg-red-50/30 shadow-sm">
            <CardHeader className="py-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <CardTitle className="text-lg text-red-900">Emergency Backup Plan</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-lg border border-red-100">
                  <p className="font-medium text-sm text-slate-900 mb-1">If tech fails:</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Have phone ready to join via mobile</li>
                    <li>• Know the dial-in number if available</li>
                    <li>• Have interviewer&apos;s email to communicate delays</li>
                  </ul>
                </div>
                <div className="p-3 bg-white rounded-lg border border-red-100">
                  <p className="font-medium text-sm text-slate-900 mb-1">If running late (in-person):</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Call/text immediately with ETA</li>
                    <li>• Stay calm - things happen</li>
                    <li>• Apologize once, then focus on the interview</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
