import {ArtistItem, TrackItem} from './interfaces';
import {mapArtists, mapTracks} from './mapper';
import MovieMonsterApi from '@common/services/movie-monster-api/movie-monster-api';
import {useDispatch} from 'react-redux';
import { Dispatch } from 'redux';


const MUSIC_STATE = 'MUSIC_STATE';

export const SET_SEARCH_TERM = `${MUSIC_STATE}__SET_SEARCH_TERM`;
export const SET_IS_SEARCHING =`${MUSIC_STATE}__SET_IS_SEARCHING`;
export const SET_SEARCH_RESULTS = `${MUSIC_STATE}__SET_SEARCH_RESULTS`;


export type SetSearchTermAction = ReturnType<typeof setSearchTerm>;
export type SetIsSearchingAction = ReturnType<typeof setIsSearching>;
export type SetSearchResultsAction = ReturnType<typeof setSearchResults>;


const setSearchTerm = (searchTerm: string) => ({
    type: SET_SEARCH_TERM,
    searchTerm,
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
        querySearchTerm: (term: string) =>
            dispatch(querySearchTerm(term)),
        setSearchTerm: (term: string) =>
            dispatch(setSearchTerm(term)),
    };
};


