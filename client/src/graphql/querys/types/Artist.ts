/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Artist
// ====================================================

export interface Artist_artist_images {
  __typename: 'Image';
  url: string;
}

export interface Artist_artist {
  __typename: 'Artist';
  genres: string[] | null;
  href: string;
  id: string;
  images: Artist_artist_images[] | null;
  name: string;
  type: string;
  uri: string;
}

export interface Artist {
  artist: Artist_artist | null;
}

export interface ArtistVariables {
  id: string;
}
