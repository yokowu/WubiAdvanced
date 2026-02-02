import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 训练记录
export interface TrainingRecord {
  date: string;          // 日期
  phase: 1 | 2 | 3;     // 阶段
  module: string;        // 模块名
  duration: number;      // 训练时长（秒）
  totalChars: number;    // 总字符数
  correctChars: number;  // 正确字符数
  avgSpeed: number;      // 平均速度（字/分钟）
  accuracy: number;      // 准确率
}

// 问题字列表
export interface ProblemChar {
  char: string;
  code: string;
  errorCount: number;
  lastPractice: string;
}

// 应用状态
interface AppState {
  // 当前阶段
  currentPhase: 1 | 2 | 3;
  setCurrentPhase: (phase: 1 | 2 | 3) => void;

  // 训练记录
  records: TrainingRecord[];
  addRecord: (record: TrainingRecord) => void;

  // 问题字列表
  problemChars: ProblemChar[];
  addProblemChar: (char: ProblemChar) => void;
  removeProblemChar: (char: string) => void;
  updateProblemChar: (char: string, updates: Partial<ProblemChar>) => void;

  // 设置
  settings: {
    metronomeSpeed: number;  // 节拍器速度 BPM
    soundEnabled: boolean;   // 是否开启声音
    showHints: boolean;      // 是否显示提示
  };
  updateSettings: (settings: Partial<AppState['settings']>) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      currentPhase: 1,
      setCurrentPhase: (phase) => set({ currentPhase: phase }),

      records: [],
      addRecord: (record) =>
        set((state) => ({ records: [...state.records, record] })),

      problemChars: [],
      addProblemChar: (char) =>
        set((state) => {
          const existing = state.problemChars.find((c) => c.char === char.char);
          if (existing) {
            return {
              problemChars: state.problemChars.map((c) =>
                c.char === char.char
                  ? { ...c, errorCount: c.errorCount + 1, lastPractice: char.lastPractice }
                  : c
              ),
            };
          }
          return { problemChars: [...state.problemChars, char] };
        }),
      removeProblemChar: (char) =>
        set((state) => ({
          problemChars: state.problemChars.filter((c) => c.char !== char),
        })),
      updateProblemChar: (char, updates) =>
        set((state) => ({
          problemChars: state.problemChars.map((c) =>
            c.char === char ? { ...c, ...updates } : c
          ),
        })),

      settings: {
        metronomeSpeed: 60,
        soundEnabled: true,
        showHints: true,
      },
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
    }),
    {
      name: 'wubi-improve-storage',
    }
  )
);
