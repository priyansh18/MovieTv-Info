import { SEARCH_MOVIE, FETCH_MOVIES } from "./types";
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
    .get(`http://www.omdbapi.com/?apikey=${apikey}&s=${text}`)
    .then((result) => {
      dispatch({
        type: FETCH_MOVIES,
        payload: result.data.Search,
      });
    })
    .catch((err) => console.log(err));
};
