import React, {Component} from 'react'
import './Clock.css'

class Clock extends Component {
  render () {
    const {minLeft, secLeft} = this.props
    return (
      <div className="clock">
        <div className="clock__minutes">{minLeft}</div>
        <divs className="clock__seconds">{secLeft}</divs>
        <div className="clock__pauses">11</div>
      </div>
    )
  }
}

export default Clock;