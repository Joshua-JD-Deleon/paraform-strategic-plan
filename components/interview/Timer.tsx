"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface TimerProps {
  seconds: number;
  onComplete?: () => void;
}

export function Timer({ seconds, onComplete }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          setIsRunning(false);
          onComplete?.();
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, onComplete]);

  const reset = () => {
    setTimeLeft(seconds);
    setIsRunning(false);
  };

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const isLowTime = timeLeft < 10 && timeLeft > 0;
  const isTimeUp = timeLeft === 0;

  return (
    <div className="flex items-center gap-2">
      <span
        className={`font-mono text-xl font-semibold ${
          isTimeUp ? 'text-red-600' : isLowTime ? 'text-orange-500' : 'text-slate-700'
        }`}
      >
        {formatTime(timeLeft)}
      </span>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => setIsRunning(!isRunning)}
        className="h-8 w-8"
      >
        {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={reset}
        className="h-8 w-8"
      >
        <RotateCcw className="h-4 w-4" />
      </Button>
    </div>
  );
}
