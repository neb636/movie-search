import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { parseName } from '@common/utils/sountrack-filter-util';
import { MOVIE_FIELDS_FRAGMENT } from '@common/graphql/fragments/movie-fragment';
import { MoviesByTrack } from '@graphql-types/MoviesByTrack';

const GET_MOVIE = gql`
  query MoviesByTrack($trackName: String!, $artistName: String!) {
    movies: getMoviesListFromTrack(trackName: $trackName, artistName: $artistName) {
      ...MovieFields
    }
  }
  ${MOVIE_FIELDS_FRAGMENT}
`;

export const useTrackMovieListQuery = (trackName = '', artistName = '') => {
  const parsedTrackName = parseName(trackName);

  console.log('trackName', trackName);
  console.log('parsedTrackName', parsedTrackName);
  const { data, loading, error } = useQuery<MoviesByTrack>(GET_MOVIE, {
    variables: { trackName: parsedTrackName, artistName }
  });

  return { loading, error, movies: data?.movies };
};
