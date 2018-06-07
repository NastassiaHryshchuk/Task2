import axios from 'axios';

const initialState = {
  films: [],
  currentFilm: null,
};

// Movies load from the server when App load

export const converFilms = (rawFilms) => {
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

// Movie description appears when movie card clicked

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

// Movies search by title in search bar

export const showSearchFilms = (films) => {
  return {
    type: 'searchFilms',
    payload: films.data,
  };
};

export const searchByTitleOrGenres = (search, filter) => (dispatch) => {
  const url = `http://react-cdp-api.herokuapp.com/movies?searchBy=${filter}&search=${search}`;
  const request = axios.get(url)
    .then(resp => dispatch(showSearchFilms(resp)));
};

export const conver = (rawFilms) => {
  return rawFilms.payload.data.map((film) => {
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

// Movies filter by release date and by raiting

export const showSortFilms = (films) => {
  return {
    type: 'sortByFilter',
    payload: films.data,
  };
};

export const sort = (filter) => (dispatch) => {
  const url = `http://react-cdp-api.herokuapp.com/movies?sortBy=${filter}&sortOrder=desc`;
  const request = axios.get(url)
    .then(resp => dispatch(showSortFilms(resp)));
};

// fetchFilm looks up the movie using the id parsed from
// the URL's pathname.

export const showfetchFilm = (film) => {
  return {
    type: 'lookUpFilm',
    payload: film.data,
  };
};

export const fetchFilm = (id) => (dispatch) => {
  const url = `http://react-cdp-api.herokuapp.com/movies/${id}`;
  const request = axios.get(url)
    .then(resp => dispatch(showfetchFilm(resp)));
};

const routerFilm = (film) => {
  return {
    id: film.payload.id,
    image: film.payload.poster_path,
    title: film.payload.title,
    releasedate: parseInt(film.payload.release_date, 10),
    runtime: film.payload.runtime,
    overview: film.payload.overview,
  };
};

// xxx
export const xxx = (film) => {
  return {
    type: 'selectFilm',
    payload: film,
  };
};


// Reduser

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
        currentFilm: filmDescription(action),
      };
      break;
    case 'searchFilms':
      state = {
        ...state,
        films: conver(action),
      };
      break;
    case 'sortByFilter':
      state = {
        ...state,
        films: conver(action),
      };
      break;
    case 'lookUpFilm':
      state = {
        ...state,
        currentFilm: routerFilm(action),
      };
      break;
  }
  return state;
};

export default reducer;
