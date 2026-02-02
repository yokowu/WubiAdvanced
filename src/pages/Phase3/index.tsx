
import { Link } from 'react-router-dom';
import { PhraseTraining } from '../../components/training/PhraseTraining';
import { RhythmTraining } from '../../components/training/RhythmTraining';
import './Phase3.css';

export function DoublePage() {
  return (
    <div className="phase-page">
      <nav className="page-nav">
        <div className="page-nav-inner">
          <Link to="/" className="back-link">← 返回首页</Link>
          <span className="nav-title">第三阶段 / 双字词组</span>
        </div>
      </nav>

      <main className="phase-content">
        <PhraseTraining type="double" phraseCount={30} />
      </main>
    </div>
  );
}

export function QuadPage() {
  return (
    <div className="phase-page">
      <nav className="page-nav">
        <div className="page-nav-inner">
          <Link to="/" className="back-link">← 返回首页</Link>
          <span className="nav-title">第三阶段 / 四字词组</span>
        </div>
      </nav>

      <main className="phase-content">
        <PhraseTraining type="quad" phraseCount={30} />
      </main>
    </div>
  );
}

export function RhythmPage() {
  return (
    <div className="phase-page">
      <nav className="page-nav">
        <div className="page-nav-inner">
          <Link to="/" className="back-link">← 返回首页</Link>
          <span className="nav-title">第三阶段 / 节奏训练</span>
        </div>
      </nav>

      <main className="phase-content">
        <RhythmTraining />
      </main>
    </div>
  );
}
