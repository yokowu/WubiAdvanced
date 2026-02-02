import { useState, useCallback, useRef, useEffect } from 'react';

interface UseMetronomeOptions {
  bpm: number;
  onTick?: () => void;
}

export function useMetronome(options: UseMetronomeOptions) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(options.bpm);
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);
  const tickCallbackRef = useRef(options.onTick);

  // 更新回调引用
  useEffect(() => {
    tickCallbackRef.current = options.onTick;
  }, [options.onTick]);

  // 创建节拍声音
  const playTick = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = 800; // 频率
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.1);

    // 触发回调
    tickCallbackRef.current?.();
  }, []);

  // 开始节拍
  const start = useCallback(() => {
    if (isPlaying) return;

    setIsPlaying(true);
    const interval = (60 / bpm) * 1000; // 毫秒

    // 立即播放一次
    playTick();

    intervalRef.current = window.setInterval(() => {
      playTick();
    }, interval);
  }, [isPlaying, bpm, playTick]);

  // 停止节拍
  const stop = useCallback(() => {
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // 切换节拍
  const toggle = useCallback(() => {
    if (isPlaying) {
      stop();
    } else {
      start();
    }
  }, [isPlaying, start, stop]);

  // 更新 BPM
  const updateBpm = useCallback((newBpm: number) => {
    setBpm(newBpm);
    if (isPlaying) {
      stop();
      // 重新开始
      setTimeout(() => {
        const interval = (60 / newBpm) * 1000;
        playTick();
        intervalRef.current = window.setInterval(() => {
          playTick();
        }, interval);
        setIsPlaying(true);
      }, 0);
    }
  }, [isPlaying, stop, playTick]);

  // 清理
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return {
    isPlaying,
    bpm,
    start,
    stop,
    toggle,
    updateBpm,
  };
}
