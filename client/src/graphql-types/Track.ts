/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Track
// ====================================================

export interface Track_track_album_images {
  url: string;
}

export interface Track_track_album {
  id: string;
  name: string;
  images: Track_track_album_images[] | null;
}

export interface Track_track_artists {
  name: string;
}

export interface Track_track {
  album: Track_track_album;
  artists: Track_track_artists[];
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

export interface Track {
  track: Track_track | null;
}

export interface TrackVariables {
  id: string;
}
