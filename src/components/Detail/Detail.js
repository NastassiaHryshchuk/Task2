import React from 'react';

const Detail = (props) => {
  // debugger

  if (props.films.length === 0) {
    return <div />;
  }

  return (
    <div>
      <img src={props.films[0].image} width="400" height="600" alt={props.films[0].title} />
      <div> {props.films[0].title} </div>
      <div >{props.films[0].releasedate}</div>
      <div >{props.films[0].runtime} min</div>
      <div >{props.films[0].overview}</div>
    </div>
  );
};

export default Detail;

