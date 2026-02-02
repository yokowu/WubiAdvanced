import { useMemo } from 'react';
import type { CommonChar } from '../../data/common-chars';
import { COMMON_500, CHAR_TO_CODE } from '../../data/common-chars';
import { CHAR_TO_LEVEL1 } from '../../data/level1-codes';
import { CHAR_TO_LEVEL2 } from '../../data/level2-codes';
import { TypePractice, type PracticeItem, type TrainingStats } from './TypePractice';

interface CommonCharTrainingProps {
  charCount?: number;
  onComplete?: (stats: { accuracy: number; speed: number; problemChars: string[] }) => void;
}

export function CommonCharTraining({ charCount = 50, onComplete }: CommonCharTrainingProps) {
  // 获取字符的最短编码
  const getShortestCode = (char: string): string => {
    if (CHAR_TO_LEVEL1[char]) return CHAR_TO_LEVEL1[char];
    if (CHAR_TO_LEVEL2[char]) return CHAR_TO_LEVEL2[char];
    const fullCode = CHAR_TO_CODE[char];
    return fullCode ? fullCode.slice(0, 4) : '';
  };

  // 获取所有可接受的编码
  const getAcceptableCodes = (char: string): string[] => {
    const codes: string[] = [];

    // 一级简码
    if (CHAR_TO_LEVEL1[char]) {
      codes.push(CHAR_TO_LEVEL1[char]);
    }

    // 二级简码
    if (CHAR_TO_LEVEL2[char]) {
      codes.push(CHAR_TO_LEVEL2[char]);
    }

    // 全码（前四码）
    const fullCode = CHAR_TO_CODE[char];
    if (fullCode) {
      codes.push(fullCode.slice(0, 4));
      if (fullCode.length !== 4) {
        codes.push(fullCode);
      }
    }

    return codes;
  };

  // 准备练习数据
  const practiceItems = useMemo((): PracticeItem[] => {
    const shuffled = [...COMMON_500]
      .sort(() => Math.random() - 0.5)
      .slice(0, charCount);

    return shuffled.map((item: CommonChar) => ({
      text: item.char,
      code: getShortestCode(item.char),
      acceptableCodes: getAcceptableCodes(item.char),
    }));
  }, [charCount]);

  // 处理完成回调
  const handleComplete = (stats: TrainingStats) => {
    if (onComplete) {
      onComplete({
        accuracy: stats.accuracy,
        speed: stats.speed,
        problemChars: stats.problemItems,
      });
    }
  };

  return (
    <TypePractice
      title="常用字秒杀训练"
      description="看到字，手指自动弹出编码。横向显示待输入字符，输入错误需纠正后才能继续。"
      items={practiceItems}
      itemsPerLine={10}
      codeLength={4}
      requireSpace={false}
      onComplete={handleComplete}
    />
  );
}
