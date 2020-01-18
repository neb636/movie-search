import { gql } from 'apollo-boost';

export const ALBUM_FIELDS_FRAGMENT = gql`
  fragment AlbumFields on AlbumSimplified {
    albumGroup
    albumType
    id
    href
    name
    images {
      url
    }
  }
`;
