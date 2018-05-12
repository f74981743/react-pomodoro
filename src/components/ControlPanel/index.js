import React, { PureComponent } from 'react';
import './index.scss';

class ControlPanel extends PureComponent {
  render() {
    const { handleStart, handlePause } = this.props;
    return (
      <div className="control-panel">
        <div className="container">
          <a onClick={handleStart}>Start</a>
          <a onClick={handlePause}>Pause</a>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
