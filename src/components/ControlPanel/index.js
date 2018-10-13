import React, { PureComponent } from 'react';
import './index.scss';

class ControlPanel extends PureComponent {
  render() {
    const { handleStart, handlePause } = this.props;
    return (
      <div className="control-panel">
        <div className="container">
          <a className="control-panel__start-btn" onClick={handleStart}>
            Start
          </a>
          <a className="control-panel__pause-btn" onClick={handlePause}>
            Pause
          </a>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
