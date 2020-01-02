import { createRestApiUtil } from "../../utils/rest-api-util";
import {API_BASE} from "../../constants";
import {SpotifySearchResponse} from "./api-response-interfaces";

const RestApiUtil = createRestApiUtil({
    baseUrl: API_BASE
});

const MovieMonsterApi = {
    music: {
        search: async ({ term }: { term: string }) =>
            RestApiUtil.get<SpotifySearchResponse>(`/music/search?query=${term}&type=artist,track`)
    },
    movie: {
        getMovieListBySpotifyTrackId: ({ spotifyTrackId }: { spotifyTrackId: string; }) =>
            RestApiUtil.get(`/movie/${spotifyTrackId}`)
    }
};

export default MovieMonsterApi;
