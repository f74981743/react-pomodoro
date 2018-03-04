import React, { Component } from 'react'

class ControlPanel extends Component {
  render() {
    return (
      <div className="control-panel">
        <a onClick={e => {this.props.handleStart()}}>Start</a>
        <a onClick={this.props.handlePause}>Pause</a>
      </div>
    )
  }
}

export default ControlPanel