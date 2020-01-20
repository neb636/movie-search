/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Search
// ====================================================

export interface Search_results_artists_items_images {
  url: string;
}

export interface Search_results_artists_items {
  genres: string[] | null;
  href: string;
  id: string;
  images: Search_results_artists_items_images[] | null;
  name: string;
  type: string;
  uri: string;
}

export interface Search_results_artists {
  href: string | null;
  limit: number | null;
  next: string | null;
  offset: number | null;
  total: number | null;
  items: Search_results_artists_items[] | null;
}

export interface Search_results_tracks_items_album_images {
  url: string;
}

export interface Search_results_tracks_items_album {
  id: string;
  name: string;
  images: Search_results_tracks_items_album_images[] | null;
}

export interface Search_results_tracks_items_artists {
  name: string;
}

export interface Search_results_tracks_items {
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
  href: string | null;
  limit: number | null;
  next: string | null;
  offset: number;
  total: number;
  items: Search_results_tracks_items[] | null;
}

export interface Search_results_albums_items_images {
  url: string;
}

export interface Search_results_albums_items {
  albumGroup: string | null;
  albumType: string | null;
  id: string;
  href: string;
  name: string;
  images: Search_results_albums_items_images[] | null;
}

export interface Search_results_albums {
  href: string | null;
  limit: number | null;
  next: string | null;
  offset: number | null;
  previous: string | null;
  total: number;
  items: Search_results_albums_items[] | null;
}

export interface Search_results {
  artists: Search_results_artists;
  tracks: Search_results_tracks;
  albums: Search_results_albums;
}

export interface Search {
  results: Search_results | null;
}

export interface SearchVariables {
  query: string;
  type: string;
}
