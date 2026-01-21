"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import Link from "next/link";
import {
  Calendar as CalendarIcon,
  MessageSquare,
  Target,
  Users,
  Award,
  Briefcase,
  BarChart,
  FileCheck,
  Clock,
  Settings,
  Check
} from "lucide-react";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "interview-datetime";

export default function Dashboard() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isPast, setIsPast] = useState(false);
  const [interviewDate, setInterviewDate] = useState<Date | undefined>(undefined);
  const [interviewTime, setInterviewTime] = useState("13:00");
  const [showSettings, setShowSettings] = useState(false);
  const [targetTimestamp, setTargetTimestamp] = useState<number | null>(null);

  // Load saved date from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const timestamp = parseInt(saved, 10);
      setTargetTimestamp(timestamp);
      const savedDate = new Date(timestamp);
      setInterviewDate(savedDate);
      setInterviewTime(format(savedDate, "HH:mm"));
    }
  }, []);

  // Countdown logic
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

  const handleSaveDateTime = () => {
    if (!interviewDate) return;

    const [hours, minutes] = interviewTime.split(":").map(Number);
    const dateTime = new Date(interviewDate);
    dateTime.setHours(hours, minutes, 0, 0);

    const timestamp = dateTime.getTime();
    localStorage.setItem(STORAGE_KEY, timestamp.toString());
    setTargetTimestamp(timestamp);
    setShowSettings(false);
  };

  const formatDisplayDate = () => {
    if (!targetTimestamp) return "Not set";
    const date = new Date(targetTimestamp);
    return format(date, "MMMM d, yyyy 'at' h:mm a");
  };

  const navigationCards = [
    {
      title: "The Pitch",
      description: "Your elevator pitch and value proposition",
      icon: Target,
      href: "/prep/pitch",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Strategic Plan",
      description: "Execution roadmap and account framework",
      icon: CalendarIcon,
      href: "/prep/plan",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      title: "Success Stories",
      description: "Customer wins and account victories",
      icon: Award,
      href: "/prep/stories",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Q&A Preparation",
      description: "Common questions and strategic answers",
      icon: MessageSquare,
      href: "/prep/qa",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Strategic Frameworks",
      description: "Tools and methodologies",
      icon: Briefcase,
      href: "/prep/frameworks",
      gradient: "from-amber-500 to-blue-500"
    },
    {
      title: "Mock Interview",
      description: "Practice with AI interviewer",
      icon: Users,
      href: "/prep/interview",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      title: "Competitive Analysis",
      description: "Market landscape and positioning",
      icon: BarChart,
      href: "/prep/competitive",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "Quick Reference",
      description: "Key stats and talking points",
      icon: FileCheck,
      href: "/prep/cheat-sheet",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];


  return (
    <div className="min-h-screen flex flex-col">
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

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
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

          <div className="container relative z-10 mx-auto px-4 pt-20 pb-8">
            <div className="mx-auto max-w-[1600px] text-center">
              <motion.h1
                className="mb-2 text-4xl font-bold leading-tight tracking-tight md:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  Strategic Interview Prep
                </span>
              </motion.h1>

              <motion.p
                className="mb-6 text-base font-normal text-slate-300 md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                AI-Powered Interview Preparation for Sales & Account Management Roles
              </motion.p>

              {/* Countdown Timer */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm max-w-2xl mx-auto">
                  <CardHeader>
                    <div className="flex items-center justify-center gap-2 text-white">
                      <Clock className="h-5 w-5 text-blue-400" />
                      <CardTitle className="text-white">
                        {!targetTimestamp ? "Set Interview Date" : isPast ? "Interview Time!" : "Interview Countdown"}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-slate-200">
                      {!targetTimestamp ? "Configure your interview date and time below" : isPast ? "Good luck! You've got this!" : formatDisplayDate()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {!mounted ? (
                      <div className="text-center text-slate-300">Loading...</div>
                    ) : !targetTimestamp ? (
                      <div className="text-center text-slate-300">
                        <p className="mb-4">No interview date set yet.</p>
                        <Button
                          onClick={() => setShowSettings(true)}
                          className="bg-blue-500 hover:bg-blue-600"
                        >
                          <Settings className="h-4 w-4 mr-2" />
                          Set Date & Time
                        </Button>
                      </div>
                    ) : isPast ? (
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-400 mb-2">
                          Time to shine!
                        </div>
                        <p className="text-slate-300 mb-4">
                          Remember your key stories and stay confident.
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowSettings(true)}
                          className="text-slate-300 border-slate-500 hover:bg-white/10"
                        >
                          <Settings className="h-4 w-4 mr-2" />
                          Update Date
                        </Button>
                      </div>
                    ) : (
                      <>
                        <div className="grid grid-cols-4 gap-4 mb-4">
                          {[
                            { label: "Days", value: timeRemaining.days },
                            { label: "Hours", value: timeRemaining.hours },
                            { label: "Minutes", value: timeRemaining.minutes },
                            { label: "Seconds", value: timeRemaining.seconds }
                          ].map((item, index) => (
                            <div key={index} className="text-center">
                              <div className="text-4xl font-bold text-blue-400 mb-1">
                                {String(item.value).padStart(2, '0')}
                              </div>
                              <div className="text-sm text-slate-300">{item.label}</div>
                            </div>
                          ))}
                        </div>
                        <div className="text-center">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowSettings(true)}
                            className="text-slate-300 border-slate-500 hover:bg-white/10"
                          >
                            <Settings className="h-4 w-4 mr-2" />
                            Change Date
                          </Button>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>

                {/* Date/Time Settings Panel */}
                {showSettings && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4"
                  >
                    <Card className="bg-white/10 border-white/20 backdrop-blur-sm max-w-md mx-auto">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-white text-lg">Set Interview Date & Time</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label className="text-slate-200">Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal bg-white/10 border-white/20 text-white hover:bg-white/20",
                                  !interviewDate && "text-slate-400"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {interviewDate ? format(interviewDate, "PPP") : "Pick a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="center">
                              <Calendar
                                mode="single"
                                selected={interviewDate}
                                onSelect={setInterviewDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-slate-200">Time</Label>
                          <Input
                            type="time"
                            value={interviewTime}
                            onChange={(e) => setInterviewTime(e.target.value)}
                            className="bg-white/10 border-white/20 text-white"
                          />
                        </div>

                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            onClick={() => setShowSettings(false)}
                            className="flex-1 border-slate-500 text-slate-300 hover:bg-white/10"
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={handleSaveDateTime}
                            disabled={!interviewDate}
                            className="flex-1 bg-blue-500 hover:bg-blue-600"
                          >
                            <Check className="h-4 w-4 mr-2" />
                            Save
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </motion.div>

            </div>
          </div>
        </section>

        {/* Navigation Cards */}
        <section className="bg-gray-50 py-8 flex-1 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                Preparation Materials
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {navigationCards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link href={card.href}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                        <CardHeader>
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <card.icon className="h-6 w-6 text-white" />
                          </div>
                          <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                            {card.title}
                          </CardTitle>
                          <CardDescription>{card.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

    </div>
  );
}
