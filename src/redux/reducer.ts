import IMovie from '../models/movie';
import {
    GET_MOVIES,
    GET_MOVIES_FAILED,
    GET_MOVIES_SUCCESS,
    GET_MOVIE_DETAILS,
    GET_MOVIE_DETAILS_FAILED,
    GET_MOVIE_DETAILS_SUCCESS,
    SET_SEARCH_INPUT_VALUE,

} from './type';

export interface IAction {
    payload: any;
    type: string;
}

export interface IData {
    data: IMovie[];

    error?: any;

}

export interface IState {
    getMoviesResult?: IData;
    searchInputValue: string;
    loading: boolean;
    getMovieDetail?: {
        data?: IMovie
        error?: any
    };

}

const INITIAL_STATE: IState = {
    getMoviesResult: { data: [] },
    searchInputValue: '',
    loading: false,

};

export default (state = INITIAL_STATE, action: IAction): IState => {
    switch (action.type) {

        //Get Movies
        case GET_MOVIES:
            return {
                ...state, loading: true
            };
        case GET_MOVIES_FAILED:
            return {
                ...state, loading: false, getMoviesResult: { data: [], error: action.payload }
            };
        case GET_MOVIES_SUCCESS:
            return {
                ...state, loading: false, getMoviesResult: { data: action.payload }
            };

        // set search text
        case SET_SEARCH_INPUT_VALUE:
            return { ...state, searchInputValue: action.payload }

        //set movie details
        case GET_MOVIE_DETAILS:
            return {
                ...state, loading: true
            };
        case GET_MOVIE_DETAILS_FAILED:
            return {
                ...state, loading: false, getMovieDetail: { error: action.payload }
            };
        case GET_MOVIE_DETAILS_SUCCESS:
            return {
                ...state, loading: false, getMovieDetail: { data: action.payload }
            };


        default:
            return state;
    }
};