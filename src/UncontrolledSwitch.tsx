import React, { useState, FC, CSSProperties } from 'react';
import './Switch.css';

interface UncontrolledSwitchProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  onText?: string;
  offText?: string;
  style?: CSSProperties;
}

const UncontrolledSwitch: FC<UncontrolledSwitchProps> = ({
  defaultChecked = false,
  onChange,
  disabled,
  onText = 'On',
  offText = 'Off',
  style
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);

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
    <div className='bg-style' style={style}>
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

export default UncontrolledSwitch;
