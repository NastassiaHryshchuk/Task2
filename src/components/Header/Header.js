import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from '../../components/Search/Search';
import Detail from '../Detail/Detail';

class Header extends Component {
  render() {
    if (!this.props.crt) {
      return <Search />;
    }
    return <Route path="/film/:id" component={Detail} />;
  }
}

const mapStateToProps = state => {
  return {
    crt: state.currentFilm,
  };
};

export default connect(mapStateToProps)(Header);

// <Route path="/film/:id" component={Detail} />;
