"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import Link from "next/link";
import { Navigation } from "@/components/sections/Navigation";
import {
  Clock,
  Target,
  MessageSquare,
  Users,
  Video,
  Coffee,
  CheckCircle2,
  ArrowRight,
  Zap,
  Building2,
  Phone,
  FileText,
  Timer,
  CalendarCheck
} from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "paraform-interview-datetime";
const CHECKLIST_STORAGE_KEY = "paraform-prep-checklist";

export default function InterviewPrepDashboard() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isPast, setIsPast] = useState(false);
  const [targetTimestamp, setTargetTimestamp] = useState<number | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const timestamp = parseInt(saved, 10);
      setTargetTimestamp(timestamp);
    }
    const savedChecklist = localStorage.getItem(CHECKLIST_STORAGE_KEY);
    if (savedChecklist) {
      setCompletedItems(JSON.parse(savedChecklist));
    }
  }, []);

  const toggleChecklistItem = (id: string) => {
    const newCompleted = { ...completedItems, [id]: !completedItems[id] };
    setCompletedItems(newCompleted);
    localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(newCompleted));
  };

  const completedCount = Object.values(completedItems).filter(Boolean).length;

  useEffect(() => {
    if (!mounted || targetTimestamp === null) return;

    const updateCountdown = () => {
      const now = Date.now();
      const distance = targetTimestamp - now;

      if (distance > 0) {
        setIsPast(false);
        setTimeRemaining({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setIsPast(true);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [mounted, targetTimestamp]);

  const virtualSessions = [
    {
      title: "Marketplace Overview",
      duration: "30 min + 15 min Q&A",
      description: "Platform walkthrough and recruiter success metrics",
      icon: Zap,
      href: "/prep/motion-demo",
      status: "prep"
    },
    {
      title: "Account Manager Scenarios",
      duration: "30 min + 15 min Q&A",
      description: "Role-play recruiter advisory call and portfolio growth discussion",
      icon: Target,
      href: "/prep/paraform-discovery",
      status: "critical"
    }
  ];

  const inPersonSessions = [
    {
      title: "Team Lunch",
      duration: "45 min",
      description: "Casual conversation with the Paraform team",
      icon: Coffee
    },
    {
      title: "Team Interview",
      duration: "30 min",
      description: "Interview with operations and success team members",
      icon: Users
    },
    {
      title: "Hiring Manager Check-in",
      duration: "15 min",
      description: "Final check-in and next steps",
      icon: MessageSquare
    }
  ];

  // Prep completion checklist - ordered by recommended completion order, colors match phases
  const prepChecklist = [
    { id: "research", label: "1. Complete Research Hub", description: "Paraform platform, competitors, market", href: "/prep/research", icon: Building2, gradient: "from-blue-500 to-blue-600" },
    { id: "playbook", label: "2. Study Success Playbook", description: "AM frameworks, recruiter advisory", href: "/prep/playbook", icon: Target, gradient: "from-emerald-500 to-teal-600" },
    { id: "video", label: "3. Review Platform Demo", description: "Paraform marketplace walkthrough", href: "/prep/paraform-discovery", icon: Video, gradient: "from-purple-500 to-violet-600" },
    { id: "session", label: "4. Master Interview Template", description: "Call structure, scenario prep", href: "/prep/session-prep", icon: Phone, gradient: "from-purple-500 to-violet-600" },
    { id: "practice", label: "5. Run Practice Sessions", description: "Recruiter advisory role-play", href: "/prep/practice-tools", icon: Timer, gradient: "from-rose-500 to-pink-600" },
    { id: "motion-setup", label: "6. Prepare Portfolio Strategy", description: "GMV growth plan presentation", href: "/prep/motion-demo", icon: Zap, gradient: "from-purple-500 to-violet-600" },
    { id: "execution", label: "7. Review Day-Of Checklist", description: "Final prep before interview", href: "/prep/execution", icon: CalendarCheck, gradient: "from-orange-500 to-amber-600" },
  ];

  // All prep materials - grouped by phase with consistent color coding
  const prepCards = [
    // Phase 1: Research & Intel (Blue)
    { title: "Research Hub", description: "Paraform platform, market, competitors", icon: Building2, href: "/prep/research", gradient: "from-blue-500 to-blue-600", badge: "Research" },
    // Phase 2: Framework & Strategy (Emerald/Teal)
    { title: "Success Playbook", description: "AM frameworks, recruiter advisory", icon: Target, href: "/prep/playbook", gradient: "from-emerald-500 to-teal-600", badge: "Framework" },
    // Phase 3: Session Preparation (Purple/Violet)
    { title: "Interview Template", description: "Call structure, scenario prep", icon: Phone, href: "/prep/session-prep", gradient: "from-purple-500 to-violet-600", badge: "Template" },
    { title: "Platform Overview", description: "Marketplace walkthrough, demo prep", icon: Target, href: "/prep/paraform-discovery", gradient: "from-purple-500 to-violet-600", badge: "Session" },
    { title: "Portfolio Strategy", description: "GMV growth plan, metrics", icon: Zap, href: "/prep/motion-demo", gradient: "from-purple-500 to-violet-600", badge: "Session" },
    // Phase 4: Practice & Scripts (Rose/Pink)
    { title: "Practice Tools", description: "Role-play and scenario practice", icon: Timer, href: "/prep/practice-tools", gradient: "from-rose-500 to-pink-600", badge: "Practice" },
    // Phase 5: Execution (Orange/Amber)
    { title: "Day-Of Execution", description: "Interview day checklist, follow-up", icon: CalendarCheck, href: "/prep/execution", gradient: "from-orange-500 to-amber-600", badge: "Execute" },
    { title: "In-Person Prep", description: "Team lunch, interview, check-in", icon: Users, href: "/prep/in-person", gradient: "from-orange-500 to-amber-600", badge: "Execute" },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white pt-16">
        {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"
          animate={!prefersReducedMotion ? {
            backgroundPosition: ["0px 0px", "50px 50px"],
          } : {}}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {!prefersReducedMotion && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </>
        )}

        <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="mx-auto max-w-[1200px] text-center">
            <motion.h1
              className="mb-4 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                Paraform Interview Prep
              </span>
            </motion.h1>

            <motion.p
              className="mb-8 text-xl font-normal text-slate-200 md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Founding Account Executive - Full-Cycle Enterprise Sales
            </motion.p>

            {/* Countdown Timer */}
            {mounted && targetTimestamp && !isPast && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm max-w-xl mx-auto">
                  <CardHeader className="py-4">
                    <div className="flex items-center justify-center gap-2 text-white">
                      <Clock className="h-5 w-5 text-blue-300" />
                      <CardTitle className="text-white text-lg">Time Until Interview</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-4 gap-4">
                      {[
                        { label: "Days", value: timeRemaining.days },
                        { label: "Hours", value: timeRemaining.hours },
                        { label: "Minutes", value: timeRemaining.minutes },
                        { label: "Seconds", value: timeRemaining.seconds }
                      ].map((item, index) => (
                        <div key={index} className="text-center">
                          <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-1">
                            {String(item.value).padStart(2, '0')}
                          </div>
                          <div className="text-xs text-blue-200/70">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6"
            >
              <Link href="/">
                <Button variant="outline" className="text-white border-white/60 bg-white/10 hover:bg-white/20">
                  Back to Strategic Plan
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interview Structure Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Interview Structure
            </h2>

            <Card className="border border-slate-200/50 shadow-sm bg-white">
              <CardContent className="pt-6 pb-6">
                {/* Timeline Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-slate-900">Virtual Session</span>
                    <Badge variant="secondary" className="text-xs">1.5 hrs</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-slate-600" />
                    <span className="font-semibold text-slate-900">In-Person Session</span>
                    <Badge variant="secondary" className="text-xs">1.5 hrs</Badge>
                  </div>
                </div>

                {/* Horizontal Timeline */}
                <div className="relative">
                  {/* Timeline Bar */}
                  <div className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-slate-400 rounded-full" />

                  {/* Timeline Items */}
                  <div className="grid grid-cols-5 gap-4 relative">
                    {[
                      ...virtualSessions.map(s => ({ ...s, type: 'virtual' as const })),
                      ...inPersonSessions.map(s => ({ ...s, type: 'inperson' as const, href: '/prep/in-person' }))
                    ].map((session, index) => {
                      const isVirtual = session.type === 'virtual';
                      const isHovered = expandedSection === `timeline-${index}`;
                      const SessionIcon = session.icon;

                      return (
                        <div
                          key={index}
                          className="relative pt-10 cursor-pointer"
                          onClick={() => setExpandedSection(expandedSection === `timeline-${index}` ? null : `timeline-${index}`)}
                        >
                          {/* Timeline Node */}
                          <div className={`absolute top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                            isHovered
                              ? 'bg-blue-500 border-blue-500 scale-125'
                              : isVirtual
                                ? 'bg-white border-blue-500'
                                : 'bg-white border-slate-400'
                          }`}>
                            {isHovered && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 bg-white rounded-full"
                              />
                            )}
                          </div>

                          {/* Content Card */}
                          <div className={`p-3 rounded-lg border transition-all duration-300 cursor-pointer ${
                            isHovered
                              ? 'border-blue-400 shadow-lg bg-blue-50/50'
                              : 'border-slate-200/50 hover:border-blue-300 bg-white'
                          }`}>
                            <div className="flex items-center gap-2 mb-2">
                              <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                                isHovered ? 'bg-blue-100' : 'bg-slate-100'
                              }`}>
                                <SessionIcon className={`h-3.5 w-3.5 transition-colors ${
                                  isHovered ? 'text-blue-600' : 'text-slate-600'
                                }`} />
                              </div>
                              {'status' in session && session.status === "critical" && (
                                <Badge variant="destructive" className="text-[10px] px-1.5 py-0">Critical</Badge>
                              )}
                            </div>
                            <h4 className="font-medium text-sm text-slate-900 mb-1">{session.title}</h4>
                            <p className="text-xs text-slate-500 mb-1 line-clamp-2">{session.description}</p>
                            <p className={`text-xs font-medium ${isVirtual ? 'text-blue-600' : 'text-slate-600'}`}>
                              {session.duration}
                            </p>

                            {/* Expanded Details */}
                            <div className={`overflow-hidden transition-all duration-300 ${
                              isHovered ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'
                            }`}>
                              {'href' in session && session.href && (
                                <Link href={session.href}>
                                  <Button size="sm" variant="outline" className="w-full text-xs h-7 border-blue-300 text-blue-600 hover:bg-blue-50">
                                    View Prep <ArrowRight className="ml-1 h-3 w-3" />
                                  </Button>
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Session Divider Labels */}
                <div className="flex items-center justify-center gap-8 mt-6 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <span>Virtual (Remote)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-3 h-3 rounded-full bg-slate-400" />
                    <span>In-Person (SF Office)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prep Completion Checklist */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex items-center justify-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Prep Completion Checklist
              </h2>
              {mounted && (
                <Badge variant={completedCount === prepChecklist.length ? "default" : "secondary"} className={completedCount === prepChecklist.length ? "bg-emerald-500" : ""}>
                  {completedCount}/{prepChecklist.length} Complete
                </Badge>
              )}
            </div>
            {mounted && completedCount === prepChecklist.length && (
              <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-center">
                <p className="text-emerald-700 font-medium">All prep items completed! You're ready for the interview.</p>
              </div>
            )}
            <Card className="border border-slate-200/50 shadow-sm bg-white">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {prepChecklist.map((item) => {
                    const ItemIcon = item.icon;
                    const isCompleted = completedItems[item.id];
                    return (
                      <div key={item.id} className={`p-3 rounded-lg border transition-all hover:shadow-md bg-white group ${isCompleted ? 'border-emerald-300 bg-emerald-50/50' : 'border-slate-200 hover:border-blue-400'}`}>
                        <div className="flex items-start gap-3">
                          <button
                            onClick={() => toggleChecklistItem(item.id)}
                            className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                              isCompleted
                                ? 'bg-emerald-500 hover:bg-emerald-600'
                                : `bg-gradient-to-br ${item.gradient} hover:scale-110`
                            }`}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="h-5 w-5 text-white" />
                            ) : (
                              <ItemIcon className="h-4 w-4 text-white" />
                            )}
                          </button>
                          <div className="flex-1 min-w-0">
                            <Link href={item.href}>
                              <p className={`font-medium text-sm hover:text-blue-600 transition-colors ${isCompleted ? 'text-slate-500 line-through' : 'text-slate-900'}`}>
                                {item.label}
                              </p>
                            </Link>
                            <p className="text-xs text-slate-500">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prep Materials Navigation - Grid Style */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Preparation Materials
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {prepCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <Link key={index} href={card.href}>
                    <Card className="h-full border border-slate-200/50 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">{card.title}</h3>
                            </div>
                            <Badge variant="secondary" className="text-xs mb-2">{card.badge}</Badge>
                            <p className="text-sm text-slate-500">{card.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
