import { combineReducers } from 'redux';
import musicState from './music/reducers';
import movieState from '@state/movie/reducers';

const rootReducer = combineReducers({
  music: musicState,
  movie: movieState
});

export default rootReducer;
