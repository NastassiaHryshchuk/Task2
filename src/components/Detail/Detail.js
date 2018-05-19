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

// const Detail = (props) => {
//   return (
//     <div>
//       <img src={props.film.image} width="400" height="600" alt={props.film.title} />
//       <div> {props.film.title} </div>
//       <div >{props.film.releasedate}</div>
//       <div >{props.film.runtime} min</div>
//       <div >{props.film.overview}</div>
//     </div>
//   );
// };


// Detail.defaultProps = { film: {} };

{/* <div className={classes.detail}>
<Logo />
<img src={this.props.crt.image} width="300" height="450" alt={this.props.crt.title} />
<div className={classes.flex_container}>
  <span className={classes.title}> {this.props.crt.title} </span>
  <span className={classes.releasedate}>{this.props.crt.releasedate}</span>
</div>
<span className={classes.runtime}>{this.props.crt.runtime} min</span>
<span className={classes.overview}>{this.props.crt.overview}</span>
</div> */}