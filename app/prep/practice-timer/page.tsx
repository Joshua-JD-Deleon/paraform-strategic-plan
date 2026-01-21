"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Timer,
  Play,
  Pause,
  RotateCcw,
  Target,
  Mic,
  CheckCircle2,
  AlertCircle,
  Clock
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface PracticeSession {
  id: string;
  title: string;
  duration: number; // in seconds
  description: string;
  checkpoints: { time: number; label: string }[];
  tips: string[];
}

const practiceSessions: PracticeSession[] = [
  {
    id: "elevator-pitch",
    title: "Elevator Pitch",
    duration: 60,
    description: "Your 60-second 'Why Paraform, Why You' pitch",
    checkpoints: [
      { time: 45, label: "Wrap up Why Paraform" },
      { time: 30, label: "Transition to Why You" },
      { time: 15, label: "Start closing" }
    ],
    tips: [
      "Start with the hook - the problem you solve",
      "Be specific about your experience",
      "End with enthusiasm for the role"
    ]
  },
  {
    id: "discovery-opening",
    title: "Discovery Opening",
    duration: 120,
    description: "First 2 minutes of discovery call - rapport and agenda",
    checkpoints: [
      { time: 90, label: "Finish rapport building" },
      { time: 60, label: "Set the agenda" },
      { time: 30, label: "Transition to first question" }
    ],
    tips: [
      "Thank them for their time",
      "Confirm time available",
      "Set clear agenda and ask permission"
    ]
  },
  {
    id: "meddpicc-discovery",
    title: "MEDDPICC Discovery Flow",
    duration: 900,
    description: "15-minute discovery practice - hit all MEDDPICC elements",
    checkpoints: [
      { time: 780, label: "M - Metrics questions" },
      { time: 660, label: "E - Economic Buyer" },
      { time: 540, label: "D - Decision Criteria" },
      { time: 420, label: "D - Decision Process" },
      { time: 300, label: "P - Paper Process" },
      { time: 180, label: "I - Identify Pain" },
      { time: 60, label: "C - Champion / Competition" }
    ],
    tips: [
      "Don't rush - let them talk",
      "Take notes on key points",
      "Follow up on interesting threads"
    ]
  },
  {
    id: "objection-response",
    title: "Objection Response",
    duration: 45,
    description: "Practice responding to tough questions",
    checkpoints: [
      { time: 35, label: "Acknowledge the concern" },
      { time: 20, label: "Bridge to your strength" },
      { time: 10, label: "Close with confidence" }
    ],
    tips: [
      "Pause before answering",
      "Don't get defensive",
      "Use specific examples"
    ]
  },
  {
    id: "closing-statement",
    title: "Interview Close",
    duration: 90,
    description: "Your closing statement - express interest and ask for next steps",
    checkpoints: [
      { time: 60, label: "State your interest clearly" },
      { time: 30, label: "Reference specific excitement" },
      { time: 15, label: "Ask for next steps" }
    ],
    tips: [
      "Be direct about wanting the role",
      "Reference specific things from the interview",
      "Ask what's next"
    ]
  }
];

