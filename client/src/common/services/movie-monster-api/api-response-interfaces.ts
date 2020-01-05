export interface SpotifyImage {
  height: number;
  url: string;
  width: number;
}

export interface ExternalIds {
  isrc: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface AlbumResponse {
  albumType: string;
  artists: SpotifyArtistResponse[];
  availableMarkets: string[];
  externalUrls: ExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  type: string;
  uri: string;
}

export interface SpotifyArtistResponse {
  externalUrls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface SpotifyTrackItemResponse {
  album: AlbumResponse;
  artists: SpotifyArtistResponse[];
  availableMarkets: string[];
  discNumber: number;
  durationMs: number;
  explicit: boolean;
  externalIds: ExternalIds;
  externalUrls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  popularity: number;
  previewUrl: string;
  trackNumber: number;
  type: string;
  uri: string;
}

export interface SpotifyArtistItemResponse {
  externalUrls: ExternalUrls;
  followers: {
    href?: any;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface SpotifySearchResponse {
  artists: {
    href: string;
    items: SpotifyArtistItemResponse[];
    limit: number;
    offset: number;
    next?: number;
    previous?: string;
    total: number;
  };
  tracks: {
    href: string;
    items: SpotifyTrackItemResponse[];
    limit: number;
    offset: number;
    next?: number;
    previous?: string;
    total: number;
  };
}
