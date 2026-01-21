"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import {
  Monitor,
  Coffee,
  Camera,
  Brain,
  MapPin,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Mail,
  Copy,
  Edit3,
  Sparkles
} from "lucide-react";
import { useState, useEffect } from "react";

const tabs = [
  { id: "checklist", label: "Day-Of Checklist", icon: CheckCircle2 },
  { id: "follow-up", label: "Follow-Up Emails", icon: Mail },
];

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
      { id: "nb-5", label: "Get 7-8 hours of sleep", description: "Rest is performance", critical: true }
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
      { id: "tech-5", label: "Open prep materials in tabs", description: "Cheat sheet, discovery template" },
      { id: "tech-6", label: "Join meeting 5 min early", description: "Shows professionalism", critical: true }
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
      { id: "ip-5", label: "Phone fully charged", description: "For navigation and emergencies" }
    ]
  }
];

interface EmailTemplate {
  id: string;
  title: string;
  timing: string;
  recipient: string;
  subject: string;
  body: string;
  tips: string[];
}

const emailTemplates: EmailTemplate[] = [
  {
    id: "post-virtual",
    title: "Post-Virtual Session Thank You",
    timing: "Within 2 hours of virtual session",
    recipient: "Interviewer(s) from virtual session",
    subject: "Thank you - Excited about Paraform",
    body: `Hi [Name],

Thank you for taking the time to meet with me today. I really enjoyed our conversation about [specific topic discussed - e.g., "Paraform's approach to AI-powered RFP responses" or "the discovery call simulation"].

A few things that stood out to me:

• [Specific insight from the conversation that excited you]
• [Something you learned about the role or company]
• [A point of connection or shared perspective]

Our discussion reinforced my excitement about the Founding AE opportunity. The problem Paraform is solving resonates with pain I've experienced firsthand in enterprise sales, and I'm energized by the chance to help build the GTM motion from the ground up.

I'm looking forward to the in-person session and meeting the rest of the team.

Best,
[Your name]
[Phone number]`,
    tips: [
      "Send within 2 hours while conversation is fresh",
      "Reference specific details from your conversation",
      "Keep it concise - 3-4 paragraphs max"
    ]
  },
  {
    id: "post-inperson",
    title: "Post-In-Person Session Thank You",
    timing: "Same evening or next morning",
    recipient: "All interviewers (can be individual or group)",
    subject: "Great meeting the team today",
    body: `Hi [Name/Team],

Thank you for hosting me at the Paraform office today. It was a pleasure meeting everyone and getting a feel for the team culture firsthand.

I left our conversations even more excited about this opportunity. [Specific reference to in-person discussions - e.g., "The team's energy and the collaborative dynamic were evident" or "I appreciated hearing about X challenge and how the team approaches it"].

A few reflections from today:

• [Key insight from team lunch or interview]
• [Something that reinforced your fit for the role]
• [Appreciation for specific person or moment]

I'm confident that my experience in [relevant skill/background] combined with my passion for building would make me a strong addition to the Paraform team.

Please don't hesitate to reach out if you have any additional questions. I'm very much looking forward to hearing about next steps.

Best regards,
[Your name]
[Phone number]`,
    tips: [
      "Can send to group or individuals",
      "Reference specific moments from the in-person day",
      "Mention people by name if appropriate"
    ]
  },
  {
    id: "dean-checkin",
    title: "Post-Dean Check-in Note",
    timing: "Same day as final check-in",
    recipient: "Dean (or whoever conducts final interview)",
    subject: "Thank you - Ready to contribute",
    body: `Hi Dean,

Thank you for the final check-in today and for the entire interview process. I've genuinely enjoyed every conversation and have only grown more excited about the opportunity to join Paraform as a Founding AE.

Throughout this process, I've been impressed by:

• The clarity of vision for how AI can transform the RFP space
• The caliber and energy of the team
• The thoughtfulness of the interview process itself

I want to reiterate my strong interest in this role. The combination of early-stage building, AI-powered product, and enterprise sales is exactly what I'm looking for in my next chapter. I'm ready to hit the ground running and start contributing to Paraform's growth.

If there's anything else you need from me - references, additional information, or another conversation - please don't hesitate to ask.

Thank you again for the opportunity.

Best,
[Your name]
[Phone number]`,
    tips: [
      "This is your closing argument - make it count",
      "Be direct about your interest and readiness",
      "Offer to provide anything additional they need"
    ]
  },
  {
    id: "follow-up-check",
    title: "Status Check-in (If No Response)",
    timing: "5-7 business days after interview",
    recipient: "Primary contact or recruiter",
    subject: "Following up - Paraform Founding AE",
    body: `Hi [Name],

I hope you're doing well. I wanted to follow up on my interview for the Founding AE position.

I remain very excited about the opportunity to join Paraform and contribute to building out the sales function. If there's any additional information I can provide or questions I can answer, please let me know.

I understand these decisions take time, and I appreciate your consideration.

Best regards,
[Your name]
[Phone number]`,
    tips: [
      "Only send if you haven't heard back in 5-7 business days",
      "Keep it brief and professional",
      "One follow-up is appropriate; more than two can be pushy"
    ]
  }
];

