import React from 'react';
import { MoviesByTrack_movies } from '@graphql-types/MoviesByTrack';
import ImageWithFallback from '@common/components/ImageWithFallback/ImageWithFallback';
import './MovieTile.css';

type Props = {
  movie: MoviesByTrack_movies;
};

export const MovieTile = ({ movie }: Props) => {
  const link = `https://www.imdb.com/title/${movie.imdbID}`;
  return (
    <a href={link} className="MovieTile" target="_blank">
      <ImageWithFallback className="MovieTile__movie-image" src={movie.poster || ''} fallbackText={movie.title} alt="Fallback Image" />
      <div className="MovieTile__right-section">
        <div className="MovieTile__title">{movie.title}</div>
        <div className="MovieTile__score">{movie.imdbRating}</div>
      </div>
    </a>
  );
};
