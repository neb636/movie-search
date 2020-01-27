/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Tracks
// ====================================================

export interface Tracks_tracks {
  Title: string;
  Year: string;
  Rated: string | null;
  Released: string | null;
  Runtime: string | null;
  Genre: string | null;
  Director: string | null;
  Writer: string | null;
  Actors: string | null;
  Plot: string | null;
  Language: string | null;
  Country: string | null;
  Awards: string | null;
  Poster: string | null;
  Metascore: string | null;
  imdbRating: string | null;
  imdbVotes: string | null;
  imdbID: string | null;
  Type: string | null;
  DVD: string | null;
  BoxOffice: string | null;
  Production: string | null;
  Website: string | null;
}

export interface Tracks {
  tracks: Tracks_tracks[] | null;
}

export interface TracksVariables {
  trackName: string;
  artistName: string;
}
