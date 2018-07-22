import React, { Component } from 'react';
import './App.scss';
import ControlPanel from './components/ControlPanel';
import Timer from './components/Timer';

const INIT_MIN = 25;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime: INIT_MIN * 60,
      interval: 0,
      minLeft: INIT_MIN,
      secLeft: 0,
      target: 0,
    };

    this.isPause = false;
    this.max = INIT_MIN * 60;

    this.handleStart = this.handleStart.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 32) {
        // space bar
        if (this.isPause) {
          this.handleStart();
        } else {
          this.handlePause();
        }
      }
    });
  }

  render() {
    const { minLeft, secLeft, interval, target } = this.state;
    return (
      <div className="App">
        <Timer
          minLeft={minLeft}
          secLeft={secLeft}
          interval={interval}
          max={this.max}
          target={target}
        />
        <ControlPanel
          handleStart={this.handleStart}
          handlePause={this.handlePause}
        />
      </div>
    );
  }

  start(remainingTime) {
    let { minLeft, secLeft, interval, target } = this.state;

    if (!this.isPause) {
      remainingTime = INIT_MIN * 60;
      interval = 1;
    }

    clearInterval(this.countDown);
    this.countDown = setInterval(() => {
      remainingTime--;
      minLeft = Math.floor(remainingTime / 60);
      secLeft = remainingTime - minLeft * 60;
      if (remainingTime < 0) {
        remainingTime = 0;
        minLeft = 0;
        secLeft = 0;
        target += 1;
        clearInterval(this.countDown);
      } else {
        interval++;
      }
      this.setState({
        remainingTime,
        minLeft,
        secLeft,
        interval,
        target,
      });
    }, 1000);
  }

  handleStart() {
    this.start(this.state.remainingTime);
    this.isPause = false;
  }

  handlePause() {
    clearInterval(this.countDown);
    this.isPause = true;
  }
}

export default App;
