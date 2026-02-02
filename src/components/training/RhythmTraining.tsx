import { useState, useCallback, useEffect } from 'react';
import { useMetronome } from '../../hooks/useMetronome';
import { useAppStore } from '../../stores/useAppStore';
import { Keyboard } from '../common/Keyboard';
import './RhythmTraining.css';

export function RhythmTraining() {
  const [isStarted, setIsStarted] = useState(false);
  const [pressedKey, setPressedKey] = useState('');
  const [keyHistory, setKeyHistory] = useState<{ key: string; time: number }[]>([]);
  const [beatTimes, setBeatTimes] = useState<number[]>([]);
  const [rhythmScore, setRhythmScore] = useState<number | null>(null);

  const { metronomeSpeed, updateSettings } = useAppStore(state => ({
    metronomeSpeed: state.settings.metronomeSpeed,
    updateSettings: state.updateSettings,
  }));

  const metronome = useMetronome({
    bpm: metronomeSpeed,
    onTick: () => {
      setBeatTimes(prev => [...prev, Date.now()]);
    },
  });

  // 开始训练
  const handleStart = useCallback(() => {
    setIsStarted(true);
    setKeyHistory([]);
    setBeatTimes([]);
    setRhythmScore(null);
    metronome.start();
  }, [metronome]);

  // 停止训练
  const handleStop = useCallback(() => {
    setIsStarted(false);
    metronome.stop();

    // 计算节奏分数
    if (keyHistory.length > 2 && beatTimes.length > 2) {
      // 计算按键间隔
      const keyIntervals: number[] = [];
      for (let i = 1; i < keyHistory.length; i++) {
        keyIntervals.push(keyHistory[i].time - keyHistory[i - 1].time);
      }

      // 理想间隔
      const idealInterval = (60 / metronomeSpeed) * 1000;

      // 计算方差
      const avgInterval = keyIntervals.reduce((a, b) => a + b, 0) / keyIntervals.length;
      const variance = keyIntervals.reduce((sum, interval) => {
        return sum + Math.pow(interval - avgInterval, 2);
      }, 0) / keyIntervals.length;

      // 分数：方差越小越好，与理想间隔越接近越好
      const intervalDiff = Math.abs(avgInterval - idealInterval) / idealInterval;
      const varianceScore = Math.max(0, 100 - Math.sqrt(variance) / 10);
      const intervalScore = Math.max(0, 100 - intervalDiff * 100);

      setRhythmScore(Math.round((varianceScore + intervalScore) / 2));
    }
  }, [metronome, keyHistory, beatTimes, metronomeSpeed]);

  // 处理按键
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isStarted) return;

    const key = e.key.toUpperCase();
    if (!/^[A-Z]$/.test(key) && key !== ' ') return;

    e.preventDefault();
    setPressedKey(key);
    setKeyHistory(prev => [...prev, { key, time: Date.now() }]);

    setTimeout(() => setPressedKey(''), 100);
  }, [isStarted]);

  // 键盘事件监听
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // 更新 BPM
  const handleBpmChange = (newBpm: number) => {
    updateSettings({ metronomeSpeed: newBpm });
    metronome.updateBpm(newBpm);
  };

  return (
    <div className="rhythm-training">
      <div className="training-header">
        <h2>击键节奏训练</h2>
        <p className="description">
          跟着节拍器打字，训练匀速击键能力。高手的声音是连绵不绝的"哒哒哒哒"
        </p>
      </div>

      <div className="bpm-control">
        <span className="bpm-label">节拍速度</span>
        <div className="bpm-buttons">
          {[40, 60, 80, 100, 120].map(bpm => (
            <button
              key={bpm}
              className={`bpm-btn ${metronomeSpeed === bpm ? 'active' : ''}`}
              onClick={() => handleBpmChange(bpm)}
            >
              {bpm}
            </button>
          ))}
        </div>
        <span className="bpm-value">{metronomeSpeed} BPM</span>
      </div>

      {!isStarted ? (
        <div className="start-panel">
          <div className="rhythm-tips">
            <p>训练目标：</p>
            <ul>
              <li>每一下击键都踩在节拍点上</li>
              <li>保持匀速，不要忽快忽慢</li>
              <li>随便打什么键都可以，专注于节奏</li>
            </ul>
          </div>
          <button className="start-button" onClick={handleStart}>
            开始节奏训练
          </button>
        </div>
      ) : (
        <>
          <div className="metronome-display">
            <div className="beat-visual">
              {[0, 1, 2, 3].map(i => (
                <span
                  key={i}
                  className={`beat-circle ${beatTimes.length % 4 === i ? 'active' : ''}`}
                />
              ))}
            </div>
            <div className="key-count">
              已击键: <span>{keyHistory.length}</span>
            </div>
          </div>

          <div className="type-area">
            <p>跟着节拍，随意敲击键盘...</p>
            {keyHistory.slice(-20).map((item, i) => (
              <span key={i} className="typed-key">{item.key}</span>
            ))}
          </div>

          <Keyboard pressedKey={pressedKey} />

          <button className="stop-button" onClick={handleStop}>
            停止并查看分数
          </button>
        </>
      )}

      {rhythmScore !== null && !isStarted && (
        <div className="score-panel">
          <div className="score-value">
            <span className="score-number">{rhythmScore}</span>
            <span className="score-label">节奏分数</span>
          </div>
          <div className="score-feedback">
            {rhythmScore >= 80 && '节奏感很好！继续保持！'}
            {rhythmScore >= 60 && rhythmScore < 80 && '还不错，多练习会更稳定'}
            {rhythmScore < 60 && '需要更专注于节拍，跟着节奏走'}
          </div>
        </div>
      )}
    </div>
  );
}
