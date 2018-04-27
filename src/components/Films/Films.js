import React from 'react';
import Film from './Film/Film';
import './Films.css';

const films = (props) = props.films.map( (film, index) => {
  return <Film 
    title={film.title} 
    releasedate={film.releasedate} 
    genre={film.genre}
    key={film.id} />
});

export default films;
