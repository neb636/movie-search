import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { mapTrack } from '@common/mappers/track-mapper';
import { TRACK_FIELDS_FRAGMENT } from '@common/graphql/fragments/track-fragment';
import { Track } from '@graphql-types/Track';
import { useEffect } from 'react';

const GET_TRACK = gql`
  query Track($id: String!) {
    track: getTrack(id: $id) {
      ...TrackFields
    }
  }
  ${TRACK_FIELDS_FRAGMENT}
`;

export const useTrackInfoPageQuery = (id: string) => {
  const [getTrackInfoPage, { data, loading, error }] = useLazyQuery<Track>(GET_TRACK, {
    variables: { id }
  });

  useEffect(() => {
    if (id) {
      getTrackInfoPage();
    }
  }, [id]);

  const track = data?.track ? mapTrack(data.track) : undefined;

  return { loading, error, track };
};
