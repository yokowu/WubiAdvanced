
import { Link } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';
import './Home.css';

export function Home() {
  const problemChars = useAppStore(state => state.problemChars);
  const records = useAppStore(state => state.records);

  // 计算最近统计
  const recentRecords = records.slice(-10);
  const avgAccuracy = recentRecords.length > 0
    ? recentRecords.reduce((sum, r) => sum + r.accuracy, 0) / recentRecords.length
    : 0;
  const avgSpeed = recentRecords.length > 0
    ? recentRecords.reduce((sum, r) => sum + r.avgSpeed, 0) / recentRecords.length
    : 0;

  return (
    <div className="home">
      <header className="home-header">
        <h1>五笔进阶训练</h1>
        <p className="subtitle">从"拆字"思维到"条件反射"</p>
      </header>

      {records.length > 0 && (
        <div className="recent-stats">
          <div className="stat-item">
            <span className="stat-value">{avgSpeed.toFixed(0)}</span>
            <span className="stat-label">字/分钟</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{avgAccuracy.toFixed(1)}%</span>
            <span className="stat-label">准确率</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{problemChars.length}</span>
            <span className="stat-label">问题字</span>
          </div>
        </div>
      )}

      <div className="phases">
        <div className="phase">
          <div className="phase-header">
            <span className="phase-number">1</span>
            <div className="phase-info">
              <h2>根基重塑</h2>
              <p>消除卡顿，确保全盲打</p>
            </div>
          </div>
          <div className="phase-modules">
            <Link to="/phase1/radical" className="module-card">
              <span className="module-title">字根键位</span>
              <span className="module-desc">训练键位反应速度</span>
            </Link>
            <Link to="/phase1/common" className="module-card">
              <span className="module-title">常用字秒杀</span>
              <span className="module-desc">前500字条件反射</span>
            </Link>
          </div>
        </div>

        <div className="phase">
          <div className="phase-header">
            <span className="phase-number">2</span>
            <div className="phase-info">
              <h2>简码爆发</h2>
              <p>减少击键，提升效率</p>
            </div>
          </div>
          <div className="phase-modules">
            <Link to="/phase2/level1" className="module-card">
              <span className="module-title">一级简码</span>
              <span className="module-desc">25字绝对反射</span>
            </Link>
            <Link to="/phase2/level2" className="module-card">
              <span className="module-title">二级简码</span>
              <span className="module-desc">600字提速核心</span>
            </Link>
          </div>
        </div>

        <div className="phase">
          <div className="phase-header">
            <span className="phase-number">3</span>
            <div className="phase-info">
              <h2>词组心流</h2>
              <p>以词为单位，进入心流</p>
            </div>
          </div>
          <div className="phase-modules">
            <Link to="/phase3/double" className="module-card">
              <span className="module-title">双字词组</span>
              <span className="module-desc">各取前两码</span>
            </Link>
            <Link to="/phase3/quad" className="module-card">
              <span className="module-title">四字词组</span>
              <span className="module-desc">各取第一码</span>
            </Link>
            <Link to="/phase3/rhythm" className="module-card">
              <span className="module-title">节奏训练</span>
              <span className="module-desc">跟着节拍器打字</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="goal-section">
        <h3>进阶目标</h3>
        <div className="goals">
          <div className="goal-item">
            <span className="goal-icon">⚡</span>
            <span className="goal-text">100-150 字/分钟</span>
          </div>
          <div className="goal-item">
            <span className="goal-icon">✓</span>
            <span className="goal-text">准确率 ≥ 98%</span>
          </div>
          <div className="goal-item">
            <span className="goal-icon">🎯</span>
            <span className="goal-text">条件反射，无需思考</span>
          </div>
        </div>
      </div>
    </div>
  );
}
