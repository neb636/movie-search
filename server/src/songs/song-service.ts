import axios from 'axios';
import { SPOTIFY_API, SPOTIFY_CLIENT_ID, SPOTIFY_SECRET } from '../common/constants';
import { SongList } from '../../../shared-interfaces/interfaces';
import { mapSongList } from './song-mapper';


// Should we store this for a while instead of using on every request?
export async function getAuthToken(): Promise<string> {
    const encodedAuth = (new Buffer(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_SECRET).toString('base64'));

    const response = await axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': `Basic ${encodedAuth}`
        },
        params: {
            grant_type: 'client_credentials'
        }
    });

    return response.data.access_token;
}


export async function searchSongs(searchTerm: string): Promise<SongList> {

    const token = await getAuthToken();

    const { data } = await axios.get(`${SPOTIFY_API}search?`, {
        params: {
            q: searchTerm,
            type: "artist,track"
        },
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return mapSongList(data);
}