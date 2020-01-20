import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { mapSearchResults } from '@common/mappers/search-mapper';
import { ARTIST_FIELDS_FRAGMENT } from '@common/graphql/fragments/artist-fragment';
import { Search } from '@graphql-types/Search';
import { TRACK_FIELDS_FRAGMENT } from '@common/graphql/fragments/track-fragment';
import { ALBUM_FIELDS_FRAGMENT } from '@common/graphql/fragments/album-fragment';

const SEARCH_PAGE_QUERY = gql`
  query Search($query: String!, $type: String!) {
    results: getSearchResults(query: $query, type: $type) {
      artists {
        href
        limit
        next
        offset
        total
        items {
          ...ArtistFields
        }
      }
      tracks {
        href
        limit
        next
        offset
        total
        items {
          ...TrackFields
        }
      }
      albums {
        href
        limit
        next
        offset
        previous
        total
        items {
          ...AlbumFields
        }
      }
    }
  }
  ${ARTIST_FIELDS_FRAGMENT}
  ${TRACK_FIELDS_FRAGMENT}
  ${ALBUM_FIELDS_FRAGMENT}
`;

export const useSearchQuery = (query: string | undefined) => {
  const { data, loading, error } = useQuery<Search>(SEARCH_PAGE_QUERY, {
    variables: { query, type: 'artist,track,album' }
  });
  const results = data?.results ? mapSearchResults(data.results) : undefined;

  return { loading, error, results };
};
