import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import MovieMonsterApi from '@common/services/movie-monster-api/movie-monster-api';

const MOVIE_STATE = 'MOVIE_STATE';

export const SET_MOVIE_RESULTS = `${MOVIE_STATE}__SET_MOVIE_RESULTS`;

export type SetMovieResultsAction = ReturnType<typeof setMovieResults>;

const setMovieResults = (movieResults: any[]) => ({
  type: SET_MOVIE_RESULTS,
  movieResults
});

const fetchMovieResults = (spotifyTrackId: string) => async (dispatch: Dispatch) => {
  const response: any[] = await MovieMonsterApi.movie.getMovieListBySpotifyTrackId({ spotifyTrackId });

  dispatch(setMovieResults(response));
};

export const useMovieActions = () => {
  const dispatch = useDispatch();

  return {
    fetchMovieResults: (spotifyTrackId: string) => dispatch(fetchMovieResults(spotifyTrackId))
  };
};
