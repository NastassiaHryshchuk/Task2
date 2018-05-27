import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchByTitleOrGenres } from '../../store/reducer';
import Logo from '../Logo/Logo';
import classes from './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      isChecked: 'title',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.searchByTitleOrGenres(this.state.term, this.state.isChecked);
    this.setState({ term: '' });
  }

  toggleChange = (event) => {
    this.setState({
      isChecked: event.target.value,
    });
  }

  render() {
    return (
      <header className={classes.header}>
        <div className={classes.wrap}>
          <Logo />
          <h2>Find your move</h2>
          <form onSubmit={this.onFormSubmit}>
            <input
              placeholder="Search here..."
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <div className={classes.flex_container}>
              <span className={classes.span_search}>Search by</span>
              <input
                type="radio"
                id="titleChoice"
                value="title"
                checked={this.state.isChecked === 'title'}
                onChange={this.toggleChange}
                className={classes.toggle}
              />
              <label htmlFor="titleChoice" className={classes.btn}>title</label>
              <input
                type="radio"
                id="genresChoice"
                value="genres"
                checked={this.state.isChecked === 'genres'}
                onChange={this.toggleChange}
                className={classes.toggle}
              />
              <label htmlFor="genresChoice" className={classes.btn}>genres</label>
              <button type="submit" className={classes.button_search}>Search</button>
            </div>
          </form>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchByTitleOrGenres }, dispatch);
};

export default connect(null, mapDispatchToProps)(Search);


// constructor(props) {
//   super(props);
//   this.state = {
//     term: '',
//     isChecked: '',
//   };
// }

// toggleChange = (event) => {
//   this.setState({
//     isChecked: event.target.value,
//   });
// }

