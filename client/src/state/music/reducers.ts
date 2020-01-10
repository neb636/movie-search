import { MusicState } from './interfaces';
import { handleActions } from 'redux-actions';
import {
  SET_IS_SEARCHING,
  SET_SEARCH_RESULTS,
  SET_SEARCH_TERM,
  SET_SELECTED_ARTIST,
  SET_SELECTED_TRACK,
  SetIsSearchingAction,
  SetSearchResultsAction,
  SetSearchTermAction,
  SetSelectedArtistAction,
  SetSelectedTrackAction
} from './actions';

const initialState: MusicState = {
  isSearching: false,
  searchTerm: '',
  currentSearchedTerm: '',
  searchResults: {
    artists: [],
    tracks: []
  },
  selectedTrack: undefined,
  selectedArtist: undefined
};

const setSearchTerm = (state: MusicState, action: SetSearchTermAction): MusicState => {
  const { searchTerm } = action;

  return {
    ...state,
    searchTerm
  };
};

const setSearchResults = (state: MusicState, action: SetSearchResultsAction): MusicState => {
  const { artists, tracks, currentSearchedTerm } = action;

  return {
    ...state,
    isSearching: false,
    currentSearchedTerm,
    searchResults: {
      artists,
      tracks
    }
  };
};

const setIsSearching = (state: MusicState, action: SetIsSearchingAction): MusicState => {
  const { isSearching } = action;

  return {
    ...state,
    isSearching
  };
};

const setSelectedTrack = (state: MusicState, action: SetSelectedTrackAction): MusicState => {
  const { track } = action;

  return {
    ...state,
    selectedTrack: track
  };
};

const setSelectedArtist = (state: MusicState, action: SetSelectedArtistAction): MusicState => {
  const { artist } = action;

  return {
    ...state,
    selectedArtist: artist
  };
};

const mappedReducers = {
  [SET_SEARCH_TERM]: setSearchTerm,
  [SET_SEARCH_RESULTS]: setSearchResults,
  [SET_IS_SEARCHING]: setIsSearching,
  [SET_SELECTED_TRACK]: setSelectedTrack,
  [SET_SELECTED_ARTIST]: setSelectedArtist
};

const musicState: any = handleActions(mappedReducers as any, initialState);

export default musicState;
