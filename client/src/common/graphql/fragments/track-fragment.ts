import { gql } from 'apollo-boost';

export const TRACK_FIELDS_FRAGMENT = gql`
  fragment TrackFields on Track {
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
`;
