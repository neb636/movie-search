import { gql } from 'apollo-boost';

export const ARTIST_FIELDS_FRAGMENT = gql`
  fragment ArtistFields on Artist {
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
`;
