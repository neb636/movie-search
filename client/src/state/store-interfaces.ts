import { MusicState } from './music/interfaces';
import { MovieState } from '@state/movie/interfaces';

export type StoreState = {
  music: MusicState;
  movie: MovieState;
};
