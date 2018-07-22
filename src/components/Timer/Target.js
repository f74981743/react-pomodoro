import { interpolate } from 'd3-interpolate';
import { select } from 'd3-selection';
import { arc, pie } from 'd3-shape';
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './target.scss';

class Target extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 500,
      height: 500,
      weight: 4,
    };
    this.GOAL = 8;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!_.isEqual(this.props, nextProps)) return true;
    return false;
  }

  componentWillReceiveProps() {
    this.update();
  }

  componentDidMount() {
    const self = this;
    const svg = ReactDOM.findDOMNode(this.refs.svg);

    this.arcTween = angle => {
      const i = interpolate(this.$angle, angle);
      this.$angle = i(0);
      return t => self.arc(i(t));
    };

    this.root = select(svg)
      .append('g')
      .attr(
        'transform',
        `translate(${this.state.width / 2}, ${this.state.height / 2})`
      );

    this.pie = pie()
      .sort(null)
      .value(d => d.value);

    this.arc = arc()
      .outerRadius(this.getRadius())
      .innerRadius(this.getRadius() - this.state.weight)
      .padAngle(0.03)
      .cornerRadius(this.state.weight);

    this.root
      .selectAll('path')
      .data(this.pie(this.getValues()))
      .enter()
      .append('path')
      .attr('d', this.arc)
      .classed('target__item', true)
      .each(d => {
        this.$angle = d;
      });
  }

  render() {
    return <svg className="target" ref="svg" />;
  }

  getRadius() {
    return Math.min(this.state.width, this.state.height) / 2;
  }

  getValues() {
    const items = new Array(this.GOAL).fill();
    return items.map((item, index) => {
      return {
        index,
        value: 1,
      };
    });
  }

  update() {
    const { target } = this.props;
    setTimeout(() => {
      this.root
        .selectAll('path')
        .data(this.pie(this.getValues()))
        .attr('d', this.arc)
        .classed('target__item--success', d => d.index + 1 <= target)
        .classed('target__item', d => d.index + 1 !== target)
        .each(d => {
          this.$angle = d;
        });
    }, 500);
  }
}

export default Target;
