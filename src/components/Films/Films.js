import React from 'react';
import Film from './Film/Film';

const Films = (props) => props.films.map((film, index) => {
  return <Film title={film.title} releasedate={film.releasedate} genre={film.genre} key={film.id} />;
});

export default Films;
