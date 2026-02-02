
import { KEYBOARD_LAYOUT, WUBI_KEYS, FINGER_MAP } from '../../data/radicals';
import './Keyboard.css';

interface KeyboardProps {
  highlightKeys?: string[];
  showRadicals?: boolean;
  showFingers?: boolean;
  pressedKey?: string;
}

export function Keyboard({
  highlightKeys = [],
  showRadicals = false,
  showFingers = false,
  pressedKey,
}: KeyboardProps) {
  const getKeyInfo = (key: string) => {
    return WUBI_KEYS.find((k) => k.key === key);
  };

  const getKeyClassName = (key: string) => {
    const classes = ['keyboard-key'];

    if (highlightKeys.includes(key)) {
      classes.push('highlight');
    }

    if (pressedKey?.toUpperCase() === key) {
      classes.push('pressed');
    }

    // 根据区域添加颜色类
    const keyInfo = getKeyInfo(key);
    if (keyInfo) {
      classes.push(`zone-${keyInfo.zone}`);
    }

    return classes.join(' ');
  };

  return (
    <div className="keyboard">
      {KEYBOARD_LAYOUT.map((row, rowIndex) => (
        <div key={rowIndex} className={`keyboard-row row-${rowIndex}`}>
          {row.map((key) => {
            const keyInfo = getKeyInfo(key);
            return (
              <div key={key} className={getKeyClassName(key)}>
                <span className="key-letter">{key}</span>
                {showRadicals && keyInfo && (
                  <span className="key-radical">{keyInfo.keyName}</span>
                )}
                {showFingers && (
                  <span className="key-finger">{FINGER_MAP[key]}</span>
                )}
              </div>
            );
          })}
        </div>
      ))}
      <div className="keyboard-row space-row">
        <div className={`keyboard-key space-key ${pressedKey === ' ' ? 'pressed' : ''}`}>
          空格
        </div>
      </div>
    </div>
  );
}
