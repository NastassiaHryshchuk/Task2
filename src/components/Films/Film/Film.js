import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Film.css';

class Film extends Component {
  render() {
    return (
      <a href="#" className={classes.list_item}>
        <img src={this.props.image} width="400" height="600" alt={this.props.title} />
        <div className={classes.flex_container}>
          <span className={classes.list_item_title}>{this.props.title}</span>
          <span className={classes.list_item_release_date}>{this.props.releasedate}</span>
        </div>
        <span className={classes.list_item_genre}>{this.props.genre}</span>
      </a>
    );
  }
}

Film.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  releasedate: PropTypes.string,
  genre: PropTypes.string,
};

export default Film;
