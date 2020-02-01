import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { parseName } from '@common/utils/sountrack-filter-util';
import { MOVIE_FIELDS_FRAGMENT } from '@common/graphql/fragments/movie-fragment';
import { MoviesByTrack } from '@graphql-types/MoviesByTrack';
import { useEffect } from 'react';

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

  const [getMoviesByTrack, { data, loading, error }] = useLazyQuery<MoviesByTrack>(GET_MOVIE, {
    variables: { trackName: parsedTrackName, artistName }
  });

  useEffect(() => {
    if (artistName && parsedTrackName) {
      getMoviesByTrack();
    }
  }, [parsedTrackName, artistName]);

  return { loading, error, movies: data?.movies };
};
