import { TrackItem } from '@state/music/interfaces';
import { Track_track } from 'graphql/querys/types/Track';

export const mapTrack = (track: Track_track): TrackItem => {
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

export const mapTracks = (tracks: Track_track[] | undefined): TrackItem[] => {
  if (tracks) {
    return tracks.map(track => mapTrack(track));
  }

  return [];
};
