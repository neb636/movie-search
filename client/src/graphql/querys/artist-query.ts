import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Artist } from 'graphql/querys/types/Artist';
import { mapArtist } from '@common/mappers/artist-mapper';

const GET_ARTIST = gql`
  query Artist($id: String!) {
    artist: getArtist(id: $id) {
      genres
      href
      id
      images {
        url
      }
      name
      type
      uri
    }
  }
`;

export const useArtistQuery = (id: string) => {
  const { data, loading, error } = useQuery<Artist>(GET_ARTIST, {
    variables: { id }
  });
  const artist = data?.artist ? mapArtist(data.artist) : undefined;

  return { loading, error, artist };
};
