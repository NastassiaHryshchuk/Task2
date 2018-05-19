import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Cockpit.css';

// fetch('http://react-cdp-api.herokuapp.com/movies?limit=2&sortBy=release_date&sortOrder=asc')


class Cockpit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: '',
    };
  }

  toggleChange = (event) => {
    this.setState({
      isChecked: event.target.value,
    });
  }

  render() {
    return (
      <div className={classes.wrap}>
        <div className={classes.container}>
          <div className={classes.flex_container}>
            <span className={classes.results_count}>{this.props.moves.length} movies found</span>
            <form className={classes.results_filter}>
              <span>Sort by</span>
              <input
                type="radio"
                id="releasedateChoice"
                name="film"
                value="release date"
                checked={this.state.isChecked === 'release date'}
                onChange={this.toggleChange}
                className={classes.toggle_sub}
                />
              <label htmlFor="releasedateChoice" className={classes.ancore_sub}>release date</label>
              <input
                type="radio"
                id="raitingChoice"
                name="film"
                value="raiting"
                checked={this.state.isChecked === 'raiting'}
                onChange={this.toggleChange}
                className={classes.toggle_sub}
              />
              <label htmlFor="raitingChoice" className={classes.ancore_sub}>raiting</label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// export default Cockpit;
const mapStateToProps = state => {
  return {
    moves: state.films,
  };
};

export default connect(mapStateToProps)(Cockpit);
