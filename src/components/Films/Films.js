import React from 'react';
import Film from './Film/Film';

const films = (props) => props.films.map((film, index) => {
  return <Film title={film.title} releasedate={film.releasedate} genre={film.genre} key={film.id} />;
});

export default films;
