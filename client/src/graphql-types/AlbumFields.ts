/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AlbumFields
// ====================================================

export interface AlbumFields_images {
  url: string;
}

export interface AlbumFields {
  albumGroup: string | null;
  albumType: string | null;
  id: string;
  href: string;
  name: string;
  images: AlbumFields_images[] | null;
}