export default function PracticeTimerPage() {
  const [selectedSession, setSelectedSession] = useState<PracticeSession | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentCheckpoint, setCurrentCheckpoint] = useState<string | null>(null);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressPercent = () => {
    if (!selectedSession) return 0;
    return ((selectedSession.duration - timeRemaining) / selectedSession.duration) * 100;
  };

  const startSession = (session: PracticeSession) => {
    setSelectedSession(session);
    setTimeRemaining(session.duration);
    setIsRunning(false);
    setCurrentCheckpoint(null);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    if (selectedSession) {
      setTimeRemaining(selectedSession.duration);
      setIsRunning(false);
      setCurrentCheckpoint(null);
    }
  };

  const checkCheckpoints = useCallback(() => {
    if (!selectedSession) return;

    const checkpoint = selectedSession.checkpoints.find(
      cp => cp.time === timeRemaining
    );

    if (checkpoint) {
      setCurrentCheckpoint(checkpoint.label);
      // Play a subtle sound or vibration if available
      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(200);
      }
    }
  }, [selectedSession, timeRemaining]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          const newTime = prev - 1;
          return newTime;
        });
      }, 1000);
    } else if (timeRemaining === 0 && isRunning) {
      setIsRunning(false);
      // Timer complete
      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate([200, 100, 200]);
      }
    }

    return () => clearInterval(interval);
  }, [isRunning, timeRemaining]);

  useEffect(() => {
    checkCheckpoints();
  }, [timeRemaining, checkCheckpoints]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="bg-rose-100 text-rose-700 border-rose-200 mb-4">
              Practice Mode
            </Badge>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Practice Timer
            </h1>
            <p className="text-slate-600">
              Timed practice for pitches, discovery, and interview responses
            </p>
          </div>

          {/* Timer Display */}
          {selectedSession && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="mb-8 border-2 border-blue-300 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-600 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-bold text-lg">{selectedSession.title}</h2>
                      <p className="text-blue-100 text-sm">{selectedSession.description}</p>
                    </div>
                    <Badge className="bg-white/20 text-white border-white/30">
                      {formatTime(selectedSession.duration)} total
                    </Badge>
                  </div>
                </div>

                <CardContent className="pt-8 pb-6">
                  {/* Main Timer */}
                  <div className="text-center mb-6">
                    <motion.div
                      className={`text-7xl font-mono font-bold ${
                        timeRemaining <= 10 ? 'text-red-500' :
                        timeRemaining <= 30 ? 'text-amber-500' : 'text-slate-900'
                      }`}
                      animate={timeRemaining <= 10 && isRunning ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      {formatTime(timeRemaining)}
                    </motion.div>

                    {/* Progress Bar */}
                    <div className="mt-4 w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${getProgressPercent()}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Current Checkpoint Alert */}
                    <AnimatePresence>
                      {currentCheckpoint && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-4 p-3 bg-amber-100 border border-amber-300 rounded-lg inline-flex items-center gap-2"
                        >
                          <AlertCircle className="h-5 w-5 text-amber-600" />
                          <span className="font-medium text-amber-800">{currentCheckpoint}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <Button
                      size="lg"
                      variant={isRunning ? "destructive" : "default"}
                      className="w-32 gap-2"
                      onClick={toggleTimer}
                    >
                      {isRunning ? (
                        <>
                          <Pause className="h-5 w-5" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="h-5 w-5" />
                          Start
                        </>
                      )}
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="gap-2"
                      onClick={resetTimer}
                    >
                      <RotateCcw className="h-5 w-5" />
                      Reset
                    </Button>
                  </div>

                  {/* Checkpoints & Tips */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <h4 className="font-semibold text-sm text-slate-900 mb-2 flex items-center gap-2">
                        <Clock className="h-4 w-4 text-slate-500" />
                        Timing Checkpoints
                      </h4>
                      <ul className="space-y-2">
                        {selectedSession.checkpoints.map((cp, i) => (
                          <li
                            key={i}
                            className={`text-sm flex items-center justify-between ${
                              timeRemaining <= cp.time ? 'text-slate-400 line-through' : 'text-slate-700'
                            }`}
                          >
                            <span>{cp.label}</span>
                            <span className="font-mono text-xs">{formatTime(cp.time)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-sm text-blue-900 mb-2 flex items-center gap-2">
                        <Target className="h-4 w-4 text-blue-500" />
                        Key Tips
                      </h4>
                      <ul className="space-y-2">
                        {selectedSession.tips.map((tip, i) => (
                          <li key={i} className="text-sm text-blue-800 flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Session Selection */}
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Mic className="h-5 w-5 text-slate-600" />
            Practice Sessions
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {practiceSessions.map((session, index) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedSession?.id === session.id
                      ? 'border-blue-400 shadow-lg ring-2 ring-blue-200'
                      : 'border-slate-200/50 hover:border-blue-300 shadow-sm'
                  }`}
                  onClick={() => startSession(session)}
                >
                  <CardHeader className="py-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{session.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        <Timer className="h-3 w-3 mr-1" />
                        {formatTime(session.duration)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-3">{session.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500">
                        {session.checkpoints.length} checkpoints
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs text-slate-500">
                        {session.tips.length} tips
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Practice Tips */}
          <Card className="mt-8 border border-slate-200/50 shadow-sm">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-slate-900 mb-3">Effective Practice Tips</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="font-medium text-sm text-slate-900 mb-1">Record Yourself</p>
                  <p className="text-xs text-slate-600">Use your phone to record and review your delivery</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="font-medium text-sm text-slate-900 mb-1">Practice Out Loud</p>
                  <p className="text-xs text-slate-600">Speaking builds muscle memory better than mental rehearsal</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="font-medium text-sm text-slate-900 mb-1">Vary Your Practice</p>
                  <p className="text-xs text-slate-600">Don&apos;t memorize scripts - practice the flow and key points</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
