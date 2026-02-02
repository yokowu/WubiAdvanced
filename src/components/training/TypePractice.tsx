import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Keyboard } from '../common/Keyboard';
import { StatsPanel } from '../common/StatsPanel';
import { useTrainingTimer } from '../../hooks/useTrainingTimer';
import { useAppStore } from '../../stores/useAppStore';
import './TypePractice.css';

export interface PracticeItem {
  text: string;           // 显示文本（单字或词组）
  code: string;           // 正确编码（大写）
  acceptableCodes?: string[];  // 可接受的其他编码（简码等）
}

export interface TrainingStats {
  accuracy: number;
  speed: number;
  totalItems: number;
  correctItems: number;
  problemItems: string[];
}

interface TypePracticeProps {
  title: string;
  description: string;
  items: PracticeItem[];
  itemsPerLine?: number;  // 每行显示数量，默认 12
  codeLength?: number;    // 编码长度，用于判断自动上屏（1=一级简码，2=二级简码，4=全码）
  requireSpace?: boolean; // 是否需要空格确认（简码模式需要）
  onComplete?: (stats: TrainingStats) => void;
}

interface ItemState {
  status: 'pending' | 'current' | 'correct' | 'wrong';
  input: string;
}

export function TypePractice({
  title,
  description,
  items,
  itemsPerLine = 12,
  codeLength = 4,
  requireSpace = false,
  onComplete,
}: TypePracticeProps) {
  const [isStarted, setIsStarted] = useState(false);
  const [shuffledItems, setShuffledItems] = useState<PracticeItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemStates, setItemStates] = useState<ItemState[]>([]);
  const [inputBuffer, setInputBuffer] = useState('');
  const [pressedKey, setPressedKey] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [problemItems, setProblemItems] = useState<string[]>([]);
  const [waitingForSpace, setWaitingForSpace] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [finalStats, setFinalStats] = useState<TrainingStats | null>(null);

  const startTimeRef = useRef<number>(0);
  const timer = useTrainingTimer();
  const addProblemChar = useAppStore(state => state.addProblemChar);
  const addRecord = useAppStore(state => state.addRecord);
  const records = useAppStore(state => state.records);

  // 计算历史最佳记录
  const bestRecord = useMemo(() => {
    const moduleRecords = records.filter(r => r.module === title);
    if (moduleRecords.length === 0) return null;
    return moduleRecords.reduce((best, record) => {
      if (record.avgSpeed > best.avgSpeed) return record;
      return best;
    }, moduleRecords[0]);
  }, [records, title]);

  // 随机打乱数组
  const shuffleArray = useCallback(<T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  // 初始化项目状态
  const initStates = useCallback((itemCount: number) => {
    const states: ItemState[] = Array(itemCount).fill(null).map((_, i) => ({
      status: i === 0 ? 'current' : 'pending',
      input: '',
    }));
    setItemStates(states);
  }, []);

  // 开始训练
  const handleStart = useCallback(() => {
    const newShuffledItems = shuffleArray(items);
    setShuffledItems(newShuffledItems);
    initStates(newShuffledItems.length);
    setCurrentIndex(0);
    setCorrectCount(0);
    setProblemItems([]);
    setInputBuffer('');
    setIsStarted(true);
    setWaitingForSpace(false);
    setShowReport(false);
    setFinalStats(null);
    timer.reset();
    timer.start();
    startTimeRef.current = Date.now();
  }, [items, shuffleArray, initStates, timer]);

  // 检查输入是否正确
  const checkInput = useCallback((input: string, item: PracticeItem): boolean => {
    const upperInput = input.toUpperCase();

    // 检查主编码
    if (item.code === upperInput) return true;

    // 检查可接受的其他编码
    if (item.acceptableCodes) {
      return item.acceptableCodes.some(code => code === upperInput);
    }

    // 四码截取比较
    if (codeLength === 4 && item.code.length > 4) {
      return item.code.slice(0, 4) === upperInput;
    }

    return false;
  }, [codeLength]);

  // 移动到下一项
  const moveToNext = useCallback((isCorrect: boolean) => {
    const currentItem = shuffledItems[currentIndex];

    setItemStates(prev => {
      const newStates = [...prev];
      newStates[currentIndex] = {
        ...newStates[currentIndex],
        status: isCorrect ? 'correct' : 'wrong',
      };
      if (currentIndex + 1 < shuffledItems.length) {
        newStates[currentIndex + 1] = {
          ...newStates[currentIndex + 1],
          status: 'current',
        };
      }
      return newStates;
    });

    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    } else {
      setProblemItems(prev => [...prev, currentItem.text]);
      addProblemChar({
        char: currentItem.text,
        code: currentItem.code,
        errorCount: 1,
        lastPractice: new Date().toISOString(),
      });
    }

    // 检查是否结束
    if (currentIndex >= shuffledItems.length - 1) {
      timer.pause();
      setIsStarted(false);

      const finalCorrectCount = isCorrect ? correctCount + 1 : correctCount;
      const speed = timer.elapsedTime > 0
        ? (finalCorrectCount / (timer.elapsedTime / 1000)) * 60
        : 0;
      const finalProblemItems = isCorrect ? problemItems : [...problemItems, currentItem.text];

      const stats: TrainingStats = {
        accuracy: (finalCorrectCount / shuffledItems.length) * 100,
        speed,
        totalItems: shuffledItems.length,
        correctItems: finalCorrectCount,
        problemItems: finalProblemItems,
      };

      // 保存训练记录
      addRecord({
        date: new Date().toISOString(),
        phase: 1, // 默认阶段
        module: title,
        duration: Math.round(timer.elapsedTime / 1000),
        totalChars: shuffledItems.length,
        correctChars: finalCorrectCount,
        avgSpeed: speed,
        accuracy: stats.accuracy,
      });

      // 显示报告
      setFinalStats(stats);
      setShowReport(true);

      if (onComplete) {
        onComplete(stats);
      }
      return;
    }

    setCurrentIndex(prev => prev + 1);
    setInputBuffer('');
    setWaitingForSpace(false);
    startTimeRef.current = Date.now();
  }, [currentIndex, shuffledItems, correctCount, problemItems, timer, onComplete, addProblemChar, addRecord, title]);

  // 处理按键
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isStarted || currentIndex >= shuffledItems.length) return;

    const key = e.key.toUpperCase();
    const currentItem = shuffledItems[currentIndex];

    // 按下退格键：清除当前输入
    if (e.key === 'Backspace') {
      e.preventDefault();
      if (inputBuffer.length > 0) {
        setInputBuffer(prev => prev.slice(0, -1));
        // 清除错误状态
        setItemStates(prev => {
          const newStates = [...prev];
          if (newStates[currentIndex].status === 'wrong') {
            newStates[currentIndex] = { ...newStates[currentIndex], status: 'current' };
          }
          return newStates;
        });
      }
      return;
    }

    // 如果正在等待空格确认
    if (waitingForSpace) {
      if (key === ' ') {
        e.preventDefault();
        setPressedKey(' ');
        setTimeout(() => setPressedKey(''), 100);
        moveToNext(true);
      }
      return;
    }

    // 空格键：提交当前输入（非简码模式）
    if (key === ' ' && !requireSpace) {
      e.preventDefault();
      if (inputBuffer.length > 0) {
        const isCorrect = checkInput(inputBuffer, currentItem);
        if (isCorrect) {
          moveToNext(true);
        } else {
          // 标记错误，但不前进，等待用户纠正
          setItemStates(prev => {
            const newStates = [...prev];
            newStates[currentIndex] = { ...newStates[currentIndex], status: 'wrong' };
            return newStates;
          });
          setInputBuffer('');
        }
      }
      return;
    }

    // 只处理字母键
    if (!/^[A-Z]$/.test(key)) return;

    e.preventDefault();
    setPressedKey(key);
    setTimeout(() => setPressedKey(''), 100);

    const newBuffer = inputBuffer + key;
    setInputBuffer(newBuffer);

    // 简码模式：检查是否匹配
    if (requireSpace && newBuffer.length === codeLength) {
      const isCorrect = checkInput(newBuffer, currentItem);
      if (isCorrect) {
        setWaitingForSpace(true);
        setItemStates(prev => {
          const newStates = [...prev];
          newStates[currentIndex] = { ...newStates[currentIndex], status: 'correct' };
          return newStates;
        });
      } else {
        // 错误：标记错误状态，清空输入让用户立即重试（无延迟）
        setItemStates(prev => {
          const newStates = [...prev];
          newStates[currentIndex] = { ...newStates[currentIndex], status: 'wrong' };
          return newStates;
        });
        setInputBuffer('');
      }
      return;
    }

    // 全码模式：四码自动上屏
    if (!requireSpace && newBuffer.length === 4) {
      const isCorrect = checkInput(newBuffer, currentItem);
      if (isCorrect) {
        moveToNext(true);
      } else {
        // 错误：标记错误状态，清空输入让用户立即重试（无延迟）
        setItemStates(prev => {
          const newStates = [...prev];
          newStates[currentIndex] = { ...newStates[currentIndex], status: 'wrong' };
          return newStates;
        });
        setInputBuffer('');
      }
    }
  }, [isStarted, currentIndex, shuffledItems, inputBuffer, waitingForSpace, requireSpace, codeLength, checkInput, moveToNext]);

  // 键盘事件监听
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // 计算当前行的范围
  const currentLineStart = Math.floor(currentIndex / itemsPerLine) * itemsPerLine;
  const currentLineEnd = Math.min(currentLineStart + itemsPerLine, shuffledItems.length);
  const currentLineItems = shuffledItems.slice(currentLineStart, currentLineEnd);
  const currentLineStates = itemStates.slice(currentLineStart, currentLineEnd);

  // 下一行预览
  const nextLineStart = currentLineEnd;
  const nextLineEnd = Math.min(nextLineStart + itemsPerLine, shuffledItems.length);
  const nextLineItems = nextLineStart < shuffledItems.length ? shuffledItems.slice(nextLineStart, nextLineEnd) : [];

  const currentItem = shuffledItems[currentIndex];
  const accuracy = currentIndex > 0 ? (correctCount / currentIndex) * 100 : 0;
  const speed = timer.elapsedTime > 0
    ? (correctCount / (timer.elapsedTime / 1000)) * 60
    : 0;

  // 获取错误字的编码信息
  const getProblemItemsWithCodes = useCallback(() => {
    if (!finalStats) return [];
    return finalStats.problemItems.map(text => {
      const item = shuffledItems.find(i => i.text === text);
      return { text, code: item?.code || '' };
    });
  }, [finalStats, shuffledItems]);

  // 针对错误字词练习
  const practiceProblems = useCallback(() => {
    if (!finalStats || finalStats.problemItems.length === 0) return;
    // 重新开始训练（目前简单重置，后续可扩展为只练错字）
    setShowReport(false);
    handleStart();
  }, [finalStats, handleStart]);

  return (
    <div className="type-practice">
      <div className="training-header">
        <h2>{title}</h2>
        <p className="description">{description}</p>
      </div>

      {showReport && finalStats ? (
        // 训练报告
        <div className="training-report">
          <h3 className="report-title">训练报告</h3>

          {/* 基本统计 */}
          <div className="report-stats">
            <div className="stat-item">
              <span className="stat-value">{timer.getFormattedTime()}</span>
              <span className="stat-label">用时</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{finalStats.speed.toFixed(1)}</span>
              <span className="stat-label">字/分钟</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{finalStats.accuracy.toFixed(1)}%</span>
              <span className="stat-label">正确率</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{finalStats.correctItems}/{finalStats.totalItems}</span>
              <span className="stat-label">正确数</span>
            </div>
          </div>

          {/* 历史最佳对比 */}
          {bestRecord && (
            <div className="best-record">
              <h4>历史最佳对比</h4>
              <div className="comparison">
                <div className="compare-item">
                  <span className="compare-label">速度</span>
                  <span className="compare-current">{finalStats.speed.toFixed(1)}</span>
                  <span className="compare-vs">vs</span>
                  <span className="compare-best">{bestRecord.avgSpeed.toFixed(1)}</span>
                  {finalStats.speed > bestRecord.avgSpeed && (
                    <span className="new-record">新纪录!</span>
                  )}
                </div>
                <div className="compare-item">
                  <span className="compare-label">正确率</span>
                  <span className="compare-current">{finalStats.accuracy.toFixed(1)}%</span>
                  <span className="compare-vs">vs</span>
                  <span className="compare-best">{bestRecord.accuracy.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          )}

          {/* 错误字词列表 */}
          {finalStats.problemItems.length > 0 && (
            <div className="problem-list">
              <h4>错误字词 ({finalStats.problemItems.length})</h4>
              <div className="problem-items">
                {getProblemItemsWithCodes().map((item, i) => (
                  <span key={i} className="problem-item">
                    <span className="problem-char">{item.text}</span>
                    <span className="problem-code">{item.code}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 操作按钮 */}
          <div className="report-actions">
            <button className="action-btn primary" onClick={handleStart}>
              再练一次
            </button>
            {finalStats.problemItems.length > 0 && (
              <button className="action-btn secondary" onClick={practiceProblems}>
                专练错字
              </button>
            )}
            <button className="action-btn" onClick={() => window.history.back()}>
              返回
            </button>
          </div>
        </div>
      ) : !isStarted ? (
        <div className="start-panel">
          <p>本练习共 {items.length} 个项目，采用横向打字模式。</p>
          <p className="tip">提示：输入错误时变红，需纠正后才能继续</p>
          <button className="start-button" onClick={handleStart}>
            开始训练
          </button>
        </div>
      ) : (
        <>
          <StatsPanel
            time={timer.getFormattedTime()}
            speed={speed}
            accuracy={accuracy}
            totalChars={shuffledItems.length}
            correctChars={correctCount}
          />

          <div className="practice-content">
            {/* 当前行 */}
            <div className="text-line current-line">
              {currentLineItems.map((item, i) => {
                const globalIndex = currentLineStart + i;
                const state = currentLineStates[i];
                return (
                  <span
                    key={globalIndex}
                    className={`practice-item ${state?.status || 'pending'}`}
                  >
                    {item.text}
                  </span>
                );
              })}
            </div>

            {/* 下一行预览 */}
            {nextLineItems.length > 0 && (
              <div className="text-line next-line">
                {nextLineItems.map((item, i) => (
                  <span key={nextLineStart + i} className="practice-item pending">
                    {item.text}
                  </span>
                ))}
              </div>
            )}

            {/* 输入区域 */}
            <div className="input-area">
              <div className="input-buffer">
                {inputBuffer || '_'}
                {waitingForSpace && <span className="space-hint">按空格确认</span>}
              </div>
            </div>

            {/* 编码提示 */}
            <div className="code-hint">
              <span className="hint-label">当前编码:</span>
              <span className="hint-code">{currentItem?.code || ''}</span>
            </div>
          </div>

          <Keyboard
            showRadicals
            pressedKey={pressedKey}
            highlightKeys={currentItem?.code.split('') || []}
          />

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(currentIndex / shuffledItems.length) * 100}%` }}
            />
          </div>

          <div className="controls">
            <button className="stop-button" onClick={() => {
              timer.pause();
              setIsStarted(false);
            }}>
              结束训练
            </button>
          </div>
        </>
      )}
    </div>
  );
}
