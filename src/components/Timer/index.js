import React, { Component } from 'react';
import Clock from './Clock.js'
import Process from './Process.js'
import './index.css';

class Timer extends Component {
  render () {
    const {minLeft, secLeft, interval, max} = this.props
    return (
      <div className="timer">
        <Clock minLeft={minLeft} secLeft={secLeft} />
        <Process interval={interval} max={max} />
      </div>
    )
  }
}

export default Timer
