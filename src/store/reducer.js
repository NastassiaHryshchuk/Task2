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
      releasedate: film.release_date,
      genre: film.genres.join(', '),
    };
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'dataLoaded':
      state = {
        ...state,
        films: converFilms(action),
      };
      break;
    case 'test':
      break;
  }

  return state;
};

export default reducer;
