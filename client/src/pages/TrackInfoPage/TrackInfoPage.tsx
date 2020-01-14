import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ImageWithFallback from '@common/components/ImageWithFallback/ImageWithFallback';
import './TrackInfoPage.css';
import BackCircleIcon from '@common/components/BackCircleIcon/BackCircleIcon';
import { useTrackQuery } from 'graphql/querys/track-query';

const TrackInfoPage = () => {
  const { spotifyTrackId } = useParams<{ spotifyTrackId?: string }>();
  const history = useHistory();
  const { loading, error, track } = useTrackQuery(spotifyTrackId || '');
  const fallbackLetter = track?.name?.charAt(0) || '?';

  if (!loading && track) {
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
      </div>
    );
  }

  return null;
};

export default TrackInfoPage;
