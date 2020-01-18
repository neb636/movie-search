import { gql } from 'apollo-boost';
import { ARTIST_FIELDS_FRAGMENT } from '@common/graphql/fragments/artist-fragment';
import { useQuery } from '@apollo/react-hooks';
import { mapArtist } from '@common/mappers/artist-mapper';
import { ArtistInfoPage } from '@graphql-types/ArtistInfoPage';
import { ALBUM_FIELDS_FRAGMENT } from '@common/graphql/fragments/album-fragment';
import { mapAlbums, mapAlbumsPaging } from '@common/mappers/album-mapper';

const ARTIST_INFO_PAGE_QUERY = gql`
  query ArtistInfoPage($id: String!) {
    artist: getArtist(id: $id) {
      ...ArtistFields
    }
    albums: getArtistsAlbums(id: $id) {
      href
      limit
      next
      offset
      total
      items {
        ...AlbumFields
      }
    }
  }
  ${ARTIST_FIELDS_FRAGMENT}
  ${ALBUM_FIELDS_FRAGMENT}
`;

export const useArtistInfoPageQuery = (id: string) => {
  const { data, loading, error } = useQuery<ArtistInfoPage>(ARTIST_INFO_PAGE_QUERY, {
    variables: { id }
  });
  const artist = data?.artist ? mapArtist(data.artist) : undefined;
  const albums = data?.albums ? mapAlbumsPaging(data.albums) : undefined;

  return { loading, error, artist, albums };
};
