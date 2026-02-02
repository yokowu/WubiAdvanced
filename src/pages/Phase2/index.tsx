
import { Link } from 'react-router-dom';
import { Level1Training } from '../../components/training/Level1Training';
import { Level2Training } from '../../components/training/Level2Training';
import './Phase2.css';

export function Level1Page() {
  return (
    <div className="phase-page">
      <nav className="page-nav">
        <Link to="/" className="back-link">← 返回首页</Link>
        <span className="nav-title">第二阶段 / 一级简码</span>
      </nav>

      <Level1Training />
    </div>
  );
}

export function Level2Page() {
  return (
    <div className="phase-page">
      <nav className="page-nav">
        <Link to="/" className="back-link">← 返回首页</Link>
        <span className="nav-title">第二阶段 / 二级简码</span>
      </nav>

      <Level2Training charCount={50} />
    </div>
  );
}
