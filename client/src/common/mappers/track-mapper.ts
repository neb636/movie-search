import { TrackFields } from '@graphql-types/TrackFields';

export type TrackItem = {
  albumName: string;
  artistName: string;
  mainImage?: string;
  duration?: number | null;
  href: string;
  id: string;
  name: string;
  previewUrl: string;
  uri: string;
};

export const mapTrack = (track: TrackFields): TrackItem => {
  const { album, artists, durationMs, href, id, name, previewUrl, type, uri } = track;
  const albumName = album?.name;
  const artistName = artists[0]?.name;
  let mainImage;

  if (album.images && album.images.length) {
    const images = album.images.map(image => image.url);
    mainImage = images[0];
  }

  return {
    albumName,
    artistName,
    mainImage,
    duration: durationMs,
    href,
    id,
    name,
    previewUrl: previewUrl || '',
    uri
  };
};

export const mapTracks = (tracks: TrackFields[] | undefined): TrackItem[] => {
  if (tracks) {
    return tracks.map(track => mapTrack(track));
  }

  return [];
};
