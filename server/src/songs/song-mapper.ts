import { SpotifySearchResponse, SpotifyArtistItem, SpotifyTrackItem } from './song-interfaces';
import { SongList, ArtistItem, TrackItem } from '../../../shared-interfaces/interfaces';


export function mapSongList(searchResponse: SpotifySearchResponse): SongList {
    const artists = searchResponse.artists.items.map(artist => mapArtist(artist));
    const tracks = searchResponse.tracks.items.map(artist => mapTrack(artist));

    return { artists, tracks };
}


export function mapArtist(artist: SpotifyArtistItem): ArtistItem {
    const { genres, href, id, name,type, uri } = artist;
    let images, mainImage;

    if (artist.images && artist.images.length) {
        images = artist.images.map(image => image.url);
        mainImage = images[0];
    }

    return {
        genres,
        mainImage,
        href,
        id,
        images,
        name,
        type,
        uri
    };
}


export function mapTrack(track: SpotifyTrackItem): TrackItem {
    const { album, artists, duration_ms, href, id, name, preview_url, type, uri } = track;
    const albumName = album.name;
    const artistName = artists[0].name;
    let mainImage;

    if (album.images && album.images.length) {
        const images = album.images.map(image => image.url);
        mainImage = images[0];
    }

    return {
        albumName,
        artistName,
        mainImage,
        duration: duration_ms,
        href,
        id,
        name,
        previewUrl: preview_url,
        type,
        uri
    };
}