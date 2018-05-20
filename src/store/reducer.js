const initialState = {
  films: [
  ],
  currentFilm: null,
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

const filmDescription = (selectedFilm) => {
  return {
    id: selectedFilm.film.id,
    image: selectedFilm.film.image,
    title: selectedFilm.film.title,
    releasedate: selectedFilm.film.releasedate,
    genre: selectedFilm.film.genre,
    runtime: selectedFilm.film.runtime,
    overview: selectedFilm.film.overview,
  };
};

// const deleteFilm = (selectedFilm) => {
//   return [{
//     id: selectedFilm.film.id,
//     image: selectedFilm.film.image,
//     title: selectedFilm.film.title,
//     releasedate: selectedFilm.film.releasedate,
//     genre: selectedFilm.film.genre,
//     runtime: selectedFilm.film.runtime,
//     overview: selectedFilm.film.overview,
//   }];
// };

// const deleteFilm = (selectedFilm) => {
//   return films.filter(xxx => xxx.id !== selectedFilm.film.id);
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'dataLoaded':
      state = {
        ...state,
        films: converFilms(action),
      };
      break;
    case 'selectFilm':
      state = {
        ...state,
        // films: [...state.films.filter(film => film.id !== action.film.id)],
        currentFilm: filmDescription(action),
      };
      break;
  }
  return state;
};

export default reducer;

