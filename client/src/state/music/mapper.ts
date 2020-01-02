import {ArtistItem, TrackItem} from "./interfaces";
import {
    SpotifyArtistItemResponse,
    SpotifyTrackItemResponse
} from "../../common/services/movie-monster-api/api-response-interfaces";


export const mapArtist = (artist: SpotifyArtistItemResponse): ArtistItem => {
    const { genres, href, id, name,type, uri } = artist;
    let images: string[] = [];
    let mainImage;

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
};

export const mapArtists = (artists: SpotifyArtistItemResponse[] | undefined) => {

    if (artists) {
        return artists.map(artist => mapArtist(artist));
    }

    return [];
};

export const mapTrack = (track: SpotifyTrackItemResponse): TrackItem => {
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
};

export const mapTracks = (tracks: SpotifyTrackItemResponse[] | undefined): TrackItem[] => {
    if (tracks) {
        return tracks.map(track => mapTrack(track));
    }

    return [];
};
