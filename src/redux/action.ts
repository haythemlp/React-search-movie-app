
import {
  GET_MOVIES,
  GET_MOVIES_FAILED,
  GET_MOVIES_SUCCESS,
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_FAILED,
  GET_MOVIE_DETAILS_SUCCESS,
  SET_SEARCH_INPUT_VALUE,
} from './type';


import { getMovies, getMovieDetail } from '../services/api'


export const getMoviesApi = (searchText: string, callbackSuccess: any, callbackFailed: any) => {
  return (dispatch: any) => {
    dispatch({ type: GET_MOVIES });
    dispatch({ type: SET_SEARCH_INPUT_VALUE, payload: searchText })
    getMovies(searchText)
      .then(res => {
        if (res.data.Search) {
          dispatch({ type: GET_MOVIES_SUCCESS, payload: res.data.Search });
          callbackSuccess(res.data.Search);
        } else {
          dispatch({ type: GET_MOVIES_FAILED, payload: res.data.Error });
          callbackFailed(res.data.Error);
        }

      })
      .catch(err => {
        dispatch({ type: GET_MOVIES_FAILED, payload: err });
        callbackFailed(err);
      });
  };
};
export const getMovieDetailApi = (id: string, callbackSuccess: any, callbackFailed: any) => {
  return (dispatch: any) => {
    dispatch({ type: GET_MOVIE_DETAILS });
    getMovieDetail(id)
      .then(res => {
        dispatch({ type: GET_MOVIE_DETAILS_SUCCESS, payload: res.data });
        callbackSuccess(res.data);
      })
      .catch(err => {
        dispatch({ type: GET_MOVIE_DETAILS_FAILED, payload: err });
        callbackFailed(err);
      });
  };
};


