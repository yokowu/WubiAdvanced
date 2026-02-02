import { useMemo } from 'react';
import { LEVEL1_CODES } from '../../data/level1-codes';
import { TypePractice, type PracticeItem, type TrainingStats } from './TypePractice';

interface Level1TrainingProps {
  onComplete?: (stats: { accuracy: number; speed: number }) => void;
}

export function Level1Training({ onComplete }: Level1TrainingProps) {
  // 准备练习数据（一级简码重复3轮）
  const practiceItems = useMemo((): PracticeItem[] => {
    const shuffled = [...LEVEL1_CODES].sort(() => Math.random() - 0.5);
    // 重复多轮训练
    const repeated = [...shuffled, ...shuffled, ...shuffled];

    return repeated.map(item => ({
      text: item.char,
      code: item.code,
    }));
  }, []);

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
      title="一级简码训练"
      description="25个最常用字，一键+空格即可输入。练到像呼吸一样自然！"
      items={practiceItems}
      itemsPerLine={12}
      codeLength={1}
      requireSpace={true}
      onComplete={handleComplete}
    />
  );
}
