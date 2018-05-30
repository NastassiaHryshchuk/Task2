import React, { Component } from 'react';
import classes from './Filter.css';

class Filter extends Component {
  render() {
    return (
      <span>
        <button onClick={this.props.onClick} className={classes.ancore_sub}>{this.props.title}</button>
      </span>
    );
  }
}

export default Filter;

// type={this.props.type}
// id={this.props.id}
// value={this.props.value}
// className={classes.toggle_sub}
// />
// <label htmlFor={this.props.htmlFor} className={classes.ancore_sub}>{this.props.title}</label>
