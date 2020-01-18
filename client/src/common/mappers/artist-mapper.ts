import { ArtistFields } from '@graphql-types/ArtistFields';

export type ArtistItem = {
  genres: string[];
  href: string;
  id: string;
  mainImage?: string;
  images: string[];
  name: string;
  type: string;
  uri: string;
};

export const mapArtist = (artist: ArtistFields): ArtistItem => {
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

export const mapArtists = (artists: ArtistFields[] | undefined) => {
  if (artists) {
    return artists.map(artist => mapArtist(artist));
  }

  return [];
};
