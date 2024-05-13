import React, { useState } from 'react';
import './Switch.css';

const Switch = ({ checked, onChange, disabled }) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleToggle = () => {
    if (disabled) {
      return;
    }
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <button
      className={`switch ${isChecked ? 'switch-on' : 'switch-off'} ${disabled ? 'switch-disabled' : ''}`}
      onClick={handleToggle}
      disabled={disabled}
      aria-checked={isChecked}
      role="switch"
    >
      <div className="switch-handle"></div>
    </button>
  );
};

export default Switch;