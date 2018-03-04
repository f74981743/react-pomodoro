import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer'
import ControlPanel from './components/ControlPanel'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      remainingTime: 0.25 * 60,
      interval: 0,
      max: 0.25 * 60,
      minLeft: 0,
      secLeft: 15
    }
  }
  start (remainingTime) {
    var minLeft = this.state.minLeft
    var secLeft = this.state.secLeft
    var interval = this.state.interval
    clearInterval(this.countDown)
    this.countDown = setInterval(() => {
      remainingTime--
      minLeft = Math.floor(remainingTime / 60)
      secLeft = remainingTime - minLeft * 60
      if (remainingTime < 0) {
        remainingTime = 0
        minLeft = 0
        secLeft = 0
        clearInterval(this.countDown)
      } else {
        interval++
      }
      this.setState({
        remainingTime,
        minLeft,
        secLeft,
        interval
      })
    }, 1000)
  }
  handleStart () {
    this.start(this.state.remainingTime)
  }
  handlePause () {
    clearInterval(this.countDown)
  }
  render () {
    return (
      <div className="App">
        <Timer
          minLeft={this.state.minLeft}
          secLeft={this.state.secLeft}
          interval={this.state.interval}
          max={this.state.max}
        />
        <ControlPanel handleStart={this.handleStart.bind(this)} handlePause={this.handlePause.bind(this)} />
      </div>
    );
  }
}

export default App;
