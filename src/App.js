import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      remainingTime: 1 * 60,
      interval: 0,
      max: 1 * 60,
      minLeft: 1,
      secLeft: 0
    }
  }
  start (remainingTime) {
    var minLeft = 0
    var secLeft = 0
    var interval = 0
    clearInterval(this.countDown)
    this.countDown = setInterval(() => {
      remainingTime--
      minLeft = Math.floor(remainingTime / 60)
      secLeft = remainingTime - minLeft * 60
      interval++
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
  componentDidMount () {
    // this.start(this.state.remainingTime)
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
        <button onClick={this.handleStart.bind(this)}>Start</button>
        <button onClick={this.handlePause.bind(this)}>Pause</button>
      </div>
    );
  }
}

export default App;
