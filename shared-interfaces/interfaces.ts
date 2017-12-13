
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