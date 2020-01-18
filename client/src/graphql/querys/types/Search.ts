/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Search
// ====================================================

export interface Search_results_artists_items_images {
  __typename: 'Image';
  url: string;
}

export interface Search_results_artists_items {
  __typename: 'Artist';
  genres: string[] | null;
  href: string;
  id: string;
  images: Search_results_artists_items_images[] | null;
  name: string;
  type: string;
  uri: string;
}

export interface Search_results_artists {
  __typename: 'ArtistPaging';
  href: string | null;
  limit: number;
  next: string;
  offset: number;
  total: number;
  items: Search_results_artists_items[] | null;
}

export interface Search_results_tracks_items_album_images {
  __typename: 'Image';
  url: string;
}

export interface Search_results_tracks_items_album {
  __typename: 'AlbumSimplified';
  id: string;
  name: string;
  images: Search_results_tracks_items_album_images[] | null;
}

export interface Search_results_tracks_items_artists {
  __typename: 'ArtistSimplified';
  name: string;
}

export interface Search_results_tracks_items {
  __typename: 'Track';
  album: Search_results_tracks_items_album;
  artists: Search_results_tracks_items_artists[];
  discNumber: number | null;
  durationMs: number | null;
  explicit: boolean | null;
  id: string;
  href: string;
  name: string;
  previewUrl: string | null;
  uri: string;
  type: string | null;
}

export interface Search_results_tracks {
  __typename: 'TrackPaging';
  href: string | null;
  limit: number;
  next: string;
  offset: number;
  total: number;
  items: Search_results_tracks_items[] | null;
}

export interface Search_results {
  __typename: 'SearchResult';
  artists: Search_results_artists;
  tracks: Search_results_tracks;
}

export interface Search {
  results: Search_results | null;
}

export interface SearchVariables {
  query: string;
  type: string;
}
