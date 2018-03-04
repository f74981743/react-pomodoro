import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {select} from 'd3-selection'
import {interpolate} from 'd3-interpolate'
import {pie, arc} from 'd3-shape'
import './process.css';

class Process extends Component {
  constructor (props) {
    super(props)
    this.state = {
      width: 500,
      height: 500,
      weight: 4
    }
  }
  getRadius () {
    return Math.min(this.state.width, this.state.height) / 2
  }
  getValues () {
    const {interval, max} = this.props
    return [
      interval,
      (max - interval) || 0
    ]
  }
  update () {
    setTimeout(() => {
      this.root
      .selectAll('path')
      .data(this.pie(this.getValues()))
      .attr('d', this.arc)
      .classed('b-process__value', d => d.index === 0)
      .classed('b-process__bar', d => d.index !== 0)
      .each(function (d) { this.$angle = d; })
    }, 500)
  }
  componentWillReceiveProps() {
    this.update()
  }
  componentDidMount () {
    const self = this
    const svg = ReactDOM.findDOMNode(this.refs.svg)
    
    this.arcTween = function (angle) {
      const i = interpolate(this.$angle, angle)
      this.$angle = i(0)
      return t => self.arc(i(t))
    }
    
    this.root = select(svg)
      .append('g')
      .attr('transform', `translate(${this.state.width / 2}, ${this.state.height / 2})`)
    
    this.pie = pie()
      .sort(null)
      .value(d => d)
    
    this.arc = arc()
      .outerRadius(this.getRadius())
      .innerRadius(this.getRadius() - this.state.weight)
      .padAngle(0.03)
      .cornerRadius(this.state.weight)
    
    this.root
      .selectAll('path')
      .data(this.pie(this.getValues()))
      .enter()
      .append('path')
      .attr('d', this.arc)
      .classed('process__value', d => d.index === 0)
      .classed('process__bar', d => d.index !== 0)
      .each(function (d) { this.$angle = d; }) // eslint-disable-line func-names

  }
  render () {
    return (
      <svg className="process" ref="svg"></svg>
    )
  }
}

export default Process