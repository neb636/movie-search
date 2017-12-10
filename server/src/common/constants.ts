
export const PORT = 8080;
export const SPOTIFY_CALLBACK_PATH = '/spotify-auth-callback';
export const SPOTIFY_CLIENT_KEY = process.env.SPOTIFY_CLIENT_KEY;
export const SPOTIFY_SECRET = process.env.SPITIFY_SECRET;
export const SPOTIFY_API = 'https://api.spotify.com/v1/';
export const SPOTIFY_REDIRECT_URI = `http://localhost:${PORT}${SPOTIFY_CALLBACK_PATH}`;