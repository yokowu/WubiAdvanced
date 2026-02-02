
import './StatsPanel.css';

interface StatsPanelProps {
  time: string;
  speed: number;
  accuracy: number;
  totalChars: number;
  correctChars: number;
}

export function StatsPanel({
  time,
  speed,
  accuracy,
  totalChars,
  correctChars,
}: StatsPanelProps) {
  return (
    <div className="stats-panel">
      <div className="stat-item">
        <span className="stat-label">时间</span>
        <span className="stat-value">{time}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">速度</span>
        <span className="stat-value">{speed.toFixed(0)} <small>字/分</small></span>
      </div>
      <div className="stat-item">
        <span className="stat-label">准确率</span>
        <span className={`stat-value ${accuracy >= 98 ? 'excellent' : accuracy >= 90 ? 'good' : 'warning'}`}>
          {accuracy.toFixed(1)}%
        </span>
      </div>
      <div className="stat-item">
        <span className="stat-label">进度</span>
        <span className="stat-value">{correctChars}/{totalChars}</span>
      </div>
    </div>
  );
}
