import { useMemo } from 'react';
import { LEVEL2_CODES } from '../../data/level2-codes';
import { TypePractice, type PracticeItem, type TrainingStats } from './TypePractice';

interface Level2TrainingProps {
  charCount?: number;
  onComplete?: (stats: { accuracy: number; speed: number }) => void;
}

export function Level2Training({ charCount = 50, onComplete }: Level2TrainingProps) {
  // 准备练习数据
  const practiceItems = useMemo((): PracticeItem[] => {
    const shuffled = [...LEVEL2_CODES]
      .sort(() => Math.random() - 0.5)
      .slice(0, charCount);

    return shuffled.map(item => ({
      text: item.char,
      code: item.code,
    }));
  }, [charCount]);

  // 处理完成回调
  const handleComplete = (stats: TrainingStats) => {
    if (onComplete) {
      onComplete({
        accuracy: stats.accuracy,
        speed: stats.speed,
      });
    }
  };

  return (
    <TypePractice
      title="二级简码训练"
      description="约600个常用字，两键+空格输入。节奏：哒哒-啪"
      items={practiceItems}
      itemsPerLine={10}
      codeLength={2}
      requireSpace={true}
      onComplete={handleComplete}
    />
  );
}
