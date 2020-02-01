import { AlbumItem } from '@common/mappers/album-mapper';
const SOUNDTRACK_FILTERS = ['Motion Picture', 'Original Music', 'Soundtrack', 'Music from'];

export const filterSoundtrackAlbums = (albums: AlbumItem[]) => {
  return albums.filter(album => {
    return SOUNDTRACK_FILTERS.map(filter => album.name.includes(filter)).some(result => result);
  });
};

export const parseName = (name: string) => {
  const indexOfFirst = name.search(/[-(\[]/);

  if (indexOfFirst !== -1) {
    return name.substring(0, indexOfFirst).trim();
  }

  return name;
};
