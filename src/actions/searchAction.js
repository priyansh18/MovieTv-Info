import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from "./types";
import axios from "axios";
import { apikey } from "../apikey";

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = (text) => (dispatch) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${apikey}&s=${text}`)
    .then((result) => {
      dispatch({
        type: FETCH_MOVIES,
        payload: result.data,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchMovie = (id) => (dispatch) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${apikey}&i=${id}`)
    .then((result) => {
      dispatch({
        type: FETCH_MOVIE,
        payload: result.data,
      });
    })
    .catch((err) => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
