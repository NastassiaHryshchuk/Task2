import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';

import { bindActionCreators } from 'redux';
import { xxx, searchByTitleOrGenres } from '../../store/reducer';
import classes from './Films.css';

class Films extends Component {
  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    // this.props.searchByTitleOrGenres(values.search, values.searchBy);
    console.log(values.searchBy);
    console.log(values.search);
  }

  renderList() {
    return this.props.films.map((film, index) => {
      return (
        <Link onClick={() => this.props.xxx(film)} to={`/film/${film.id}`} className={classes.list_item} key={film.id}>
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ xxx, searchByTitleOrGenres }, dispatch);
};

export default connect(null, mapDispatchToProps)(Films);

// export default connect()(Films);


// <Link onClick={() => this.props.dispatch({ type: 'selectFilm', film })} to={`/film/${film.id}`} className=
// /movies?searchBy=title&search=10


// <Link onClick={() => this.props.xxx(film)} to={`/film/${film.id}`} className={classes.list_item} key={film.id}>

// to={`/film/${film.id}`}
