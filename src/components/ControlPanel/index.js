import React, { Component } from 'react';
import './index.scss';

class ControlPanel extends Component {
  render() {
    return (
      <div className="control-panel">
        <div className="container">
          <a
            onClick={e => {
              this.props.handleStart();
            }}
          >
            Start
          </a>
          <a onClick={this.props.handlePause}>Pause</a>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
