
const spotifyClientKey = process.env.SPOTIFY_CLIENT_KEY;
const spotifySecret = process.env.SPITIFY_SECRET;

export default {
    port: 8080,
    spotifyClientKey,
    spotifySecret,
    spotifyApi: 'https://api.spotify.com/v1/'
}