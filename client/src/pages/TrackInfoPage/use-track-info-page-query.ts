import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { mapTrack } from '@common/mappers/track-mapper';
import { TRACK_FIELDS_FRAGMENT } from '@common/graphql/fragments/track-fragment';
import { Track } from '@graphql-types/Track';

const GET_TRACK = gql`
  query Track($id: String!) {
    track: getTrack(id: $id) {
      ...TrackFields
    }
  }
  ${TRACK_FIELDS_FRAGMENT}
`;

export const useTrackInfoPageQuery = (id: string) => {
  const { data, loading, error } = useQuery<Track>(GET_TRACK, {
    variables: { id }
  });
  const track = data?.track ? mapTrack(data.track) : undefined;

  return { loading, error, track };
};
