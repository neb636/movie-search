import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Search } from 'graphql/querys/types/Search';
import { mapSearchResults } from '@common/mappers/search-mapper';

const GET_SEARCH = gql`
  query Search($query: String!, $type: String!) {
    results: getSearchResults(query: $query, type: $type) {
      artists {
        href
        limit
        next
        offset
        total
        items {
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
      tracks {
        href
        limit
        next
        offset
        total
        items {
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
    }
  }
`;

export const useSearchQuery = (query: string | undefined) => {
  const { data, loading, error } = useQuery<Search>(GET_SEARCH, {
    variables: { query, type: 'artist,track' }
  });
  const results = data?.results ? mapSearchResults(data.results) : undefined;

  return { loading, error, results };
};
