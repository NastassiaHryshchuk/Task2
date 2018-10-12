import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchFilm } from '../../store/reducer';
import Logo from '../Logo/Logo';
import classes from './Detail.css';

class Detail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchFilm(id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const { id } = this.props.match.params;
      this.props.fetchFilm(id);
    }
  }

  render() {
    if (!this.props.crt) {
      return <div />;
    }
    return (
      <div className={classes.detail}>
        <div className={classes.wrap}>
          <div className={classes.flex_container}>
            <Logo />
            <Link to="/" className={classes.button_search}>Search</Link>
          </div>

          <div className={classes.flex_container}>
            <img src={this.props.crt.image} width="300" height="450" alt={this.props.crt.title} />
            <div className={classes.description}>
              <span className={classes.title}> {this.props.crt.title} </span>
              <div className={classes.mt}>
                <span className={classes.releasedate}> {this.props.crt.releasedate} </span>
                <span className={classes.runtime}>{this.props.crt.runtime} min</span>
              </div>
              <p className={classes.overview}> {this.props.crt.overview} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Detail.propTypes = {
  fetchFilm: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.object,
  }),
  crt: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    releasedate: PropTypes.number,
    genre: PropTypes.array,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }),
};

const mapStateToProps = state => {
  return {
    crt: state.currentFilm,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchFilm }, dispatch);
};

function loadData(store) {
  return store.dispatch(fetchFilm());
}

export default {
  loadData,
  component: connect(mapStateToProps, mapDispatchToProps)(Detail),
};

// Detail.defaultProps = { film: {} };
