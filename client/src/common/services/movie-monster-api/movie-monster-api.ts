import { createRestApiUtil } from '../../utils/rest-api-util';
import { API_BASE } from '../../constants';
import { SpotifyArtistItemResponse, SpotifySearchResponse, SpotifyTrackItemResponse } from './api-response-interfaces';

const RestApiUtil = createRestApiUtil({
  baseUrl: API_BASE
});

const MovieMonsterApi = {
  music: {
    search: async ({ term }: { term: string }) => RestApiUtil.get<SpotifySearchResponse>(`/music/search?query=${term}&type=artist,track`),
    getTrack: async ({ spotifyTrackId }: { spotifyTrackId: string }) =>
      RestApiUtil.get<SpotifyTrackItemResponse>(`/music/track/${spotifyTrackId}`),
    getArtist: async ({ spotifyArtistId }: { spotifyArtistId: string }) =>
      RestApiUtil.get<SpotifyArtistItemResponse>(`/music/artist/${spotifyArtistId}`),
    getAlbumsByArtist: async ({ spotifyArtistId }: { spotifyArtistId: string }) => RestApiUtil.get<any>(`/music/albums/${spotifyArtistId}`)
  },
  movie: {
    getMovieListBySpotifyTrackId: ({ spotifyTrackId }: { spotifyTrackId: string }) => RestApiUtil.get<any>(`/movie/${spotifyTrackId}`)
  }
};

export default MovieMonsterApi;
