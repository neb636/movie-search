import { Search_results } from 'graphql/querys/types/Search';
import { mapTracks, TrackItem } from '@common/mappers/track-mapper';
import { ArtistItem, mapArtists } from '@common/mappers/artist-mapper';

export type MusicSearchResults = {
  artists: ArtistItem[];
  tracks: TrackItem[];
};

export const mapSearchResults = (searchResults: Search_results): MusicSearchResults => {
  const tracks = searchResults.tracks.items ? mapTracks(searchResults.tracks.items) : [];
  const artists = searchResults.artists.items ? mapArtists(searchResults.artists.items) : [];

  return {
    tracks,
    artists
  };
};
