import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMusicActions } from '@state/music/actions';
import { useSelector } from 'react-redux';
import { StoreState } from '@state/store-interfaces';
import ImageWithFallback from '@common/components/ImageWithFallback/ImageWithFallback';
import './TrackInfoPage.css';

const usePrimeState = () => {
  const { spotifyTrackId } = useParams<{ spotifyTrackId?: string }>();
  const musicActions = useMusicActions();

  useEffect(() => {
    if (spotifyTrackId) {
      musicActions.fetchSelectedTrack(spotifyTrackId);
    }
  }, []);
};

const TrackInfoPage = () => {
  usePrimeState();
  const track = useSelector((state: StoreState) => state.music.selectedTrack);
  const fallbackLetter = track?.name?.charAt(0) || '?';

  if (track) {
    return (
      <div className="TrackInfoPage">
        <h2 className="TrackInfoPage__track-name">{track?.name}</h2>

        <ImageWithFallback
          className="TrackInfoPage__track-image"
          src={track?.mainImage}
          fallback={<div className="TrackInfoPage__image-fallback">{fallbackLetter}</div>}
          alt="Track Fallback Image"
        />

        {track.previewUrl && (
          <audio controls src={track.previewUrl}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        )}
      </div>
    );
  }

  return null;
};

export default TrackInfoPage;
