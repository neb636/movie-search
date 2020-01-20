import { mapTracks, TrackItem } from '@common/mappers/track-mapper';
import { ArtistItem, mapArtists } from '@common/mappers/artist-mapper';
import { Search_results } from '@graphql-types/Search';
import { AlbumItem, mapAlbums } from '@common/mappers/album-mapper';

export type MusicSearchResults = {
  artists: ArtistItem[];
  tracks: TrackItem[];
  albums: AlbumItem[];
};

export const mapSearchResults = (searchResults: Search_results): MusicSearchResults => {
  const tracks = searchResults.tracks.items ? mapTracks(searchResults.tracks.items) : [];
  const artists = searchResults.artists.items ? mapArtists(searchResults.artists.items) : [];
  const albums = searchResults.albums.items ? mapAlbums(searchResults.albums.items) : [];

  return {
    tracks,
    artists,
    albums
  };
};
