import React, { useState } from 'react';
import './App.css'; 
import Switch from './Switch'; 
import UncontrolledSwitch from './UncontrolledSwitch'; 

const App = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="app-container">
      <h1>Switch Component Demo</h1>
      <div className="section-label">
        <label>
          <input
            type="checkbox"
            className="checkbox-input"
            checked={isDisabled}
            onChange={(e) => setIsDisabled(e.target.checked)}
          />
          Disable Switches
        </label>
      </div>
      <div className="section">
        <h2 className="section-header">Controlled Switch</h2>
        <p>State outside the component controls the switch.</p>
        <Switch
          checked={isToggled}
          onChange={(checked) => setIsToggled(checked)}
          disabled={isDisabled}
        />
      </div>
      <div className="section">
        <h2 className="section-header">Uncontrolled Switch</h2>
        <p>Component maintains its own state internally.</p>
        <UncontrolledSwitch
          defaultChecked={false}
          onChange={(checked) => console.log(`Switch is now ${checked ? 'ON' : 'OFF'}`)}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
};

export default App;
