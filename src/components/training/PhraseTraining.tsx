import { useMemo } from 'react';
import { DOUBLE_PHRASES, QUAD_PHRASES } from '../../data/phrases';
import { TypePractice, type PracticeItem, type TrainingStats } from './TypePractice';

type PhraseType = 'double' | 'quad' | 'mixed';

interface PhraseTrainingProps {
  type?: PhraseType;
  phraseCount?: number;
  onComplete?: (stats: { accuracy: number; speed: number }) => void;
}

export function PhraseTraining({ type = 'double', phraseCount = 30, onComplete }: PhraseTrainingProps) {
  // 准备练习数据
  const practiceItems = useMemo((): PracticeItem[] => {
    let source = [];
    switch (type) {
      case 'double':
        source = DOUBLE_PHRASES;
        break;
      case 'quad':
        source = QUAD_PHRASES;
        break;
      case 'mixed':
        source = [...DOUBLE_PHRASES, ...QUAD_PHRASES];
        break;
    }

    const shuffled = source
      .sort(() => Math.random() - 0.5)
      .slice(0, phraseCount);

    return shuffled.map(item => ({
      text: item.text,
      code: item.code,
    }));
  }, [type, phraseCount]);

  // 处理完成回调
  const handleComplete = (stats: TrainingStats) => {
    if (onComplete) {
      onComplete({
        accuracy: stats.accuracy,
        speed: stats.speed,
      });
    }
  };

  const typeLabel = {
    double: '双字词组',
    quad: '四字词组',
    mixed: '混合词组',
  }[type];

  const typeDescription = {
    double: '各取前两码，共四码。以词为单位思考！',
    quad: '各取第一码，共四码。四字词组一气呵成！',
    mixed: '双字词和四字词混合训练。',
  }[type];

  return (
    <TypePractice
      title={`${typeLabel}训练`}
      description={typeDescription}
      items={practiceItems}
      itemsPerLine={6}
      codeLength={4}
      requireSpace={false}
      onComplete={handleComplete}
    />
  );
}
