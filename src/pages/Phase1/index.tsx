
import { Link } from 'react-router-dom';
import { RadicalTraining } from '../../components/training/RadicalTraining';
import { CommonCharTraining } from '../../components/training/CommonCharTraining';
import './Phase1.css';

export function RadicalPage() {
  return (
    <div className="phase-page">
      <nav className="page-nav">
        <div className="page-nav-inner">
          <Link to="/" className="back-link">← 返回首页</Link>
          <span className="nav-title">第一阶段 / 字根键位</span>
        </div>
      </nav>

      <main className="phase-content">
        <RadicalTraining />
      </main>
    </div>
  );
}

export function CommonCharPage() {
  return (
    <div className="phase-page">
      <nav className="page-nav">
        <div className="page-nav-inner">
          <Link to="/" className="back-link">← 返回首页</Link>
          <span className="nav-title">第一阶段 / 常用字秒杀</span>
        </div>
      </nav>

      <main className="phase-content">
        <CommonCharTraining charCount={50} />
      </main>
    </div>
  );
}
