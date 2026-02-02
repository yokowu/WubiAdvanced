import './CharDisplay.css';

interface CharDisplayProps {
  char: string;
  code?: string;
  showCode?: boolean;
  size?: 'small' | 'medium' | 'large';
  status?: 'pending' | 'correct' | 'wrong' | 'current';
}

export function CharDisplay({
  char,
  code,
  showCode = false,
  size = 'medium',
  status = 'pending',
}: CharDisplayProps) {
  return (
    <div className={`char-display ${size} ${status}`}>
      <span className="char">{char}</span>
      {showCode && code && <span className="code">{code}</span>}
    </div>
  );
}
