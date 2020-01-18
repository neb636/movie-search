/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TrackFields
// ====================================================

export interface TrackFields_album_images {
  url: string;
}

export interface TrackFields_album {
  id: string;
  name: string;
  images: TrackFields_album_images[] | null;
}

export interface TrackFields_artists {
  name: string;
}

export interface TrackFields {
  album: TrackFields_album;
  artists: TrackFields_artists[];
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
