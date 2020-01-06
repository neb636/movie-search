import { MovieState } from './interfaces';
import { SET_MOVIE_RESULTS, SetMovieResultsAction } from './actions';
import { handleActions } from 'redux-actions';

const initialState: MovieState = {
  movieResults: []
};

const setMovieResults = (state: MovieState, action: SetMovieResultsAction): MovieState => {
  const { movieResults } = action;

  return {
    ...state,
    movieResults
  };
};

const mappedReducers = {
  [SET_MOVIE_RESULTS]: setMovieResults
};

const movieState: any = handleActions(mappedReducers as any, initialState);

export default movieState;
