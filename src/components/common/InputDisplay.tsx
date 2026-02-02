
import './InputDisplay.css';

interface InputDisplayProps {
  buffer: string;
  maxLength?: number;
}

export function InputDisplay({ buffer, maxLength = 4 }: InputDisplayProps) {
  const displayChars = Array(maxLength).fill('').map((_, i) => buffer[i] || '');

  return (
    <div className="input-display">
      {displayChars.map((char, i) => (
        <span
          key={i}
          className={`input-char ${char ? 'filled' : 'empty'} ${i === buffer.length ? 'cursor' : ''}`}
        >
          {char || '_'}
        </span>
      ))}
    </div>
  );
}
