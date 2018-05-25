import React, { Component } from 'react';
import classes from './FilterRadio.css';

class FilterRadio extends Component {
  render() {
    return (
      <span>
        <input
          type={this.props.type}
          id={this.props.id}
          value={this.props.value}
          className={classes.toggle_sub}
          />
        <label htmlFor={this.props.htmlFor} className={classes.ancore_sub}>{this.props.title}</label>
      </span>
    );
  }
}

export default FilterRadio;
