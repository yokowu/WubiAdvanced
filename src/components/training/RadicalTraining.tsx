import { useMemo } from 'react';
import { WUBI_KEYS } from '../../data/radicals';
import { TypePractice, type PracticeItem, type TrainingStats } from './TypePractice';

interface RadicalTrainingProps {
  onComplete?: (stats: { accuracy: number; avgTime: number }) => void;
}

export function RadicalTraining({ onComplete }: RadicalTrainingProps) {
  // 准备练习数据（字根键位重复3轮）
  const practiceItems = useMemo((): PracticeItem[] => {
    const shuffled = [...WUBI_KEYS].sort(() => Math.random() - 0.5);
    // 重复多轮训练
    const repeated = [...shuffled, ...shuffled, ...shuffled];

    return repeated.map(item => ({
      text: item.keyName,  // 显示键名字根（如"王"、"土"）
      code: item.key,      // 对应键位（如 G、F）
    }));
  }, []);

  // 处理完成回调
  const handleComplete = (stats: TrainingStats) => {
    if (onComplete) {
      onComplete({
        accuracy: stats.accuracy,
        avgTime: 0, // 新组件暂不统计平均反应时间
      });
    }
  };

  return (
    <TypePractice
      title="字根键位训练"
      description="看到字根，快速按下对应的键位。一键+空格确认。"
      items={practiceItems}
      itemsPerLine={12}
      codeLength={1}
      requireSpace={true}
      onComplete={handleComplete}
    />
  );
}
