import React, { Component } from 'react';
import './Clock.scss';

class Clock extends Component {
  render() {
    const { minLeft, secLeft } = this.props;
    return (
      <div className="clock">
        <div className="clock__minutes"> {minLeft} </div>
        <div className="clock__seconds"> {secLeft} </div>
        <div className="clock__pauses" />
      </div>
    );
  }
}

export default Clock;
