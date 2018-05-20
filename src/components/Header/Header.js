import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../Logo/Logo';
import Detail from '../Detail/Detail';
import classes from './Header.css';

class Header extends Component {
  render() {
    if (!this.props.crt) {
      return (
        <header className={classes.header}>
          <div className={classes.wrap}>
            <Logo />
            <h2>Find your move</h2>
            <form >
              <input
                type="text"
                placeholder="Search here..."
                // onChange={event => this.setState({ term: event.target.value })}
                required />
              <div className={classes.flex_container}>
                <span className={classes.span_search}>Search by</span>
                <input
                  type="radio"
                  id="titleChoice"
                  name="film"
                  value="title"
                  // checked={this.state.isChecked === 'title'}
                  // onChange={this.toggleChange}
                  className={classes.toggle}
                />
                <label htmlFor="titleChoice" className={classes.btn}>title</label>
                <input
                  type="radio"
                  id="directorChoice"
                  name="film"
                  value="director"
                  // checked={this.state.isChecked === 'director'}
                  // onChange={this.toggleChange}
                  className={classes.toggle}
                />
                <label htmlFor="directorChoice" className={classes.btn}>director</label>
                <button type="submit" className={classes.button_search}>Search</button>
              </div>
            </form>
          </div>
        </header>
      );
    }
    return (
      <Detail />
    );
  }
}

const mapStateToProps = state => {
  return {
    crt: state.currentFilm,
  };
};

export default connect(mapStateToProps)(Header);

// onSubmit={this.handleSubmit}

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

// handleSubmit(event) {
//   event.preventDefault();
//   alert('Hello!');
// }
