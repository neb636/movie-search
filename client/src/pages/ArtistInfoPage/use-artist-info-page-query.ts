import { gql } from 'apollo-boost';
import { ARTIST_FIELDS_FRAGMENT } from '@common/graphql/fragments/artist-fragment';
import { useLazyQuery } from '@apollo/react-hooks';
import { mapArtist } from '@common/mappers/artist-mapper';
import { ArtistInfoPage } from '@graphql-types/ArtistInfoPage';
import { ALBUM_FIELDS_FRAGMENT } from '@common/graphql/fragments/album-fragment';
import { mapAlbums } from '@common/mappers/album-mapper';
import { useEffect } from 'react';

const ARTIST_INFO_PAGE_QUERY = gql`
  query ArtistInfoPage($id: String!) {
    artist: getArtist(id: $id) {
      ...ArtistFields
    }
    albums: getArtistsAlbums(id: $id) {
      ...AlbumFields
    }
  }
  ${ARTIST_FIELDS_FRAGMENT}
  ${ALBUM_FIELDS_FRAGMENT}
`;

export const useArtistInfoPageQuery = (id: string) => {
  const [getArtistInfoPage, { data, loading, error }] = useLazyQuery<ArtistInfoPage>(ARTIST_INFO_PAGE_QUERY, {
    variables: { id }
  });

  useEffect(() => {
    getArtistInfoPage();
  }, [id]);
  const artist = data?.artist ? mapArtist(data.artist) : undefined;
  const albums = data?.albums ? mapAlbums(data.albums) : undefined;

  return { loading, error, artist, albums };
};
