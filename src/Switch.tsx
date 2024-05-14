import React, { useState, useEffect, FC, CSSProperties } from 'react';
import './Switch.css';

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  onText?: string;
  offText?: string;
  style?: CSSProperties;
}

const Switch: FC<SwitchProps> = ({
  checked = false,
  onChange,
  disabled = false,
  onText = 'ON',
  offText = 'OFF',
  style
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleToggle = () => {
    if (!disabled) {
      const newChecked = !isChecked;
      setIsChecked(newChecked);
      if (onChange) {
        onChange(newChecked);
      }
    }
  };

  return (
    <div style={style}>
      <button
        className={`switch ${isChecked ? 'switch-on' : 'switch-off'} ${disabled ? 'switch-disabled' : ''}`}
        onClick={handleToggle}
        disabled={disabled}
        aria-checked={isChecked}
        role="switch"
      >
        {isChecked ? onText : offText}
        <div className="switch-handle"></div>
      </button>
    </div>
  );
};

export default Switch;
