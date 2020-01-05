import { combineReducers } from 'redux';
import musicState from './music/reducers';

const rootReducer = combineReducers({
  music: musicState,
});

export default rootReducer;
