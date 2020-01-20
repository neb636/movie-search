import { AlbumFields, AlbumFields_images } from '@graphql-types/AlbumFields';

export type AlbumItem = {
  albumGroup: string | null;
  albumType: string | null;
  id: string;
  href: string | null;
  name: string;
  images: string[];
  mainImage?: string;
};

export const mapAlbum = (album: AlbumFields): AlbumItem => {
  let images: string[] = [];
  let mainImage;

  if (album.images && album.images.length) {
    images = album.images.map((image: AlbumFields_images) => image.url);
    mainImage = images[0];
  }

  return {
    ...album,
    images,
    mainImage
  };
};

export const mapAlbums = (albums: AlbumFields[] | undefined) => {
  if (albums) {
    return albums.map(album => mapAlbum(album));
  }

  return [];
};
