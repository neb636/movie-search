import { gql } from 'apollo-boost';

export const MOVIE_FIELDS_FRAGMENT = gql`
  fragment MovieFields on Movie {
    title
    year
    rated
    released
    runtime
    genre
    director
    writer
    actors
    plot
    language
    country
    awards
    poster
    metascore
    imdbRating
    imdbVotes
    imdbID
    type
    boxOffice
    production
    website
  }
`;
