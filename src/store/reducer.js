const initialState = {
  films: [
  ],
  currentFilm: {

  },
};

const converFilms = (rawFilms) => {
  return rawFilms.data.data.map((film) => {
    return {
      id: film.id,
      image: film.poster_path,
      title: film.title,
      releasedate: parseInt(film.release_date, 10),
      genre: film.genres.join(', '),
      runtime: film.runtime,
      overview: film.overview,
    };
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'dataLoaded':
      state = {
        ...state,
        films: converFilms(action),
        currentFilm: converFilms(action)[0],
      };
      break;
    case 'test':
      break;
  }

  return state;
};

export default reducer;
