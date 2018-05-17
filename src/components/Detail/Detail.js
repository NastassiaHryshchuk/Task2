import React from 'react';

const Detail = (props) => {
  return (
    <div>
      <h1> {props.value} </h1>
      <p> {props.films.length} </p>
    </div>
  );
};

export default Detail;

