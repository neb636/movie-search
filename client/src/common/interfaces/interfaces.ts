
export interface SpotifyImage {
    height: number;
    url: string;
    width: number;
}

export interface ExternalIds {
    isrc: string;
}

export interface ExternalUrls {
    spotify: string;
}


export interface Album {
    album_type: string;
    artists: SpotifyArtist[];
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    type: string;
    uri: string;
}


export interface SpotifyArtist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}


export interface SpotifyTrackItem {
    album: Album;
    artists: SpotifyArtist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface SpotifyArtistItem {
    external_urls: ExternalUrls;
    followers: {
        href?: any;
        total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}


export interface SpotifySearchResponse {
    artists: {
        href: string;
        items: SpotifyArtistItem[];
        limit: number;
        offset: number;
        next?: number;
        previous?: string;
        total: number;
    };
    tracks: {
        href: string;
        items: SpotifyTrackItem[];
        limit: number;
        offset: number;
        next?: number;
        previous?: string;
        total: number;
    };
}

export interface ArtistItemResponse {
    externalUrls: any;
    generes: string[];
    href: string;
    images: { url: string; height: number; width: number; }[];
    id: string;
    name: string;
    type: string;
    uri: string;
    followers: any;
}

export interface TrackItemResponse {

}

export interface ArtistItem {
    genres: string[];
    href: string;
    id: string;
    mainImage?: string;
    images: string[];
    name: string;
    type: string;
    uri: string;
}

export interface TrackItem {
    albumName: string;
    artistName: string;
    mainImage?: string;
    duration: number;
    href: string;
    id: string;
    name: string;
    previewUrl: string;
    type: string;
    uri: string;
}

export interface SongList {
    artists: ArtistItem[];
    tracks: TrackItem[];
}
