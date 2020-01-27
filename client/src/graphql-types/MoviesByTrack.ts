/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MoviesByTrack
// ====================================================

export interface MoviesByTrack_movies {
  title: string;
  year: string;
  rated: string | null;
  released: string | null;
  runtime: string | null;
  genre: string | null;
  director: string | null;
  writer: string | null;
  actors: string | null;
  plot: string | null;
  language: string | null;
  country: string | null;
  awards: string | null;
  poster: string | null;
  metascore: string | null;
  imdbRating: string | null;
  imdbVotes: string | null;
  imdbID: string | null;
  type: string | null;
  boxOffice: string | null;
  production: string | null;
  website: string | null;
}

export interface MoviesByTrack {
  movies: MoviesByTrack_movies[] | null;
}

export interface MoviesByTrackVariables {
  trackName: string;
  artistName: string;
}
