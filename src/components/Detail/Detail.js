import React from 'react';

const Detail = (props) => {
  return (
    <div>
      <img src={props.film.image} width="400" height="600" alt={props.film.title} />
      <div> {props.film.title} </div>
      <div >{props.film.releasedate}</div>
      <div >{props.film.runtime} min</div>
      <div >{props.film.overview}</div>
    </div>
  );
};

Detail.defaultProps = { film: {} };

export default Detail;

