import axios from 'axios';
import { SPOTIFY_API } from '../common/constants';
import { SongList } from './songs-interfaces';
import { authenticate } from '../common/services/spotify-service';

export async function searchSongs(searchTerm: string): Promise<SongList> {

    authenticate();

    const songsList = await axios.get(`${SPOTIFY_API}search?q=${searchTerm}type=artist,track`);
    return songsList;
}