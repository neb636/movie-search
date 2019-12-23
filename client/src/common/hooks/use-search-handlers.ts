import axios from "axios";
import {BACKEND_URL} from "../constants";
import {useState} from "react";
import {SongList} from "../interfaces/interfaces";
import {useSafeState} from "./use-safe-state";
import {mapArtists, mapTracks} from "../mappers/search-result-mapper";


export const useSearchHandlers = () => {
    const [currentSearchedTerm, setCurrentSearchedTerm] = useState("");
    const [isSearching, setIsSearching] = useSafeState(false);
    const [searchResult, setSearchResult] = useState<SongList>({
        artists: [],
        tracks: []
    });

    const querySearchTerm = async (term: string) => {
        setIsSearching(true);
        setCurrentSearchedTerm(term);

        try {
            const { data } = await axios.get(`${BACKEND_URL}/v1/search/music?query=${term}&type=artist,track`);
            const artists = mapArtists(data.artists.items);
            const tracks = mapTracks(data.tracks.items);
            setSearchResult({ artists, tracks });
            setIsSearching(false);
        } catch(e) {
            setIsSearching(false);
            throw new Error(e);
        }
    };

    return {
        searchResult,
        isSearching,
        querySearchTerm,
        currentSearchedTerm
    };
};


