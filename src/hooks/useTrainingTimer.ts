import { useState, useCallback, useRef } from 'react';

interface UseTrainingTimerReturn {
  elapsedTime: number;
  isRunning: boolean;
  start: () => void;
  pause: () => void;
  reset: () => void;
  getFormattedTime: () => string;
}

export function useTrainingTimer(): UseTrainingTimerReturn {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const accumulatedTimeRef = useRef<number>(0);

  const start = useCallback(() => {
    if (isRunning) return;

    setIsRunning(true);
    startTimeRef.current = Date.now();

    intervalRef.current = window.setInterval(() => {
      const currentTime = Date.now();
      const elapsed = accumulatedTimeRef.current + (currentTime - startTimeRef.current);
      setElapsedTime(elapsed);
    }, 100);
  }, [isRunning]);

  const pause = useCallback(() => {
    if (!isRunning) return;

    setIsRunning(false);
    accumulatedTimeRef.current = elapsedTime;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [isRunning, elapsedTime]);

  const reset = useCallback(() => {
    setIsRunning(false);
    setElapsedTime(0);
    accumulatedTimeRef.current = 0;
    startTimeRef.current = 0;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const getFormattedTime = useCallback(() => {
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, [elapsedTime]);

  return {
    elapsedTime,
    isRunning,
    start,
    pause,
    reset,
    getFormattedTime,
  };
}
