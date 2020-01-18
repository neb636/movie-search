/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ArtistFields
// ====================================================

export interface ArtistFields_images {
  url: string;
}

export interface ArtistFields {
  genres: string[] | null;
  href: string;
  id: string;
  images: ArtistFields_images[] | null;
  name: string;
  type: string;
  uri: string;
}
