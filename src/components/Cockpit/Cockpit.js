import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { xxx } from '../../store/reducer';
import FilterRadio from './FilterRadio/FilterRadio';
import classes from './Cockpit.css';

// fetch('http://react-cdp-api.herokuapp.com/movies?limit=2&sortBy=release_date&sortOrder=asc')


class Cockpit extends Component {
  render() {
    return (
      <div className={classes.wrap}>
        <div className={classes.container}>
          <div className={classes.flex_container}>
            <span className={classes.results_count}>{this.props.moves.length} movies found</span>
            <form className={classes.results_filter}>
              <span>Sort by</span>

              <FilterRadio
                type="radio"
                id="releasedateChoice"
                name="film"
                value="release date"
                htmlFor="releasedateChoice"
                title="release date" />

              <FilterRadio
                type="radio"
                id="raitingChoice"
                name="film"
                value="raiting"
                htmlFor="raitingChoice"
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
  return bindActionCreators({ xxx }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cockpit);


// input
// type="radio"
// id="releasedateChoice"
// name="film"
// value="release date"
// className={classes.toggle_sub}

// label htmlFor="releasedateChoice" className={classes.ancore_sub}>release date</label
