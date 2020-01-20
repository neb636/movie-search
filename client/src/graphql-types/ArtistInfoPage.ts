/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ArtistInfoPage
// ====================================================

export interface ArtistInfoPage_artist_images {
  url: string;
}

export interface ArtistInfoPage_artist {
  genres: string[] | null;
  href: string;
  id: string;
  images: ArtistInfoPage_artist_images[] | null;
  name: string;
  type: string;
  uri: string;
}

export interface ArtistInfoPage_albums_images {
  url: string;
}

export interface ArtistInfoPage_albums {
  albumGroup: string | null;
  albumType: string | null;
  id: string;
  href: string;
  name: string;
  images: ArtistInfoPage_albums_images[] | null;
}

export interface ArtistInfoPage {
  artist: ArtistInfoPage_artist | null;
  albums: ArtistInfoPage_albums[] | null;
}

export interface ArtistInfoPageVariables {
  id: string;
}
