import _ from 'lodash';
import React, { Component } from 'react';
import './Heatmap.scss';

const DAYS_LIMIT = 30;

class Heatmap extends Component {
  constructor() {
    super();
    this.state = {
      dateAry: [],
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!_.isEqual(this.props, nextProps) || !_.isEqual(this.state, nextState))
      return true;
    return false;
  }

  componentDidMount() {
    const dateAry = [];
    let today = new Date();
    let priorDate = new Date().setDate(today.getDate() - DAYS_LIMIT);
    dateAry.push(today.toLocaleDateString());
    for (var i = 1; i < DAYS_LIMIT; i++) {
      let priorDate = new Date().setDate(today.getDate() - i);
      dateAry.push(new Date(priorDate).toLocaleDateString());
    }

    this.setState({
      dateAry: dateAry,
    });
  }

  render() {
    const { dateAry } = this.state;
    return (
      <div
        ref={heatmap => {
          this.heatmap = heatmap;
        }}
        className="heatmap"
      >
        {dateAry.map((item, index) => (
          <div key={index} className="heatmap__item" />
        ))}
      </div>
    );
  }
}

export default Heatmap;
