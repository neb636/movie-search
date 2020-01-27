import React from 'react';
import { useParams } from 'react-router-dom';
import './TrackInfoPage.css';
import { useTrackInfoPageQuery } from '@pages/TrackInfoPage/use-track-info-page-query';
import InfoPageWrapper from '@common/components/InfoPageWrapper/InfoPageWrapper';
import { useTrackMovieListQuery } from '@pages/TrackInfoPage/use-track-movie-list-query';
import { MovieTile } from '@pages/TrackInfoPage/MovieTile/MovieTile';
import Spinner from '@common/components/Spinner/Spinner';

const TrackInfoPage = () => {
  const { spotifyTrackId } = useParams<{ spotifyTrackId?: string }>();
  const { loading, error, track } = useTrackInfoPageQuery(spotifyTrackId || '');
  const { loading: movieTracksLoading, movies } = useTrackMovieListQuery(track?.name, track?.artistName);

  console.log('movies', movies);

  if (!loading && track) {
    return (
      <InfoPageWrapper
        title={track.name}
        heroImageSrc={track.mainImage}
        topRightSection={
          <div>
            <div className="TrackInfoPage__track-by-wrapper">By {track.artistName}</div>

            {track.previewUrl && (
              <audio controls src={track.previewUrl}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            )}
          </div>
        }
      >
        <div>
          <h3 className="TrackInfoPage__movie-list-title">Appears In</h3>

          {movieTracksLoading && <Spinner className="TrackInfoPage__spinner" />}

          {!movieTracksLoading && !!movies && !!movies.length && (
            <div className="TrackInfoPage__movie-list">
              {movies?.map(movie => (
                <MovieTile movie={movie} key={movie.title} />
              ))}
            </div>
          )}
        </div>
      </InfoPageWrapper>
    );
  }

  return null;
};

export default TrackInfoPage;
