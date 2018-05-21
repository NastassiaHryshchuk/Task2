import axios from 'axios';

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

const x = (films) => {
  return [{
    id: films.id,
    image: films.image,
    title: films.title,
    releasedate: films.releasedate,
    genre: films.genre,
    runtime: films.runtime,
    overview: films.overview,
  }];
};

export const searchByTitle = (title) => {
  const url = `http://react-cdp-api.herokuapp.com/movies?searchBy=title&search=${title}`;
  const request = axios.get(url);
  return {
    type: 'xxx',
    payload: request,
  };
};

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
    case 'xxx':
      state = {
        ...state,
        films: x(action),
      };
      break;
  }
  return state;
};

export default reducer;

