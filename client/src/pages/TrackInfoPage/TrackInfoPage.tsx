import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useMusicActions } from '@state/music/actions';
import { useSelector } from 'react-redux';
import { StoreState } from '@state/store-interfaces';
import ImageWithFallback from '@common/components/ImageWithFallback/ImageWithFallback';
import './TrackInfoPage.css';
import BackCircleIcon from '@common/components/BackCircleIcon/BackCircleIcon';
import { useMovieActions } from '@state/movie/actions';

const usePrimeState = () => {
  const { spotifyTrackId } = useParams<{ spotifyTrackId?: string }>();
  const movieActions = useMovieActions();
  const musicActions = useMusicActions();

  useEffect(() => {
    if (spotifyTrackId) {
      musicActions.fetchSelectedTrack(spotifyTrackId);
      movieActions.fetchMovieResults(spotifyTrackId);
    }
  }, []);
};

const TrackInfoPage = () => {
  usePrimeState();
  const history = useHistory();
  const track = useSelector((state: StoreState) => state.music.selectedTrack);
  const movieResults = useSelector((state: StoreState) => state.movie.movieResults);
  const fallbackLetter = track?.name?.charAt(0) || '?';

  const stringMovieResults = JSON.stringify(movieResults);

  if (track) {
    return (
      <div className="TrackInfoPage">
        <BackCircleIcon className="TrackInfoPage__back-button" onClick={() => history.goBack()} />
        <div className="TrackInfoPage__track-wrapper">
          <ImageWithFallback
            className="TrackInfoPage__track-image"
            src={track.mainImage}
            fallback={<div className="TrackInfoPage__image-fallback">{fallbackLetter}</div>}
            alt="Track Fallback Image"
          />

          <div className="TrackInfoPage__track-info">
            <h2 className="TrackInfoPage__track-name">{track.name}</h2>

            <div className="TrackInfoPage__track-by-wrapper">By {track.artistName}</div>

            {track.previewUrl && (
              <audio controls src={track.previewUrl}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            )}
          </div>
        </div>

        <div>{stringMovieResults}</div>
      </div>
    );
  }

  return null;
};

export default TrackInfoPage;
