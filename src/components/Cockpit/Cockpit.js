import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sort } from '../../store/reducer';
import Filter from './Filter/Filter';
import classes from './Cockpit.css';

class Cockpit extends Component {
  constructor(props) {
    super(props);
    this.onSortByReleaseDate = this.onSortByReleaseDate.bind(this);
    this.onSortByRaiting = this.onSortByRaiting.bind(this);
  }

  onSortByReleaseDate(event) {
    event.preventDefault();
    this.props.sort('release_date');
  }

  onSortByRaiting(event) {
    event.preventDefault();
    this.props.sort('vote_average');
  }

  render() {
    return (
      <div className={classes.wrap}>
        <div className={classes.container}>
          <div className={classes.flex_container}>
            <span className={classes.results_count}>{this.props.moves.length} movies found</span>
            <form className={classes.results_filter}>
              <span>Sort by</span>
              <Filter
                onClick={this.onSortByReleaseDate}
                title="release date" />
              <Filter
                onClick={this.onSortByRaiting}
                title="raiting" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    moves: state.films,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ sort }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cockpit);
