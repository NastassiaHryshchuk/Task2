import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { bindActionCreators } from 'redux';
import { selectFilmOnClick, searchByTitleOrGenres } from '../../store/reducer';
import classes from './Films.css';

class Films extends Component {
  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    this.props.searchByTitleOrGenres(values.search, values.searchBy);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      const values = queryString.parse(this.props.location.search);
      this.props.searchByTitleOrGenres(values.search, values.searchBy);
    }
  }

  renderList() {
    return this.props.moves.map((film) => {
      return (
        <Link to={`/film/${film.id}`} className={classes.list_item} key={film.id}>
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
      <div className={classes.wrap}>
        <div className={classes.list}>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

Films.propTypes = {
  searchByTitleOrGenres: PropTypes.func,
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
  moves: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => {
  return {
    moves: (state.films || []),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectFilmOnClick, searchByTitleOrGenres }, dispatch);
};

function loadData(store, location) {
  return store.dispatch(searchByTitleOrGenres(location.search, location.searchBy));
}

export default {
  loadData,
  component: connect(mapStateToProps, mapDispatchToProps)(Films),
};