export default function ExecutionPage() {
  const [activeTab, setActiveTab] = useState("checklist");
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

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

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);
  const completedItems = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedItems / totalItems) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
              Day-Of Execution
            </Badge>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Interview Day Toolkit
            </h1>
            <p className="text-slate-600">
              Checklist for the day and follow-up email templates
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    activeTab === tab.id
                      ? "bg-slate-900 text-white shadow-lg"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Checklist Tab */}
            {activeTab === "checklist" && (
              <div className="space-y-6">
                {/* Progress Bar */}
                <Card className="border border-slate-200/50 shadow-sm">
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

                {/* Emergency Backup */}
                <Card className="border border-red-200 bg-red-50/30 shadow-sm">
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
            )}

            {/* Follow-Up Emails Tab */}
            {activeTab === "follow-up" && (
              <div className="space-y-6">
                {/* Best Practices */}
                <Card className="border border-emerald-200 bg-emerald-50/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Follow-Up Best Practices</h3>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-start gap-2">
                            <Clock className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700"><strong>Timing matters:</strong> Send within 24 hours</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Edit3 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700"><strong>Personalize:</strong> Reference specific details</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700"><strong>Be concise:</strong> 3-4 paragraphs max</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Mail className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700"><strong>Proofread:</strong> Typos = attention to detail concerns</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email Templates */}
                {emailTemplates.map((template, index) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border border-slate-200/50 hover:border-blue-300 transition-all shadow-sm">
                      <CardHeader className="py-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <CardTitle className="text-lg">{template.title}</CardTitle>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary" className="text-xs">
                                <Clock className="h-3 w-3 mr-1" />
                                {template.timing}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                To: {template.recipient}
                              </Badge>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-2"
                            onClick={() => copyToClipboard(template.body, template.id)}
                          >
                            {copiedId === template.id ? (
                              <>
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4" />
                                Copy
                              </>
                            )}
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Subject Line */}
                        <div className="p-2 bg-slate-100 rounded-lg">
                          <span className="text-xs font-medium text-slate-500">Subject: </span>
                          <span className="text-sm text-slate-900">{template.subject}</span>
                        </div>

                        {/* Email Body */}
                        <div className="p-4 bg-white border border-slate-200 rounded-lg">
                          <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">
                            {template.body}
                          </pre>
                        </div>

                        {/* Tips */}
                        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                          <h4 className="font-semibold text-sm text-amber-900 mb-2 flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4" />
                            Tips for This Email
                          </h4>
                          <ul className="grid md:grid-cols-3 gap-1">
                            {template.tips.map((tip, i) => (
                              <li key={i} className="text-xs text-amber-800 flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Customization Reminder */}
                <Card className="border border-blue-200 bg-blue-50/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Edit3 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Remember to Customize!</h3>
                        <p className="text-sm text-slate-700 mb-3">
                          These templates are starting points. Before sending:
                        </p>
                        <ul className="space-y-1 text-sm text-slate-600">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-500" />
                            Replace all [bracketed text] with specific details
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-500" />
                            Add personal touches from your actual conversation
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-500" />
                            Proofread twice before hitting send
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
