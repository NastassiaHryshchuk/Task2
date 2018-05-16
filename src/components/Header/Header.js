import React, { Component } from 'react';
import classes from './Header.css';
import Logo from '../Logo/Logo';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      isChecked: '',
    };
  }

  toggleChange = (event) => {
    this.setState({
      isChecked: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Hello!');
  }

  render() {
    return (
      <header className={classes.header}>
        <div className={classes.wrap}>
          <Logo />
          <h2>Find your move</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Search here..."
              onChange={event => this.setState({ term: event.target.value })}
              required />
            <div className={classes.flex_container}>
              <span className={classes.span_search}>Search by</span>
              <input
                type="radio"
                id="titleChoice"
                name="film"
                value="title"
                checked={this.state.isChecked === 'title'}
                onChange={this.toggleChange}
                className={classes.toggle}
              />
              <label htmlFor="titleChoice" className={classes.btn}>title</label>
              <input
                type="radio"
                id="directorChoice"
                name="film"
                value="director"
                checked={this.state.isChecked === 'director'}
                onChange={this.toggleChange}
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
}

export default Header;
