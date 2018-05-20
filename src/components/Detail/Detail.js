import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../Logo/Logo';
import classes from './Detail.css';

class Detail extends Component {
  render() {
    if (!this.props.crt) {
      return <div />;
    }
    return (
      <div className={classes.detail}>
        <div className={classes.wrap}>
          <div className={classes.flex_container}>
            <Logo />
            <button type="submit" className={classes.button_search}>Search</button>
          </div>

          <div className={classes.flex_container}>
            <img src={this.props.crt.image} width="300" height="450" alt={this.props.crt.title} />
            <div className={classes.description}>
              <span className={classes.title}> {this.props.crt.title} </span>
              <div className={classes.xxx}>
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

const mapStateToProps = state => {
  return {
    crt: state.currentFilm,
  };
};

export default connect(mapStateToProps)(Detail);

// Detail.defaultProps = { film: {} };
