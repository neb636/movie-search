export type ArtistItem = {
  genres: string[];
  href: string;
  id: string;
  mainImage?: string;
  images: string[];
  name: string;
  type: string;
  uri: string;
};

export type TrackItem = {
  albumName: string;
  artistName: string;
  mainImage?: string;
  duration?: number | null;
  href: string;
  id: string;
  name: string;
  previewUrl: string;
  uri: string;
};

export type MusicSearchResults = {
  artists: ArtistItem[];
  tracks: TrackItem[];
};

export type MusicState = {
  isSearching: boolean;
  currentSearchedTerm: string;
  searchTerm: string;
  searchResults: MusicSearchResults;
  selectedTrack: TrackItem | undefined;
  selectedArtist: ArtistItem | undefined;
};
