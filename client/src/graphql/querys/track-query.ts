import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { mapTrack } from '@common/mappers/track-mapper';
import { Track } from 'graphql/querys/types/Track';

const GET_TRACK = gql`
  query Track($id: String!) {
    track: getTrack(id: $id) {
      album {
        id
        name
        images {
          url
        }
      }
      artists {
        name
      }
      discNumber
      durationMs
      explicit
      id
      href
      name
      previewUrl
      uri
      type
    }
  }
`;

export const useTrackQuery = (id: string) => {
  const { data, loading, error } = useQuery<Track>(GET_TRACK, {
    variables: { id }
  });
  const track = data?.track ? mapTrack(data.track) : undefined;

  return { loading, error, track };
};
