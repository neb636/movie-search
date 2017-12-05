import * as axios from 'axios';
import spotifyApi from '../config';

export async function search(searchTerm: string) {

    await axios.get(`${spotifyApi}search?q=${searchTerm}type=artist,track`);
}