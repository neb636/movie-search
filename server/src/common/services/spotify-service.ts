import axios from 'axios';
import { SPOTIFY_CLIENT_KEY, SPOTIFY_REDIRECT_URI } from '../constants';

export async function authenticate() {

    const url = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_KEY}` +
                `&redirect_uri=${SPOTIFY_REDIRECT_URI}` +
                `&response_type=token`;
        
    const response = await axios.get(url);
    
    console.log(response);
}