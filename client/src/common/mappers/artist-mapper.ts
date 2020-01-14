import { ArtistItem } from '@state/music/interfaces';
import { Artist_artist } from 'graphql/querys/types/Artist';

export const mapArtist = (artist: Artist_artist): ArtistItem => {
  const { genres, href, id, name, type, uri } = artist;
  let images: string[] = [];
  let mainImage;

  if (artist.images && artist.images.length) {
    images = artist.images.map(image => image.url);
    mainImage = images[0];
  }

  return {
    genres: genres || [],
    mainImage,
    href,
    id,
    images,
    name,
    type,
    uri
  };
};

export const mapArtists = (artists: Artist_artist[] | undefined) => {
  if (artists) {
    return artists.map(artist => mapArtist(artist));
  }

  return [];
};
