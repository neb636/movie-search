import { ArtistItem, TrackItem } from './interfaces';
import { mapArtist, mapArtists, mapTrack, mapTracks } from './mapper';
import MovieMonsterApi from '@common/services/movie-monster-api/movie-monster-api';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

const MUSIC_STATE = 'MUSIC_STATE';

export const SET_SEARCH_TERM = `${MUSIC_STATE}__SET_SEARCH_TERM`;
export const SET_IS_SEARCHING = `${MUSIC_STATE}__SET_IS_SEARCHING`;
export const SET_SEARCH_RESULTS = `${MUSIC_STATE}__SET_SEARCH_RESULTS`;
export const SET_SELECTED_TRACK = `${MUSIC_STATE}__SET_SELECTED_TRACK`;
export const SET_SELECTED_ARTIST = `${MUSIC_STATE}__SET_SELECTED_ARTIST`;

export type SetSearchTermAction = ReturnType<typeof setSearchTerm>;
export type SetIsSearchingAction = ReturnType<typeof setIsSearching>;
export type SetSearchResultsAction = ReturnType<typeof setSearchResults>;
export type SetSelectedTrackAction = ReturnType<typeof setSelectedTrack>;
export type SetSelectedArtistAction = ReturnType<typeof setSelectedArtist>;

const setSearchTerm = (searchTerm: string) => ({
  type: SET_SEARCH_TERM,
  searchTerm
});

const setIsSearching = (isSearching: boolean) => ({
  type: SET_IS_SEARCHING,
  isSearching
});

const setSearchResults = (currentSearchedTerm: string, artists: ArtistItem[], tracks: TrackItem[]) => ({
  type: SET_SEARCH_RESULTS,
  currentSearchedTerm,
  artists,
  tracks
});

const setSelectedTrack = (track: TrackItem | undefined) => ({
  type: SET_SELECTED_TRACK,
  track
});

const setSelectedArtist = (artist: ArtistItem | undefined) => ({
  type: SET_SELECTED_ARTIST,
  artist
});

const fetchSelectedTrack = (spotifyTrackId: string) => async (dispatch: Dispatch) => {
  const response = await MovieMonsterApi.music.getTrack({ spotifyTrackId });
  const track = mapTrack(response);
  dispatch(setSelectedTrack(track));
};

const fetchSelectedArtist = (spotifyArtistId: string) => async (dispatch: Dispatch) => {
  const response = await MovieMonsterApi.music.getArtist({ spotifyArtistId });
  const artist = mapArtist(response);
  dispatch(setSelectedArtist(artist));
};

const querySearchTerm = (term: string) => async (dispatch: Dispatch) => {
  dispatch(setIsSearching(true));
  const response = await MovieMonsterApi.music.search({ term });
  const artists = mapArtists(response.artists.items);
  const tracks = mapTracks(response.tracks.items);

  dispatch(setSearchResults(term, artists, tracks));

  return response;
};

export const useMusicActions = () => {
  const dispatch = useDispatch();

  return {
    querySearchTerm: (term: string) => dispatch(querySearchTerm(term)),
    setSearchTerm: (term: string) => dispatch(setSearchTerm(term)),
    fetchSelectedTrack: (spotifyTrackId: string) => dispatch(fetchSelectedTrack(spotifyTrackId)),
    setSelectedArtist: (artist: ArtistItem | undefined) => dispatch(setSelectedArtist(artist)),
    fetchSelectedArtist: (spotifyArtistId: string) => dispatch(fetchSelectedArtist(spotifyArtistId))
  };
};
