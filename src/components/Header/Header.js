import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../../components/Search/Search';
import Detail from '../Detail/Detail';

class Header extends Component {
  render() {
    if (!this.props.crt) {
      return <Search />;
    }
    return <Detail />;
  }
}

const mapStateToProps = state => {
  return {
    crt: state.currentFilm,
  };
};

export default connect(mapStateToProps)(Header);
