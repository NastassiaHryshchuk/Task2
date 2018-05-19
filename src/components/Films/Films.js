import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Films.css';

class Films extends Component {
  renderList() {
    return this.props.films.map((film, index) => {
      return (
        <a onClick={() => this.props.dispatch({ type: 'selectFilm', film })} href="#" className={classes.list_item} key={film.id}>
          <img src={film.image} width="400" height="600" alt={film.title} />
          <div className={classes.flex_container}>
            <span className={classes.list_item_title}>{film.title}</span>
            <span className={classes.list_item_release_date}>{film.releasedate}</span>
          </div>
          <span className={classes.list_item_genre}>{film.genre}</span>
        </a>
      );
    });
  }

  render() {
    return (
      <div className={classes.list}>
        {this.renderList()}
      </div>
    );
  }
}

export default connect()(Films);

// import Film from './Film/Film';

// const Films = (props) => props.films.map((film, index) => {
//   return (
//     <Film
//       onVideoSelect={props.onVideoSelect}
//       film={film}
//       image={film.image}
//       title={film.title}
//       releasedate={film.releasedate}
//       genre={film.genre}
//       key={film.id}
//     />);
// });

// const Films = (props) => {
//   return props.films.map((film, index) => <Film
//     title={film.title}
//     releasedate={film.releasedate}
//     genre={film.genre}
//     key={film.id} />)
// }

// export default Films;
