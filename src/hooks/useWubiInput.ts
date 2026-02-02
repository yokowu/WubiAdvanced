import { useState, useCallback, useRef } from 'react';
import { CHAR_TO_CODE, CHAR_TO_SHORT } from '../data/common-chars';
import { CHAR_TO_LEVEL1 } from '../data/level1-codes';
import { CHAR_TO_LEVEL2 } from '../data/level2-codes';
import { PHRASE_TO_CODE } from '../data/phrases';

export interface InputResult {
  correct: boolean;
  usedShortCode: boolean;
  expectedCode: string;
  actualCode: string;
  responseTime: number; // 毫秒
}

interface UseWubiInputOptions {
  mode: 'char' | 'phrase';
  requireShortCode?: boolean; // 是否要求使用简码
}

export function useWubiInput(options: UseWubiInputOptions = { mode: 'char' }) {
  const [inputBuffer, setInputBuffer] = useState('');
  const [lastResult, setLastResult] = useState<InputResult | null>(null);
  const startTimeRef = useRef<number>(0);
  const targetRef = useRef<string>('');

  // 设置目标字符/词组
  const setTarget = useCallback((target: string) => {
    targetRef.current = target;
    setInputBuffer('');
    startTimeRef.current = Date.now();
  }, []);

  // 获取预期编码
  const getExpectedCode = useCallback((target: string): string => {
    if (options.mode === 'phrase') {
      return PHRASE_TO_CODE[target] || '';
    }

    // 单字模式：优先返回简码
    if (CHAR_TO_LEVEL1[target]) {
      return CHAR_TO_LEVEL1[target];
    }
    if (CHAR_TO_LEVEL2[target]) {
      return CHAR_TO_LEVEL2[target];
    }
    if (CHAR_TO_SHORT[target]) {
      return CHAR_TO_SHORT[target];
    }
    return CHAR_TO_CODE[target] || '';
  }, [options.mode]);

  // 检查输入是否正确
  const checkInput = useCallback((input: string, target: string): boolean => {
    const upperInput = input.toUpperCase();

    if (options.mode === 'phrase') {
      const expectedCode = PHRASE_TO_CODE[target];
      return expectedCode === upperInput;
    }

    // 单字模式
    // 检查一级简码
    const level1 = CHAR_TO_LEVEL1[target];
    if (level1 && upperInput === level1) return true;

    // 检查二级简码
    const level2 = CHAR_TO_LEVEL2[target];
    if (level2 && upperInput === level2) return true;

    // 检查全码
    const fullCode = CHAR_TO_CODE[target];
    if (fullCode) {
      // 四码自动上屏或匹配
      if (upperInput === fullCode) return true;
      // 前四码匹配也算对
      if (upperInput === fullCode.slice(0, 4)) return true;
    }

    return false;
  }, [options.mode]);

  // 检查是否使用了简码
  const checkUsedShortCode = useCallback((input: string, target: string): boolean => {
    const upperInput = input.toUpperCase();

    if (CHAR_TO_LEVEL1[target] === upperInput) return true;
    if (CHAR_TO_LEVEL2[target] === upperInput) return true;

    return false;
  }, []);

  // 处理按键
  const handleKeyDown = useCallback((e: React.KeyboardEvent | KeyboardEvent) => {
    const key = e.key.toUpperCase();

    // 只处理字母键和空格
    if (!/^[A-Z]$/.test(key) && key !== ' ') {
      return;
    }

    e.preventDefault();

    if (key === ' ') {
      // 空格键：提交当前输入
      if (inputBuffer.length > 0) {
        const target = targetRef.current;
        const correct = checkInput(inputBuffer, target);
        const usedShortCode = checkUsedShortCode(inputBuffer, target);
        const responseTime = Date.now() - startTimeRef.current;

        const result: InputResult = {
          correct,
          usedShortCode,
          expectedCode: getExpectedCode(target),
          actualCode: inputBuffer,
          responseTime,
        };

        setLastResult(result);
        setInputBuffer('');

        return result;
      }
    } else {
      // 字母键：添加到缓冲区
      const newBuffer = inputBuffer + key;
      setInputBuffer(newBuffer);

      // 四码自动上屏（仅限单字模式）
      if (options.mode === 'char' && newBuffer.length === 4) {
        const target = targetRef.current;
        const correct = checkInput(newBuffer, target);
        const usedShortCode = false; // 四码不是简码
        const responseTime = Date.now() - startTimeRef.current;

        const result: InputResult = {
          correct,
          usedShortCode,
          expectedCode: getExpectedCode(target),
          actualCode: newBuffer,
          responseTime,
        };

        setLastResult(result);
        setInputBuffer('');

        return result;
      }
    }

    return null;
  }, [inputBuffer, checkInput, checkUsedShortCode, getExpectedCode, options.mode]);

  // 重置
  const reset = useCallback(() => {
    setInputBuffer('');
    setLastResult(null);
    startTimeRef.current = 0;
    targetRef.current = '';
  }, []);

  return {
    inputBuffer,
    lastResult,
    setTarget,
    handleKeyDown,
    reset,
    getExpectedCode,
  };
}

// 检测响应时间是否超过阈值（用于标记问题字）
export function isSlowResponse(responseTime: number, threshold: number = 500): boolean {
  return responseTime > threshold;
}
