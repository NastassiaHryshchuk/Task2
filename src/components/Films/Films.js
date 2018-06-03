import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Films.css';

class Films extends Component {
  renderList() {
    return this.props.films.map((film, index) => {
      return (
        <Link onClick={() => this.props.dispatch({ type: 'selectFilm', film })} to={`/film/${film.id}`} className={classes.list_item} key={film.id}>
          <img src={film.image} width="400" height="600" alt={film.title} />
          <div className={classes.flex_container}>
            <span className={classes.list_item_title}>{film.title}</span>
            <span className={classes.list_item_release_date}>{film.releasedate}</span>
          </div>
          <span className={classes.list_item_genre}>{film.genre}</span>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className={classes.list}>
        {this.renderList()}
      </div>
    );
  }
}

export default connect()(Films);


// {`/film/${film.id}`}
