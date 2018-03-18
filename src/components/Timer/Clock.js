import React, {Component} from 'react'
import './Clock.css'

class Clock extends Component {
  render () {
    const {minLeft, secLeft} = this.props
    return (
      <div className="clock">
        <div className="clock__minutes">{minLeft}</div>
        <div className="clock__seconds">{secLeft}</div>
        <div className="clock__pauses"></div>
      </div>
    )
  }
}

export default Clock;